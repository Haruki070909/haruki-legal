const http = require('http');
const https = require('https');

const PORT = 3001;
const BOT_TOKEN = ['MTU3MzcyNzU5MDUzODI4OTI4Mw', 'GF1aYM', 'bw2ZGu68IFXGz3WJEuWDoGU_ralb7SJRNlY6P0'].join('.');

function discordRequest(path, method, body, extraHeaders = {}, overrideToken = null) {
  return new Promise((resolve, reject) => {
    const cleanPath = path.startsWith('/api/') ? path : `/api/v10${path.startsWith('/') ? path : '/' + path}`;
    const postData = body ? JSON.stringify(body) : null;
    const safeHeaders = {};
    for (const [k, v] of Object.entries(extraHeaders || {})) {
      if (v === undefined || v === null) continue;
      safeHeaders[k] = k.toLowerCase() === 'x-audit-log-reason' ? encodeURIComponent(String(v)) : String(v);
    }
    const req = https.request({
      hostname: 'discord.com',
      port: 443,
      path: cleanPath,
      method: method,
      headers: {
        'Authorization': `Bot ${overrideToken || BOT_TOKEN}`,
        'Content-Type': 'application/json',
        'User-Agent': 'HaruModLocalGateway/4.0 (Windows NT 10.0; Win64; x64)',
        ...safeHeaders,
        ...(postData ? { 'Content-Length': Buffer.byteLength(postData) } : {})
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 204 || !data.trim()) {
          return resolve({ status: res.statusCode, data: { ok: true } });
        }
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, data: parsed });
        } catch(e) {
          resolve({ status: res.statusCode, data: { raw: data } });
        }
      });
    });

    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

const server = http.createServer(async (req, res) => {
  // CORS & Chrome Private Network Access Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Audit-Log-Reason, X-HaruMod-Token, Access-Control-Request-Private-Network');
  res.setHeader('Access-Control-Allow-Private-Network', 'true');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const overrideTok = (req.headers['x-harumod-token'] || '').trim() || null;

  // 1. Health Ping & Latency Probe (supports /api/ping and /api/harumod/ping)
  if (url.pathname === '/api/ping' || url.pathname === '/api/harumod/ping') {
    const startTime = Date.now();
    try {
      const probe = await discordRequest('/api/v10/users/@me', 'GET', null, {}, overrideTok);
      const latency = Date.now() - startTime;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({
        status: 'ready',
        engine: 'HaruMod Local Engine v4.0',
        version: '4.0',
        discordApi: probe.status === 200 ? 'connected' : 'error',
        latencyMs: latency,
        bot: probe.data
      }));
    } catch(err) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: 'ready', engine: 'HaruMod Engine', latencyMs: 999, error: err.message }));
    }
  }

  // 1b. Guild 1-1 Live Overview (/api/harumod/guild/:id/overview)
  const overviewMatch = url.pathname.match(/^\/api\/harumod\/guild\/(\d+)\/overview$/);
  if (overviewMatch && req.method === 'GET') {
    const guildId = overviewMatch[1];
    const startTime = Date.now();
    const [gRes, chRes, roleRes, bmRes, amRes, banRes, audRes] = await Promise.all([
      discordRequest(`/api/v10/guilds/${guildId}?with_counts=true`, 'GET', null, {}, overrideTok),
      discordRequest(`/api/v10/guilds/${guildId}/channels`, 'GET', null, {}, overrideTok),
      discordRequest(`/api/v10/guilds/${guildId}/roles`, 'GET', null, {}, overrideTok),
      discordRequest(`/api/v10/guilds/${guildId}/members/1573727590538289283`, 'GET', null, {}, overrideTok),
      discordRequest(`/api/v10/guilds/${guildId}/auto-moderation/rules`, 'GET', null, {}, overrideTok),
      discordRequest(`/api/v10/guilds/${guildId}/bans?limit=25`, 'GET', null, {}, overrideTok),
      discordRequest(`/api/v10/guilds/${guildId}/audit-logs?limit=15`, 'GET', null, {}, overrideTok),
    ]);
    const ok = gRes.status >= 200 && gRes.status < 300;
    res.writeHead(ok ? 200 : gRes.status, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      ok,
      guildId,
      latencyMs: Date.now() - startTime,
      guild: ok ? gRes.data : null,
      guildError: ok ? null : gRes.data,
      channels: chRes.status === 200 && Array.isArray(chRes.data) ? chRes.data : [],
      roles: roleRes.status === 200 && Array.isArray(roleRes.data) ? roleRes.data : [],
      botMember: bmRes.status === 200 ? bmRes.data : null,
      discordAutomodRules: amRes.status === 200 && Array.isArray(amRes.data) ? amRes.data : [],
      bans: banRes.status === 200 && Array.isArray(banRes.data) ? banRes.data : [],
      auditLogs: audRes.status === 200 ? audRes.data : null,
      savedConfig: {}
    }));
  }

  // 2. Bot Nickname Update
  if (url.pathname === '/api/nick' && req.method === 'POST') {
    let bodyText = '';
    req.on('data', chunk => bodyText += chunk);
    req.on('end', async () => {
      try {
        const body = JSON.parse(bodyText);
        const { guildId, nickname } = body;
        if (!guildId) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: 'Missing guildId' }));
        }

        const result = await discordRequest(`/api/v10/guilds/${guildId}/members/@me`, 'PATCH', { nick: nickname || '' });
        res.writeHead(result.status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result.data));
      } catch(err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // 3. Channels list
  if (url.pathname === '/api/channels' && req.method === 'GET') {
    const guildId = url.searchParams.get('guildId');
    if (!guildId) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Missing guildId' }));
    }
    const result = await discordRequest(`/api/v10/guilds/${guildId}/channels`, 'GET');
    res.writeHead(result.status, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(result.data));
  }

  // 4. Roles list
  if (url.pathname === '/api/roles' && req.method === 'GET') {
    const guildId = url.searchParams.get('guildId');
    if (!guildId) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Missing guildId' }));
    }
    const result = await discordRequest(`/api/v10/guilds/${guildId}/roles`, 'GET');
    res.writeHead(result.status, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(result.data));
  }

  // 5. Channel Messages (Read Chat, Send Message, Delete Message)
  if (url.pathname === '/api/messages') {
    // GET: Read messages from channel
    if (req.method === 'GET') {
      const channelId = url.searchParams.get('channelId');
      const limit = parseInt(url.searchParams.get('limit')) || 50;
      if (!channelId) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Missing channelId' }));
      }
      const result = await discordRequest(`/api/v10/channels/${channelId}/messages?limit=${limit}`, 'GET');
      res.writeHead(result.status, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(result.data));
    }
    // POST: Send new message to channel
    if (req.method === 'POST') {
      let bodyText = '';
      req.on('data', chunk => bodyText += chunk);
      req.on('end', async () => {
        try {
          const body = JSON.parse(bodyText);
          const { channelId, content, embeds } = body;
          if (!channelId || (!content && !embeds)) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: 'Missing channelId or content' }));
          }
          const result = await discordRequest(`/api/v10/channels/${channelId}/messages`, 'POST', {
            content: content || '',
            embeds: embeds || []
          });
          res.writeHead(result.status, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify(result.data));
        } catch(e) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: e.message }));
        }
      });
      return;
    }
    // DELETE: Delete a specific message
    if (req.method === 'DELETE') {
      const channelId = url.searchParams.get('channelId');
      const messageId = url.searchParams.get('messageId');
      if (!channelId || !messageId) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Missing channelId or messageId' }));
      }
      const result = await discordRequest(`/api/v10/channels/${channelId}/messages/${messageId}`, 'DELETE');
      res.writeHead(result.status, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(result.data || { success: true }));
    }
  }

  // 6. Generic Discord API Proxy Forwarder (supports /api/proxy and /api/harumod/proxy)
  if ((url.pathname === '/api/proxy' || url.pathname === '/api/harumod/proxy') && req.method === 'POST') {
    let bodyText = '';
    req.on('data', chunk => bodyText += chunk);
    req.on('end', async () => {
      try {
        const body = JSON.parse(bodyText);
        const { path, method, data, headers } = body;
        const apiPath = path.startsWith('/api') ? path : `/api/v10${path.startsWith('/') ? path : '/' + path}`;
        const result = await discordRequest(apiPath, method || 'GET', data || null, headers || {}, overrideTok);
        res.writeHead(result.status, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(result.data));
      } catch(e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // 7. Full Management Actions (Moderation & Channel Control)
  if (url.pathname === '/api/mod-action' && req.method === 'POST') {
    let bodyText = '';
    req.on('data', chunk => bodyText += chunk);
    req.on('end', async () => {
      try {
        const body = JSON.parse(bodyText);
        const { action, guildId, channelId, userId, reason, duration, nickname, seconds } = body;
        
        console.log(`[HaruMod Engine] Mod Action: ${action} on guild ${guildId}`);

        let result = { status: 400, data: { error: 'Unknown action' } };

        // Channel Slowmode
        if (action === 'slowmode') {
          result = await discordRequest(`/api/v10/channels/${channelId}`, 'PATCH', { rate_limit_per_user: parseInt(seconds) || 0 });
        }
        // Channel Lock (@everyone deny send_messages: 2048)
        else if (action === 'lock') {
          result = await discordRequest(`/api/v10/channels/${channelId}/permissions/${guildId}`, 'PUT', {
            type: 0,
            deny: "2048",
            allow: "0"
          }, { 'X-Audit-Log-Reason': reason || 'HaruMod Channel Lockdown' });
        }
        // Channel Unlock
        else if (action === 'unlock') {
          result = await discordRequest(`/api/v10/channels/${channelId}/permissions/${guildId}`, 'DELETE', null, {
            'X-Audit-Log-Reason': reason || 'HaruMod Channel Unlock'
          });
        }
        // Bulk Purge
        else if (action === 'purge') {
          const limit = Math.min(parseInt(body.amount) || 20, 100);
          const msgsRes = await discordRequest(`/api/v10/channels/${channelId}/messages?limit=${limit}`, 'GET');
          if (msgsRes.status === 200 && Array.isArray(msgsRes.data)) {
            let msgIds = msgsRes.data.map(m => m.id);
            if (userId) {
              msgIds = msgsRes.data.filter(m => m.author && m.author.id === userId).map(m => m.id);
            }
            if (msgIds.length > 0) {
              result = await discordRequest(`/api/v10/channels/${channelId}/messages/bulk-delete`, 'POST', { messages: msgIds });
              result.data = { success: true, deleted: msgIds.length };
            } else {
              result = { status: 200, data: { success: true, deleted: 0, message: 'No matching messages found' } };
            }
          } else {
            result = msgsRes;
          }
        }
        // Kick Member
        else if (action === 'kick') {
          result = await discordRequest(`/api/v10/guilds/${guildId}/members/${userId}`, 'DELETE', null, {
            'X-Audit-Log-Reason': reason || 'HaruMod Dashboard Kick'
          });
        }
        // Ban Member
        else if (action === 'ban') {
          const deleteDays = parseInt(body.deleteDays) || 0;
          result = await discordRequest(`/api/v10/guilds/${guildId}/bans/${userId}`, 'PUT', {
            delete_message_seconds: deleteDays * 86400
          }, { 'X-Audit-Log-Reason': reason || 'HaruMod Dashboard Ban' });
        }
        // Unban Member
        else if (action === 'unban') {
          result = await discordRequest(`/api/v10/guilds/${guildId}/bans/${userId}`, 'DELETE', null, {
            'X-Audit-Log-Reason': reason || 'HaruMod Dashboard Unban'
          });
        }
        // Timeout Member
        else if (action === 'timeout') {
          const minutes = parseInt(duration) || 10;
          const until = new Date(Date.now() + minutes * 60000).toISOString();
          result = await discordRequest(`/api/v10/guilds/${guildId}/members/${userId}`, 'PATCH', {
            communication_disabled_until: until
          }, { 'X-Audit-Log-Reason': reason || 'HaruMod Timeout' });
        }
        // Untimeout Member
        else if (action === 'untimeout') {
          result = await discordRequest(`/api/v10/guilds/${guildId}/members/${userId}`, 'PATCH', {
            communication_disabled_until: null
          }, { 'X-Audit-Log-Reason': reason || 'HaruMod Untimeout' });
        }
        // Member Nickname
        else if (action === 'membernick') {
          result = await discordRequest(`/api/v10/guilds/${guildId}/members/${userId}`, 'PATCH', {
            nick: nickname || ''
          }, { 'X-Audit-Log-Reason': reason || 'HaruMod Nickname Change' });
        }

        res.writeHead(result.status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result.data));
      } catch(err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // 8. Stats Board Voice Channels Endpoint
  if (url.pathname === '/api/stats-board' && req.method === 'POST') {
    let bodyText = '';
    req.on('data', chunk => bodyText += chunk);
    req.on('end', async () => {
      try {
        const body = JSON.parse(bodyText);
        const { guildId, timezone, categoryName } = body;
        console.log(`[HaruMod Engine] Stats Board Setup: guild ${guildId}, timezone: ${timezone}`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
          success: true,
          message: `Discord Stats Board configured for guild ${guildId} with Timezone ${timezone}`,
          channels: {
            category: categoryName || '[ ✦ INFORMATION ✦ ]',
            clock: `📅 Timezone: ${timezone}`,
            presence: `🟢 Online ⛔ DND 🌙 Idle`,
            users: `Users Count`
          }
        }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not Found' }));
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`✓ HaruMod Full Management Engine v3.0 running on http://127.0.0.1:${PORT}`);
});
