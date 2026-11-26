var kb=Object.defineProperty;var Gb=(o,t,i)=>t in o?kb(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var Ot=(o,t,i)=>Gb(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Vb(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Oh={exports:{}},_l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function jb(){if(kv)return _l;kv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return _l.Fragment=t,_l.jsx=i,_l.jsxs=i,_l}var Gv;function qb(){return Gv||(Gv=1,Oh.exports=jb()),Oh.exports}var h=qb(),Ph={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function Xb(){if(Vv)return _t;Vv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),M=Symbol.iterator;function w(A){return A===null||typeof A!="object"?null:(A=M&&A[M]||A["@@iterator"],typeof A=="function"?A:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function T(A,K,pe){this.props=A,this.context=K,this.refs=S,this.updater=pe||N}T.prototype.isReactComponent={},T.prototype.setState=function(A,K){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,K,"setState")},T.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function O(){}O.prototype=T.prototype;function U(A,K,pe){this.props=A,this.context=K,this.refs=S,this.updater=pe||N}var z=U.prototype=new O;z.constructor=U,b(z,T.prototype),z.isPureReactComponent=!0;var I=Array.isArray;function E(){}var L={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function F(A,K,pe){var ye=pe.ref;return{$$typeof:o,type:A,key:K,ref:ye!==void 0?ye:null,props:pe}}function G(A,K){return F(A.type,K,A.props)}function Z(A){return typeof A=="object"&&A!==null&&A.$$typeof===o}function he(A){var K={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(pe){return K[pe]})}var q=/\/+/g;function ae(A,K){return typeof A=="object"&&A!==null&&A.key!=null?he(""+A.key):K.toString(36)}function P(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(E,E):(A.status="pending",A.then(function(K){A.status==="pending"&&(A.status="fulfilled",A.value=K)},function(K){A.status==="pending"&&(A.status="rejected",A.reason=K)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function H(A,K,pe,ye,be){var Ne=typeof A;(Ne==="undefined"||Ne==="boolean")&&(A=null);var et=!1;if(A===null)et=!0;else switch(Ne){case"bigint":case"string":case"number":et=!0;break;case"object":switch(A.$$typeof){case o:case t:et=!0;break;case _:return et=A._init,H(et(A._payload),K,pe,ye,be)}}if(et)return be=be(A),et=ye===""?"."+ae(A,0):ye,I(be)?(pe="",et!=null&&(pe=et.replace(q,"$&/")+"/"),H(be,K,pe,"",function(J){return J})):be!=null&&(Z(be)&&(be=G(be,pe+(be.key==null||A&&A.key===be.key?"":(""+be.key).replace(q,"$&/")+"/")+et)),K.push(be)),1;et=0;var Re=ye===""?".":ye+":";if(I(A))for(var He=0;He<A.length;He++)ye=A[He],Ne=Re+ae(ye,He),et+=H(ye,K,pe,Ne,be);else if(He=w(A),typeof He=="function")for(A=He.call(A),He=0;!(ye=A.next()).done;)ye=ye.value,Ne=Re+ae(ye,He++),et+=H(ye,K,pe,Ne,be);else if(Ne==="object"){if(typeof A.then=="function")return H(P(A),K,pe,ye,be);throw K=String(A),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return et}function ie(A,K,pe){if(A==null)return A;var ye=[],be=0;return H(A,ye,"","",function(Ne){return K.call(pe,Ne,be++)}),ye}function Q(A){if(A._status===-1){var K=A._result,pe=K();pe.then(function(ye){(A._status===0||A._status===-1)&&(A._status=1,A._result=ye,pe.status===void 0&&(pe.status="fulfilled",pe.value=ye))},function(ye){(A._status===0||A._status===-1)&&(A._status=2,A._result=ye,pe.status===void 0&&(pe.status="rejected",pe.reason=ye))}),A._status===-1&&(A._status=0,A._result=pe)}if(A._status===1)return A._result.default;throw A._result}var ce=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function Se(A){var K=L.T,pe={};pe.types=K!==null?K.types:null,L.T=pe;try{var ye=A(),be=L.S;be!==null&&be(pe,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(E,ce)}catch(Ne){ce(Ne)}finally{K!==null&&pe.types!==null&&(K.types=pe.types),L.T=K}}function je(A){var K=L.T;if(K!==null){var pe=K.types;pe===null?K.types=[A]:pe.indexOf(A)===-1&&pe.push(A)}else Se(je.bind(null,A))}var Ze={map:ie,forEach:function(A,K,pe){ie(A,function(){K.apply(this,arguments)},pe)},count:function(A){var K=0;return ie(A,function(){K++}),K},toArray:function(A){return ie(A,function(K){return K})||[]},only:function(A){if(!Z(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return _t.Activity=g,_t.Children=Ze,_t.Component=T,_t.Fragment=i,_t.Profiler=l,_t.PureComponent=U,_t.StrictMode=s,_t.Suspense=x,_t.ViewTransition=v,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,_t.__COMPILER_RUNTIME={__proto__:null,c:function(A){return L.H.useMemoCache(A)}},_t.addTransitionType=je,_t.cache=function(A){return function(){return A.apply(null,arguments)}},_t.cacheSignal=function(){return null},_t.cloneElement=function(A,K,pe){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var ye=b({},A.props),be=A.key;if(K!=null)for(Ne in K.key!==void 0&&(be=""+K.key),K)!Y.call(K,Ne)||Ne==="key"||Ne==="__self"||Ne==="__source"||Ne==="ref"&&K.ref===void 0||(ye[Ne]=K[Ne]);var Ne=arguments.length-2;if(Ne===1)ye.children=pe;else if(1<Ne){for(var et=Array(Ne),Re=0;Re<Ne;Re++)et[Re]=arguments[Re+2];ye.children=et}return F(A.type,be,ye)},_t.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},_t.createElement=function(A,K,pe){var ye,be={},Ne=null;if(K!=null)for(ye in K.key!==void 0&&(Ne=""+K.key),K)Y.call(K,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(be[ye]=K[ye]);var et=arguments.length-2;if(et===1)be.children=pe;else if(1<et){for(var Re=Array(et),He=0;He<et;He++)Re[He]=arguments[He+2];be.children=Re}if(A&&A.defaultProps)for(ye in et=A.defaultProps,et)be[ye]===void 0&&(be[ye]=et[ye]);return F(A,Ne,be)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(A){return{$$typeof:p,render:A}},_t.isValidElement=Z,_t.lazy=function(A){return{$$typeof:_,_payload:{_status:-1,_result:A},_init:Q}},_t.memo=function(A,K){return{$$typeof:m,type:A,compare:K===void 0?null:K}},_t.startTransition=Se,_t.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},_t.use=function(A){return L.H.use(A)},_t.useActionState=function(A,K,pe){return L.H.useActionState(A,K,pe)},_t.useCallback=function(A,K){return L.H.useCallback(A,K)},_t.useContext=function(A){return L.H.useContext(A)},_t.useDebugValue=function(){},_t.useDeferredValue=function(A,K){return L.H.useDeferredValue(A,K)},_t.useEffect=function(A,K){return L.H.useEffect(A,K)},_t.useEffectEvent=function(A){return L.H.useEffectEvent(A)},_t.useId=function(){return L.H.useId()},_t.useImperativeHandle=function(A,K,pe){return L.H.useImperativeHandle(A,K,pe)},_t.useInsertionEffect=function(A,K){return L.H.useInsertionEffect(A,K)},_t.useLayoutEffect=function(A,K){return L.H.useLayoutEffect(A,K)},_t.useMemo=function(A,K){return L.H.useMemo(A,K)},_t.useOptimistic=function(A,K){return L.H.useOptimistic(A,K)},_t.useReducer=function(A,K,pe){return L.H.useReducer(A,K,pe)},_t.useRef=function(A){return L.H.useRef(A)},_t.useState=function(A){return L.H.useState(A)},_t.useSyncExternalStore=function(A,K,pe){return L.H.useSyncExternalStore(A,K,pe)},_t.useTransition=function(){return L.H.useTransition()},_t.version="19.3.1",_t}var jv;function pm(){return jv||(jv=1,Ph.exports=Xb()),Ph.exports}var ke=pm();const Fh=Vb(ke);var Ih={exports:{}},yl={},Bh={exports:{}},zh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function Wb(){return qv||(qv=1,(function(o){function t(P,H){var ie=P.length;P.push(H);e:for(;0<ie;){var Q=ie-1>>>1,ce=P[Q];if(0<l(ce,H))P[Q]=H,P[ie]=ce,ie=Q;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var H=P[0],ie=P.pop();if(ie!==H){P[0]=ie;e:for(var Q=0,ce=P.length,Se=ce>>>1;Q<Se;){var je=2*(Q+1)-1,Ze=P[je],A=je+1,K=P[A];if(0>l(Ze,ie))A<ce&&0>l(K,Ze)?(P[Q]=K,P[A]=ie,Q=A):(P[Q]=Ze,P[je]=ie,Q=je);else if(A<ce&&0>l(K,ie))P[Q]=K,P[A]=ie,Q=A;else break e}}return H}function l(P,H){var ie=P.sortIndex-H.sortIndex;return ie!==0?ie:P.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var x=[],m=[],_=1,g=null,v=3,M=!1,w=!1,N=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var H=i(m);H!==null;){if(H.callback===null)s(m);else if(H.startTime<=P)s(m),H.sortIndex=H.expirationTime,t(x,H);else break;H=i(m)}}function z(P){if(N=!1,U(P),!w)if(i(x)!==null)w=!0,I||(I=!0,Z());else{var H=i(m);H!==null&&ae(z,H.startTime-P)}}var I=!1,E=-1,L=5,Y=-1;function F(){return b?!0:!(o.unstable_now()-Y<L)}function G(){if(b=!1,I){var P=o.unstable_now();Y=P;var H=!0;try{e:{w=!1,N&&(N=!1,T(E),E=-1),M=!0;var ie=v;try{t:{for(U(P),g=i(x);g!==null&&!(g.expirationTime>P&&F());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,v=g.priorityLevel;var ce=Q(g.expirationTime<=P);if(P=o.unstable_now(),typeof ce=="function"){g.callback=ce,U(P),H=!0;break t}g===i(x)&&s(x),U(P)}else s(x);g=i(x)}if(g!==null)H=!0;else{var Se=i(m);Se!==null&&ae(z,Se.startTime-P),H=!1}}break e}finally{g=null,v=ie,M=!1}H=void 0}}finally{H?Z():I=!1}}}var Z;if(typeof O=="function")Z=function(){O(G)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,q=he.port2;he.port1.onmessage=G,Z=function(){q.postMessage(null)}}else Z=function(){S(G,0)};function ae(P,H){E=S(function(){P(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(P){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var ie=v;v=H;try{return P()}finally{v=ie}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ie=v;v=P;try{return H()}finally{v=ie}},o.unstable_scheduleCallback=function(P,H,ie){var Q=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Q+ie:Q):ie=Q,P){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=ie+ce,P={id:_++,callback:H,priorityLevel:P,startTime:ie,expirationTime:ce,sortIndex:-1},ie>Q?(P.sortIndex=ie,t(m,P),i(x)===null&&P===i(m)&&(N?(T(E),E=-1):N=!0,ae(z,ie-Q))):(P.sortIndex=ce,t(x,P),w||M||(w=!0,I||(I=!0,Z()))),P},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(P){var H=v;return function(){var ie=v;v=H;try{return P.apply(this,arguments)}finally{v=ie}}}})(zh)),zh}var Xv;function Yb(){return Xv||(Xv=1,Bh.exports=Wb()),Bh.exports}var Hh={exports:{}},qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function Kb(){if(Wv)return qn;Wv=1;var o=pm();function t(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function p(_,g,v){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===d?d:""+M,children:_,containerInfo:g,implementation:v}}var x=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,qn.browser=function(_){return{$$typeof:u,_reason:_}},qn.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return p(_,g,null,v)},qn.flushSync=function(_){var g=x.T,v=s.p;try{if(x.T=null,s.p=2,_)return _()}finally{x.T=g,s.p=v,s.d.f()}},qn.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(_,g))},qn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},qn.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,M=m(v,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,N=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:w,fetchPriority:N}):v==="script"&&s.d.X(_,{crossOrigin:M,integrity:w,fetchPriority:N,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},qn.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);s.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(_)},qn.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,M=m(v,g.crossOrigin);s.d.L(_,v,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},qn.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=m(g.as,g.crossOrigin);s.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(_)},qn.requestFormReset=function(_){s.d.r(_)},qn.unstable_batchedUpdates=function(_,g){return _(g)},qn.useFormState=function(_,g,v){return x.H.useFormState(_,g,v)},qn.useFormStatus=function(){return x.H.useHostTransitionStatus()},qn.version="19.3.1",qn}var Yv;function Zb(){if(Yv)return Hh.exports;Yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Hh.exports=Kb(),Hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function Qb(){if(Kv)return yl;Kv=1;var o=Yb(),t=pm(),i=Zb();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function x(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return x(c),e;if(f===r)return x(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var y=!1,C=c.child;C;){if(C===a){y=!0,a=c,r=f;break}if(C===r){y=!0,r=c,a=f;break}C=C.sibling}if(!y){for(C=f.child;C;){if(C===a){y=!0,a=f,r=c;break}if(C===r){y=!0,r=f,a=c;break}C=C.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,r,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,r,c,f))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function M(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function w(e){var n=[null,null],a=v(e);return a===null||N(n,e,a.child,{foundSelf:!1}),n}function N(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&N(e,n,a.child,r))return!0;a=a.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,T=null;function O(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function U(e,n,a){return e===a?(T=e,!1):e===n?(T!==null&&(S=e),!0):!1}function z(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function I(e,n,a){for(var r=0,c=e;c;c=a(c))r++;c=0;for(var f=n;f;f=a(f))c++;for(;0<r-c;)e=a(e),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var E=Object.assign,L=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),je=Symbol.for("react.legacy_hidden"),Ze=Symbol.for("react.memo_cache_sentinel"),A=Symbol.for("react.view_transition"),K=Symbol.for("react.recoverable"),pe=Symbol.iterator;function ye(e){return e===null||typeof e!="object"?null:(e=pe&&e[pe]||e["@@iterator"],typeof e=="function"?e:null)}var be=Symbol.for("react.client.reference");function Ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case he:return"Profiler";case Z:return"StrictMode";case H:return"Suspense";case ie:return"SuspenseList";case Se:return"Activity";case A:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case ae:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return n=e.displayName||null,n!==null?n:Ne(e.type)||"Memo";case ce:n=e._payload,e=e._init;try{return Ne(e(n))}catch{}}return null}var et=Array.isArray,Re=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,He=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},De=[],xt=-1;function mt(e){return{current:e}}function St(e){0>xt||(e.current=De[xt],De[xt]=null,xt--)}function Ke(e,n){xt++,De[xt]=e.current,e.current=n}var de=mt(null),rt=mt(null),ut=mt(null),Wt=mt(null);function gt(e,n){switch(Ke(ut,n),Ke(rt,e),Ke(de,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Zx(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Zx(n),e=Qx(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}St(de),Ke(de,e)}function V(){St(de),St(rt),St(ut)}function Nt(e){var n=e.memoizedState;n!==null&&(to._currentValue=n.memoizedState,Ke(Wt,e)),n=de.current;var a=Qx(n,e.type);n!==a&&(Ke(rt,e),Ke(de,a))}function ct(e){rt.current===e&&(St(de),St(rt)),Wt.current===e&&(St(Wt),to._currentValue=J)}var vt,Pe;function jt(e){if(vt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);vt=n&&n[1]||"",Pe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+e+Pe}var it=!1;function ot(e,n){if(!e||it)return"";it=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(Xe){var $=Xe}Reflect.construct(e,[],Ae)}else{try{Ae.call()}catch(Xe){$=Xe}Ae=!1;try{var fe=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ae=!0,new e}finally{Ae&&(fe!==void 0?Object.defineProperty(e.prototype,"props",fe):delete e.prototype.props)}}}else{try{throw Error()}catch(Xe){$=Xe}(Ae=e())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(Xe){if(Xe&&$&&typeof Xe.stack=="string")return[Xe.stack,$.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),y=f[0],C=f[1];if(y&&C){var k=y.split(`
`),te=C.split(`
`);for(c=r=0;r<k.length&&!k[r].includes("DetermineComponentFrameRoot");)r++;for(;c<te.length&&!te[c].includes("DetermineComponentFrameRoot");)c++;if(r===k.length||c===te.length)for(r=k.length-1,c=te.length-1;1<=r&&0<=c&&k[r]!==te[c];)c--;for(;1<=r&&0<=c;r--,c--)if(k[r]!==te[c]){if(r!==1||c!==1)do if(r--,c--,0>c||k[r]!==te[c]){var me=`
`+k[r].replace(" at new "," at ");return e.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",e.displayName)),me}while(1<=r&&0<=c);break}}}finally{it=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?jt(a):""}function B(e,n){switch(e.tag){case 26:case 27:case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return e.child!==n&&n!==null?jt("Suspense Fallback"):jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return jt("Activity");case 30:return jt("ViewTransition");default:return""}}function R(e){try{var n="",a=null;do n+=B(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var re=Object.prototype.hasOwnProperty,we=o.unstable_scheduleCallback,ve=o.unstable_cancelCallback,Fe=o.unstable_shouldYield,Ge=o.unstable_requestPaint,xe=o.unstable_now,Ee=o.unstable_getCurrentPriorityLevel,Ie=o.unstable_ImmediatePriority,j=o.unstable_UserBlockingPriority,Me=o.unstable_NormalPriority,_e=o.unstable_LowPriority,Be=o.unstable_IdlePriority,Le=o.log,ze=o.unstable_setDisableYieldValue,st=null,ft=null;function Ce(e){if(typeof Le=="function"&&ze(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(st,e)}catch{}}var Je=Math.clz32?Math.clz32:Kt,Tt=Math.log,We=Math.LN2;function Kt(e){return e>>>=0,e===0?32:31-(Tt(e)/We|0)|0}var dn=256,hi=262144,Fs=4194304;function Hi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pr(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var C=r&134217727;return C!==0?(r=C&~f,r!==0?c=Hi(r):(y&=C,y!==0?c=Hi(y):a||(a=C&~e,a!==0&&(c=Hi(a))))):(C=r&~f,C!==0?c=Hi(C):y!==0?c=Hi(y):a||(a=r&~e,a!==0&&(c=Hi(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Za(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ao(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-Je(a),c=1<<r;n|=e[r],a&=~c}return n}function Ma(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mr(){var e=Fs;return Fs<<=1,(Fs&62914560)===0&&(Fs=4194304),e}function gr(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Qa(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xr(e,n,a,r,c,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,k=e.expirationTimes,te=e.hiddenUpdates;for(a=y&~a;0<a;){var me=31-Je(a),Ae=1<<me;C[me]=0,k[me]=-1;var $=te[me];if($!==null)for(te[me]=null,me=0;me<$.length;me++){var fe=$[me];fe!==null&&(fe.lane&=-536870913)}a&=~Ae}r!==0&&wo(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function wo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Je(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ro(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Je(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Ja(e,n){var a=n&-n;return a=(a&42)!==0?1:Co(a),(a&(e.suspendedLanes|n))!==0?0:a}function Co(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function No(){var e=He.p;return e!==0?e:(e=window.event,e===void 0?32:Ov(e.type))}function ql(e,n){var a=He.p;try{return He.p=e,n()}finally{He.p=a}}var ki=Math.random().toString(36).slice(2),Rn="__reactFiber$"+ki,zn="__reactProps$"+ki,D="__reactContainer$"+ki,X="__reactEvents$"+ki,ge="__reactListeners$"+ki,le="__reactHandles$"+ki,ue="__reactResources$"+ki,Ue="__reactMarker$"+ki,Qe="__reactLoad$"+ki;function Oe(e){delete e[Rn],delete e[zn],delete e[ge],delete e[le]}function qe(e){var n;if(n=e[Rn])return n;for(var a=e.parentNode;a;){if(n=a[D]||a[Rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=pv(e);e!==null;){if(a=e[Rn])return a;e=pv(e)}return n}e=a,a=e.parentNode}return null}function tt(e){if(e=e[Rn]||e[D]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function dt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function At(e){var n=e[ue];return n||(n=e[ue]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ve(e){e[Ue]=!0}function Lt(e){e[Qe]=void 0}var hn=new Set,en={};function Ht(e,n){pn(e,n),pn(e+"Capture",n)}function pn(e,n){for(en[e]=n,e=0;e<n.length;e++)hn.add(n[e])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Un={},qt={};function Ea(e){return re.call(qt,e)?!0:re.call(Un,e)?!1:nt.test(e)?qt[e]=!0:(Un[e]=!0,!1)}var pt=!1;function Is(){var e=pt;return pt=!1,e}function pi(e,n,a){if(Ea(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function Ei(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function wt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function Zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function si(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function un(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function vn(e){if(!e._valueTracker){var n=si(e)?"checked":"value";e._valueTracker=un(e,n,""+e[n])}}function Ti(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=si(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var Xl=/[\n"\\]/g;function Ai(e){return e.replace(Xl,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ff(e,n,a,r,c,f,y,C){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Zt(n)):e.value!==""+Zt(n)&&(e.value=""+Zt(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?y==="number"&&e.value==n?df(e,Zt(e.value)):df(e,Zt(n)):a!=null?df(e,Zt(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+Zt(C):e.removeAttribute("name")}function zm(e,n,a,r,c,f,y,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){vn(e);return}a=a!=null?""+Zt(a):"",n=n!=null?""+Zt(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=C?e.checked:!!r,e.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),vn(e)}function df(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function _r(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Zt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Hm(e,n,a){if(n!=null&&(n=""+Zt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Zt(a):""}function km(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(et(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Zt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),vn(e)}function yr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var cS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||cS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Vm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",pt=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Gm(e,c,r),pt=!0)}else for(var f in n)n.hasOwnProperty(f)&&Gm(e,f,n[f])}function hf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wl(e){return fS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var pf=null;function mf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sr=null,br=null;function jm(e){var n=tt(e);if(n&&(e=n.stateNode)){var a=e[zn]||null;e:switch(e=n.stateNode,n.type){case"input":if(ff(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ai(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[zn]||null;if(!c)throw Error(s(90));ff(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ti(r)}break e;case"textarea":Hm(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_r(e,!!a.multiple,n,!1)}}}var gf=!1;function qm(e,n,a){if(gf)return e(n,a);gf=!0;try{var r=e(n);return r}finally{if(gf=!1,(Sr!==null||br!==null)&&(Wc(),Sr&&(n=Sr,e=br,br=Sr=null,jm(n),e)))for(n=0;n<e.length;n++)jm(e[n])}}function Do(e,n){var a=e.stateNode;if(a===null)return null;var r=a[zn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xf=!1;if(Ta)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){xf=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{xf=!1}var $a=null,vf=null,Yl=null;function Xm(){if(Yl)return Yl;var e,n=vf,a=n.length,r,c="value"in $a?$a.value:$a.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(r=1;r<=y&&n[a-r]===c[f-r];r++);return Yl=c.slice(e,1<r?1-r:void 0)}function Kl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zl(){return!0}function Wm(){return!1}function Qn(e){function n(a,r,c,f,y){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zl:Wm,this.isPropagationStopped=Wm,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),n}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=Qn(es),Uo=E({},es,{view:0,detail:0}),dS=Qn(Uo),_f,yf,Oo,Jl=E({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oo&&(Oo&&e.type==="mousemove"?(_f=e.screenX-Oo.screenX,yf=e.screenY-Oo.screenY):yf=_f=0,Oo=e),_f)},movementY:function(e){return"movementY"in e?e.movementY:yf}}),Ym=Qn(Jl),hS=E({},Jl,{dataTransfer:0}),pS=Qn(hS),mS=E({},Uo,{relatedTarget:0}),Sf=Qn(mS),gS=E({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),xS=Qn(gS),vS=E({},es,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_S=Qn(vS),yS=E({},es,{data:0}),Km=Qn(yS),SS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ES(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=MS[e])?!!n[e]:!1}function bf(){return ES}var TS=E({},Uo,{key:function(e){if(e.key){var n=SS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(e){return e.type==="keypress"?Kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),AS=Qn(TS),wS=E({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=Qn(wS),RS=E({},es,{submitter:0}),CS=Qn(RS),NS=E({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),DS=Qn(NS),LS=E({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),US=Qn(LS),OS=E({},Jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),PS=Qn(OS),FS=E({},es,{newState:0,oldState:0,source:0}),IS=Qn(FS),BS=[9,13,27,32],Mf=Ta&&"CompositionEvent"in window,Po=null;Ta&&"documentMode"in document&&(Po=document.documentMode);var zS=Ta&&"TextEvent"in window&&!Po,Qm=Ta&&(!Mf||Po&&8<Po&&11>=Po),Jm=" ",$m=!1;function e0(e,n){switch(e){case"keyup":return BS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mr=!1;function HS(e,n){switch(e){case"compositionend":return t0(n);case"keypress":return n.which!==32?null:($m=!0,Jm);case"textInput":return e=n.data,e===Jm&&$m?null:e;default:return null}}function kS(e,n){if(Mr)return e==="compositionend"||!Mf&&e0(e,n)?(e=Xm(),Yl=vf=$a=null,Mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qm&&n.locale!=="ko"?null:n.data;default:return null}}var GS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!GS[e.type]:n==="textarea"}function i0(e,n,a,r){Sr?br?br.push(r):br=[r]:Sr=r,n=$c(n,"onChange"),0<n.length&&(a=new Ql("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Fo=null,Io=null;function VS(e){jx(e,0)}function $l(e){var n=dt(e);if(Ti(n))return e}function a0(e,n){if(e==="change")return n}var s0=!1;if(Ta){var Ef;if(Ta){var Tf="oninput"in document;if(!Tf){var r0=document.createElement("div");r0.setAttribute("oninput","return;"),Tf=typeof r0.oninput=="function"}Ef=Tf}else Ef=!1;s0=Ef&&(!document.documentMode||9<document.documentMode)}function o0(){Fo&&(Fo.detachEvent("onpropertychange",l0),Io=Fo=null)}function l0(e){if(e.propertyName==="value"&&$l(Io)){var n=[];i0(n,Io,e,mf(e)),qm(VS,n)}}function jS(e,n,a){e==="focusin"?(o0(),Fo=n,Io=a,Fo.attachEvent("onpropertychange",l0)):e==="focusout"&&o0()}function qS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(Io)}function XS(e,n){if(e==="click")return $l(n)}function WS(e,n){if(e==="input"||e==="change")return $l(n)}function YS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var mi=typeof Object.is=="function"?Object.is:YS;function Bo(e,n){if(mi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!re.call(n,c)||!mi(e[c],n[c]))return!1}return!0}function Af(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function c0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function u0(e,n){var a=c0(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=c0(a)}}function f0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?f0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function d0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Af(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Af(e.document)}return n}function wf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var KS=Ta&&"documentMode"in document&&11>=document.documentMode,Er=null,Rf=null,zo=null,Cf=!1;function h0(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cf||Er==null||Er!==Af(r)||(r=Er,"selectionStart"in r&&wf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&Bo(zo,r)||(zo=r,r=$c(Rf,"onSelect"),0<r.length&&(n=new Ql("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Er)))}function Bs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Tr={animationend:Bs("Animation","AnimationEnd"),animationiteration:Bs("Animation","AnimationIteration"),animationstart:Bs("Animation","AnimationStart"),transitionrun:Bs("Transition","TransitionRun"),transitionstart:Bs("Transition","TransitionStart"),transitioncancel:Bs("Transition","TransitionCancel"),transitionend:Bs("Transition","TransitionEnd")},Nf={},p0={};Ta&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function zs(e){if(Nf[e])return Nf[e];if(!Tr[e])return e;var n=Tr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in p0)return Nf[e]=n[a];return e}var m0=zs("animationend"),g0=zs("animationiteration"),x0=zs("animationstart"),ZS=zs("transitionrun"),QS=zs("transitionstart"),JS=zs("transitioncancel"),v0=zs("transitionend"),_0=new Map,Df="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Df.push("scrollEnd");function Gi(e,n){_0.set(e,n),Ht(n,[e])}var $S=0;function Aa(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Xi.identifierPrefix;var a=$S++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function y0(e){if(e==null||typeof e=="string")return e;var n=null,a=qr;if(a!==null)for(var r=0;r<a.length;r++){var c=e[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function wa(e,n){return e=y0(e),n=y0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var ec=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wi=[],Ar=0,Lf=0;function tc(){for(var e=Ar,n=Lf=Ar=0;n<e;){var a=wi[n];wi[n++]=null;var r=wi[n];wi[n++]=null;var c=wi[n];wi[n++]=null;var f=wi[n];if(wi[n++]=null,r!==null&&c!==null){var y=r.pending;y===null?c.next=c:(c.next=y.next,y.next=c),r.pending=c}f!==0&&S0(a,c,f)}}function nc(e,n,a,r){wi[Ar++]=e,wi[Ar++]=n,wi[Ar++]=a,wi[Ar++]=r,Lf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Uf(e,n,a,r){return nc(e,n,a,r),ic(e)}function Hs(e,n){return nc(e,null,null,n),ic(e)}function S0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Je(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function ic(e){if(50<ol)throw ol=0,Xc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var wr={};function e1(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,n,a,r){return new e1(e,n,a,r)}function Of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ra(e,n){var a=e.alternate;return a===null?(a=ri(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function b0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ac(e,n,a,r,c,f){var y=0;if(r=e,typeof r=="function")Of(r)&&(y=1);else if(typeof r=="string")y=Rb(e,a,de.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case Se:return e=ri(31,a,n,c),e.elementType=Se,e.lanes=f,e;case G:return ks(a.children,c,f,n);case Z:y=8,c|=24;break;case he:return e=ri(12,a,n,c|2),e.elementType=he,e.lanes=f,e;case H:return e=ri(13,a,n,c),e.elementType=H,e.lanes=f,e;case ie:return e=ri(19,a,n,c),e.elementType=ie,e.lanes=f,e;case je:case A:return e=c|32,e=ri(30,a,n,e),e.elementType=A,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ae:y=10;break e;case q:y=9;break e;case P:y=11;break e;case Q:y=14;break e;case ce:y=16,r=null;break e}y=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ri(y,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function ks(e,n,a,r){return e=ri(7,e,r,n),e.lanes=a,e}function Pf(e,n,a){return e=ri(6,e,null,n),e.lanes=a,e}function M0(e){var n=ri(18,null,null,0);return n.stateNode=e,n}function Ff(e,n,a){return n=ri(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var E0=new WeakMap;function Ri(e,n){if(typeof e=="object"&&e!==null){var a=E0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:R(n)},E0.set(e,n),n)}return{value:e,source:n,stack:R(n)}}var Rr=[],Cr=0,sc=null,Ho=0,Ci=[],Ni=0,ts=null,ia=1,aa="";function Ca(e,n){Rr[Cr++]=Ho,Rr[Cr++]=sc,sc=e,Ho=n}function T0(e,n,a){Ci[Ni++]=ia,Ci[Ni++]=aa,Ci[Ni++]=ts,ts=e;var r=ia;e=aa;var c=32-Je(r)-1;r&=~(1<<c),a+=1;var f=32-Je(n)+c;if(30<f){var y=c-c%5;f=(r&(1<<y)-1).toString(32),r>>=y,c-=y,ia=1<<32-Je(n)+c|a<<c|r,aa=f+e}else ia=1<<f|a<<c|r,aa=e}function rc(e){e.return!==null&&(Ca(e,1),T0(e,1,0))}function If(e){for(;e===sc;)sc=Rr[--Cr],Rr[Cr]=null,Ho=Rr[--Cr],Rr[Cr]=null;for(;e===ts;)ts=Ci[--Ni],Ci[Ni]=null,aa=Ci[--Ni],Ci[Ni]=null,ia=Ci[--Ni],Ci[Ni]=null}function A0(e,n){Ci[Ni++]=ia,Ci[Ni++]=aa,Ci[Ni++]=ts,ia=n.id,aa=n.overflow,ts=e}var On=null,ln=null,Ut=!1,ns=null,Di=!1,Bf=Error(s(519));function is(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ko(Ri(n,e)),Bf}function w0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[Rn]=e,n[zn]=r,a){case"dialog":Ft("cancel",n),Ft("close",n);break;case"iframe":case"object":case"embed":Ft("load",n);break;case"video":case"audio":for(a=0;a<cl.length;a++)Ft(cl[a],n);break;case"source":Ft("error",n);break;case"img":case"image":case"link":Ft("error",n),Ft("load",n);break;case"details":Ft("toggle",n);break;case"input":Ft("invalid",n),zm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ft("invalid",n);break;case"textarea":Ft("invalid",n),km(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Yx(n.textContent,a)?(r.popover!=null&&(Ft("beforetoggle",n),Ft("toggle",n)),r.onScroll!=null&&Ft("scroll",n),r.onScrollEnd!=null&&Ft("scrollend",n),r.onClick!=null&&(n.onclick=na),n=!0):n=!1,n||is(e,!0)}function oc(e){for(On=e.return;On;)switch(On.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:On=On.return}}function Nr(e){if(e!==On)return!1;if(!Ut)return oc(e),Ut=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ph(e.type,e.memoizedProps)),a=!a),a&&ln&&is(e),oc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ln=hv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ln=hv(e)}else n===27?(n=ln,_s(e.type)?(e=Mh,Mh=null,ln=e):ln=n):ln=On?Ui(e.stateNode.nextSibling):null;return!0}function Gs(){ln=On=null,Ut=!1}function zf(){var e=ns;return e!==null&&(ci===null?ci=e:ci.push.apply(ci,e),ns=null),e}function ko(e){ns===null?ns=[e]:ns.push(e)}var Hf=mt(null),Vs=null,Na=null;function as(e,n,a){Ke(Hf,n._currentValue),n._currentValue=a}function Da(e){e._currentValue=Hf.current,St(Hf)}function lc(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function kf(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=c;for(var k=0;k<n.length;k++)if(C.context===n[k]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),lc(f.return,a,e),r||(y=null);break e}f=C.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),lc(y,a,e),y=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,y=c.alternate,y!==null&&(y.lanes|=a),lc(c.return,a,e),y=c.child,y=y!==null?y.sibling:null):y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function js(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var C=c.type;mi(c.pendingProps.value,y.value)||(e!==null?e.push(C):e=[C])}}else if(c===Wt.current){if(y=c.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(to):e=[to])}c=c.return}return e!==null&&kf(n,e,a,r),n.flags|=262144,e!==null}function cc(e){for(e=e.firstContext;e!==null;){if(!mi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qs(e){Vs=e,Na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Hn(e){return R0(Vs,e)}function uc(e,n){return Vs===null&&qs(e),R0(e,n)}function R0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Na===null){if(e===null)throw Error(s(308));Na=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Na=Na.next=n;return a}var t1=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},n1=o.unstable_scheduleCallback,i1=o.unstable_NormalPriority,Mn={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gf(){return{controller:new t1,data:new Map,refCount:0}}function Go(e){e.refCount--,e.refCount===0&&n1(i1,function(){e.controller.abort()})}function C0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Vo=null;function a1(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var jo=null,Vf=0,Xs=0,Dr=null;function s1(e,n){if(jo===null){var a=jo=[];Vf=0,Xs=sh(),Dr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Vf++,n.then(N0,N0),n}function N0(){if(--Vf===0&&(Vo=null,jo!==null)){Dr!==null&&(Dr.status="fulfilled");var e=jo;jo=null,Xs=0,Dr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function r1(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var D0=Re.S;Re.S=function(e,n){if(Mx=xe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&s1(e,n),Vo!==null)for(var a=Kr;a!==null;)C0(a,Vo),a=a.next;if(a=e.types,a!==null){for(var r=Kr;r!==null;)C0(r,a),r=r.next;if(Xs!==0){r=Vo,r===null&&(r=Vo=[]);for(var c=0;c<a.length;c++){var f=a[c];r.indexOf(f)===-1&&r.push(f)}}}D0!==null&&D0(e,n)};var Ws=mt(null);function jf(){var e=Ws.current;return e!==null?e:on.pooledCache}function fc(e,n){n===null?Ke(Ws,Ws.current):Ke(Ws,n.pool)}function L0(){var e=jf();return e===null?null:{parent:Mn._currentValue,pool:e}}var Lr=Error(s(460)),qf=Error(s(474)),dc=Error(s(542)),hc={then:function(){}};function U0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function O0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(na,na),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,F0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(na,na);else{if(e=on,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,F0(e),e}throw Ks=n,Lr}}function Ys(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ks=a,Lr):a}}var Ks=null;function P0(){if(Ks===null)throw Error(s(459));var e=Ks;return Ks=null,e}function F0(e){if(e===Lr||e===dc)throw Error(s(483))}var Ur=null,qo=0;function pc(e){var n=qo;return qo+=1,Ur===null&&(Ur=[]),O0(Ur,e,n)}function ss(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function mc(e,n){throw n.$$typeof===L?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function I0(e){function n(ee,W){if(e){var se=ee.deletions;se===null?(ee.deletions=[W],ee.flags|=16):se.push(W)}}function a(ee,W){if(!e)return null;for(;W!==null;)n(ee,W),W=W.sibling;return null}function r(ee){for(var W=new Map;ee!==null;)ee.key===null?W.set(ee.index,ee):W.set(ee.key,ee),ee=ee.sibling;return W}function c(ee,W){return ee=Ra(ee,W),ee.index=0,ee.sibling=null,ee}function f(ee,W,se){return ee.index=se,e?(se=ee.alternate,se!==null?(se=se.index,se<W?(ee.flags|=2,W):se):(ee.flags|=134217730,W)):(ee.flags|=1048576,W)}function y(ee){return e&&ee.alternate===null&&(ee.flags|=134217730),ee}function C(ee,W,se,Te){return W===null||W.tag!==6?(W=Pf(se,ee.mode,Te),W.return=ee,W):(W=c(W,se),W.return=ee,W)}function k(ee,W,se,Te){var $e=se.type;return $e===G?(ee=me(ee,W,se.props.children,Te,se.key),ss(ee,se),ee):W!==null&&(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ce&&Ys($e)===W.type)?(W=c(W,se.props),ss(W,se),W.return=ee,W):(W=ac(se.type,se.key,se.props,null,ee.mode,Te),ss(W,se),W.return=ee,W)}function te(ee,W,se,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==se.containerInfo||W.stateNode.implementation!==se.implementation?(W=Ff(se,ee.mode,Te),W.return=ee,W):(W=c(W,se.children||[]),W.return=ee,W)}function me(ee,W,se,Te,$e){return W===null||W.tag!==7?(W=ks(se,ee.mode,Te,$e),W.return=ee,W):(W=c(W,se),W.return=ee,W)}function Ae(ee,W,se){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Pf(""+W,ee.mode,se),W.return=ee,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case Y:return se=ac(W.type,W.key,W.props,null,ee.mode,se),ss(se,W),se.return=ee,se;case F:return W=Ff(W,ee.mode,se),W.return=ee,W;case ce:return W=Ys(W),Ae(ee,W,se)}if(et(W)||ye(W))return W=ks(W,ee.mode,se,null),W.return=ee,W;if(typeof W.then=="function")return Ae(ee,pc(W),se);if(W.$$typeof===ae)return Ae(ee,uc(ee,W),se);mc(ee,W)}return null}function $(ee,W,se,Te){var $e=W!==null?W.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return $e!==null?null:C(ee,W,""+se,Te);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case Y:return se.key===$e?k(ee,W,se,Te):null;case F:return se.key===$e?te(ee,W,se,Te):null;case ce:return se=Ys(se),$(ee,W,se,Te)}if(et(se)||ye(se))return $e!==null?null:me(ee,W,se,Te,null);if(typeof se.then=="function")return $(ee,W,pc(se),Te);if(se.$$typeof===ae)return $(ee,W,uc(ee,se),Te);mc(ee,se)}return null}function fe(ee,W,se,Te,$e){if(typeof Te=="string"&&Te!==""||typeof Te=="number"||typeof Te=="bigint")return ee=ee.get(se)||null,C(W,ee,""+Te,$e);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case Y:return ee=ee.get(Te.key===null?se:Te.key)||null,k(W,ee,Te,$e);case F:return ee=ee.get(Te.key===null?se:Te.key)||null,te(W,ee,Te,$e);case ce:return Te=Ys(Te),fe(ee,W,se,Te,$e)}if(et(Te)||ye(Te))return ee=ee.get(se)||null,me(W,ee,Te,$e,null);if(typeof Te.then=="function")return fe(ee,W,se,pc(Te),$e);if(Te.$$typeof===ae)return fe(ee,W,se,uc(W,Te),$e);mc(W,Te)}return null}function Xe(ee,W,se,Te){for(var $e=null,zt=null,lt=W,ht=W=0,An=null;lt!==null&&ht<se.length;ht++){lt.index>ht?(An=lt,lt=null):An=lt.sibling;var Xt=$(ee,lt,se[ht],Te);if(Xt===null){lt===null&&(lt=An);break}e&&lt&&Xt.alternate===null&&n(ee,lt),W=f(Xt,W,ht),zt===null?$e=Xt:zt.sibling=Xt,zt=Xt,lt=An}if(ht===se.length)return a(ee,lt),Ut&&Ca(ee,ht),$e;if(lt===null){for(;ht<se.length;ht++)lt=Ae(ee,se[ht],Te),lt!==null&&(W=f(lt,W,ht),zt===null?$e=lt:zt.sibling=lt,zt=lt);return Ut&&Ca(ee,ht),$e}for(lt=r(lt);ht<se.length;ht++)An=fe(lt,ee,ht,se[ht],Te),An!==null&&(e&&(Xt=An.alternate,Xt!==null&&lt.delete(Xt.key===null?ht:Xt.key)),W=f(An,W,ht),zt===null?$e=An:zt.sibling=An,zt=An);return e&&lt.forEach(function(Es){return n(ee,Es)}),Ut&&Ca(ee,ht),$e}function at(ee,W,se,Te){if(se==null)throw Error(s(151));for(var $e=null,zt=null,lt=W,ht=W=0,An=null,Xt=se.next();lt!==null&&!Xt.done;ht++,Xt=se.next()){lt.index>ht?(An=lt,lt=null):An=lt.sibling;var Es=$(ee,lt,Xt.value,Te);if(Es===null){lt===null&&(lt=An);break}e&&lt&&Es.alternate===null&&n(ee,lt),W=f(Es,W,ht),zt===null?$e=Es:zt.sibling=Es,zt=Es,lt=An}if(Xt.done)return a(ee,lt),Ut&&Ca(ee,ht),$e;if(lt===null){for(;!Xt.done;ht++,Xt=se.next())Xt=Ae(ee,Xt.value,Te),Xt!==null&&(W=f(Xt,W,ht),zt===null?$e=Xt:zt.sibling=Xt,zt=Xt);return Ut&&Ca(ee,ht),$e}for(lt=r(lt);!Xt.done;ht++,Xt=se.next())Xt=fe(lt,ee,ht,Xt.value,Te),Xt!==null&&(e&&(An=Xt.alternate,An!==null&&lt.delete(An.key===null?ht:An.key)),W=f(Xt,W,ht),zt===null?$e=Xt:zt.sibling=Xt,zt=Xt);return e&&lt.forEach(function(Hb){return n(ee,Hb)}),Ut&&Ca(ee,ht),$e}function Ct(ee,W,se,Te){if(typeof se=="object"&&se!==null&&se.type===G&&se.key===null&&se.props.ref===void 0&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case Y:e:{for(var $e=se.key;W!==null;){if(W.key===$e){if($e=se.type,$e===G){if(W.tag===7){a(ee,W.sibling),Te=c(W,se.props.children),ss(Te,se),Te.return=ee,ee=Te;break e}}else if(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ce&&Ys($e)===W.type){a(ee,W.sibling),Te=c(W,se.props),ss(Te,se),Te.return=ee,ee=Te;break e}a(ee,W);break}else n(ee,W);W=W.sibling}se.type===G?(Te=ks(se.props.children,ee.mode,Te,se.key),ss(Te,se),Te.return=ee,ee=Te):(Te=ac(se.type,se.key,se.props,null,ee.mode,Te),ss(Te,se),Te.return=ee,ee=Te)}return y(ee);case F:e:{for($e=se.key;W!==null;){if(W.key===$e)if(W.tag===4&&W.stateNode.containerInfo===se.containerInfo&&W.stateNode.implementation===se.implementation){a(ee,W.sibling),Te=c(W,se.children||[]),Te.return=ee,ee=Te;break e}else{a(ee,W);break}else n(ee,W);W=W.sibling}Te=Ff(se,ee.mode,Te),Te.return=ee,ee=Te}return y(ee);case ce:return se=Ys(se),Ct(ee,W,se,Te)}if(et(se))return Xe(ee,W,se,Te);if(ye(se)){if($e=ye(se),typeof $e!="function")throw Error(s(150));return se=$e.call(se),at(ee,W,se,Te)}if(typeof se.then=="function")return Ct(ee,W,pc(se),Te);if(se.$$typeof===ae)return Ct(ee,W,uc(ee,se),Te);mc(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,W!==null&&W.tag===6?(a(ee,W.sibling),Te=c(W,se),Te.return=ee,ee=Te):(a(ee,W),Te=Pf(se,ee.mode,Te),Te.return=ee,ee=Te),y(ee)):a(ee,W)}return function(ee,W,se,Te){try{qo=0;var $e=Ct(ee,W,se,Te);return Ur=null,$e}catch(lt){if(lt===Lr||lt===dc)throw lt;var zt=ri(29,lt,null,ee.mode);return zt.lanes=Te,zt.return=ee,zt}finally{}}}var Zs=I0(!0),B0=I0(!1),rs=!1;function Xf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function os(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ls(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Qt&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=ic(e),S0(e,null,a),n}return nc(e,r,n,a),ic(e)}function Xo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ro(e,a)}}function Yf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Kf=!1;function Wo(){if(Kf){var e=Dr;if(e!==null)throw e}}function Yo(e,n,a,r){Kf=!1;var c=e.updateQueue;rs=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,C=c.shared.pending;if(C!==null){c.shared.pending=null;var k=C,te=k.next;k.next=null,y===null?f=te:y.next=te,y=k;var me=e.alternate;me!==null&&(me=me.updateQueue,C=me.lastBaseUpdate,C!==y&&(C===null?me.firstBaseUpdate=te:C.next=te,me.lastBaseUpdate=k))}if(f!==null){var Ae=c.baseState;y=0,me=te=k=null,C=f;do{var $=C.lane&-536870913,fe=$!==C.lane;if(fe?(Bt&$)===$:(r&$)===$){$!==0&&$===Xs&&(Kf=!0),me!==null&&(me=me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Xe=e,at=C;$=n;var Ct=a;switch(at.tag){case 1:if(Xe=at.payload,typeof Xe=="function"){Ae=Xe.call(Ct,Ae,$);break e}Ae=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=at.payload,$=typeof Xe=="function"?Xe.call(Ct,Ae,$):Xe,$==null)break e;Ae=E({},Ae,$);break e;case 2:rs=!0}}$=C.callback,$!==null&&(e.flags|=64,fe&&(e.flags|=8192),fe=c.callbacks,fe===null?c.callbacks=[$]:fe.push($))}else fe={lane:$,tag:C.tag,payload:C.payload,callback:C.callback,next:null},me===null?(te=me=fe,k=Ae):me=me.next=fe,y|=$;if(C=C.next,C===null){if(C=c.shared.pending,C===null)break;fe=C,C=fe.next,fe.next=null,c.lastBaseUpdate=fe,c.shared.pending=null}}while(!0);me===null&&(k=Ae),c.baseState=k,c.firstBaseUpdate=te,c.lastBaseUpdate=me,f===null&&(c.shared.lanes=0),ms|=y,e.lanes=y,e.memoizedState=Ae}}function z0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function H0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)z0(a[e],n)}var cs=mt(null),gc=mt(0);function k0(e,n){e=Fa,Ke(gc,e),Ke(cs,n),Fa=e|n.baseLanes}function Zf(){Ke(gc,Fa),Ke(cs,cs.current)}function Qf(){Fa=gc.current,St(cs),St(gc)}var kn=mt(null),Yn=null;function us(e){var n=e.alternate;Ke(Gn,Gn.current&1),Ke(kn,e),Yn===null&&(n===null||cs.current!==null||n.memoizedState!==null)&&(Yn=e)}function Jf(e){Ke(Gn,Gn.current),Ke(kn,e),Yn===null&&(Yn=e)}function G0(e){e.tag===22?(Ke(Gn,Gn.current),Ke(kn,e),Yn===null&&(Yn=e)):fs()}function fs(){Ke(Gn,Gn.current),Ke(kn,kn.current)}function gi(e){St(kn),Yn===e&&(Yn=null),St(Gn)}var Gn=mt(0);function Ko(e,n){Ke(kn,kn.current),Ke(Gn,n)}function $f(e){St(Gn),St(kn),Yn===e&&(Yn=null)}function xc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Sh(a)||bh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var La=0,Rt=null,rn=null,En=null,vc=!1,Or=!1,Qs=!1,_c=0,Zo=0,Pr=null,o1=0;function _n(){throw Error(s(321))}function ed(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!mi(e[a],n[a]))return!1;return!0}function td(e,n,a,r,c,f){return La=f,Rt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Re.H=e===null||e.memoizedState===null?Tg:Ag,Qs=!1,f=a(r,c),Qs=!1,Or&&(f=j0(n,a,r,c)),V0(e),f}function V0(e){Re.H=Ac;var n=rn!==null&&rn.next!==null;if(La=0,En=rn=Rt=null,vc=!1,Zo=0,Pr=null,n)throw Error(s(300));e===null||Tn||(e=e.dependencies,e!==null&&cc(e)&&(Tn=!0))}function j0(e,n,a,r){Rt=e;var c=0;do{if(Or&&(Pr=null),Zo=0,Or=!1,25<=c)throw Error(s(301));if(c+=1,En=rn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Re.H=m1,f=n(a,r)}while(Or);return f}function l1(){var e=Re.H,n=e.useState()[0];return n=typeof n.then=="function"?Qo(n):n,e=e.useState()[0],(rn!==null?rn.memoizedState:null)!==e&&(Rt.flags|=1024),n}function nd(){var e=_c!==0;return _c=0,e}function id(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ad(e){if(vc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vc=!1}La=0,En=rn=Rt=null,Or=!1,Zo=_c=0,Pr=null}function Jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?Rt.memoizedState=En=e:En=En.next=e,En}function bn(){if(rn===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=rn.next;var n=En===null?Rt.memoizedState:En.next;if(n!==null)En=n,rn=e;else{if(e===null)throw Rt.alternate===null?Error(s(467)):Error(s(310));rn=e,e={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},En===null?Rt.memoizedState=En=e:En=En.next=e}return En}function yc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(e){var n=Zo;return Zo+=1,Pr===null&&(Pr=[]),e=O0(Pr,e,n),n=Rt,(En===null?n.memoizedState:En.next)===null&&(n=n.alternate,Re.H=n===null||n.memoizedState===null?Tg:Ag),e}function Sc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qo(e);if(e.$$typeof===K)return;if(e.$$typeof===ae)return Hn(e)}throw Error(s(438,String(e)))}function sd(e){var n=null,a=Rt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=Rt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yc(),Rt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Ze;return n.index++,a}function Ua(e,n){return typeof n=="function"?n(e):n}function bc(e){var n=bn();return rd(n,rn,e)}function rd(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var C=y=null,k=null,te=n,me=!1;do{var Ae=te.lane&-536870913;if(Ae!==te.lane?(Bt&Ae)===Ae:(La&Ae)===Ae){var $=te.revertLane;if($===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),Ae===Xs&&(me=!0);else if((La&$)===$){te=te.next,$===Xs&&(me=!0);continue}else Ae={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},k===null?(C=k=Ae,y=f):k=k.next=Ae,Rt.lanes|=$,ms|=$;Ae=te.action,Qs&&a(f,Ae),f=te.hasEagerState?te.eagerState:a(f,Ae)}else $={lane:Ae,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},k===null?(C=k=$,y=f):k=k.next=$,Rt.lanes|=Ae,ms|=Ae;te=te.next}while(te!==null&&te!==n);if(k===null?y=f:k.next=C,!mi(f,e.memoizedState)&&(Tn=!0,me&&(a=Dr,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=k,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function od(e){var n=bn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);mi(f,n.memoizedState)||(Tn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function q0(e,n,a){var r=Rt,c=bn(),f=Ut;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!mi((rn||c).memoizedState,a);if(y&&(c.memoizedState=a,Tn=!0),c=c.queue,ud(Y0.bind(null,r,c,e),[e]),e=c.getSnapshot!==n||y||En!==null&&(En.memoizedState.tag&1)!==0,Fr(e?9:8,{destroy:void 0},W0.bind(null,r,c,a,n),null),e){if(r.flags|=2048,on===null)throw Error(s(349));f||(La&127)!==0||X0(r,n,a)}return a}function X0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Rt.updateQueue,n===null?(n=yc(),Rt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function W0(e,n,a,r){n.value=a,n.getSnapshot=r,K0(n)&&Z0(e)}function Y0(e,n,a){return a(function(){K0(n)&&Z0(e)})}function K0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!mi(e,a)}catch{return!0}}function Z0(e){var n=Hs(e,2);n!==null&&ui(n,e,2)}function ld(e){var n=Jn();if(typeof e=="function"){var a=e;if(e=a(),Qs){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:e},n}function Q0(e,n,a,r){return e.baseState=a,rd(e,rn,typeof r=="function"?r:Ua)}function c1(e,n,a,r,c){if(Tc(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};Re.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,J0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function J0(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=Re.T,y={};y.types=f!==null?f.types:null,Re.T=y;try{var C=a(c,r),k=Re.S;k!==null&&k(y,C),$0(e,n,C)}catch(te){cd(e,n,te)}finally{f!==null&&y.types!==null&&(f.types=y.types),Re.T=f}}else try{f=a(c,r),$0(e,n,f)}catch(te){cd(e,n,te)}}function $0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){eg(e,n,r)},function(r){return cd(e,n,r)}):eg(e,n,a)}function eg(e,n,a){n.status="fulfilled",n.value=a,tg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,J0(e,a)))}function cd(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,tg(n),n=n.next;while(n!==r)}e.action=null}function tg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ng(e,n){return n}function ig(e,n){if(Ut){var a=on.formState;if(a!==null){e:{var r=Rt;if(Ut){if(ln){t:{for(var c=ln,f=Di;c.nodeType!==8;){if(!f){c=null;break t}if(c=Ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ln=Ui(c.nextSibling),r=c.data==="F!";break e}}is(r)}r=!1}r&&(n=a[0])}}return a=Jn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ng,lastRenderedState:n},a.queue=r,a=bg.bind(null,Rt,r),r.dispatch=a,r=ld(!1),f=md.bind(null,Rt,!1,r.queue),r=Jn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=c1.bind(null,Rt,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function ag(e){var n=bn();return sg(n,rn,e)}function sg(e,n,a){if(n=rd(e,n,ng)[0],e=bc(Ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Qo(n)}catch(y){throw y===Lr?dc:y}else r=n;n=bn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(Rt.flags|=2048,Fr(9,{destroy:void 0},u1.bind(null,c,a),null)),[r,f,e]}function u1(e,n){e.action=n}function rg(e){var n=bn(),a=rn;if(a!==null)return sg(n,a,e);bn(),n=n.memoizedState,a=bn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Fr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=Rt.updateQueue,n===null&&(n=yc(),Rt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function og(){return bn().memoizedState}function Mc(e,n,a,r){var c=Jn();Rt.flags|=e,c.memoizedState=Fr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Ec(e,n,a,r){var c=bn();r=r===void 0?null:r;var f=c.memoizedState.inst;rn!==null&&r!==null&&ed(r,rn.memoizedState.deps)?c.memoizedState=Fr(n,f,a,r):(Rt.flags|=e,c.memoizedState=Fr(1|n,f,a,r))}function lg(e,n){Mc(8390656,8,e,n)}function ud(e,n){Ec(2048,8,e,n)}function f1(e){Rt.flags|=4;var n=Rt.updateQueue;if(n===null)n=yc(),Rt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function cg(e){var n=bn().memoizedState;return f1({ref:n,nextImpl:e}),function(){if((Qt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ug(e,n){return Ec(4,2,e,n)}function fg(e,n){return Ec(4,4,e,n)}function dg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hg(e,n,a){a=a!=null?a.concat([e]):null,Ec(4,4,dg.bind(null,n,e),a)}function fd(){}function pg(e,n){var a=bn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&ed(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function mg(e,n){var a=bn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&ed(n,r[1]))return r[0];if(r=e(),Qs){Ce(!0);try{e()}finally{Ce(!1)}}return a.memoizedState=[r,n],r}function dd(e,n,a){return a===void 0||(La&1073741824)!==0&&(Bt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Tx(),Rt.lanes|=e,ms|=e,a)}function gg(e,n,a,r){return mi(a,n)?a:cs.current!==null?(e=dd(e,a,r),mi(e,n)||(Tn=!0),e):(La&106)===0||(La&1073741824)!==0&&(Bt&261930)===0?(Tn=!0,e.memoizedState=a):(e=Tx(),Rt.lanes|=e,ms|=e,n)}function xg(e,n,a,r,c){var f=He.p;He.p=f!==0&&8>f?f:8;var y=Re.T,C={};C.types=y!==null?y.types:null,Re.T=C,md(e,!1,n,a);try{var k=c(),te=Re.S;if(te!==null&&te(C,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var me=r1(k,r);Jo(e,n,me,yi(e))}else Jo(e,n,r,yi(e))}catch(Ae){Jo(e,n,{then:function(){},status:"rejected",reason:Ae},yi())}finally{He.p=f,y!==null&&C.types!==null&&(y.types=C.types),Re.T=y}}function d1(){}function hd(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=vg(e).queue;xg(e,c,n,J,a===null?d1:function(){return _g(e),a(r)})}function vg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function _g(e){var n=vg(e);n.next===null&&(n=e.alternate.memoizedState),Jo(e,n.next.queue,{},yi())}function pd(){return Hn(to)}function yg(){return bn().memoizedState}function Sg(){return bn().memoizedState}function h1(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=yi();e=os(a);var r=ls(n,e,a);r!==null&&(ui(r,n,a),Xo(r,n,a)),n={cache:Gf()},e.payload=n;return}n=n.return}}function p1(e,n,a){var r=yi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tc(e)?Mg(n,a):(a=Uf(e,n,a,r),a!==null&&(ui(a,e,r),Eg(a,n,r)))}function bg(e,n,a){var r=yi();Jo(e,n,a,r)}function Jo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tc(e))Mg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,C=f(y,a);if(c.hasEagerState=!0,c.eagerState=C,mi(C,y))return nc(e,n,c,0),on===null&&tc(),!1}catch{}finally{}if(a=Uf(e,n,c,r),a!==null)return ui(a,e,r),Eg(a,n,r),!0}return!1}function md(e,n,a,r){if(r={lane:2,revertLane:sh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Tc(e)){if(n)throw Error(s(479))}else n=Uf(e,a,r,2),n!==null&&ui(n,e,2)}function Tc(e){var n=e.alternate;return e===Rt||n!==null&&n===Rt}function Mg(e,n){Or=vc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Eg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ro(e,a)}}var Ac={readContext:Hn,use:Sc,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n,useEffectEvent:_n},Tg={readContext:Hn,use:Sc,useCallback:function(e,n){return Jn().memoizedState=[e,n===void 0?null:n],e},useContext:Hn,useEffect:lg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Mc(4194308,4,dg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Mc(4194308,4,e,n)},useInsertionEffect:function(e,n){Mc(4,2,e,n)},useMemo:function(e,n){var a=Jn();n=n===void 0?null:n;var r=e();if(Qs){Ce(!0);try{e()}finally{Ce(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Jn();if(a!==void 0){var c=a(n);if(Qs){Ce(!0);try{a(n)}finally{Ce(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=p1.bind(null,Rt,e),[r.memoizedState,e]},useRef:function(e){var n=Jn();return e={current:e},n.memoizedState=e},useState:function(e){e=ld(e);var n=e.queue,a=bg.bind(null,Rt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:fd,useDeferredValue:function(e,n){var a=Jn();return dd(a,e,n)},useTransition:function(){var e=ld(!1);return e=xg.bind(null,Rt,e.queue,!0,!1),Jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=Rt,c=Jn();if(Ut){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),on===null)throw Error(s(349));(Bt&127)!==0||X0(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,lg(Y0.bind(null,r,f,e),[e]),r.flags|=2048,Fr(9,{destroy:void 0},W0.bind(null,r,f,a,n),null),a},useId:function(){var e=Jn(),n=on.identifierPrefix;if(Ut){var a=aa,r=ia;a=(r&~(1<<32-Je(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=_c++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=o1++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:pd,useFormState:ig,useActionState:ig,useOptimistic:function(e){var n=Jn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=md.bind(null,Rt,!0,a),a.dispatch=n,[e,n]},useMemoCache:sd,useCacheRefresh:function(){return Jn().memoizedState=h1.bind(null,Rt)},useEffectEvent:function(e){var n=Jn(),a={impl:e};return n.memoizedState=a,function(){if((Qt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ag={readContext:Hn,use:Sc,useCallback:pg,useContext:Hn,useEffect:ud,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:fg,useMemo:mg,useReducer:bc,useRef:og,useState:function(){return bc(Ua)},useDebugValue:fd,useDeferredValue:function(e,n){var a=bn();return gg(a,rn.memoizedState,e,n)},useTransition:function(){var e=bc(Ua)[0],n=bn().memoizedState;return[typeof e=="boolean"?e:Qo(e),n]},useSyncExternalStore:q0,useId:yg,useHostTransitionStatus:pd,useFormState:ag,useActionState:ag,useOptimistic:function(e,n){var a=bn();return Q0(a,rn,e,n)},useMemoCache:sd,useCacheRefresh:Sg,useEffectEvent:cg},m1={readContext:Hn,use:Sc,useCallback:pg,useContext:Hn,useEffect:ud,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:fg,useMemo:mg,useReducer:od,useRef:og,useState:function(){return od(Ua)},useDebugValue:fd,useDeferredValue:function(e,n){var a=bn();return rn===null?dd(a,e,n):gg(a,rn.memoizedState,e,n)},useTransition:function(){var e=od(Ua)[0],n=bn().memoizedState;return[typeof e=="boolean"?e:Qo(e),n]},useSyncExternalStore:q0,useId:yg,useHostTransitionStatus:pd,useFormState:rg,useActionState:rg,useOptimistic:function(e,n){var a=bn();return rn!==null?Q0(a,rn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:sd,useCacheRefresh:Sg,useEffectEvent:cg};function gd(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:E({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var xd={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=yi(),c=os(r);c.payload=n,a!=null&&(c.callback=a),n=ls(e,c,r),n!==null&&(ui(n,e,r),Xo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=yi(),c=os(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ls(e,c,r),n!==null&&(ui(n,e,r),Xo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=yi(),r=os(a);r.tag=2,n!=null&&(r.callback=n),n=ls(e,r,a),n!==null&&(ui(n,e,a),Xo(n,e,a))}};function wg(e,n,a,r,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,y):n.prototype&&n.prototype.isPureReactComponent?!Bo(a,r)||!Bo(c,f):!0}function Rg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&xd.enqueueReplaceState(n,n.state,null)}function Js(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=E({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Cg(e){ec(e)}function Ng(e){console.error(e)}function Dg(e){ec(e)}function wc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Lg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function vd(e,n,a){return a=os(a),a.tag=3,a.payload={element:null},a.callback=function(){wc(e,n)},a}function Ug(e){return e=os(e),e.tag=3,e}function Og(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Lg(n,a,r)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Lg(n,a,r),typeof c!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})})}function g1(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&js(n,a,c,!0),a=kn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Yn===null?Yc():a.alternate===null&&yn===0&&(yn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===hc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),nh(e,r,c)),!1;case 22:return a.flags|=65536,r===hc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),nh(e,r,c)),!1}throw Error(s(435,a.tag))}return nh(e,r,c),Yc(),!1}if(Ut)return n=kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Bf&&(e=Error(s(422),{cause:r}),ko(Ri(e,a)))):(r!==Bf&&(n=Error(s(423),{cause:r}),ko(Ri(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Ri(r,a),c=vd(e.stateNode,r,c),Yf(e,c),yn!==4&&(yn=2)),!1;var f=Error(s(520),{cause:r});if(f=Ri(f,a),rl===null?rl=[f]:rl.push(f),yn!==4&&(yn=2),n===null)return!0;r=Ri(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=vd(a.stateNode,r,e),Yf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(gs===null||!gs.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Ug(c),Og(c,e,a,r),Yf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var _d=Error(s(461)),Tn=!1;function Cn(e,n,a,r){n.child=e===null?B0(n,null,a,r):Zs(n,e.child,a,r)}function Pg(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var y={};for(var C in r)C!=="ref"&&(y[C]=r[C])}else y=r;return qs(n),r=td(e,n,a,y,f,c),C=nd(),e!==null&&!Tn?(id(e,n,c),Oa(e,n,c)):(Ut&&C&&rc(n),n.flags|=1,Cn(e,n,r,c),n.child)}function Fg(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!Of(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ig(e,n,f,r,c)):(e=ac(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!wd(e,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Bo,a(y,r)&&e.ref===n.ref)return Oa(e,n,c)}return n.flags|=1,e=Ra(f,r),e.ref=n.ref,e.return=n,n.child=e}function Ig(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Bo(f,r)&&e.ref===n.ref)if(Tn=!1,n.pendingProps=r=f,wd(e,c))(e.flags&131072)!==0&&(Tn=!0);else return n.lanes=e.lanes,Oa(e,n,c)}return yd(e,n,a,r,c)}function Bg(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return zg(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fc(n,f!==null?f.cachePool:null),f!==null?k0(n,f):Zf(),G0(n);else return r=n.lanes=536870912,zg(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(fc(n,f.cachePool),k0(n,f),fs(),n.memoizedState=null):(e!==null&&fc(n,null),Zf(),fs());return Cn(e,n,c,a),n.child}function $o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function zg(e,n,a,r,c){var f=jf();return f=f===null?null:{parent:Mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&fc(n,null),Zf(),G0(n),e!==null&&js(e,n,r,!0),n.childLanes=c,null}function Rc(e,n){return n=Cc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Hg(e,n,a){return Zs(n,e.child,null,a),e=Rc(n,n.pendingProps),e.flags|=2,gi(n),n.memoizedState=null,e}function x1(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ut){if(r.mode==="hidden")return e=Rc(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},$o(null,e);if(Jf(n),(e=ln)?(e=dv(e,Di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ts!==null?{id:ia,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},a=M0(e),a.return=n,n.child=a,On=n,ln=null)):e=null,e===null)throw is(n);return n.lanes=536870912,null}return Rc(n,r)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Jf(n),c)if(n.flags&256)n.flags&=-257,n=Hg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Tn||js(e,n,a,!1),c=(a&e.childLanes)!==0,Tn||c){if(cs.current===null){if(r=on,r!==null&&(y=Ja(r,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Hs(e,y),ui(r,e,y),_d;Yc()}n=Hg(e,n,a)}else e=f.treeContext,ln=Ui(y.nextSibling),On=n,Ut=!0,ns=null,Di=!1,e!==null&&A0(n,e),n=Rc(n,r),n.flags|=134221824;return n}return e=Ra(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ir(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function yd(e,n,a,r,c){return qs(n),a=td(e,n,a,r,void 0,c),r=nd(),e!==null&&!Tn?(id(e,n,c),Oa(e,n,c)):(Ut&&r&&rc(n),n.flags|=1,Cn(e,n,a,c),n.child)}function kg(e,n,a,r,c,f){return qs(n),n.updateQueue=null,a=j0(n,r,a,c),V0(e),r=nd(),e!==null&&!Tn?(id(e,n,f),Oa(e,n,f)):(Ut&&r&&rc(n),n.flags|=1,Cn(e,n,a,f),n.child)}function Gg(e,n,a,r,c){if(qs(n),n.stateNode===null){var f=wr,y=a.contextType;typeof y=="object"&&y!==null&&(f=Hn(y)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=xd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Xf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Hn(y):wr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(gd(n,a,y,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&xd.enqueueReplaceState(f,f.state,null),Yo(n,r,f,c),Wo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,k=Js(a,C);f.props=k;var te=f.context,me=a.contextType;y=wr,typeof me=="object"&&me!==null&&(y=Hn(me));var Ae=a.getDerivedStateFromProps;me=typeof Ae=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||te!==y)&&Rg(n,f,r,y),rs=!1;var $=n.memoizedState;f.state=$,Yo(n,r,f,c),Wo(),te=n.memoizedState,C||$!==te||rs?(typeof Ae=="function"&&(gd(n,a,Ae,r),te=n.memoizedState),(k=rs||wg(n,a,k,r,$,te,y))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=te),f.props=r,f.state=te,f.context=y,r=k):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Wf(e,n),y=n.memoizedProps,me=Js(a,y),f.props=me,Ae=n.pendingProps,$=f.context,te=a.contextType,k=wr,typeof te=="object"&&te!==null&&(k=Hn(te)),C=a.getDerivedStateFromProps,(te=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Ae||$!==k)&&Rg(n,f,r,k),rs=!1,$=n.memoizedState,f.state=$,Yo(n,r,f,c),Wo();var fe=n.memoizedState;y!==Ae||$!==fe||rs||e!==null&&e.dependencies!==null&&cc(e.dependencies)?(typeof C=="function"&&(gd(n,a,C,r),fe=n.memoizedState),(me=rs||wg(n,a,me,r,$,fe,k)||e!==null&&e.dependencies!==null&&cc(e.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,fe,k),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,fe,k)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=fe),f.props=r,f.state=fe,f.context=k,r=me):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ir(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Zs(n,e.child,null,c),n.child=Zs(n,null,a,c)):Cn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Oa(e,n,c),e}function Vg(e,n,a,r){return Gs(),n.flags|=256,Cn(e,n,a,r),n.child}var Sd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bd(e){return{baseLanes:e,cachePool:L0()}}function Md(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=_i),e}function jg(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(Gn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ut){if(c?us(n):fs(),(e=ln)?(e=dv(e,Di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ts!==null?{id:ia,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},a=M0(e),a.return=n,n.child=a,On=n,ln=null)):e=null,e===null)throw is(n);return bh(e)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,c?(fs(),c=n.mode,f=Cc({mode:"hidden",children:f},c),r=ks(r,c,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=bd(a),r.childLanes=Md(e,y,a),n.memoizedState=Sd,$o(null,r)):(us(n),Ed(n,f))}var C=e.memoizedState;if(C!==null){var k=C.dehydrated;if(k!==null)return v1(e,n,f,y,r,k,C,a)}return c?(fs(),c=r.fallback,f=n.mode,C=e.child,k=C.sibling,r=Ra(C,{mode:"hidden",children:r.children}),r.subtreeFlags=C.subtreeFlags&1206910976,k!==null?c=Ra(k,c):(c=ks(c,f,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,$o(null,r),r=n.child,c=e.child.memoizedState,c===null?c=bd(a):(f=c.cachePool,f!==null?(C=Mn._currentValue,f=f.parent!==C?{parent:C,pool:C}:f):f=L0(),c={baseLanes:c.baseLanes|a,cachePool:f}),r.memoizedState=c,r.childLanes=Md(e,y,a),n.memoizedState=Sd,$o(e.child,r)):(us(n),a=e.child,e=a.sibling,a=Ra(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Ed(e,n){return n=Cc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cc(e,n){return e=ri(22,e,null,n),e.lanes=0,e}function Nc(e,n,a){return Zs(n,e.child,null,a),e=Ed(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function v1(e,n,a,r,c,f,y,C){if(a)return n.flags&256?(us(n),n.flags&=-257,Nc(e,n,C)):n.memoizedState!==null?(fs(),n.child=e.child,n.flags|=128,null):(fs(),f=c.fallback,y=n.mode,c=Cc({mode:"visible",children:c.children},y),f=ks(f,y,C,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Zs(n,e.child,null,C),c=n.child,c.memoizedState=bd(C),c.childLanes=Md(e,r,C),n.memoizedState=Sd,$o(null,c));if(us(n),bh(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var k=r.dgst;return r=k,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,ko({value:c,source:null,stack:null})),Nc(e,n,C)}if(Tn||js(e,n,C,!1),r=(C&e.childLanes)!==0,Tn||r){if(cs.current!==null)return Nc(e,n,C);if(r=on,r!==null&&(c=Ja(r,C),c!==0&&c!==y.retryLane))throw y.retryLane=c,Hs(e,c),ui(r,e,c),_d;return Sh(f)||Yc(),Nc(e,n,C)}return Sh(f)?(n.flags|=192,n.child=e.child,null):(e=y.treeContext,ln=Ui(f.nextSibling),On=n,Ut=!0,ns=null,Di=!1,e!==null&&A0(n,e),n=Ed(n,c.children),n.flags|=134221824,n)}function qg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),lc(e.return,n,a)}function Xg(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&xc(a)===null&&(n=e),e=e.sibling}return n}function Dc(e,n,a,r,c,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=a,y.tailMode=c,y.treeForkCount=f)}function Td(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Ad(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var y=Gn.current;if(n.flags&128)return Ko(n,y),null;var C=(y&2)!==0;if(C?(y=y&1|2,n.flags|=128):y&=1,Ko(n,y),c==="backwards"&&e!==null?(Td(e),Cn(e,n,r,a),Td(e)):Cn(e,n,r,a),r=Ut?Ho:0,!C&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qg(e,a,n);else if(e.tag===19)qg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=Xg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Td(n)),Dc(n,!0,c,null,f,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&xc(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Dc(n,!0,a,null,f,r);break;case"together":Dc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Xg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Dc(n,!1,c,a,f,r)}return n.child}function Wg(e,n,a){var r=n.pendingProps;return as(n,n.type,r.value),Cn(e,n,r.children,a),n.child}function Oa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ms|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(js(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ra(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ra(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function wd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cc(e)))}function _1(e,n,a){switch(n.tag){case 3:gt(n,n.stateNode.containerInfo),as(n,Mn,e.memoizedState.cache),Gs();break;case 27:case 5:Nt(n);break;case 4:gt(n,n.stateNode.containerInfo);break;case 10:as(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Jf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return us(n),n.flags|=128,null;r=js(e,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?jg(e,n,a):(us(n),e=Oa(e,n,a),e!==null?e.sibling:null)}us(n);break;case 19:if(n.flags&128)return Ad(e,n,a);if(c=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(js(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Ad(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ko(n,Gn.current),r)break;return null;case 22:return n.lanes=0,Bg(e,n,a,n.pendingProps);case 24:as(n,Mn,e.memoizedState.cache)}return Oa(e,n,a)}function Yg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Tn=!0;else{if(!wd(e,a)&&(n.flags&128)===0)return Tn=!1,_1(e,n,a);Tn=(e.flags&131072)!==0}else Tn=!1,Ut&&(n.flags&1048576)!==0&&T0(n,Ho,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Ys(n.elementType),n.type=e,typeof e=="function")Of(e)?(r=Js(e,r),n.tag=1,n=Gg(null,n,e,r,a)):(n.tag=0,n=yd(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===P){n.tag=11,n=Pg(null,n,e,r,a);break e}else if(c===Q){n.tag=14,n=Fg(null,n,e,r,a);break e}else if(c===ae){n.tag=10,n.type=e,n=Wg(null,n,a);break e}}throw n=Ne(e)||e,Error(s(306,n,""))}}return n;case 0:return yd(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Js(r,n.pendingProps),Gg(e,n,r,c,a);case 3:e:{if(gt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Wf(e,n),Yo(n,r,null,a);var y=n.memoizedState;if(r=y.cache,as(n,Mn,r),r!==f.cache&&kf(n,[Mn],a,!0),Wo(),r=y.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vg(e,n,r,a);break e}else if(r!==c){c=Ri(Error(s(424)),n),ko(c),n=Vg(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ln=Ui(e.firstChild),On=n,Ut=!0,ns=null,Di=!0,a=B0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Gs(),r===c){n=Oa(e,n,a);break e}Cn(e,n,r,a)}n=n.child}return n;case 26:return Ir(e,n),e===null?(a=_v(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ut||(n.stateNode=Jx(n.type,n.pendingProps,ut.current,n)):n.memoizedState=_v(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Nt(n),e===null&&Ut&&(r=n.stateNode=mv(n.type,n.pendingProps,ut.current),On=n,Di=!0,c=ln,_s(n.type)?(Mh=c,ln=Ui(r.firstChild)):ln=c),Cn(e,n,n.pendingProps.children,a),Ir(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ut&&((c=r=ln)&&(r=hb(r,n.type,n.pendingProps,Di),r!==null?(n.stateNode=r,On=n,ln=Ui(r.firstChild),Di=!1,c=!0):c=!1),c||is(n)),Nt(n),c=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,r=f.children,ph(c,f)?r=null:y!==null&&ph(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=td(e,n,l1,null,null,a),to._currentValue=c),Ir(e,n),Cn(e,n,r,a),n.child;case 6:return e===null&&Ut&&((e=a=ln)&&(a=pb(a,n.pendingProps,Di),a!==null?(n.stateNode=a,On=n,ln=null,e=!0):e=!1),e||is(n)),null;case 13:return jg(e,n,a);case 4:return gt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Zs(n,null,r,a):Cn(e,n,r,a),n.child;case 11:return Pg(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Ir(e,n),Cn(e,n,r,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return Wg(e,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,qs(n),c=Hn(c),r=r(c),n.flags|=1,Cn(e,n,r,a),n.child;case 14:return Fg(e,n,n.type,n.pendingProps,a);case 15:return Ig(e,n,n.type,n.pendingProps,a);case 19:return Ad(e,n,a);case 31:return x1(e,n,a);case 22:return Bg(e,n,a,n.pendingProps);case 24:return qs(n),r=Hn(Mn),e===null?(c=jf(),c===null&&(c=on,f=Gf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Xf(n),as(n,Mn,c)):((e.lanes&a)!==0&&(Wf(e,n),Yo(n,null,null,a),Wo()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),as(n,Mn,r)):(r=f.cache,as(n,Mn,r),r!==c.cache&&kf(n,[Mn],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Ut&&rc(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:Ir(e,n),Cn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Pa(e){e.flags|=4}function Rd(e,n,a,r,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?Mv(n,r):Mv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Cx())e.flags|=8192;else throw Ks=hc,qf}else e.flags&=-16777217}function Kg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ev(n))if(Cx())e.flags|=8192;else throw Ks=hc,qf}function Lc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?mr():536870912,e.lanes|=n,Gr|=n)}function el(e,n){if(!Ut)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function cn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function y1(e,n,a){var r=n.pendingProps;switch(If(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(n),null;case 1:return cn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Da(Mn),V(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Nr(n)?Pa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zf())),cn(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Pa(n),f!==null?(cn(n),Kg(n,f)):(cn(n),Rd(n,c,null,r,a))):f?f!==e.memoizedState?(Pa(n),cn(n),Kg(n,f)):(cn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Pa(n),cn(n),Rd(n,c,e,r,a)),null;case 27:if(ct(n),a=ut.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Pa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return cn(n),n.subtreeFlags&=-33554433,null}e=de.current,Nr(n)?w0(n):(e=mv(c,r,a),n.stateNode=e,Pa(n))}return cn(n),n.subtreeFlags&=-33554433,null;case 5:if(ct(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Pa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return cn(n),n.subtreeFlags&=-33554433,null}if(f=de.current,Nr(n))w0(n);else{var y=fl(ut.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?y.createElement(c,{is:r.is}):y.createElement(c)}}f[Rn]=n,f[zn]=r;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;e:switch(jn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Pa(n)}}return cn(n),n.subtreeFlags&=-33554433,Rd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Pa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ut.current,Nr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=On,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[Rn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Yx(e.nodeValue,a)),e||is(n,!0)}else e=fl(e).createTextNode(r),e[Rn]=n,n.stateNode=e}return cn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Nr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Rn]=n}else Gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),e=!1}else a=zf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(gi(n),n):(gi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return cn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Nr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Rn]=n}else Gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),c=!1}else c=zf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(gi(n),n):(gi(n),null)}return gi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Lc(n,n.updateQueue),cn(n),null);case 4:return V(),e===null&&ch(n.stateNode.containerInfo),n.flags|=67108864,cn(n),null;case 10:return Da(n.type),cn(n),null;case 19:if($f(n),r=n.memoizedState,r===null)return cn(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)el(r,!1);else{if(yn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=xc(e),f!==null){for(n.flags|=128,el(r,!1),e=f.updateQueue,n.updateQueue=e,Lc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)b0(a,e),a=a.sibling;return Ko(n,Gn.current&1|2),Ut&&Ca(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&xe()>jc&&(n.flags|=128,c=!0,el(r,!1),n.lanes=4194304)}else{if(!c)if(e=xc(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Lc(n,e),el(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!Ut)return cn(n),null}else 2*xe()-r.renderingStartTime>jc&&a!==536870912&&(n.flags|=128,c=!0,el(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){e=r.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=xe(),e.sibling=null,f=Gn.current,f=c?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Ut?Ko(n,f):(a=f,Ke(kn,n),Ke(Gn,a),Yn===null&&(Yn=n)),Ut&&Ca(n,r.treeForkCount),e}return cn(n),null;case 22:case 23:return gi(n),Qf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(cn(n),n.subtreeFlags&6&&(n.flags|=8192)):cn(n),a=n.updateQueue,a!==null&&Lc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&St(Ws),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Da(Mn),cn(n),null;case 25:return null;case 30:return n.flags|=33554432,cn(n),null}throw Error(s(156,n.tag))}function S1(e,n){switch(If(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Da(Mn),V(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ct(n),null;case 31:if(n.memoizedState!==null){if(gi(n),n.alternate===null)throw Error(s(340));Gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $f(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return V(),null;case 10:return Da(n.type),null;case 22:case 23:return gi(n),Qf(),e!==null&&St(Ws),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Da(Mn),null;case 25:return null;default:return null}}function Zg(e,n){switch(If(n),n.tag){case 3:Da(Mn),V();break;case 26:case 27:case 5:ct(n);break;case 4:V();break;case 31:n.memoizedState!==null&&gi(n);break;case 13:gi(n);break;case 19:$f(n);break;case 10:Da(n.type);break;case 22:case 23:gi(n),Qf(),e!==null&&St(Ws);break;case 24:Da(Mn)}}function tl(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,y=a.inst;r=f(),y.destroy=r}a=a.next}while(a!==c)}}catch(C){nn(n,n.return,C)}}function ds(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var y=r.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,c=n;var k=a,te=C;try{te()}catch(me){nn(c,k,me)}}}r=r.next}while(r!==f)}}catch(me){nn(n,n.return,me)}}function Qg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{H0(n,a)}catch(r){nn(e,e.return,r)}}}function Jg(e,n,a){a.props=Js(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){nn(e,n,r)}}function sa(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var c=e.stateNode,f=Aa(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=sv(f)),r=c.ref;break;case 7:if(e.stateNode===null){var y=new Si(e);g(e.child,!1,fb,y,void 0,void 0),e.stateNode=y}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(C){nn(e,n,C)}}function Vn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){nn(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){nn(e,n,c)}else a.current=null}function Uc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)fv(e.stateNode,n[a])}function $g(e){for(var n=e.return;n!==null&&(Nd(n)&&fv(e.stateNode,n.stateNode),!Cd(n));)n=n.return}function nl(e){for(var n=e.return;n!==null&&(Nd(n)&&db(e.stateNode,n.stateNode),!Cd(n));)n=n.return}function Cd(e){return e.tag===5||e.tag===3||e.tag===27}function Nd(e){return e&&e.tag===7&&e.stateNode!==null}function Dd(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){nn(e,e.return,c)}}function Ld(e,n,a){try{var r=e.stateNode;W1(r,e.type,a,n),r[zn]=n}catch(c){nn(e,e.return,c)}}function ex(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_s(e.type)||e.tag===4}function Ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ex(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_s(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Od(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=na)),Uc(e,r),pt=!0;else if(c!==4&&(c===27&&(Uc(e,r),r=null,_s(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Od(e,n,a,r),e=e.sibling;e!==null;)Od(e,n,a,r),e=e.sibling}function Oc(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Uc(e,r),pt=!0;else if(c!==4&&(c===27&&(Uc(e,r),r=null,_s(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Oc(e,n,a,r),e=e.sibling;e!==null;)Oc(e,n,a,r),e=e.sibling}function tx(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);jn(n,r,a),n[Rn]=e,n[zn]=a}catch(f){nn(e,e.return,f)}}var Pc=!1,xi=null;function nx(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Pc=!0)}var ra=null;function ix(){var e=ra;return ra=null,e}var oi=0;function Br(e,n,a,r,c){return oi=0,ax(e.child,n,a,r,c)}function ax(e,n,a,r,c){for(var f=!1;e!==null;){if(e.tag===5){var y=e.stateNode;if(r!==null){var C=xh(y);r.push(C),C.view&&(f=!0)}else f||xh(y).view&&(f=!0);Pc=!0,iv(y,oi===0?n:n+"_"+oi,a),oi++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||ax(e.child,n,a,r,c)&&(f=!0));e=e.sibling}return f}function oa(e,n){for(;e!==null;)e.tag===5?av(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||oa(e.child,n)),e=e.sibling}function Fc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Fc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=wa(n.default,n.share),n!=="none"&&(Br(e,a,n,null,!1)||oa(e.child,!1))}e=e.sibling}}function Pd(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,c=Aa(r,a),f=wa(r.default,a.paired?r.share:r.enter);f!=="none"?Br(e,c,f,null,!1)?(Fc(e),a.paired||n||Xr(e,r.onEnter)):oa(e.child,!1):Fc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Pd(e,n),e=e.sibling;else Fc(e)}function Fd(e){if(xi!==null&&xi.size!==0){var n=xi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var f=wa(a.default,a.share);if(f!=="none"&&(Br(e,r,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,Xr(e,a.onShare)):oa(e.child,!1)),n.delete(r),n.size===0)break}}}Fd(e)}e=e.sibling}}}function Id(e){if(e.tag===30){var n=e.memoizedProps,a=Aa(n,e.stateNode),r=xi!==null?xi.get(a):void 0,c=wa(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Br(e,a,c,null,!1)?r!==void 0?(c=e.stateNode,r.paired=c,c.paired=r,xi.delete(a),Xr(e,n.onShare)):Xr(e,n.onExit):oa(e.child,!1)),xi!==null&&Fd(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Id(e),e=e.sibling;else xi!==null&&Fd(e)}function sx(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=Aa(n,e.stateNode);n=wa(n.default,n.update),e.flags&=-5,n!=="none"&&Br(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&sx(e);e=e.sibling}}function Bd(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,oa(e.child,!1))}Bd(e)}e=e.sibling}}function Ic(e){if(e.tag===30)e.stateNode.paired=null,oa(e.child,!1),Bd(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ic(e),e=e.sibling;else Bd(e)}function rx(e){for(e=e.child;e!==null;)e.tag===30?oa(e.child,!1):(e.subtreeFlags&33554432)!==0&&rx(e),e=e.sibling}function zd(e,n,a,r,c,f,y){for(var C=!1;n!==null;){if(n.tag===5){var k=n.stateNode;if(f!==null&&oi<f.length){var te=f[oi],me=xh(k);(te.view||me.view)&&(C=!0);var Ae;if(Ae=(e.flags&4)===0)if(me.clip)Ae=!0;else{Ae=te.rect;var $=me.rect;Ae=Ae.y!==$.y||Ae.x!==$.x||Ae.height!==$.height||Ae.width!==$.width}Ae&&(e.flags|=4),me.abs?me=!te.abs:(te=te.rect,me=me.rect,me=te.height!==me.height||te.width!==me.width),me&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&iv(k,oi===0?a:a+"_"+oi,c),C&&(e.flags&4)!==0||(ra===null&&(ra=[]),ra.push(k,oi===0?r:r+"_"+oi,n.memoizedProps)),oi++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&y?e.flags|=n.flags&32:zd(e,n.child,a,r,c,f,y)&&(C=!0));n=n.sibling}return C}function ox(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,c=Aa(a,r),f=wa(a.default,a.update),y;y=e.memoizedState,e.memoizedState=null,r=e;var C=e.child;oi=0,c=zd(r,C,c,c,f,y,!1),(e.flags&4)!==0&&c&&Xr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&ox(e);e=e.sibling}}var Pn=!1,$t=!1,la=!1,Hd=!1,lx=typeof WeakSet=="function"?WeakSet:Set,Fn=null,ca=!1,il=!1,Bc=!1,kd=!1;function b1(e,n,a){if(e=e.containerInfo,dh=no,e=d0(e),wf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var f=c.anchorOffset,y=c.focusNode;c=c.focusOffset;try{r.nodeType,y.nodeType}catch{r=null;break e}var C=0,k=-1,te=-1,me=0,Ae=0,$=e,fe=null;t:for(;;){for(var Xe;$!==r||f!==0&&$.nodeType!==3||(k=C+f),$!==y||c!==0&&$.nodeType!==3||(te=C+c),$.nodeType===3&&(C+=$.nodeValue.length),(Xe=$.firstChild)!==null;)fe=$,$=Xe;for(;;){if($===e)break t;if(fe===r&&++me===f&&(k=C),fe===y&&++Ae===c&&(te=C),(Xe=$.nextSibling)!==null)break;$=fe,fe=$.parentNode}$=Xe}r=k===-1||te===-1?null:{start:k,end:te}}else r=null}r=r||{start:0,end:0}}else r=null;for(hh={focusedElem:e,selectionRange:r},no=!1,a=(a&335544064)===a,Fn=n,n=a?9270:1024;Fn!==null;){if(e=Fn,a&&(r=e.deletions,r!==null))for(f=0;f<r.length;f++)a&&Id(r[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&nx(e),zc(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Id(r),zc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&nx(e),zc(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Fn=r):(a&&sx(e),zc(a))}}xi=null}function zc(e){for(;Fn!==null;){var n=Fn,a=e,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var y=Js(n.type,c);a=f.getSnapshotBeforeUpdate(y,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(C){nn(n,n.return,C)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)yh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":yh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=Aa(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=wa(c.default,c.update),c!=="none"&&Br(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Fn=r;break}Fn=n.return}}function cx(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),r&4&&tl(5,a);break;case 1:if(ua(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){nn(a,a.return,y)}else{var c=Js(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){nn(a,a.return,y)}}r&64&&Qg(a),r&512&&sa(a,a.return);break;case 3:if(ua(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{H0(e,n)}catch(y){nn(a,a.return,y)}}break;case 27:n===null&&r&4&&tx(a);case 26:case 5:ua(e,a),n===null&&r&4&&Dd(a),r&512&&sa(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),r&4&&hx(e,a);break;case 13:ua(e,a),r&4&&px(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=O1.bind(null,a),mb(e,a))));break;case 22:if(r=a.memoizedState!==null||Pn,!r){var f=n!==null&&n.memoizedState!==null||$t;n=Pn,c=$t,Pn=r,($t=f)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),qi(e,a,r)):ua(e,a),Pn=n,$t=c}break;case 30:ua(e,a),r&512&&sa(a,a.return);break;case 7:r&512&&sa(a,a.return);default:ua(e,a)}}function Gd(e,n){for(e=e.child;e!==null;)ux(e,n),e=e.sibling}function ux(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,y=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(k){nn(e,e.return,k)}Vd(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,pt=!0}catch(k){nn(e,e.return,k)}break;case 18:try{var C=e.stateNode;n?nv(C,!0):nv(e.stateNode,!1)}catch(k){nn(e,e.return,k)}break;case 22:case 23:e.memoizedState===null&&Gd(e,n);break;default:Gd(e,n)}}function Vd(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,r=n;switch(a.tag){case 4:ux(a,r);break e;case 22:a.memoizedState===null&&Vd(a,r);break e;default:Vd(a,r)}}e=e.sibling}}function fx(e){var n=e.alternate;n!==null&&(e.alternate=null,fx(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Oe(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fn=null,li=!1;function Vi(e,n,a){for(a=a.child;a!==null;)dx(e,n,a),a=a.sibling}function dx(e,n,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(st,a)}catch{}switch(a.tag){case 26:$t||Vn(a,n),Vi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!$t&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$t||Vn(a,n),nl(a);var r=fn,c=li;_s(a.type)&&(fn=a.stateNode,li=!1),Vi(e,n,a),gv(a.stateNode,a.type,a.memoizedProps),fn=r,li=c;break;case 5:$t||Vn(a,n),nl(a);case 6:if(a.tag===6&&nl(a),r=fn,c=li,fn=null,Vi(e,n,a),fn=r,li=c,fn!==null)if(li)try{(fn.nodeType===9?fn.body:fn.nodeName==="HTML"?fn.ownerDocument.body:fn).removeChild(a.stateNode),pt=!0}catch(f){nn(a,n,f)}else try{fn.removeChild(a.stateNode),pt=!0}catch(f){nn(a,n,f)}break;case 18:fn!==null&&(li?(e=fn,tv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),io(e)):tv(fn,a.stateNode));break;case 4:r=fn,c=li,fn=a.stateNode.containerInfo,li=!0,Vi(e,n,a),fn=r,li=c;break;case 0:case 11:case 14:case 15:ds(2,a,n),$t||ds(4,a,n),Vi(e,n,a);break;case 1:$t||(Vn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Jg(a,n,r)),Vi(e,n,a);break;case 21:Vi(e,n,a);break;case 22:$t=(r=$t)||a.memoizedState!==null,Vi(e,n,a),$t=r;break;case 30:Vn(a,n),Vi(e,n,a);break;case 7:$t||Vn(a,n),Vi(e,n,a);break;default:Vi(e,n,a)}}function hx(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{io(e)}catch(a){nn(n,n.return,a)}}}function px(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{io(e)}catch(a){nn(n,n.return,a)}}function M1(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new lx),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new lx),n;default:throw Error(s(435,e.tag))}}function Hc(e,n){var a=M1(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=P1.bind(null,e,r);r.then(c,c)}})}function $n(e,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var f=r[c],y=e,C=n,k=C;e:for(;k!==null;){switch(k.tag){case 27:if(_s(k.type)){fn=k.stateNode,li=!1;break e}break;case 5:fn=k.stateNode,li=!1;break e;case 3:case 4:fn=k.stateNode.containerInfo,li=!0;break e}k=k.return}if(fn===null)throw Error(s(160));dx(y,C,f),fn=null,li=!1,y=f.alternate,y!==null&&(y.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)mx(n,e,a),n=n.sibling}var ji=null;function mx(e,n,a){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var y=r[f];y.ref.impl=y.nextImpl}$n(n,e,a),ei(e),c&4&&(ds(3,e,e.return),tl(3,e),ds(5,e,e.return));break;case 1:$n(n,e,a),ei(e),c&512&&($t||r===null||Vn(r,r.return)),c&64&&Pn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=ji,$n(n,e,a),ei(e),c&512&&($t||r===null||Vn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(Pn)e.stateNode=Jx(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;t:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Ue]||r[Rn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),jn(r,n,a),r[Rn]=e,Ve(r),n=r;break e;case"link":if(f=bv("link","href",c).get(n+(a.href||""))){for(y=0;y<f.length;y++)if(r=f[y],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(y,1);break t}}r=c.createElement(n),jn(r,n,a),c.head.appendChild(r);break;case"meta":if(f=bv("meta","content",c).get(n+(a.content||""))){for(y=0;y<f.length;y++)if(r=f[y],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(y,1);break t}}r=c.createElement(n),jn(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[Rn]=e,Ve(r),n=r}e.stateNode=n}else Pn||wh(f,e.type,e.stateNode);else e.stateNode=Sv(f,a,e.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||$t||n.parentNode.removeChild(n)):c.count--,a===null?Pn||wh(f,e.type,e.stateNode):Sv(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ld(e,e.memoizedProps,r.memoizedProps);break;case 27:$n(n,e,a),ei(e),c&512&&($t||r===null||Vn(r,r.return)),r!==null&&c&4&&Ld(e,e.memoizedProps,r.memoizedProps);break;case 5:if(f=la,la=!1,$n(n,e,a),la=f,ei(e),c&512&&($t||r===null||Vn(r,r.return)),e.flags&32){n=e.stateNode;try{yr(n,""),pt=!0}catch(me){nn(e,e.return,me)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Ld(e,n,r!==null?r.memoizedProps:n)),c&1024&&(Hd=!0);break;case 6:if($n(n,e,a),ei(e),c&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,pt=!0}catch(me){nn(e,e.return,me)}}break;case 3:if(pt=!1,tu=null,f=ji,ji=dl(n.containerInfo),$n(n,e,a),ji=f,ei(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{io(n.containerInfo)}catch(me){nn(e,e.return,me)}Hd&&(Hd=!1,gx(e)),pt=!1;break;case 4:c=la,la=Pn,r=Is(),f=ji,ji=dl(e.stateNode.containerInfo),$n(n,e,a),ei(e),ji=f,pt&&il&&(Bc=!0),pt=r,la=c;break;case 12:$n(n,e,a),ei(e);break;case 31:$n(n,e,a),ei(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Hc(e,n)));break;case 13:$n(n,e,a),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Vc=xe()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Hc(e,n)));break;case 22:f=e.memoizedState!==null,y=r!==null&&r.memoizedState!==null;var C=Pn,k=$t,te=la;Pn=C||f,la=te||f,$t=k||y,$n(n,e,a),$t=k,la=te,Pn=C,ei(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||y||Pn||$t||(n=y||$t,a=Pn,r=$t,Pn=f||Pn,$t=n,hs(e,2),Pn=a,$t=r),!f&&la||Gd(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Hc(e,a))));break;case 19:$n(n,e,a),ei(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Hc(e,n)));break;case 30:c&512&&($t||r===null||Vn(r,r.return)),c=Is(),f=il,y=(a&335544064)===a,C=e.memoizedProps,il=y&&wa(C.default,C.update)!=="none",$n(n,e,a),ei(e),y&&r!==null&&pt&&(e.flags|=4),il=f,pt=c;break;case 21:break;case 7:c&512&&($t||r===null||Vn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:$n(n,e,a),ei(e)}}function ei(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(ex(r)){a=r;break}r=r.return}r=null;for(var c=e.return;c!==null;){if(Nd(c)){var f=c.stateNode;r===null?r=[f]:r.push(f)}if(Cd(c))break;c=c.return}var y=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var C=a.stateNode,k=Ud(e);Oc(e,k,C,y);break;case 5:var te=a.stateNode;a.flags&32&&(yr(te,""),a.flags&=-33);var me=Ud(e);Oc(e,me,te,y);break;case 3:case 4:var Ae=a.stateNode.containerInfo,$=Ud(e);Od(e,$,Ae,y);break;default:throw Error(s(161))}}catch(fe){nn(e,e.return,fe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;gx(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,no=!0,n.reset(),no=!1),e=e.sibling}}function zr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)xx(n,e),n=n.sibling;else ox(n)}function xx(e,n){var a=e.alternate;if(a===null)Pd(e,!1);else switch(e.tag){case 3:if(kd=ca=!1,ix(),zr(n,e),!ca&&!Bc){if(e=ra,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var c=e[r+1];av(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),kd=!0}ra=null;break;case 5:zr(n,e);break;case 4:r=ca,ca=!1,zr(n,e),ca&&(Bc=!0),ca=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Pd(e,!1):zr(n,e));break;case 30:r=ca,c=ix(),ca=!1,zr(n,e),ca&&(e.flags|=4);var f=e.memoizedProps,y=e.stateNode;n=Aa(f,y),y=Aa(a.memoizedProps,y);var C=wa(f.default,f.update);C==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,oi=0,n=zd(e,a,n,y,C,f,!0),oi!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Xr(e,e.memoizedProps.onUpdate),ra=c):c!==null&&(c.push.apply(c,ra),ra=c),ca=(e.flags&32)!==0?!0:r;break;default:zr(n,e)}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)cx(e,n.alternate,n),n=n.sibling}function hs(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:ds(4,a,a.return),hs(a,r);break;case 1:Vn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&Jg(a,a.return,c),hs(a,r);break;case 27:(r&2)!==0&&gv(a.stateNode,a.type,a.memoizedProps);case 5:Vn(a,a.return),a.tag!==5&&a.tag!==27||nl(a),hs(a,r);break;case 6:nl(a);break;case 26:Vn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||$t||c.parentNode.removeChild(c),hs(a,r);break;case 22:a.memoizedState===null&&hs(a,r);break;case 30:Vn(a,a.return),hs(a,r);break;case 7:Vn(a,a.return);default:hs(a,r)}e=e.sibling}}function qi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,y=f.flags,C=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:qi(c,f,a),tl(4,f);break;case 1:if(qi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(me){nn(r,r.return,me)}if(r=f,c=r.updateQueue,c!==null){var k=r.stateNode;try{var te=c.shared.hiddenCallbacks;if(te!==null)for(c.shared.hiddenCallbacks=null,c=0;c<te.length;c++)z0(te[c],k)}catch(me){nn(r,r.return,me)}}C&&y&64&&Qg(f),sa(f,f.return);break;case 27:(a&2)!==0&&tx(f);case 5:f.tag!==5&&f.tag!==27||$g(f),qi(c,f,a),C&&r===null&&y&4&&Dd(f),sa(f,f.return);break;case 6:$g(f);break;case 26:k=f.stateNode,f.memoizedState!==null||k===null||Pn||wh(dl(k.ownerDocument),f.type,k),qi(c,f,a),C&&r===null&&y&4&&Dd(f),sa(f,f.return);break;case 12:qi(c,f,a);break;case 31:qi(c,f,a),C&&y&4&&hx(c,f);break;case 13:qi(c,f,a),C&&y&4&&px(c,f);break;case 22:f.memoizedState===null&&qi(c,f,a),sa(f,f.return);break;case 30:qi(c,f,a),sa(f,f.return);break;case 7:sa(f,f.return);default:qi(c,f,a)}n=n.sibling}}function jd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Go(a))}function qd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Go(e))}function Li(e,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)vx(e,n,a,r),n=n.sibling;else c&&rx(n)}function vx(e,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Ic(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,r),f&2048&&tl(9,n);break;case 1:Li(e,n,a,r);break;case 3:Li(e,n,a,r),c&&kd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Go(f)));break;case 12:if(f&2048){Li(e,n,a,r),f=n.stateNode;try{var y=n.memoizedProps,C=y.id,k=y.onPostCommit;typeof k=="function"&&k(C,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(te){nn(n,n.return,te)}}else Li(e,n,a,r);break;case 31:Li(e,n,a,r);break;case 13:Li(e,n,a,r);break;case 23:break;case 22:y=n.stateNode,C=n.alternate,n.memoizedState!==null?(c&&C!==null&&C.memoizedState===null&&Ic(C),y._visibility&2?Li(e,n,a,r):al(e,n)):(c&&C!==null&&C.memoizedState!==null&&Ic(n),y._visibility&2?Li(e,n,a,r):(y._visibility|=2,Hr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&jd(C,n);break;case 24:Li(e,n,a,r),f&2048&&qd(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(oa(f.child,!0),oa(n.child,!0))),Li(e,n,a,r);break;default:Li(e,n,a,r)}}function Hr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,C=a,k=r,te=y.flags;switch(y.tag){case 0:case 11:case 15:Hr(f,y,C,k,c),tl(8,y);break;case 23:break;case 22:var me=y.stateNode;y.memoizedState!==null?me._visibility&2?Hr(f,y,C,k,c):al(f,y):(me._visibility|=2,Hr(f,y,C,k,c)),c&&te&2048&&jd(y.alternate,y);break;case 24:Hr(f,y,C,k,c),c&&te&2048&&qd(y.alternate,y);break;default:Hr(f,y,C,k,c)}n=n.sibling}}function al(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:al(a,r),c&2048&&jd(r.alternate,r);break;case 24:al(a,r),c&2048&&qd(r.alternate,r);break;default:al(a,r)}n=n.sibling}}var $s=8192;function er(e,n,a){if(e.subtreeFlags&$s)for(e=e.child;e!==null;)_x(e,n,a),e=e.sibling}function _x(e,n,a){switch(e.tag){case 26:er(e,n,a),e.flags&$s&&(e.memoizedState!==null?Cb(a,ji,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&Av(a,e)));break;case 5:er(e,n,a),e.flags&$s&&(e=e.stateNode,(n&335544128)===n&&Av(a,e));break;case 3:case 4:var r=ji;ji=dl(e.stateNode.containerInfo),er(e,n,a),ji=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=$s,$s=16777216,er(e,n,a),$s=r):er(e,n,a));break;case 30:if((e.flags&$s)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var c=e.stateNode;c.paired=null,xi===null&&(xi=new Map),xi.set(r,c)}er(e,n,a);break;default:er(e,n,a)}}function yx(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function sl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Fn=r,bx(r,e)}yx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sx(e),e=e.sibling}function Sx(e){switch(e.tag){case 0:case 11:case 15:sl(e),e.flags&2048&&ds(9,e,e.return);break;case 3:sl(e);break;case 12:sl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,kc(e)):sl(e);break;default:sl(e)}}function kc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Fn=r,bx(r,e)}yx(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ds(8,n,n.return),kc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kc(n));break;default:kc(n)}e=e.sibling}}function bx(e,n){for(;Fn!==null;){var a=Fn;switch(a.tag){case 0:case 11:case 15:ds(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Go(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Fn=r;else e:for(a=e;Fn!==null;){r=Fn;var c=r.sibling,f=r.return;if(fx(r),r===a){Fn=null;break e}if(c!==null){c.return=f,Fn=c;break e}Fn=f}}}var E1={getCacheForType:function(e){var n=Hn(Mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Hn(Mn).controller.signal}},T1=typeof WeakMap=="function"?WeakMap:Map,Qt=0,on=null,Pt=null,Bt=0,tn=0,vi=null,ps=!1,kr=!1,Xd=!1,Fa=0,yn=0,ms=0,tr=0,Gc=0,_i=0,Gr=0,rl=null,ci=null,Wd=!1,Vc=0,Mx=0,jc=1/0,qc=null,gs=null,mn=0,Xi=null,nr=null,fa=0,Yd=0,Kd=null,Ex=null,Vr=null,jr=null,qr=null,ol=0,Xc=null;function yi(){return(Qt&2)!==0&&Bt!==0?Bt&-Bt:Re.T!==null?sh():No()}function Tx(){if(_i===0)if((Bt&536870912)===0||Ut){var e=hi;hi<<=1,(hi&3932160)===0&&(hi=262144),_i=e}else _i=536870912;return e=kn.current,e!==null&&(e.flags|=32),_i}function Xr(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=sv(Aa(e.memoizedProps,a))),jr===null&&(jr=[]),jr.push(n.bind(null,r))}}function ui(e,n,a){(e===on&&(tn===2||tn===9)||e.cancelPendingCommit!==null)&&(Wr(e,0),xs(e,Bt,_i,!1)),Qa(e,a),((Qt&2)===0||e!==on)&&(e===on&&((Qt&2)===0&&(tr|=a),yn===4&&xs(e,Bt,_i,!1)),da(e))}function Ax(e,n,a){if((Qt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Za(e,n),c=r?R1(e,n):Qd(e,n,!0),f=r;do{if(c===0){kr&&!r&&xs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!A1(a)){c=Qd(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var C=e;c=rl;var k=C.current.memoizedState.isDehydrated;if(k&&(Wr(C,y).flags|=256),y=Qd(C,y,!1),y!==2&&y!==6){if(Xd&&!k){C.errorRecoveryDisabledLanes|=f,tr|=f,c=4;break e}f=ci,ci=c,f!==null&&(ci===null?ci=f:ci.push.apply(ci,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Wr(e,0),xs(e,n,0,!0);break}e:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:xs(r,n,_i,!ps);break e;case 2:ci=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Vc+300-xe(),10<c)){if(xs(r,n,_i,!ps),pr(r,0,!0)!==0)break e;fa=n,r.timeoutHandle=gh(wx.bind(null,r,a,ci,qc,Wd,n,_i,tr,Gr,ps,f,"Throttled",-0,0),c);break e}wx(r,a,ci,qc,Wd,n,_i,tr,Gr,ps,f,null,-0,0)}}break}while(!0);da(e)}function wx(e,n,a,r,c,f,y,C,k,te,me,Ae,$,fe){e.timeoutHandle=-1;var Xe=n.subtreeFlags,at=(f&335544064)===f;if(Ae=null,(at||Xe&8192||(Xe&16785408)===16785408)&&(Ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},xi=null,_x(n,f,Ae),at&&(Xe=Ae,at=e.containerInfo,at=(at.nodeType===9?at:at.ownerDocument).__reactViewTransition,at!=null&&(Xe.count++,Xe.waitingForViewTransition=!0,Xe=ml.bind(Xe),at.finished.then(Xe,Xe))),Xe=(f&62914560)===f?Vc-xe():(f&4194048)===f?Mx-xe():0,Xe=Nb(Ae,Xe),Xe!==null)){fa=f,e.cancelPendingCommit=Xe(Px.bind(null,e,n,f,a,r,c,y,C,k,te,me,Ae,null,$,fe)),xs(e,f,y,!te);return}Px(e,n,f,a,r,c,y,C,k,te,me,Ae)}function A1(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!mi(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xs(e,n,a,r){n=Ao(e,n),n&=~Gc,n&=~tr,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Je(c),y=1<<f;r[f]=-1,c&=~y}a!==0&&wo(e,a,n)}function Wc(){return(Qt&6)===0?(ll(0),!1):!0}function Zd(){if(Pt!==null){if(tn===0)var e=Pt.return;else e=Pt,Na=Vs=null,ad(e),Ur=null,qo=0,e=Pt;for(;e!==null;)Zg(e.alternate,e),e=e.return;Pt=null}}function Wr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,Z1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,Zd(),on=e,Pt=a=Ra(e.current,null),Bt=n,tn=0,vi=null,ps=!1,kr=Za(e,n),Xd=!1,Gr=_i=Gc=tr=ms=yn=0,ci=rl=null,Wd=!1,Fa=Ao(e,n),tc(),a}function Rx(e,n){Rt=null,Re.H=Ac,n===Lr||n===dc?(n=P0(),tn=3):n===qf?(n=P0(),tn=4):tn=n===_d?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,vi=n,Pt===null&&(yn=1,wc(e,Ri(n,e.current)))}function Cx(){var e=kn.current;return e===null?!0:(Bt&4194048)===Bt?Yn===null:(Bt&62914560)===Bt||(Bt&536870912)!==0?e===Yn:!1}function Nx(){var e=Re.H;return Re.H=Ac,e===null?Ac:e}function Dx(){var e=Re.A;return Re.A=E1,e}function Yc(){yn=4,ps||(Bt&4194048)!==Bt&&kn.current!==null||(kr=!0),(ms&134217727)===0&&(tr&134217727)===0||on===null||xs(on,Bt,_i,!1)}function Qd(e,n,a){var r=Qt;Qt|=2;var c=Nx(),f=Dx();(on!==e||Bt!==n)&&(qc=null,Wr(e,n)),n=!1;var y=yn;e:do try{if(tn!==0&&Pt!==null){var C=Pt,k=vi;switch(tn){case 8:Zd(),y=6;break e;case 3:case 2:case 9:case 6:kn.current===null&&(n=!0);var te=tn;if(tn=0,vi=null,Yr(e,C,k,te),a&&kr){y=0;break e}break;default:te=tn,tn=0,vi=null,Yr(e,C,k,te)}}w1(),y=yn;break}catch(me){Rx(e,me)}while(!0);return n&&e.shellSuspendCounter++,Na=Vs=null,Qt=r,Re.H=c,Re.A=f,Pt===null&&(on=null,Bt=0,tc()),y}function w1(){for(;Pt!==null;)Lx(Pt)}function R1(e,n){var a=Qt;Qt|=2;var r=Nx(),c=Dx();on!==e||Bt!==n?(qc=null,jc=xe()+500,Wr(e,n)):kr=Za(e,n);e:do try{if(tn!==0&&Pt!==null){n=Pt;var f=vi;t:switch(tn){case 1:tn=0,vi=null,Yr(e,n,f,1);break;case 2:case 9:if(U0(f)){tn=0,vi=null,Ux(n);break}n=function(){tn!==2&&tn!==9||on!==e||(tn=7),da(e)},f.then(n,n);break e;case 3:tn=7;break e;case 4:tn=5;break e;case 7:U0(f)?(tn=0,vi=null,Ux(n)):(tn=0,vi=null,Yr(e,n,f,7));break;case 5:var y=null;switch(Pt.tag){case 26:y=Pt.memoizedState;case 5:case 27:var C=Pt;if(y?Ev(y):C.stateNode.complete){tn=0,vi=null;var k=C.sibling;if(k!==null)Pt=k;else{var te=C.return;te!==null?(Pt=te,Kc(te)):Pt=null}break t}}tn=0,vi=null,Yr(e,n,f,5);break;case 6:tn=0,vi=null,Yr(e,n,f,6);break;case 8:Zd(),yn=6;break e;default:throw Error(s(462))}}C1();break}catch(me){Rx(e,me)}while(!0);return Na=Vs=null,Re.H=r,Re.A=c,Qt=a,Pt!==null?0:(on=null,Bt=0,tc(),yn)}function C1(){for(;Pt!==null&&!Fe();)Lx(Pt)}function Lx(e){var n=Yg(e.alternate,e,Fa);e.memoizedProps=e.pendingProps,n===null?Kc(e):Pt=n}function Ux(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=kg(a,n,n.pendingProps,n.type,void 0,Bt);break;case 11:n=kg(a,n,n.pendingProps,n.type.render,n.ref,Bt);break;case 5:ad(n);var r=n;r===On&&(Ut?(oc(r),r.tag===5&&r.stateNode!=null&&(ln=r.stateNode)):(oc(r),Ut=!0));default:Zg(a,n),n=Pt=b0(n,Fa),n=Yg(a,n,Fa)}e.memoizedProps=e.pendingProps,n===null?Kc(e):Pt=n}function Yr(e,n,a,r){Na=Vs=null,ad(n),Ur=null,qo=0;var c=n.return;try{if(g1(e,c,n,a,Bt)){yn=1,wc(e,Ri(a,e.current)),Pt=null;return}}catch(f){if(c!==null)throw Pt=c,f;yn=1,wc(e,Ri(a,e.current)),Pt=null;return}n.flags&32768?(Ut||r===1?e=!0:kr||(Bt&536870912)!==0?e=!1:(ps=e=!0,(r===2||r===9||r===3||r===6)&&(r=kn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ox(n,e)):Kc(n)}function Kc(e){var n=e;do{if((n.flags&32768)!==0){Ox(n,ps);return}e=n.return;var a=y1(n.alternate,n,Fa);if(a!==null){Pt=a;return}if(n=n.sibling,n!==null){Pt=n;return}Pt=n=e}while(n!==null);yn===0&&(yn=5)}function Ox(e,n){do{var a=S1(e.alternate,e);if(a!==null){a.flags&=32767,Pt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Pt=e;return}Pt=e=a}while(e!==null);yn=6,Pt=null}function Px(e,n,a,r,c,f,y,C,k,te,me,Ae){e.cancelPendingCommit=null;do Zc();while(mn!==0);if((Qt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===on&&(Pt=on=null,Bt=0),nr=n,Xi=e,fa=a,Kd=c,Ex=r,N1(e,n,a,y,C,k,Ae)}}function N1(e,n,a,r,c,f,y){var C=n.lanes|n.childLanes;if(Yd=C,C|=Lf,xr(e,a,C,r,c,f),jr=null,(a&335544064)===a?(qr=a1(e),r=10262):(qr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,F1(Me,function(){return th(),null})):(e.callbackNode=null,e.callbackPriority=0),Pc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Re.T,Re.T=null,c=He.p,He.p=2,f=Qt,Qt|=4;try{b1(e,n,a)}finally{Qt=f,He.p=c,Re.T=r}}mn=1,Pc?Vr=nb(y,e.containerInfo,qr,Jd,$d,L1,eh,th,D1):(Jd(),$d(),eh())}function D1(e){if(mn!==0){var n=Xi.onRecoverableError;n(e,{componentStack:null})}}function L1(){mn===3&&(mn=0,xx(nr,Xi),mn=4)}function Jd(){if(mn===1){mn=0;var e=Xi,n=nr,a=fa,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Re.T,Re.T=null;var c=He.p;He.p=2;var f=Qt;Qt|=4;try{il=Bc=!1,mx(n,e,a),a=hh;var y=d0(e.containerInfo),C=a.focusedElem,k=a.selectionRange;if(y!==C&&C&&C.ownerDocument&&f0(C.ownerDocument.documentElement,C)){if(k!==null&&wf(C)){var te=k.start,me=k.end;if(me===void 0&&(me=te),"selectionStart"in C)C.selectionStart=te,C.selectionEnd=Math.min(me,C.value.length);else{var Ae=C.ownerDocument||document,$=Ae&&Ae.defaultView||window;if($.getSelection){var fe=$.getSelection(),Xe=C.textContent.length,at=Math.min(k.start,Xe),Ct=k.end===void 0?at:Math.min(k.end,Xe);!fe.extend&&at>Ct&&(y=Ct,Ct=at,at=y);var ee=u0(C,at),W=u0(C,Ct);if(ee&&W&&(fe.rangeCount!==1||fe.anchorNode!==ee.node||fe.anchorOffset!==ee.offset||fe.focusNode!==W.node||fe.focusOffset!==W.offset)){var se=Ae.createRange();se.setStart(ee.node,ee.offset),fe.removeAllRanges(),at>Ct?(fe.addRange(se),fe.extend(W.node,W.offset)):(se.setEnd(W.node,W.offset),fe.addRange(se))}}}}for(Ae=[],fe=C;fe=fe.parentNode;)fe.nodeType===1&&Ae.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Ae.length;C++){var Te=Ae[C];Te.element.scrollLeft=Te.left,Te.element.scrollTop=Te.top}}no=!!dh,hh=dh=null}finally{Qt=f,He.p=c,Re.T=r}}e.current=n,mn=2}}function $d(){if(mn===2){mn=0;var e=Xi,n=nr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Re.T,Re.T=null;var r=He.p;He.p=2;var c=Qt;Qt|=4;try{cx(e,n.alternate,n)}finally{Qt=c,He.p=r,Re.T=a}}mn=3}}function eh(){if(mn===4||mn===3){mn=0;var e=Vr;Vr=null,Ge();var n=Xi,a=nr,r=fa,c=Ex,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?mn=5:(mn=0,nr=Xi=null,Fx(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(gs=null),vr(r),a=a.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(st,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Re.T,f=He.p,He.p=2,Re.T=null;try{for(var y=n.onRecoverableError,C=0;C<c.length;C++){var k=c[C];y(k.value,{componentStack:k.stack})}}finally{Re.T=a,He.p=f}}if(c=jr,y=qr,qr=null,c!==null&&(jr=null,y===null&&(y=[]),e!==null))for(k=0;k<c.length;k++)a=(0,c[k])(y),a!==void 0&&e.finished.finally(a);(fa&3)!==0&&Zc(),da(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===Xc?ol++:(ol=0,Xc=n):(ol=0,Xc=null),ll(0)}}function Fx(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Go(n)))}function Zc(){return Vr!==null&&(Vr.skipTransition(),Vr=null),Jd(),$d(),eh(),th()}function th(){if(mn!==5)return!1;var e=Xi,n=Yd;Yd=0;var a=vr(fa),r=Re.T,c=He.p;try{He.p=32>a?32:a,Re.T=null,a=Kd,Kd=null;var f=Xi,y=fa;if(mn=0,nr=Xi=null,fa=0,(Qt&6)!==0)throw Error(s(331));var C=Qt;if(Qt|=4,Sx(f.current),vx(f,f.current,y,a),Qt=C,ll(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(st,f)}catch{}return!0}finally{He.p=c,Re.T=r,Fx(e,n)}}function Ix(e,n,a){n=Ri(a,n),n=vd(e.stateNode,n,2),e=ls(e,n,2),e!==null&&(Qa(e,2),da(e))}function nn(e,n,a){if(e.tag===3)Ix(e,e,a);else for(;n!==null;){if(n.tag===3){Ix(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gs===null||!gs.has(r))){e=Ri(a,e),a=Ug(2),r=ls(n,a,2),r!==null&&(Og(a,r,n,e),Qa(r,2),da(r));break}}n=n.return}}function nh(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new T1;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Xd=!0,c.add(a),e=U1.bind(null,e,n,a),n.then(e,e))}function U1(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,on===e&&(Bt&a)===a&&((yn===4||yn===3&&(Bt&62914560)===Bt&&300>xe()-Vc)&&(Qt&2)===0?Wr(e,0):Gc|=a,Gr===Bt&&(Gr=0)),da(e)}function Bx(e,n){n===0&&(n=mr()),e=Hs(e,n),e!==null&&(Qa(e,n),da(e))}function O1(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Bx(e,a)}function P1(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Bx(e,a)}function F1(e,n){return we(e,n)}var Kr=null,Zr=null,ih=!1,Qc=!1,ah=!1,vs=0;function da(e){e!==Zr&&e.next===null&&(Zr===null?Kr=Zr=e:Zr=Zr.next=e),Qc=!0,ih||(ih=!0,B1())}function ll(e,n){if(!ah&&Qc){ah=!0;do for(var a=!1,r=Kr;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var y=r.suspendedLanes,C=r.pingedLanes;f=(1<<31-Je(42|e)+1)-1,f&=c&~(y&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Gx(r,f))}else f=Bt,f=pr(r,r===on?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Za(r,f)||(a=!0,Gx(r,f));r=r.next}while(a);ah=!1}}function I1(){zx()}function zx(){Qc=ih=!1;var e=0;vs!==0&&K1()&&(e=vs);for(var n=xe(),a=null,r=Kr;r!==null;){var c=r.next,f=Hx(r,n);f===0?(r.next=null,a===null?Kr=c:a.next=c,c===null&&(Zr=a)):(a=r,(e!==0||(f&3)!==0)&&(Qc=!0)),r=c}mn!==0&&mn!==5||ll(e),vs!==0&&(vs=0)}function Hx(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Je(f),C=1<<y,k=c[y];k===-1?((C&a)===0||(C&r)!==0)&&(c[y]=Ma(C,n)):k<=n&&(e.expiredLanes|=C),f&=~C}if(n=on,a=Bt,a=pr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(tn===2||tn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ve(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Za(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&ve(r),vr(a)){case 2:case 8:a=j;break;case 32:a=Me;break;case 268435456:a=Be;break;default:a=Me}return r=kx.bind(null,e),a=we(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&ve(r),e.callbackPriority=2,e.callbackNode=null,2}function kx(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zc()&&e.callbackNode!==a)return null;var r=Bt;return r=pr(e,e===on?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Ax(e,r,n),Hx(e,xe()),e.callbackNode!=null&&e.callbackNode===a?kx.bind(null,e):null)}function Gx(e,n){if(Zc())return null;Ax(e,n,!0)}function B1(){Q1(function(){(Qt&6)!==0?we(Ie,I1):zx()})}function sh(){if(vs===0){var e=Xs;e===0&&(e=dn,dn<<=1,(dn&261888)===0&&(dn=256)),vs=e}return vs}function Vx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wl(e)}function z1(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Vx((c[zn]||null).action),y=r.submitter;y&&(n=(n=y[zn]||null)?Vx(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var C=new Ql("action","action",null,r,c);e.push({event:C,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(vs!==0){var k=new FormData(c,y);hd(a,{pending:!0,data:k,method:c.method,action:f},null,k)}}else typeof f=="function"&&(C.preventDefault(),k=new FormData(c,y),hd(a,{pending:!0,data:k,method:c.method,action:f},f,k))},currentTarget:c}]})}}for(var rh=0;rh<Df.length;rh++){var oh=Df[rh],H1=oh.toLowerCase(),k1=oh[0].toUpperCase()+oh.slice(1);Gi(H1,"on"+k1)}Gi(m0,"onAnimationEnd"),Gi(g0,"onAnimationIteration"),Gi(x0,"onAnimationStart"),Gi("dblclick","onDoubleClick"),Gi("focusin","onFocus"),Gi("focusout","onBlur"),Gi(ZS,"onTransitionRun"),Gi(QS,"onTransitionStart"),Gi(JS,"onTransitionCancel"),Gi(v0,"onTransitionEnd"),pn("onMouseEnter",["mouseout","mouseover"]),pn("onMouseLeave",["mouseout","mouseover"]),pn("onPointerEnter",["pointerout","pointerover"]),pn("onPointerLeave",["pointerout","pointerover"]),Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl));function jx(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var y=r.length-1;0<=y;y--){var C=r[y],k=C.instance,te=C.currentTarget;if(C=C.listener,k!==f&&c.isPropagationStopped())break e;f=C,c.currentTarget=te;try{f(c)}catch(me){ec(me)}c.currentTarget=null,f=k}else for(y=0;y<r.length;y++){if(C=r[y],k=C.instance,te=C.currentTarget,C=C.listener,k!==f&&c.isPropagationStopped())break e;f=C,c.currentTarget=te;try{f(c)}catch(me){ec(me)}c.currentTarget=null,f=k}}}}function Ft(e,n){var a=n[X];a===void 0&&(a=n[X]=new Set);var r=e+"__bubble";a.has(r)||(qx(n,e,2,!1),a.add(r))}function lh(e,n,a){var r=0;n&&(r|=4),qx(a,e,r,n)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function ch(e){if(!e[Jc]){e[Jc]=!0,hn.forEach(function(a){a!=="selectionchange"&&(G1.has(a)||lh(a,!1,e),lh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jc]||(n[Jc]=!0,lh("selectionchange",!1,n))}}function qx(e,n,a,r){switch(Ov(n)){case 2:var c=Ob;break;case 8:c=Pb;break;default:c=Ch}a=c.bind(null,n,a,e),c=void 0,!xf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function uh(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var C=r.stateNode.containerInfo;if(C===c)break;if(y===4)for(y=r.return;y!==null;){var k=y.tag;if((k===3||k===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;C!==null;){if(y=qe(C),y===null)return;if(k=y.tag,k===5||k===6||k===26||k===27){r=f=y;continue e}C=C.parentNode}}r=r.return}qm(function(){var te=f,me=mf(a),Ae=[];e:{var $=_0.get(e);if($!==void 0){var fe=Ql,Xe=e;switch(e){case"keypress":if(Kl(a)===0)break e;case"keydown":case"keyup":fe=AS;break;case"focusin":Xe="focus",fe=Sf;break;case"focusout":Xe="blur",fe=Sf;break;case"beforeblur":case"afterblur":fe=Sf;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=pS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=DS;break;case m0:case g0:case x0:fe=xS;break;case v0:fe=US;break;case"scroll":case"scrollend":fe=dS;break;case"wheel":fe=PS;break;case"copy":case"cut":case"paste":fe=_S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Zm;break;case"submit":fe=CS;break;case"toggle":case"beforetoggle":fe=IS}var at=(n&4)!==0,Ct=!at&&(e==="scroll"||e==="scrollend"),ee=at?$!==null?$+"Capture":null:$;at=[];for(var W=te,se;W!==null;){var Te=W;if(se=Te.stateNode,Te=Te.tag,Te!==5&&Te!==26&&Te!==27||se===null||ee===null||(Te=Do(W,ee),Te!=null&&at.push(ul(W,Te,se))),Ct)break;W=W.return}0<at.length&&($=new fe($,Xe,null,a,me),Ae.push({event:$,listeners:at}))}}if((n&7)===0){e:{if(fe=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",fe&&a!==pf&&(Xe=a.relatedTarget||a.fromElement)&&(qe(Xe)||Xe[D]))break e;($||fe)&&(Xe=me.window===me?me:(fe=me.ownerDocument)?fe.defaultView||fe.parentWindow:window,$?(fe=a.relatedTarget||a.toElement,$=te,fe=fe?qe(fe):null,fe!==null&&(Ct=u(fe),at=fe.tag,fe!==Ct||at!==5&&at!==27&&at!==6)&&(fe=null)):($=null,fe=te),$!==fe&&(at=Ym,Te="onMouseLeave",ee="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(at=Zm,Te="onPointerLeave",ee="onPointerEnter",W="pointer"),Ct=$==null?Xe:dt($),se=fe==null?Xe:dt(fe),Xe=new at(Te,W+"leave",$,a,me),Xe.target=Ct,Xe.relatedTarget=se,Te=null,qe(me)===te&&(at=new at(ee,W+"enter",fe,a,me),at.target=se,at.relatedTarget=Ct,Te=at),Ct=Te,at=$&&fe?I($,fe,V1):null,$!==null&&Xx(Ae,Xe,$,at,!1),fe!==null&&Ct!==null&&Xx(Ae,Ct,fe,at,!0)))}e:{if($=te?dt(te):window,fe=$.nodeName&&$.nodeName.toLowerCase(),fe==="select"||fe==="input"&&$.type==="file")var $e=a0;else if(n0($))if(s0)$e=WS;else{$e=qS;var zt=jS}else fe=$.nodeName,!fe||fe.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?te&&hf(te.elementType)&&($e=a0):$e=XS;if($e&&($e=$e(e,te))){i0(Ae,$e,a,me);break e}zt&&zt(e,$,te)}switch(zt=te?dt(te):window,e){case"focusin":(n0(zt)||zt.contentEditable==="true")&&(Er=zt,Rf=te,zo=null);break;case"focusout":zo=Rf=Er=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,h0(Ae,a,me);break;case"selectionchange":if(KS)break;case"keydown":case"keyup":h0(Ae,a,me)}var lt;if(Mf)e:{switch(e){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else Mr?e0(e,a)&&(ht="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(Qm&&a.locale!=="ko"&&(Mr||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Mr&&(lt=Xm()):($a=me,vf="value"in $a?$a.value:$a.textContent,Mr=!0)),zt=$c(te,ht),0<zt.length&&(ht=new Km(ht,e,null,a,me),Ae.push({event:ht,listeners:zt}),lt?ht.data=lt:(lt=t0(a),lt!==null&&(ht.data=lt)))),(lt=zS?HS(e,a):kS(e,a))&&(ht=$c(te,"onBeforeInput"),0<ht.length&&(zt=new Km("onBeforeInput","beforeinput",null,a,me),Ae.push({event:zt,listeners:ht}),zt.data=lt)),z1(Ae,e,te,a,me)}jx(Ae,n)})}function ul(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $c(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Do(e,a),c!=null&&r.unshift(ul(e,c,f)),c=Do(e,n),c!=null&&r.push(ul(e,c,f))),e.tag===3)return r;e=e.return}return[]}function V1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xx(e,n,a,r,c){for(var f=n._reactName,y=[];a!==null&&a!==r;){var C=a,k=C.alternate,te=C.stateNode;if(C=C.tag,k!==null&&k===r)break;C!==5&&C!==26&&C!==27||te===null||(k=te,c?(te=Do(a,f),te!=null&&y.unshift(ul(a,te,k))):c||(te=Do(a,f),te!=null&&y.push(ul(a,te,k)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var j1=/\r\n?/g,q1=/\u0000|\uFFFD/g;function Wx(e){return(typeof e=="string"?e:""+e).replace(j1,`
`).replace(q1,"")}function Yx(e,n){return n=Wx(n),Wx(e)===n}function an(e,n,a,r,c,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||yr(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&yr(e,""+r);else return;break;case"className":Ei(e,"class",r);break;case"tabIndex":Ei(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ei(e,a,r);break;case"style":Vm(e,r,f);return;case"data":if(n!=="object"){Ei(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Wl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&an(e,n,"name",c.name,c,null),an(e,n,"formEncType",c.formEncType,c,null),an(e,n,"formMethod",c.formMethod,c,null),an(e,n,"formTarget",c.formTarget,c,null)):(an(e,n,"encType",c.encType,c,null),an(e,n,"method",c.method,c,null),an(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Wl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=na);return;case"onScroll":r!=null&&Ft("scroll",e);return;case"onScrollEnd":r!=null&&Ft("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Wl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Ft("beforetoggle",e),Ft("toggle",e),pi(e,"popover",r);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":pi(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=uS.get(a)||a,pi(e,a,r);else return}pt=!0}function fh(e,n,a,r,c,f){switch(a){case"style":Vm(e,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")yr(e,r);else if(typeof r=="number"||typeof r=="bigint")yr(e,""+r);else return;break;case"onScroll":r!=null&&Ft("scroll",e);return;case"onScrollEnd":r!=null&&Ft("scrollend",e);return;case"onClick":r!=null&&(e.onclick=na);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!en.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[zn]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,r,c);break e}pt=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):pi(e,a,r)}return}pt=!0}function jn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ft("error",e),Ft("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:an(e,n,f,y,a,null)}}c&&an(e,n,"srcSet",a.srcSet,a,null),r&&an(e,n,"src",a.src,a,null);return;case"input":Ft("invalid",e);var C=f=y=c=null,k=null,te=null;for(r in a)if(a.hasOwnProperty(r)){var me=a[r];if(me!=null)switch(r){case"name":c=me;break;case"type":y=me;break;case"checked":k=me;break;case"defaultChecked":te=me;break;case"value":f=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:an(e,n,r,me,a,null)}}zm(e,f,C,k,te,y,c,!1);return;case"select":Ft("invalid",e),r=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(C=a[c],C!=null))switch(c){case"value":f=C;break;case"defaultValue":y=C;break;case"multiple":r=C;default:an(e,n,c,C,a,null)}n=f,a=y,e.multiple=!!r,n!=null?_r(e,!!r,n,!1):a!=null&&_r(e,!!r,a,!0);return;case"textarea":Ft("invalid",e),f=c=r=null;for(y in a)if(a.hasOwnProperty(y)&&(C=a[y],C!=null))switch(y){case"value":r=C;break;case"defaultValue":c=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:an(e,n,y,C,a,null)}km(e,r,c,f);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(r=a[k],r!=null))switch(k){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:an(e,n,k,r,a,null)}return;case"dialog":Ft("beforetoggle",e),Ft("toggle",e),Ft("cancel",e),Ft("close",e);break;case"iframe":case"object":Ft("load",e);break;case"video":case"audio":for(r=0;r<cl.length;r++)Ft(cl[r],e);break;case"image":Ft("error",e),Ft("load",e);break;case"details":Ft("toggle",e);break;case"embed":case"source":case"link":Ft("error",e),Ft("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(r=a[te],r!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:an(e,n,te,r,a,null)}return;default:if(hf(n)){for(me in a)a.hasOwnProperty(me)&&(r=a[me],r!==void 0&&fh(e,n,me,r,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(r=a[C],r!=null&&an(e,n,C,r,a,null))}var X1={};function W1(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,C=null,k=null,te=null,me=null;for(fe in a){var Ae=a[fe];if(a.hasOwnProperty(fe)&&Ae!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":k=Ae;default:r.hasOwnProperty(fe)||an(e,n,fe,null,r,Ae)}}for(var $ in r){var fe=r[$];if(Ae=a[$],r.hasOwnProperty($)&&(fe!=null||Ae!=null))switch($){case"type":fe!==Ae&&(pt=!0),f=fe;break;case"name":fe!==Ae&&(pt=!0),c=fe;break;case"checked":fe!==Ae&&(pt=!0),te=fe;break;case"defaultChecked":fe!==Ae&&(pt=!0),me=fe;break;case"value":fe!==Ae&&(pt=!0),y=fe;break;case"defaultValue":fe!==Ae&&(pt=!0),C=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:fe!==Ae&&an(e,n,$,fe,r,Ae)}}ff(e,y,C,k,te,me,f,c);return;case"select":fe=y=C=$=null;for(f in a)if(k=a[f],a.hasOwnProperty(f)&&k!=null)switch(f){case"value":break;case"multiple":fe=k;default:r.hasOwnProperty(f)||an(e,n,f,null,r,k)}for(c in r)if(f=r[c],k=a[c],r.hasOwnProperty(c)&&(f!=null||k!=null))switch(c){case"value":f!==k&&(pt=!0),$=f;break;case"defaultValue":f!==k&&(pt=!0),C=f;break;case"multiple":f!==k&&(pt=!0),y=f;default:f!==k&&an(e,n,c,f,r,k)}n=C,a=y,r=fe,$!=null?_r(e,!!a,$,!1):!!r!=!!a&&(n!=null?_r(e,!!a,n,!0):_r(e,!!a,a?[]:"",!1));return;case"textarea":fe=$=null;for(C in a)if(c=a[C],a.hasOwnProperty(C)&&c!=null&&!r.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:an(e,n,C,null,r,c)}for(y in r)if(c=r[y],f=a[y],r.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":c!==f&&(pt=!0),$=c;break;case"defaultValue":c!==f&&(pt=!0),fe=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&an(e,n,y,c,r,f)}Hm(e,$,fe);return;case"option":for(var Xe in a)if($=a[Xe],a.hasOwnProperty(Xe)&&$!=null&&!r.hasOwnProperty(Xe))switch(Xe){case"selected":e.selected=!1;break;default:an(e,n,Xe,null,r,$)}for(k in r)if($=r[k],fe=a[k],r.hasOwnProperty(k)&&$!==fe&&($!=null||fe!=null))switch(k){case"selected":$!==fe&&(pt=!0),e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:an(e,n,k,$,r,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)$=a[at],a.hasOwnProperty(at)&&$!=null&&!r.hasOwnProperty(at)&&an(e,n,at,null,r,$);for(te in r)if($=r[te],fe=a[te],r.hasOwnProperty(te)&&$!==fe&&($!=null||fe!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:an(e,n,te,$,r,fe)}return;default:if(hf(n)){for(var Ct in a)$=a[Ct],a.hasOwnProperty(Ct)&&$!==void 0&&!r.hasOwnProperty(Ct)&&fh(e,n,Ct,void 0,r,$);for(me in r)$=r[me],fe=a[me],!r.hasOwnProperty(me)||$===fe||$===void 0&&fe===void 0||fh(e,n,me,$,r,fe);return}}for(var ee in a)$=a[ee],a.hasOwnProperty(ee)&&$!=null&&!r.hasOwnProperty(ee)&&an(e,n,ee,null,r,$);for(Ae in r)$=r[Ae],fe=a[Ae],!r.hasOwnProperty(Ae)||$===fe||$==null&&fe==null||an(e,n,Ae,$,r,fe)}function Kx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Y1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,y=c.initiatorType,C=c.duration;if(f&&C&&Kx(y)){for(y=0,C=c.responseEnd,r+=1;r<a.length;r++){var k=a[r],te=k.startTime;if(te>C)break;var me=k.transferSize,Ae=k.initiatorType;me&&Kx(Ae)&&(k=k.responseEnd,y+=me*(k<C?1:(C-te)/(k-te)))}if(--r,n+=8*(f+y)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var dh=null,hh=null;function fl(e){return e.nodeType===9?e:e.ownerDocument}function Zx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qx(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Jx(e,n,a,r){return a=fl(a).createElement(e),a[Rn]=r,a[zn]=n,jn(a,e,n),Ve(a),a}function ph(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var mh=null;function K1(){var e=window.event;return e&&e.type==="popstate"?e===mh?!1:(mh=e,!0):(mh=null,!1)}var gh=typeof setTimeout=="function"?setTimeout:void 0,Z1=typeof clearTimeout=="function"?clearTimeout:void 0,$x=typeof Promise=="function"?Promise:void 0,ev=typeof requestAnimationFrame=="function"?requestAnimationFrame:gh,Q1=typeof queueMicrotask=="function"?queueMicrotask:typeof $x<"u"?function(e){return $x.resolve(null).then(e).catch(J1)}:gh;function J1(e){setTimeout(function(){throw e})}function _s(e){return e==="head"}function tv(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),io(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Eh(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Eh(a);for(var f=a.firstChild;f;){var y=f.nextSibling,C=f.nodeName;f[Ue]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Eh(e.ownerDocument.body);a=c}while(a);io(n)}function nv(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function iv(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function av(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function $1(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function xh(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return $1(n,a,e)}function eb(e){return e.documentElement.clientHeight}function tb(e){this.addEventListener("load",e),this.addEventListener("error",e)}function nb(e,n,a,r,c,f,y,C,k){var te=n.nodeType===9?n:n.ownerDocument;try{var me=te.startViewTransition({update:function(){var $=te.defaultView,fe=$.navigation&&$.navigation.transition,Xe=te.fonts.status;r();var at=[];if(Xe==="loaded"&&(eb(te),te.fonts.status==="loading"&&at.push(te.fonts.ready)),Xe=at.length,e!==null)for(var Ct=e.suspenseyImages,ee=0,W=0;W<Ct.length;W++){var se=Ct[W];if(!se.complete){var Te=se.getBoundingClientRect();if(0<Te.bottom&&0<Te.right&&Te.top<$.innerHeight&&Te.left<$.innerWidth){if(ee+=Tv(se),ee>nu){at.length=Xe;break}se=new Promise(tb.bind(se)),at.push(se)}}}if(0<at.length)return $=Promise.race([Promise.all(at),new Promise(function($e){return setTimeout($e,500)})]).then(c,c),(fe?Promise.allSettled([fe.finished,$]):$).then(f,f);if(c(),fe)return fe.finished.then(f,f);f()},types:a});te.__reactViewTransition=me;var Ae=[];return me.ready.then(function(){for(var $=te.documentElement.getAnimations({subtree:!0}),fe=0;fe<$.length;fe++){var Xe=$[fe],at=Xe.effect,Ct=at.pseudoElement;if(Ct!=null&&Ct.startsWith("::view-transition")){Ae.push(Xe),Xe=at.getKeyframes();for(var ee=Ct=void 0,W=!0,se=0;se<Xe.length;se++){var Te=Xe[se],$e=Te.width;if(Ct===void 0)Ct=$e;else if(Ct!==$e){W=!1;break}if($e=Te.height,ee===void 0)ee=$e;else if(ee!==$e){W=!1;break}delete Te.width,delete Te.height,Te.transform==="none"&&delete Te.transform}W&&Ct!==void 0&&ee!==void 0&&(at.setKeyframes(Xe),W=getComputedStyle(at.target,at.pseudoElement),W.width!==Ct||W.height!==ee)&&(W=Xe[0],W.width=Ct,W.height=ee,W=Xe[Xe.length-1],W.width=Ct,W.height=ee,at.setKeyframes(Xe))}}y()},function($){te.__reactViewTransition===me&&(te.__reactViewTransition=null);try{if(typeof $=="object"&&$!==null)switch($.name){case"InvalidStateError":($.message==="View transition was skipped because document visibility state is hidden."||$.message==="Skipping view transition because document visibility state has become hidden."||$.message==="Skipping view transition because viewport size changed."||$.message==="Transition was aborted because of invalid state")&&($=null)}$!==null&&k($)}finally{r(),c(),y()}}),me.finished.finally(function(){for(var $=0;$<Ae.length;$++)Ae[$].cancel();te.__reactViewTransition===me&&(te.__reactViewTransition=null),C()}),me}catch{return r(),c(),y(),null}}function ir(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}ir.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:E({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},ir.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&r.push(a[c])}return r},ir.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function sv(e){return{name:e,group:new ir("group",e),imagePair:new ir("image-pair",e),old:new ir("old",e),new:new ir("new",e)}}function Si(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Si.prototype.addEventListener=function(e,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(ov(f,e,n,a)===-1){var y=this,C=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(C=function(k){y.removeEventListener(e,n,a),typeof n=="function"?n.call(this,k):n.handleEvent(k)}),r!==null&&(c=y.removeEventListener.bind(y,e,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Qr(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:C,cleanup:c}),g(this._fragmentFiber.child,!1,ib,e,C,r)}this._eventListeners=f}};function ib(e,n,a,r){return b(e).addEventListener(n,a,r),!1}Si.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=ov(r,e,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var f=c.cleanup;c=Qr(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,ab,e,a,c),r.splice(n,1),f!==null&&f()}};function ab(e,n,a,r){return b(e).removeEventListener(n,a,r),!1}function Qr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function rv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function ov(e,n,a,r){if(e.length===0)return-1;r=rv(r);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&rv(f.optionsOrUseCapture)===r)return c}return-1}Si.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=b(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];r.addEventListener(f.type,f.attachedListener,Qr(f.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],r.removeEventListener(f.type,f.attachedListener,Qr(f.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},Si.prototype.focus=function(e){g(this._fragmentFiber.child,!0,lv,e,void 0,void 0)};function lv(e,n){return e.tag===6?!1:(e=b(e),gb(e,n))}Si.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,vh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!lv(n[a],e);a--);};function vh(e,n){return n.push(e),!1}Si.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=b(e),e=fl(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,sb,e,void 0,void 0))};function sb(e,n){return e.tag===6?!1:(e=b(e),e===n||e.contains(n)?(n.blur(),!0):!1)}Si.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,rb,e,void 0,void 0)};function rb(e,n){return e.tag===6||(e=b(e),n.observe(e)),!1}Si.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,ob,e,void 0,void 0);for(var a=n=0;a<Wi.length;a++){var r=Wi[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Wi[n++]=r}Wi.length=n}};function ob(e,n){return e.tag===6||(e=b(e),n.unobserve(e)),!1}var Wi=[],_h=!1;function lb(e,n,a){Wi.push({fragmentInstance:e,observer:n,instance:a}),_h||(_h=!0,xb(function(){_h=!1;var r=Wi;Wi=[];for(var c=0;c<r.length;c++){var f=r[c];f.observer.unobserve(f.instance)}}))}Si.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,cb,e,void 0,void 0),e};function cb(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=b(e),n.push.apply(n,e.getClientRects());return!1}Si.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:b(n).getRootNode(e)},Si.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,vh,a,void 0,void 0);var r=b(n);if(a.length===0){if(a=r,M(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=w(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=b(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=b(a[0]),c=b(a[a.length-1]);var f=M(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=n.compareDocumentPosition(e),C=c.compareDocumentPosition(e),k=y&Node.DOCUMENT_POSITION_CONTAINED_BY||C&Node.DOCUMENT_POSITION_CONTAINED_BY;return C=r&&f&&y&Node.DOCUMENT_POSITION_FOLLOWING&&C&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||f&&c===e||k||C?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||ub(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function ub(e,n,a,r,c){var f=qe(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)e:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break e}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;e:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break e}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=I(a,f,z),n===null?n=!1:(g(n,!0,O,f,a),f=S,S=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=I(r,f,z),n===null?n=!1:(g(n,!0,U,f,r),f=S,T=S=null,n=f!==null)),n):!1}function cv(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Si.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,vh,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=w(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),cv(e,a);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=b(c),cv(c,a)):b(c).scrollIntoView(e),r+=a?-1:1}};function fb(e,n){return e=b(e),uv(e,n),!1}function uv(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function fv(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.addEventListener(c.type,c.attachedListener,Qr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var y=0,C=0;C<Wi.length;C++){var k=Wi[C];(k.fragmentInstance!==n||k.observer!==f||k.instance!==e)&&(Wi[y++]=k)}Wi.length=y,f.observe(e)}),uv(e,n))}function db(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.removeEventListener(c.type,c.attachedListener,Qr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?lb(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function yh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yh(a),Oe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function hb(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ue])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ui(e.nextSibling),e===null)break}return null}function pb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ui(e.nextSibling),e===null))return null;return e}function dv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ui(e.nextSibling),e===null))return null;return e}function Sh(e){return e.data==="$?"||e.data==="$~"}function bh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function mb(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Mh=null;function hv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function pv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function gb(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function xb(e){ev(function(){ev(function(n){return e(n)})})}function mv(e,n,a){switch(n=fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function gv(e,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&an(e,n,r,null,X1,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===na&&(e.onclick=null),Oe(e)}function Eh(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Oe(e)}var Oi=new Map,xv=new Set;function dl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ia=He.d;He.d={f:vb,r:_b,D:yb,C:Sb,L:bb,m:Mb,X:Tb,S:Eb,M:Ab};function vb(){var e=Ia.f(),n=Wc();return e||n}function _b(e){var n=tt(e);n!==null&&n.tag===5&&n.type==="form"?_g(n):Ia.r(e)}var Jr=typeof document>"u"?null:document;function vv(e,n,a){var r=Jr;if(r&&typeof n=="string"&&n){var c=Ai(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),xv.has(c)||(xv.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),jn(n,"link",e),Ve(n),r.head.appendChild(n)))}}function yb(e){Ia.D(e),vv("dns-prefetch",e,null)}function Sb(e,n){Ia.C(e,n),vv("preconnect",e,n)}function bb(e,n,a){Ia.L(e,n,a);var r=Jr;if(r&&e&&n){var c='link[rel="preload"][as="'+Ai(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ai(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ai(a.imageSizes)+'"]')):c+='[href="'+Ai(e)+'"]';var f=c;switch(n){case"style":f=$r(e);break;case"script":f=eo(e)}if(!(Oi.has(f)||(e=E({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Oi.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(hl(f))||n==="script"&&r.querySelector(pl(f))))){var y=r.createElement("link");jn(y,"link",e),n==="style"&&(y[Qe]=!0,y.onload=y.onerror=function(){Lt(y)}),Ve(y),r.head.appendChild(y)}}}function Mb(e,n){Ia.m(e,n);var a=Jr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ai(r)+'"][href="'+Ai(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=eo(e)}if(!Oi.has(f)&&(e=E({rel:"modulepreload",href:e},n),Oi.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pl(f)))return}r=a.createElement("link"),jn(r,"link",e),Ve(r),a.head.appendChild(r)}}}function Eb(e,n,a){Ia.S(e,n,a);var r=Jr;if(r&&e){var c=At(r).hoistableStyles,f=$r(e);n=n||"default";var y=c.get(f);if(!y){var C={loading:0,preload:null};if(y=r.querySelector(hl(f)))C.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Oi.get(f))&&Th(e,a);var k=y=r.createElement("link");Ve(k),jn(k,"link",e),k._p=new Promise(function(te,me){k.onload=te,k.onerror=me}),k.addEventListener("load",function(){C.loading|=1}),k.addEventListener("error",function(){C.loading|=2}),C.loading|=4,eu(y,n,r)}y={type:"stylesheet",instance:y,count:1,state:C},c.set(f,y)}}}function Tb(e,n){Ia.X(e,n);var a=Jr;if(a&&e){var r=At(a).hoistableScripts,c=eo(e),f=r.get(c);f||(f=a.querySelector(pl(c)),f||(e=E({src:e,async:!0},n),(n=Oi.get(c))&&Ah(e,n),f=a.createElement("script"),Ve(f),jn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Ab(e,n){Ia.M(e,n);var a=Jr;if(a&&e){var r=At(a).hoistableScripts,c=eo(e),f=r.get(c);f||(f=a.querySelector(pl(c)),f||(e=E({src:e,async:!0,type:"module"},n),(n=Oi.get(c))&&Ah(e,n),f=a.createElement("script"),Ve(f),jn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function _v(e,n,a,r){var c=(c=ut.current)?dl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=$r(a.href),n=At(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=$r(a.href);var f=At(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(hl(e)))?f._p||(y.instance=f,y.state.loading=5):(f=Oi.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Oi.set(e,f)),wb(c,e,f,y.state))),n&&r===null)throw Error(s(528,""));return y}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=eo(a),n=At(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function $r(e){return'href="'+Ai(e)+'"'}function hl(e){return'link[rel="stylesheet"]['+e+"]"}function yv(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function wb(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Qe]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Qe]=!0,n.onload=n.onerror=Lt.bind(null,n),jn(n,"link",a),Ve(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function eo(e){return'[src="'+Ai(e)+'"]'}function pl(e){return"script[async]"+e}function Sv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Ai(a.href)+'"]');if(r)return n.instance=r,Ve(r),r;var c=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ve(r),jn(r,"style",c),eu(r,a.precedence,e),n.instance=r;case"stylesheet":c=$r(a.href);var f=e.querySelector(hl(c));if(f)return n.state.loading|=4,n.instance=f,Ve(f),f;r=yv(a),(c=Oi.get(c))&&Th(r,c),f=(e.ownerDocument||e).createElement("link"),Ve(f);var y=f;return y._p=new Promise(function(C,k){y.onload=C,y.onerror=k}),jn(f,"link",r),n.state.loading|=4,eu(f,a.precedence,e),n.instance=f;case"script":return f=eo(a.src),(c=e.querySelector(pl(f)))?(n.instance=c,Ve(c),c):(r=a,(c=Oi.get(f))&&(r=E({},a),Ah(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),Ve(c),jn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,eu(r,a.precedence,e));return n.instance}function eu(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,y=0;y<r.length;y++){var C=r[y];if(C.dataset.precedence===n)f=C;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ah(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var tu=null;function bv(e,n,a){if(tu===null){var r=new Map,c=tu=new Map;c.set(a,r)}else c=tu,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ue]||f[Rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var C=r.get(y);C?C.push(f):r.set(y,[f])}}return r}function wh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Rb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Mv(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Ev(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Tv(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Av(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=Tv(n),e.suspenseyImages.push(n)),e=Db.bind(e),n.decode().then(e,e))}function Cb(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=$r(r.href),f=n.querySelector(hl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ml.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Ve(f);return}f=n.ownerDocument||n,r=yv(r),(c=Oi.get(c))&&Th(r,c),f=f.createElement("link"),Ve(f);var y=f;y._p=new Promise(function(C,k){y.onload=C,y.onerror=k}),jn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ml.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var nu=0;function Nb(e,n){return e.stylesheets&&e.count===0&&au(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&au(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&nu===0&&(nu=62500*Y1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&au(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>nu?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function wv(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)au(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function ml(){this.count--,wv(this)}function Db(){this.imgCount--,wv(this)}var iu=null;function au(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,iu=new Map,n.forEach(Lb,e),iu=null,ml.call(e))}function Lb(e,n){if(!(n.state.loading&4)){var a=iu.get(e);if(a)var r=a.get(null);else{a=new Map,iu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),r=y)}r&&a.set(null,r)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||r,f===r&&a.set(null,c),a.set(y,c),this.count++,r=ml.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var to={$$typeof:ae,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Ub(e,n,a,r,c,f,y,C,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gr(0),this.hiddenUpdates=gr(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.transitionTypes=null,this.incompleteTransitions=new Map}function Rv(e,n,a,r,c,f,y,C,k,te,me,Ae){return e=new Ub(e,n,a,y,k,te,me,Ae,C),n=1,f===!0&&(n|=24),f=ri(3,null,null,n),e.current=f,f.stateNode=e,n=Gf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Xf(f),e}function Cv(e){return e?(e=wr,e):wr}function Nv(e,n,a,r,c,f){c=Cv(c),r.context===null?r.context=c:r.pendingContext=c,r=os(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ls(e,r,n),a!==null&&(ui(a,e,n),Xo(a,e,n))}function Dv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Rh(e,n){Dv(e,n),(e=e.alternate)&&Dv(e,n)}function Lv(e){if(e.tag===13||e.tag===31){var n=Hs(e,67108864);n!==null&&ui(n,e,67108864),Rh(e,67108864)}}function Uv(e){if(e.tag===13||e.tag===31){var n=yi();n=Co(n);var a=Hs(e,n);a!==null&&ui(a,e,n),Rh(e,n)}}var no=!0;function Ob(e,n,a,r){var c=Re.T;Re.T=null;var f=He.p;try{He.p=2,Ch(e,n,a,r)}finally{He.p=f,Re.T=c}}function Pb(e,n,a,r){var c=Re.T;Re.T=null;var f=He.p;try{He.p=8,Ch(e,n,a,r)}finally{He.p=f,Re.T=c}}function Ch(e,n,a,r){if(no){var c=Nh(r);if(c===null)uh(e,n,r,su,a),Pv(e,r);else if(Ib(c,e,n,a,r))r.stopPropagation();else if(Pv(e,r),n&4&&-1<Fb.indexOf(e)){for(;c!==null;){var f=tt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Hi(f.pendingLanes);if(y!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var k=1<<31-Je(y);C.entanglements[1]|=k,y&=~k}da(f),(Qt&6)===0&&(jc=xe()+500,ll(0))}}break;case 31:case 13:C=Hs(f,2),C!==null&&ui(C,f,2),Wc(),Rh(f,2)}if(f=Nh(r),f===null&&uh(e,n,r,su,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else uh(e,n,r,null,a)}}function Nh(e){return e=mf(e),Dh(e)}var su=null;function Dh(e){if(su=null,e=qe(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return su=e,null}function Ov(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ee()){case Ie:return 2;case j:return 8;case Me:case _e:return 32;case Be:return 268435456;default:return 32}default:return 32}}var Lh=!1,ys=null,Ss=null,bs=null,gl=new Map,xl=new Map,Ms=[],Fb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pv(e,n){switch(e){case"focusin":case"focusout":ys=null;break;case"dragenter":case"dragleave":Ss=null;break;case"mouseover":case"mouseout":bs=null;break;case"pointerover":case"pointerout":gl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(n.pointerId)}}function vl(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=tt(n),n!==null&&Lv(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Ib(e,n,a,r,c){switch(n){case"focusin":return ys=vl(ys,e,n,a,r,c),!0;case"dragenter":return Ss=vl(Ss,e,n,a,r,c),!0;case"mouseover":return bs=vl(bs,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return gl.set(f,vl(gl.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,xl.set(f,vl(xl.get(f)||null,e,n,a,r,c)),!0}return!1}function Fv(e){var n=qe(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,ql(e.priority,function(){Uv(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,ql(e.priority,function(){Uv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ru(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Nh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);pf=r,a.target.dispatchEvent(r),pf=null}else return n=tt(a),n!==null&&Lv(n),e.blockedOn=a,!1;n.shift()}return!0}function Iv(e,n,a){ru(e)&&a.delete(n)}function Bb(){Lh=!1,ys!==null&&ru(ys)&&(ys=null),Ss!==null&&ru(Ss)&&(Ss=null),bs!==null&&ru(bs)&&(bs=null),gl.forEach(Iv),xl.forEach(Iv)}function ou(e,n){e.blockedOn===n&&(e.blockedOn=null,Lh||(Lh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Bb)))}var lu=null;function Bv(e){lu!==e&&(lu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){lu===e&&(lu=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Dh(r||a)===null)continue;break}var f=tt(a);f!==null&&(e.splice(n,3),n-=3,hd(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function io(e){function n(k){return ou(k,e)}ys!==null&&ou(ys,e),Ss!==null&&ou(Ss,e),bs!==null&&ou(bs,e),gl.forEach(n),xl.forEach(n);for(var a=0;a<Ms.length;a++){var r=Ms[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ms.length&&(a=Ms[0],a.blockedOn===null);)Fv(a),a.blockedOn===null&&Ms.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],y=c[zn]||null;if(typeof f=="function")y||Bv(a);else if(y){var C=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[zn]||null)C=y.formAction;else if(Dh(c)!==null)continue}else C=y.action;typeof C=="function"?a[r+1]=C:(a.splice(r,3),r-=3),Bv(a)}}}function zv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Uh(e){this._internalRoot=e}cu.prototype.render=Uh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=yi();Nv(a,r,e,n,null,null)},cu.prototype.unmount=Uh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Nv(e.current,2,null,e,null,null),Wc(),n[D]=null}};function cu(e){this._internalRoot=e}cu.prototype.unstable_scheduleHydration=function(e){if(e){var n=No();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ms.length&&n!==0&&n<Ms[a].priority;a++);Ms.splice(a,0,e),a===0&&Fv(e)}};var Hv=t.version;if(Hv!=="19.3.1")throw Error(s(527,Hv,"19.3.1"));He.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var zb={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Re,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{st=uu.inject(zb),ft=uu}catch{}}return yl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Cg,f=Ng,y=Dg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Rv(e,1,!1,null,null,a,r,null,c,f,y,zv),e[D]=n.current,ch(e),new Uh(n)},yl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=Cg,y=Ng,C=Dg,k=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=Rv(e,1,!0,n,a??null,r,c,k,f,y,C,zv),n.context=Cv(null),a=n.current,r=yi(),r=Co(r),c=os(r),c.callback=null,ls(a,c,r),a=r,n.current.lanes=a,Qa(n,a),da(n),e[D]=n.current,ch(e),new cu(n)},yl.version="19.3.1",yl}var Zv;function Jb(){if(Zv)return Ih.exports;Zv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Ih.exports=Qb(),Ih.exports}var $b=Jb();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ay=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=ke.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...p},x)=>ke.createElement("svg",{ref:x,...tM,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:ay("lucide",l),...p},[...d.map(([m,_])=>ke.createElement(m,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=(o,t)=>{const i=ke.forwardRef(({className:s,...l},u)=>ke.createElement(nM,{ref:u,iconNode:t,className:ay(`lucide-${eM(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=Et("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=Et("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=Et("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=Et("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Et("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=Et("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=Et("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=Et("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=Et("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Et("Disc3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=Et("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=Et("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=Et("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=Et("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=Et("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=Et("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=Et("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=Et("ListMusic",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=Et("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=Et("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Et("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=Et("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=Et("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=Et("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=Et("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=Et("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=Et("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=Et("Repeat1",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=Et("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=Et("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=Et("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=Et("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=Et("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=Et("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=Et("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=Et("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=Et("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=Et("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=Et("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=Et("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=Et("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=Et("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=Et("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=Et("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function TM(){if(typeof navigator>"u")return"ios";const o=navigator.userAgent||"";return/iPad|iPhone|iPod/.test(o)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?"ios":/Android/i.test(o)?"android":/Mac/i.test(o)?"ios":"android"}function xm(o){const t=o.replace("#","").trim();if(t.length!==6)return"255, 90, 54";const i=parseInt(t,16),s=i>>16&255,l=i>>8&255,u=i&255;return`${s}, ${l}, ${u}`}function cr(o){if(!Number.isFinite(o)||o<0)return"0:00";const t=Math.floor(o),i=Math.floor(t/60),s=t%60;return`${i}:${s.toString().padStart(2,"0")}`}function AM(o){const t=o.trim().toLowerCase();return t?/\.(flac|wav|mp3|m4a|ogg|opus|aac)(\?|$)/.test(t)?"direct":t.includes("spotify.com")||t.includes("spotify.link")?"spotify":t.includes("soundcloud.com")||t.includes("snd.sc")?"soundcloud":t.includes("tiktok.com")?"tiktok":t.includes("youtube.com")||t.includes("youtu.be")?"youtube":null:null}const Xn={youtube:{label:"YouTube",short:"YT",dotColor:"#E5484D"},spotify:{label:"Spotify",short:"SP",dotColor:"#30A46C"},soundcloud:{label:"SoundCloud",short:"SC",dotColor:"#F76B15"},tiktok:{label:"TikTok",short:"TT",dotColor:"#E4E4E7"},direct:{label:"Direct URL",short:"RAW",dotColor:"#E5A93C"},local:{label:"Local Lossless",short:"FLAC",dotColor:"#5EB1EF"}};function wM(o,t){return o?new Promise(i=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{try{const l=document.createElement("canvas");l.width=16,l.height=16;const u=l.getContext("2d");if(!u)return i(t);u.drawImage(s,0,0,16,16);const d=u.getImageData(0,0,16,16).data;let p=0,x=0,m=0,_=0;for(let g=0;g<d.length;g+=4){const v=.299*d[g]+.587*d[g+1]+.114*d[g+2];v>35&&v<235&&(p+=d[g],x+=d[g+1],m+=d[g+2],_++)}if(_===0)return i(t);i(`${Math.round(p/_)}, ${Math.round(x/_)}, ${Math.round(m/_)}`)}catch{i(t)}},s.onerror=()=>i(t),s.src=o}):Promise.resolve(t)}const $v=o=>{let t;const i=new Set,s=(m,_)=>{const g=typeof m=="function"?m(t):m;if(!Object.is(g,t)){const v=t;t=_??(typeof g!="object"||g===null)?g:Object.assign({},t,g),i.forEach(M=>M(t,v))}},l=()=>t,p={setState:s,getState:l,getInitialState:()=>x,subscribe:m=>(i.add(m),()=>i.delete(m))},x=t=o(s,l,p);return p},RM=(o=>o?$v(o):$v),CM=o=>o;function NM(o,t=CM){const i=Fh.useSyncExternalStore(o.subscribe,Fh.useCallback(()=>t(o.getState()),[o,t]),()=>t(o.getInitialState()));return Fh.useDebugValue(i),i}const e_=o=>{const t=RM(o),i=s=>NM(t,s);return Object.assign(i,t),i},gy=(o=>o?e_(o):e_),xy="harune_prefs_v2";function DM(){try{const o=localStorage.getItem(xy);return o?JSON.parse(o):{}}catch{return{}}}function Sl(o){try{localStorage.setItem(xy,JSON.stringify(o))}catch{}}function vy(o){typeof document>"u"||(document.documentElement.style.setProperty("--accent",o),document.documentElement.style.setProperty("--accent-rgb",xm(o)))}const Rl=DM(),_y=Rl.accentColor||"#FF5A36";vy(_y);let kh;const Mt=gy((o,t)=>({activeTab:"discover",accentColor:_y,navMode:Rl.navMode||"auto",deviceOS:TM(),streamQuality:Rl.streamQuality||"high",deliveryMode:Rl.deliveryMode||"stream",harubotConfig:Rl.harubotConfig||{mode:"ytdlp",host:"https://sepay-webhook-p0o1.onrender.com",port:2333,key:""},harubotStatus:{connected:!0,engine:"harubot_ytdlp",label:"HaruBot · yt-dlp Engine",latency_ms:42,guilds_count:14},toastMessage:null,setActiveTab:i=>o({activeTab:i}),setAccentColor:i=>{vy(i),o({accentColor:i});const s=t();Sl({accentColor:i,navMode:s.navMode,streamQuality:s.streamQuality,deliveryMode:s.deliveryMode,harubotConfig:s.harubotConfig})},setNavMode:i=>{o({navMode:i});const s=t();Sl({accentColor:s.accentColor,navMode:i,streamQuality:s.streamQuality,deliveryMode:s.deliveryMode,harubotConfig:s.harubotConfig})},setStreamQuality:i=>{o({streamQuality:i});const s=t();Sl({accentColor:s.accentColor,navMode:s.navMode,streamQuality:i,deliveryMode:s.deliveryMode,harubotConfig:s.harubotConfig})},setDeliveryMode:i=>{o({deliveryMode:i});const s=t();Sl({accentColor:s.accentColor,navMode:s.navMode,streamQuality:s.streamQuality,deliveryMode:i,harubotConfig:s.harubotConfig})},updateHarubotConfig:i=>{const s={...t().harubotConfig,...i};o({harubotConfig:s});const l=t();Sl({accentColor:l.accentColor,navMode:l.navMode,streamQuality:l.streamQuality,deliveryMode:l.deliveryMode,harubotConfig:s})},setHarubotStatus:i=>o({harubotStatus:i}),showToast:i=>{kh&&window.clearTimeout(kh),o({toastMessage:i}),kh=window.setTimeout(()=>o({toastMessage:null}),2800)},getEffectiveOS:()=>{const{navMode:i,deviceOS:s}=t();return i==="auto"?s:i}}));function Ds(o,t,i,s){const l=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${o}"/>
        <stop offset="100%" stop-color="${t}"/>
      </linearGradient>
    </defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <circle cx="200" cy="200" r="118" fill="none" stroke="rgba(245,245,247,0.16)" stroke-width="1.5"/>
    <circle cx="200" cy="200" r="34" fill="rgba(11,11,14,0.42)" stroke="rgba(245,245,247,0.22)" stroke-width="1"/>
    <circle cx="200" cy="200" r="6" fill="rgba(245,245,247,0.75)"/>
    <text x="28" y="344" fill="rgba(245,245,247,0.88)" font-family="sans-serif" font-size="20" font-weight="600" letter-spacing="1.5">${i}</text>
    <text x="28" y="370" fill="rgba(245,245,247,0.52)" font-family="monospace" font-size="12" letter-spacing="2">${s}</text>
  </svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(l)}`}const Va=[{id:"demo_vn_1",source_platform:"spotify",source_url:"query:Lạ Lùng Vũ official audio",title:"Lạ Lùng",artist:"Vũ.",album:"Harune Analog Session",cover_url:Ds("#16396B","#0C1830","LẠ LÙNG","VŨ. · HI-FI"),duration_sec:261,codec:"m4a",bitrate_kbps:256,sample_rate_hz:48e3,is_lossless:!1,stream_url:"",accent_hint:"56, 189, 248"},{id:"demo_jp_2",source_platform:"youtube",source_url:"query:Sparkle RADWIMPS Your Name original audio",title:"Sparkle (Your Name OST)",artist:"RADWIMPS",album:"Kimi no Na wa.",cover_url:Ds("#1E3A6E","#12172A","SPARKLE","YOUR NAME OST"),duration_sec:408,codec:"opus",bitrate_kbps:256,sample_rate_hz:48e3,is_lossless:!1,stream_url:"",accent_hint:"96, 165, 250"},{id:"demo_sc_3",source_platform:"youtube",source_url:"query:Nơi Này Có Anh Sơn Tùng M-TP official",title:"Nơi Này Có Anh",artist:"Sơn Tùng M-TP",album:"V-Pop Essential",cover_url:Ds("#3D2532","#15121A","V-POP","HI-FI STREAM"),duration_sec:260,codec:"m4a",bitrate_kbps:256,sample_rate_hz:48e3,is_lossless:!1,stream_url:"",accent_hint:"244, 114, 182"},{id:"demo_kr_4",source_platform:"youtube",source_url:"query:Love wins all IU official audio",title:"Love wins all",artist:"IU",album:"The Winning",cover_url:Ds("#2B2340","#12101A","K-POP","STUDIO AUDIO"),duration_sec:271,codec:"opus",bitrate_kbps:256,sample_rate_hz:48e3,is_lossless:!1,stream_url:"",accent_hint:"167, 139, 250"},{id:"demo_tt_5",source_platform:"youtube",source_url:"query:Nàng Thơ Hoàng Dũng official audio",title:"Nàng Thơ",artist:"Hoàng Dũng",album:"25",cover_url:Ds("#3A2A1E","#141110","NÀNG THƠ","ACOUSTIC"),duration_sec:254,codec:"m4a",bitrate_kbps:256,sample_rate_hz:48e3,is_lossless:!1,stream_url:"",accent_hint:"251, 146, 60"}],vp=[{id:"pl_mix_default",name:"Harune Mix — Đa Nền Tảng",description:"Trộn nhạc từ Spotify, YouTube, SoundCloud và file FLAC cá nhân trong cùng một hàng phát.",cover_url:Ds("#3D2419","#131317","MIX 01","MULTI-SOURCE"),track_count:14,platforms:["spotify","youtube","soundcloud","local"],is_mixed:!0},{id:"pl_late_hi_fi",name:"Late Night Listening Room",description:"Acoustic, jazz ấm và vocal mộc tối ưu cho nghe đêm khuya với EQ Late Night.",cover_url:Ds("#212936","#111217","ROOM 02","HI-FI"),track_count:9,platforms:["youtube","spotify"],is_mixed:!0},{id:"pl_archive_cuts",name:"TikTok & SoundCloud Rare Cuts",description:"Các bản remix, slowed và demo hiếm gom trực tiếp qua bộ phân giải HaruBot.",cover_url:Ds("#30281E","#131214","CUTS 03","SC + TT"),track_count:11,platforms:["soundcloud","tiktok"],is_mixed:!0}],LM=[32,64,125,250,500,1e3,2e3,4e3,8e3,16e3],UM=["32","64","125","250","500","1K","2K","4K","8K","16K"],Cl=[{id:"builtin_flat",name:"Flat",gains:[0,0,0,0,0,0,0,0,0,0],bass_boost:0,spatial_3d:0,playback_rate:1,reverb_amount:0,is_builtin:!0},{id:"builtin_bass",name:"Bass Boost",gains:[6,5,3.5,1.5,0,-.5,0,1,1.5,1],bass_boost:.35,spatial_3d:0,playback_rate:1,reverb_amount:0,is_builtin:!0},{id:"builtin_vocal",name:"Vocal",gains:[-2,-1.5,0,2,4,4.5,3,1,0,-1],bass_boost:0,spatial_3d:.1,playback_rate:1,reverb_amount:0,is_builtin:!0},{id:"builtin_acoustic",name:"Acoustic",gains:[2.5,2,1,.5,1.5,2,2.5,3,2.5,1.5],bass_boost:.1,spatial_3d:.2,playback_rate:1,reverb_amount:.05,is_builtin:!0},{id:"builtin_latenight",name:"Late Night",gains:[3,2,1,0,-1,-1.5,-1,.5,1,.5],bass_boost:.15,spatial_3d:.15,playback_rate:1,reverb_amount:.1,is_builtin:!0},{id:"builtin_hifi",name:"Hi-Fi Studio",gains:[1.5,1,.5,0,0,.5,1,1.5,2,1.5],bass_boost:.1,spatial_3d:.15,playback_rate:1,reverb_amount:0,is_builtin:!0}],OM=[{name:"Braun Signal",hex:"#FF5A36"},{name:"Warm Amber",hex:"#E5A03B"},{name:"Studio Copper",hex:"#D97757"},{name:"Sage Monitor",hex:"#4CAF82"},{name:"Steel Blue",hex:"#4E9AF1"},{name:"Ivory Silver",hex:"#D4D4D8"}],PM={demo_vn_1:[{time:0,duration:4.5,text:"♪ Mở màn phòng thu Analog — Đêm Mưa Sài Gòn ♪"},{time:4.5,duration:5,text:"Hạt mưa rơi nhẹ qua khung cửa kính mờ hơi sương"},{time:9.5,duration:5,text:"Nhịp bass ấm vang lên giữa góc phố đêm thân thương"},{time:14.5,duration:5.2,text:"Chậm lại một nhịp để nghe từng dải âm ngân xa"},{time:19.7,duration:5.3,text:"Dòng người vội vã trôi qua ánh đèn vàng hiên nhà"},{time:25,duration:5.5,text:"Gợn sóng âm thanh chạm khẽ vào khoảng lặng tim ta"},{time:30.5,duration:6,text:"Harune phát từng giai điệu ấm áp không phai nhòa ♪"}]},ne=gy((o,t)=>({queue:Va,queueIndex:0,currentTrack:Va[0],isPlaying:!1,isBuffering:!1,currentTime:0,duration:Va[0].duration_sec,volume:.85,muted:!1,shuffle:!1,repeat:"off",isFullscreenOpen:!1,ambientRgb:Va[0].accent_hint||"255, 90, 54",seekRequest:null,eqGains:[...Cl[0].gains],activePresetId:Cl[0].id,eqPresets:Cl,preAmpDb:0,tubeWarmth:.18,bitPerfect:!1,bassBoost:.15,spatial3d:.1,playbackRate:1,preservesPitch:!1,reverbAmount:0,vocalRemover:0,karaokeMicOn:!1,micGain:.9,visualMode:"wave3d",visualPalette:"azure",lyricsLines:PM.demo_vn_1,lyricsLoading:!1,lyricsSynced:!0,deckBTrack:Va[2]||null,deckBPlaying:!1,deckBRate:1,crossfader:0,djFilter:0,djEcho:0,libraryTracks:Va,playlists:[],offlineTrackIds:[],playTrack:(i,s)=>{const l=s&&s.length>0?s:t().queue;let u=l.findIndex(p=>p.id===i.id);const d=u===-1?[i,...l]:l;u===-1&&(u=0),o({queue:d,queueIndex:u,currentTrack:i,isPlaying:!0,currentTime:0,duration:i.duration_sec||0,ambientRgb:i.accent_hint||t().ambientRgb})},addLocalTrack:(i,s=!0)=>{const l=[i,...t().queue.filter(d=>d.id!==i.id)],u=[i,...t().libraryTracks.filter(d=>d.id!==i.id)];o(s?{queue:l,libraryTracks:u,queueIndex:0,currentTrack:i,isPlaying:!0,currentTime:0,duration:i.duration_sec||0}:{queue:l,libraryTracks:u})},setLibraryTracks:i=>o({libraryTracks:i.length?i:Va}),prependLibraryTrack:i=>o(s=>({libraryTracks:[i,...s.libraryTracks.filter(l=>l.id!==i.id)]})),setPlaylists:i=>o({playlists:i}),setOfflineTrackIds:i=>o({offlineTrackIds:i}),togglePlay:()=>{const{currentTrack:i,isPlaying:s}=t();i&&o({isPlaying:!s})},setIsPlaying:i=>o({isPlaying:i}),setIsBuffering:i=>o({isBuffering:i}),setProgress:(i,s)=>o(l=>({currentTime:i,duration:typeof s=="number"&&Number.isFinite(s)&&s>0?s:l.duration})),requestSeek:i=>o({seekRequest:Math.max(0,i),currentTime:Math.max(0,i)}),clearSeekRequest:()=>o({seekRequest:null}),nextTrack:()=>{const{queue:i,queueIndex:s,shuffle:l,repeat:u}=t();if(i.length===0)return;let d=s+1;if(l&&i.length>1)do d=Math.floor(Math.random()*i.length);while(d===s);else if(d>=i.length)if(u==="all")d=0;else{o({isPlaying:!1,currentTime:0});return}const p=i[d];o({queueIndex:d,currentTrack:p,isPlaying:!0,currentTime:0,duration:p.duration_sec||0,ambientRgb:p.accent_hint||t().ambientRgb})},prevTrack:()=>{const{queue:i,queueIndex:s,currentTime:l}=t();if(i.length===0)return;if(l>3){t().requestSeek(0);return}const u=s>0?s-1:i.length-1,d=i[u];o({queueIndex:u,currentTrack:d,isPlaying:!0,currentTime:0,duration:d.duration_sec||0,ambientRgb:d.accent_hint||t().ambientRgb})},setVolume:i=>o({volume:Math.max(0,Math.min(1,i)),muted:i===0}),toggleMute:()=>o(i=>({muted:!i.muted})),toggleShuffle:()=>o(i=>({shuffle:!i.shuffle})),cycleRepeat:()=>o(i=>({repeat:i.repeat==="off"?"all":i.repeat==="all"?"one":"off"})),setFullscreenOpen:i=>o({isFullscreenOpen:i}),setAmbientRgb:i=>o({ambientRgb:i}),setEqBand:(i,s)=>o(l=>{const u=[...l.eqGains];return u[i]=Math.max(-12,Math.min(12,s)),{eqGains:u,activePresetId:"custom"}}),setEqPresets:i=>o({eqPresets:i.length?i:Cl}),applyEqPreset:i=>{const s=t().eqPresets.find(l=>l.id===i);s&&o({activePresetId:s.id,eqGains:[...s.gains],bassBoost:s.bass_boost,spatial3d:s.spatial_3d,playbackRate:s.playback_rate,reverbAmount:s.reverb_amount})},saveCustomPreset:i=>{const s=i.trim();if(!s)return null;const l=t(),u={id:`custom_${Date.now()}`,name:s,gains:[...l.eqGains],bass_boost:l.bassBoost,spatial_3d:l.spatial3d,playback_rate:l.playbackRate,reverb_amount:l.reverbAmount,is_builtin:!1};return o({eqPresets:[...l.eqPresets,u],activePresetId:u.id}),u},setDspParam:(i,s)=>o(l=>({...l,[i]:s,activePresetId:["bassBoost","spatial3d","playbackRate","reverbAmount"].includes(i)?"custom":l.activePresetId})),setBitPerfect:i=>o({bitPerfect:i}),setPreservesPitch:i=>o({preservesPitch:i}),setKaraokeMicOn:i=>o({karaokeMicOn:i}),setVisualMode:i=>o({visualMode:i}),setVisualPalette:i=>o({visualPalette:i}),setLyricsState:(i,s,l)=>o({lyricsLines:i,lyricsSynced:s,lyricsLoading:l}),loadDeckB:i=>o({deckBTrack:i,deckBPlaying:!1}),toggleDeckBPlay:()=>o(i=>({deckBPlaying:i.deckBTrack?!i.deckBPlaying:!1})),setDeckBPlaying:i=>o({deckBPlaying:i})})),_p=[{key:"discover",label:"Khám phá",shortLabel:"Khám phá",icon:uM},{key:"library",label:"Thư viện & Link",shortLabel:"Thư viện",icon:mM},{key:"dsp",label:"Phòng Hi-Fi",shortLabel:"Hi-Fi EQ",icon:sf},{key:"stats",label:"Thống kê",shortLabel:"Thống kê",icon:rM},{key:"settings",label:"Tùy chỉnh",shortLabel:"Cài đặt",icon:yM}];function FM(){const o=Mt(u=>u.activeTab),t=Mt(u=>u.setActiveTab),i=Mt(u=>u.harubotStatus),[s,l]=ke.useState(null);return ke.useEffect(()=>{const u=d=>{d.preventDefault(),l(d)};return window.addEventListener("beforeinstallprompt",u),()=>window.removeEventListener("beforeinstallprompt",u)},[]),h.jsxs("aside",{className:"hidden lg:flex lg:w-[236px] lg:shrink-0 lg:flex-col lg:justify-between border-r border-white/[0.07] bg-[#0D0D11]/90 backdrop-blur-md z-20",children:[h.jsxs("div",{className:"p-6",children:[h.jsxs("div",{className:"flex items-center gap-2.5 pb-7 border-b border-white/[0.07]",children:[h.jsx("span",{className:"h-2.5 w-2.5 rounded-full shrink-0",style:{backgroundColor:"var(--accent)"}}),h.jsxs("div",{className:"flex items-baseline gap-2",children:[h.jsx("span",{className:"text-[17px] font-bold tracking-[0.14em] text-[#F5F5F7]",children:"HARUNE"}),h.jsx("span",{className:"font-mono-tech text-[10px] tracking-widest text-[#8E8E93]",children:"HI-FI"})]})]}),h.jsx("nav",{className:"mt-6 space-y-1","aria-label":"Điều hướng chính",children:_p.map(({key:u,label:d,icon:p})=>{const x=o===u;return h.jsxs("button",{type:"button",onClick:()=>t(u),className:`group relative flex w-full items-center gap-3 rounded-lg px-3.5 py-2.5 text-left text-[13.5px] font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${x?"bg-white/[0.06] text-[#F5F5F7]":"text-[#8E8E93] hover:bg-white/[0.03] hover:text-[#F5F5F7]"}`,children:[x&&h.jsx("span",{className:"absolute left-0 top-2 bottom-2 w-[2.5px] rounded-r-full",style:{backgroundColor:"var(--accent)"}}),h.jsx(p,{className:"h-[17px] w-[17px] shrink-0 transition-colors",style:x?{color:"var(--accent)"}:void 0,strokeWidth:x?2.1:1.75}),h.jsx("span",{children:d})]},u)})})]}),h.jsxs("div",{className:"p-5 border-t border-white/[0.07] space-y-3",children:[s&&h.jsxs("button",{type:"button",onClick:async()=>{await s.prompt(),await s.userChoice,l(null)},className:"flex w-full items-center justify-center gap-2 rounded-xl py-2 text-[12px] font-semibold text-white transition active:scale-[0.98]",style:{backgroundColor:"var(--accent)"},children:[h.jsx(af,{className:"h-3.5 w-3.5"}),"Cài App Harune (PC)"]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono-tech uppercase tracking-wider text-[#8E8E93]",children:[h.jsxs("span",{className:"flex items-center gap-1.5",children:[h.jsx(mm,{className:"h-3.5 w-3.5"}),"HARUBOT BRIDGE"]}),h.jsx("span",{className:`h-2 w-2 rounded-full ${i.connected?"bg-[#30A46C]":"bg-[#E5484D]"}`})]}),h.jsx("p",{className:"mt-1.5 truncate text-[12.5px] font-medium text-[#F5F5F7]",children:i.label}),h.jsxs("div",{className:"mt-1 flex items-center gap-3 font-mono-tech text-[11px] text-[#8E8E93]",children:[typeof i.latency_ms=="number"&&h.jsxs("span",{children:[i.latency_ms," ms"]}),typeof i.guilds_count=="number"&&h.jsxs("span",{children:[i.guilds_count," servers"]})]})]})]})]})}function IM(){const o=Mt(M=>M.activeTab),t=Mt(M=>M.setActiveTab),i=Mt(M=>M.navMode),s=Mt(M=>M.deviceOS),l=i==="auto"?s:i,u=ne(M=>M.currentTrack),d=ne(M=>M.isPlaying),p=ne(M=>M.currentTime),x=ne(M=>M.duration),m=ne(M=>M.togglePlay),_=ne(M=>M.nextTrack),g=ne(M=>M.setFullscreenOpen),v=x>0?Math.min(100,p/x*100):0;return l==="ios"?h.jsx("div",{className:"lg:hidden fixed inset-x-0 bottom-0 z-30 pointer-events-none px-3",style:{paddingBottom:"calc(12px + var(--safe-bottom))"},children:h.jsxs("div",{className:"mx-auto max-w-md space-y-2 pointer-events-auto",children:[u&&h.jsxs("div",{className:"ios-liquid-glass relative overflow-hidden rounded-[22px] px-3 py-2.5 transition-transform active:scale-[0.99]",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("button",{type:"button",onClick:()=>g(!0),className:"flex min-w-0 flex-1 items-center gap-3 text-left focus-visible:outline-none",children:[h.jsx("img",{src:u.cover_url,alt:u.title,className:"h-10 w-10 shrink-0 rounded-[12px] object-cover ring-1 ring-white/10"}),h.jsxs("div",{className:"min-w-0 flex-1",children:[h.jsx("p",{className:"truncate text-[13.5px] font-semibold text-[#F5F5F7] leading-tight",children:u.title}),h.jsxs("p",{className:"mt-0.5 flex items-center gap-1.5 truncate text-[11.5px] text-[#8E8E93]",children:[h.jsx("span",{className:"h-1.5 w-1.5 rounded-full shrink-0",style:{backgroundColor:Xn[u.source_platform].dotColor}}),h.jsx("span",{className:"truncate",children:u.artist})]})]})]}),h.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[h.jsx("button",{type:"button",onClick:m,"aria-label":d?"Tạm dừng":"Phát",className:"flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.1] text-[#F5F5F7] transition active:scale-95",children:d?h.jsx(Pl,{className:"h-4 w-4 fill-current"}):h.jsx(Ka,{className:"h-4 w-4 fill-current translate-x-[1px]"})}),h.jsx("button",{type:"button",onClick:_,"aria-label":"Bài tiếp theo",className:"flex h-9 w-9 items-center justify-center rounded-full text-[#F5F5F7]/80 transition hover:text-[#F5F5F7] active:scale-95",children:h.jsx(Vu,{className:"h-4 w-4"})})]})]}),h.jsx("div",{className:"mt-2 h-[2px] w-full overflow-hidden rounded-full bg-white/10",children:h.jsx("div",{className:"h-full rounded-full transition-[width] duration-200",style:{width:`${v}%`,backgroundColor:"var(--accent)"}})})]}),h.jsx("nav",{"aria-label":"Điều hướng iOS",className:"ios-liquid-glass flex items-center justify-between rounded-[28px] px-2 py-1.5",children:_p.map(({key:M,shortLabel:w,icon:N})=>{const b=o===M;return h.jsxs("button",{type:"button",onClick:()=>t(M),className:`flex flex-1 flex-col items-center justify-center gap-0.5 rounded-[22px] py-1.5 transition-all duration-200 ${b?"bg-white/[0.11] text-[#F5F5F7]":"text-[#8E8E93] active:scale-95"}`,children:[h.jsx(N,{className:"h-[19px] w-[19px]",style:b?{color:"var(--accent)"}:void 0,strokeWidth:b?2.15:1.75}),h.jsx("span",{className:"text-[10px] font-medium tracking-tight",style:b?{color:"var(--accent)"}:void 0,children:w})]},M)})})]})}):h.jsxs("div",{className:"lg:hidden fixed inset-x-0 bottom-0 z-30",children:[u&&h.jsxs("div",{className:"relative bg-[#16161C]/96 backdrop-blur-md border-t border-white/[0.08]",children:[h.jsx("div",{className:"h-[2px] w-full bg-white/[0.08]",children:h.jsx("div",{className:"h-full transition-[width] duration-200",style:{width:`${v}%`,backgroundColor:"var(--accent)"}})}),h.jsxs("div",{className:"flex items-center gap-3 px-4 py-2.5",children:[h.jsxs("button",{type:"button",onClick:()=>g(!0),className:"flex min-w-0 flex-1 items-center gap-3 text-left",children:[h.jsx("img",{src:u.cover_url,alt:u.title,className:"h-10 w-10 shrink-0 rounded-md object-cover ring-1 ring-white/10"}),h.jsxs("div",{className:"min-w-0 flex-1",children:[h.jsx("p",{className:"truncate text-[13.5px] font-semibold text-[#F5F5F7]",children:u.title}),h.jsxs("p",{className:"truncate text-[11.5px] text-[#8E8E93]",children:[u.artist," · ",Xn[u.source_platform].short]})]})]}),h.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[h.jsx("button",{type:"button",onClick:m,"aria-label":d?"Tạm dừng":"Phát",className:"flex h-10 w-10 items-center justify-center rounded-full text-[#F5F5F7] active:bg-white/10",children:d?h.jsx(Pl,{className:"h-[18px] w-[18px] fill-current"}):h.jsx(Ka,{className:"h-[18px] w-[18px] fill-current translate-x-[1px]"})}),h.jsx("button",{type:"button",onClick:_,"aria-label":"Bài tiếp theo",className:"flex h-10 w-10 items-center justify-center rounded-full text-[#8E8E93] active:bg-white/10",children:h.jsx(Vu,{className:"h-[18px] w-[18px]"})})]})]})]}),h.jsx("nav",{"aria-label":"Điều hướng Android",className:"flex items-center justify-around bg-[#111116] border-t border-white/[0.08] px-1 pt-2",style:{paddingBottom:"calc(8px + var(--safe-bottom))"},children:_p.map(({key:M,shortLabel:w,icon:N})=>{const b=o===M;return h.jsxs("button",{type:"button",onClick:()=>t(M),className:"flex flex-1 flex-col items-center gap-1 py-0.5",children:[h.jsx("span",{className:`flex h-7 w-14 items-center justify-center rounded-full transition-colors ${b?"bg-[rgba(var(--accent-rgb),0.18)]":"bg-transparent"}`,children:h.jsx(N,{className:"h-[19px] w-[19px]",style:{color:b?"var(--accent)":"#8E8E93"},strokeWidth:b?2.15:1.75})}),h.jsx("span",{className:`text-[10.5px] font-medium ${b?"text-[#F5F5F7]":"text-[#8E8E93]"}`,children:w})]},M)})})]})}class BM{constructor(){Ot(this,"ctx",null);Ot(this,"deckASource",null);Ot(this,"deckBSource",null);Ot(this,"attachedA",null);Ot(this,"attachedB",null);Ot(this,"vocalDryGain",null);Ot(this,"vocalKaraokeGain",null);Ot(this,"deckAGain",null);Ot(this,"deckBGain",null);Ot(this,"preAmpGain",null);Ot(this,"tubeShaper",null);Ot(this,"tubeDryGain",null);Ot(this,"tubeWetGain",null);Ot(this,"djFilter",null);Ot(this,"eqFilters",[]);Ot(this,"bassShelf",null);Ot(this,"spatialDelay",null);Ot(this,"spatialWet",null);Ot(this,"reverbDry",null);Ot(this,"reverbWet",null);Ot(this,"echoWet",null);Ot(this,"echoFeedback",null);Ot(this,"analyser",null);Ot(this,"bassAnalyser",null);Ot(this,"bitPerfectMode",!1);Ot(this,"micStream",null);Ot(this,"micSource",null);Ot(this,"micGainNode",null);Ot(this,"micEchoSend",null);Ot(this,"masterBus",null);Ot(this,"masterLimiter",null);Ot(this,"freqBuf",new Uint8Array(512));Ot(this,"bassWaveBuf",new Float32Array(512));Ot(this,"binsOut",new Float32Array(48));Ot(this,"bassSlowAvg",.04);Ot(this,"prevBassRms",0);Ot(this,"kickEnv",0);Ot(this,"lastBeatMs",0)}ensureContext(){if(typeof window>"u")return null;if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;this.ctx=new t,this.buildMasterGraph(this.ctx)}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}createImpulseResponse(t,i=2.2,s=2.6){const l=t.sampleRate,u=Math.floor(l*i),d=t.createBuffer(2,u,l);for(let p=0;p<2;p++){const x=d.getChannelData(p);for(let m=0;m<u;m++){const _=Math.pow(1-m/u,s);x[m]=(Math.random()*2-1)*_*.65}}return d}makeTubeCurve(){const i=new Float32Array(new ArrayBuffer(8192));for(let s=0;s<2048;s++){const l=s*2/2048-1;i[s]=Math.tanh(l*1.45)*.92+.06*l*l}return i}buildMasterGraph(t){this.deckAGain=t.createGain(),this.deckAGain.gain.value=1,this.deckBGain=t.createGain(),this.deckBGain.gain.value=0,this.masterBus=t.createGain(),this.deckAGain.connect(this.masterBus),this.deckBGain.connect(this.masterBus),this.preAmpGain=t.createGain(),this.preAmpGain.gain.value=1;const i=t.createGain();this.tubeDryGain=t.createGain(),this.tubeDryGain.gain.value=1,this.tubeWetGain=t.createGain(),this.tubeWetGain.gain.value=0,this.tubeShaper=t.createWaveShaper(),this.tubeShaper.curve=this.makeTubeCurve(),this.tubeShaper.oversample="4x",this.djFilter=t.createBiquadFilter(),this.djFilter.type="allpass",this.djFilter.frequency.value=1e3,this.djFilter.Q.value=1.2,this.eqFilters=LM.map(g=>{const v=t.createBiquadFilter();return v.type="peaking",v.frequency.value=g,v.Q.value=1.4,v.gain.value=0,v}),this.bassShelf=t.createBiquadFilter(),this.bassShelf.type="lowshelf",this.bassShelf.frequency.value=68,this.bassShelf.gain.value=0,this.masterBus.connect(this.preAmpGain),this.preAmpGain.connect(this.tubeDryGain),this.tubeDryGain.connect(i),this.preAmpGain.connect(this.tubeShaper),this.tubeShaper.connect(this.tubeWetGain),this.tubeWetGain.connect(i);let s=i;s.connect(this.djFilter),s=this.djFilter;for(const g of this.eqFilters)s.connect(g),s=g;s.connect(this.bassShelf),s=this.bassShelf;const l=t.createGain();s.connect(l),this.spatialDelay=t.createDelay(.05),this.spatialDelay.delayTime.value=.014,this.spatialWet=t.createGain(),this.spatialWet.gain.value=0;const u=t.createStereoPanner();u.pan.value=.35,s.connect(this.spatialDelay),this.spatialDelay.connect(u),u.connect(this.spatialWet),this.spatialWet.connect(l);const d=t.createGain();this.reverbDry=t.createGain(),this.reverbDry.gain.value=1,this.reverbWet=t.createGain(),this.reverbWet.gain.value=0;const p=t.createConvolver();p.buffer=this.createImpulseResponse(t,2.3,2.5),l.connect(this.reverbDry),this.reverbDry.connect(d),l.connect(p),p.connect(this.reverbWet),this.reverbWet.connect(d);const x=t.createDelay(1);x.delayTime.value=.32,this.echoFeedback=t.createGain(),this.echoFeedback.gain.value=.38,this.echoWet=t.createGain(),this.echoWet.gain.value=0,l.connect(x),x.connect(this.echoFeedback),this.echoFeedback.connect(x),x.connect(this.echoWet),this.echoWet.connect(d),this.masterLimiter=t.createDynamicsCompressor(),this.masterLimiter.threshold.value=-2,this.masterLimiter.knee.value=12,this.masterLimiter.ratio.value=6,this.masterLimiter.attack.value=.005,this.masterLimiter.release.value=.12,this.analyser=t.createAnalyser(),this.analyser.fftSize=1024,this.analyser.smoothingTimeConstant=.55,this.freqBuf=new Uint8Array(this.analyser.frequencyBinCount);const m=t.createBiquadFilter();m.type="lowpass",m.frequency.value=115,m.Q.value=.8;const _=t.createBiquadFilter();_.type="lowpass",_.frequency.value=115,_.Q.value=.8,this.bassAnalyser=t.createAnalyser(),this.bassAnalyser.fftSize=512,this.bassWaveBuf=new Float32Array(this.bassAnalyser.fftSize),d.connect(this.masterLimiter),this.masterLimiter.connect(this.analyser),this.analyser.connect(t.destination),this.masterLimiter.connect(m),m.connect(_),_.connect(this.bassAnalyser)}unlockFromGesture(){const t=this.ensureContext();t&&t.state==="suspended"&&t.resume().catch(()=>{})}attachDeckA(t){const i=this.ensureContext();if(!(!i||!this.deckAGain)&&(i.state==="suspended"&&i.resume().catch(()=>{}),this.attachedA!==t))try{this.deckASource=i.createMediaElementSource(t),this.attachedA=t,this.vocalDryGain=i.createGain(),this.vocalDryGain.gain.value=1,this.vocalKaraokeGain=i.createGain(),this.vocalKaraokeGain.gain.value=0,this.deckASource.connect(this.vocalDryGain),this.vocalDryGain.connect(this.deckAGain);const s=i.createChannelSplitter(2),l=i.createGain();l.gain.value=-1;const u=i.createGain();u.gain.value=.95;const d=i.createBiquadFilter();d.type="highpass",d.frequency.value=140;const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=150;const x=i.createGain();this.deckASource.connect(s),s.connect(u,0),s.connect(l,1),l.connect(u),u.connect(d),d.connect(x),this.deckASource.connect(p),p.connect(x),x.connect(this.vocalKaraokeGain),this.vocalKaraokeGain.connect(this.deckAGain)}catch{}}attachDeckB(t){if(this.attachedB===t){this.ensureContext();return}const i=this.ensureContext();if(!(!i||!this.deckBGain))try{this.deckBSource=i.createMediaElementSource(t),this.attachedB=t,this.deckBSource.connect(this.deckBGain)}catch{}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}setEqGains(t){if(!this.ctx)return;const i=this.ctx.currentTime;this.eqFilters.forEach((s,l)=>{const u=this.bitPerfectMode?0:Number.isFinite(t[l])?t[l]:0;s.gain.setTargetAtTime(u,i,.03)})}setPreAmpDb(t){if(!this.ctx||!this.preAmpGain)return;const i=this.bitPerfectMode?0:Math.max(-6,Math.min(6,t)),s=Math.pow(10,i/20);this.preAmpGain.gain.setTargetAtTime(s,this.ctx.currentTime,.03)}setTubeWarmth(t){if(!this.ctx||!this.tubeWetGain||!this.tubeDryGain)return;const i=this.bitPerfectMode?0:Math.max(0,Math.min(1,t)),s=this.ctx.currentTime;this.tubeWetGain.gain.setTargetAtTime(i*.55,s,.04),this.tubeDryGain.gain.setTargetAtTime(1-i*.42,s,.04)}setBitPerfect(t,i,s,l,u,d,p){this.bitPerfectMode=t,this.setEqGains(i),this.setBassBoost(t?0:s),this.setSpatial3d(t?0:l),this.setReverb(t?0:u),this.setPreAmpDb(d),this.setTubeWarmth(p)}getHardwareSpecs(){const t=this.ctx?this.ctx.sampleRate:48e3,i=this.ctx?Math.round(((this.ctx.baseLatency||0)+(this.ctx.outputLatency||0))*1e3):0;return{sampleRateHz:t,latencyMs:i,bitDepth:"32-bit Float",mode:this.bitPerfectMode?"BIT-PERFECT":"STUDIO HI-FI DSP",running:!!(this.ctx&&this.ctx.state==="running")}}setBassBoost(t){!this.ctx||!this.bassShelf||this.bassShelf.gain.setTargetAtTime(Math.max(0,Math.min(1,t))*10.5,this.ctx.currentTime,.04)}setSpatial3d(t){if(!this.ctx||!this.spatialWet||!this.spatialDelay)return;const i=Math.max(0,Math.min(1,t));this.spatialWet.gain.setTargetAtTime(i*.65,this.ctx.currentTime,.05),this.spatialDelay.delayTime.setTargetAtTime(.008+i*.018,this.ctx.currentTime,.05)}setReverb(t){if(!this.ctx||!this.reverbWet||!this.reverbDry)return;const i=Math.max(0,Math.min(1,t));this.reverbWet.gain.setTargetAtTime(i*.78,this.ctx.currentTime,.05),this.reverbDry.gain.setTargetAtTime(1-i*.25,this.ctx.currentTime,.05)}setVocalRemover(t){if(!this.ctx||!this.vocalDryGain||!this.vocalKaraokeGain)return;const i=Math.max(0,Math.min(1,t)),s=this.ctx.currentTime;this.vocalDryGain.gain.setTargetAtTime(1-i,s,.05),this.vocalKaraokeGain.gain.setTargetAtTime(i,s,.05)}setCrossfader(t){if(!this.ctx||!this.deckAGain||!this.deckBGain)return;const i=Math.max(0,Math.min(1,t)),s=this.ctx.currentTime;this.deckAGain.gain.setTargetAtTime(Math.cos(i*Math.PI*.5),s,.025),this.deckBGain.gain.setTargetAtTime(Math.sin(i*Math.PI*.5),s,.025)}setDjFilter(t){if(!this.ctx||!this.djFilter)return;const i=Math.max(-1,Math.min(1,t)),s=this.ctx.currentTime;if(Math.abs(i)<.04)this.djFilter.type="allpass",this.djFilter.Q.setTargetAtTime(.7,s,.04);else if(i<0){this.djFilter.type="lowpass";const l=180+Math.pow(1+i,2.2)*14e3;this.djFilter.frequency.setTargetAtTime(l,s,.03),this.djFilter.Q.setTargetAtTime(1.8+Math.abs(i)*2.5,s,.04)}else{this.djFilter.type="highpass";const l=60+Math.pow(i,2.2)*5200;this.djFilter.frequency.setTargetAtTime(l,s,.03),this.djFilter.Q.setTargetAtTime(1.8+i*2.5,s,.04)}}setDjEcho(t){!this.ctx||!this.echoWet||this.echoWet.gain.setTargetAtTime(Math.max(0,Math.min(1,t))*.58,this.ctx.currentTime,.04)}async enableKaraokeMic(t,i=.85){var l;if(!t){if(this.micStream&&(this.micStream.getTracks().forEach(u=>u.stop()),this.micStream=null),this.micSource){try{this.micSource.disconnect()}catch{}this.micSource=null}return!1}const s=this.ensureContext();if(!s||!this.masterLimiter||!((l=navigator.mediaDevices)!=null&&l.getUserMedia))return!1;try{this.micStream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),this.micSource=s.createMediaStreamSource(this.micStream),this.micGainNode=s.createGain(),this.micGainNode.gain.value=i;const u=s.createDelay(.5);u.delayTime.value=.16;const d=s.createGain();return d.gain.value=.28,this.micEchoSend=s.createGain(),this.micEchoSend.gain.value=.35,this.micSource.connect(this.micGainNode),this.micGainNode.connect(this.masterLimiter),this.micGainNode.connect(u),u.connect(d),d.connect(u),u.connect(this.micEchoSend),this.micEchoSend.connect(this.masterLimiter),!0}catch{return!1}}setMicGain(t){this.ctx&&this.micGainNode&&this.micGainNode.gain.setTargetAtTime(Math.max(0,Math.min(2,t)),this.ctx.currentTime,.03)}getTelemetry(t,i,s,l){let u=!1,d=0,p=0,x=0,m=0,_=!1;if(this.analyser&&this.bassAnalyser&&this.ctx&&this.ctx.state==="running"&&t){this.bassAnalyser.getFloatTimeDomainData(this.bassWaveBuf);let g=0,v=0;for(let N=0;N<this.bassWaveBuf.length;N++){const b=this.bassWaveBuf[N];g+=b*b;const S=Math.abs(b);S>v&&(v=S)}const M=Math.sqrt(g/this.bassWaveBuf.length);this.analyser.getByteFrequencyData(this.freqBuf);let w=0;for(let N=0;N<64;N++)w+=this.freqBuf[N];if(w>10||M>.002){u=!0,d=Math.min(1,M*3.6),p=Math.min(1,M*2.8+v*.45);let N=0;for(let U=6;U<=52;U++)N+=this.freqBuf[U];x=N/11985;let b=0;for(let U=53;U<=240;U++)b+=this.freqBuf[U];m=b/47940;for(let U=0;U<48;U++){const z=Math.min(this.freqBuf.length-1,Math.floor(Math.pow(U/47,1.55)*260));this.binsOut[U]=this.freqBuf[z]/255}const S=Math.max(0,M-this.prevBassRms),T=Math.max(0,M-this.bassSlowAvg*1.15);this.bassSlowAvg=this.bassSlowAvg*.94+M*.06;const O=Math.min(1,S*11+T*5.2);M>.032&&M>this.bassSlowAvg*1.22&&M>this.prevBassRms*1.03&&l-this.lastBeatMs>175?(_=!0,this.lastBeatMs=l,this.kickEnv=Math.min(1,Math.max(this.kickEnv,.62+O*.45))):this.kickEnv=Math.max(O*.72,this.kickEnv*.84),this.prevBassRms=M}}if(!u){this.kickEnv*=.85,this.prevBassRms*=.85;for(let g=0;g<48;g++)this.binsOut[g]*=.88}return{bass:p,subBass:d,kick:this.kickEnv,mid:x,high:m,energy:Math.min(1,p*.48+x*.32+m*.2),isBeat:_,bins:this.binsOut,isRealSignal:u}}}const It=new BM,qu="harune_api_server_url",lr="harune_local_tracks_v1",Ul="harune_local_playlists_v1",Ts="harune_local_pl_items_v1",yp="harune_local_history_v1",Gh="harune_local_eq_v1";(function(){var t;if(!(typeof window>"u"))try{const i=(t=new URLSearchParams(window.location.search).get("api"))==null?void 0:t.trim().replace(/\/$/,"");i&&/^https?:\/\//i.test(i)&&localStorage.setItem(qu,i)}catch{}})();function rf(){var o;try{const t=(o=localStorage.getItem(qu))==null?void 0:o.trim().replace(/\/$/,"");if(t)return t}catch{}return""}function zM(o){const t=o.trim().replace(/\/$/,"");try{t?localStorage.setItem(qu,t):localStorage.removeItem(qu)}catch{}}function HM(){if(rf()||typeof window>"u")return!1;const o=window.location.hostname.toLowerCase();return o.endsWith("github.io")||o.endsWith("pages.dev")||o.endsWith("netlify.app")||o.endsWith("vercel.app")}function Xu(o){return o?o.startsWith("http://")||o.startsWith("https://")||o.startsWith("blob:")||o.startsWith("data:")?o:`${rf()}${o}`:""}async function Nn(o,t){if(HM())throw new Error("STATIC_STANDALONE");const i=await fetch(Xu(o),{headers:{"Content-Type":"application/json",...(t==null?void 0:t.headers)||{}},...t});if(!i.ok){let s=`HTTP ${i.status}`;try{const l=await i.json();s=l.detail||l.error||s}catch{}throw new Error(s)}return i.json()}function ni(o,t){try{const i=localStorage.getItem(o);return i?JSON.parse(i):t}catch{return t}}function Qi(o,t){try{localStorage.setItem(o,JSON.stringify(t))}catch{}}function t_(o){const t=ni(lr,[]),i=[o,...t.filter(s=>s.id!==o.id)].slice(0,200);Qi(lr,i)}function bl(){const o=ni(Ul,[]);if(o.length>0)return o;const t=[{id:"pl_mix_default",name:"Harune Mix — Đa Nền Tảng",description:"Playlist tổ hợp lưu ngay trên thiết bị & đồng bộ khi kết nối HaruBot Server.",cover_url:"",track_count:0,platforms:["youtube","spotify","local"],is_mixed:!0}];return Qi(Ul,t),t}const n_={vn:"Việt Nam",us:"Mỹ",kr:"Hàn Quốc",jp:"Nhật Bản",gb:"Anh",global:"Toàn cầu"};function Sp(o){return o.replace(/^query:/i,"").replace(/[\(\[](?:official|mv|m\/v|music video|lyric|lyrics|audio|hd|4k|topic|live|visualizer)[^\)\]]*[\)\]]/gi,"").replace(/\s+/g," ").trim()}function kM(o){var u;const t=/\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g,i=o.match(/\[offset:\s*([+-]?\d+)\s*\]/i),s=i?-parseInt(i[1],10)/1e3:0,l=[];for(const d of o.split(/\r?\n/)){const p=[...d.matchAll(t)];if(!p.length)continue;const x=d.replace(t,"").trim();if(x)for(const m of p){const _=parseInt(m[1],10),g=parseInt(m[2],10),v=parseInt((m[3]||"0").padEnd(3,"0").slice(0,3),10),M=Math.max(0,Math.round((_*60+g+v/1e3+s)*1e3)/1e3);l.push({time:M,duration:3.5,text:x})}}l.sort((d,p)=>d.time-p.time);for(let d=0;d<l.length;d++){const p=((u=l[d+1])==null?void 0:u.time)??l[d].time+4.5;l[d].duration=Math.max(.8,Math.min(10,Math.round((p-l[d].time)*1e3)/1e3))}return l}async function GM(o,t){var l;const i=(o||"vn").toLowerCase(),s=i==="global"?["us"]:i==="kr"?["kr","jp","us"]:[i,"us"];for(const u of s)try{const d=await fetch(`https://itunes.apple.com/${u}/rss/topsongs/limit=${t}/json`);if(!d.ok)continue;const p=await d.json(),x=(l=p==null?void 0:p.feed)==null?void 0:l.entry,m=Array.isArray(x)?x:x?[x]:[];if(m.length===0)continue;const _=m.map((g,v)=>{var O,U,z,I;const M=String(((O=g["im:name"])==null?void 0:O.label)||"Untitled"),w=String(((U=g["im:artist"])==null?void 0:U.label)||"Unknown"),N=g["im:image"]||[],b=String(((z=N[N.length-1])==null?void 0:z.label)||"").replace("170x170bb","512x512bb"),T=(Array.isArray(g.link)?g.link:[]).find(E=>{var L;return String(((L=E.attributes)==null?void 0:L.type)||"").startsWith("audio/")});return{rank:v+1,title:M,artist:w,cover_url:b,duration_sec:30,query:`${M} ${w}`,preview_url:((I=T==null?void 0:T.attributes)==null?void 0:I.href)||""}});return{ok:!0,country:i,country_name:n_[i]||i.toUpperCase(),source:"apple_music_direct",updated_at:Math.floor(Date.now()/1e3),tracks:_}}catch{continue}return{ok:!0,country:i,country_name:n_[i]||i.toUpperCase(),source:"apple_music_direct",updated_at:Math.floor(Date.now()/1e3),tracks:[]}}async function VM(o,t,i){const s=Sp(o),l=(t||"").split(/[·•,|/]/)[0].replace(/\s*-\s*Topic$/i,"").trim(),u=`${s} ${l}`.trim();try{const d=await fetch(`https://lrclib.net/api/search?q=${encodeURIComponent(u)}`);if(!d.ok)return{ok:!0,found:!1,synced:!1,lines:[],plain:""};const p=await d.json();if(!Array.isArray(p)||p.length===0)return{ok:!0,found:!1,synced:!1,lines:[],plain:""};const x=s.toLowerCase(),m=l.toLowerCase();p.sort((w,N)=>{const b=S=>{let T=S.syncedLyrics?100:S.plainLyrics?10:0;S.instrumental&&(T-=80);const O=String(S.trackName||"").toLowerCase(),U=String(S.artistName||"").toLowerCase();O===x?T+=30:(O.includes(x)||x.includes(O))&&(T+=14),m&&(U.includes(m)||m.includes(U))&&(T+=20);const z=Number(S.duration||0);if(i&&i>45&&z>0){const I=Math.abs(z-i);T+=I<=4?40:I<=10?20:-Math.min(35,I*.4)}return T};return b(N)-b(w)});const _=p[0],g=String(_.syncedLyrics||""),v=String(_.plainLyrics||""),M=g?kM(g):v.split(/\r?\n/).map(w=>w.trim()).filter(Boolean).map((w,N,b)=>{const S=Math.max(2.5,(i||180)/Math.max(1,b.length));return{time:Math.round(N*S*10)/10,duration:S,text:w}});return{ok:!0,found:M.length>0,synced:!!g,lines:M,plain:v}}catch{return{ok:!0,found:!1,synced:!1,lines:[],plain:""}}}async function jM(o){var M,w;const t=o.trim(),i=t.toLowerCase();if(/^https?:\/\/.+\.(mp3|wav|flac|m4a|ogg|aac|opus)(\?.*)?$/i.test(t)){const N=decodeURIComponent(((M=t.split("/").pop())==null?void 0:M.split("?")[0])||"Direct Audio"),b=((w=N.split(".").pop())==null?void 0:w.toLowerCase())||"mp3",S=["flac","wav","alac"].includes(b),T={id:`dir_${btoa(t).replace(/[^a-zA-Z0-9]/g,"").slice(0,14)}`,source_platform:"direct",source_url:t,title:N.replace(/\.[^.]+$/,""),artist:new URL(t).hostname,album:"Direct Hi-Fi Stream",cover_url:"",duration_sec:0,codec:b,bitrate_kbps:S?1411:320,sample_rate_hz:48e3,is_lossless:S,stream_url:t};return t_(T),{track:T,isPreview:!1}}let s=Sp(t),l="youtube",u="",d="",p="";if(i.includes("spotify.com")||i.includes("spotify.link")){l="spotify";try{const N=await fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(t)}`);if(N.ok){const b=await N.json();u=String(b.title||""),d=String(b.author_name||""),p=String(b.thumbnail_url||""),s=`${u} ${d}`.trim()}}catch{}}else if(/^https?:\/\//i.test(t)){i.includes("soundcloud.com")?l="soundcloud":i.includes("tiktok.com")&&(l="tiktok");try{const N=await fetch(`https://noembed.com/embed?url=${encodeURIComponent(t)}`);if(N.ok){const b=await N.json();b.title&&(u=Sp(String(b.title)),d=String(b.author_name||"").replace(/\s*-\s*Topic$/i,""),p=String(b.thumbnail_url||""),s=`${u} ${d}`.trim())}}catch{}}const x=await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(s||t)}&media=music&entity=song&limit=5`);if(!x.ok)throw new Error("Không tìm thấy luồng nhạc công khai — hãy gắn Harune Server trong Tab Cài đặt.");const m=await x.json(),_=((m==null?void 0:m.results)||[]).find(N=>!!N.previewUrl);if(!_)throw new Error("Chưa tìm thấy bản nhạc tương ứng — hãy dán link trực tiếp .mp3/.flac hoặc kết nối Server VibeHost.");const g=p||String(_.artworkUrl100||"").replace("100x100bb","600x600bb"),v={id:`cloud_${_.trackId||Date.now()}`,source_platform:l,source_url:t,title:u||String(_.trackName||s),artist:d||String(_.artistName||"Unknown Artist"),album:String(_.collectionName||"Direct Cloud Hi-Fi"),cover_url:g,duration_sec:30,codec:"aac",bitrate_kbps:256,sample_rate_hz:44100,is_lossless:!1,stream_url:String(_.previewUrl)};return t_(v),{track:v,isPreview:!0}}function qM(){const o=ni(yp,[]),t=Date.now()/1e3;let i=0,s=0,l=0;const u=new Map,d=new Map,p=new Map,x=new Set;for(const g of o){i+=g.sec,g.at>=t-7*86400&&(s+=g.sec),g.at>=t-30*86400&&(l+=g.sec),x.add(new Date(g.at*1e3).toISOString().slice(0,10));const v=u.get(g.track_id)||{id:g.track_id,title:g.title,artist:g.artist,cover_url:g.cover_url,source_platform:g.platform,plays:0,total_seconds:0};v.plays+=1,v.total_seconds+=g.sec,u.set(g.track_id,v);const M=d.get(g.artist)||{artist:g.artist,plays:0,total_seconds:0};M.plays+=1,M.total_seconds+=g.sec,d.set(g.artist,M);const w=p.get(g.platform)||{plays:0,total_seconds:0};w.plays+=1,w.total_seconds+=g.sec,p.set(g.platform,w)}const m=o.length,_=[...p.entries()].map(([g,v])=>({platform:g,plays:v.plays,total_seconds:v.total_seconds,percent:m?Math.round(v.plays/m*1e3)/10:0})).sort((g,v)=>v.plays-g.plays);return{ok:!0,hours:{week:Math.round(s/3600*100)/100,month:Math.round(l/3600*100)/100,all:Math.round(i/3600*100)/100},total_plays:m,streak_days:x.size,top_tracks:[...u.values()].sort((g,v)=>v.plays-g.plays).slice(0,10),top_artists:[...d.values()].sort((g,v)=>v.plays-g.plays).slice(0,8),sources:_}}const Sn={getHarubotStatus:async()=>{try{return await Nn("/api/harubot/status")}catch{return{connected:!0,engine:"direct_cloud",label:"Direct Cloud Hi-Fi (Chưa gắn Server)",host:rf()||"github.io"}}},resolveLink:async(o,t,i)=>{try{return{...await Nn("/api/resolve",{method:"POST",body:JSON.stringify({url_or_query:o,save_to_library:!0,playlist_id:i||null,quality:t})}),is_preview:!1}}catch{const{track:s,isPreview:l}=await jM(o);return i&&await Sn.addTrackToPlaylist(i,s.id),{ok:!0,track:s,is_preview:l}}},listTracks:async(o="all")=>{try{return await Nn(`/api/tracks?platform=${encodeURIComponent(o)}`)}catch{const t=ni(lr,[]);return{ok:!0,tracks:o==="all"?t:t.filter(s=>s.source_platform===o)}}},deleteTrack:async o=>{try{return await Nn(`/api/tracks/${encodeURIComponent(o)}`,{method:"DELETE"})}catch{return Qi(lr,ni(lr,[]).filter(t=>t.id!==o)),{ok:!0}}},listPlaylists:async()=>{try{return await Nn("/api/playlists")}catch{const o=bl(),t=ni(Ts,{}),i=ni(lr,[]);return{ok:!0,playlists:o.map(l=>{var x;const d=(t[l.id]||[]).map(m=>i.find(_=>_.id===m)).filter(Boolean),p=[...new Set(d.map(m=>m.source_platform))];return{...l,track_count:d.length,platforms:p.length?p:l.platforms,cover_url:l.cover_url||((x=d[0])==null?void 0:x.cover_url)||""}})}}},getPlaylist:async o=>{try{return await Nn(`/api/playlists/${encodeURIComponent(o)}`)}catch{const t=bl(),i=t.find(p=>p.id===o)||t[0],s=ni(Ts,{}),l=ni(lr,[]),d=(s[i.id]||[]).map(p=>l.find(x=>x.id===p)).filter(Boolean);return{ok:!0,playlist:i,tracks:d}}},createPlaylist:async(o,t="")=>{try{return await Nn("/api/playlists",{method:"POST",body:JSON.stringify({name:o,description:t})})}catch{const i=bl(),s={id:`pl_${Date.now()}`,name:o,description:t,cover_url:"",track_count:0,platforms:[],is_mixed:!0};return Qi(Ul,[s,...i]),{ok:!0,playlist:s}}},renamePlaylist:async(o,t)=>{try{return await Nn(`/api/playlists/${encodeURIComponent(o)}`,{method:"PATCH",body:JSON.stringify({name:t})})}catch{const i=bl().map(s=>s.id===o?{...s,name:t}:s);return Qi(Ul,i),{ok:!0,playlist:i.find(s=>s.id===o)}}},deletePlaylist:async o=>{try{return await Nn(`/api/playlists/${encodeURIComponent(o)}`,{method:"DELETE"})}catch{return Qi(Ul,bl().filter(t=>t.id!==o)),{ok:!0}}},addTrackToPlaylist:async(o,t)=>{try{return await Nn(`/api/playlists/${encodeURIComponent(o)}/tracks`,{method:"POST",body:JSON.stringify({track_id:t})})}catch{const i=ni(Ts,{}),s=i[o]||[];return s.includes(t)||s.push(t),i[o]=s,Qi(Ts,i),{ok:!0}}},removeTrackFromPlaylist:async(o,t)=>{try{return await Nn(`/api/playlists/${encodeURIComponent(o)}/tracks/${encodeURIComponent(t)}`,{method:"DELETE"})}catch{const i=ni(Ts,{});return i[o]=(i[o]||[]).filter(s=>s!==t),Qi(Ts,i),{ok:!0}}},reorderPlaylist:async(o,t)=>{try{return await Nn(`/api/playlists/${encodeURIComponent(o)}/reorder`,{method:"PUT",body:JSON.stringify({track_ids:t})})}catch{const i=ni(Ts,{});return i[o]=t,Qi(Ts,i),{ok:!0}}},getLyrics:async(o,t,i)=>{try{const s=new URLSearchParams({title:o,artist:t});return i&&i>0&&s.set("duration",String(Math.round(i))),await Nn(`/api/lyrics?${s.toString()}`)}catch{return VM(o,t,i)}},getCharts:async(o,t=25)=>{try{return await Nn(`/api/charts?country=${encodeURIComponent(o)}&limit=${t}`)}catch{return GM(o,t)}},getStats:async()=>{try{return await Nn("/api/stats")}catch{return qM()}},recordHistory:async(o,t,i=!1,s)=>{if(s){const l=ni(yp,[]);l.unshift({track_id:o,title:s.title,artist:s.artist,cover_url:s.cover_url,platform:s.platform,sec:Math.max(20,Math.round(t)),at:Date.now()/1e3}),Qi(yp,l.slice(0,1e3))}try{return await Nn("/api/history",{method:"POST",body:JSON.stringify({track_id:o,played_seconds:Math.max(30,Math.round(t)),completed:i})})}catch{return{ok:!0}}},listEqPresets:async()=>{try{return await Nn("/api/eq-presets")}catch{const o=ni(Gh,[]);return{ok:!0,presets:[...Cl,...o]}}},createEqPreset:async o=>{try{return await Nn("/api/eq-presets",{method:"POST",body:JSON.stringify(o)})}catch{const t={...o,id:`eq_${Date.now()}`,is_builtin:!1},i=ni(Gh,[]);return Qi(Gh,[...i,t]),{ok:!0,preset:t}}},updateSettings:async o=>{try{return await Nn("/api/settings",{method:"PATCH",body:JSON.stringify(o)})}catch{return{ok:!0}}}},XM="harune_offline_audio_v1",ya="audio_blobs";function of(){return new Promise((o,t)=>{const i=indexedDB.open(XM,1);i.onupgradeneeded=()=>{const s=i.result;s.objectStoreNames.contains(ya)||s.createObjectStore(ya,{keyPath:"trackId"})},i.onsuccess=()=>o(i.result),i.onerror=()=>t(i.error)})}async function WM(o,t){const i=await fetch(Xu(t));if(!i.ok)throw new Error(`Tải cache thất bại (${i.status})`);const s=await i.blob(),l=await of();return new Promise((u,d)=>{const p=l.transaction(ya,"readwrite");p.objectStore(ya).put({trackId:o,blob:s,size:s.size,savedAt:Date.now()}),p.oncomplete=()=>u(s.size),p.onerror=()=>d(p.error)})}async function YM(o){try{const t=await of();return new Promise(i=>{const l=t.transaction(ya,"readonly").objectStore(ya).get(o);l.onsuccess=()=>{const u=l.result;i(u!=null&&u.blob?URL.createObjectURL(u.blob):null)},l.onerror=()=>i(null)})}catch{return null}}async function yy(){try{const o=await of();return new Promise(t=>{const s=o.transaction(ya,"readonly").objectStore(ya).getAllKeys();s.onsuccess=()=>t(s.result||[]),s.onerror=()=>t([])})}catch{return[]}}async function KM(o){try{const t=await of();await new Promise(i=>{const s=t.transaction(ya,"readwrite");s.objectStore(ya).delete(o),s.oncomplete=()=>i(),s.onerror=()=>i()})}catch{}}function ZM(){const o=ke.useRef(null),t=ke.useRef(null),i=ke.useRef(""),s=ke.useRef(0),l=ke.useRef(""),u=ne(P=>P.currentTrack),d=ne(P=>P.isPlaying),p=ne(P=>P.volume),x=ne(P=>P.muted),m=ne(P=>P.repeat),_=ne(P=>P.playbackRate),g=ne(P=>P.preservesPitch),v=ne(P=>P.seekRequest),M=ne(P=>P.ambientRgb),w=ne(P=>P.eqGains),N=ne(P=>P.preAmpDb),b=ne(P=>P.tubeWarmth),S=ne(P=>P.bitPerfect),T=ne(P=>P.bassBoost),O=ne(P=>P.spatial3d),U=ne(P=>P.reverbAmount),z=ne(P=>P.vocalRemover),I=ne(P=>P.micGain),E=ne(P=>P.crossfader),L=ne(P=>P.djFilter),Y=ne(P=>P.djEcho),F=ne(P=>P.deckBTrack),G=ne(P=>P.deckBPlaying),Z=ne(P=>P.deckBRate),he=Mt(P=>P.accentColor),q=Mt(P=>P.deliveryMode),ae=Mt(P=>P.streamQuality);return ke.useEffect(()=>{const P=()=>{It.unlockFromGesture();const H=o.current;H&&ne.getState().isPlaying&&H.src&&H.paused&&(It.attachDeckA(H),H.play().catch(()=>{}))};return window.addEventListener("pointerdown",P,{passive:!0}),window.addEventListener("keydown",P,{passive:!0}),()=>{window.removeEventListener("pointerdown",P),window.removeEventListener("keydown",P)}},[]),ke.useEffect(()=>{yy().then(P=>ne.getState().setOfflineTrackIds(P)),Sn.getHarubotStatus().then(P=>Mt.getState().setHarubotStatus(P)).catch(()=>{}),Sn.listTracks().then(P=>{if(P.ok&&P.tracks.length>0){const H=ne.getState();H.setLibraryTracks(P.tracks),(!H.currentTrack||!H.currentTrack.stream_url)&&ne.setState({currentTrack:P.tracks[0],queue:P.tracks,queueIndex:0,duration:P.tracks[0].duration_sec||0})}}).catch(()=>{}),Sn.listPlaylists().then(P=>{P.ok&&ne.getState().setPlaylists(P.playlists)}).catch(()=>{}),Sn.listEqPresets().then(P=>{P.ok&&P.presets.length>0&&ne.getState().setEqPresets(P.presets)}).catch(()=>{})},[]),ke.useEffect(()=>{document.documentElement.style.setProperty("--ambient-rgb",M)},[M]),ke.useEffect(()=>{if(!u)return;const P=u.accent_hint||xm(he);if(!u.cover_url||u.cover_url.startsWith("data:image/svg")){ne.getState().setAmbientRgb(P);return}let H=!1;return wM(u.cover_url,P).then(ie=>{H||ne.getState().setAmbientRgb(ie)}),()=>{H=!0}},[u==null?void 0:u.id,u==null?void 0:u.cover_url,u==null?void 0:u.accent_hint,he]),ke.useEffect(()=>{if(!u)return;i.current="",s.current=0;let P=!1;return ne.getState().setLyricsState([],!1,!0),Sn.getLyrics(u.title,u.artist,u.duration_sec).then(H=>{P||(H.ok&&H.lines.length>0?ne.getState().setLyricsState(H.lines,H.synced,!1):ne.getState().setLyricsState([],!1,!1))}).catch(()=>{P||ne.getState().setLyricsState([],!1,!1)}),()=>{P=!0}},[u==null?void 0:u.id]),ke.useEffect(()=>{if(!d||!u||u.stream_url||l.current===u.id)return;l.current=u.id,ne.getState().setIsBuffering(!0),Mt.getState().showToast(`HaruBot đang tải luồng nhạc: ${u.title}...`);const P=u.source_url.startsWith("query:")?u.source_url.slice(6):`${u.title} ${u.artist}`;Sn.resolveLink(P,ae).then(H=>{if(H.ok&&H.track&&H.track.stream_url){const ie={...H.track,title:u.title||H.track.title,artist:u.artist||H.track.artist,cover_url:H.track.cover_url||u.cover_url},Q=ne.getState(),ce=Q.queue.map(Se=>Se.id===u.id?ie:Se);Q.prependLibraryTrack(ie),ne.setState({currentTrack:ie,queue:ce,duration:ie.duration_sec||Q.duration,isPlaying:!0,isBuffering:!1})}else ne.getState().setIsPlaying(!1),ne.getState().setIsBuffering(!1),Mt.getState().showToast("Không lấy được luồng nhạc cho bài này.")}).catch(H=>{ne.getState().setIsPlaying(!1),ne.getState().setIsBuffering(!1),Mt.getState().showToast(H instanceof Error?`Lỗi tải nhạc: ${H.message}`:"Không thể kết nối Backend Harune (:8787).")}).finally(()=>{l.current=""})},[d,u==null?void 0:u.id,u==null?void 0:u.stream_url,ae]),ke.useEffect(()=>{const P=o.current;if(!P||!u)return;let H=!1,ie=null;async function Q(){if(!P||!u)return;let ce=u.stream_url?Xu(u.stream_url):"";if(q==="offline"||ne.getState().offlineTrackIds.includes(u.id)){const Se=await YM(u.id);Se&&(ie=Se,ce=Se)}if(!H)if(ce){const Se=new URL(ce,window.location.origin).href;if(P.src!==Se&&(P.src=ce,P.load()),P.volume=ne.getState().muted?0:ne.getState().volume,P.playbackRate=_,P.preservesPitch=g,ne.getState().isPlaying){It.attachDeckA(P),It.resume();try{await P.play()}catch{Mt.getState().showToast("Chạm nút Phát thêm lần nữa để trình duyệt cho phép phát tiếng."),ne.getState().setIsPlaying(!1)}}}else P.pause(),P.removeAttribute("src")}return Q(),()=>{H=!0,ie&&URL.revokeObjectURL(ie)}},[u==null?void 0:u.id,u==null?void 0:u.stream_url,q]),ke.useEffect(()=>{const P=o.current;!P||!(u!=null&&u.stream_url)||(d?(It.attachDeckA(P),It.resume(),It.setEqGains(w),It.setBassBoost(T),It.setSpatial3d(O),It.setReverb(U),It.setVocalRemover(z),It.setCrossfader(E),It.setDjFilter(L),It.setDjEcho(Y),P.paused&&P.src&&P.play().catch(()=>{ne.getState().setIsPlaying(!1)})):P.pause())},[d,u==null?void 0:u.stream_url]),ke.useEffect(()=>{const P=t.current;if(!P||!F)return;const H=F.stream_url?Xu(F.stream_url):"";if(!H){P.pause();return}const ie=new URL(H,window.location.origin).href;P.src!==ie&&(P.src=H,P.load()),P.playbackRate=Z,G?(It.attachDeckB(P),It.resume(),It.setCrossfader(E),P.play().catch(()=>ne.getState().setDeckBPlaying(!1))):P.pause()},[F==null?void 0:F.id,F==null?void 0:F.stream_url,G,Z]),ke.useEffect(()=>{It.setEqGains(w)},[w]),ke.useEffect(()=>{It.setPreAmpDb(N)},[N]),ke.useEffect(()=>{It.setTubeWarmth(b)},[b]),ke.useEffect(()=>{It.setBitPerfect(S,w,T,O,U,N,b)},[S]),ke.useEffect(()=>{It.setBassBoost(T)},[T]),ke.useEffect(()=>{It.setSpatial3d(O)},[O]),ke.useEffect(()=>{It.setReverb(U)},[U]),ke.useEffect(()=>{It.setVocalRemover(z)},[z]),ke.useEffect(()=>{It.setMicGain(I)},[I]),ke.useEffect(()=>{It.setCrossfader(E)},[E]),ke.useEffect(()=>{It.setDjFilter(L)},[L]),ke.useEffect(()=>{It.setDjEcho(Y)},[Y]),ke.useEffect(()=>{const P=o.current;P&&(P.volume=x?0:p,P.playbackRate=_,P.preservesPitch=g)},[p,x,_,g]),ke.useEffect(()=>{if(v===null)return;const P=o.current;P&&(u!=null&&u.stream_url)&&Number.isFinite(v)&&(P.currentTime=v),ne.getState().clearSeekRequest()},[v,u==null?void 0:u.stream_url]),ke.useEffect(()=>{if(!(!("mediaSession"in navigator)||!u))try{navigator.mediaSession.metadata=new MediaMetadata({title:u.title,artist:u.artist,album:u.album||"Harune Hi-Fi",artwork:u.cover_url?[{src:u.cover_url,sizes:"512x512",type:"image/png"}]:[]}),navigator.mediaSession.playbackState=d?"playing":"paused",navigator.mediaSession.setActionHandler("play",()=>ne.getState().setIsPlaying(!0)),navigator.mediaSession.setActionHandler("pause",()=>ne.getState().setIsPlaying(!1)),navigator.mediaSession.setActionHandler("previoustrack",()=>ne.getState().prevTrack()),navigator.mediaSession.setActionHandler("nexttrack",()=>ne.getState().nextTrack()),navigator.mediaSession.setActionHandler("seekto",P=>{typeof P.seekTime=="number"&&ne.getState().requestSeek(P.seekTime)})}catch{}},[u==null?void 0:u.id,u==null?void 0:u.title,u==null?void 0:u.artist,d]),h.jsxs(h.Fragment,{children:[h.jsx("audio",{ref:o,id:"harune-audio-element",crossOrigin:"anonymous",preload:"auto",onTimeUpdate:P=>{const H=P.currentTarget;ne.getState().setProgress(H.currentTime,H.duration);const ie=ne.getState().currentTrack,Q=H.duration>0&&H.duration<=35?18:30;if(ie&&!ie.id.startsWith("demo_")&&(s.current=Math.max(s.current,H.currentTime),s.current>=Q&&i.current!==ie.id&&(i.current=ie.id,Sn.recordHistory(ie.id,Math.round(H.duration||180),!1,{title:ie.title,artist:ie.artist,cover_url:ie.cover_url,platform:ie.source_platform}).catch(()=>{}))),"mediaSession"in navigator&&Number.isFinite(H.duration)&&H.duration>0)try{navigator.mediaSession.setPositionState({duration:H.duration,playbackRate:H.playbackRate,position:Math.min(H.currentTime,H.duration)})}catch{}},onWaiting:()=>ne.getState().setIsBuffering(!0),onCanPlay:()=>ne.getState().setIsBuffering(!1),onPlaying:P=>{It.attachDeckA(P.currentTarget),It.resume(),ne.getState().setIsBuffering(!1)},onError:()=>{var P;ne.getState().setIsBuffering(!1),(P=ne.getState().currentTrack)!=null&&P.stream_url&&(Mt.getState().showToast("Không phát được luồng âm thanh này — đang thử bài khác hoặc tải lại."),ne.getState().setIsPlaying(!1))},onEnded:()=>{var H;const P=ne.getState();m==="one"?(P.requestSeek(0),(H=o.current)==null||H.play().catch(()=>{})):P.nextTrack()}}),h.jsx("audio",{ref:t,id:"harune-deckb-element",crossOrigin:"anonymous",preload:"metadata",loop:!0})]})}function QM(){const o=ne(O=>O.currentTrack),t=ne(O=>O.isPlaying),i=ne(O=>O.currentTime),s=ne(O=>O.duration),l=ne(O=>O.volume),u=ne(O=>O.muted),d=ne(O=>O.shuffle),p=ne(O=>O.repeat),x=ne(O=>O.togglePlay),m=ne(O=>O.nextTrack),_=ne(O=>O.prevTrack),g=ne(O=>O.requestSeek),v=ne(O=>O.setVolume),M=ne(O=>O.toggleMute),w=ne(O=>O.toggleShuffle),N=ne(O=>O.cycleRepeat),b=ne(O=>O.setFullscreenOpen),S=Mt(O=>O.setActiveTab);if(!o)return null;const T=s>0?Math.min(100,i/s*100):0;return h.jsxs("footer",{className:"hidden lg:block fixed inset-x-0 bottom-0 z-30 border-t border-white/[0.08] bg-[#111116]/94 backdrop-blur-xl",children:[h.jsx("div",{className:"h-[2px] w-full bg-white/[0.06]",children:h.jsx("div",{className:"h-full transition-[width] duration-200",style:{width:`${T}%`,backgroundColor:"var(--accent)"}})}),h.jsxs("div",{className:"mx-auto grid h-[76px] max-w-[1600px] grid-cols-[1fr_minmax(340px,520px)_1fr] items-center gap-6 px-6",children:[h.jsxs("div",{className:"flex min-w-0 items-center gap-3.5",children:[h.jsxs("button",{type:"button",onClick:()=>b(!0),className:"group relative h-12 w-12 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10",title:"Mở toàn màn hình",children:[h.jsx("img",{src:o.cover_url,alt:o.title,className:"h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"}),h.jsx("span",{className:"absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100",children:h.jsx(Qv,{className:"h-4 w-4 text-white"})})]}),h.jsxs("div",{className:"min-w-0",children:[h.jsx("button",{type:"button",onClick:()=>b(!0),className:"block max-w-full truncate text-left text-[13.5px] font-semibold text-[#F5F5F7] hover:underline",children:o.title}),h.jsxs("div",{className:"mt-0.5 flex items-center gap-2 text-[12px] text-[#8E8E93]",children:[h.jsx("span",{className:"truncate",children:o.artist}),h.jsx("span",{className:"font-mono-tech rounded border border-white/[0.09] px-1.5 py-[1px] text-[10px] uppercase text-[#C7C7CC]",children:o.is_lossless?"LOSSLESS":o.codec}),h.jsx("span",{className:"font-mono-tech text-[10px] text-[#8E8E93]",children:Xn[o.source_platform].short})]})]})]}),h.jsxs("div",{className:"flex flex-col items-center gap-1.5",children:[h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsx("button",{type:"button",onClick:w,"aria-label":"Phát ngẫu nhiên",className:"text-[#8E8E93] transition hover:text-[#F5F5F7]",style:d?{color:"var(--accent)"}:void 0,children:h.jsx(dy,{className:"h-4 w-4"})}),h.jsx("button",{type:"button",onClick:_,"aria-label":"Bài trước",className:"text-[#F5F5F7]/85 transition hover:text-white active:scale-95",children:h.jsx(hy,{className:"h-[18px] w-[18px] fill-current"})}),h.jsx("button",{type:"button",onClick:x,"aria-label":t?"Tạm dừng":"Phát",className:"flex h-9 w-9 items-center justify-center rounded-full text-white transition active:scale-95",style:{backgroundColor:"var(--accent)"},children:t?h.jsx(Pl,{className:"h-4 w-4 fill-current"}):h.jsx(Ka,{className:"h-4 w-4 fill-current translate-x-[1px]"})}),h.jsx("button",{type:"button",onClick:m,"aria-label":"Bài tiếp",className:"text-[#F5F5F7]/85 transition hover:text-white active:scale-95",children:h.jsx(Vu,{className:"h-[18px] w-[18px] fill-current"})}),h.jsx("button",{type:"button",onClick:N,"aria-label":"Lặp lại",className:"text-[#8E8E93] transition hover:text-[#F5F5F7]",style:p!=="off"?{color:"var(--accent)"}:void 0,children:p==="one"?h.jsx(uy,{className:"h-4 w-4"}):h.jsx(fy,{className:"h-4 w-4"})})]}),h.jsxs("div",{className:"flex w-full items-center gap-2.5",children:[h.jsx("span",{className:"font-mono-tech w-10 text-right text-[11px] text-[#8E8E93]",children:cr(i)}),h.jsx("input",{type:"range",min:0,max:Math.max(1,s),step:.5,value:Math.min(i,s||1),onChange:O=>g(Number(O.target.value)),"aria-label":"Tiến độ bài hát",className:"hifi-slider flex-1"}),h.jsx("span",{className:"font-mono-tech w-10 text-[11px] text-[#8E8E93]",children:cr(s)})]})]}),h.jsxs("div",{className:"flex items-center justify-end gap-3.5",children:[h.jsxs("button",{type:"button",onClick:()=>S("dsp"),className:"flex items-center gap-1.5 rounded-md border border-white/[0.08] px-2.5 py-1 text-[11px] font-mono-tech text-[#C7C7CC] transition hover:border-white/20 hover:text-white",title:"Mở Phòng Âm Thanh Hi-Fi",children:[h.jsx(sf,{className:"h-3.5 w-3.5",style:{color:"var(--accent)"}}),h.jsx("span",{children:"DSP"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{type:"button",onClick:M,"aria-label":u?"Bật tiếng":"Tắt tiếng",className:"text-[#8E8E93] transition hover:text-[#F5F5F7]",children:u||l===0?h.jsx(my,{className:"h-4 w-4"}):h.jsx(py,{className:"h-4 w-4"})}),h.jsx("input",{type:"range",min:0,max:1,step:.01,value:u?0:l,onChange:O=>v(Number(O.target.value)),"aria-label":"Âm lượng",className:"hifi-slider w-24"})]}),h.jsx("button",{type:"button",onClick:()=>b(!0),"aria-label":"Mở trình phát toàn màn hình",className:"text-[#8E8E93] transition hover:text-[#F5F5F7]",children:h.jsx(Qv,{className:"h-4 w-4"})})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vm="187",JM=0,i_=1,$M=2,Fu=1,eE=2,Nl=3,ur=0,ii=1,qa=2,vo=0,Ol=1,bp=2,a_=3,s_=4,tE=5,xo=100,nE=101,iE=102,aE=103,sE=104,rE=200,oE=201,lE=202,cE=203,Sy=204,by=205,uE=206,fE=207,dE=208,hE=209,pE=210,mE=211,gE=212,xE=213,vE=214,Mp=0,Ep=1,Tp=2,Fl=3,Ap=4,wp=5,Rp=6,Cp=7,My=0,_E=1,yE=2,Wa=0,Ey=1,Ty=2,Ay=3,wy=4,Ry=5,Cy=6,Ny=7,Dy=300,yo=301,Il=302,Vh=303,jh=304,Np=1e3,Xa=1001,Dp=1002,Wn=1003,SE=1004,fu=1005,fi=1006,qh=1007,Us=1008,Ii=1009,Ly=1010,Uy=1011,Bl=1012,_m=1013,Sa=1014,ga=1015,ba=1016,ym=1017,Sm=1018,So=1020,Oy=35902,Py=35899,Fy=1021,Iy=1022,xa=1023,Ps=1026,Os=1027,By=1028,bm=1029,fr=1030,Mm=1031,Em=1033,Iu=33776,Bu=33777,zu=33778,Hu=33779,Lp=35840,Up=35841,Op=35842,Pp=35843,Fp=36196,Ip=37492,Bp=37496,zp=37488,Hp=37489,Wu=37490,kp=37491,Gp=37808,Vp=37809,jp=37810,qp=37811,Xp=37812,Wp=37813,Yp=37814,Kp=37815,Zp=37816,Qp=37817,Jp=37818,$p=37819,em=37820,tm=37821,nm=36492,im=36494,am=36495,sm=36283,rm=36284,Yu=36285,om=36286,bE=3200,r_=0,ME=1,Ls="",Fi="srgb",Ku="srgb-linear",Zu="linear",sn="srgb",Xh=7680,EE=519,TE=512,AE=513,wE=514,zy=515,RE=516,CE=517,Hy=518,ky=519,NE=35044,o_="300 es",ea=2e3,Qu=2001;function DE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Ju(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function LE(){const o=Ju("canvas");return o.style.display="block",o}const l_={};function c_(...o){const t="THREE."+o.shift();console.log(t,...o)}function Gy(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function yt(...o){o=Gy(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Yt(...o){o=Gy(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function ku(...o){const t=o.join(" ");t in l_||(l_[t]=!0,yt(...o))}function UE(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const OE={[Mp]:Mp,[Tp]:Rp,[Ap]:Ap,[Fl]:wp,[Ep]:Ep,[Rp]:Tp,[Cp]:Cp,[wp]:Fl};class hr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wh=Math.PI/180,lm=180/Math.PI;function zl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Kn[o&255]+Kn[o>>8&255]+Kn[o>>16&255]+Kn[o>>24&255]+"-"+Kn[t&255]+Kn[t>>8&255]+"-"+Kn[t>>16&15|64]+Kn[t>>24&255]+"-"+Kn[i&63|128]+Kn[i>>8&255]+"-"+Kn[i>>16&255]+Kn[i>>24&255]+Kn[s&255]+Kn[s>>8&255]+Kn[s>>16&255]+Kn[s>>24&255]).toLowerCase()}function Gt(o,t,i){return Math.max(t,Math.min(i,o))}function PE(o,t){return(o%t+t)%t}function Yh(o,t,i){return(1-i)*o+i*t}function FE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Tm(o){switch(o.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function IE(o,t){if(t.constructor===Float32Array)return o;const i=Tm(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(o/i,-1)}function BE(o,t){if(t.constructor===Float32Array)return o;const i=Tm(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(o*i)}const Pm=class Pm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Gt(this.x,t.x,i.x),this.y=Gt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Gt(this.x,t,i),this.y=Gt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Gt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Gt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*s-d*l+t.x,this.y=u*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pm.prototype.isVector2=!0;let Vt=Pm;class Eo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,d,p){let x=s[l+0],m=s[l+1],_=s[l+2],g=s[l+3],v=u[d+0],M=u[d+1],w=u[d+2],N=u[d+3];if(g!==N||x!==v||m!==M||_!==w){let b=x*v+m*M+_*w+g*N;b<0&&(v=-v,M=-M,w=-w,N=-N,b=-b);let S=1-p;if(b<.9995){const T=Math.acos(b),O=Math.sin(T);S=Math.sin(S*T)/O,p=Math.sin(p*T)/O,x=x*S+v*p,m=m*S+M*p,_=_*S+w*p,g=g*S+N*p}else{x=x*S+v*p,m=m*S+M*p,_=_*S+w*p,g=g*S+N*p;const T=1/Math.sqrt(x*x+m*m+_*_+g*g);x*=T,m*=T,_*=T,g*=T}}t[i]=x,t[i+1]=m,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,u,d){const p=s[l],x=s[l+1],m=s[l+2],_=s[l+3],g=u[d],v=u[d+1],M=u[d+2],w=u[d+3];return t[i]=p*w+_*g+x*M-m*v,t[i+1]=x*w+_*v+m*g-p*M,t[i+2]=m*w+_*M+p*v-x*g,t[i+3]=_*w-p*g-x*v-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,d=t._order,p=Math.cos,x=Math.sin,m=p(s/2),_=p(l/2),g=p(u/2),v=x(s/2),M=x(l/2),w=x(u/2);switch(d){case"XYZ":this._x=v*_*g+m*M*w,this._y=m*M*g-v*_*w,this._z=m*_*w+v*M*g,this._w=m*_*g-v*M*w;break;case"YXZ":this._x=v*_*g+m*M*w,this._y=m*M*g-v*_*w,this._z=m*_*w-v*M*g,this._w=m*_*g+v*M*w;break;case"ZXY":this._x=v*_*g-m*M*w,this._y=m*M*g+v*_*w,this._z=m*_*w+v*M*g,this._w=m*_*g-v*M*w;break;case"ZYX":this._x=v*_*g-m*M*w,this._y=m*M*g+v*_*w,this._z=m*_*w-v*M*g,this._w=m*_*g+v*M*w;break;case"YZX":this._x=v*_*g+m*M*w,this._y=m*M*g+v*_*w,this._z=m*_*w-v*M*g,this._w=m*_*g-v*M*w;break;case"XZY":this._x=v*_*g-m*M*w,this._y=m*M*g-v*_*w,this._z=m*_*w+v*M*g,this._w=m*_*g+v*M*w;break;default:yt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],d=i[1],p=i[5],x=i[9],m=i[2],_=i[6],g=i[10],v=s+p+g;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(_-x)*M,this._y=(u-m)*M,this._z=(d-l)*M}else if(s>p&&s>g){const M=2*Math.sqrt(1+s-p-g);this._w=(_-x)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+m)/M}else if(p>g){const M=2*Math.sqrt(1+p-s-g);this._w=(u-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(x+_)/M}else{const M=2*Math.sqrt(1+g-s-p);this._w=(d-l)/M,this._x=(u+m)/M,this._y=(x+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,d=t._w,p=i._x,x=i._y,m=i._z,_=i._w;return this._x=s*_+d*p+l*m-u*x,this._y=l*_+d*x+u*p-s*m,this._z=u*_+d*m+s*x-l*p,this._w=d*_-s*p-l*x-u*m,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,u=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,u=-u,d=-d,p=-p);let x=1-i;if(p<.9995){const m=Math.acos(p),_=Math.sin(m);x=Math.sin(x*m)/_,i=Math.sin(i*m)/_,this._x=this._x*x+s*i,this._y=this._y*x+l*i,this._z=this._z*x+u*i,this._w=this._w*x+d*i,this._onChangeCallback()}else this._x=this._x*x+s*i,this._y=this._y*x+l*i,this._z=this._z*x+u*i,this._w=this._w*x+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fm=class Fm{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(u_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(u_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,d=t.y,p=t.z,x=t.w,m=2*(d*l-p*s),_=2*(p*i-u*l),g=2*(u*s-d*i);return this.x=i+x*m+d*g-p*_,this.y=s+x*_+p*m-u*g,this.z=l+x*g+u*_-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Gt(this.x,t.x,i.x),this.y=Gt(this.y,t.y,i.y),this.z=Gt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Gt(this.x,t,i),this.y=Gt(this.y,t,i),this.z=Gt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Gt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,d=i.x,p=i.y,x=i.z;return this.x=l*x-u*p,this.y=u*d-s*x,this.z=s*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Kh.copy(this).projectOnVector(t),this.sub(Kh)}reflect(t){return this.sub(Kh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Gt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fm.prototype.isVector3=!0;let oe=Fm;const Kh=new oe,u_=new Eo,Im=class Im{constructor(t,i,s,l,u,d,p,x,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,p,x,m)}set(t,i,s,l,u,d,p,x,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=u,_[5]=x,_[6]=s,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],p=s[3],x=s[6],m=s[1],_=s[4],g=s[7],v=s[2],M=s[5],w=s[8],N=l[0],b=l[3],S=l[6],T=l[1],O=l[4],U=l[7],z=l[2],I=l[5],E=l[8];return u[0]=d*N+p*T+x*z,u[3]=d*b+p*O+x*I,u[6]=d*S+p*U+x*E,u[1]=m*N+_*T+g*z,u[4]=m*b+_*O+g*I,u[7]=m*S+_*U+g*E,u[2]=v*N+M*T+w*z,u[5]=v*b+M*O+w*I,u[8]=v*S+M*U+w*E,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],p=t[5],x=t[6],m=t[7],_=t[8];return i*d*_-i*p*m-s*u*_+s*p*x+l*u*m-l*d*x}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],p=t[5],x=t[6],m=t[7],_=t[8],g=_*d-p*m,v=p*x-_*u,M=m*u-d*x,w=i*g+s*v+l*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/w;return t[0]=g*N,t[1]=(l*m-_*s)*N,t[2]=(p*s-l*d)*N,t[3]=v*N,t[4]=(_*i-l*x)*N,t[5]=(l*u-p*i)*N,t[6]=M*N,t[7]=(s*x-m*i)*N,t[8]=(d*i-s*u)*N,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,d,p){const x=Math.cos(u),m=Math.sin(u);return this.set(s*x,s*m,-s*(x*d+m*p)+d+t,-l*m,l*x,-l*(-m*d+x*p)+p+i,0,0,1),this}scale(t,i){return ku("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zh.makeScale(t,i)),this}rotate(t){return ku("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zh.makeRotation(-t)),this}translate(t,i){return ku("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Im.prototype.isMatrix3=!0;let bt=Im;const Zh=new bt,f_=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d_=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zE(){const o={enabled:!0,workingColorSpace:Ku,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===sn&&(l.r=Ya(l.r),l.g=Ya(l.g),l.b=Ya(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===sn&&(l.r=_o(l.r),l.g=_o(l.g),l.b=_o(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ls?Zu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[d].fromXYZ).multiply(this.spaces[u].toXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ku]:{primaries:t,whitePoint:s,transfer:Zu,toXYZ:f_,fromXYZ:d_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Fi},outputColorSpaceConfig:{drawingBufferColorSpace:Fi}},[Fi]:{primaries:t,whitePoint:s,transfer:sn,toXYZ:f_,fromXYZ:d_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Fi}}}),o}const kt=zE();function Ya(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function _o(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ao;class HE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ao===void 0&&(ao=Ju("canvas")),ao.width=t.width,ao.height=t.height;const l=ao.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=ao}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ju("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Ya(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ya(i[s]/255)*255):i[s]=Ya(i[s]);return{data:i,width:t.width,height:t.height}}else return yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kE=0;class Am{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=zl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width||0,i.height||0,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?u.push(Qh(l[d].image)):u.push(Qh(l[d]))}else u=Qh(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Qh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?HE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(yt("Texture: Unable to serialize Texture."),{})}let GE=0;const Jh=new oe;class ai extends hr{constructor(t=ai.DEFAULT_IMAGE,i=ai.DEFAULT_MAPPING,s=Xa,l=Xa,u=fi,d=Us,p=xa,x=Ii,m=ai.DEFAULT_ANISOTROPY,_=Ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=zl(),this.name="",this.source=new Am(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=x,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Jh).x}get height(){return this.source.getSize(Jh).y}get depth(){return this.source.getSize(Jh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){yt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){yt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Np:t.x=t.x-Math.floor(t.x);break;case Xa:t.x=t.x<0?0:1;break;case Dp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Np:t.y=t.y-Math.floor(t.y);break;case Xa:t.y=t.y<0?0:1;break;case Dp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Dy;ai.DEFAULT_ANISOTROPY=1;const Bm=class Bm{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const x=t.elements,m=x[0],_=x[4],g=x[8],v=x[1],M=x[5],w=x[9],N=x[2],b=x[6],S=x[10];if(Math.abs(_-v)<.01&&Math.abs(g-N)<.01&&Math.abs(w-b)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+N)<.1&&Math.abs(w+b)<.1&&Math.abs(m+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,U=(M+1)/2,z=(S+1)/2,I=(_+v)/4,E=(g+N)/4,L=(w+b)/4;return O>U&&O>z?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=I/s,u=E/s):U>z?U<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),s=I/l,u=L/l):z<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),s=E/u,l=L/u),this.set(s,l,u,i),this}let T=Math.sqrt((b-w)*(b-w)+(g-N)*(g-N)+(v-_)*(v-_));return Math.abs(T)<.001&&(T=1),this.x=(b-w)/T,this.y=(g-N)/T,this.z=(v-_)/T,this.w=Math.acos((m+M+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Gt(this.x,t.x,i.x),this.y=Gt(this.y,t.y,i.y),this.z=Gt(this.z,t.z,i.z),this.w=Gt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Gt(this.x,t,i),this.y=Gt(this.y,t,i),this.z=Gt(this.z,t,i),this.w=Gt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Gt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bm.prototype.isVector4=!0;let gn=Bm;class VE extends hr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new gn(0,0,t,i),this.scissorTest=!1,this.viewport=new gn(0,0,t,i),this.textures=[];const l=s.count;for(let u=0;u<l;u++)this.textures[u]=new ai({width:t,height:i,depth:s.depth}),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:fi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(i.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Am(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class va extends VE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Vy extends ai{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jE extends ai{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const nf=class nf{constructor(t,i,s,l,u,d,p,x,m,_,g,v,M,w,N,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,p,x,m,_,g,v,M,w,N,b)}set(t,i,s,l,u,d,p,x,m,_,g,v,M,w,N,b){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=u,S[5]=d,S[9]=p,S[13]=x,S[2]=m,S[6]=_,S[10]=g,S[14]=v,S[3]=M,S[7]=w,S[11]=N,S[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nf().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/so.setFromMatrixColumn(t,0).length(),u=1/so.setFromMatrixColumn(t,1).length(),d=1/so.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,d=Math.cos(s),p=Math.sin(s),x=Math.cos(l),m=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const v=d*_,M=d*g,w=p*_,N=p*g;i[0]=x*_,i[4]=-x*g,i[8]=m,i[1]=M+w*m,i[5]=v-N*m,i[9]=-p*x,i[2]=N-v*m,i[6]=w+M*m,i[10]=d*x}else if(t.order==="YXZ"){const v=x*_,M=x*g,w=m*_,N=m*g;i[0]=v+N*p,i[4]=w*p-M,i[8]=d*m,i[1]=d*g,i[5]=d*_,i[9]=-p,i[2]=M*p-w,i[6]=N+v*p,i[10]=d*x}else if(t.order==="ZXY"){const v=x*_,M=x*g,w=m*_,N=m*g;i[0]=v-N*p,i[4]=-d*g,i[8]=w+M*p,i[1]=M+w*p,i[5]=d*_,i[9]=N-v*p,i[2]=-d*m,i[6]=p,i[10]=d*x}else if(t.order==="ZYX"){const v=d*_,M=d*g,w=p*_,N=p*g;i[0]=x*_,i[4]=w*m-M,i[8]=v*m+N,i[1]=x*g,i[5]=N*m+v,i[9]=M*m-w,i[2]=-m,i[6]=p*x,i[10]=d*x}else if(t.order==="YZX"){const v=d*x,M=d*m,w=p*x,N=p*m;i[0]=x*_,i[4]=N-v*g,i[8]=w*g+M,i[1]=g,i[5]=d*_,i[9]=-p*_,i[2]=-m*_,i[6]=M*g+w,i[10]=v-N*g}else if(t.order==="XZY"){const v=d*x,M=d*m,w=p*x,N=p*m;i[0]=x*_,i[4]=-g,i[8]=m*_,i[1]=v*g+N,i[5]=d*_,i[9]=M*g-w,i[2]=w*g-M,i[6]=p*_,i[10]=N*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qE,t,XE)}lookAt(t,i,s){const l=this.elements;return bi.subVectors(t,i),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),As.crossVectors(s,bi),As.lengthSq()===0&&(Math.abs(s.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),As.crossVectors(s,bi)),As.normalize(),du.crossVectors(bi,As),l[0]=As.x,l[4]=du.x,l[8]=bi.x,l[1]=As.y,l[5]=du.y,l[9]=bi.y,l[2]=As.z,l[6]=du.z,l[10]=bi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],p=s[4],x=s[8],m=s[12],_=s[1],g=s[5],v=s[9],M=s[13],w=s[2],N=s[6],b=s[10],S=s[14],T=s[3],O=s[7],U=s[11],z=s[15],I=l[0],E=l[4],L=l[8],Y=l[12],F=l[1],G=l[5],Z=l[9],he=l[13],q=l[2],ae=l[6],P=l[10],H=l[14],ie=l[3],Q=l[7],ce=l[11],Se=l[15];return u[0]=d*I+p*F+x*q+m*ie,u[4]=d*E+p*G+x*ae+m*Q,u[8]=d*L+p*Z+x*P+m*ce,u[12]=d*Y+p*he+x*H+m*Se,u[1]=_*I+g*F+v*q+M*ie,u[5]=_*E+g*G+v*ae+M*Q,u[9]=_*L+g*Z+v*P+M*ce,u[13]=_*Y+g*he+v*H+M*Se,u[2]=w*I+N*F+b*q+S*ie,u[6]=w*E+N*G+b*ae+S*Q,u[10]=w*L+N*Z+b*P+S*ce,u[14]=w*Y+N*he+b*H+S*Se,u[3]=T*I+O*F+U*q+z*ie,u[7]=T*E+O*G+U*ae+z*Q,u[11]=T*L+O*Z+U*P+z*ce,u[15]=T*Y+O*he+U*H+z*Se,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],d=t[1],p=t[5],x=t[9],m=t[13],_=t[2],g=t[6],v=t[10],M=t[14],w=t[3],N=t[7],b=t[11],S=t[15],T=x*M-m*v,O=p*M-m*g,U=p*v-x*g,z=d*M-m*_,I=d*v-x*_,E=d*g-p*_;return i*(N*T-b*O+S*U)-s*(w*T-b*z+S*I)+l*(w*O-N*z+S*E)-u*(w*U-N*I+b*E)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[1],d=t[5],p=t[9],x=t[2],m=t[6],_=t[10];return i*(d*_-p*m)-s*(u*_-p*x)+l*(u*m-d*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],p=t[5],x=t[6],m=t[7],_=t[8],g=t[9],v=t[10],M=t[11],w=t[12],N=t[13],b=t[14],S=t[15],T=i*p-s*d,O=i*x-l*d,U=i*m-u*d,z=s*x-l*p,I=s*m-u*p,E=l*m-u*x,L=_*N-g*w,Y=_*b-v*w,F=_*S-M*w,G=g*b-v*N,Z=g*S-M*N,he=v*S-M*b,q=T*he-O*Z+U*G+z*F-I*Y+E*L;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ae=1/q;return t[0]=(p*he-x*Z+m*G)*ae,t[1]=(l*Z-s*he-u*G)*ae,t[2]=(N*E-b*I+S*z)*ae,t[3]=(v*I-g*E-M*z)*ae,t[4]=(x*F-d*he-m*Y)*ae,t[5]=(i*he-l*F+u*Y)*ae,t[6]=(b*U-w*E-S*O)*ae,t[7]=(_*E-v*U+M*O)*ae,t[8]=(d*Z-p*F+m*L)*ae,t[9]=(s*F-i*Z-u*L)*ae,t[10]=(w*I-N*U+S*T)*ae,t[11]=(g*U-_*I-M*T)*ae,t[12]=(p*Y-d*G-x*L)*ae,t[13]=(i*G-s*Y+l*L)*ae,t[14]=(N*O-w*z-b*T)*ae,t[15]=(_*z-g*O+v*T)*ae,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=t.x,p=t.y,x=t.z,m=u*d,_=u*p;return this.set(m*d+s,m*p-l*x,m*x+l*p,0,m*p+l*x,_*p+s,_*x-l*d,0,m*x-l*p,_*x+l*d,u*x*x+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,d){return this.set(1,s,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,d=i._y,p=i._z,x=i._w,m=u+u,_=d+d,g=p+p,v=u*m,M=u*_,w=u*g,N=d*_,b=d*g,S=p*g,T=x*m,O=x*_,U=x*g,z=s.x,I=s.y,E=s.z;return l[0]=(1-(N+S))*z,l[1]=(M+U)*z,l[2]=(w-O)*z,l[3]=0,l[4]=(M-U)*I,l[5]=(1-(v+S))*I,l[6]=(b+T)*I,l[7]=0,l[8]=(w+O)*E,l[9]=(b-T)*E,l[10]=(1-(v+N))*E,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinantAffine();if(u===0)return s.set(1,1,1),i.identity(),this;let d=so.set(l[0],l[1],l[2]).length();const p=so.set(l[4],l[5],l[6]).length(),x=so.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Yi.copy(this);const m=1/d,_=1/p,g=1/x;return Yi.elements[0]*=m,Yi.elements[1]*=m,Yi.elements[2]*=m,Yi.elements[4]*=_,Yi.elements[5]*=_,Yi.elements[6]*=_,Yi.elements[8]*=g,Yi.elements[9]*=g,Yi.elements[10]*=g,i.setFromRotationMatrix(Yi),s.x=d,s.y=p,s.z=x,this}makePerspective(t,i,s,l,u,d,p=ea,x=!1){const m=this.elements,_=2*u/(i-t),g=2*u/(s-l),v=(i+t)/(i-t),M=(s+l)/(s-l);let w,N;if(x)w=u/(d-u),N=d*u/(d-u);else if(p===ea)w=-(d+u)/(d-u),N=-2*d*u/(d-u);else if(p===Qu)w=-d/(d-u),N=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return m[0]=_,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=N,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,d,p=ea,x=!1){const m=this.elements,_=2/(i-t),g=2/(s-l),v=-(i+t)/(i-t),M=-(s+l)/(s-l);let w,N;if(x)w=1/(d-u),N=d/(d-u);else if(p===ea)w=-2/(d-u),N=-(d+u)/(d-u);else if(p===Qu)w=-1/(d-u),N=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return m[0]=_,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=w,m[14]=N,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};nf.prototype.isMatrix4=!0;let xn=nf;const so=new oe,Yi=new xn,qE=new oe(0,0,0),XE=new oe(1,1,1),As=new oe,du=new oe,bi=new oe,h_=new xn,p_=new Eo;class dr{constructor(t=0,i=0,s=0,l=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],d=l[4],p=l[8],x=l[1],m=l[5],_=l[9],g=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(x,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(x,u));break;case"ZYX":this._y=Math.asin(-Gt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(x,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Gt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return h_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(h_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return p_.setFromEuler(this),this.setFromQuaternion(p_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class wm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let WE=0;const m_=new oe,ro=new Eo,Ba=new xn,hu=new oe,Ml=new oe,YE=new oe,KE=new Eo,g_=new oe(1,0,0),x_=new oe(0,1,0),v_=new oe(0,0,1),__={type:"added"},ZE={type:"removed"},oo={type:"childadded",child:null},$h={type:"childremoved",child:null};class di extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=zl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=di.DEFAULT_UP.clone();const t=new oe,i=new dr,s=new Eo,l=new oe(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new xn},normalMatrix:{value:new bt}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=di.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ro.setFromAxisAngle(t,i),this.quaternion.multiply(ro),this}rotateOnWorldAxis(t,i){return ro.setFromAxisAngle(t,i),this.quaternion.premultiply(ro),this}rotateX(t){return this.rotateOnAxis(g_,t)}rotateY(t){return this.rotateOnAxis(x_,t)}rotateZ(t){return this.rotateOnAxis(v_,t)}translateOnAxis(t,i){return m_.copy(t).applyQuaternion(this.quaternion),this.position.add(m_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(g_,t)}translateY(t){return this.translateOnAxis(x_,t)}translateZ(t){return this.translateOnAxis(v_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ba.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?hu.copy(t):hu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ba.lookAt(Ml,hu,this.up):Ba.lookAt(hu,Ml,this.up),this.quaternion.setFromRotationMatrix(Ba),l&&(Ba.extractRotation(l.matrixWorld),ro.setFromRotationMatrix(Ba),this.quaternion.premultiply(ro.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(__),oo.child=t,this.dispatchEvent(oo),oo.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ZE),$h.child=t,this.dispatchEvent($h),$h.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ba.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ba.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ba),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(__),oo.child=t,this.dispatchEvent(oo),oo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,t,YE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,KE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const u=this.children;for(let d=0,p=u.length;d<p;d++)u[d].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,x){return p[x.uuid]===void 0&&(p[x.uuid]=x.toJSON(t)),x.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const x=p.shapes;if(Array.isArray(x))for(let m=0,_=x.length;m<_;m++){const g=x[m];u(t.shapes,g)}else u(t.shapes,x)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let x=0,m=this.material.length;x<m;x++)p.push(u(t.materials,this.material[x]));l.material=p}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const x=this.animations[p];l.animations.push(u(t.animations,x))}}if(i){const p=d(t.geometries),x=d(t.materials),m=d(t.textures),_=d(t.images),g=d(t.shapes),v=d(t.skeletons),M=d(t.animations),w=d(t.nodes);p.length>0&&(s.geometries=p),x.length>0&&(s.materials=x),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),w.length>0&&(s.nodes=w)}return s.object=l,s;function d(p){const x=[];for(const m in p){const _=p[m];delete _.metadata,x.push(_)}return x}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}di.DEFAULT_UP=new oe(0,1,0);di.DEFAULT_MATRIX_AUTO_UPDATE=!0;di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Dl extends di{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QE={type:"move"};class ep{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,d=null;const p=this._targetRay,x=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const N of t.hand.values()){const b=i.getJointPose(N,s),S=this._getHandJoint(m,N);b!==null&&(S.matrix.fromArray(b.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=b.radius),S.visible=b!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=_.position.distanceTo(g.position),M=.02,w=.005;m.inputState.pinching&&v>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else x!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(x.matrix.fromArray(u.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,u.linearVelocity?(x.hasLinearVelocity=!0,x.linearVelocity.copy(u.linearVelocity)):x.hasLinearVelocity=!1,u.angularVelocity?(x.hasAngularVelocity=!0,x.angularVelocity.copy(u.angularVelocity)):x.hasAngularVelocity=!1,x.eventsEnabled&&x.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(QE)))}return p!==null&&(p.visible=l!==null),x!==null&&(x.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Dl;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const jy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},pu={h:0,s:0,l:0};function tp(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Jt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=kt.workingColorSpace){return this.r=t,this.g=i,this.b=s,kt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=kt.workingColorSpace){if(t=PE(t,1),i=Gt(i,0,1),s=Gt(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=tp(d,u,t+1/3),this.g=tp(d,u,t),this.b=tp(d,u,t-1/3)}return kt.colorSpaceToWorking(this,l),this}setStyle(t,i=Fi){function s(u){u!==void 0&&parseFloat(u)<1&&yt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(100,parseFloat(u[1]))/100,Math.min(100,parseFloat(u[2]))/100,Math.min(100,parseFloat(u[3]))/100,i);break;case"hsl":case"hsla":if(u=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:yt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Fi){const s=jy[t.toLowerCase()];return s!==void 0?this.setHex(s,i):yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ya(t.r),this.g=Ya(t.g),this.b=Ya(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fi){return kt.workingToColorSpace(Zn.copy(this),t),Math.round(Gt(Zn.r*255,0,255))*65536+Math.round(Gt(Zn.g*255,0,255))*256+Math.round(Gt(Zn.b*255,0,255))}getHexString(t=Fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=kt.workingColorSpace){kt.workingToColorSpace(Zn.copy(this),i);const s=Zn.r,l=Zn.g,u=Zn.b,d=Math.max(s,l,u),p=Math.min(s,l,u);let x,m;const _=(p+d)/2;if(p===d)x=0,m=0;else{const g=d-p;switch(m=_<=.5?g/(d+p):g/(2-d-p),d){case s:x=(l-u)/g+(l<u?6:0);break;case l:x=(u-s)/g+2;break;case u:x=(s-l)/g+4;break}x/=6}return t.h=x,t.s=m,t.l=_,t}getRGB(t,i=kt.workingColorSpace){return kt.workingToColorSpace(Zn.copy(this),i),t.r=Zn.r,t.g=Zn.g,t.b=Zn.b,t}getStyle(t=Fi){kt.workingToColorSpace(Zn.copy(this),t);const i=Zn.r,s=Zn.g,l=Zn.b;return t!==Fi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ws),this.setHSL(ws.h+t,ws.s+i,ws.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ws),t.getHSL(pu);const s=Yh(ws.h,pu.h,i),l=Yh(ws.s,pu.s,i),u=Yh(ws.l,pu.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new Jt;Jt.NAMES=jy;class JE extends di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ki=new oe,za=new oe,np=new oe,Ha=new oe,lo=new oe,co=new oe,y_=new oe,ip=new oe,ap=new oe,sp=new oe,rp=new gn,op=new gn,lp=new gn;class $i{constructor(t=new oe,i=new oe,s=new oe){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ki.subVectors(t,i),l.cross(Ki);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Ki.subVectors(l,i),za.subVectors(s,i),np.subVectors(t,i);const d=Ki.dot(Ki),p=Ki.dot(za),x=Ki.dot(np),m=za.dot(za),_=za.dot(np),g=d*m-p*p;if(g===0)return u.set(0,0,0),null;const v=1/g,M=(m*x-p*_)*v,w=(d*_-p*x)*v;return u.set(1-M-w,w,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ha)===null?!1:Ha.x>=0&&Ha.y>=0&&Ha.x+Ha.y<=1}static getInterpolation(t,i,s,l,u,d,p,x){return this.getBarycoord(t,i,s,l,Ha)===null?(x.x=0,x.y=0,"z"in x&&(x.z=0),"w"in x&&(x.w=0),null):(x.setScalar(0),x.addScaledVector(u,Ha.x),x.addScaledVector(d,Ha.y),x.addScaledVector(p,Ha.z),x)}static getInterpolatedAttribute(t,i,s,l,u,d){return rp.setScalar(0),op.setScalar(0),lp.setScalar(0),rp.fromBufferAttribute(t,i),op.fromBufferAttribute(t,s),lp.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(rp,u.x),d.addScaledVector(op,u.y),d.addScaledVector(lp,u.z),d}static isFrontFacing(t,i,s,l){return Ki.subVectors(s,i),za.subVectors(t,i),Ki.cross(za).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ki.subVectors(this.c,this.b),za.subVectors(this.a,this.b),Ki.cross(za).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return $i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return $i.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return $i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let d,p;lo.subVectors(l,s),co.subVectors(u,s),ip.subVectors(t,s);const x=lo.dot(ip),m=co.dot(ip);if(x<=0&&m<=0)return i.copy(s);ap.subVectors(t,l);const _=lo.dot(ap),g=co.dot(ap);if(_>=0&&g<=_)return i.copy(l);const v=x*g-_*m;if(v<=0&&x>=0&&_<=0&&x-_>0)return d=x/(x-_),i.copy(s).addScaledVector(lo,d);sp.subVectors(t,u);const M=lo.dot(sp),w=co.dot(sp);if(w>=0&&M<=w)return i.copy(u);const N=M*m-x*w;if(N<=0&&m>=0&&w<=0)return p=m/(m-w),i.copy(s).addScaledVector(co,p);const b=_*w-M*g;if(b<=0&&g-_>=0&&M-w>=0)return y_.subVectors(u,l),p=(g-_)/(g-_+(M-w)),i.copy(l).addScaledVector(y_,p);const S=1/(b+N+v);return d=N*S,p=v*S,i.copy(s).addScaledVector(lo,d).addScaledVector(co,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Hl{constructor(t=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Zi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Zi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Zi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let d=0,p=u.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Zi):Zi.fromBufferAttribute(u,d),Zi.applyMatrix4(t.matrixWorld),this.expandByPoint(Zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),mu.copy(s.boundingBox)),mu.applyMatrix4(t.matrixWorld),this.union(mu)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zi),Zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(El),gu.subVectors(this.max,El),uo.subVectors(t.a,El),fo.subVectors(t.b,El),ho.subVectors(t.c,El),Rs.subVectors(fo,uo),Cs.subVectors(ho,fo),ar.subVectors(uo,ho);let i=[0,-Rs.z,Rs.y,0,-Cs.z,Cs.y,0,-ar.z,ar.y,Rs.z,0,-Rs.x,Cs.z,0,-Cs.x,ar.z,0,-ar.x,-Rs.y,Rs.x,0,-Cs.y,Cs.x,0,-ar.y,ar.x,0];return!cp(i,uo,fo,ho,gu)||(i=[1,0,0,0,1,0,0,0,1],!cp(i,uo,fo,ho,gu))?!1:(xu.crossVectors(Rs,Cs),i=[xu.x,xu.y,xu.z],cp(i,uo,fo,ho,gu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ka),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ka=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Zi=new oe,mu=new Hl,uo=new oe,fo=new oe,ho=new oe,Rs=new oe,Cs=new oe,ar=new oe,El=new oe,gu=new oe,xu=new oe,sr=new oe;function cp(o,t,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){sr.fromArray(o,u);const p=l.x*Math.abs(sr.x)+l.y*Math.abs(sr.y)+l.z*Math.abs(sr.z),x=t.dot(sr),m=i.dot(sr),_=s.dot(sr);if(Math.max(-Math.max(x,m,_),Math.min(x,m,_))>p)return!1}return!0}const wn=new oe,vu=new Vt;let $E=0;class _a extends hr{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$E++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=NE,this.updateRanges=[],this.gpuType=ga,this.version=0,this._normalizationScale=t!==void 0?Tm(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)vu.fromBufferAttribute(this,i),vu.applyMatrix3(t),this.setXY(i,vu.x,vu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix3(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix4(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyNormalMatrix(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.transformDirection(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=this._denormalize(s)),s}setComponent(t,i,s){return this.normalized&&(s=this._normalize(s)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=this._denormalize(i)),i}setX(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=this._denormalize(i)),i}setY(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=this._denormalize(i)),i}setZ(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=this._denormalize(i)),i}setW(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s),l=this._normalize(l)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s),l=this._normalize(l),u=this._normalize(u)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const i=this._normalizationScale;return i!==void 0?Math.max(t/i,-1):IE(t,this.array)}_normalize(t){const i=this._normalizationScale;return i!==void 0?Math.round(t*i):BE(t,this.array)}}class qy extends _a{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Xy extends _a{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Bn extends _a{constructor(t,i,s){super(new Float32Array(t),i,s)}}const eT=new Hl,Tl=new oe,up=new oe;class lf{constructor(t=new oe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):eT.setFromPoints(t).getCenter(s);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tl.subVectors(t,this.center);const i=Tl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Tl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(up.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tl.copy(t.center).add(up)),this.expandByPoint(Tl.copy(t.center).sub(up))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let tT=0;const Pi=new xn,fp=new di,po=new oe,Mi=new Hl,Al=new Hl,In=new oe;class zi extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=zl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(DE(t)?Xy:qy)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new bt().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,i,s){return Pi.makeTranslation(t,i,s),this.applyMatrix4(Pi),this}scale(t,i,s){return Pi.makeScale(t,i,s),this.applyMatrix4(Pi),this}lookAt(t){return fp.lookAt(t),fp.updateMatrix(),this.applyMatrix4(fp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Bn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Mi.setFromBufferAttribute(u),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lf);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(t){const s=this.boundingSphere.center;if(Mi.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const p=i[u];Al.setFromBufferAttribute(p),this.morphTargetsRelative?(In.addVectors(Mi.min,Al.min),Mi.expandByPoint(In),In.addVectors(Mi.max,Al.max),Mi.expandByPoint(In)):(Mi.expandByPoint(Al.min),Mi.expandByPoint(Al.max))}Mi.getCenter(s);let l=0;for(let u=0,d=t.count;u<d;u++)In.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(In));if(i)for(let u=0,d=i.length;u<d;u++){const p=i[u],x=this.morphTargetsRelative;for(let m=0,_=p.count;m<_;m++)In.fromBufferAttribute(p,m),x&&(po.fromBufferAttribute(t,m),In.add(po)),l=Math.max(l,s.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new _a(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const p=[],x=[],m=new Uint8Array(s.count);for(let Y=0;Y<s.count;Y++)p[Y]=new oe,x[Y]=new oe;const _=new oe,g=new oe,v=new oe,M=new Vt,w=new Vt,N=new Vt,b=new oe,S=new oe;function T(Y,F,G){m[Y]=m[F]=m[G]=1,_.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,F),v.fromBufferAttribute(s,G),M.fromBufferAttribute(u,Y),w.fromBufferAttribute(u,F),N.fromBufferAttribute(u,G),g.sub(_),v.sub(_),w.sub(M),N.sub(M);const Z=1/(w.x*N.y-N.x*w.y);isFinite(Z)&&(b.copy(g).multiplyScalar(N.y).addScaledVector(v,-w.y).multiplyScalar(Z),S.copy(v).multiplyScalar(w.x).addScaledVector(g,-N.x).multiplyScalar(Z),p[Y].add(b),p[F].add(b),p[G].add(b),x[Y].add(S),x[F].add(S),x[G].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let Y=0,F=O.length;Y<F;++Y){const G=O[Y],Z=G.start,he=G.count;for(let q=Z,ae=Z+he;q<ae;q+=3)T(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const U=new oe,z=new oe,I=new oe,E=new oe;function L(Y){I.fromBufferAttribute(l,Y),E.copy(I);const F=p[Y];U.copy(F),U.sub(I.multiplyScalar(I.dot(F))).normalize(),z.crossVectors(E,F);const Z=z.dot(x[Y])<0?-1:1;d.setXYZW(Y,U.x,U.y,U.z,Z)}for(let Y=0,F=s.count;Y<F;++Y)m[Y]&&L(Y);this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new _a(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const l=new oe,u=new oe,d=new oe,p=new oe,x=new oe,m=new oe,_=new oe,g=new oe;if(t)for(let v=0,M=t.count;v<M;v+=3){const w=t.getX(v+0),N=t.getX(v+1),b=t.getX(v+2);l.fromBufferAttribute(i,w),u.fromBufferAttribute(i,N),d.fromBufferAttribute(i,b),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),p.fromBufferAttribute(s,w),x.fromBufferAttribute(s,N),m.fromBufferAttribute(s,b),p.add(_),x.add(_),m.add(_),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(N,x.x,x.y,x.z),s.setXYZ(b,m.x,m.y,m.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)In.fromBufferAttribute(t,i),In.normalize(),t.setXYZ(i,In.x,In.y,In.z)}toNonIndexed(){function t(p,x){const m=p.array,_=p.itemSize,g=p.normalized,v=new m.constructor(x.length*_);let M=0,w=0;for(let N=0,b=x.length;N<b;N++){p.isInterleavedBufferAttribute?M=x[N]*p.data.stride+p.offset:M=x[N]*_;for(let S=0;S<_;S++)v[w++]=m[M++]}return new _a(v,_,g)}if(this.index===null)return yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zi,s=this.index.array,l=this.attributes;for(const p in l){const x=l[p],m=t(x,s);i.setAttribute(p,m)}const u=this.morphAttributes;for(const p in u){const x=[],m=u[p];for(let _=0,g=m.length;_<g;_++){const v=m[_],M=t(v,s);x.push(M)}i.morphAttributes[p]=x}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,x=d.length;p<x;p++){const m=d[p];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const x=this.parameters;for(const m in x)x[m]!==void 0&&(t[m]=x[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const x in s){const m=s[x];t.data.attributes[x]=m.toJSON(t.data)}const l={};let u=!1;for(const x in this.morphAttributes){const m=this.morphAttributes[x],_=[];for(let g=0,v=m.length;g<v;g++){const M=m[g];_.push(M.toJSON(t.data))}_.length>0&&(l[x]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const u=t.morphAttributes;for(const m in u){const _=[],g=u[m];for(let v=0,M=g.length;v<M;v++)_.push(g[v].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,_=d.length;m<_;m++){const g=d[m];this.addGroup(g.start,g.count,g.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const x=t.boundingSphere;return x!==null&&(this.boundingSphere=x.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dp=new oe,nT=new oe,iT=new bt;class ja{constructor(t=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=dp.subVectors(s,i).cross(nT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(dp),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/u;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||iT.getNormalMatrix(t),l=this.coplanarPoint(dp).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let aT=0;class kl extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=zl(),this.name="",this.type="Material",this.blending=Ol,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sy,this.blendDst=by,this.blendEquation=xo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=EE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xh,this.stencilZFail=Xh,this.stencilZPass=Xh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){yt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){yt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(s.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(s.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(s.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(s.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const p in u){const x=u[p];delete x.metadata,d.push(x)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new ja().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Vt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=i[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ga=new oe,hp=new oe,_u=new oe,yu=new oe;class Rm{constructor(t=new oe,i=new oe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ga.copy(this.origin).addScaledVector(this.direction,i),Ga.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){hp.copy(t).add(i).multiplyScalar(.5),_u.copy(i).sub(t).normalize(),yu.copy(this.origin).sub(hp);const u=t.distanceTo(i)*.5,d=-this.direction.dot(_u),p=yu.dot(this.direction),x=-yu.dot(_u),m=yu.lengthSq(),_=Math.abs(1-d*d);let g,v,M,w;if(_>0)if(g=d*x-p,v=d*p-x,w=u*_,g>=0)if(v>=-w)if(v<=w){const N=1/_;g*=N,v*=N,M=g*(g+d*v+2*p)+v*(d*g+v+2*x)+m}else v=u,g=Math.max(0,-(d*v+p)),M=-g*g+v*(v+2*x)+m;else v=-u,g=Math.max(0,-(d*v+p)),M=-g*g+v*(v+2*x)+m;else v<=-w?(g=Math.max(0,-(-d*u+p)),v=g>0?-u:Math.min(Math.max(-u,-x),u),M=-g*g+v*(v+2*x)+m):v<=w?(g=0,v=Math.min(Math.max(-u,-x),u),M=v*(v+2*x)+m):(g=Math.max(0,-(d*u+p)),v=g>0?u:Math.min(Math.max(-u,-x),u),M=-g*g+v*(v+2*x)+m);else v=d>0?-u:u,g=Math.max(0,-(d*v+p)),M=-g*g+v*(v+2*x)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(hp).addScaledVector(_u,v),M}intersectSphere(t,i){if(t.radius<0)return null;Ga.subVectors(t.center,this.origin);const s=Ga.dot(this.direction),l=Ga.dot(Ga)-s*s,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),p=s-d,x=s+d;return x<0?null:p<0?this.at(x,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,d,p,x;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(s=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(s=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),_>=0?(u=(t.min.y-v.y)*_,d=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,d=(t.min.y-v.y)*_),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),g>=0?(p=(t.min.z-v.z)*g,x=(t.max.z-v.z)*g):(p=(t.max.z-v.z)*g,x=(t.min.z-v.z)*g),s>x||p>l)||((p>s||s!==s)&&(s=p),(x<l||l!==l)&&(l=x),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ga)!==null}intersectTriangle(t,i,s,l,u){const d=this.origin,p=this.direction,x=p.x,m=p.y,_=p.z,g=t.x-d.x,v=t.y-d.y,M=t.z-d.z,w=i.x-d.x,N=i.y-d.y,b=i.z-d.z,S=s.x-d.x,T=s.y-d.y,O=s.z-d.z,U=Math.abs(x),z=Math.abs(m),I=Math.abs(_);let E,L,Y,F,G,Z,he,q,ae,P,H,ie;if(U>=z&&U>=I?(Y=x,Z=g,ae=w,ie=S,x>=0?(E=m,L=_,F=v,G=M,he=N,q=b,P=T,H=O):(E=_,L=m,F=M,G=v,he=b,q=N,P=O,H=T)):z>=I?(Y=m,Z=v,ae=N,ie=T,m>=0?(E=_,L=x,F=M,G=g,he=b,q=w,P=O,H=S):(E=x,L=_,F=g,G=M,he=w,q=b,P=S,H=O)):(Y=_,Z=M,ae=b,ie=O,_>=0?(E=x,L=m,F=g,G=v,he=w,q=N,P=S,H=T):(E=m,L=x,F=v,G=g,he=N,q=w,P=T,H=S)),Y===0)return null;const Q=E/Y,ce=L/Y,Se=1/Y,je=F-Q*Z,Ze=G-ce*Z,A=he-Q*ae,K=q-ce*ae,pe=P-Q*ie,ye=H-ce*ie,be=pe*K-ye*A,Ne=je*ye-Ze*pe,et=A*Ze-K*je;if(l){if(be<0||Ne<0||et<0)return null}else if((be<0||Ne<0||et<0)&&(be>0||Ne>0||et>0))return null;const Re=be+Ne+et;if(Re===0)return null;const He=Se*(be*Z+Ne*ae+et*ie);return(Re>0?He<0:He>0)?null:this.at(He/Re,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cm extends kl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=My,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const S_=new xn,rr=new Rm,Su=new lf,b_=new oe,bu=new oe,Mu=new oe,Eu=new oe,pp=new oe,Tu=new oe,M_=new oe,Au=new oe;class Bi extends di{constructor(t=new zi,i=new cm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(u&&p){Tu.set(0,0,0);for(let x=0,m=u.length;x<m;x++){const _=p[x],g=u[x];_!==0&&(pp.fromBufferAttribute(g,t),d?Tu.addScaledVector(pp,_):Tu.addScaledVector(pp.sub(i),_))}i.add(Tu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Su.copy(s.boundingSphere),Su.applyMatrix4(u),rr.copy(t.ray).recast(t.near),!(Su.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Su,b_)===null||rr.origin.distanceToSquared(b_)>(t.far-t.near)**2))&&(S_.copy(u).invert(),rr.copy(t.ray).applyMatrix4(S_),!(s.boundingBox!==null&&rr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,rr)))}_computeIntersections(t,i,s){let l;const u=this.geometry,d=this.material,p=u.index,x=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,v=u.groups,M=u.drawRange;if(p!==null)if(Array.isArray(d))for(let w=0,N=v.length;w<N;w++){const b=v[w],S=d[b.materialIndex],T=Math.max(b.start,M.start),O=Math.min(p.count,Math.min(b.start+b.count,M.start+M.count));for(let U=T,z=O;U<z;U+=3){const I=p.getX(U),E=p.getX(U+1),L=p.getX(U+2);l=wu(this,S,t,s,m,_,g,I,E,L),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const w=Math.max(0,M.start),N=Math.min(p.count,M.start+M.count);for(let b=w,S=N;b<S;b+=3){const T=p.getX(b),O=p.getX(b+1),U=p.getX(b+2);l=wu(this,d,t,s,m,_,g,T,O,U),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(x!==void 0)if(Array.isArray(d))for(let w=0,N=v.length;w<N;w++){const b=v[w],S=d[b.materialIndex],T=Math.max(b.start,M.start),O=Math.min(x.count,Math.min(b.start+b.count,M.start+M.count));for(let U=T,z=O;U<z;U+=3){const I=U,E=U+1,L=U+2;l=wu(this,S,t,s,m,_,g,I,E,L),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const w=Math.max(0,M.start),N=Math.min(x.count,M.start+M.count);for(let b=w,S=N;b<S;b+=3){const T=b,O=b+1,U=b+2;l=wu(this,d,t,s,m,_,g,T,O,U),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function sT(o,t,i,s,l,u,d,p){let x;if(t.side===ii?x=s.intersectTriangle(d,u,l,!0,p):x=s.intersectTriangle(l,u,d,t.side===ur,p),x===null)return null;Au.copy(p),Au.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Au);return m<i.near||m>i.far?null:{distance:m,point:Au.clone(),object:o}}function wu(o,t,i,s,l,u,d,p,x,m){o.getVertexPosition(p,bu),o.getVertexPosition(x,Mu),o.getVertexPosition(m,Eu);const _=sT(o,t,i,s,bu,Mu,Eu,M_);if(_){const g=new oe;$i.getBarycoord(M_,bu,Mu,Eu,g),l&&(_.uv=$i.getInterpolatedAttribute(l,p,x,m,g,new Vt)),u&&(_.uv1=$i.getInterpolatedAttribute(u,p,x,m,g,new Vt)),d&&(_.normal=$i.getInterpolatedAttribute(d,p,x,m,g,new oe),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:p,b:x,c:m,normal:new oe,materialIndex:0};$i.getNormal(bu,Mu,Eu,v.normal),_.face=v,_.barycoord=g}return _}class rT extends ai{constructor(t=null,i=1,s=1,l,u,d,p,x,m=Wn,_=Wn,g,v){super(null,d,p,x,m,_,l,u,g,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const or=new lf,oT=new Vt(.5,.5),Ru=new oe;class $u{constructor(t=new ja,i=new ja,s=new ja,l=new ja,u=new ja,d=new ja){this.planes=[t,i,s,l,u,d]}set(t,i,s,l,u,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(u),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ea,s=!1){const l=this.planes,u=t.elements,d=u[0],p=u[1],x=u[2],m=u[3],_=u[4],g=u[5],v=u[6],M=u[7],w=u[8],N=u[9],b=u[10],S=u[11],T=u[12],O=u[13],U=u[14],z=u[15];if(l[0].setComponents(m-d,M-_,S-w,z-T).normalize(),l[1].setComponents(m+d,M+_,S+w,z+T).normalize(),l[2].setComponents(m+p,M+g,S+N,z+O).normalize(),l[3].setComponents(m-p,M-g,S-N,z-O).normalize(),s)l[4].setComponents(x,v,b,U).normalize(),l[5].setComponents(m-x,M-v,S-b,z-U).normalize();else if(l[4].setComponents(m-x,M-v,S-b,z-U).normalize(),i===ea)l[5].setComponents(m+x,M+v,S+b,z+U).normalize();else if(i===Qu)l[5].setComponents(x,v,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(t){or.center.set(0,0,0);const i=oT.distanceTo(t.center);return or.radius=.7071067811865476+i,or.applyMatrix4(t.matrixWorld),this.intersectsSphere(or)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ru.x=l.normal.x>0?t.max.x:t.min.x,Ru.y=l.normal.y>0?t.max.y:t.min.y,Ru.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ru)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const E_=new xn;class Cm{constructor(){this.coordinateSystem=ea,this._frustums=[],this._count=0}setFromArrayCamera(t){const i=t.cameras,s=this._frustums;for(let l=0;l<i.length;l++){const u=i[l];E_.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),s[l]===void 0&&(s[l]=new $u),s[l].setFromProjectionMatrix(E_,u.coordinateSystem,u.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsObject(t))return!0;return!1}intersectsSprite(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSphere(t))return!0;return!1}intersectsBox(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsBox(t))return!0;return!1}containsPoint(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const i=this._frustums,s=t._frustums;for(let l=0;l<t._count;l++)i[l]===void 0&&(i[l]=new $u),i[l].copy(s[l]);return this._count=t._count,this}clone(){return new Cm().copy(this)}}class lT extends kl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const T_=new xn,um=new Rm,Cu=new lf,Nu=new oe;class cT extends di{constructor(t=new zi,i=new lT){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cu.copy(s.boundingSphere),Cu.applyMatrix4(l),Cu.radius+=u,t.ray.intersectsSphere(Cu)===!1)return;T_.copy(l).invert(),um.copy(t.ray).applyMatrix4(T_);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),x=p*p,m=s.index,g=s.attributes.position;if(m!==null){const v=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let w=v,N=M;w<N;w++){const b=m.getX(w);Nu.fromBufferAttribute(g,b),A_(Nu,b,x,l,t,i,this)}}else{const v=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let w=v,N=M;w<N;w++)Nu.fromBufferAttribute(g,w),A_(Nu,w,x,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function A_(o,t,i,s,l,u,d){const p=um.distanceSqToPoint(o);if(p<i){const x=new oe;um.closestPointToPoint(o,x),x.applyMatrix4(s);const m=l.ray.origin.distanceTo(x);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(p),point:x,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class Wy extends ai{constructor(t=[],i=yo,s,l,u,d,p,x,m,_){super(t,i,s,l,u,d,p,x,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bo extends ai{constructor(t,i,s=Sa,l,u,d,p=Wn,x=Wn,m,_=Ps,g=1){if(_!==Ps&&_!==Os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:g};super(v,l,u,d,p,x,_,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Am(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class Yy extends bo{constructor(t,i=Sa,s=yo,l,u,d=Wn,p=Wn,x,m=Ps){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,s,l,u,d,p,x,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ky extends ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gl extends zi{constructor(t=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const p=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const x=[],m=[],_=[],g=[];let v=0,M=0;w("z","y","x",-1,-1,s,i,t,d,u,0),w("z","y","x",1,-1,s,i,-t,d,u,1),w("x","z","y",1,1,t,s,i,l,d,2),w("x","z","y",1,-1,t,s,-i,l,d,3),w("x","y","z",1,-1,t,i,s,l,u,4),w("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(x),this.setAttribute("position",new Bn(m,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(g,2));function w(N,b,S,T,O,U,z,I,E,L,Y){const F=U/E,G=z/L,Z=U/2,he=z/2,q=I/2,ae=E+1,P=L+1;let H=0,ie=0;const Q=new oe;for(let ce=0;ce<P;ce++){const Se=ce*G-he;for(let je=0;je<ae;je++){const Ze=je*F-Z;Q[N]=Ze*T,Q[b]=Se*O,Q[S]=q,m.push(Q.x,Q.y,Q.z),Q[N]=0,Q[b]=0,Q[S]=I>0?1:-1,_.push(Q.x,Q.y,Q.z),g.push(je/E),g.push(1-ce/L),H+=1}}for(let ce=0;ce<L;ce++)for(let Se=0;Se<E;Se++){const je=v+Se+ae*ce,Ze=v+Se+ae*(ce+1),A=v+(Se+1)+ae*(ce+1),K=v+(Se+1)+ae*ce;x.push(je,Ze,K),x.push(Ze,A,K),ie+=6}p.addGroup(M,ie,Y),M+=ie,v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Nm extends zi{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const u=[],d=[];p(l),m(s),_(),this.setAttribute("position",new Bn(u,3)),this.setAttribute("normal",new Bn(u.slice(),3)),this.setAttribute("uv",new Bn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(T){const O=new oe,U=new oe,z=new oe;for(let I=0;I<i.length;I+=3)M(i[I+0],O),M(i[I+1],U),M(i[I+2],z),x(O,U,z,T)}function x(T,O,U,z){const I=z+1,E=[];for(let L=0;L<=I;L++){E[L]=[];const Y=T.clone().lerp(U,L/I),F=O.clone().lerp(U,L/I),G=I-L;for(let Z=0;Z<=G;Z++)Z===0&&L===I?E[L][Z]=Y:E[L][Z]=Y.clone().lerp(F,Z/G)}for(let L=0;L<I;L++)for(let Y=0;Y<2*(I-L)-1;Y++){const F=Math.floor(Y/2);Y%2===0?(v(E[L][F+1]),v(E[L+1][F]),v(E[L][F])):(v(E[L][F+1]),v(E[L+1][F+1]),v(E[L+1][F]))}}function m(T){const O=new oe;for(let U=0;U<u.length;U+=3)O.x=u[U+0],O.y=u[U+1],O.z=u[U+2],O.normalize().multiplyScalar(T),u[U+0]=O.x,u[U+1]=O.y,u[U+2]=O.z}function _(){const T=new oe;for(let O=0;O<u.length;O+=3){T.x=u[O+0],T.y=u[O+1],T.z=u[O+2];const U=b(T)/2/Math.PI+.5,z=S(T)/Math.PI+.5;d.push(U,1-z)}w(),g()}function g(){for(let T=0;T<d.length;T+=6){const O=d[T+0],U=d[T+2],z=d[T+4],I=Math.max(O,U,z),E=Math.min(O,U,z);I>.9&&E<.1&&(O<.2&&(d[T+0]+=1),U<.2&&(d[T+2]+=1),z<.2&&(d[T+4]+=1))}}function v(T){u.push(T.x,T.y,T.z)}function M(T,O){const U=T*3;O.x=t[U+0],O.y=t[U+1],O.z=t[U+2]}function w(){const T=new oe,O=new oe,U=new oe,z=new oe,I=new Vt,E=new Vt,L=new Vt;for(let Y=0,F=0;Y<u.length;Y+=9,F+=6){T.set(u[Y+0],u[Y+1],u[Y+2]),O.set(u[Y+3],u[Y+4],u[Y+5]),U.set(u[Y+6],u[Y+7],u[Y+8]),I.set(d[F+0],d[F+1]),E.set(d[F+2],d[F+3]),L.set(d[F+4],d[F+5]),z.copy(T).add(O).add(U).divideScalar(3);const G=b(z);N(I,F+0,T,G),N(E,F+2,O,G),N(L,F+4,U,G)}}function N(T,O,U,z){z<0&&T.x===1&&(d[O]=T.x-1),U.x===0&&U.z===0&&(d[O]=z/2/Math.PI+.5)}function b(T){return Math.atan2(T.z,-T.x)}function S(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nm(t.vertices,t.indices,t.radius,t.detail)}}class Dm extends Nm{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Dm(t.radius,t.detail)}}class Vl extends zi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,d=i/2,p=Math.floor(s),x=Math.floor(l),m=p+1,_=x+1,g=t/p,v=i/x,M=[],w=[],N=[],b=[];for(let S=0;S<_;S++){const T=S*v-d;for(let O=0;O<m;O++){const U=O*g-u;w.push(U,-T,0),N.push(0,0,1),b.push(O/p),b.push(1-S/x)}}for(let S=0;S<x;S++)for(let T=0;T<p;T++){const O=T+m*S,U=T+m*(S+1),z=T+1+m*(S+1),I=T+1+m*S;M.push(O,U,I),M.push(U,z,I)}this.setIndex(M),this.setAttribute("position",new Bn(w,3)),this.setAttribute("normal",new Bn(N,3)),this.setAttribute("uv",new Bn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Lm extends zi{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const x=Math.min(d+p,Math.PI);let m=0;const _=[],g=new oe,v=new oe,M=[],w=[],N=[],b=[];for(let S=0;S<=s;S++){const T=[],O=S/s,U=d+O*p,z=t*Math.cos(U),I=Math.sqrt(t*t-z*z);let E=0;S===0&&d===0?E=.5/i:S===s&&x===Math.PI&&(E=-.5/i);for(let L=0;L<=i;L++){const Y=L/i,F=l+Y*u;g.x=-I*Math.cos(F),g.y=z,g.z=I*Math.sin(F),w.push(g.x,g.y,g.z),v.copy(g).normalize(),N.push(v.x,v.y,v.z),b.push(Y+E,1-O),T.push(m++)}_.push(T)}for(let S=0;S<s;S++)for(let T=0;T<i;T++){const O=_[S][T+1],U=_[S][T],z=_[S+1][T],I=_[S+1][T+1];(S!==0||d>0)&&M.push(O,U,I),(S!==s-1||x<Math.PI)&&M.push(U,z,I)}this.setIndex(M),this.setAttribute("position",new Bn(w,3)),this.setAttribute("normal",new Bn(N,3)),this.setAttribute("uv",new Bn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lm(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ef extends zi{constructor(t=1,i=.4,s=12,l=48,u=Math.PI*2,d=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:u,thetaStart:d,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const x=[],m=[],_=[],g=[],v=new oe,M=new oe,w=new oe;for(let N=0;N<=s;N++){const b=d+N/s*p;for(let S=0;S<=l;S++){const T=S/l*u;M.x=(t+i*Math.cos(b))*Math.cos(T),M.y=(t+i*Math.cos(b))*Math.sin(T),M.z=i*Math.sin(b),m.push(M.x,M.y,M.z),v.x=t*Math.cos(T),v.y=t*Math.sin(T),w.subVectors(M,v).normalize(),_.push(w.x,w.y,w.z),g.push(S/l),g.push(N/s)}}for(let N=1;N<=s;N++)for(let b=1;b<=l;b++){const S=(l+1)*N+b-1,T=(l+1)*(N-1)+b-1,O=(l+1)*(N-1)+b,U=(l+1)*N+b;x.push(S,T,U),x.push(T,O,U)}this.setIndex(x),this.setAttribute("position",new Bn(m,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ef(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Mo(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(w_(l))l.isRenderTargetTexture?(yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(w_(l[0])){const u=[];for(let d=0,p=l.length;d<p;d++)u[d]=l[d].clone();t[i][s]=u}else t[i][s]=l.slice();else t[i][s]=l}}return t}function ti(o){const t={};for(let i=0;i<o.length;i++){const s=Mo(o[i]);for(const l in s)t[l]=s[l]}return t}function w_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function uT(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Zy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}const fT={clone:Mo,merge:ti};var dT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ta extends kl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dT,this.fragmentShader=hT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mo(t.uniforms),this.uniformsGroups=uT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Jt().setHex(l.value);break;case"v2":this.uniforms[s].value=new Vt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new oe().fromArray(l.value);break;case"v4":this.uniforms[s].value=new gn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new bt().fromArray(l.value);break;case"m4":this.uniforms[s].value=new xn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class pT extends ta{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mT extends kl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gT extends kl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Du=new oe,Lu=new Eo,ha=new oe;class Qy extends di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Du,Lu,ha),ha.x===1&&ha.y===1&&ha.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Du,Lu,ha.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Du,Lu,ha),ha.x===1&&ha.y===1&&ha.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Du,Lu,ha.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ns=new oe,R_=new Vt,C_=new Vt;class Ji extends Qy{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=lm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lm*2*Math.atan(Math.tan(Wh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ns.x,Ns.y).multiplyScalar(-t/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ns.x,Ns.y).multiplyScalar(-t/Ns.z)}getViewSize(t,i){return this.getViewBounds(t,R_,C_),i.subVectors(C_,R_)}setViewOffset(t,i,s,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Wh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const x=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/x,i-=d.offsetY*s/m,l*=d.width/x,s*=d.height/m}const p=this.filmOffset;p!==0&&(u+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class xT extends Qy{constructor(t=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,d=s+t,p=l+i,x=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,p-=_*this.view.offsetY,x=p-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,p,x,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const mo=-90,go=1;class fm extends di{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ji(mo,go,t,i);l.layers=this.layers,this.add(l);const u=new Ji(mo,go,t,i);u.layers=this.layers,this.add(u);const d=new Ji(mo,go,t,i);d.layers=this.layers,this.add(d);const p=new Ji(mo,go,t,i);p.layers=this.layers,this.add(p);const x=new Ji(mo,go,t,i);x.layers=this.layers,this.add(x);const m=new Ji(mo,go,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,p,x]=i;for(const m of i)this.remove(m);if(t===ea)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),x.up.set(0,1,0),x.lookAt(0,0,-1);else if(t===Qu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),x.up.set(0,-1,0),x.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,p,x,m,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;const N=s.texture.mipmapsAutoUpdate;s.texture.mipmapsAutoUpdate=!1;let b=!1;t.isWebGLRenderer===!0?b=t.state.buffers.depth.getReversed():b=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(s,1,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(s,4,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),s.texture.mipmapsAutoUpdate=N,t.setRenderTarget(s,5,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(g,v,M),t.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class vT extends Ji{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const N_=new xn;class _T{constructor(t,i,s=0,l=1/0){this.ray=new Rm(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new wm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Yt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return N_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(N_),this}intersectObject(t,i=!0,s=[]){return dm(t,this,s,i),s.sort(D_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,u=t.length;l<u;l++)dm(t[l],this,s,i);return s.sort(D_),s}}function D_(o,t){return o.distance-t.distance}function dm(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const u=o.children;for(let d=0,p=u.length;d<p;d++)dm(u[d],t,i,!0)}}function L_(o,t,i,s){const l=yT(s);switch(i){case Fy:return o*t;case By:return o*t/l.components*l.byteLength;case bm:return o*t/l.components*l.byteLength;case fr:return o*t*2/l.components*l.byteLength;case Mm:return o*t*2/l.components*l.byteLength;case Iy:return o*t*3/l.components*l.byteLength;case xa:return o*t*4/l.components*l.byteLength;case Em:return o*t*4/l.components*l.byteLength;case Iu:case Bu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case zu:case Hu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Up:case Pp:return Math.max(o,16)*Math.max(t,8)/4;case Lp:case Op:return Math.max(o,8)*Math.max(t,8)/2;case Fp:case Ip:case zp:case Hp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Bp:case Wu:case kp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Gp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Vp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case jp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case qp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Xp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Wp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Yp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Kp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Zp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Qp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Jp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case $p:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case em:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case tm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case nm:case im:case am:return Math.ceil(o/4)*Math.ceil(t/4)*16;case sm:case rm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Yu:case om:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function yT(o){switch(o){case Ii:case Ly:return{byteLength:1,components:1};case Bl:case Uy:case ba:return{byteLength:2,components:1};case ym:case Sm:return{byteLength:2,components:4};case Sa:case _m:case ga:return{byteLength:4,components:1};case Oy:case Py:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vm}}));typeof window<"u"&&(window.__THREE__?yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jy(){let o=null,t=!1,i=null,s=null;function l(u,d){s=o.requestAnimationFrame(l),i(u,d)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function ST(o){const t=new WeakMap;function i(p,x){const m=p.array,_=p.usage,g=m.byteLength,v=o.createBuffer();o.bindBuffer(x,v),o.bufferData(x,m,_),p.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=o.HALF_FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:g}}function s(p,x,m){const _=x.array,g=x.updateRanges;if(o.bindBuffer(m,p),g.length===0)o.bufferSubData(m,0,_);else{g.sort((M,w)=>M.start-w.start);let v=0;for(let M=1;M<g.length;M++){const w=g[v],N=g[M];N.start<=w.start+w.count+1?w.count=Math.max(w.count,N.start+N.count-w.start):(++v,g[v]=N)}g.length=v+1;for(let M=0,w=g.length;M<w;M++){const N=g[M];o.bufferSubData(m,N.start*_.BYTES_PER_ELEMENT,_,N.start,N.count)}x.clearUpdateRanges()}x.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const x=t.get(p);x&&(o.deleteBuffer(x.buffer),t.delete(p))}function d(p,x){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=t.get(p);if(m===void 0)t.set(p,i(p,x));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,p,x),m.version=p.version}}return{get:l,remove:u,update:d}}var bT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ET=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,CT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,DT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,PT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,GT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,VT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,WT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QT="gl_FragColor = linearToOutputTexel( gl_FragColor );",JT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$T=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,tA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,pA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_A=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MA=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,EA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PA=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,QA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$A=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,a2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,r2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,y2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E2=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,R2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,C2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,D2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,H2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,G2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Z2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:bT,alphahash_pars_fragment:MT,alphamap_fragment:ET,alphamap_pars_fragment:TT,alphatest_fragment:AT,alphatest_pars_fragment:wT,aomap_fragment:RT,aomap_pars_fragment:CT,batching_pars_vertex:NT,batching_vertex:DT,begin_vertex:LT,beginnormal_vertex:UT,bsdfs:OT,iridescence_fragment:PT,bumpmap_pars_fragment:FT,clipping_planes_fragment:IT,clipping_planes_pars_fragment:BT,clipping_planes_pars_vertex:zT,clipping_planes_vertex:HT,color_fragment:kT,color_pars_fragment:GT,color_pars_vertex:VT,color_vertex:jT,common:qT,defaultnormal_vertex:XT,displacementmap_pars_vertex:WT,displacementmap_vertex:YT,emissivemap_fragment:KT,emissivemap_pars_fragment:ZT,colorspace_fragment:QT,colorspace_pars_fragment:JT,envmap_fragment:$T,envmap_common_pars_fragment:eA,envmap_pars_fragment:tA,envmap_pars_vertex:nA,envmap_physical_pars_fragment:hA,envmap_vertex:iA,fog_vertex:aA,fog_pars_vertex:sA,fog_fragment:rA,fog_pars_fragment:oA,gradientmap_pars_fragment:lA,lightmap_pars_fragment:cA,lights_lambert_fragment:uA,lights_lambert_pars_fragment:fA,lights_pars_begin:dA,lights_toon_fragment:pA,lights_toon_pars_fragment:mA,lights_phong_fragment:gA,lights_phong_pars_fragment:xA,lights_physical_fragment:vA,lights_physical_pars_fragment:_A,lights_fragment_begin:yA,lights_fragment_maps:SA,lights_fragment_end:bA,lightprobes_pars_fragment:MA,logdepthbuf_fragment:EA,logdepthbuf_pars_fragment:TA,logdepthbuf_pars_vertex:AA,logdepthbuf_vertex:wA,map_fragment:RA,map_pars_fragment:CA,map_particle_fragment:NA,map_particle_pars_fragment:DA,metalnessmap_fragment:LA,metalnessmap_pars_fragment:UA,morphinstance_vertex:OA,morphcolor_vertex:PA,morphnormal_vertex:FA,morphtarget_pars_vertex:IA,morphtarget_vertex:BA,normal_fragment_begin:zA,normal_fragment_maps:HA,normal_pars_fragment:kA,normal_pars_vertex:GA,normal_vertex:VA,normalmap_pars_fragment:jA,clearcoat_normal_fragment_begin:qA,clearcoat_normal_fragment_maps:XA,clearcoat_pars_fragment:WA,iridescence_pars_fragment:YA,opaque_fragment:KA,packing:ZA,premultiplied_alpha_fragment:QA,project_vertex:JA,dithering_fragment:$A,dithering_pars_fragment:e2,roughnessmap_fragment:t2,roughnessmap_pars_fragment:n2,shadowmap_pars_fragment:i2,shadowmap_pars_vertex:a2,shadowmap_vertex:s2,shadowmask_pars_fragment:r2,skinbase_vertex:o2,skinning_pars_vertex:l2,skinning_vertex:c2,skinnormal_vertex:u2,specularmap_fragment:f2,specularmap_pars_fragment:d2,tonemapping_fragment:h2,tonemapping_pars_fragment:p2,transmission_fragment:m2,transmission_pars_fragment:g2,uv_pars_fragment:x2,uv_pars_vertex:v2,uv_vertex:_2,worldpos_vertex:y2,background_vert:S2,background_frag:b2,backgroundCube_vert:M2,backgroundCube_frag:E2,cube_vert:T2,cube_frag:A2,depth_vert:w2,depth_frag:R2,distance_vert:C2,distance_frag:N2,equirect_vert:D2,equirect_frag:L2,linedashed_vert:U2,linedashed_frag:O2,meshbasic_vert:P2,meshbasic_frag:F2,meshlambert_vert:I2,meshlambert_frag:B2,meshmatcap_vert:z2,meshmatcap_frag:H2,meshnormal_vert:k2,meshnormal_frag:G2,meshphong_vert:V2,meshphong_frag:j2,meshphysical_vert:q2,meshphysical_frag:X2,meshtoon_vert:W2,meshtoon_frag:Y2,points_vert:K2,points_frag:Z2,shadow_vert:Q2,shadow_frag:J2,sprite_vert:$2,sprite_frag:e3},Ye={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},ma={basic:{uniforms:ti([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:ti([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:ti([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:ti([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:ti([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:ti([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:ti([Ye.points,Ye.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:ti([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:ti([Ye.common,Ye.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:ti([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:ti([Ye.sprite,Ye.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distance:{uniforms:ti([Ye.common,Ye.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distance_vert,fragmentShader:Dt.distance_frag},shadow:{uniforms:ti([Ye.lights,Ye.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};ma.physical={uniforms:ti([ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Uu={r:0,b:0,g:0},t3=new xn,$y=new bt;$y.set(-1,0,0,0,1,0,0,0,1);function n3(o,t,i,s,l,u){const d=new Jt(0);let p=l===!0?0:1,x,m,_=null,g=0,v=null;function M(T){let O=T.isScene===!0?T.background:null;if(O&&O.isTexture){const U=T.backgroundBlurriness>0;O=t.get(O,U)}return O}function w(T){let O=!1;const U=M(T);U===null?b(d,p):U&&U.isColor&&(b(U,1),O=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,u):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function N(T,O){const U=M(O);U&&U.isCubeTexture?(m===void 0&&(m=new Bi(new Gl(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:Mo(ma.backgroundCube.uniforms),vertexShader:ma.backgroundCube.vertexShader,fragmentShader:ma.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,I,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=U,m.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(t3.makeRotationFromEuler(O.backgroundRotation)).transpose(),U.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply($y),m.material.toneMapped=kt.getTransfer(U.colorSpace)!==sn,(_!==U||g!==U.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,_=U,g=U.version,v=o.toneMapping),m.layers.enableAll(),T.unshift(m,m.geometry,m.material,0,0,null)):U&&U.isTexture&&(x===void 0&&(x=new Bi(new Vl(2,2),new ta({name:"BackgroundMaterial",uniforms:Mo(ma.background.uniforms),vertexShader:ma.background.vertexShader,fragmentShader:ma.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),Object.defineProperty(x.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(x)),x.material.uniforms.t2D.value=U,x.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,x.material.toneMapped=kt.getTransfer(U.colorSpace)!==sn,U.matrixAutoUpdate===!0&&U.updateMatrix(),x.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||g!==U.version||v!==o.toneMapping)&&(x.material.needsUpdate=!0,_=U,g=U.version,v=o.toneMapping),x.layers.enableAll(),T.unshift(x,x.geometry,x.material,0,0,null))}function b(T,O){T.getRGB(Uu,Zy(o)),i.buffers.color.setClear(Uu.r,Uu.g,Uu.b,O,u)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0)}return{getClearColor:function(){return d},setClearColor:function(T,O=1){d.set(T),p=O,b(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(T){p=T,b(d,p)},render:w,addToRenderList:N,dispose:S}}function i3(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=v(null);let u=l,d=!1;function p(G,Z,he,q,ae){let P=!1;const H=g(G,q,he,Z);u!==H&&(u=H,m(u.object)),P=M(G,q,he,ae),P&&w(G,q,he,ae),ae!==null&&t.update(ae,o.ELEMENT_ARRAY_BUFFER),(P||d)&&(d=!1,U(G,Z,he,q),ae!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ae).buffer))}function x(){return o.createVertexArray()}function m(G){return o.bindVertexArray(G)}function _(G){return o.deleteVertexArray(G)}function g(G,Z,he,q){const ae=q.wireframe===!0;let P=s[Z.id];P===void 0&&(P={},s[Z.id]=P);const H=G.isInstancedMesh===!0?G.id:0;let ie=P[H];ie===void 0&&(ie={},P[H]=ie);let Q=ie[he.id];Q===void 0&&(Q={},ie[he.id]=Q);let ce=Q[ae];return ce===void 0&&(ce=v(x()),Q[ae]=ce),ce}function v(G){const Z=[],he=[],q=[];for(let ae=0;ae<i;ae++)Z[ae]=0,he[ae]=0,q[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:he,attributeDivisors:q,object:G,attributes:{},index:null}}function M(G,Z,he,q){const ae=u.attributes,P=Z.attributes;let H=0;const ie=he.getAttributes();for(const Q in ie)if(ie[Q].location>=0){const Se=ae[Q];let je=P[Q];if(je===void 0&&(Q==="instanceMatrix"&&G.instanceMatrix&&(je=G.instanceMatrix),Q==="instanceColor"&&G.instanceColor&&(je=G.instanceColor)),Se===void 0||Se.attribute!==je||je&&Se.data!==je.data)return!0;H++}return u.attributesNum!==H||u.index!==q}function w(G,Z,he,q){const ae={},P=Z.attributes;let H=0;const ie=he.getAttributes();for(const Q in ie)if(ie[Q].location>=0){let Se=P[Q];Se===void 0&&(Q==="instanceMatrix"&&G.instanceMatrix&&(Se=G.instanceMatrix),Q==="instanceColor"&&G.instanceColor&&(Se=G.instanceColor));const je={};je.attribute=Se,Se&&Se.data&&(je.data=Se.data),ae[Q]=je,H++}u.attributes=ae,u.attributesNum=H,u.index=q}function N(){const G=u.newAttributes;for(let Z=0,he=G.length;Z<he;Z++)G[Z]=0}function b(G){S(G,0)}function S(G,Z){const he=u.newAttributes,q=u.enabledAttributes,ae=u.attributeDivisors;he[G]=1,q[G]===0&&(o.enableVertexAttribArray(G),q[G]=1),ae[G]!==Z&&(o.vertexAttribDivisor(G,Z),ae[G]=Z)}function T(){const G=u.newAttributes,Z=u.enabledAttributes;for(let he=0,q=Z.length;he<q;he++)Z[he]!==G[he]&&(o.disableVertexAttribArray(he),Z[he]=0)}function O(G,Z,he,q,ae,P,H){H===!0?o.vertexAttribIPointer(G,Z,he,ae,P):o.vertexAttribPointer(G,Z,he,q,ae,P)}function U(G,Z,he,q){N();const ae=q.attributes,P=he.getAttributes(),H=Z.defaultAttributeValues;for(const ie in P){const Q=P[ie];if(Q.location>=0){let ce=ae[ie];if(ce===void 0&&(ie==="instanceMatrix"&&G.instanceMatrix&&(ce=G.instanceMatrix),ie==="instanceColor"&&G.instanceColor&&(ce=G.instanceColor)),ce!==void 0){const Se=ce.normalized,je=ce.itemSize,Ze=t.get(ce);if(Ze===void 0)continue;const A=Ze.buffer,K=Ze.type,pe=Ze.bytesPerElement,ye=K===o.INT||K===o.UNSIGNED_INT||ce.gpuType===_m;if(ce.isInterleavedBufferAttribute){const be=ce.data,Ne=be.isInterleavedBuffer===!0?be.stride:be.itemSize,et=ce.offset;if(be.isInstancedInterleavedBuffer||be.isInstancedBufferAttribute){for(let Re=0;Re<Q.locationSize;Re++)S(Q.location+Re,be.meshPerAttribute);G.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Re=0;Re<Q.locationSize;Re++)b(Q.location+Re);o.bindBuffer(o.ARRAY_BUFFER,A);for(let Re=0;Re<Q.locationSize;Re++)O(Q.location+Re,je/Q.locationSize,K,Se,Ne*pe,(et+je/Q.locationSize*Re)*pe,ye)}else{if(ce.isInstancedBufferAttribute){for(let be=0;be<Q.locationSize;be++)S(Q.location+be,ce.meshPerAttribute);G.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let be=0;be<Q.locationSize;be++)b(Q.location+be);o.bindBuffer(o.ARRAY_BUFFER,A);for(let be=0;be<Q.locationSize;be++)O(Q.location+be,je/Q.locationSize,K,Se,je*pe,je/Q.locationSize*be*pe,ye)}}else if(H!==void 0){const Se=H[ie];if(Se!==void 0)switch(Se.length){case 2:o.vertexAttrib2fv(Q.location,Se);break;case 3:o.vertexAttrib3fv(Q.location,Se);break;case 4:o.vertexAttrib4fv(Q.location,Se);break;default:o.vertexAttrib1fv(Q.location,Se)}}}}T()}function z(){Y();for(const G in s){const Z=s[G];for(const he in Z){const q=Z[he];for(const ae in q){const P=q[ae];for(const H in P)_(P[H].object),delete P[H];delete q[ae]}}delete s[G]}}function I(G){if(s[G.id]===void 0)return;const Z=s[G.id];for(const he in Z){const q=Z[he];for(const ae in q){const P=q[ae];for(const H in P)_(P[H].object),delete P[H];delete q[ae]}}delete s[G.id]}function E(G){for(const Z in s){const he=s[Z];for(const q in he){const ae=he[q];if(ae[G.id]===void 0)continue;const P=ae[G.id];for(const H in P)_(P[H].object),delete P[H];delete ae[G.id]}}}function L(G){for(const Z in s){const he=s[Z],q=G.isInstancedMesh===!0?G.id:0,ae=he[q];if(ae!==void 0){for(const P in ae){const H=ae[P];for(const ie in H)_(H[ie].object),delete H[ie];delete ae[P]}delete he[q],Object.keys(he).length===0&&delete s[Z]}}}function Y(){F(),d=!0,u!==l&&(u=l,m(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:Y,resetDefaultState:F,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfObject:L,releaseStatesOfProgram:E,initAttributes:N,enableAttribute:b,disableUnusedAttributes:T}}function a3(o,t,i){let s;function l(x){s=x}function u(x,m){o.drawArrays(s,x,m),i.update(m,s,1)}function d(x,m,_){_!==0&&(o.drawArraysInstanced(s,x,m,_),i.update(m,s,_))}function p(x,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,x,0,m,0,_);let v=0;for(let M=0;M<_;M++)v+=m[M];i.update(v,s,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function s3(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(E){return!(E!==xa&&s.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(E){const L=E===ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ii&&E!==ga&&!L&&s.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function x(E){if(E==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=x(m);_!==m&&(yt("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),v=i.logarithmicDepthBuffer===!0&&g===!1;i.reversedDepthBuffer===!0&&g===!1&&yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&g===!0&&yt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),T=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:x,textureFormatReadable:d,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:w,maxTextureSize:N,maxCubemapSize:b,maxAttributes:S,maxVertexUniforms:T,maxVaryings:O,maxFragmentUniforms:U,maxSamples:z,samples:I}}function r3(o){const t=this;let i=null,s=0,l=!1,u=!1;const d=new ja,p=new bt,x={value:null,needsUpdate:!1};this.uniform=x,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const M=g.length!==0||v||s!==0||l;return l=v,s=g.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,M){const w=g.clippingPlanes,N=g.clipIntersection,b=g.clipShadows,S=o.get(g);if(!l||w===null||w.length===0||u&&!b)u?_(null):m();else{const T=u?0:s,O=T*4;let U=S.clippingState||null;x.value=U,U=_(w,v,O,M);for(let z=0;z!==O;++z)U[z]=i[z];S.clippingState=U,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=T}};function m(){x.value!==i&&(x.value=i,x.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,v,M,w){const N=g!==null?g.length:0;let b=null;if(N!==0){if(b=x.value,w!==!0||b===null){const S=M+N*4,T=v.matrixWorldInverse;p.getNormalMatrix(T),(b===null||b.length<S)&&(b=new Float32Array(S));for(let O=0,U=M;O!==N;++O,U+=4)d.copy(g[O]).applyMatrix4(T,p),d.normal.toArray(b,U),b[U+3]=d.constant}x.value=b,x.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,b}}class Um extends va{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Wy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Gl(5,5,5),u=new ta({name:"CubemapFromEquirect",uniforms:Mo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ii,blending:vo});u.uniforms.tEquirect.value=i;const d=new Bi(l,u),p=i.minFilter;return i.minFilter===Us&&(i.minFilter=fi),new fm(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(u)}}const U_=256,o3=3,l3=20,eS=256,tS=16,c3=3,u3=new oe,f3=new Jt;class tf{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fm(1,10,null),this._boxMesh=new Bi(new Gl(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:d=256,position:p=u3}=u,x=this._renderer;this._setSize(d);const m=this._allocateTarget(),_=this._getSourceTarget(!0);i>0&&(_.texture.mipmapsAutoUpdate=!1);const g=x.autoClear,v=x.autoClearColor,M=x.autoClearDepth,w=x.autoClearStencil,N=t.background;x.autoClear=!0,x.autoClearColor=!0,x.autoClearDepth=!0,x.autoClearStencil=!0,N===null&&(t.background=x.getClearColor(f3));const b=new fm(s,l,_);return b.position.copy(p),b.update(x,t),x.autoClear=g,x.autoClearColor=v,x.autoClearDepth=M,x.autoClearStencil=w,t.background=N,i>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(m,i)),this._applyPMREM(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(U_,FE(t))}_fromTexture(t,i){t.mapping===yo||t.mapping===Il?this._setSize(t.image.length===0?U_:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const s=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(s),s}_allocateTarget(){const t=this._cubeSize,i=O_(t,!1,!1),s=Math.log2(t)-o3;for(let l=0;l<=s;l++)i.texture.mipmaps.push({width:t>>l,height:t>>l});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){const i=this._cubeSize,s=this._sourceTarget;return(s===null||s.width!==i||t&&s.depthBuffer===!1)&&(s!==null&&s.dispose(),this._sourceTarget=O_(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,s){const l=this._boxMesh,u=this._cubeCamera;l.material=s,u.renderTarget=t,u.activeMipmapLevel=i;const d=t.width>>i;t.viewport.set(0,0,d,d),u.update(this._renderer,l),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===yo||t.mapping===Il?(this._cubemapMaterial===null&&(this._cubemapMaterial=F_()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=P_()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=d3(),this._integrationMaterial=h3());const i=this._cubeSize,s=t.texture.mipmaps.length-1,l=this._ggxMaterial.uniforms;l.envMap.value=this._sourceTarget.texture;const u=this._integrationMaterial.uniforms;u.envMap.value=this._sourceTarget.texture,u.sourceLod.value=Math.log2(i/tS);for(let d=0;d<=s;d++){const p=tf.lodToRoughness(d,s);if(d>s-c3)u.roughness.value=p,this._renderCube(t,d,this._integrationMaterial);else{const x=p>0?Math.log2(i)+.5*Math.log2(6/(eS*Math.pow(p,4)))+.5:0;l.roughness.value=p,l.lodBias.value=x,this._renderCube(t,d,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=p3());const s=this._blurMaterial,l=s.uniforms,u=this._sourceTarget;l.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,l.envMap.value=u.texture,this._renderCube(t,0,s),l.envMap.value=t.texture,this._renderCube(u,0,s)}}function O_(o,t,i){return new Um(o,{minFilter:Us,generateMipmaps:t,type:ba,colorSpace:Ku,depthBuffer:i})}function jl(o,t,i){return new ta({name:o,uniforms:t,vertexShader:Dt.cube_vert,fragmentShader:i,side:ii,blending:vo,depthTest:!1,depthWrite:!1})}function d3(){return jl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${eS}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function h3(){return jl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:tS}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function p3(){return jl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${l3}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function P_(){return jl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function F_(){return jl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function m3(o){let t=new WeakMap,i=new WeakMap,s=null;function l(v,M=!1){return v==null?null:M?d(v):u(v)}function u(v){if(v&&v.isTexture){const M=v.mapping;if(M===Vh||M===jh)if(t.has(v)){const w=t.get(v).texture;return p(w,v.mapping)}else{const w=v.image;if(w&&w.height>0){const N=new Um(w.height);return N.fromEquirectangularTexture(o,v),t.set(v,N),v.addEventListener("dispose",m),p(N.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const M=v.mapping,w=M===Vh||M===jh,N=M===yo||M===Il;if(w||N){let b=i.get(v);const S=b!==void 0?b.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return s===null&&(s=new tf(o)),b=w?s.fromEquirectangular(v,b):s.fromCubemap(v,b),b.texture.pmremVersion=v.pmremVersion,i.set(v,b),b.texture;if(b!==void 0)return b.texture;{const T=v.image;return w&&T&&T.height>0||N&&T&&x(T)?(s===null&&(s=new tf(o)),b=w?s.fromEquirectangular(v):s.fromCubemap(v),b.texture.pmremVersion=v.pmremVersion,i.set(v,b),v.addEventListener("dispose",_),b.texture):null}}}return v}function p(v,M){return M===Vh?v.mapping=yo:M===jh&&(v.mapping=Il),v}function x(v){let M=0;const w=6;for(let N=0;N<w;N++)v[N]!==void 0&&M++;return M===w}function m(v){const M=v.target;M.removeEventListener("dispose",m);const w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function _(v){const M=v.target;M.removeEventListener("dispose",_);const w=i.get(M);w!==void 0&&(i.delete(M),w.dispose())}function g(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function g3(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ku("WebGLRenderer: "+s+" extension not supported."),l}}}function x3(o,t,i,s){const l={},u=new WeakMap,d=new FinalizationRegistry(w=>delete l[w]);function p(w){x(w.target)}function x(w){w.index!==null&&t.remove(w.index);for(const b in w.attributes)t.remove(w.attributes[b]);w.removeEventListener("dispose",p),delete l[w.id],d.unregister(w);const N=u.get(w);N&&(t.remove(N),u.delete(w)),s.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,i.memory.geometries--}function m(w,N){return l[N.id]!==void 0||(N.addEventListener("dispose",p),l[N.id]=new WeakRef(N),d.register(N,N.id,N),i.memory.geometries++),N}function _(w){const N=w.attributes;for(const b in N)t.update(N[b],o.ARRAY_BUFFER)}function g(w){const N=w.index,b=w.attributes.position;let S=0;if(b===void 0)return;const T=N!==null?N.array.length:b.array.length/3-1,O=b.count>=65535?Xy:qy,U=new O(Math.ceil(T/3)*6,1),z=U.array;if(N!==null){const E=N.array;S=N.version;for(let L=0,Y=0;L<T;L+=3){const F=E[L+0],G=E[L+1],Z=E[L+2];z[Y++]=F,z[Y++]=G,z[Y++]=G,z[Y++]=Z,z[Y++]=Z,z[Y++]=F}}else{S=b.version;for(let E=0,L=0;E<T;E+=3){const Y=E+0,F=E+1,G=E+2;z[L++]=Y,z[L++]=F,z[L++]=F,z[L++]=G,z[L++]=G,z[L++]=Y}}U.version=S;const I=u.get(w);I&&t.remove(I),u.set(w,U)}function v(w){const N=u.get(w);if(N){const b=w.index;b!==null&&N.version<b.version&&g(w)}else g(w);return u.get(w)}function M(){for(const w in l){const N=l[w].deref();N!==void 0&&x(N)}}return{get:m,update:_,getWireframeAttribute:v,dispose:M}}function v3(o,t,i){let s;function l(g){s=g}let u,d;function p(g){u=g.type,d=g.bytesPerElement}function x(g,v){o.drawElements(s,v,u,g*d),i.update(v,s,1)}function m(g,v,M){M!==0&&(o.drawElementsInstanced(s,v,u,g*d,M),i.update(v,s,M))}function _(g,v,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,u,g,0,M);let N=0;for(let b=0;b<M;b++)N+=v[b];i.update(N,s,1)}this.setMode=l,this.setIndex=p,this.render=x,this.renderInstances=m,this.renderMultiDraw=_}function _3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(u/3);break;case o.LINES:i.lines+=p*(u/2);break;case o.LINE_STRIP:i.lines+=p*(u-1);break;case o.LINE_LOOP:i.lines+=p*u;break;case o.POINTS:i.points+=p*u;break;default:Yt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function y3(o,t,i){const s=new WeakMap,l=new gn;function u(d,p,x){const m=d.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,g=_!==void 0?_.length:0;let v=s.get(p);if(v===void 0||v.count!==g){let F=function(){L.dispose(),s.delete(p),p.removeEventListener("dispose",F)};var M=F;v!==void 0&&v.texture.dispose();const w=p.morphAttributes.position!==void 0,N=p.morphAttributes.normal!==void 0,b=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],T=p.morphAttributes.normal||[],O=p.morphAttributes.color||[];let U=0;w===!0&&(U=1),N===!0&&(U=2),b===!0&&(U=3);let z=p.attributes.position.count*U,I=1;z>t.maxTextureSize&&(I=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const E=new Float32Array(z*I*4*g),L=new Vy(E,z,I,g);L.type=ga,L.needsUpdate=!0;const Y=U*4;for(let G=0;G<g;G++){const Z=S[G],he=T[G],q=O[G],ae=z*I*4*G;for(let P=0;P<Z.count;P++){const H=P*Y;w===!0&&(l.fromBufferAttribute(Z,P),E[ae+H+0]=l.x,E[ae+H+1]=l.y,E[ae+H+2]=l.z,E[ae+H+3]=0),N===!0&&(l.fromBufferAttribute(he,P),E[ae+H+4]=l.x,E[ae+H+5]=l.y,E[ae+H+6]=l.z,E[ae+H+7]=0),b===!0&&(l.fromBufferAttribute(q,P),E[ae+H+8]=l.x,E[ae+H+9]=l.y,E[ae+H+10]=l.z,E[ae+H+11]=q.itemSize===4?l.w:1)}}v={count:g,texture:L,size:new Vt(z,I)},s.set(p,v),p.addEventListener("dispose",F)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)x.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let w=0;for(let b=0;b<m.length;b++)w+=m[b];const N=p.morphTargetsRelative?1:1-w;x.getUniforms().setValue(o,"morphTargetBaseInfluence",N),x.getUniforms().setValue(o,"morphTargetInfluences",m)}x.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),x.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function S3(o,t,i,s,l){let u=new WeakMap;function d(m){const _=l.render.frame,g=m.geometry,v=t.get(m,g);if(u.get(v)!==_&&(t.update(v),u.set(v,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",x)===!1&&m.addEventListener("dispose",x),u.get(m)!==_&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,_))),m.isSkinnedMesh){const M=m.skeleton;u.get(M)!==_&&(M.update(),u.set(M,_))}return v}function p(){u=new WeakMap}function x(m){const _=m.target;_.removeEventListener("dispose",x),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:p}}const b3={[Ey]:"LINEAR_TONE_MAPPING",[Ty]:"REINHARD_TONE_MAPPING",[Ay]:"CINEON_TONE_MAPPING",[wy]:"ACES_FILMIC_TONE_MAPPING",[Cy]:"AGX_TONE_MAPPING",[Ny]:"NEUTRAL_TONE_MAPPING",[Ry]:"CUSTOM_TONE_MAPPING"};function M3(o,t,i,s,l,u){const d=new va(t,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let p=null,x=null,m=null;const _=new zi;_.setAttribute("position",new Bn([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new Bn([0,2,0,0,2,0],2));const g=new pT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Bi(_,g),M=new xT(-1,1,1,-1,0,1);let w=null,N=null,b=!1,S,T=null,O=[],U=!1;this.setSize=function(z,I){d.setSize(z,I),p!==null&&p.setSize(z,I),x!==null&&x.setSize(z,I);for(let E=0;E<O.length;E++){const L=O[E];L.setSize&&L.setSize(z,I)}},this.setEffects=function(z){O=z,U=O.length>0&&O[0].isRenderPass===!0;const I=d.width,E=d.height;O.length>0&&p===null&&(p=new va(I,E,{type:ba,depthBuffer:!1,stencilBuffer:!1}),x=new va(I,E,{type:ba,depthBuffer:!1,stencilBuffer:!1}));const L=l===!0&&O.some(Y=>Y.needsDepthTexture===!0);L!==(d.depthTexture!==null)&&(L===!0&&m===null&&(m=new bo(I,E),u===!0&&(m.format=Os,m.type=So)),d.dispose(),d.depthTexture=L?m:null,d.resolveDepthBuffer=L,d.storeMultisampledDepthBuffer=L);for(let Y=0;Y<O.length;Y++){const F=O[Y];F.setSize&&F.setSize(I,E),L&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(m)}},this.begin=function(z,I){if(b||z.toneMapping===Wa&&O.length===0)return!1;if(T=I,I!==null){const E=I.width,L=I.height;(d.width!==E||d.height!==L)&&this.setSize(E,L)}return U===!1&&z.setRenderTarget(d),S=z.toneMapping,z.toneMapping=Wa,!0},this.hasRenderPass=function(){return U},this.end=function(z,I){z.toneMapping=S,b=!0;let E=d,L=p;for(let Y=0;Y<O.length;Y++){const F=O[Y];F.enabled!==!1&&(F.render(z,L,E,I),F.needsSwap!==!1&&(E=L,L=L===p?x:p))}if(w!==z.outputColorSpace||N!==z.toneMapping){w=z.outputColorSpace,N=z.toneMapping,g.defines={},kt.getTransfer(w)===sn&&(g.defines.SRGB_TRANSFER="");const Y=b3[N];Y&&(g.defines[Y]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=E.texture,z.setRenderTarget(T),z.render(v,M),T=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){d.dispose(),p!==null&&p.dispose(),x!==null&&x.dispose(),_.dispose(),g.dispose()}}const nS=new ai,iS=new bo(1,1),aS=new Yy(1),sS=new Vy,rS=new jE,oS=new Wy,I_=[],B_=[],z_=new Float32Array(16),H_=new Float32Array(9),k_=new Float32Array(4);function To(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=I_[l];if(u===void 0&&(u=new Float32Array(l),I_[l]=u),t!==0){s.toArray(u,0);for(let d=1,p=0;d!==t;++d)p+=i,o[d].toArray(u,p)}return u}function Dn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function Ln(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function cf(o,t){let i=B_[t];i===void 0&&(i=new Int32Array(t),B_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function E3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function T3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Dn(i,t))return;o.uniform2fv(this.addr,t),Ln(i,t)}}function A3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Dn(i,t))return;o.uniform3fv(this.addr,t),Ln(i,t)}}function w3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Dn(i,t))return;o.uniform4fv(this.addr,t),Ln(i,t)}}function R3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Dn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Ln(i,t)}else{if(Dn(i,s))return;k_.set(s),o.uniformMatrix2fv(this.addr,!1,k_),Ln(i,s)}}function C3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Dn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Ln(i,t)}else{if(Dn(i,s))return;H_.set(s),o.uniformMatrix3fv(this.addr,!1,H_),Ln(i,s)}}function N3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Dn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Ln(i,t)}else{if(Dn(i,s))return;z_.set(s),o.uniformMatrix4fv(this.addr,!1,z_),Ln(i,s)}}function D3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function L3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Dn(i,t))return;o.uniform2iv(this.addr,t),Ln(i,t)}}function U3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Dn(i,t))return;o.uniform3iv(this.addr,t),Ln(i,t)}}function O3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Dn(i,t))return;o.uniform4iv(this.addr,t),Ln(i,t)}}function P3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function F3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Dn(i,t))return;o.uniform2uiv(this.addr,t),Ln(i,t)}}function I3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Dn(i,t))return;o.uniform3uiv(this.addr,t),Ln(i,t)}}function B3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Dn(i,t))return;o.uniform4uiv(this.addr,t),Ln(i,t)}}function uf(o){return o.version===0&&(o.compareFunction=ky,o.needsUpdate=!0),o}function z3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?u=uf(iS):u=nS,i.setTexture2D(t||u,l)}function H3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||rS,l)}function k3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_CUBE_SHADOW?u=uf(aS):u=oS,i.setTextureCube(t||u,l)}function G3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||sS,l)}function V3(o){switch(o){case 5126:return E3;case 35664:return T3;case 35665:return A3;case 35666:return w3;case 35674:return R3;case 35675:return C3;case 35676:return N3;case 5124:case 35670:return D3;case 35667:case 35671:return L3;case 35668:case 35672:return U3;case 35669:case 35673:return O3;case 5125:return P3;case 36294:return F3;case 36295:return I3;case 36296:return B3;case 35678:case 36198:case 36298:case 36306:case 35682:return z3;case 35679:case 36299:case 36307:return H3;case 35680:case 36300:case 36308:case 36293:return k3;case 36289:case 36303:case 36311:case 36292:return G3}}function j3(o,t){o.uniform1fv(this.addr,t)}function q3(o,t){const i=To(t,this.size,2);o.uniform2fv(this.addr,i)}function X3(o,t){const i=To(t,this.size,3);o.uniform3fv(this.addr,i)}function W3(o,t){const i=To(t,this.size,4);o.uniform4fv(this.addr,i)}function Y3(o,t){const i=To(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function K3(o,t){const i=To(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Z3(o,t){const i=To(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Q3(o,t){o.uniform1iv(this.addr,t)}function J3(o,t){o.uniform2iv(this.addr,t)}function $3(o,t){o.uniform3iv(this.addr,t)}function ew(o,t){o.uniform4iv(this.addr,t)}function tw(o,t){o.uniform1uiv(this.addr,t)}function nw(o,t){o.uniform2uiv(this.addr,t)}function iw(o,t){o.uniform3uiv(this.addr,t)}function aw(o,t){o.uniform4uiv(this.addr,t)}function sw(o,t,i){const s=this.cache,l=t.length,u=cf(i,l);Dn(s,u)||(o.uniform1iv(this.addr,u),Ln(s,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=uf(iS):d=nS;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,u[p])}function rw(o,t,i){const s=this.cache,l=t.length,u=cf(i,l);Dn(s,u)||(o.uniform1iv(this.addr,u),Ln(s,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||rS,u[d])}function ow(o,t,i){const s=this.cache,l=t.length,u=cf(i,l);Dn(s,u)||(o.uniform1iv(this.addr,u),Ln(s,u));let d;this.type===o.SAMPLER_CUBE_SHADOW?d=uf(aS):d=oS;for(let p=0;p!==l;++p)i.setTextureCube(t[p]||d,u[p])}function lw(o,t,i){const s=this.cache,l=t.length,u=cf(i,l);Dn(s,u)||(o.uniform1iv(this.addr,u),Ln(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||sS,u[d])}function cw(o){switch(o){case 5126:return j3;case 35664:return q3;case 35665:return X3;case 35666:return W3;case 35674:return Y3;case 35675:return K3;case 35676:return Z3;case 5124:case 35670:return Q3;case 35667:case 35671:return J3;case 35668:case 35672:return $3;case 35669:case 35673:return ew;case 5125:return tw;case 36294:return nw;case 36295:return iw;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return sw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return lw}}class uw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=V3(i.type)}}class fw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=cw(i.type)}}class dw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const p=l[u];p.setValue(t,i[p.id],s)}}}const mp=/(\w+)(\])?(\[|\.)?/g;function G_(o,t){o.seq.push(t),o.map[t.id]=t}function hw(o,t,i){const s=o.name,l=s.length;for(mp.lastIndex=0;;){const u=mp.exec(s),d=mp.lastIndex;let p=u[1];const x=u[2]==="]",m=u[3];if(x&&(p=p|0),m===void 0||m==="["&&d+2===l){G_(i,m===void 0?new uw(p,o,t):new fw(p,o,t));break}else{let g=i.map[p];g===void 0&&(g=new dw(p),G_(i,g)),i=g}}}class Gu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),x=t.getUniformLocation(i,p.name);hw(p,x,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,d=i.length;u!==d;++u){const p=i[u],x=s[p.id];x.needsUpdate!==!1&&p.setValue(t,x.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function V_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const pw=37297;let mw=0;function gw(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const j_=new bt;function xw(o){kt._getMatrix(j_,kt.workingColorSpace,o);const t=`mat3( ${j_.elements.map(i=>i.toFixed(4))} )`;switch(kt.getTransfer(o)){case Zu:return[t,"LinearTransferOETF"];case sn:return[t,"sRGBTransferOETF"];default:return yt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function q_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+gw(o.getShaderSource(t),p)}else return u}function vw(o,t){const i=xw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const _w={[Ey]:"Linear",[Ty]:"Reinhard",[Ay]:"Cineon",[wy]:"ACESFilmic",[Cy]:"AgX",[Ny]:"Neutral",[Ry]:"Custom"};function yw(o,t){const i=_w[t];return i===void 0?(yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ou=new oe;function Sw(){kt.getLuminanceCoefficients(Ou);const o=Ou.x.toFixed(4),t=Ou.y.toFixed(4),i=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ll).join(`
`)}function Mw(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Ew(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),d=u.name;let p=1;u.type===o.FLOAT_MAT2&&(p=2),u.type===o.FLOAT_MAT3&&(p=3),u.type===o.FLOAT_MAT4&&(p=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:p}}return i}function Ll(o){return o!==""}function X_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function W_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function hm(o){return o.replace(Tw,Aw)}function Aw(o,t){const i=Dt[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return hm(i)}const ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y_(o){return o.replace(ww,Rw)}function Rw(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function K_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Cw={[Fu]:"SHADOWMAP_TYPE_PCF",[Nl]:"SHADOWMAP_TYPE_VSM"};function Nw(o){return Cw[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Dw={[Il]:"ENVMAP_MODE_REFRACTION"};function Lw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Dw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Uw={[My]:"ENVMAP_BLENDING_MULTIPLY",[_E]:"ENVMAP_BLENDING_MIX",[yE]:"ENVMAP_BLENDING_ADD"};function Ow(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Uw[o.combine]||"ENVMAP_BLENDING_NONE"}function Pw(o,t,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,p=i.fragmentShader;const x=Nw(i),m=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=Lw(i),g=Ow(i),v=bw(i),M=Mw(u),w=l.createProgram();let N,b,S=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(N=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Ll).join(`
`),N.length>0&&(N+=`
`),b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Ll).join(`
`),b.length>0&&(b+=`
`)):(N=[K_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+x:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ll).join(`
`),b=[K_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+x:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?Dt.tonemapping_pars_fragment:"",i.toneMapping!==Wa?yw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,vw("linearToOutputTexel",i.outputColorSpace),Sw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ll).join(`
`)),d=hm(d),d=X_(d,i),d=W_(d,i),p=hm(p),p=X_(p,i),p=W_(p,i),d=Y_(d),p=Y_(p),i.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,N=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,b=["#define varying in",i.glslVersion===o_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===o_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const T=S+N+d,O=S+b+p,U=V_(l,l.VERTEX_SHADER,T),z=V_(l,l.FRAGMENT_SHADER,O);l.attachShader(w,U),l.attachShader(w,z),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(F){if(o.debug.checkShaderErrors){const G=l.getProgramInfoLog(w)||"",Z=l.getShaderInfoLog(U)||"",he=l.getShaderInfoLog(z)||"",q=G.trim(),ae=Z.trim(),P=he.trim();let H=!0,ie=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(H=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,U,z);else{const Q=q_(l,U,"vertex"),ce=q_(l,z,"fragment");Yt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+q+`
`+Q+`
`+ce)}else q!==""?yt("WebGLProgram: Program Info Log:",q):(ae===""||P==="")&&(ie=!1);ie&&(F.diagnostics={runnable:H,programLog:q,vertexShader:{log:ae,prefix:N},fragmentShader:{log:P,prefix:b}})}l.deleteShader(U),l.deleteShader(z),E=new Gu(l,w),L=Ew(l,w)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(w,pw)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=mw++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=z,this}let Fw=0;class Iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Bw(t),i.set(t,s)),s}}class Bw{constructor(t){this.id=Fw++,this.code=t,this.usedTimes=0}}function zw(o){return o===fr||o===Wu||o===Yu}function Hw(o,t,i,s,l,u){const d=new wm,p=new Iw,x=new Set,m=[],_=new Map,g=s.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return x.add(E),E===0?"uv":`uv${E}`}function w(E,L,Y,F,G,Z){const he=F.fog,q=G.geometry,ae=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,P=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,H=t.get(E.envMap||ae,P),ie=v[E.type];let Q=s.precision;E.precision!==null&&(Q=s.getMaxPrecision(E.precision),Q!==E.precision&&yt("WebGLProgram.getParameters:",E.precision,"not supported, using",Q,"instead."));const ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Se=ce!==void 0?ce.length:0;let je=0;q.morphAttributes.position!==void 0&&(je=1),q.morphAttributes.normal!==void 0&&(je=2),q.morphAttributes.color!==void 0&&(je=3);let Ze,A,K,pe;if(ie){const We=ma[ie];Ze=We.vertexShader,A=We.fragmentShader}else{Ze=E.vertexShader,A=E.fragmentShader;const We=p.getVertexShaderStage(E),Kt=p.getFragmentShaderStage(E);p.update(E,We,Kt),K=We.id,pe=Kt.id}const ye=o.getRenderTarget(),be=o.state.buffers.depth.getReversed(),Ne=G.isInstancedMesh===!0,et=G.isBatchedMesh===!0,Re=!!E.map,He=!!E.matcap,J=!!H,De=J&&H.isPMREMTexture===!0,xt=!!E.aoMap,mt=!!E.lightMap,St=!!E.bumpMap&&E.wireframe===!1,Ke=!!E.normalMap,de=!!E.displacementMap,rt=!!E.emissiveMap,ut=!!E.metalnessMap,Wt=!!E.roughnessMap,gt=E.anisotropy>0,V=E.clearcoat>0,Nt=E.diffuseRoughness>0,ct=E.dispersion>0,vt=E.retroreflectivity>0,Pe=E.iridescence>0,jt=E.sheen>0,it=E.transmission>0,ot=gt&&!!E.anisotropyMap,B=V&&!!E.clearcoatMap,R=V&&!!E.clearcoatNormalMap,re=V&&!!E.clearcoatRoughnessMap,we=Nt&&!!E.diffuseRoughnessMap,ve=Pe&&!!E.iridescenceMap,Fe=Pe&&!!E.iridescenceThicknessMap,Ge=jt&&!!E.sheenColorMap,xe=jt&&!!E.sheenRoughnessMap,Ee=!!E.specularMap,Ie=!!E.specularColorMap,j=!!E.specularIntensityMap,Me=it&&!!E.transmissionMap,_e=it&&!!E.thicknessMap,Be=!!E.gradientMap,Le=!!E.alphaMap,ze=E.alphaTest>0,st=!!E.alphaHash,ft=!!E.extensions;let Ce=Wa;E.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ce=o.toneMapping);const Je=De?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Tt={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:Ze,fragmentShader:A,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:Q,batching:et,batchingColor:et&&G._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&G.instanceColor!==null,instancingMorph:Ne&&G.morphTexture!==null,outputColorSpace:ye===null?o.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Re,matcap:He,envMap:J,envMapMode:J&&H.mapping,envMapPMREM:De,envMapMaxLod:De?Je.length-1:null,envMapSize:De?Je[0].width:null,aoMap:xt,lightMap:mt,bumpMap:St,normalMap:Ke,displacementMap:de,emissiveMap:rt,normalMapObjectSpace:Ke&&E.normalMapType===ME,normalMapTangentSpace:Ke&&E.normalMapType===r_,packedNormalMap:Ke&&E.normalMapType===r_&&zw(E.normalMap.format),metalnessMap:ut,roughnessMap:Wt,anisotropy:gt,anisotropyMap:ot,clearcoat:V,clearcoatMap:B,clearcoatNormalMap:R,clearcoatRoughnessMap:re,diffuseRoughness:Nt,diffuseRoughnessMap:we,dispersion:ct,retroreflection:vt,iridescence:Pe,iridescenceMap:ve,iridescenceThicknessMap:Fe,sheen:jt,sheenColorMap:Ge,sheenRoughnessMap:xe,specularMap:Ee,specularColorMap:Ie,specularIntensityMap:j,transmission:it,transmissionMap:Me,thicknessMap:_e,gradientMap:Be,opaque:E.transparent===!1&&E.blending===Ol&&E.alphaToCoverage===!1,alphaMap:Le,alphaTest:ze,alphaHash:st,combine:E.combine,mapUv:Re&&M(E.map.channel),aoMapUv:xt&&M(E.aoMap.channel),lightMapUv:mt&&M(E.lightMap.channel),bumpMapUv:St&&M(E.bumpMap.channel),normalMapUv:Ke&&M(E.normalMap.channel),displacementMapUv:de&&M(E.displacementMap.channel),emissiveMapUv:rt&&M(E.emissiveMap.channel),metalnessMapUv:ut&&M(E.metalnessMap.channel),roughnessMapUv:Wt&&M(E.roughnessMap.channel),anisotropyMapUv:ot&&M(E.anisotropyMap.channel),clearcoatMapUv:B&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:R&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&M(E.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&M(E.diffuseRoughnessMap.channel),iridescenceMapUv:ve&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:xe&&M(E.sheenRoughnessMap.channel),specularMapUv:Ee&&M(E.specularMap.channel),specularColorMapUv:Ie&&M(E.specularColorMap.channel),specularIntensityMapUv:j&&M(E.specularIntensityMap.channel),transmissionMapUv:Me&&M(E.transmissionMap.channel),thicknessMapUv:_e&&M(E.thicknessMap.channel),alphaMapUv:Le&&M(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ke||gt),vertexNormals:!!q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!q.attributes.uv&&(Re||Le),fog:!!he,useFog:E.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||q.attributes.normal===void 0&&Ke===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:be,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:je,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:Z.filter(We=>We.texture!==null).length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&Y.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Re&&E.map.isVideoTexture===!0&&kt.getTransfer(E.map.colorSpace)===sn,decodeVideoTextureEmissive:rt&&E.emissiveMap.isVideoTexture===!0&&kt.getTransfer(E.emissiveMap.colorSpace)===sn,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===qa,flipSided:E.side===ii,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ft&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&E.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Tt.vertexUv1s=x.has(1),Tt.vertexUv2s=x.has(2),Tt.vertexUv3s=x.has(3),x.clear(),Tt}function N(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)L.push(Y),L.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(b(L,E),S(L,E),L.push(o.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function b(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapPMREM),E.push(L.envMapMaxLod),E.push(L.envMapSize),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.diffuseRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.numLightProbeGrids),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function S(E,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.diffuseRoughness&&d.enable(25),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function T(E){const L=v[E.type];let Y;if(L){const F=ma[L];Y=fT.clone(F.uniforms)}else Y=E.uniforms;return Y}function O(E,L){let Y=_.get(L);return Y!==void 0?++Y.usedTimes:(Y=new Pw(o,L,E,l),m.push(Y),_.set(L,Y)),Y}function U(E){if(--E.usedTimes===0){const L=m.indexOf(E);m[L]=m[m.length-1],m.pop(),_.delete(E.cacheKey),E.destroy()}}function z(E){p.remove(E)}function I(){p.dispose()}return{getParameters:w,getProgramCacheKey:N,getUniforms:T,acquireProgram:O,releaseProgram:U,releaseShaderCache:z,programs:m,dispose:I}}function kw(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function s(d){o.delete(d)}function l(d,p,x){o.get(d)[p]=x}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function Gw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function Z_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Q_(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function d(v){let M=0;return v.isInstancedMesh&&(M+=2),v.isSkinnedMesh&&(M+=1),M}function p(v,M,w,N,b,S){let T=o[t];return T===void 0?(T={id:v.id,object:v,geometry:M,material:w,materialVariant:d(v),groupOrder:N,renderOrder:v.renderOrder,z:b,group:S},o[t]=T):(T.id=v.id,T.object=v,T.geometry=M,T.material=w,T.materialVariant=d(v),T.groupOrder=N,T.renderOrder=v.renderOrder,T.z=b,T.group=S),t++,T}function x(v,M,w,N,b,S,T){T.reversedDepth===!0&&(b=-b);const O=p(v,M,w,N,b,S);w.transmission>0?s.push(O):w.transparent===!0?l.push(O):i.push(O)}function m(v,M,w,N,b,S){const T=p(v,M,w,N,b,S);w.transmission>0?s.unshift(T):w.transparent===!0?l.unshift(T):i.unshift(T)}function _(v,M){i.length>1&&i.sort(v||Gw),s.length>1&&s.sort(M||Z_),l.length>1&&l.sort(M||Z_)}function g(){for(let v=t,M=o.length;v<M;v++){const w=o[v];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:x,unshift:m,finish:g,sort:_}}function Vw(){let o=new WeakMap;function t(s,l){const u=o.get(s);let d;return u===void 0?(d=new Q_,o.set(s,[d])):l>=u.length?(d=new Q_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function jw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new oe,color:new Jt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":i={color:new Jt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return o[t.id]=i,i}}}function qw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Xw=0;function Ww(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Yw(o){const t=new jw,i=qw(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new oe);const l=new oe,u=new xn,d=new xn;function p(m){let _=0,g=0,v=0;for(let Z=0;Z<9;Z++)s.probe[Z].set(0,0,0);let M=0,w=0,N=0,b=0,S=0,T=0,O=0,U=0,z=0,I=0,E=0,L=0,Y=0,F=0;m.sort(Ww);for(let Z=0,he=m.length;Z<he;Z++){const q=m[Z],ae=q.color,P=q.intensity,H=q.distance;let ie=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===fr?ie=q.shadow.map.texture:ie=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)_+=ae.r*P,g+=ae.g*P,v+=ae.b*P;else if(q.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(q.sh.coefficients[Q],P);F++}else if(q.isSunLight){const Q=t.get(q);if(Q.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const ce=q.shadow,Se=i.get(q);Se.shadowIntensity=ce.intensity,Se.shadowBias=ce.bias,Se.shadowNormalBias=ce.normalBias,Se.shadowRadius=ce.radius,Se.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),s.sunShadow[w]=Se,s.sunShadowMap[w]=ie;const je=ce.getViewportCount();for(let Ze=0;Ze<je;Ze++)s.sunShadowMatrix[N+Ze]=ce.getMatrix(Ze),s.sunShadowCascade[N+Ze]=ce._cascadeData[Ze];N+=je,w++}s.sun[M]=Q,M++}else if(q.isDirectionalLight){const Q=t.get(q);if(Q.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const ce=q.shadow,Se=i.get(q);Se.shadowIntensity=ce.intensity,Se.shadowBias=ce.bias,Se.shadowNormalBias=ce.normalBias,Se.shadowRadius=ce.radius,Se.shadowMapSize=ce.mapSize,s.directionalShadow[b]=Se,s.directionalShadowMap[b]=ie,s.directionalShadowMatrix[b]=q.shadow.matrix,z++}s.directional[b]=Q,b++}else if(q.isSpotLight){const Q=t.get(q);Q.position.setFromMatrixPosition(q.matrixWorld),Q.color.copy(ae).multiplyScalar(P),Q.distance=H,Q.coneCos=Math.cos(q.angle),Q.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),Q.decay=q.decay,s.spot[T]=Q;const ce=q.shadow;if(q.map&&(s.spotLightMap[L]=q.map,L++,ce.updateMatrices(q),q.castShadow&&Y++),s.spotLightMatrix[T]=ce.matrix,q.castShadow){const Se=i.get(q);Se.shadowIntensity=ce.intensity,Se.shadowBias=ce.bias,Se.shadowNormalBias=ce.normalBias,Se.shadowRadius=ce.radius,Se.shadowMapSize=ce.mapSize,s.spotShadow[T]=Se,s.spotShadowMap[T]=ie,E++}T++}else if(q.isRectAreaLight){const Q=t.get(q);Q.color.copy(ae).multiplyScalar(P),Q.halfWidth.set(q.width*.5,0,0),Q.halfHeight.set(0,q.height*.5,0),s.rectArea[O]=Q,O++}else if(q.isPointLight){const Q=t.get(q);if(Q.color.copy(q.color).multiplyScalar(q.intensity),Q.distance=q.distance,Q.decay=q.decay,q.castShadow){const ce=q.shadow,Se=i.get(q);Se.shadowIntensity=ce.intensity,Se.shadowBias=ce.bias,Se.shadowNormalBias=ce.normalBias,Se.shadowRadius=ce.radius,Se.shadowMapSize=ce.mapSize,Se.shadowCameraNear=ce.camera.near,Se.shadowCameraFar=ce.camera.far,s.pointShadow[S]=Se,s.pointShadowMap[S]=ie,s.pointShadowMatrix[S]=q.shadow.matrix,I++}s.point[S]=Q,S++}else if(q.isHemisphereLight){const Q=t.get(q);Q.skyColor.copy(q.color).multiplyScalar(P),Q.groundColor.copy(q.groundColor).multiplyScalar(P),s.hemi[U]=Q,U++}}O>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ye.LTC_FLOAT_1,s.rectAreaLTC2=Ye.LTC_FLOAT_2):(s.rectAreaLTC1=Ye.LTC_HALF_1,s.rectAreaLTC2=Ye.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=v;const G=s.hash;(G.sunLength!==M||G.directionalLength!==b||G.pointLength!==S||G.spotLength!==T||G.rectAreaLength!==O||G.hemiLength!==U||G.numSunShadows!==w||G.numDirectionalShadows!==z||G.numPointShadows!==I||G.numSpotShadows!==E||G.numSpotMaps!==L||G.numLightProbes!==F)&&(s.sun.length=M,s.directional.length=b,s.spot.length=T,s.rectArea.length=O,s.point.length=S,s.hemi.length=U,s.sunShadow.length=w,s.sunShadowMap.length=w,s.sunShadowMatrix.length=N,s.sunShadowCascade.length=N,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.directionalShadowMatrix.length=z,s.pointShadow.length=I,s.pointShadowMap.length=I,s.pointShadowMatrix.length=I,s.spotShadow.length=E,s.spotShadowMap.length=E,s.spotLightMatrix.length=E+L-Y,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=Y,s.numLightProbes=F,G.sunLength=M,G.directionalLength=b,G.pointLength=S,G.spotLength=T,G.rectAreaLength=O,G.hemiLength=U,G.numSunShadows=w,G.numDirectionalShadows=z,G.numPointShadows=I,G.numSpotShadows=E,G.numSpotMaps=L,G.numLightProbes=F,s.version=Xw++)}function x(m,_){let g=0,v=0,M=0,w=0,N=0,b=0;const S=_.matrixWorldInverse;for(let T=0,O=m.length;T<O;T++){const U=m[T];if(U.isSunLight){const z=s.sun[g];z.direction.setFromMatrixPosition(U.matrixWorld),z.direction.transformDirection(S),g++}else if(U.isDirectionalLight){const z=s.directional[v];z.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(S),v++}else if(U.isSpotLight){const z=s.spot[w];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(S),z.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(S),w++}else if(U.isRectAreaLight){const z=s.rectArea[N];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(S),d.identity(),u.copy(U.matrixWorld),u.premultiply(S),d.extractRotation(u),z.halfWidth.set(U.width*.5,0,0),z.halfHeight.set(0,U.height*.5,0),z.halfWidth.applyMatrix4(d),z.halfHeight.applyMatrix4(d),N++}else if(U.isPointLight){const z=s.point[M];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(S),M++}else if(U.isHemisphereLight){const z=s.hemi[b];z.direction.setFromMatrixPosition(U.matrixWorld),z.direction.transformDirection(S),b++}}}return{setup:p,setupView:x,state:s}}function J_(o){const t=new Yw(o),i=[],s=[],l=[];function u(g){_.camera=g,i.length=0,s.length=0,l.length=0}function d(g){g.isLightProbeGrid?l.push(g):i.push(g)}function p(g){s.push(g)}function x(){t.setup(i),l.sort((g,v)=>g.priority-v.priority||g.id-v.id)}function m(g){t.setupView(i,g)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:_,setupLights:x,setupLightsView:m,pushLight:d,pushShadow:p}}function Kw(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let p;return d===void 0?(p=new J_(o),t.set(l,[p])):u>=d.length?(p=new J_(o),d.push(p)):p=d[u],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const Zw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Jw=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],$w=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],$_=new xn,wl=new oe,gp=new oe;function eR(o,t,i){let s=new $u;const l=new Vt,u=new Vt,d=new gn,p=new mT,x=new gT,m={},_=i.maxTextureSize,g={[ur]:ii,[ii]:ur,[qa]:qa},v=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:Zw,fragmentShader:Qw}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const w=new zi;w.setAttribute("position",new _a(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Bi(w,v),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let S=this.type;this.render=function(I,E,L){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||I.length===0)return;this.type===eE&&(yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fu);const Y=o.getRenderTarget(),F=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(vo),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const he=S!==this.type;he&&E.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(ae=>ae.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,ae=I.length;q<ae;q++){const P=I[q],H=P.shadow;if(H===void 0){yt("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ie=H.getFrameExtents();l.multiply(ie),u.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/ie.x),l.x=u.x*ie.x,H.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/ie.y),l.y=u.y*ie.y,H.mapSize.y=u.y));const Q=o.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Q,H.map===null||he===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Nl){if(P.isPointLight){yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new va(l.x,l.y,{format:fr,type:ba,minFilter:fi,magFilter:fi,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new bo(l.x,l.y,ga),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=Ps,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Wn,H.map.depthTexture.magFilter=Wn}else P.isPointLight?(H.map=new Um(l.x),H.map.depthTexture=new Yy(l.x,Sa)):(H.map=new va(l.x,l.y),H.map.depthTexture=new bo(l.x,l.y,Sa)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=Ps,this.type===Fu?(H.map.depthTexture.compareFunction=Q?Hy:zy,H.map.depthTexture.minFilter=fi,H.map.depthTexture.magFilter=fi):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Wn,H.map.depthTexture.magFilter=Wn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==l.x||H.map.height!==l.y)&&H.map.setSize(l.x,l.y);const ce=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();P.isPointLight!==!0&&H.updateMatrices(P,L);const Se=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:L.layers;for(let je=0;je<ce;je++){const Ze=H.getCamera(je);if(P.isPointLight){const A=H.camera,K=H.matrix,pe=P.distance||A.far;pe!==A.far&&(A.far=pe,A.updateProjectionMatrix()),wl.setFromMatrixPosition(P.matrixWorld),A.position.copy(wl),gp.copy(A.position),gp.add(Jw[je]),A.up.copy($w[je]),A.lookAt(gp),A.updateMatrixWorld(),K.makeTranslation(-wl.x,-wl.y,-wl.z),$_.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),H._frustum.setFromProjectionMatrix($_,A.coordinateSystem,A.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,je),o.clear();else{je===0&&(o.setRenderTarget(H.map),o.clear());const A=H.getViewport(je);d.set(u.x*A.x,u.y*A.y,u.x*A.z,u.y*A.w),Z.viewport(d)}s=H.getFrustum(je),U(E,L,Ze,P,Se,this.type)}H.isPointLightShadow!==!0&&this.type===Nl&&T(H,L),H.needsUpdate=!1}S=this.type,b.needsUpdate=!1,o.setRenderTarget(Y,F,G)};function T(I,E){const L=t.update(N);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null?I.mapPass=new va(l.x,l.y,{format:fr,type:ba}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),v.uniforms.shadow_pass.value=I.map.depthTexture,v.uniforms.resolution.value.set(I.map.width,I.map.height),v.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(E,null,L,v,N,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value.set(I.map.width,I.map.height),M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(E,null,L,M,N,null)}function O(I,E,L,Y){let F=null;const G=L.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)F=G;else if(F=L.isPointLight===!0?x:p,o.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const Z=F.uuid,he=E.uuid;let q=m[Z];q===void 0&&(q={},m[Z]=q);let ae=q[he];ae===void 0&&(ae=F.clone(),q[he]=ae,E.addEventListener("dispose",z)),F=ae}if(F.visible=E.visible,F.wireframe=E.wireframe,Y===Nl?F.side=E.shadowSide!==null?E.shadowSide:E.side:F.side=E.shadowSide!==null?E.shadowSide:g[E.side],F.alphaMap=E.alphaMap,F.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,F.map=E.map,F.clipShadows=E.clipShadows,F.clippingPlanes=E.clippingPlanes,F.clipIntersection=E.clipIntersection,F.displacementMap=E.displacementMap,F.displacementScale=E.displacementScale,F.displacementBias=E.displacementBias,F.wireframeLinewidth=E.wireframeLinewidth,F.linewidth=E.linewidth,L.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const Z=o.properties.get(F);Z.light=L}return F}function U(I,E,L,Y,F,G){if(I.visible===!1)return;if(I.layers.test(F)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&G===Nl)&&(!I.frustumCulled||I.intersectsFrustum(s))){I.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,I.matrixWorld);const q=t.update(I),ae=I.material;if(Array.isArray(ae)){const P=q.groups;for(let H=0,ie=P.length;H<ie;H++){const Q=P[H],ce=ae[Q.materialIndex];if(ce&&ce.visible){const Se=O(I,ce,Y,G);I.onBeforeShadow(o,I,E,L,q,Se,Q),o.renderBufferDirect(L,null,q,Se,I,Q),I.onAfterShadow(o,I,E,L,q,Se,Q)}}}else if(ae.visible){const P=O(I,ae,Y,G);I.onBeforeShadow(o,I,E,L,q,P,null),o.renderBufferDirect(L,null,q,P,I,null),I.onAfterShadow(o,I,E,L,q,P,null)}}const he=I.children;for(let q=0,ae=he.length;q<ae;q++)U(he[q],E,L,Y,F,G)}function z(I){I.target.removeEventListener("dispose",z);for(const L in m){const Y=m[L],F=I.target.uuid;F in Y&&(Y[F].dispose(),delete Y[F])}}}function tR(o,t){function i(){let j=!1;const Me=new gn;let _e=null;const Be=new gn(0,0,0,0);return{setMask:function(Le){_e!==Le&&!j&&(o.colorMask(Le,Le,Le,Le),_e=Le)},setLocked:function(Le){j=Le},setClear:function(Le,ze,st,ft,Ce){Ce===!0&&(Le*=ft,ze*=ft,st*=ft),Me.set(Le,ze,st,ft),Be.equals(Me)===!1&&(o.clearColor(Le,ze,st,ft),Be.copy(Me))},reset:function(){j=!1,_e=null,Be.set(-1,0,0,0)}}}function s(){let j=!1,Me=!1,_e=null,Be=null,Le=null;return{setReversed:function(ze){if(Me!==ze){const st=t.get("EXT_clip_control");ze?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),Me=ze;const ft=Le;Le=null,this.setClear(ft)}},getReversed:function(){return Me},setTest:function(ze){ze?be(o.DEPTH_TEST):Ne(o.DEPTH_TEST)},setMask:function(ze){_e!==ze&&!j&&(o.depthMask(ze),_e=ze)},setFunc:function(ze){if(Me&&(ze=OE[ze]),Be!==ze){switch(ze){case Mp:o.depthFunc(o.NEVER);break;case Ep:o.depthFunc(o.ALWAYS);break;case Tp:o.depthFunc(o.LESS);break;case Fl:o.depthFunc(o.LEQUAL);break;case Ap:o.depthFunc(o.EQUAL);break;case wp:o.depthFunc(o.GEQUAL);break;case Rp:o.depthFunc(o.GREATER);break;case Cp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Be=ze}},setLocked:function(ze){j=ze},setClear:function(ze){Le!==ze&&(Le=ze,Me&&(ze=1-ze),o.clearDepth(ze))},reset:function(){j=!1,_e=null,Be=null,Le=null,Me=!1}}}function l(){let j=!1,Me=null,_e=null,Be=null,Le=null,ze=null,st=null,ft=null,Ce=null;return{setTest:function(Je){j||(Je?be(o.STENCIL_TEST):Ne(o.STENCIL_TEST))},setMask:function(Je){Me!==Je&&!j&&(o.stencilMask(Je),Me=Je)},setFunc:function(Je,Tt,We){(_e!==Je||Be!==Tt||Le!==We)&&(o.stencilFunc(Je,Tt,We),_e=Je,Be=Tt,Le=We)},setOp:function(Je,Tt,We){(ze!==Je||st!==Tt||ft!==We)&&(o.stencilOp(Je,Tt,We),ze=Je,st=Tt,ft=We)},setLocked:function(Je){j=Je},setClear:function(Je){Ce!==Je&&(o.clearStencil(Je),Ce=Je)},reset:function(){j=!1,Me=null,_e=null,Be=null,Le=null,ze=null,st=null,ft=null,Ce=null}}}const u=new i,d=new s,p=new l;let x={};const m=new WeakMap;let _={},g={},v={},M=new WeakMap,w=[],N=null,b=!1,S=null,T=null,O=null,U=null,z=null,I=null,E=null,L=new Jt(0,0,0),Y=0,F=!1,G=null,Z=null,he=null,q=null,ae=null;const P=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ie=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=ie>=1):Q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=ie>=2);let ce=null,Se={};const je=o.getParameter(o.SCISSOR_BOX),Ze=o.getParameter(o.VIEWPORT),A=new gn().fromArray(je),K=new gn().fromArray(Ze);function pe(j,Me,_e,Be){const Le=new Uint8Array(4),ze=o.createTexture();o.bindTexture(j,ze),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let st=0;st<_e;st++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Me,0,o.RGBA,1,1,Be,0,o.RGBA,o.UNSIGNED_BYTE,Le):o.texImage2D(Me+st,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Le);return ze}const ye={};ye[o.TEXTURE_2D]=pe(o.TEXTURE_2D,o.TEXTURE_2D,1),ye[o.TEXTURE_CUBE_MAP]=pe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[o.TEXTURE_2D_ARRAY]=pe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ye[o.TEXTURE_3D]=pe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),be(o.DEPTH_TEST),d.setFunc(Fl),St(!1),Ke(i_),be(o.CULL_FACE),xt(vo);function be(j){_[j]!==!0&&(o.enable(j),_[j]=!0)}function Ne(j){_[j]!==!1&&(o.disable(j),_[j]=!1)}function et(j,Me){return v[j]!==Me?(o.bindFramebuffer(j,Me),v[j]=Me,j===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Me),j===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Me),!0):!1}function Re(j,Me){let _e=w,Be=!1;if(j){_e=M.get(Me),_e===void 0&&(_e=[],M.set(Me,_e));const Le=j.textures;if(_e.length!==Le.length||_e[0]!==o.COLOR_ATTACHMENT0){for(let ze=0,st=Le.length;ze<st;ze++)_e[ze]=o.COLOR_ATTACHMENT0+ze;_e.length=Le.length,Be=!0}}else _e[0]!==o.BACK&&(_e[0]=o.BACK,Be=!0);Be&&o.drawBuffers(_e)}function He(j){return N!==j?(o.useProgram(j),N=j,!0):!1}const J={[xo]:o.FUNC_ADD,[nE]:o.FUNC_SUBTRACT,[iE]:o.FUNC_REVERSE_SUBTRACT};J[aE]=o.MIN,J[sE]=o.MAX;const De={[rE]:o.ZERO,[oE]:o.ONE,[lE]:o.SRC_COLOR,[Sy]:o.SRC_ALPHA,[pE]:o.SRC_ALPHA_SATURATE,[dE]:o.DST_COLOR,[uE]:o.DST_ALPHA,[cE]:o.ONE_MINUS_SRC_COLOR,[by]:o.ONE_MINUS_SRC_ALPHA,[hE]:o.ONE_MINUS_DST_COLOR,[fE]:o.ONE_MINUS_DST_ALPHA,[mE]:o.CONSTANT_COLOR,[gE]:o.ONE_MINUS_CONSTANT_COLOR,[xE]:o.CONSTANT_ALPHA,[vE]:o.ONE_MINUS_CONSTANT_ALPHA};function xt(j,Me,_e,Be,Le,ze,st,ft,Ce,Je){if(j===vo){b===!0&&(Ne(o.BLEND),b=!1);return}if(b===!1&&(be(o.BLEND),b=!0),j!==tE){if(j!==S||Je!==F){if((T!==xo||z!==xo)&&(o.blendEquation(o.FUNC_ADD),T=xo,z=xo),Je)switch(j){case Ol:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bp:o.blendFunc(o.ONE,o.ONE);break;case a_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case s_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Yt("WebGLState: Invalid blending: ",j);break}else switch(j){case Ol:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bp:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case a_:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s_:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",j);break}O=null,U=null,I=null,E=null,L.set(0,0,0),Y=0,S=j,F=Je}return}Le=Le||Me,ze=ze||_e,st=st||Be,(Me!==T||Le!==z)&&(o.blendEquationSeparate(J[Me],J[Le]),T=Me,z=Le),(_e!==O||Be!==U||ze!==I||st!==E)&&(o.blendFuncSeparate(De[_e],De[Be],De[ze],De[st]),O=_e,U=Be,I=ze,E=st),(ft.equals(L)===!1||Ce!==Y)&&(o.blendColor(ft.r,ft.g,ft.b,Ce),L.copy(ft),Y=Ce),S=j,F=!1}function mt(j,Me){j.side===qa?Ne(o.CULL_FACE):be(o.CULL_FACE);let _e=j.side===ii;Me&&(_e=!_e),St(_e),j.blending===Ol&&j.transparent===!1?xt(vo):xt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),u.setMask(j.colorWrite);const Be=j.stencilWrite;p.setTest(Be),Be&&(p.setMask(j.stencilWriteMask),p.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),p.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),rt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?be(o.SAMPLE_ALPHA_TO_COVERAGE):Ne(o.SAMPLE_ALPHA_TO_COVERAGE)}function St(j){G!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),G=j)}function Ke(j){j!==JM?(be(o.CULL_FACE),j!==Z&&(j===i_?o.cullFace(o.BACK):j===$M?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ne(o.CULL_FACE),Z=j}function de(j){j!==he&&(H&&o.lineWidth(j),he=j)}function rt(j,Me,_e){j?(be(o.POLYGON_OFFSET_FILL),(q!==Me||ae!==_e)&&(q=Me,ae=_e,d.getReversed()&&(Me=-Me,_e=-_e),o.polygonOffset(Me,_e))):Ne(o.POLYGON_OFFSET_FILL)}function ut(j){j?be(o.SCISSOR_TEST):Ne(o.SCISSOR_TEST)}function Wt(j){j===void 0&&(j=o.TEXTURE0+P-1),ce!==j&&(o.activeTexture(j),ce=j)}function gt(j,Me,_e){_e===void 0&&(ce===null?_e=o.TEXTURE0+P-1:_e=ce);let Be=Se[_e];Be===void 0&&(Be={type:void 0,texture:void 0},Se[_e]=Be),(Be.type!==j||Be.texture!==Me)&&(ce!==_e&&(o.activeTexture(_e),ce=_e),o.bindTexture(j,Me||ye[j]),Be.type=j,Be.texture=Me)}function V(){const j=Se[ce];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Nt(){try{o.compressedTexImage2D(...arguments)}catch(j){Yt("WebGLState:",j)}}function ct(){try{o.compressedTexImage3D(...arguments)}catch(j){Yt("WebGLState:",j)}}function vt(){try{o.texSubImage2D(...arguments)}catch(j){Yt("WebGLState:",j)}}function Pe(){try{o.texSubImage3D(...arguments)}catch(j){Yt("WebGLState:",j)}}function jt(){try{o.compressedTexSubImage2D(...arguments)}catch(j){Yt("WebGLState:",j)}}function it(){try{o.compressedTexSubImage3D(...arguments)}catch(j){Yt("WebGLState:",j)}}function ot(){try{o.texStorage2D(...arguments)}catch(j){Yt("WebGLState:",j)}}function B(){try{o.texStorage3D(...arguments)}catch(j){Yt("WebGLState:",j)}}function R(){try{o.texImage2D(...arguments)}catch(j){Yt("WebGLState:",j)}}function re(){try{o.texImage3D(...arguments)}catch(j){Yt("WebGLState:",j)}}function we(j){return g[j]!==void 0?g[j]:o.getParameter(j)}function ve(j,Me){g[j]!==Me&&(o.pixelStorei(j,Me),g[j]=Me)}function Fe(j){A.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),A.copy(j))}function Ge(j){K.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),K.copy(j))}function xe(j,Me){let _e=m.get(Me);_e===void 0&&(_e=new WeakMap,m.set(Me,_e));let Be=_e.get(j);Be===void 0&&(Be=o.getUniformBlockIndex(Me,j.name),o.uniformBlockBinding(Me,Be,Be),_e.set(j,Be))}function Ee(j,Me,_e){const Le=m.get(Me).get(j);x[Le]!==_e&&(o.bindBufferBase(o.UNIFORM_BUFFER,Le,_e),x[Le]=_e)}function Ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},g={},ce=null,Se={},v={},x={},M=new WeakMap,w=[],N=null,b=!1,S=null,T=null,O=null,U=null,z=null,I=null,E=null,L=new Jt(0,0,0),Y=0,F=!1,G=null,Z=null,he=null,q=null,ae=null,A.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:be,disable:Ne,bindFramebuffer:et,drawBuffers:Re,useProgram:He,setBlending:xt,setMaterial:mt,setFlipSided:St,setCullFace:Ke,setLineWidth:de,setPolygonOffset:rt,setScissorTest:ut,activeTexture:Wt,bindTexture:gt,unbindTexture:V,compressedTexImage2D:Nt,compressedTexImage3D:ct,texImage2D:R,texImage3D:re,pixelStorei:ve,getParameter:we,updateUBOMapping:xe,uniformBlockBinding:Ee,texStorage2D:ot,texStorage3D:B,texSubImage2D:vt,texSubImage3D:Pe,compressedTexSubImage2D:jt,compressedTexSubImage3D:it,scissor:Fe,viewport:Ge,reset:Ie}}function nR(o,t,i,s,l,u,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Vt,_=new WeakMap,g=new Set;let v;const M=new WeakMap,w=new Set,N=new FinalizationRegistry(B=>w.delete(B));let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(B,R){return b?new OffscreenCanvas(B,R):Ju("canvas")}function T(B,R,re){let we=1;const ve=ot(B);if((ve.width>re||ve.height>re)&&(we=re/Math.max(ve.width,ve.height)),we<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Fe=Math.floor(we*ve.width),Ge=Math.floor(we*ve.height);v===void 0&&(v=S(Fe,Ge));const xe=R?S(Fe,Ge):v;return xe.width=Fe,xe.height=Ge,xe.getContext("2d").drawImage(B,0,0,Fe,Ge),yt("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+Fe+"x"+Ge+")."),xe}else return"data"in B&&yt("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),B;return B}function O(B){return B.generateMipmaps}function U(B){o.generateMipmap(B)}function z(B){return B.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?o.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function I(B,R,re,we,ve,Fe=!1){if(B!==null){if(o[B]!==void 0)return o[B];yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Ge;we&&(Ge=t.get("EXT_texture_norm16"),Ge||yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=R;if(R===o.RED&&(re===o.FLOAT&&(xe=o.R32F),re===o.HALF_FLOAT&&(xe=o.R16F),re===o.UNSIGNED_BYTE&&(xe=o.R8),re===o.UNSIGNED_SHORT&&Ge&&(xe=Ge.R16_EXT),re===o.SHORT&&Ge&&(xe=Ge.R16_SNORM_EXT)),R===o.RED_INTEGER&&(re===o.UNSIGNED_BYTE&&(xe=o.R8UI),re===o.UNSIGNED_SHORT&&(xe=o.R16UI),re===o.UNSIGNED_INT&&(xe=o.R32UI),re===o.BYTE&&(xe=o.R8I),re===o.SHORT&&(xe=o.R16I),re===o.INT&&(xe=o.R32I)),R===o.RG&&(re===o.FLOAT&&(xe=o.RG32F),re===o.HALF_FLOAT&&(xe=o.RG16F),re===o.UNSIGNED_BYTE&&(xe=o.RG8),re===o.UNSIGNED_SHORT&&Ge&&(xe=Ge.RG16_EXT),re===o.SHORT&&Ge&&(xe=Ge.RG16_SNORM_EXT)),R===o.RG_INTEGER&&(re===o.UNSIGNED_BYTE&&(xe=o.RG8UI),re===o.UNSIGNED_SHORT&&(xe=o.RG16UI),re===o.UNSIGNED_INT&&(xe=o.RG32UI),re===o.BYTE&&(xe=o.RG8I),re===o.SHORT&&(xe=o.RG16I),re===o.INT&&(xe=o.RG32I)),R===o.RGB_INTEGER&&(re===o.UNSIGNED_BYTE&&(xe=o.RGB8UI),re===o.UNSIGNED_SHORT&&(xe=o.RGB16UI),re===o.UNSIGNED_INT&&(xe=o.RGB32UI),re===o.BYTE&&(xe=o.RGB8I),re===o.SHORT&&(xe=o.RGB16I),re===o.INT&&(xe=o.RGB32I)),R===o.RGBA_INTEGER&&(re===o.UNSIGNED_BYTE&&(xe=o.RGBA8UI),re===o.UNSIGNED_SHORT&&(xe=o.RGBA16UI),re===o.UNSIGNED_INT&&(xe=o.RGBA32UI),re===o.BYTE&&(xe=o.RGBA8I),re===o.SHORT&&(xe=o.RGBA16I),re===o.INT&&(xe=o.RGBA32I)),R===o.RGB&&(re===o.UNSIGNED_SHORT&&Ge&&(xe=Ge.RGB16_EXT),re===o.SHORT&&Ge&&(xe=Ge.RGB16_SNORM_EXT),re===o.UNSIGNED_INT_5_9_9_9_REV&&(xe=o.RGB9_E5),re===o.UNSIGNED_INT_10F_11F_11F_REV&&(xe=o.R11F_G11F_B10F)),R===o.RGBA){const Ee=Fe?Zu:kt.getTransfer(ve);re===o.FLOAT&&(xe=o.RGBA32F),re===o.HALF_FLOAT&&(xe=o.RGBA16F),re===o.UNSIGNED_BYTE&&(xe=Ee===sn?o.SRGB8_ALPHA8:o.RGBA8),re===o.UNSIGNED_SHORT&&Ge&&(xe=Ge.RGBA16_EXT),re===o.SHORT&&Ge&&(xe=Ge.RGBA16_SNORM_EXT),re===o.UNSIGNED_SHORT_4_4_4_4&&(xe=o.RGBA4),re===o.UNSIGNED_SHORT_5_5_5_1&&(xe=o.RGB5_A1)}return(xe===o.R16F||xe===o.R32F||xe===o.RG16F||xe===o.RG32F||xe===o.RGBA16F||xe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),xe}function E(B,R){let re;return B?R===null||R===Sa||R===So?re=o.DEPTH24_STENCIL8:R===ga?re=o.DEPTH32F_STENCIL8:R===Bl&&(re=o.DEPTH24_STENCIL8,yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Sa||R===So?re=o.DEPTH_COMPONENT24:R===ga?re=o.DEPTH_COMPONENT32F:R===Bl&&(re=o.DEPTH_COMPONENT16),re}function L(B,R){return O(B)===!0||B.isFramebufferTexture&&B.minFilter!==Wn&&B.minFilter!==fi?Math.log2(Math.max(R.width,R.height))+1:B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?R.mipmaps.length:1}function Y(B){const R=new WeakRef(B);s.get(B).__ref=R,w.add(R),N.register(B,R,R)}function F(B){const R=s.get(B).__ref;R!==void 0&&(w.delete(R),N.unregister(R))}function G(B){he(B.target)}function Z(B){q(B.target)}function he(B){B.removeEventListener("dispose",G),F(B),P(B),B.isVideoTexture&&_.delete(B),B.isHTMLTexture&&g.delete(B)}function q(B){B.removeEventListener("dispose",Z),F(B),ie(B)}function ae(){for(const B of w){const R=B.deref();R!==void 0&&(R.isRenderTarget===!0?q(R):he(R))}w.clear(),g.clear()}function P(B){const R=s.get(B);if(R.__webglInit===void 0)return;const re=B.source,we=M.get(re);if(we){const ve=we[R.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&H(B),Object.keys(we).length===0&&M.delete(re)}s.remove(B)}function H(B){const R=s.get(B);o.deleteTexture(R.__webglTexture);const re=B.source,we=M.get(re);delete we[R.__cacheKey],d.memory.textures--}function ie(B){const R=s.get(B);R.__depthDisposeCallback&&R.__depthDisposeCallback();const re=B.depthTexture;if(re&&re.renderTarget===B&&he(re),B.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(R.__webglFramebuffer[ve]))for(let Fe=0;Fe<R.__webglFramebuffer[ve].length;Fe++)o.deleteFramebuffer(R.__webglFramebuffer[ve][Fe]);else o.deleteFramebuffer(R.__webglFramebuffer[ve]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[ve])}else{if(Array.isArray(R.__webglFramebuffer))for(let ve=0;ve<R.__webglFramebuffer.length;ve++)o.deleteFramebuffer(R.__webglFramebuffer[ve]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ve=0;ve<R.__webglColorRenderbuffer.length;ve++)R.__webglColorRenderbuffer[ve]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[ve]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const we=B.textures;for(let ve=0,Fe=we.length;ve<Fe;ve++){const Ge=s.get(we[ve]);Ge.__webglTexture&&(o.deleteTexture(Ge.__webglTexture),d.memory.textures--),s.remove(we[ve])}s.remove(B)}let Q=0;function ce(){Q=0}function Se(){return Q}function je(B){Q=B}function Ze(){const B=Q;return B>=l.maxTextures&&yt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+l.maxTextures),Q+=1,B}function A(B){const R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.mipmapsAutoUpdate),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function K(B,R){const re=s.get(B);if(B.isVideoTexture&&jt(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&re.__version!==B.version){const we=B.image;if(we===null)yt("WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)yt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(re,B,R);return}}else B.isExternalTexture&&(re.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,re.__webglTexture,o.TEXTURE0+R)}function pe(B,R){const re=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&re.__version!==B.version){mt(re,B,R);return}else B.isExternalTexture&&(re.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,re.__webglTexture,o.TEXTURE0+R)}function ye(B,R){const re=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&re.__version!==B.version){mt(re,B,R);return}i.bindTexture(o.TEXTURE_3D,re.__webglTexture,o.TEXTURE0+R)}function be(B,R){const re=s.get(B);if(B.version>0&&re.__version!==B.version){St(re,B,R);return}i.bindTexture(o.TEXTURE_CUBE_MAP,re.__webglTexture,o.TEXTURE0+R)}const Ne={[Np]:o.REPEAT,[Xa]:o.CLAMP_TO_EDGE,[Dp]:o.MIRRORED_REPEAT},et={[Wn]:o.NEAREST,[SE]:o.NEAREST_MIPMAP_NEAREST,[fu]:o.NEAREST_MIPMAP_LINEAR,[fi]:o.LINEAR,[qh]:o.LINEAR_MIPMAP_NEAREST,[Us]:o.LINEAR_MIPMAP_LINEAR},Re={[TE]:o.NEVER,[ky]:o.ALWAYS,[AE]:o.LESS,[zy]:o.LEQUAL,[wE]:o.EQUAL,[Hy]:o.GEQUAL,[RE]:o.GREATER,[CE]:o.NOTEQUAL};function He(B,R){if(R.type===ga&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===fi||R.magFilter===qh||R.magFilter===fu||R.magFilter===Us||R.minFilter===fi||R.minFilter===qh||R.minFilter===fu||R.minFilter===Us)&&yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(B,o.TEXTURE_WRAP_S,Ne[R.wrapS]),o.texParameteri(B,o.TEXTURE_WRAP_T,Ne[R.wrapT]),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,Ne[R.wrapR]),o.texParameteri(B,o.TEXTURE_MAG_FILTER,et[R.magFilter]),o.texParameteri(B,o.TEXTURE_MIN_FILTER,et[R.minFilter]),R.compareFunction&&(o.texParameteri(B,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(B,o.TEXTURE_COMPARE_FUNC,Re[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Wn||R.minFilter!==fu&&R.minFilter!==Us||R.type===ga&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const re=t.get("EXT_texture_filter_anisotropic");o.texParameterf(B,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function J(B,R){let re=!1;B.__webglInit===void 0&&(B.__webglInit=!0,R.addEventListener("dispose",G),Y(R));const we=R.source;let ve=M.get(we);ve===void 0&&(ve={},M.set(we,ve));const Fe=A(R);if(Fe!==B.__cacheKey){ve[Fe]===void 0&&(ve[Fe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,re=!0),ve[Fe].usedTimes++;const Ge=ve[B.__cacheKey];Ge!==void 0&&(ve[B.__cacheKey].usedTimes--,Ge.usedTimes===0&&H(R)),B.__cacheKey=Fe,B.__webglTexture=ve[Fe].texture}return re}function De(B,R,re){return Math.floor(Math.floor(B/re)/R)}function xt(B,R,re,we){const Fe=B.updateRanges;if(Fe.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,re,we,R.data);else{Fe.sort((j,Me)=>j.start-Me.start);let Ge=0;for(let j=1;j<Fe.length;j++){const Me=Fe[Ge],_e=Fe[j],Be=Me.start+Me.count,Le=De(_e.start,R.width,4),ze=De(Me.start,R.width,4);_e.start<=Be+1&&Le===ze&&De(_e.start+_e.count-1,R.width,4)===Le?Me.count=Math.max(Me.count,_e.start+_e.count-Me.start):(++Ge,Fe[Ge]=_e)}Fe.length=Ge+1;const xe=i.getParameter(o.UNPACK_ROW_LENGTH),Ee=i.getParameter(o.UNPACK_SKIP_PIXELS),Ie=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let j=0,Me=Fe.length;j<Me;j++){const _e=Fe[j],Be=Math.floor(_e.start/4),Le=Math.ceil(_e.count/4),ze=Be%R.width,st=Math.floor(Be/R.width),ft=Le,Ce=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(o.UNPACK_SKIP_ROWS,st),i.texSubImage2D(o.TEXTURE_2D,0,ze,st,ft,Ce,re,we,R.data)}B.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,xe),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ie)}}function mt(B,R,re){let we=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(we=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(we=o.TEXTURE_3D);const ve=J(B,R),Fe=R.source;i.bindTexture(we,B.__webglTexture,o.TEXTURE0+re);const Ge=s.get(Fe);if(Fe.version!==Ge.__version||ve===!0){if(i.activeTexture(o.TEXTURE0+re),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const Ce=kt.getPrimaries(kt.workingColorSpace),Je=R.colorSpace===Ls?null:kt.getPrimaries(R.colorSpace),Tt=R.colorSpace===Ls||Ce===Je?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}i.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment);let Ee=T(R.image,!1,l.maxTextureSize);Ee=it(R,Ee);const Ie=u.convert(R.format,R.colorSpace),j=u.convert(R.type);let Me=I(R.internalFormat,Ie,j,R.normalized,R.colorSpace,R.isVideoTexture);He(we,R);let _e;const Be=R.mipmaps,Le=R.isVideoTexture!==!0,ze=Ge.__version===void 0||ve===!0,st=Fe.dataReady,ft=L(R,Ee);if(R.isDepthTexture)Me=E(R.format===Os,R.type),ze&&(Le?i.texStorage2D(o.TEXTURE_2D,1,Me,Ee.width,Ee.height):i.texImage2D(o.TEXTURE_2D,0,Me,Ee.width,Ee.height,0,Ie,j,null));else if(R.isDataTexture)if(Be.length>0){Le&&ze&&i.texStorage2D(o.TEXTURE_2D,ft,Me,Be[0].width,Be[0].height);for(let Ce=0,Je=Be.length;Ce<Je;Ce++)_e=Be[Ce],Le?st&&i.texSubImage2D(o.TEXTURE_2D,Ce,0,0,_e.width,_e.height,Ie,j,_e.data):i.texImage2D(o.TEXTURE_2D,Ce,Me,_e.width,_e.height,0,Ie,j,_e.data);R.generateMipmaps=!1}else Le?(ze&&i.texStorage2D(o.TEXTURE_2D,ft,Me,Ee.width,Ee.height),st&&xt(R,Ee,Ie,j)):i.texImage2D(o.TEXTURE_2D,0,Me,Ee.width,Ee.height,0,Ie,j,Ee.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Le&&ze&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ft,Me,Be[0].width,Be[0].height,Ee.depth);for(let Ce=0,Je=Be.length;Ce<Je;Ce++)if(_e=Be[Ce],R.format!==xa)if(Ie!==null)if(Le){if(st)if(R.layerUpdates.size>0){const Tt=L_(_e.width,_e.height,R.format,R.type);for(const We of R.layerUpdates){const Kt=_e.data.subarray(We*Tt/_e.data.BYTES_PER_ELEMENT,(We+1)*Tt/_e.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ce,0,0,We,_e.width,_e.height,1,Ie,Kt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ce,0,0,0,_e.width,_e.height,Ee.depth,Ie,_e.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ce,Me,_e.width,_e.height,Ee.depth,0,_e.data,0,0);else yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?st&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ce,0,0,0,_e.width,_e.height,Ee.depth,Ie,j,_e.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ce,Me,_e.width,_e.height,Ee.depth,0,Ie,j,_e.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{Le&&ze&&i.texStorage2D(o.TEXTURE_2D,ft,Me,Be[0].width,Be[0].height);for(let Ce=0,Je=Be.length;Ce<Je;Ce++)_e=Be[Ce],R.format!==xa?Ie!==null?Le?st&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ce,0,0,_e.width,_e.height,Ie,_e.data):i.compressedTexImage2D(o.TEXTURE_2D,Ce,Me,_e.width,_e.height,0,_e.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?st&&i.texSubImage2D(o.TEXTURE_2D,Ce,0,0,_e.width,_e.height,Ie,j,_e.data):i.texImage2D(o.TEXTURE_2D,Ce,Me,_e.width,_e.height,0,Ie,j,_e.data)}else if(R.isDataArrayTexture)if(Le){if(ze&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ft,Me,Ee.width,Ee.height,Ee.depth),st)if(R.layerUpdates.size>0){const Ce=L_(Ee.width,Ee.height,R.format,R.type);for(const Je of R.layerUpdates){const Tt=Ee.data.subarray(Je*Ce/Ee.data.BYTES_PER_ELEMENT,(Je+1)*Ce/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Je,Ee.width,Ee.height,1,Ie,j,Tt)}R.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ie,j,Ee.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Me,Ee.width,Ee.height,Ee.depth,0,Ie,j,Ee.data);else if(R.isData3DTexture)Le?(ze&&i.texStorage3D(o.TEXTURE_3D,ft,Me,Ee.width,Ee.height,Ee.depth),st&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ie,j,Ee.data)):i.texImage3D(o.TEXTURE_3D,0,Me,Ee.width,Ee.height,Ee.depth,0,Ie,j,Ee.data);else if(R.isFramebufferTexture){if(ze)if(Le)i.texStorage2D(o.TEXTURE_2D,ft,Me,Ee.width,Ee.height);else{let Ce=Ee.width,Je=Ee.height;for(let Tt=0;Tt<ft;Tt++)i.texImage2D(o.TEXTURE_2D,Tt,Me,Ce,Je,0,Ie,j,null),Ce>>=1,Je>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in o){const Ce=o.canvas;if(Ce.hasAttribute("layoutsubtree")||Ce.setAttribute("layoutsubtree","true"),Ee.parentNode!==Ce){Ce.appendChild(Ee),g.add(R),Ce.onpaint=Je=>{const Tt=Je.changedElements;for(const We of g)Tt.includes(We.image)&&(We.needsUpdate=!0)},Ce.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Ee);else{const Tt=o.RGBA,We=o.RGBA,Kt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Tt,We,Kt,Ee)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Le&&ze){const Ce=ot(Be[0]);i.texStorage2D(o.TEXTURE_2D,ft,Me,Ce.width,Ce.height)}for(let Ce=0,Je=Be.length;Ce<Je;Ce++)_e=Be[Ce],Le?st&&i.texSubImage2D(o.TEXTURE_2D,Ce,0,0,Ie,j,_e):i.texImage2D(o.TEXTURE_2D,Ce,Me,Ie,j,_e);R.generateMipmaps=!1}else if(Le){if(ze){const Ce=ot(Ee);i.texStorage2D(o.TEXTURE_2D,ft,Me,Ce.width,Ce.height)}st&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ie,j,Ee)}else i.texImage2D(o.TEXTURE_2D,0,Me,Ie,j,Ee);O(R)&&R.mipmapsAutoUpdate===!0&&U(we),Ge.__version=Fe.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function St(B,R,re){if(R.image.length!==6)return;const we=J(B,R),ve=R.source;i.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+re);const Fe=s.get(ve);if(ve.version!==Fe.__version||we===!0){i.activeTexture(o.TEXTURE0+re);const Ge=kt.getPrimaries(kt.workingColorSpace),xe=R.colorSpace===Ls?null:kt.getPrimaries(R.colorSpace),Ee=R.colorSpace===Ls||Ge===xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ie=R.isCompressedTexture||R.image[0].isCompressedTexture,j=R.image[0]&&R.image[0].isDataTexture,Me=[];for(let We=0;We<6;We++)!Ie&&!j?Me[We]=T(R.image[We],!0,l.maxCubemapSize):Me[We]=j?R.image[We].image:R.image[We],Me[We]=it(R,Me[We]);const _e=Me[0],Be=u.convert(R.format,R.colorSpace),Le=u.convert(R.type);let ze=I(R.internalFormat,Be,Le,R.normalized,R.colorSpace);const st=R.isVideoTexture!==!0,ft=Fe.__version===void 0||we===!0,Ce=ve.dataReady;let Je=L(R,_e);He(o.TEXTURE_CUBE_MAP,R);let Tt;if(R.isDepthTexture){if(ze=E(R.format===Os,R.type),ft)if(st)i.texStorage2D(o.TEXTURE_CUBE_MAP,1,ze,_e.width,_e.height);else for(let We=0;We<6;We++)i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,ze,_e.width,_e.height,0,Be,Le,null)}else if(Ie){st&&ft&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Je,ze,_e.width,_e.height);for(let We=0;We<6;We++){Tt=Me[We].mipmaps;for(let Kt=0;Kt<Tt.length;Kt++){const dn=Tt[Kt];R.format!==xa?Be!==null?st?Ce&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,Kt,0,0,dn.width,dn.height,Be,dn.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,Kt,ze,dn.width,dn.height,0,dn.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,Kt,0,0,dn.width,dn.height,Be,Le,dn.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,Kt,ze,dn.width,dn.height,0,Be,Le,dn.data)}}}else{if(Tt=R.mipmaps,st&&ft){Tt.length>0&&Je++;const We=ot(Me[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Je,ze,We.width,We.height)}for(let We=0;We<6;We++)if(j){st?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,0,0,Me[We].width,Me[We].height,Be,Le,Me[We].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,ze,Me[We].width,Me[We].height,0,Be,Le,Me[We].data);for(let Kt=0;Kt<Tt.length;Kt++){const hi=Tt[Kt].image[We].image;st?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,Kt+1,0,0,hi.width,hi.height,Be,Le,hi.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,Kt+1,ze,hi.width,hi.height,0,Be,Le,hi.data)}}else{st?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,0,0,Be,Le,Me[We]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,ze,Be,Le,Me[We]);for(let Kt=0;Kt<Tt.length;Kt++){const dn=Tt[Kt];st?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,Kt+1,0,0,Be,Le,dn.image[We]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,Kt+1,ze,Be,Le,dn.image[We])}}}O(R)&&R.mipmapsAutoUpdate===!0&&U(o.TEXTURE_CUBE_MAP),Fe.__version=ve.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function Ke(B,R,re,we,ve,Fe){const Ge=u.convert(re.format,re.colorSpace),xe=u.convert(re.type),Ee=I(re.internalFormat,Ge,xe,re.normalized,re.colorSpace),Ie=s.get(R),j=s.get(re);if(j.__renderTarget=R,!Ie.__hasExternalTextures){const Me=Math.max(1,R.width>>Fe),_e=Math.max(1,R.height>>Fe);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?i.texImage3D(ve,Fe,Ee,Me,_e,R.depth,0,Ge,xe,null):i.texImage2D(ve,Fe,Ee,Me,_e,0,Ge,xe,null)}i.bindFramebuffer(o.FRAMEBUFFER,B),Pe(R)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,we,ve,j.__webglTexture,0,vt(R)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,we,ve,j.__webglTexture,Fe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function de(B,R,re){if(o.bindRenderbuffer(o.RENDERBUFFER,B),R.depthBuffer){const we=R.depthTexture,ve=we&&we.isDepthTexture?we.type:null,Fe=E(R.stencilBuffer,ve),Ge=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Pe(R)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,vt(R),Fe,R.width,R.height):re?o.renderbufferStorageMultisample(o.RENDERBUFFER,vt(R),Fe,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Fe,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ge,o.RENDERBUFFER,B)}else{const we=R.textures;for(let ve=0;ve<we.length;ve++){const Fe=we[ve],Ge=u.convert(Fe.format,Fe.colorSpace),xe=u.convert(Fe.type),Ee=I(Fe.internalFormat,Ge,xe,Fe.normalized,Fe.colorSpace);Pe(R)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,vt(R),Ee,R.width,R.height):re?o.renderbufferStorageMultisample(o.RENDERBUFFER,vt(R),Ee,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Ee,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function rt(B,R,re){const we=R.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ve=s.get(R.depthTexture);ve.__renderTarget=R;const Fe=we?R.depthTexture.image[0]:R.depthTexture.image;(!ve.__webglTexture||Fe.width!==R.width||Fe.height!==R.height)&&(Fe.width=R.width,Fe.height=R.height,R.depthTexture.needsUpdate=!0),we?be(R.depthTexture,0):K(R.depthTexture,0);const Ge=ve.__webglTexture,xe=vt(R),Ee=we?o.TEXTURE_CUBE_MAP_POSITIVE_X+re:o.TEXTURE_2D,Ie=R.depthTexture.format===Os?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(R.depthTexture.format===Ps)Pe(R)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ie,Ee,Ge,0,xe):o.framebufferTexture2D(o.FRAMEBUFFER,Ie,Ee,Ge,0);else if(R.depthTexture.format===Os)Pe(R)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ie,Ee,Ge,0,xe):o.framebufferTexture2D(o.FRAMEBUFFER,Ie,Ee,Ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(B){const R=s.get(B),re=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){const we=B.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),we){const ve=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,we.removeEventListener("dispose",ve)};we.addEventListener("dispose",ve),R.__depthDisposeCallback=ve}R.__boundDepthTexture=we}if(B.depthTexture&&!R.__autoAllocateDepthBuffer)if(re)for(let we=0;we<6;we++)rt(R.__webglFramebuffer[we],B,we);else B.texture.mipmaps.length>0?rt(R.__webglFramebuffer[0],B,0):rt(R.__webglFramebuffer,B,0);else if(re){R.__webglDepthbuffer=[];for(let we=0;we<6;we++)if(i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[we]),R.__webglDepthbuffer[we]===void 0)R.__webglDepthbuffer[we]=o.createRenderbuffer(),de(R.__webglDepthbuffer[we],B,!1);else{const ve=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Fe=R.__webglDepthbuffer[we];o.bindRenderbuffer(o.RENDERBUFFER,Fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,Fe)}}else if(B.texture.mipmaps.length>0?i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),de(R.__webglDepthbuffer,B,!1);else{const ve=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Fe=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,Fe)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Wt(B,R,re){const we=s.get(B);R!==void 0&&Ke(we.__webglFramebuffer,B,B.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),re!==void 0&&ut(B)}function gt(B){const R=B.texture,re=s.get(B),we=s.get(R);B.addEventListener("dispose",Z),Y(B);const ve=B.textures,Fe=B.isWebGLCubeRenderTarget===!0,Ge=ve.length>1;if(Ge||(we.__webglTexture===void 0&&(we.__webglTexture=o.createTexture()),we.__version=R.version,d.memory.textures++),Fe){re.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(R.mipmaps.length>0){re.__webglFramebuffer[xe]=[];for(let Ee=0;Ee<R.mipmaps.length;Ee++)re.__webglFramebuffer[xe][Ee]=o.createFramebuffer()}else re.__webglFramebuffer[xe]=o.createFramebuffer()}else{if(R.mipmaps.length>0){re.__webglFramebuffer=[];for(let xe=0;xe<R.mipmaps.length;xe++)re.__webglFramebuffer[xe]=o.createFramebuffer()}else re.__webglFramebuffer=o.createFramebuffer();if(Ge)for(let xe=0,Ee=ve.length;xe<Ee;xe++){const Ie=s.get(ve[xe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=o.createTexture(),d.memory.textures++)}if(B.samples>0&&Pe(B)===!1){re.__webglMultisampledFramebuffer=o.createFramebuffer(),re.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let xe=0;xe<ve.length;xe++){const Ee=ve[xe];re.__webglColorRenderbuffer[xe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,re.__webglColorRenderbuffer[xe]);const Ie=u.convert(Ee.format,Ee.colorSpace),j=u.convert(Ee.type),Me=I(Ee.internalFormat,Ie,j,Ee.normalized,Ee.colorSpace,B.isXRRenderTarget===!0),_e=vt(B);o.renderbufferStorageMultisample(o.RENDERBUFFER,_e,Me,B.width,B.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.RENDERBUFFER,re.__webglColorRenderbuffer[xe])}o.bindRenderbuffer(o.RENDERBUFFER,null),B.depthBuffer&&(re.__webglDepthRenderbuffer=o.createRenderbuffer(),de(re.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Fe){i.bindTexture(o.TEXTURE_CUBE_MAP,we.__webglTexture),He(o.TEXTURE_CUBE_MAP,R);for(let xe=0;xe<6;xe++)if(R.mipmaps.length>0)for(let Ee=0;Ee<R.mipmaps.length;Ee++)Ke(re.__webglFramebuffer[xe][Ee],B,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ee);else Ke(re.__webglFramebuffer[xe],B,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);O(R)?U(o.TEXTURE_CUBE_MAP):R.mipmaps.length>0&&o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),i.unbindTexture()}else if(Ge){for(let xe=0,Ee=ve.length;xe<Ee;xe++){const Ie=ve[xe],j=s.get(Ie);let Me=o.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Me=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Me,j.__webglTexture),He(Me,Ie),Ke(re.__webglFramebuffer,B,Ie,o.COLOR_ATTACHMENT0+xe,Me,0),O(Ie)&&U(Me)}i.unbindTexture()}else{let xe=o.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(xe=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(xe,we.__webglTexture),He(xe,R),R.mipmaps.length>0)for(let Ee=0;Ee<R.mipmaps.length;Ee++)Ke(re.__webglFramebuffer[Ee],B,R,o.COLOR_ATTACHMENT0,xe,Ee);else Ke(re.__webglFramebuffer,B,R,o.COLOR_ATTACHMENT0,xe,0);O(R)?U(xe):R.mipmaps.length>0&&o.texParameteri(xe,o.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),i.unbindTexture()}B.depthBuffer&&ut(B)}function V(B){const R=B.textures;for(let re=0,we=R.length;re<we;re++){const ve=R[re];if(O(ve)&&ve.mipmapsAutoUpdate===!0){const Fe=z(B),Ge=s.get(ve).__webglTexture;i.bindTexture(Fe,Ge),U(Fe),i.unbindTexture()}}}const Nt=[];function ct(B){if(B.samples>0){if(Pe(B)===!1){const R=B.textures,re=B.width,we=B.height;let ve=o.COLOR_BUFFER_BIT;const Fe=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ge=s.get(B),xe=R.length>1;if(xe)for(let Ie=0;Ie<R.length;Ie++)i.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),B.texture.mipmaps.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ie=0;Ie<R.length;Ie++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),xe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ie]);const j=s.get(R[Ie]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,j,0)}o.blitFramebuffer(0,0,re,we,0,0,re,we,ve,o.NEAREST),x===!0&&(Nt.length=0,Nt.push(o.COLOR_ATTACHMENT0+Ie),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&Nt.push(Fe),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Nt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),xe)for(let Ie=0;Ie<R.length;Ie++){i.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ie]);const j=s.get(R[Ie]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.TEXTURE_2D,j,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&x){const R=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function vt(B){return Math.min(l.maxSamples,B.samples)}function Pe(B){const R=s.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function jt(B){const R=d.render.frame;_.get(B)!==R&&(_.set(B,R),B.update())}function it(B,R){const re=B.colorSpace,we=B.format,ve=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||re!==Ku&&re!==Ls&&(kt.getTransfer(re)===sn?(we!==xa||ve!==Ii)&&yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",re)),R}function ot(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(m.width=B.naturalWidth||B.width,m.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(m.width=B.displayWidth,m.height=B.displayHeight):(m.width=B.width,m.height=B.height),m}this.allocateTextureUnit=Ze,this.resetTextureUnits=ce,this.getTextureUnits=Se,this.setTextureUnits=je,this.setTexture2D=K,this.setTexture2DArray=pe,this.setTexture3D=ye,this.setTextureCube=be,this.rebindTextures=Wt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=Pe,this.dispose=ae}function iR(o,t){function i(s,l=Ls){let u;const d=kt.getTransfer(l);if(s===Ii)return o.UNSIGNED_BYTE;if(s===ym)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Sm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Oy)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Py)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ly)return o.BYTE;if(s===Uy)return o.SHORT;if(s===Bl)return o.UNSIGNED_SHORT;if(s===_m)return o.INT;if(s===Sa)return o.UNSIGNED_INT;if(s===ga)return o.FLOAT;if(s===ba)return o.HALF_FLOAT;if(s===Fy)return o.ALPHA;if(s===Iy)return o.RGB;if(s===xa)return o.RGBA;if(s===Ps)return o.DEPTH_COMPONENT;if(s===Os)return o.DEPTH_STENCIL;if(s===By)return o.RED;if(s===bm)return o.RED_INTEGER;if(s===fr)return o.RG;if(s===Mm)return o.RG_INTEGER;if(s===Em)return o.RGBA_INTEGER;if(s===Iu||s===Bu||s===zu||s===Hu)if(d===sn)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Iu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Iu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lp||s===Up||s===Op||s===Pp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Lp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Up)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Op)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fp||s===Ip||s===Bp||s===zp||s===Hp||s===Wu||s===kp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Fp||s===Ip)return d===sn?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Bp)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===zp)return u.COMPRESSED_R11_EAC;if(s===Hp)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Wu)return u.COMPRESSED_RG11_EAC;if(s===kp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Gp||s===Vp||s===jp||s===qp||s===Xp||s===Wp||s===Yp||s===Kp||s===Zp||s===Qp||s===Jp||s===$p||s===em||s===tm)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Gp)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vp)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jp)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qp)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xp)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wp)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yp)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kp)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zp)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qp)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jp)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$p)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===em)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tm)return d===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nm||s===im||s===am)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===nm)return d===sn?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===im)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===am)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sm||s===rm||s===Yu||s===om)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===sm)return u.COMPRESSED_RED_RGTC1_EXT;if(s===rm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yu)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===om)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===So?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const aR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Ky(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ta({vertexShader:aR,fragmentShader:sR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Bi(new Vl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oR extends hr{constructor(t,i){super();const s=this;let l=null,u=1,d=null,p="local-floor",x=1,m=null,_=null,g=null,v=null,M=null,w=null;const N=typeof XRWebGLBinding<"u",b=new rR,S={},T=i.getContextAttributes();let O=null,U=null;const z=[],I=[],E=new Vt;let L=null,Y=null;const F=new Ji;F.viewport=new gn;const G=new Ji;G.viewport=new gn;const Z=[F,G],he=new vT;let q=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let K=z[A];return K===void 0&&(K=new ep,z[A]=K),K.getTargetRaySpace()},this.getControllerGrip=function(A){let K=z[A];return K===void 0&&(K=new ep,z[A]=K),K.getGripSpace()},this.getHand=function(A){let K=z[A];return K===void 0&&(K=new ep,z[A]=K),K.getHandSpace()};function P(A){const K=I.indexOf(A.inputSource);if(K===-1)return;const pe=z[K];pe!==void 0&&(pe.update(A.inputSource,A.frame,m||d),pe.dispatchEvent({type:A.type,data:A.inputSource}))}function H(){l.removeEventListener("select",P),l.removeEventListener("selectstart",P),l.removeEventListener("selectend",P),l.removeEventListener("squeeze",P),l.removeEventListener("squeezestart",P),l.removeEventListener("squeezeend",P),l.removeEventListener("end",H),l.removeEventListener("inputsourceschange",ie);for(let A=0;A<z.length;A++){const K=I[A];K!==null&&(I[A]=null,z[A].disconnect(K))}q=null,ae=null,b.reset();for(const A in S)delete S[A];if(t.setRenderTarget(O),M=null,v=null,g=null,l=null,U=null,Ze.stop(),s.isPresenting=!1,t.setPixelRatio(L),t.setSize(E.width,E.height,!1),Y!==null){const A=Y.camera;A.fov=Y.fov,A.zoom=Y.zoom,A.updateProjectionMatrix(),Y=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){u=A,s.isPresenting===!0&&yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){p=A,s.isPresenting===!0&&yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(A){m=A},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return g===null&&N&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(A){if(l=A,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",P),l.addEventListener("selectstart",P),l.addEventListener("selectend",P),l.addEventListener("squeeze",P),l.addEventListener("squeezestart",P),l.addEventListener("squeezeend",P),l.addEventListener("end",H),l.addEventListener("inputsourceschange",ie),T.xrCompatible!==!0&&await i.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(E),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ye=null,be=null;T.depth&&(be=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,pe=T.stencil?Os:Ps,ye=T.stencil?So:Sa);const Ne={colorFormat:i.RGBA8,depthFormat:be,scaleFactor:u};g=this.getBinding(),v=g.createProjectionLayer(Ne),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new va(v.textureWidth,v.textureHeight,{format:xa,type:Ii,depthTexture:new bo(v.textureWidth,v.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const pe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,pe),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new va(M.framebufferWidth,M.framebufferHeight,{format:xa,type:Ii,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(x),m=null,d=await l.requestReferenceSpace(p),Ze.setContext(l),Ze.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ie(A){for(let K=0;K<A.removed.length;K++){const pe=A.removed[K],ye=I.indexOf(pe);ye>=0&&(I[ye]=null,z[ye].disconnect(pe))}for(let K=0;K<A.added.length;K++){const pe=A.added[K];let ye=I.indexOf(pe);if(ye===-1){for(let Ne=0;Ne<z.length;Ne++)if(Ne>=I.length){I.push(pe),ye=Ne;break}else if(I[Ne]===null){I[Ne]=pe,ye=Ne;break}if(ye===-1)break}const be=z[ye];be&&be.connect(pe)}}function Q(A,K){K===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(K.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(l===null)return;let K=A.near,pe=A.far;b.texture!==null&&(b.depthNear>0&&(K=b.depthNear),b.depthFar>0&&(pe=b.depthFar)),he.near=G.near=F.near=K,he.far=G.far=F.far=pe,(q!==he.near||ae!==he.far)&&(l.updateRenderState({depthNear:he.near,depthFar:he.far}),q=he.near,ae=he.far),he.layers.mask=A.layers.mask|6,F.layers.mask=he.layers.mask&-5,G.layers.mask=he.layers.mask&-3;const ye=A.parent,be=he.cameras;Q(he,ye);for(let Ne=0;Ne<be.length;Ne++)Q(be[Ne],ye);he.projectionMatrix.copy(F.projectionMatrix),he.projectionMatrixInverse.copy(F.projectionMatrixInverse),Y===null&&A.isPerspectiveCamera&&(Y={camera:A,fov:A.fov,zoom:A.zoom}),ce(A,he,ye)};function ce(A,K,pe){pe===null?A.matrix.copy(K.matrixWorld):(A.matrix.copy(pe.matrixWorld),A.matrix.invert(),A.matrix.multiply(K.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(K.projectionMatrix),A.projectionMatrixInverse.copy(K.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=lm*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return he},this.getFoveation=function(){if(!(v===null&&M===null))return x},this.setFoveation=function(A){x=A,v!==null&&(v.fixedFoveation=A),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=A)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(he)},this.getCameraTexture=function(A){return S[A]};let Se=null;function je(A,K){if(_=K.getViewerPose(m||d),w=K,_!==null){const pe=_.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let ye=!1;pe.length!==he.cameras.length&&(he.cameras.length=0,ye=!0);for(let Re=0;Re<pe.length;Re++){const He=pe[Re];let J=null;if(M!==null)J=M.getViewport(He);else{const xt=g.getViewSubImage(v,He);J=xt.viewport,Re===0&&(t.setRenderTargetTextures(U,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(U))}let De=Z[Re];De===void 0&&(De=new Ji,De.layers.enable(Re),De.viewport=new gn,Z[Re]=De),De.matrix.fromArray(He.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(He.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(J.x,J.y,J.width,J.height),Re===0&&(he.matrix.copy(De.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale)),ye===!0&&he.cameras.push(De)}const be=l.enabledFeatures;if(be&&be.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){g=s.getBinding();const Re=g.getDepthInformation(pe[0]);Re&&Re.isValid&&Re.texture&&b.init(Re,l.renderState)}if(be&&be.includes("camera-access")&&N){t.state.unbindTexture(),g=s.getBinding();for(let Re=0;Re<pe.length;Re++){const He=pe[Re].camera;if(He){let J=S[He];J||(J=new Ky,S[He]=J);const De=g.getCameraImage(He);J.sourceTexture=De}}}}for(let pe=0;pe<z.length;pe++){const ye=I[pe],be=z[pe];ye!==null&&be!==void 0&&be.update(ye,K,m||d)}Se&&Se(A,K),K.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:K}),w=null}const Ze=new Jy;Ze.setAnimationLoop(je),this.setAnimationLoop=function(A){Se=A},this.dispose=function(){}}}const lR=new xn,lS=new bt;lS.set(-1,0,0,0,1,0,0,0,1);function cR(o,t){function i(b,S){b.matrixAutoUpdate===!0&&b.updateMatrix(),S.value.copy(b.matrix)}function s(b,S){S.color.getRGB(b.fogColor.value,Zy(o)),S.isFog?(b.fogNear.value=S.near,b.fogFar.value=S.far):S.isFogExp2&&(b.fogDensity.value=S.density)}function l(b,S,T,O,U){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?u(b,S):S.isMeshLambertMaterial?(u(b,S),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(b,S),g(b,S)):S.isMeshPhongMaterial?(u(b,S),_(b,S),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(b,S),v(b,S),S.isMeshPhysicalMaterial&&M(b,S,U)):S.isMeshMatcapMaterial?(u(b,S),w(b,S)):S.isMeshDepthMaterial?u(b,S):S.isMeshDistanceMaterial?(u(b,S),N(b,S)):S.isMeshNormalMaterial?u(b,S):S.isLineBasicMaterial?(d(b,S),S.isLineDashedMaterial&&p(b,S)):S.isPointsMaterial?x(b,S,T,O):S.isSpriteMaterial?m(b,S):S.isShadowMaterial?(b.color.value.copy(S.color),b.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(b,S){b.opacity.value=S.opacity,S.color&&b.diffuse.value.copy(S.color),S.emissive&&b.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(b.map.value=S.map,i(S.map,b.mapTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.bumpMap&&(b.bumpMap.value=S.bumpMap,i(S.bumpMap,b.bumpMapTransform),b.bumpScale.value=S.bumpScale,S.side===ii&&(b.bumpScale.value*=-1)),S.normalMap&&(b.normalMap.value=S.normalMap,i(S.normalMap,b.normalMapTransform),b.normalScale.value.copy(S.normalScale),S.side===ii&&b.normalScale.value.negate()),S.displacementMap&&(b.displacementMap.value=S.displacementMap,i(S.displacementMap,b.displacementMapTransform),b.displacementScale.value=S.displacementScale,b.displacementBias.value=S.displacementBias),S.emissiveMap&&(b.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,b.emissiveMapTransform)),S.specularMap&&(b.specularMap.value=S.specularMap,i(S.specularMap,b.specularMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest);const T=t.get(S),O=T.envMap,U=T.envMapRotation;O&&(b.envMap.value=O,b.envMapRotation.value.setFromMatrix4(lR.makeRotationFromEuler(U)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(lS),b.reflectivity.value=S.reflectivity,b.ior.value=S.ior,b.refractionRatio.value=S.refractionRatio),S.lightMap&&(b.lightMap.value=S.lightMap,b.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,b.lightMapTransform)),S.aoMap&&(b.aoMap.value=S.aoMap,b.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,b.aoMapTransform))}function d(b,S){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,S.map&&(b.map.value=S.map,i(S.map,b.mapTransform))}function p(b,S){b.dashSize.value=S.dashSize,b.totalSize.value=S.dashSize+S.gapSize,b.scale.value=S.scale}function x(b,S,T,O){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,b.size.value=S.size*T,b.scale.value=O*.5,S.map&&(b.map.value=S.map,i(S.map,b.uvTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest)}function m(b,S){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,b.rotation.value=S.rotation,S.map&&(b.map.value=S.map,i(S.map,b.mapTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest)}function _(b,S){b.specular.value.copy(S.specular),b.shininess.value=Math.max(S.shininess,1e-4)}function g(b,S){S.gradientMap&&(b.gradientMap.value=S.gradientMap)}function v(b,S){b.metalness.value=S.metalness,S.metalnessMap&&(b.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,b.metalnessMapTransform)),b.roughness.value=S.roughness,S.roughnessMap&&(b.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,b.roughnessMapTransform)),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)}function M(b,S,T){b.ior.value=S.ior,S.diffuseRoughness>0&&(b.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(b.diffuseRoughnessMap.value=S.diffuseRoughnessMap,i(S.diffuseRoughnessMap,b.diffuseRoughnessMapTransform))),S.sheen>0&&(b.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),b.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(b.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,b.sheenColorMapTransform)),S.sheenRoughnessMap&&(b.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,b.sheenRoughnessMapTransform))),S.clearcoat>0&&(b.clearcoat.value=S.clearcoat,b.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(b.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,b.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(b.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ii&&b.clearcoatNormalScale.value.negate())),S.dispersion>0&&(b.dispersion.value=S.dispersion),S.retroreflectivity>0&&(b.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(b.iridescence.value=S.iridescence,b.iridescenceIOR.value=S.iridescenceIOR,b.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,b.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(b.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,b.iridescenceMapTransform)),S.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),S.transmission>0&&(b.transmission.value=S.transmission,b.transmissionSamplerMap.value=T.texture,b.transmissionSamplerSize.value.set(T.width,T.height),S.transmissionMap&&(b.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,b.transmissionMapTransform)),b.thickness.value=S.thickness,S.thicknessMap&&(b.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=S.attenuationDistance,b.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(b.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(b.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=S.specularIntensity,b.specularColor.value.copy(S.specularColor),S.specularColorMap&&(b.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,b.specularColorMapTransform)),S.specularIntensityMap&&(b.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,b.specularIntensityMapTransform))}function w(b,S){S.matcap&&(b.matcap.value=S.matcap)}function N(b,S){const T=t.get(S).light;b.referencePosition.value.setFromMatrixPosition(T.matrixWorld),b.nearDistance.value=T.shadow.camera.near,b.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function uR(o,t,i,s){let l={},u={};function d(T,O){const U=O.program;s.uniformBlockBinding(T,U,l[T.id])}function p(T,O){let U=l[T.id];U===void 0&&(w(T),U=x(T),l[T.id]=U,T.addEventListener("dispose",b));const z=O.program;s.updateUBOMapping(T,z);const I=t.render.frame;u[T.id]!==I&&(m(T),u[T.id]=I)}function x(T){const O=o.createBuffer(),U=T.__size,z=T.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,U,z),o.bindBuffer(o.UNIFORM_BUFFER,null),O}function m(T){const O=l[T.id],U=T.uniforms,z=T.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let I=0,E=U.length;I<E;I++){const L=U[I];if(Array.isArray(L))for(let Y=0,F=L.length;Y<F;Y++)_(L[Y],I,Y,z);else _(L,I,0,z)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function _(T,O,U,z){if(v(T,O,U,z)===!0){const I=T.__offset,E=T.value;if(Array.isArray(E)){let L=0;for(let Y=0;Y<E.length;Y++){const F=E[Y],G=N(F,!0);g(F,T.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else g(E,T.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,I,T.__data)}}function g(T,O,U){typeof T=="number"||typeof T=="boolean"?O[U]=T:T.isMatrix3?(O[U]=T.elements[0],O[U+1]=T.elements[1],O[U+2]=T.elements[2],O[U+3]=0,O[U+4]=T.elements[3],O[U+5]=T.elements[4],O[U+6]=T.elements[5],O[U+7]=0,O[U+8]=T.elements[6],O[U+9]=T.elements[7],O[U+10]=T.elements[8],O[U+11]=0):ArrayBuffer.isView(T)?O.set(T.subarray(0,O.length-U),U):T.toArray(O,U)}function v(T,O,U,z){const I=T.value,E=O+"_"+U;if(Array.isArray(I)){z[E]===void 0&&(z[E]=[]);const L=z[E];let Y=!1;for(let F=0;F<I.length;F++)M(I[F],L,F)===!0&&(Y=!0);return Y}return M(I,z,E)}function M(T,O,U){if(O[U]===void 0)return typeof T=="number"||typeof T=="boolean"?O[U]=T:ArrayBuffer.isView(T)?O[U]=T.slice():O[U]=T.clone(),!0;{const z=O[U];if(typeof T=="number"||typeof T=="boolean"){if(z!==T)return O[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(z.equals(T)===!1)return z.copy(T),!0}}return!1}function w(T){const O=T.uniforms;let U=0;const z=16;for(let E=0,L=O.length;E<L;E++){const Y=Array.isArray(O[E])?O[E]:[O[E]];for(let F=0,G=Y.length;F<G;F++){const Z=Y[F],he=Array.isArray(Z.value)?Z.value:[Z.value],q=Array.isArray(O[E])||Array.isArray(Z.value);let ae=U;for(let H=0,ie=he.length;H<ie;H++){const Q=he[H],ce=N(Q,q),Se=U%z,je=Se%ce.boundary,Ze=Se+je;U+=je,Ze!==0&&z-Ze<ce.storage&&(U+=z-Ze),H===0&&(ae=U),U+=ce.storage}const P=Z.type==="int"?Int32Array:Z.type==="uint"?Uint32Array:Float32Array;Z.__data=new P((U-ae)/Float32Array.BYTES_PER_ELEMENT),Z.__offset=ae}}const I=U%z;return I>0&&(U+=z-I),T.__size=U,T.__cache={},this}function N(T,O){const U={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(U.boundary=4,U.storage=4):T.isVector2?(U.boundary=8,U.storage=8):T.isVector3||T.isColor?(U.boundary=16,U.storage=12):T.isVector4?(U.boundary=16,U.storage=16):T.isMatrix3?(U.boundary=16,U.storage=48):T.isMatrix4?(U.boundary=16,U.storage=64):T.isTexture?yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(U.boundary=16,U.storage=T.byteLength):yt("WebGLRenderer: Unsupported uniform value type.",T),O===!0&&(U.boundary=16,U.storage=Math.ceil(U.storage/16)*16),U}function b(T){const O=T.target;O.removeEventListener("dispose",b),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function S(){for(const T in l)o.deleteBuffer(l[T]);l={},u={}}return{bind:d,update:p,dispose:S}}const fR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pa=null;function dR(){return pa===null&&(pa=new rT(fR,16,16,fr,ba),pa.name="DFG_LUT",pa.minFilter=fi,pa.magFilter=fi,pa.wrapS=Xa,pa.wrapT=Xa,pa.generateMipmaps=!1,pa.needsUpdate=!0),pa}class hR{constructor(t={}){const{canvas:i=LE(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:x=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:M=Ii}=t;this.isWebGLRenderer=!0;let w;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=s.getContextAttributes().alpha}else w=d;const N=M,b=new Set([Em,Mm,bm]),S=new Set([Ii,Sa,Bl,So,ym,Sm]),T=new Uint32Array(4),O=new Int32Array(4),U={textures:[],min:[],max:[],resolution:[]};let z=null,I=null;const E=[],L=[];let Y=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let G=!1,Z=null,he=null,q=null,ae=null;this._outputColorSpace=Fi;let P=0,H=0,ie=null,Q=-1,ce=null;const Se=new gn,je=new gn;let Ze=null;const A=new Jt(0);let K=0,pe=i.width,ye=i.height,be=1,Ne=null,et=null;const Re=new gn(0,0,pe,ye),He=new gn(0,0,pe,ye);let J=!1;const De=new $u,xt=new Cm;let mt=!1,St=!1;const Ke=new xn,de=new oe,rt=new gn,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function gt(){return ie===null?be:1}let V=s;function Nt(D,X){return i.getContext(D,X)}let ct,vt,Pe,jt,it,ot,B,R,re,we,ve,Fe,Ge,xe,Ee,Ie,j,Me,_e,Be,Le,ze,st;try{const D={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:x,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${vm}`),i.addEventListener("webglcontextlost",Je,!1),i.addEventListener("webglcontextrestored",Tt,!1),i.addEventListener("webglcontextcreationerror",We,!1),V===null){const X="webgl2";if(V=Nt(X,D),V===null)throw Nt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ft()}catch(D){throw i.removeEventListener("webglcontextlost",Je,!1),i.removeEventListener("webglcontextrestored",Tt,!1),i.removeEventListener("webglcontextcreationerror",We,!1),Yt("WebGLRenderer: "+D.message),D}function ft(){ct=new g3(V),ct.init(),Le=new iR(V,ct),vt=new s3(V,ct,t,Le),Pe=new tR(V,ct),vt.reversedDepthBuffer&&v&&Pe.buffers.depth.setReversed(!0),he=V.createFramebuffer(),q=V.createFramebuffer(),ae=V.createFramebuffer(),jt=new _3(V),it=new kw,ot=new nR(V,ct,Pe,it,vt,Le,jt),B=new m3(F),R=new ST(V),ze=new i3(V,R),re=new x3(V,R,jt,ze),we=new S3(V,re,R,ze,jt),Me=new y3(V,vt,ot),Ee=new r3(it),ve=new Hw(F,B,ct,vt,ze,Ee),Fe=new cR(F,it),Ge=new Vw,xe=new Kw(ct),j=new n3(F,B,Pe,we,w,x),Ie=new eR(F,we,vt),st=new uR(V,jt,vt,Pe),_e=new a3(V,ct,jt),Be=new v3(V,ct,jt),jt.programs=ve.programs,F.capabilities=vt,F.extensions=ct,F.properties=it,F.renderLists=Ge,F.shadowMap=Ie,F.state=Pe,F.info=jt}N!==Ii&&(Y=new M3(N,i.width,i.height,p,l,u));const Ce=new oR(F,V);this.xr=Ce,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=ct.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ct.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(D){D!==void 0&&(be=D,this.setSize(pe,ye,!1))},this.getSize=function(D){return D.set(pe,ye)},this.setSize=function(D,X,ge=!0){if(Ce.isPresenting){yt("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=D,ye=X,i.width=Math.floor(D*be),i.height=Math.floor(X*be),ge===!0&&(i.style.width=D+"px",i.style.height=X+"px"),Y!==null&&Y.setSize(i.width,i.height),this.setViewport(0,0,D,X)},this.getDrawingBufferSize=function(D){return D.set(pe*be,ye*be).floor()},this.setDrawingBufferSize=function(D,X,ge){pe=D,ye=X,be=ge,i.width=Math.floor(D*ge),i.height=Math.floor(X*ge),this.setViewport(0,0,D,X)},this.setEffects=function(D){if(N===Ii){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let X=0;X<D.length;X++)if(D[X].isOutputPass===!0){yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(Se)},this.getViewport=function(D){return D.copy(Re)},this.setViewport=function(D,X,ge,le){D.isVector4?Re.set(D.x,D.y,D.z,D.w):Re.set(D,X,ge,le),Pe.viewport(Se.copy(Re).multiplyScalar(gt()).round())},this.getScissor=function(D){return D.copy(He)},this.setScissor=function(D,X,ge,le){D.isVector4?He.set(D.x,D.y,D.z,D.w):He.set(D,X,ge,le),Pe.scissor(je.copy(He).multiplyScalar(gt()).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(D){Pe.setScissorTest(J=D)},this.setOpaqueSort=function(D){Ne=D},this.setTransparentSort=function(D){et=D},this.getClearColor=function(D){return D.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(D=!0,X=!0,ge=!0){let le=0;if(D){let ue=!1;if(ie!==null){const Ue=ie.texture.format;ue=b.has(Ue)}if(ue){const Ue=ie.texture.type,Qe=S.has(Ue),Oe=j.getClearColor(),qe=j.getClearAlpha(),tt=Oe.r,dt=Oe.g,At=Oe.b;Qe?(T[0]=tt,T[1]=dt,T[2]=At,T[3]=qe,V.clearBufferuiv(V.COLOR,0,T)):(O[0]=tt,O[1]=dt,O[2]=At,O[3]=qe,V.clearBufferiv(V.COLOR,0,O))}else le|=V.COLOR_BUFFER_BIT}X&&(le|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ge&&(le|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&V.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),Z=D},this.dispose=function(){i.removeEventListener("webglcontextlost",Je,!1),i.removeEventListener("webglcontextrestored",Tt,!1),i.removeEventListener("webglcontextcreationerror",We,!1),j.dispose(),Ge.dispose(),xe.dispose(),ot.dispose(),it.dispose(),B.dispose(),we.dispose(),re.dispose(),ze.dispose(),st.dispose(),ve.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Za),Ce.removeEventListener("sessionend",Ao),Ma.stop()};function Je(D){D.preventDefault(),c_("WebGLRenderer: Context Lost."),G=!0}function Tt(){c_("WebGLRenderer: Context Restored."),G=!1;const D=jt.autoReset,X=Ie.enabled,ge=Ie.autoUpdate,le=Ie.needsUpdate,ue=Ie.type;ft(),jt.autoReset=D,Ie.enabled=X,Ie.autoUpdate=ge,Ie.needsUpdate=le,Ie.type=ue}function We(D){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Kt(D){const X=D.target;X.removeEventListener("dispose",Kt),dn(X)}function dn(D){hi(D),it.remove(D)}function hi(D){const X=it.get(D).programs;X!==void 0&&(X.forEach(function(ge){ve.releaseProgram(ge)}),D.isShaderMaterial&&ve.releaseShaderCache(D))}this.renderBufferDirect=function(D,X,ge,le,ue,Ue){X===null&&(X=ut);const Qe=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,Oe=ql(D,X,ge,le,ue);Pe.setMaterial(le,Qe);let qe=ge.index,tt=1;if(le.wireframe===!0){if(qe=re.getWireframeAttribute(ge),qe===void 0)return;tt=2}const dt=ge.drawRange,At=ge.attributes.position;let Ve=dt.start*tt,Lt=(dt.start+dt.count)*tt;Ue!==null&&(Ve=Math.max(Ve,Ue.start*tt),Lt=Math.min(Lt,(Ue.start+Ue.count)*tt)),qe!==null?(Ve=Math.max(Ve,0),Lt=Math.min(Lt,qe.count)):At!=null&&(Ve=Math.max(Ve,0),Lt=Math.min(Lt,At.count));const hn=Lt-Ve;if(hn<0||hn===1/0)return;ze.setup(ue,le,Oe,ge,qe);let en,Ht=_e;if(qe!==null&&(en=R.get(qe),Ht=Be,Ht.setIndex(en)),ue.isMesh)le.wireframe===!0?(Pe.setLineWidth(le.wireframeLinewidth*gt()),Ht.setMode(V.LINES)):Ht.setMode(V.TRIANGLES);else if(ue.isLine){let pn=le.linewidth;pn===void 0&&(pn=1),Pe.setLineWidth(pn*gt()),ue.isLineSegments?Ht.setMode(V.LINES):ue.isLineLoop?Ht.setMode(V.LINE_LOOP):Ht.setMode(V.LINE_STRIP)}else ue.isPoints?Ht.setMode(V.POINTS):ue.isSprite&&Ht.setMode(V.TRIANGLES);if(ue.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const pn=ue._multiDrawStarts,nt=ue._multiDrawCounts,Un=ue._multiDrawCount,qt=qe?R.get(qe).bytesPerElement:1,Ea=it.get(le).currentProgram.getUniforms();for(let pt=0;pt<Un;pt++)Ea.setValue(V,"_gl_DrawID",pt),Ht.render(pn[pt]/qt,nt[pt])}else if(ue.isInstancedMesh)Ht.renderInstances(Ve,hn,ue.count);else if(ge.isInstancedBufferGeometry){const pn=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,nt=Math.min(ge.instanceCount,pn);Ht.renderInstances(Ve,hn,nt)}else Ht.render(Ve,hn)};function Fs(D,X,ge,le){Z!==null&&D.isNodeMaterial&&Z.setObject(le,D),mt===!0&&Ee.setState(D,ge,!1),D.transparent===!0&&D.side===qa&&D.forceSinglePass===!1?(D.side=ii,D.needsUpdate=!0,Ja(D,X,le),D.side=ur,D.needsUpdate=!0,Ja(D,X,le),D.side=qa):Ja(D,X,le)}this.compile=function(D,X,ge=null){ge===null&&(ge=D),Z!==null&&Z.renderStart(D,X,ge),I=xe.get(ge),I.init(X),L.push(I),ge.traverseVisible(function(ue){ue.isLight&&ue.layers.test(X.layers)&&(I.pushLight(ue),ue.castShadow&&I.pushShadow(ue))}),D!==ge&&D.traverseVisible(function(ue){ue.isLight&&ue.layers.test(X.layers)&&(I.pushLight(ue),ue.castShadow&&I.pushShadow(ue))}),I.setupLights(),Z!==null&&Z.updateLights(I.state.lightsArray),St=this.localClippingEnabled,mt=Ee.init(this.clippingPlanes,St),mt===!0&&Ee.setGlobalState(this.clippingPlanes,X),Z!==null&&Ie.render(I.state.shadowsArray,ge,X);const le=new Set;return D.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const Ue=ue.material;if(Ue)if(Array.isArray(Ue))for(let Qe=0;Qe<Ue.length;Qe++){const Oe=Ue[Qe];Fs(Oe,ge,X,ue),le.add(Oe)}else Fs(Ue,ge,X,ue),le.add(Ue)}),I=L.pop(),Z!==null&&Z.renderEnd(),le},this.compileAsync=function(D,X,ge=null){const le=this.compile(D,X,ge);return new Promise(ue=>{function Ue(){if(le.forEach(function(Qe){const qe=it.get(Qe).currentProgram;(qe===void 0||qe.isReady())&&le.delete(Qe)}),le.size===0){ue(D);return}setTimeout(Ue,10)}ct.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Hi=null;function pr(D){Hi&&Hi(D)}function Za(){Ma.stop()}function Ao(){Ma.start()}const Ma=new Jy;Ma.setAnimationLoop(pr),typeof self<"u"&&Ma.setContext(self),this.setAnimationLoop=function(D){Hi=D,Ce.setAnimationLoop(D),D===null?Ma.stop():Ma.start()},Ce.addEventListener("sessionstart",Za),Ce.addEventListener("sessionend",Ao),this.render=function(D,X){if(X!==void 0&&X.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Z!==null&&Z.renderStart(D,X);const ge=Ce.enabled===!0&&Ce.isPresenting===!0,le=Y!==null&&(ie===null||ge)&&Y.begin(F,ie);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(X),X=Ce.getCamera()),D.isScene===!0&&D.onBeforeRender(F,D,X,ie),I=xe.get(D,L.length),I.init(X),I.state.textureUnits=ot.getTextureUnits(),L.push(I),Ke.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?xt.setFromArrayCamera(X):De.setFromProjectionMatrix(Ke,ea,X.reversedDepth),St=this.localClippingEnabled,mt=Ee.init(this.clippingPlanes,St),z=Ge.get(D,E.length),z.init(),E.push(z),this.info.render.frame++,Ce.enabled===!0&&Ce.isPresenting===!0){const Qe=F.xr.getDepthSensingMesh();Qe!==null&&mr(Qe,X,-1/0,F.sortObjects)}mr(D,X,0,F.sortObjects),z.finish(),Z!==null&&Z.updateLights(I.state.lightsArray),F.sortObjects===!0&&z.sort(Ne,et),Wt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Wt&&j.addToRenderList(z,D),this.info.autoReset===!0&&this.info.reset(),mt===!0&&Ee.beginShadows();const ue=I.state.shadowsArray;if(Ie.render(ue,D,X),mt===!0&&Ee.endShadows(),(le&&Y.hasRenderPass())===!1){const Qe=z.opaque,Oe=z.transmissive;if(I.setupLights(),X.isArrayCamera){const qe=X.cameras;if(Oe.length>0)for(let tt=0,dt=qe.length;tt<dt;tt++){const At=qe[tt];Qa(Qe,Oe,D,At)}Wt&&j.render(D);for(let tt=0,dt=qe.length;tt<dt;tt++){const At=qe[tt];gr(z,D,At,At.viewport)}}else Oe.length>0&&Qa(Qe,Oe,D,X),Wt&&j.render(D),gr(z,D,X)}ie!==null&&H===0&&(ot.updateMultisampleRenderTarget(ie),ot.updateRenderTargetMipmap(ie)),le&&Y.end(F),D.isScene===!0&&D.onAfterRender(F,D,X),ze.resetDefaultState(),Q=-1,ce=null,L.pop(),L.length>0?(I=L[L.length-1],ot.setTextureUnits(I.state.textureUnits),mt===!0&&Ee.setGlobalState(F.clippingPlanes,I.state.camera)):I=null,E.pop(),E.length>0?z=E[E.length-1]:z=null,Z!==null&&Z.renderEnd()};function mr(D,X,ge,le){if(D.visible===!1)return;if(D.layers.test(X.layers)){if(D.isGroup)ge=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(X);else if(D.isLight)I.pushLight(D),D.castShadow&&I.pushShadow(D);else if(D.isSprite){const Qe=X.isArrayCamera?xt:De;if(!D.frustumCulled||D.intersectsFrustum(Qe)){le&&rt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ke);const Oe=we.update(D),qe=D.material;qe.visible&&z.push(D,Oe,qe,ge,rt.z,null,X)}}else if(D.isMesh||D.isLine||D.isPoints){const Qe=X.isArrayCamera?xt:De;if(!D.frustumCulled||D.intersectsFrustum(Qe)){const Oe=we.update(D),qe=D.material;if(le&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),rt.copy(D.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),rt.copy(Oe.boundingSphere.center)),rt.applyMatrix4(D.matrixWorld).applyMatrix4(Ke)),Array.isArray(qe)){const tt=Oe.groups;for(let dt=0,At=tt.length;dt<At;dt++){const Ve=tt[dt],Lt=qe[Ve.materialIndex];Lt&&Lt.visible&&z.push(D,Oe,Lt,ge,rt.z,Ve,X)}}else qe.visible&&z.push(D,Oe,qe,ge,rt.z,null,X)}}}const Ue=D.children;for(let Qe=0,Oe=Ue.length;Qe<Oe;Qe++)mr(Ue[Qe],X,ge,le)}function gr(D,X,ge,le){const{opaque:ue,transmissive:Ue,transparent:Qe}=D;I.setupLightsView(ge),mt===!0&&Ee.setGlobalState(F.clippingPlanes,ge),le&&Pe.viewport(Se.copy(le)),ue.length>0&&xr(ue,X,ge),Ue.length>0&&xr(Ue,X,ge),Qe.length>0&&xr(Qe,X,ge),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Qa(D,X,ge,le){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[le.id]===void 0){const Ve=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[le.id]=new va(1,1,{generateMipmaps:!0,type:Ve?ba:Ii,minFilter:Us,samples:Math.max(4,vt.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}const Ue=I.state.transmissionRenderTarget[le.id],Qe=le.viewport||Se;Ue.setSize(Qe.z*F.transmissionResolutionScale,Qe.w*F.transmissionResolutionScale);const Oe=F.getRenderTarget(),qe=F.getActiveCubeFace(),tt=F.getActiveMipmapLevel();F.setRenderTarget(Ue),F.getClearColor(A),K=F.getClearAlpha(),K<1&&F.setClearColor(16777215,.5),F.clear(),Wt&&j.render(ge);const dt=F.toneMapping;F.toneMapping=Wa;const At=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),I.setupLightsView(le),mt===!0&&Ee.setGlobalState(F.clippingPlanes,le),xr(D,ge,le),ot.updateMultisampleRenderTarget(Ue),ot.updateRenderTargetMipmap(Ue),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Lt=0,hn=X.length;Lt<hn;Lt++){const en=X[Lt],{object:Ht,geometry:pn,material:nt,group:Un}=en;if(nt.side===qa&&Ht.layers.test(le.layers)){const qt=nt.side;nt.side=ii,nt.needsUpdate=!0,wo(Ht,ge,le,pn,nt,Un),nt.side=qt,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(ot.updateMultisampleRenderTarget(Ue),ot.updateRenderTargetMipmap(Ue))}F.setRenderTarget(Oe,qe,tt),F.setClearColor(A,K),At!==void 0&&(le.viewport=At),F.toneMapping=dt}function xr(D,X,ge){const le=X.isScene===!0?X.overrideMaterial:null;for(let ue=0,Ue=D.length;ue<Ue;ue++){const Qe=D[ue],{object:Oe,geometry:qe,group:tt}=Qe;let dt=Qe.material;dt.allowOverride===!0&&le!==null&&(dt=le),Oe.layers.test(ge.layers)&&wo(Oe,X,ge,qe,dt,tt)}}function wo(D,X,ge,le,ue,Ue){Z!==null&&ue.isNodeMaterial&&Z.setObject(D,ue),D.onBeforeRender(F,X,ge,le,ue,Ue),D.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ue.onBeforeRender(F,X,ge,le,D,Ue),ue.transparent===!0&&ue.side===qa&&ue.forceSinglePass===!1?(ue.side=ii,ue.needsUpdate=!0,F.renderBufferDirect(ge,X,le,ue,D,Ue),ue.side=ur,ue.needsUpdate=!0,F.renderBufferDirect(ge,X,le,ue,D,Ue),ue.side=qa):F.renderBufferDirect(ge,X,le,ue,D,Ue),D.onAfterRender(F,X,ge,le,ue,Ue)}function Ro(D){let X=0;for(const ge of D)ge.texture!==null&&X++;return X}function Ja(D,X,ge){X.isScene!==!0&&(X=ut);const le=it.get(D),ue=I.state.lights,Ue=I.state.shadowsArray,Qe=ue.state.version,Oe=ve.getParameters(D,ue.state,Ue,X,ge,I.state.lightProbeGridArray),qe=ve.getProgramCacheKey(Oe);let tt=le.programs;le.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?X.environment:null,le.fog=X.fog;const dt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;le.envMap=B.get(D.envMap||le.environment,dt),le.envMapRotation=le.environment!==null&&D.envMap===null?X.environmentRotation:D.envMapRotation,tt===void 0&&(D.addEventListener("dispose",Kt),tt=new Map,le.programs=tt,le.programVariants=new Map);let At=tt.get(qe);if(At!==void 0){if(le.currentProgram===At&&le.lightsStateVersion===Qe)return No(D,Oe),At}else Oe.uniforms=ve.getUniforms(D),Z!==null&&D.isNodeMaterial&&Z.build(D,ge,Oe),D.onBeforeCompile(Oe,F),At=ve.acquireProgram(Oe,qe),tt.set(qe,At),le.uniforms=Oe.uniforms;const Ve=le.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ve.clippingPlanes=Ee.uniform),No(D,Oe),le.needsLights=Rn(D),le.lightsStateVersion=Qe,le.needsLights&&(Ve.ambientLightColor.value=ue.state.ambient,Ve.lightProbe.value=ue.state.probe,Ve.sunLights.value=ue.state.sun,Ve.sunLightShadows.value=ue.state.sunShadow,Ve.directionalLights.value=ue.state.directional,Ve.directionalLightShadows.value=ue.state.directionalShadow,Ve.spotLights.value=ue.state.spot,Ve.spotLightShadows.value=ue.state.spotShadow,Ve.rectAreaLights.value=ue.state.rectArea,Ve.ltc_1.value=ue.state.rectAreaLTC1,Ve.ltc_2.value=ue.state.rectAreaLTC2,Ve.pointLights.value=ue.state.point,Ve.pointLightShadows.value=ue.state.pointShadow,Ve.hemisphereLights.value=ue.state.hemi,Ve.sunShadowMatrix.value=ue.state.sunShadowMatrix,Ve.sunShadowCascade.value=ue.state.sunShadowCascade,Ve.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,Ve.spotLightMatrix.value=ue.state.spotLightMatrix,Ve.spotLightMap.value=ue.state.spotLightMap,Ve.pointShadowMatrix.value=ue.state.pointShadowMatrix),le.numLightProbeGrids=Ro(I.state.lightProbeGridArray),le.currentProgram=At,le.uniformsList=null,At}function Co(D,X,ge,le,ue){const Ue=it.get(D),Qe=Ue.currentProgram.id+","+le+","+ue;let Oe=Ue.programVariants.get(Qe);return Oe===void 0?(Oe=Ja(D,X,ge),Ue.programVariants.set(Qe,Oe)):(Ue.currentProgram=Oe,Ue.uniformsList=null,Ue.outputColorSpace=le,Ue.toneMapping=ue),Oe}function vr(D){if(D.uniformsList===null){const X=D.currentProgram.getUniforms();D.uniformsList=Gu.seqWithValue(X.seq,D.uniforms)}return D.uniformsList}function No(D,X){const ge=it.get(D);ge.outputColorSpace=X.outputColorSpace,ge.batching=X.batching,ge.batchingColor=X.batchingColor,ge.instancing=X.instancing,ge.instancingColor=X.instancingColor,ge.instancingMorph=X.instancingMorph,ge.skinning=X.skinning,ge.morphTargets=X.morphTargets,ge.morphNormals=X.morphNormals,ge.morphColors=X.morphColors,ge.morphTargetsCount=X.morphTargetsCount,ge.numClippingPlanes=X.numClippingPlanes,ge.numIntersection=X.numClipIntersection,ge.vertexAlphas=X.vertexAlphas,ge.vertexTangents=X.vertexTangents,ge.toneMapping=X.toneMapping}function ql(D,X,ge,le,ue){X.isScene!==!0&&(X=ut),ot.resetTextureUnits();const Ue=X.fog,Qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?X.environment:null,Oe=ie===null?F.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:kt.workingColorSpace,qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,tt=B.get(le.envMap||Qe,qe),dt=le.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,At=!!ge.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ve=!!ge.morphAttributes.position,Lt=!!ge.morphAttributes.normal,hn=!!ge.morphAttributes.color;let en=Wa;le.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(en=F.toneMapping);const Ht=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,pn=Ht!==void 0?Ht.length:0,nt=it.get(le),Un=I.state.lights;if(mt===!0&&(St===!0||D!==ce)){const un=D===ce&&le.id===Q;Ee.setState(le,D,un)}let qt=!1,Ea=!1;le.version===nt.__version?nt.needsLights&&nt.lightsStateVersion!==Un.state.version||ue.isBatchedMesh&&nt.batching===!1||!ue.isBatchedMesh&&nt.batching===!0||ue.isBatchedMesh&&nt.batchingColor===!0&&ue._colorsTexture===null||ue.isBatchedMesh&&nt.batchingColor===!1&&ue._colorsTexture!==null||ue.isInstancedMesh&&nt.instancing===!1||!ue.isInstancedMesh&&nt.instancing===!0||ue.isSkinnedMesh&&nt.skinning===!1||!ue.isSkinnedMesh&&nt.skinning===!0||ue.isInstancedMesh&&nt.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&nt.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&nt.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&nt.instancingMorph===!1&&ue.morphTexture!==null||nt.envMap!==tt||le.fog===!0&&nt.fog!==Ue||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ee.numPlanes||nt.numIntersection!==Ee.numIntersection)||nt.vertexAlphas!==dt||nt.vertexTangents!==At||nt.morphTargets!==Ve||nt.morphNormals!==Lt||nt.morphColors!==hn||nt.morphTargetsCount!==pn||nt.numLightProbeGrids!==Ro(I.state.lightProbeGridArray)?qt=!0:(nt.outputColorSpace!==Oe||nt.toneMapping!==en)&&(Ea=!0):(qt=!0,nt.__version=le.version);let pt=nt.currentProgram;(qt===!0||Ea===!0)&&(pt=Ea===!0?Co(le,X,ue,Oe,en):Ja(le,X,ue),Z&&le.isNodeMaterial&&Z.onUpdateProgram(le,pt,nt));let Is=!1,pi=!1,Ei=!1;const wt=pt.getUniforms(),Zt=nt.uniforms;if(Pe.useProgram(pt.program)&&(Is=!0,pi=!0,Ei=!0),le.id!==Q&&(Q=le.id,pi=!0),Is||ce!==D){Pe.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),wt.setValue(V,"projectionMatrix",D.projectionMatrix),wt.setValue(V,"viewMatrix",D.matrixWorldInverse);const vn=wt.map.cameraPosition;vn!==void 0&&vn.setValue(V,de.setFromMatrixPosition(D.matrixWorld)),vt.logarithmicDepthBuffer&&wt.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&wt.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),ce!==D&&(ce=D,pi=!0,Ei=!0)}if(nt.needsLights&&(Un.state.sunShadowMap.length>0&&wt.setValue(V,"sunShadowMap",Un.state.sunShadowMap,ot),Un.state.directionalShadowMap.length>0&&wt.setValue(V,"directionalShadowMap",Un.state.directionalShadowMap,ot),Un.state.spotShadowMap.length>0&&wt.setValue(V,"spotShadowMap",Un.state.spotShadowMap,ot),Un.state.pointShadowMap.length>0&&wt.setValue(V,"pointShadowMap",Un.state.pointShadowMap,ot)),ue.isSkinnedMesh){wt.setOptional(V,ue,"bindMatrix"),wt.setOptional(V,ue,"bindMatrixInverse");const un=ue.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),wt.setValue(V,"boneTexture",un.boneTexture,ot))}ue.isBatchedMesh&&(wt.setOptional(V,ue,"batchingTexture"),wt.setValue(V,"batchingTexture",ue._matricesTexture,ot),wt.setOptional(V,ue,"batchingIdTexture"),wt.setValue(V,"batchingIdTexture",ue._indirectTexture,ot),wt.setOptional(V,ue,"batchingColorTexture"),ue._colorsTexture!==null&&wt.setValue(V,"batchingColorTexture",ue._colorsTexture,ot));const si=ge.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&Me.update(ue,ge,pt),(pi||nt.receiveShadow!==ue.receiveShadow)&&(nt.receiveShadow=ue.receiveShadow,wt.setValue(V,"receiveShadow",ue.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&X.environment!==null&&(Zt.envMapIntensity.value=X.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=dR()),pi){if(wt.setValue(V,"toneMappingExposure",F.toneMappingExposure),nt.needsLights&&ki(Zt,Ei),Ue&&le.fog===!0&&Fe.refreshFogUniforms(Zt,Ue),Fe.refreshMaterialUniforms(Zt,le,be,ye,I.state.transmissionRenderTarget[D.id]),nt.needsLights&&nt.numLightProbeGrids>0){const un=U;let vn=0;for(const Ti of I.state.lightProbeGridArray)Ti.texture!==null&&(un.textures[vn]=Ti.texture,un.min[vn]=Ti.boundingBox.min,un.max[vn]=Ti.boundingBox.max,un.resolution[vn]=Ti.resolution,vn++);for(const Ti in un)un[Ti].length=vn;Zt.probesSH.value=un.textures,Zt.probesMin.value=un.min,Zt.probesMax.value=un.max,Zt.probesResolution.value=un.resolution}Gu.upload(V,vr(nt),Zt,ot)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Gu.upload(V,vr(nt),Zt,ot),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&wt.setValue(V,"center",ue.center),wt.setValue(V,"modelViewMatrix",ue.modelViewMatrix),wt.setValue(V,"normalMatrix",ue.normalMatrix),wt.setValue(V,"modelMatrix",ue.matrixWorld),le.uniformsGroups!==void 0){const un=le.uniformsGroups;for(let vn=0,Ti=un.length;vn<Ti;vn++){const Xl=un[vn];st.update(Xl,pt),st.bind(Xl,pt)}}return pt}function ki(D,X){D.ambientLightColor.needsUpdate=X,D.lightProbe.needsUpdate=X,D.sunLights.needsUpdate=X,D.sunLightShadows.needsUpdate=X,D.directionalLights.needsUpdate=X,D.directionalLightShadows.needsUpdate=X,D.pointLights.needsUpdate=X,D.pointLightShadows.needsUpdate=X,D.spotLights.needsUpdate=X,D.spotLightShadows.needsUpdate=X,D.rectAreaLights.needsUpdate=X,D.hemisphereLights.needsUpdate=X}function Rn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(D,X,ge){const le=it.get(D);le.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),it.get(D.texture).__webglTexture=X,it.get(D.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ge,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,X){const ge=it.get(D);ge.__webglFramebuffer=X,ge.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(D,X=0,ge=0){ie=D,P=X,H=ge;let le=null,ue=!1,Ue=!1;if(D){const Oe=it.get(D);if(Oe.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(V.FRAMEBUFFER,Oe.__webglFramebuffer),Se.copy(D.viewport),je.copy(D.scissor),Ze=D.scissorTest,Pe.viewport(Se),Pe.scissor(je),Pe.setScissorTest(Ze),Q=-1;return}else if(Oe.__webglFramebuffer===void 0)ot.setupRenderTarget(D);else if(Oe.__hasExternalTextures)ot.rebindTextures(D,it.get(D.texture).__webglTexture,it.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const dt=D.depthTexture;if(Oe.__boundDepthTexture!==dt){if(dt!==null&&it.has(dt)&&(D.width!==dt.image.width||D.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(D)}}const qe=D.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);const tt=it.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?le=tt[X][ge]:le=tt[X],ue=!0):D.samples>0&&ot.useMultisampledRTT(D)===!1?le=it.get(D).__webglMultisampledFramebuffer:Array.isArray(tt)?le=tt[ge]:le=tt,Se.copy(D.viewport),je.copy(D.scissor),Ze=D.scissorTest}else Se.copy(Re).multiplyScalar(be).floor(),je.copy(He).multiplyScalar(be).floor(),Ze=J;if(ge!==0&&(le=he),Pe.bindFramebuffer(V.FRAMEBUFFER,le)&&Pe.drawBuffers(D,le),Pe.viewport(Se),Pe.scissor(je),Pe.setScissorTest(Ze),ue){const Oe=it.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Oe.__webglTexture,ge)}else if(Ue){const Oe=X;for(let qe=0;qe<D.textures.length;qe++){const tt=it.get(D.textures[qe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+qe,tt.__webglTexture,ge,Oe)}}else if(D!==null&&ge!==0){const Oe=it.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Oe.__webglTexture,ge)}Q=-1};function zn(D){const X=it.get(D);return(X.__readFormat!==D.format||X.__readType!==D.type)&&(X.__readFormat=D.format,X.__readType=D.type,X.__formatReadable=vt.textureFormatReadable(D.format),X.__typeReadable=vt.textureTypeReadable(D.type)),X}this.readRenderTargetPixels=function(D,X,ge,le,ue,Ue,Qe,Oe=0){if(!(D&&D.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=it.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Qe!==void 0&&(qe=qe[Qe],Array.isArray(qe)&&(qe=qe[0])),qe){Pe.bindFramebuffer(V.FRAMEBUFFER,qe);try{const tt=D.textures[Oe],dt=tt.format,At=tt.type;D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Oe);const Ve=zn(tt);if(Ve.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=D.width-le&&ge>=0&&ge<=D.height-ue&&V.readPixels(X,ge,le,ue,Le.convert(dt),Le.convert(At),Ue)}finally{const tt=ie!==null?it.get(ie).__webglFramebuffer:null;Pe.bindFramebuffer(V.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(D,X,ge,le,ue,Ue,Qe,Oe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=it.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Qe!==void 0&&(qe=qe[Qe],Array.isArray(qe)&&(qe=qe[0])),qe)if(X>=0&&X<=D.width-le&&ge>=0&&ge<=D.height-ue){Pe.bindFramebuffer(V.FRAMEBUFFER,qe);const tt=D.textures[Oe],dt=tt.format,At=tt.type;D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Oe);const Ve=zn(tt);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Lt),V.bufferData(V.PIXEL_PACK_BUFFER,Ue.byteLength,V.STREAM_READ),V.readPixels(X,ge,le,ue,Le.convert(dt),Le.convert(At),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const hn=ie!==null?it.get(ie).__webglFramebuffer:null;Pe.bindFramebuffer(V.FRAMEBUFFER,hn);const en=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await UE(V,en,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Lt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ue),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Lt),V.deleteSync(en),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,X=null,ge=0){const le=Math.pow(2,-ge),ue=Math.floor(D.image.width*le),Ue=Math.floor(D.image.height*le),Qe=X!==null?X.x:0,Oe=X!==null?X.y:0;ot.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,ge,0,0,Qe,Oe,ue,Ue),Pe.unbindTexture()},this.copyTextureToTexture=function(D,X,ge=null,le=null,ue=0,Ue=0){let Qe,Oe,qe,tt,dt,At,Ve,Lt,hn;const en=D.isCompressedTexture?D.mipmaps[Ue]:D.image;if(ge!==null)Qe=ge.max.x-ge.min.x,Oe=ge.max.y-ge.min.y,qe=ge.isBox3?ge.max.z-ge.min.z:1,tt=ge.min.x,dt=ge.min.y,At=ge.isBox3?ge.min.z:0;else{const wt=Math.pow(2,-ue);Qe=Math.floor(en.width*wt),Oe=Math.floor(en.height*wt),D.isDataArrayTexture?qe=en.depth:D.isData3DTexture?qe=Math.floor(en.depth*wt):qe=1,tt=0,dt=0,At=0}le!==null?(Ve=le.x,Lt=le.y,hn=le.z):(Ve=0,Lt=0,hn=0);const Ht=Le.convert(X.format),pn=Le.convert(X.type);let nt;X.isData3DTexture?(ot.setTexture3D(X,0),nt=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ot.setTexture2DArray(X,0),nt=V.TEXTURE_2D_ARRAY):(ot.setTexture2D(X,0),nt=V.TEXTURE_2D),Pe.activeTexture(V.TEXTURE0),Pe.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),Pe.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),Pe.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Un=Pe.getParameter(V.UNPACK_ROW_LENGTH),qt=Pe.getParameter(V.UNPACK_IMAGE_HEIGHT),Ea=Pe.getParameter(V.UNPACK_SKIP_PIXELS),pt=Pe.getParameter(V.UNPACK_SKIP_ROWS),Is=Pe.getParameter(V.UNPACK_SKIP_IMAGES);Pe.pixelStorei(V.UNPACK_ROW_LENGTH,en.width),Pe.pixelStorei(V.UNPACK_IMAGE_HEIGHT,en.height),Pe.pixelStorei(V.UNPACK_SKIP_PIXELS,tt),Pe.pixelStorei(V.UNPACK_SKIP_ROWS,dt),Pe.pixelStorei(V.UNPACK_SKIP_IMAGES,At);const pi=D.isDataArrayTexture||D.isData3DTexture,Ei=X.isDataArrayTexture||X.isData3DTexture;if(D.isDepthTexture){const wt=it.get(D),Zt=it.get(X),si=it.get(wt.__renderTarget),un=it.get(Zt.__renderTarget);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,si.__webglFramebuffer),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let vn=0;vn<qe;vn++)pi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,it.get(D).__webglTexture,ue,At+vn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,it.get(X).__webglTexture,Ue,hn+vn)),V.blitFramebuffer(tt,dt,tt+Qe,dt+Oe,Ve,Lt,Ve+Qe,Lt+Oe,V.DEPTH_BUFFER_BIT,V.NEAREST);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ue!==0||D.isRenderTargetTexture||it.has(D)){const wt=it.get(D),Zt=it.get(X);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,q),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,ae);for(let si=0;si<qe;si++)pi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,wt.__webglTexture,ue,At+si):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,wt.__webglTexture,ue),Ei?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Zt.__webglTexture,Ue,hn+si):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Zt.__webglTexture,Ue),ue!==0?V.blitFramebuffer(tt,dt,tt+Qe,dt+Oe,Ve,Lt,Ve+Qe,Lt+Oe,V.COLOR_BUFFER_BIT,V.NEAREST):Ei?V.copyTexSubImage3D(nt,Ue,Ve,Lt,hn+si,tt,dt,Qe,Oe):V.copyTexSubImage2D(nt,Ue,Ve,Lt,tt,dt,Qe,Oe);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ei?D.isDataTexture||D.isData3DTexture?V.texSubImage3D(nt,Ue,Ve,Lt,hn,Qe,Oe,qe,Ht,pn,en.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(nt,Ue,Ve,Lt,hn,Qe,Oe,qe,Ht,en.data):V.texSubImage3D(nt,Ue,Ve,Lt,hn,Qe,Oe,qe,Ht,pn,en):D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ue,Ve,Lt,Qe,Oe,Ht,pn,en.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ue,Ve,Lt,en.width,en.height,Ht,en.data):V.texSubImage2D(V.TEXTURE_2D,Ue,Ve,Lt,Qe,Oe,Ht,pn,en);Pe.pixelStorei(V.UNPACK_ROW_LENGTH,Un),Pe.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qt),Pe.pixelStorei(V.UNPACK_SKIP_PIXELS,Ea),Pe.pixelStorei(V.UNPACK_SKIP_ROWS,pt),Pe.pixelStorei(V.UNPACK_SKIP_IMAGES,Is),Ue===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&V.generateMipmap(nt),Pe.unbindTexture()},this.initRenderTarget=function(D){it.get(D).__webglFramebuffer===void 0&&ot.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ot.setTextureCube(D,0):D.isData3DTexture?ot.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ot.setTexture2DArray(D,0):ot.setTexture2D(D,0),Pe.unbindTexture()},this.resetState=function(){P=0,H=0,ie=null,Pe.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(t),i.unpackColorSpace=kt._getUnpackColorSpace()}}const ey={azure:{deep:[.02,.06,.19],mid:[.05,.28,.72],bright:[.18,.76,1],glow:[.82,.96,1]},sunset:{deep:[.07,.04,.16],mid:[.56,.17,.34],bright:[1,.48,.28],glow:[1,.9,.76]},lagoon:{deep:[.015,.09,.15],mid:[.05,.38,.48],bright:[.3,.9,.82],glow:[.88,1,.96]}};function ty(o){const t=o.split(",").map(i=>parseFloat(i.trim()));return t.length!==3||t.some(i=>!Number.isFinite(i))?[.18,.68,.96]:[Math.min(1,Math.max(.05,t[0]/255)),Math.min(1,Math.max(.05,t[1]/255)),Math.min(1,Math.max(.05,t[2]/255))]}const pR=`
uniform float uTime;
uniform float uBass;
uniform float uKick;
uniform vec4 uRipples[8]; // xy = world XZ center, z = age (sec), w = strength

varying vec3 vWorldPos;
varying vec3 vNormalDir;
varying float vCrest;
varying float vRippleEnergy;

float evalWave(vec2 xz, out float energyOut) {
  // Subtle calm 3D liquid surface swells
  float h = sin(xz.x * 0.42 + uTime * 0.65) * cos(xz.y * 0.38 - uTime * 0.55) * 0.10;
  h += sin(xz.x * 0.85 - xz.y * 0.6 + uTime * 0.95) * 0.045;
  energyOut = 0.0;

  // 8 REAL physical 3D concentric bass shockwaves traveling outward across the water plane!
  for (int i = 0; i < 8; i++) {
    vec4 rp = uRipples[i];
    if (rp.w > 0.01 && rp.z < 5.5) {
      float dist = length(xz - rp.xy);
      float rad = rp.z * 3.85;
      float d = dist - rad;
      float width = 0.72 + rp.z * 0.16;
      float env = exp(-(d * d) / (width * width)) * exp(-rp.z * 0.55) * rp.w;
      // Crisp 3D liquid crest + natural following trough
      float wave = cos(d * 3.9) * env;
      h += wave * 0.62;
      energyOut += exp(-(d * d) / (width * width * 0.55)) * exp(-rp.z * 0.62) * rp.w;
    }
  }
  return h;
}

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  float rEnergy = 0.0;
  float hC = evalWave(wp.xz, rEnergy);

  // Smooth analytical 3D normal via local finite differences on the 3D mesh
  float eps = 0.14;
  float dummy = 0.0;
  float hX = evalWave(wp.xz + vec2(eps, 0.0), dummy);
  float hZ = evalWave(wp.xz + vec2(0.0, eps), dummy);

  wp.y += hC;
  vWorldPos = wp.xyz;
  vNormalDir = normalize(vec3((hC - hX) / eps, 1.0, (hC - hZ) / eps));
  vCrest = hC;
  vRippleEnergy = min(1.8, rEnergy);

  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,mR=`
precision highp float;

uniform vec3 uDeep;
uniform vec3 uMid;
uniform vec3 uBright;
uniform vec3 uGlow;
uniform float uKick;
uniform float uBass;
uniform vec3 uSunDir;

varying vec3 vWorldPos;
varying vec3 vNormalDir;
varying float vCrest;
varying float vRippleEnergy;

void main() {
  vec3 N = normalize(vNormalDir);
  vec3 V = normalize(cameraPosition - vWorldPos);
  vec3 R = reflect(-V, N);
  vec3 L = normalize(uSunDir);

  // True 3D Fresnel glass-water reflection
  float ndotv = max(dot(N, V), 0.0);
  float fresnel = pow(1.0 - ndotv, 3.0);

  // Reflected Anime twilight sky gradient
  float skyY = clamp(R.y * 1.4 + 0.12, 0.0, 1.0);
  vec3 skyRefl = mix(uBright * (0.85 + uKick * 0.25), uMid, smoothstep(0.0, 0.52, skyY));
  skyRefl = mix(skyRefl, uDeep, smoothstep(0.45, 1.0, skyY));

  // Deep water body + subsurface glow inside elevated 3D wave crests
  float sss = smoothstep(0.04, 0.58, vCrest);
  vec3 waterBody = mix(uDeep, uMid, 0.22 + 0.45 * sss);
  waterBody += uBright * (sss * 0.42 + vRippleEnergy * (0.48 + uKick * 0.35));

  // Glossy Anime specular reflection of the twilight sun/moon pillar
  vec3 H = normalize(L + V);
  float specSharp = pow(max(dot(N, H), 0.0), 72.0);
  float specSoft  = pow(max(dot(N, H), 0.0), 18.0);
  float celGlint  = smoothstep(0.24, 0.58, specSharp) * (0.95 + uKick * 0.65);

  // Secondary rim highlight tracing every expanding 3D bass shockwave ring!
  float ringRim = smoothstep(0.18, 0.85, vRippleEnergy) * (0.35 + 0.65 * fresnel);

  vec3 col = mix(waterBody, skyRefl, 0.28 + 0.62 * fresnel);
  col += uGlow * (celGlint * 0.88 + specSoft * 0.22 + ringRim * 0.52);

  // Smooth atmospheric perspective fog blending seamlessly into the 3D horizon
  float dist = length(vWorldPos.xz - cameraPosition.xz * 0.35);
  float fog = smoothstep(8.5, 22.0, dist);
  vec3 fogCol = mix(uMid, uBright, 0.58 + uKick * 0.16);
  col = mix(col, fogCol, fog);

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,gR=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,xR=`
precision highp float;
uniform vec3 uDeep;
uniform vec3 uMid;
uniform vec3 uBright;
uniform vec3 uGlow;
uniform vec3 uSunDir;
uniform float uKick;
varying vec3 vDir;

void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y * 1.65 + 0.06, 0.0, 1.0);
  vec3 sky = mix(mix(uBright, uGlow, 0.22), uMid, smoothstep(0.0, 0.36, h));
  sky = mix(sky, uDeep * 0.85, smoothstep(0.26, 0.92, h));

  // Glowing 3D Celestial Sun/Moon Orb + Bass-Reactive Corona Halo
  float sunDot = max(dot(d, normalize(uSunDir)), 0.0);
  float orb = smoothstep(0.9945 - uKick * 0.0012, 0.9972, sunDot);
  float aura = pow(sunDot, 22.0) * (0.55 + uKick * 0.55) + pow(sunDot, 5.0) * (0.18 + uKick * 0.16);

  vec3 col = sky + uGlow * (orb * 0.95 + aura * 0.52);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,vR=`
uniform float uTime;
uniform float uBass;
uniform float uKick;
uniform float uMidEnergy;
varying vec3 vNorm;
varying vec3 vPos;
varying float vDisp;

void main() {
  vec3 n = normalize(position);
  float wave = sin(n.x * 5.0 + uTime * 2.0) * cos(n.y * 5.0 - uTime * 1.7) * sin(n.z * 5.0 + uTime * 1.4);
  float disp = wave * (0.12 + uMidEnergy * 0.25 + uKick * 0.42);
  vec3 displaced = position * (1.0 + uKick * 0.16 + uBass * 0.08) + n * disp;
  vDisp = disp;
  vNorm = normalize(normalMatrix * normalize(n + vec3(disp * 0.8)));
  vec4 mv = modelViewMatrix * vec4(displaced, 1.0);
  vPos = mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`,_R=`
precision highp float;
uniform vec3 uDeep;
uniform vec3 uMid;
uniform vec3 uBright;
uniform vec3 uGlow;
uniform float uKick;
varying vec3 vNorm;
varying vec3 vPos;
varying float vDisp;

void main() {
  vec3 N = normalize(vNorm);
  vec3 V = normalize(-vPos);
  vec3 L = normalize(vec3(0.4, 0.7, 0.8));
  float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.6);
  float spec = pow(max(dot(N, normalize(L + V)), 0.0), 42.0);
  vec3 col = mix(uDeep, uMid, 0.45 + vDisp * 1.6);
  col = mix(col, uBright, fresnel * 0.85);
  col += uGlow * (smoothstep(0.28, 0.75, spec) * 0.85 + fresnel * uKick * 0.65);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 0.92);
}
`,yR=`
uniform float uTime;
uniform float uKick;
attribute float aScale;
attribute float aPhase;
varying float vAlpha;

void main() {
  vec3 pos = position;
  pos.y = mod(pos.y + uTime * (0.28 + aScale * 0.12) + uKick * 0.18, 9.0) - 0.5;
  pos.x += sin(uTime * 0.45 + aPhase) * 0.35;
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  float twinkle = 0.45 + 0.55 * sin(uTime * 2.4 + aPhase);
  vAlpha = twinkle * (0.45 + uKick * 0.55);
  gl_PointSize = clamp((18.0 * aScale * (1.0 + uKick * 0.45)) / max(1.0, -mv.z), 2.0, 26.0);
}
`,SR=`
precision highp float;
uniform vec3 uGlow;
varying float vAlpha;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;
  // Soft glowing anime starlight bokeh orb
  float core = smoothstep(0.22, 0.0, d);
  float halo = smoothstep(0.5, 0.08, d) * 0.45;
  gl_FragColor = vec4(uGlow, (core + halo) * vAlpha);
}
`;function Om({mode:o="wave3d",palette:t,intensity:i=1,className:s="",interactive:l=!0}){const u=ke.useRef(null),d=ke.useRef(o);d.current=o;const p=ke.useRef(t);p.current=t;const x=ke.useRef(i);return x.current=i,ke.useEffect(()=>{const m=u.current;if(!m)return;let _;try{_=new hR({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{return}_.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8)),_.setSize(m.clientWidth||320,m.clientHeight||200),_.domElement.style.width="100%",_.domElement.style.height="100%",_.domElement.style.display="block",m.appendChild(_.domElement);const g=new JE,v=new Ji(50,(m.clientWidth||320)/Math.max(1,m.clientHeight||200),.1,120);v.position.set(0,3.8,8.2),v.lookAt(0,-.3,-2.5);const M=new oe(0,.22,-1).normalize(),w=Array.from({length:8},()=>new gn(0,0,99,0)),N=new oe(.02,.06,.19),b=new oe(.05,.28,.72),S=new oe(.18,.76,1),T=new oe(.82,.96,1),O=new Lm(54,32,24),U=new ta({side:ii,depthWrite:!1,vertexShader:gR,fragmentShader:xR,uniforms:{uDeep:{value:N},uMid:{value:b},uBright:{value:S},uGlow:{value:T},uSunDir:{value:M},uKick:{value:0}}}),z=new Bi(O,U);g.add(z);const I=new Vl(42,34,140,140);I.rotateX(-Math.PI/2);const E=new ta({vertexShader:pR,fragmentShader:mR,uniforms:{uTime:{value:0},uBass:{value:0},uKick:{value:0},uRipples:{value:w},uDeep:{value:N},uMid:{value:b},uBright:{value:S},uGlow:{value:T},uSunDir:{value:M}}}),L=new Bi(I,E);L.position.set(0,-1.2,-3.5),g.add(L);const Y=new Dl;Y.position.set(0,1.35,-2);const F=new Dm(1.55,5),G=new ta({transparent:!0,vertexShader:vR,fragmentShader:_R,uniforms:{uTime:{value:0},uBass:{value:0},uKick:{value:0},uMidEnergy:{value:0},uDeep:{value:N},uMid:{value:b},uBright:{value:S},uGlow:{value:T}}}),Z=new Bi(F,G);Y.add(Z);const he=new ef(2.45,.028,16,100),q=new cm({color:8246268,transparent:!0,opacity:.72}),ae=new Bi(he,q);ae.rotation.x=Math.PI*.42,Y.add(ae);const P=new ef(3.1,.018,12,100),H=new cm({color:14742270,transparent:!0,opacity:.45}),ie=new Bi(P,H);ie.rotation.x=Math.PI*.56,ie.rotation.y=.4,Y.add(ie),g.add(Y);const Q=220,ce=new Float32Array(Q*3),Se=new Float32Array(Q),je=new Float32Array(Q);for(let gt=0;gt<Q;gt++)ce[gt*3+0]=(Math.random()-.5)*26,ce[gt*3+1]=Math.random()*9-.5,ce[gt*3+2]=-Math.random()*18+3.5,Se[gt]=.6+Math.random()*1.4,je[gt]=Math.random()*Math.PI*2;const Ze=new zi;Ze.setAttribute("position",new _a(ce,3)),Ze.setAttribute("aScale",new _a(Se,1)),Ze.setAttribute("aPhase",new _a(je,1));const A=new ta({transparent:!0,depthWrite:!1,blending:bp,vertexShader:yR,fragmentShader:SR,uniforms:{uTime:{value:0},uKick:{value:0},uGlow:{value:T}}}),K=new cT(Ze,A);g.add(K);const pe=[],ye=performance.now();let be=-1,Ne=0;const et=(gt,V,Nt)=>{const ct=(performance.now()-ye)*.001;pe.unshift({x:gt,z:V,bornSec:ct,strength:Nt}),pe.length>8&&(pe.length=8)},Re=new _T,He=new Vt,J=new ja(new oe(0,1,0),1.2),De=new oe,xt=gt=>{if(!l)return;const V=_.domElement.getBoundingClientRect();He.x=(gt.clientX-V.left)/Math.max(1,V.width)*2-1,He.y=-((gt.clientY-V.top)/Math.max(1,V.height))*2+1,Re.setFromCamera(He,v),Re.ray.intersectPlane(J,De)?et(Math.max(-12,Math.min(12,De.x)),Math.max(-14,Math.min(4,De.z)),1.35):et(0,-3.5,1.3)};l&&_.domElement.addEventListener("pointerdown",xt);const mt=new ResizeObserver(()=>{const gt=Math.max(2,m.clientWidth),V=Math.max(2,m.clientHeight);v.aspect=gt/V,v.updateProjectionMatrix(),_.setSize(gt,V,!1)});mt.observe(m);let St=0,Ke=0,de=0,rt=0,ut=-1;const Wt=gt=>{const V=(gt-ye)*.001,Nt=ne.getState(),ct=Mt.getState(),vt=It.getTelemetry(Nt.isPlaying,Nt.playbackRate,Nt.eqGains,gt),Pe=x.current;if(Ke=vt.kick>Ke?Ke+(vt.kick-Ke)*.8:Ke*.84,de+=(vt.bass-de)*.25,rt+=(vt.mid-rt)*.2,document.documentElement.style.setProperty("--bass-kick",Ke.toFixed(3)),vt.isBeat&&V-be>.16){be=V;const we=Math.min(1.65,(.78+vt.kick*.85)*Pe);d.current==="wave3d"?(Ne=(Ne+1)%3,Ne===0?et(0,-2.5,we*1.15):(et(-4.2,-3.2,we),et(4.2,-3.2,we))):et(0,-2.8,we*1.15)}else!Nt.isPlaying&&V-ut>3.6&&(ut=V,et(0,-3,.35));for(let we=0;we<8;we++){const ve=pe[we];!ve||V-ve.bornSec>5.5?w[we].set(0,0,99,0):w[we].set(ve.x,ve.z,V-ve.bornSec,ve.strength)}const jt=p.current||Nt.visualPalette||"azure";let it;if(jt==="artwork"){const we=ty(Nt.ambientRgb),ve=ty(xm(ct.accentColor));it={deep:[we[0]*.18+.02,we[1]*.18+.03,we[2]*.24+.08],mid:[Math.min(1,we[0]*.72+.05),Math.min(1,we[1]*.72+.07),Math.min(1,we[2]*.8+.12)],bright:[Math.min(1,ve[0]*.6+we[0]*.45+.14),Math.min(1,ve[1]*.6+we[1]*.45+.16),Math.min(1,ve[2]*.6+we[2]*.45+.18)],glow:[Math.min(1,ve[0]*.35+.65),Math.min(1,ve[1]*.35+.65),Math.min(1,ve[2]*.35+.65)]}}else it=ey[jt]||ey.azure;N.lerp(new oe(...it.deep),.06),b.lerp(new oe(...it.mid),.06),S.lerp(new oe(...it.bright),.06),T.lerp(new oe(...it.glow),.06);const ot=d.current,B=ot==="wave3d"?4.3:ot==="aurora3d"?1.85:2.35,R=ot==="wave3d"?7.2:ot==="aurora3d"?9.4:8.5,re=ot==="wave3d"?-1.1:ot==="aurora3d"?.55:.75;v.position.x=Math.sin(V*.18)*.45,v.position.y+=(B-Ke*.28-v.position.y)*.12,v.position.z+=(R-Ke*.42-v.position.z)*.14,v.lookAt(0,re,-3.2),E.uniforms.uTime.value=V,E.uniforms.uBass.value=de,E.uniforms.uKick.value=Ke,U.uniforms.uKick.value=Ke,A.uniforms.uTime.value=V,A.uniforms.uKick.value=Ke,Y.visible=ot==="vinyl3d",Y.visible&&(G.uniforms.uTime.value=V,G.uniforms.uBass.value=de,G.uniforms.uKick.value=Ke,G.uniforms.uMidEnergy.value=rt,Z.rotation.y=V*.25,ae.rotation.z=V*(.45+de*.8),ae.scale.setScalar(1+Ke*.14),ie.rotation.z=-V*(.32+rt*.6),ie.scale.setScalar(1+Ke*.22),q.color.setRGB(S.x,S.y,S.z),H.color.setRGB(T.x,T.y,T.z)),_.render(g,v),St=requestAnimationFrame(Wt)};return St=requestAnimationFrame(Wt),()=>{cancelAnimationFrame(St),mt.disconnect(),l&&_.domElement.removeEventListener("pointerdown",xt),O.dispose(),U.dispose(),I.dispose(),E.dispose(),F.dispose(),G.dispose(),he.dispose(),q.dispose(),P.dispose(),H.dispose(),Ze.dispose(),A.dispose(),_.dispose(),_.domElement.parentNode===m&&m.removeChild(_.domElement)}},[l]),h.jsx("div",{ref:u,className:`h-full w-full overflow-hidden ${l?"cursor-pointer":"pointer-events-none"} ${s}`})}const Pu=[{id:"wave3d",label:"Mặt Nước 3D"},{id:"aurora3d",label:"Biển Hoàng Hôn 3D"},{id:"vinyl3d",label:"Cầu Âm Học 3D"}],ny=[{id:"azure",label:"Biển Xanh",dot:"#38D6FF"},{id:"sunset",label:"Hoàng Hôn",dot:"#FF7852"},{id:"lagoon",label:"Ánh Trăng",dot:"#5EEAD4"},{id:"artwork",label:"Theo Ảnh Bìa",dot:"#F5F5F7"}];function bR(o){try{const t=localStorage.getItem(`harune_lrc_offset_${o}`),i=t?parseFloat(t):0;return Number.isFinite(i)?i:0}catch{return 0}}function iy(o,t){try{localStorage.setItem(`harune_lrc_offset_${o}`,t.toFixed(2))}catch{}}function MR(){var St,Ke;const o=ne(de=>de.isFullscreenOpen),t=ne(de=>de.setFullscreenOpen),i=ne(de=>de.currentTrack),s=ne(de=>de.queue),l=ne(de=>de.isPlaying),u=ne(de=>de.currentTime),d=ne(de=>de.duration),p=ne(de=>de.volume),x=ne(de=>de.muted),m=ne(de=>de.shuffle),_=ne(de=>de.repeat),g=ne(de=>de.vocalRemover),v=ne(de=>de.karaokeMicOn),M=ne(de=>de.visualMode),w=ne(de=>de.visualPalette),N=ne(de=>de.lyricsLines),b=ne(de=>de.lyricsLoading),S=ne(de=>de.togglePlay),T=ne(de=>de.nextTrack),O=ne(de=>de.prevTrack),U=ne(de=>de.requestSeek),z=ne(de=>de.setVolume),I=ne(de=>de.toggleMute),E=ne(de=>de.toggleShuffle),L=ne(de=>de.cycleRepeat),Y=ne(de=>de.playTrack),F=ne(de=>de.setDspParam),G=ne(de=>de.setKaraokeMicOn),Z=ne(de=>de.setVisualMode),he=ne(de=>de.setVisualPalette),q=ne(de=>de.setLyricsState),ae=Mt(de=>de.setActiveTab),P=Mt(de=>de.showToast),[H,ie]=ke.useState("lyrics"),[Q,ce]=ke.useState(!1),[Se,je]=ke.useState(""),[Ze,A]=ke.useState(0),[K,pe]=ke.useState(0),ye=ke.useRef(null);ke.useEffect(()=>{i&&A(bR(i.id))},[i==null?void 0:i.id]),ke.useEffect(()=>{if(!o)return;let de=0;const rt=()=>{const ut=document.getElementById("harune-audio-element");ut&&ut.src&&Number.isFinite(ut.currentTime)?pe(ut.currentTime):pe(ne.getState().currentTime),de=requestAnimationFrame(rt)};return de=requestAnimationFrame(rt),()=>cancelAnimationFrame(de)},[o,i==null?void 0:i.id]);const be=Math.max(0,K+Ze),{activeIdx:Ne,lineProgressPct:et}=ke.useMemo(()=>{if(!N.length)return{activeIdx:-1,lineProgressPct:0};if(be<N[0].time-.15)return{activeIdx:-1,lineProgressPct:0};let de=0;for(let gt=0;gt<N.length&&be>=N[gt].time;gt++)de=gt;const rt=N[de],ut=Math.max(.6,rt.duration||3.5),Wt=Math.max(0,Math.min(100,(be-rt.time)/ut*100));return{activeIdx:de,lineProgressPct:Wt}},[N,be]);if(ke.useEffect(()=>{H==="lyrics"&&ye.current&&ye.current.scrollIntoView({behavior:"smooth",block:"center"})},[Ne,H]),!o||!i)return null;const Re=Xn[i.source_platform],He=Ne>=0?(St=N[Ne])==null?void 0:St.text:"";function J(de){if(!i)return;const rt=Math.round((Ze+de)*10)/10;A(rt),iy(i.id,rt)}function De(){i&&(A(0),iy(i.id,0),P("Đã đặt lại độ trễ lời về 0.0s."))}async function xt(){const de=!v,rt=await It.enableKaraokeMic(de,ne.getState().micGain);G(rt),P(rt?"Đã bật Micro Karaoke kèm Echo phòng thu!":de?"Không truy cập được Micro — vui lòng cấp quyền trên trình duyệt.":"Đã tắt Micro Karaoke.")}function mt(){const de=Se.trim();if(!de)return;const rt=/\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/,ut=[],Wt=de.split(/\r?\n/).map(V=>V.trim()).filter(Boolean);let gt=!1;for(const V of Wt){const Nt=V.match(rt);if(Nt){gt=!0;const ct=parseInt(Nt[1],10)*60+parseInt(Nt[2],10)+parseInt((Nt[3]||"0").padEnd(3,"0").slice(0,3),10)/1e3,vt=V.replace(/\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g,"").trim()||"♪";ut.push({time:ct,duration:4,text:vt})}}if(gt&&ut.length>0)ut.sort((V,Nt)=>V.time-Nt.time),ut.forEach((V,Nt)=>{var ct;V.duration=Math.max(.8,(((ct=ut[Nt+1])==null?void 0:ct.time)??V.time+4.5)-V.time)}),q(ut,!0,!1);else{const Nt=Math.max(60,d||Wt.length*4)/Math.max(1,Wt.length);q(Wt.map((ct,vt)=>({time:vt*Nt,duration:Nt,text:ct})),!1,!1)}ce(!1),je(""),P("Đã áp dụng lời bài hát cho sân khấu Karaoke 3D!")}return h.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col bg-[#0B0B0E] text-[#F5F5F7] overflow-hidden",style:{paddingTop:"calc(14px + var(--safe-top))",paddingBottom:"calc(18px + var(--safe-bottom))"},children:[h.jsx("div",{className:"fixed inset-0 z-0",children:h.jsx(Om,{mode:M,intensity:1.15,interactive:!0})}),h.jsx("div",{className:"pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/10 to-black/72"}),h.jsxs("header",{className:"relative z-10 mx-auto grid w-full max-w-5xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:px-6 pb-2.5",children:[h.jsx("div",{className:"flex items-center justify-start",children:h.jsx("button",{type:"button",onClick:()=>t(!1),"aria-label":"Thu gọn trình phát",className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.15] bg-black/35 backdrop-blur-md text-[#F5F5F7] transition hover:bg-white/[0.12]",children:h.jsx(oM,{className:"h-5 w-5"})})}),h.jsx("div",{className:"inline-flex items-center rounded-full border border-white/[0.15] bg-black/40 p-1 backdrop-blur-xl",children:[["stage","Sân khấu",ry],["lyrics","Lời · Karaoke",ju],["queue","Hàng phát",xM]].map(([de,rt,ut])=>{const Wt=H===de;return h.jsxs("button",{type:"button",onClick:()=>ie(de),className:`inline-flex items-center gap-1.5 rounded-full px-2.5 sm:px-4 py-1.5 text-[11.5px] sm:text-[12px] font-semibold transition ${Wt?"bg-white text-[#0B0B0E]":"text-white/75 hover:text-white"}`,children:[h.jsx(ut,{className:"h-3.5 w-3.5"}),h.jsx("span",{children:rt})]},de)})}),h.jsxs("div",{className:"flex items-center justify-end gap-1.5",children:[h.jsx("div",{className:"hidden md:flex items-center gap-1 rounded-full border border-white/[0.14] bg-black/35 px-2 py-1.5 backdrop-blur-md",children:ny.map(de=>h.jsx("button",{type:"button",title:`Phối màu: ${de.label}`,onClick:()=>he(de.id),className:`h-4 w-4 rounded-full transition-transform ${w===de.id?"scale-125 ring-2 ring-white":"opacity-65 hover:opacity-100"}`,style:{backgroundColor:de.dot}},de.id))}),h.jsxs("button",{type:"button",onClick:()=>{const de=Pu.findIndex(ut=>ut.id===M),rt=Pu[(de+1)%Pu.length];Z(rt.id),P(`Cảnh 3D Anime: ${rt.label}`)},title:"Đổi cảnh render 3D Anime",className:"flex h-10 items-center gap-1.5 rounded-full border border-white/[0.14] bg-black/35 px-3 backdrop-blur-md font-mono-tech text-[11px] text-white/90 transition hover:bg-white/[0.12]",children:[h.jsx(gm,{className:"h-3.5 w-3.5",style:{color:"var(--accent)"}}),h.jsx("span",{className:"hidden sm:inline",children:(Ke=Pu.find(de=>de.id===M))==null?void 0:Ke.label})]})]})]}),h.jsxs("div",{className:"relative z-10 mx-auto flex w-full max-w-4xl flex-1 min-h-0 flex-col justify-between px-4 sm:px-8",children:[H==="stage"&&h.jsxs("div",{className:"my-auto flex flex-col items-center justify-center py-2",children:[h.jsxs("div",{className:"relative w-full max-w-[270px] sm:max-w-[330px] transition-transform duration-75",style:{transform:"scale(calc(1 + var(--bass-kick, 0) * 0.035))"},children:[h.jsx("div",{className:"aspect-square w-full overflow-hidden rounded-3xl ring-1 ring-white/25 shadow-[0_36px_90px_-14px_rgba(0,0,0,0.9)]",children:h.jsx("img",{src:i.cover_url,alt:i.title,className:"h-full w-full object-cover"})}),h.jsxs("div",{className:"mt-4 flex items-center justify-between rounded-full border border-white/[0.12] bg-black/45 px-4 py-1.5 backdrop-blur-md font-mono-tech text-[10.5px] uppercase tracking-wider text-white/80",children:[h.jsxs("span",{className:"flex items-center gap-1.5 text-white",children:[h.jsx("span",{className:"h-1.5 w-1.5 rounded-full",style:{backgroundColor:Re.dotColor}}),i.is_lossless?"LOSSLESS":i.codec.toUpperCase()]}),h.jsxs("span",{children:[i.bitrate_kbps," KBPS"]}),h.jsxs("span",{children:[(i.sample_rate_hz/1e3).toFixed(1)," KHZ"]})]})]}),He&&h.jsx("button",{type:"button",onClick:()=>ie("lyrics"),className:"mt-5 max-w-xl text-center text-[16px] sm:text-[18px] font-semibold tracking-tight text-white/95 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]",children:He})]}),H==="lyrics"&&h.jsxs("div",{className:"flex flex-1 min-h-0 flex-col",children:[h.jsxs("div",{className:"mx-auto mb-2 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2",children:[h.jsxs("button",{type:"button",onClick:()=>{const de=g>.5?0:1;F("vocalRemover",de),P(de>0?"Đã bật chế độ Karaoke (Tách giọng ca sĩ, giữ nguyên bass!)":"Đã tắt tách giọng — phát bản gốc.")},className:`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11.5px] font-semibold backdrop-blur-md transition ${g>.5?"border-[var(--accent)] bg-[rgba(var(--accent-rgb),0.28)] text-white":"border-white/[0.14] bg-black/40 text-white/85 hover:bg-white/[0.12]"}`,children:[h.jsx(ju,{className:"h-3.5 w-3.5"}),h.jsx("span",{children:g>.5?"Beat Karaoke: BẬT":"Tách giọng"})]}),h.jsxs("button",{type:"button",onClick:xt,className:`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11.5px] font-semibold backdrop-blur-md transition ${v?"border-[#30A46C] bg-[#30A46C]/25 text-white":"border-white/[0.14] bg-black/40 text-white/85 hover:bg-white/[0.12]"}`,children:[v?h.jsx(ly,{className:"h-3.5 w-3.5"}):h.jsx(oy,{className:"h-3.5 w-3.5"}),h.jsx("span",{children:v?"Mic: BẬT":"Mic Hát"})]}),h.jsxs("div",{className:"inline-flex items-center rounded-full border border-white/[0.14] bg-black/45 px-1.5 py-0.5 backdrop-blur-md font-mono-tech text-[11px]",children:[h.jsx(lM,{className:"ml-1 mr-1 h-3 w-3 text-white/60"}),h.jsx("button",{type:"button",onClick:()=>J(-.5),title:"Lùi lời sớm hơn 0.5 giây",className:"rounded-full px-1.5 py-0.5 text-white/80 hover:bg-white/15 hover:text-white",children:"-0.5s"}),h.jsx("button",{type:"button",onClick:De,title:"Chạm để đặt lại 0.0s",className:"px-1.5 text-white font-semibold",children:Ze>0?`+${Ze.toFixed(1)}s`:`${Ze.toFixed(1)}s`}),h.jsx("button",{type:"button",onClick:()=>J(.5),title:"Đẩy lời nhanh hơn 0.5 giây",className:"rounded-full px-1.5 py-0.5 text-white/80 hover:bg-white/15 hover:text-white",children:"+0.5s"})]}),h.jsxs("button",{type:"button",onClick:()=>ce(de=>!de),className:"inline-flex items-center gap-1 rounded-full border border-white/[0.14] bg-black/40 px-2.5 py-1 text-[11.5px] font-medium text-white/80 backdrop-blur-md hover:bg-white/[0.12]",children:[h.jsx(fM,{className:"h-3.5 w-3.5"}),h.jsx("span",{children:"LRC"})]}),h.jsx("div",{className:"flex md:hidden items-center gap-1.5 rounded-full border border-white/[0.14] bg-black/40 px-2 py-1 backdrop-blur-md",children:ny.map(de=>h.jsx("button",{type:"button",onClick:()=>he(de.id),className:`h-3.5 w-3.5 rounded-full ${w===de.id?"scale-125 ring-2 ring-white":"opacity-65"}`,style:{backgroundColor:de.dot}},de.id))})]}),Q&&h.jsxs("div",{className:"mx-auto mb-2 w-full max-w-xl rounded-2xl border border-white/[0.16] bg-black/75 p-4 backdrop-blur-xl",children:[h.jsx("textarea",{rows:4,value:Se,onChange:de=>je(de.target.value),placeholder:"[00:12.40] Dán lời bài hát định dạng LRC hoặc lời thường vào đây...",className:"w-full rounded-xl border border-white/[0.12] bg-[#0B0B0E]/90 p-3 font-mono-tech text-[12px] text-white focus:border-[var(--accent)] focus:outline-none"}),h.jsxs("div",{className:"mt-2 flex justify-end gap-2",children:[h.jsx("button",{type:"button",onClick:()=>ce(!1),className:"rounded-lg px-3 py-1.5 text-[12px] text-white/70 hover:text-white",children:"Đóng"}),h.jsx("button",{type:"button",onClick:mt,className:"rounded-lg px-3.5 py-1.5 text-[12px] font-semibold text-white",style:{backgroundColor:"var(--accent)"},children:"Áp dụng lời"})]})]}),h.jsx("div",{className:"no-scrollbar relative flex-1 min-h-0 overflow-y-auto px-2 py-14 text-center [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]",children:b?h.jsx("p",{className:"mt-20 font-mono-tech text-[13px] tracking-wider text-white/70",children:"ĐANG ĐỒNG BỘ LỜI BÀI HÁT CHÍNH XÁC (LRCLIB)..."}):N.length===0?h.jsxs("div",{className:"mt-16 space-y-3",children:[h.jsx("p",{className:"text-[20px] font-bold text-white/90",children:"Chưa tìm thấy lời đồng bộ cho bài này"}),h.jsxs("p",{className:"text-[13px] text-white/70",children:["Chạm vào màn hình để tạo gợn sóng 3D hoặc bấm ",h.jsx("strong",{children:"LRC"})," phía trên để dán lời hát Karaoke ngay!"]})]}):h.jsx("div",{className:"mx-auto max-w-2xl space-y-5 sm:space-y-6",children:N.map((de,rt)=>{const ut=rt===Ne,Wt=Math.abs(rt-Ne)===1;return h.jsx("button",{ref:ut?ye:void 0,type:"button",onClick:()=>U(Math.max(0,de.time-Ze)),className:`block w-full text-center transition-all duration-300 ease-out focus:outline-none ${ut?"opacity-100 py-2":Wt?"scale-95 opacity-55 hover:opacity-85":"scale-90 opacity-28 blur-[0.8px] hover:opacity-70"}`,style:ut?{transform:"scale(calc(1.04 + var(--bass-kick, 0) * 0.04))"}:void 0,children:ut?h.jsx("span",{className:"inline-block text-[24px] sm:text-[36px] font-extrabold leading-[1.24] tracking-[-0.02em] bg-clip-text text-transparent drop-shadow-[0_6px_26px_rgba(0,0,0,0.72)]",style:{backgroundImage:`linear-gradient(90deg, #FFFFFF 0%, #FFFFFF ${et}%, rgba(255,255,255,0.44) ${Math.min(100,et+5)}%, rgba(255,255,255,0.34) 100%)`},children:de.text}):h.jsx("span",{className:"text-[18px] sm:text-[23px] font-semibold leading-snug text-white",children:de.text})},`${de.time}-${rt}`)})})})]}),H==="queue"&&h.jsxs("div",{className:"no-scrollbar mx-auto my-2 flex-1 min-h-0 w-full max-w-xl overflow-y-auto rounded-2xl border border-white/[0.12] bg-black/50 p-4 backdrop-blur-xl",children:[h.jsxs("div",{className:"flex items-baseline justify-between border-b border-white/[0.1] pb-3",children:[h.jsx("h3",{className:"text-[15px] font-semibold",children:"Hàng phát hiện tại"}),h.jsxs("span",{className:"font-mono-tech text-[11.5px] text-white/70",children:[s.length," bài"]})]}),h.jsx("ul",{className:"mt-2 divide-y divide-white/[0.07]",children:s.map((de,rt)=>{const ut=de.id===i.id;return h.jsx("li",{children:h.jsxs("button",{type:"button",onClick:()=>Y(de),className:"flex w-full items-center gap-3.5 py-2.5 px-2 rounded-xl text-left transition hover:bg-white/[0.07]",children:[h.jsx("span",{className:"font-mono-tech w-5 text-[11.5px]",style:{color:ut?"var(--accent)":"rgba(255,255,255,0.55)"},children:String(rt+1).padStart(2,"0")}),h.jsx("img",{src:de.cover_url,alt:de.title,className:"h-10 w-10 rounded-md object-cover ring-1 ring-white/15"}),h.jsxs("div",{className:"min-w-0 flex-1",children:[h.jsx("p",{className:"truncate text-[13.5px] font-semibold",style:ut?{color:"var(--accent)"}:void 0,children:de.title}),h.jsx("p",{className:"truncate text-[12px] text-white/65",children:de.artist})]}),h.jsx("span",{className:"font-mono-tech text-[11.5px] text-white/60",children:cr(de.duration_sec)})]})},de.id)})})]}),h.jsxs("div",{className:"mx-auto mt-2 w-full max-w-2xl rounded-3xl border border-white/[0.14] bg-black/48 px-4 sm:px-5 py-3.5 backdrop-blur-2xl",children:[h.jsxs("div",{className:"flex items-center justify-between gap-3",children:[h.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[h.jsx("img",{src:i.cover_url,alt:i.title,className:"h-11 w-11 shrink-0 rounded-xl object-cover ring-1 ring-white/20"}),h.jsxs("div",{className:"min-w-0",children:[h.jsx("h2",{className:"truncate text-[15px] font-bold text-white leading-tight",children:i.title}),h.jsxs("p",{className:"mt-0.5 truncate text-[12px] text-white/70",children:[i.artist," · ",Re.label]})]})]}),h.jsxs("button",{type:"button",onClick:()=>{t(!1),ae("dsp")},className:"shrink-0 flex items-center gap-1.5 rounded-full border border-white/[0.15] bg-white/[0.08] px-3 py-1.5 font-mono-tech text-[11px] text-white transition hover:bg-white/[0.16]",children:[h.jsx(sf,{className:"h-3.5 w-3.5",style:{color:"var(--accent)"}}),"EQ · MIX"]})]}),h.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[h.jsx("span",{className:"font-mono-tech w-10 text-[11px] text-white/75",children:cr(K||u)}),h.jsx("input",{type:"range",min:0,max:Math.max(1,d),step:.1,value:Math.min(K||u,d||1),onChange:de=>U(Number(de.target.value)),"aria-label":"Tua nhạc",className:"hifi-slider flex-1"}),h.jsx("span",{className:"font-mono-tech w-10 text-right text-[11px] text-white/75",children:cr(d)})]}),h.jsxs("div",{className:"mt-2.5 flex items-center justify-between gap-4",children:[h.jsxs("div",{className:"flex items-center gap-3 sm:gap-5",children:[h.jsx("button",{type:"button",onClick:E,"aria-label":"Ngẫu nhiên",className:"text-white/70 hover:text-white",style:m?{color:"var(--accent)"}:void 0,children:h.jsx(dy,{className:"h-4 w-4"})}),h.jsx("button",{type:"button",onClick:O,"aria-label":"Bài trước",className:"text-white active:scale-90",children:h.jsx(hy,{className:"h-5 w-5 fill-current"})}),h.jsx("button",{type:"button",onClick:S,"aria-label":l?"Tạm dừng":"Phát",className:"flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition active:scale-95",style:{backgroundColor:"var(--accent)"},children:l?h.jsx(Pl,{className:"h-5 w-5 fill-current"}):h.jsx(Ka,{className:"h-5 w-5 fill-current translate-x-[1px]"})}),h.jsx("button",{type:"button",onClick:T,"aria-label":"Bài tiếp",className:"text-white active:scale-90",children:h.jsx(Vu,{className:"h-5 w-5 fill-current"})}),h.jsx("button",{type:"button",onClick:L,"aria-label":"Lặp lại",className:"text-white/70 hover:text-white",style:_!=="off"?{color:"var(--accent)"}:void 0,children:_==="one"?h.jsx(uy,{className:"h-4 w-4"}):h.jsx(fy,{className:"h-4 w-4"})})]}),h.jsxs("div",{className:"hidden sm:flex items-center gap-2.5 w-36",children:[h.jsx("button",{type:"button",onClick:I,className:"text-white/75 hover:text-white",children:x||p===0?h.jsx(my,{className:"h-4 w-4"}):h.jsx(py,{className:"h-4 w-4"})}),h.jsx("input",{type:"range",min:0,max:1,step:.01,value:x?0:p,onChange:de=>z(Number(de.target.value)),"aria-label":"Âm lượng",className:"hifi-slider flex-1"})]})]})]})]})]})}const ER=[{code:"vn",label:"Việt Nam"},{code:"us",label:"Mỹ"},{code:"kr",label:"Hàn Quốc"},{code:"jp",label:"Nhật Bản"},{code:"gb",label:"Anh"},{code:"global",label:"Toàn cầu"}];function TR(){const[o,t]=ke.useState("vn"),[i,s]=ke.useState([]),[l,u]=ke.useState(""),[d,p]=ke.useState(!1),[x,m]=ke.useState(null),[_,g]=ke.useState(null),v=Mt(F=>F.harubotStatus),M=Mt(F=>F.streamQuality),w=Mt(F=>F.showToast),N=ne(F=>F.currentTrack),b=ne(F=>F.playlists),S=ne(F=>F.libraryTracks),T=ne(F=>F.playTrack),O=ne(F=>F.prependLibraryTrack),U=ne(F=>F.setFullscreenOpen),z=ne(F=>F.visualMode),I=b.length>0?b:vp;async function E(F){p(!0),m(null);try{const G=await Sn.getCharts(F,25);G.ok&&G.tracks.length>0?(s(G.tracks),u(G.source)):(s([]),m("Không tải được danh sách bài hát từ nguồn BXH."))}catch(G){m(G instanceof Error?G.message:"Chưa kết nối được Backend Harune (/api/charts).")}finally{p(!1)}}ke.useEffect(()=>{E(o)},[o]);async function L(F){if(_===null){g(F.rank),w(`HaruBot đang tìm luồng Hi-Fi: ${F.title}...`);try{const G=await Sn.resolveLink(F.query,M);if(G.ok&&G.track){const Z={...G.track,title:F.title||G.track.title,artist:F.artist||G.track.artist,cover_url:F.cover_url||G.track.cover_url};O(Z),T(Z,[Z,...S]),w(G.is_preview?`Đang phát (Nghe thử 30s · Gắn VibeHost ở Cài đặt để phát trọn bài): ${Z.title}`:`Đang phát Full Hi-Fi: ${Z.title}`)}}catch(G){w(G instanceof Error?G.message:"Không thể giải mã bài này qua HaruBot.")}finally{g(null)}}}async function Y(F,G){try{const he=await Sn.getPlaylist(F);if(he.ok&&he.tracks.length>0){T(he.tracks[0],he.tracks),w(`Đang phát ${he.playlist.name}`);return}}catch{}const Z=S[G%S.length]||Va[0];T(Z,S.length?S:Va)}return h.jsxs("div",{className:"space-y-12",children:[h.jsxs("header",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-white/[0.07] pb-6",children:[h.jsxs("div",{children:[h.jsx("p",{className:"font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#8E8E93]",children:"HARUNE · DISCOVER"}),h.jsx("h1",{className:"mt-1.5 text-[30px] sm:text-[38px] font-bold tracking-[-0.03em] leading-[1.08] text-[#F5F5F7]",children:"Khám phá âm thanh"})]}),h.jsxs("div",{className:"inline-flex items-center gap-3 self-start sm:self-auto rounded-full border border-white/[0.09] bg-[#15151A] px-3.5 py-1.5",children:[h.jsxs("span",{className:"relative flex h-2 w-2",children:[h.jsx("span",{className:`absolute inline-flex h-full w-full rounded-full opacity-75 ${v.connected?"animate-ping bg-[#30A46C]":"bg-[#E5484D]"}`}),h.jsx("span",{className:`relative inline-flex h-2 w-2 rounded-full ${v.connected?"bg-[#30A46C]":"bg-[#E5484D]"}`})]}),h.jsx("span",{className:"text-[12px] font-medium text-[#F5F5F7]",children:v.label}),typeof v.latency_ms=="number"&&h.jsxs("span",{className:"font-mono-tech text-[11px] text-[#8E8E93]",children:[v.latency_ms,"ms"]})]})]}),N&&h.jsxs("section",{className:"relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#0F0F14] min-h-[210px] sm:min-h-[236px]",children:[h.jsx("div",{className:"absolute inset-0",children:h.jsx(Om,{mode:z,intensity:1.05,interactive:!0})}),h.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-r from-black/72 via-black/32 to-black/45"}),h.jsxs("div",{className:"relative z-10 flex h-full flex-col justify-between gap-5 p-6 sm:flex-row sm:items-end sm:p-7",children:[h.jsxs("div",{className:"flex items-center gap-4 min-w-0",children:[h.jsx("img",{src:N.cover_url,alt:N.title,className:"h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-2xl object-cover ring-1 ring-white/25 shadow-2xl"}),h.jsxs("div",{className:"min-w-0",children:[h.jsxs("span",{className:"inline-flex items-center gap-1.5 rounded-full border border-white/[0.15] bg-black/45 px-2.5 py-0.5 font-mono-tech text-[10px] uppercase tracking-widest text-white/90 backdrop-blur-md",children:[h.jsx(gm,{className:"h-3 w-3",style:{color:"var(--accent)"}}),"ANIME 3D WAVE · KARAOKE STAGE"]}),h.jsx("h2",{className:"mt-2 truncate text-[20px] sm:text-[25px] font-bold tracking-tight text-white",children:N.title}),h.jsxs("p",{className:"mt-0.5 truncate text-[13px] text-white/75",children:[N.artist," ·"," ",N.is_lossless?"LOSSLESS":N.codec.toUpperCase()," ",N.bitrate_kbps," kbps"]})]})]}),h.jsx("div",{className:"flex flex-wrap items-center gap-2.5 shrink-0",children:h.jsxs("button",{type:"button",onClick:()=>U(!0),className:"inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[12.5px] font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.98]",style:{backgroundColor:"var(--accent)"},children:[h.jsx(ju,{className:"h-3.5 w-3.5"}),"Lời Karaoke & Sóng 3D"]})})]})]}),h.jsxs("section",{"aria-labelledby":"mixed-playlists-heading",children:[h.jsxs("div",{className:"flex items-baseline justify-between mb-5",children:[h.jsxs("div",{children:[h.jsx("h2",{id:"mixed-playlists-heading",className:"text-[18px] font-semibold tracking-tight text-[#F5F5F7]",children:"Playlist Tổ Hợp"}),h.jsx("p",{className:"mt-0.5 text-[13px] text-[#8E8E93]",children:"Trộn mượt YouTube, Spotify, SoundCloud, TikTok & FLAC trong cùng danh sách."})]}),h.jsxs("span",{className:"font-mono-tech text-[11px] uppercase tracking-wider text-[#8E8E93]",children:[String(I.length).padStart(2,"0")," MIXES"]})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-4",children:[I[0]&&h.jsxs("button",{type:"button",onClick:()=>Y(I[0].id,0),className:"group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#15151A] p-6 text-left transition-colors duration-200 hover:border-white/[0.16] active:scale-[0.995]",children:[h.jsxs("div",{className:"flex items-start justify-between gap-4",children:[I[0].cover_url?h.jsx("img",{src:I[0].cover_url,alt:I[0].name,className:"h-24 w-24 sm:h-28 sm:w-28 rounded-xl object-cover ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-[1.03]"}):h.jsx("div",{className:"flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-xl bg-[#1E1E26] font-mono-tech text-[14px] text-[#8E8E93] ring-1 ring-white/10",children:"MIX 01"}),h.jsx("span",{className:"flex h-11 w-11 items-center justify-center rounded-full text-white transition-transform duration-200 group-hover:scale-105",style:{backgroundColor:"var(--accent)"},children:h.jsx(Ka,{className:"h-4 w-4 fill-current translate-x-[1px]"})})]}),h.jsxs("div",{className:"mt-6",children:[h.jsx("div",{className:"flex flex-wrap items-center gap-1.5",children:(I[0].platforms.length?I[0].platforms:["youtube","spotify","soundcloud","local"]).map(F=>{var G,Z;return h.jsxs("span",{className:"inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 font-mono-tech text-[10px] uppercase text-[#C7C7CC]",children:[h.jsx("span",{className:"h-1.5 w-1.5 rounded-full",style:{backgroundColor:((G=Xn[F])==null?void 0:G.dotColor)||"#FF5A36"}}),((Z=Xn[F])==null?void 0:Z.short)||F]},F)})}),h.jsx("h3",{className:"mt-3 text-[20px] font-bold tracking-tight text-[#F5F5F7]",children:I[0].name}),h.jsx("p",{className:"mt-1.5 max-w-md text-[13px] leading-relaxed text-[#8E8E93]",children:I[0].description||"Danh sách phát đa nền tảng Harune."})]})]}),h.jsx("div",{className:"flex flex-col gap-4",children:(I.length>1?I.slice(1,3):vp.slice(1)).map((F,G)=>h.jsxs("button",{type:"button",onClick:()=>Y(F.id,G+1),className:"group flex flex-1 items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#15151A] p-4 text-left transition-colors duration-200 hover:border-white/[0.16] active:scale-[0.995]",children:[F.cover_url?h.jsx("img",{src:F.cover_url,alt:F.name,className:"h-[72px] w-[72px] shrink-0 rounded-xl object-cover ring-1 ring-white/10"}):h.jsx("div",{className:"flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-xl bg-[#1E1E26] font-mono-tech text-[11px] text-[#8E8E93]",children:"MIX"}),h.jsxs("div",{className:"min-w-0 flex-1",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[F.platforms.map(Z=>{var he;return h.jsx("span",{className:"font-mono-tech text-[10px] uppercase text-[#8E8E93]",children:((he=Xn[Z])==null?void 0:he.short)||Z},Z)}),h.jsxs("span",{className:"font-mono-tech text-[10px] text-[#8E8E93]",children:["· ",F.track_count," bài"]})]}),h.jsx("h3",{className:"mt-1 truncate text-[15px] font-semibold text-[#F5F5F7]",children:F.name}),h.jsx("p",{className:"mt-0.5 line-clamp-2 text-[12px] text-[#8E8E93]",children:F.description||"Playlist tổng hợp nhiều nguồn nhạc."})]}),h.jsx(aM,{className:"h-4 w-4 shrink-0 text-[#8E8E93] transition group-hover:text-[#F5F5F7]"})]},F.id))})]})]}),h.jsxs("section",{"aria-labelledby":"charts-heading",children:[h.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-white/[0.07] pb-4",children:[h.jsxs("div",{children:[h.jsx("h2",{id:"charts-heading",className:"text-[18px] font-semibold tracking-tight text-[#F5F5F7]",children:"Bảng xếp hạng thịnh hành theo quốc gia"}),h.jsx("p",{className:"mt-0.5 text-[13px] text-[#8E8E93]",children:"Dữ liệu thịnh hành trực tiếp — chạm bất kỳ bài nào để HaruBot tự tìm luồng Hi-Fi & phát ngay."})]}),h.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[ER.map(F=>{const G=o===F.code;return h.jsx("button",{type:"button",onClick:()=>t(F.code),className:`rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${G?"bg-[#F5F5F7] text-[#0B0B0E]":"border border-white/[0.08] text-[#8E8E93] hover:text-[#F5F5F7]"}`,children:F.label},F.code)}),h.jsx("button",{type:"button",onClick:()=>E(o),"aria-label":"Tải lại bảng xếp hạng",className:"rounded-full border border-white/[0.08] p-1.5 text-[#8E8E93] hover:text-white",children:h.jsx(cy,{className:`h-3.5 w-3.5 ${d?"animate-spin":""}`})})]})]}),d&&i.length===0?h.jsx("div",{className:"mt-4 space-y-3",children:Array.from({length:6}).map((F,G)=>h.jsxs("div",{className:"flex items-center gap-4 py-2 px-2 animate-pulse",children:[h.jsx("div",{className:"h-4 w-6 rounded bg-white/[0.06]"}),h.jsx("div",{className:"h-11 w-11 rounded-lg bg-white/[0.08]"}),h.jsxs("div",{className:"flex-1 space-y-2",children:[h.jsx("div",{className:"h-3.5 w-48 rounded bg-white/[0.08]"}),h.jsx("div",{className:"h-3 w-32 rounded bg-white/[0.05]"})]})]},G))}):x&&i.length===0?h.jsxs("div",{className:"mt-5 rounded-2xl border border-white/[0.08] bg-[#15151A] p-6 text-center space-y-3",children:[h.jsx("p",{className:"text-[14px] text-[#C7C7CC]",children:x}),h.jsx("button",{type:"button",onClick:()=>E(o),className:"rounded-full px-4 py-1.5 text-[12.5px] font-semibold text-white",style:{backgroundColor:"var(--accent)"},children:"Thử tải lại"})]}):h.jsx("ul",{className:"mt-2 divide-y divide-white/[0.06]",children:i.map(F=>{const G=_===F.rank,Z=N&&N.title.toLowerCase()===F.title.toLowerCase();return h.jsx("li",{children:h.jsxs("button",{type:"button",disabled:_!==null,onClick:()=>L(F),className:"group flex w-full items-center gap-4 py-3 px-2 rounded-xl text-left transition-colors hover:bg-white/[0.03] disabled:opacity-65",children:[h.jsx("span",{className:"font-mono-tech w-6 text-[13px] font-semibold",style:{color:F.rank<=3||Z?"var(--accent)":"#8E8E93"},children:String(F.rank).padStart(2,"0")}),h.jsxs("div",{className:"relative h-11 w-11 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10",children:[F.cover_url?h.jsx("img",{src:F.cover_url,alt:F.title,className:"h-full w-full object-cover",loading:"lazy"}):h.jsx("div",{className:"flex h-full w-full items-center justify-center bg-[#1C1C23]",children:h.jsx(Ka,{className:"h-4 w-4 text-[#8E8E93]"})}),G&&h.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/65",children:h.jsx(xp,{className:"h-4 w-4 animate-spin text-white"})})]}),h.jsxs("div",{className:"min-w-0 flex-1",children:[h.jsx("p",{className:"truncate text-[14px] font-semibold",style:Z?{color:"var(--accent)"}:void 0,children:F.title}),h.jsx("p",{className:"mt-0.5 truncate text-[12.5px] text-[#8E8E93]",children:F.artist})]}),h.jsx("span",{className:"hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] px-2.5 py-0.5 font-mono-tech text-[10px] text-[#C7C7CC] group-hover:border-white/25",children:G?"ĐANG GIẢI MÃ...":"PHÁT HARUBOT"}),F.duration_sec>0&&h.jsx("span",{className:"font-mono-tech w-11 text-right text-[12px] text-[#8E8E93]",children:cr(F.duration_sec)})]})},`${o}-${F.rank}-${F.title}`)})}),h.jsxs("div",{className:"mt-4 flex items-center gap-2 font-mono-tech text-[11px] text-[#8E8E93]",children:[h.jsx(mm,{className:"h-3.5 w-3.5",style:{color:"var(--accent)"}}),h.jsxs("span",{children:["Nguồn BXH trực tiếp:"," ",l==="deezer_global"?"Deezer Global Top Charts":"Apple Music Official Top Songs"," ","(",o.toUpperCase(),")"]})]})]})]})}function AR(){const o=ke.useRef(null),[t,i]=ke.useState("eq"),[s,l]=ke.useState(""),[u,d]=ke.useState(!1),p=ne(J=>J.currentTrack),x=ne(J=>J.isPlaying),m=ne(J=>J.eqGains),_=ne(J=>J.preAmpDb),g=ne(J=>J.tubeWarmth),v=ne(J=>J.bitPerfect),M=ne(J=>J.activePresetId),w=ne(J=>J.eqPresets),N=ne(J=>J.bassBoost),b=ne(J=>J.spatial3d),S=ne(J=>J.playbackRate),T=ne(J=>J.preservesPitch),O=ne(J=>J.reverbAmount),U=ne(J=>J.vocalRemover),z=ne(J=>J.karaokeMicOn),I=ne(J=>J.micGain),E=ne(J=>J.visualMode),L=ne(J=>J.visualPalette),Y=ne(J=>J.libraryTracks),F=ne(J=>J.deckBTrack),G=ne(J=>J.deckBPlaying),Z=ne(J=>J.deckBRate),he=ne(J=>J.crossfader),q=ne(J=>J.djFilter),ae=ne(J=>J.djEcho),P=ne(J=>J.setEqBand),H=ne(J=>J.applyEqPreset),ie=ne(J=>J.saveCustomPreset),Q=ne(J=>J.setDspParam),ce=ne(J=>J.setBitPerfect),Se=ne(J=>J.setPreservesPitch),je=ne(J=>J.setKaraokeMicOn),Ze=ne(J=>J.setVisualMode),A=ne(J=>J.setVisualPalette),K=ne(J=>J.setFullscreenOpen),pe=ne(J=>J.loadDeckB),ye=ne(J=>J.toggleDeckBPlay),be=Mt(J=>J.accentColor),Ne=Mt(J=>J.showToast);ke.useEffect(()=>{const J=o.current;if(!J)return;const De=J.getContext("2d");if(!De)return;let xt=0;const mt=new Float32Array(48),St=Ke=>{const{width:de,height:rt}=J;De.clearRect(0,0,de,rt);const ut=ne.getState(),Wt=It.getTelemetry(ut.isPlaying,ut.playbackRate,ut.eqGains,Ke);De.strokeStyle="rgba(255,255,255,0.06)",De.lineWidth=1;for(let ct=1;ct<=3;ct++){const vt=rt/4*ct;De.beginPath(),De.moveTo(0,vt),De.lineTo(de,vt),De.stroke()}const gt=48,V=4,Nt=(de-V*(gt-1))/gt;for(let ct=0;ct<gt;ct++){const vt=Wt.bins[ct]||0;vt>mt[ct]?mt[ct]=vt:mt[ct]=Math.max(0,mt[ct]-.014);const Pe=Math.max(3,vt*(rt-14)),jt=ct*(Nt+V),it=rt-Pe;De.fillStyle=ct<10?be:"rgba(245,245,247,0.52)",De.beginPath(),De.roundRect(jt,it,Nt,Pe,2),De.fill();const ot=Math.max(2,rt-mt[ct]*(rt-14)-3);De.fillStyle=ct<10?"#FFFFFF":be,De.fillRect(jt,ot,Nt,2)}xt=requestAnimationFrame(St)};return xt=requestAnimationFrame(St),()=>cancelAnimationFrame(xt)},[be]);function et(){if(u)return;d(!0);const J=he,De=J<.5?1:0,xt=performance.now(),mt=3600;De===1&&F&&!G&&ye();const St=Ke=>{const de=Math.min(1,(Ke-xt)/mt);Q("crossfader",J+(De-J)*de),de<1?requestAnimationFrame(St):d(!1)};requestAnimationFrame(St)}async function Re(J){if(J.preventDefault(),!s.trim())return;const De=ie(s);De&&(Sn.createEqPreset({name:De.name,gains:De.gains,bass_boost:De.bass_boost,spatial_3d:De.spatial_3d,playback_rate:De.playback_rate,reverb_amount:De.reverb_amount}).catch(()=>{}),Ne(`Đã lưu preset "${De.name}"`)),l("")}async function He(){const J=!z,De=await It.enableKaraokeMic(J,I);je(De),Ne(De?"Đã kích hoạt Micro Karaoke + Studio Echo!":J?"Không thể bật Micro — hãy kiểm tra quyền truy cập micro của trình duyệt.":"Đã tắt Micro Karaoke.")}return h.jsxs("div",{className:"space-y-8",children:[h.jsxs("header",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-white/[0.07] pb-6",children:[h.jsxs("div",{children:[h.jsx("p",{className:"font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#8E8E93]",children:"HARUNE · WEB AUDIO DSP · MIX · KARAOKE"}),h.jsx("h1",{className:"mt-1.5 text-[30px] sm:text-[38px] font-bold tracking-[-0.03em] leading-[1.08]",children:"Phòng Hi-Fi & Mix Studio"})]}),p&&h.jsxs("div",{className:"flex flex-wrap items-center gap-2 font-mono-tech text-[11px]",children:[h.jsx("span",{className:"rounded-md px-2.5 py-1 font-semibold text-white",style:{backgroundColor:p.is_lossless?"var(--accent)":"rgba(255,255,255,0.09)"},children:p.is_lossless?"LOSSLESS":p.codec.toUpperCase()}),h.jsxs("span",{className:"rounded-md border border-white/[0.08] bg-[#15151A] px-2.5 py-1 text-[#C7C7CC]",children:[p.bitrate_kbps," kbps"]}),h.jsxs("span",{className:"rounded-md border border-white/[0.08] bg-[#15151A] px-2.5 py-1 text-[#C7C7CC]",children:[(p.sample_rate_hz/1e3).toFixed(1)," kHz"]})]})]}),h.jsxs("section",{className:"grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-4",children:[h.jsxs("div",{className:"relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0B0B0E] min-h-[190px]",children:[h.jsx(Om,{mode:E,intensity:1.1,interactive:!0}),h.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35"}),h.jsxs("div",{className:"absolute inset-x-4 top-3 flex items-center justify-between",children:[h.jsxs("span",{className:"inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-white/90 backdrop-blur-md",children:[h.jsx(gm,{className:"h-3 w-3",style:{color:"var(--accent)"}}),"ANIME WATER RIPPLE · CHẠM ĐỂ TẠO GỢN SÓNG"]}),h.jsx("button",{type:"button",onClick:()=>K(!0),className:"rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md hover:bg-white/25",children:"Mở Sân Khấu 3D"})]}),h.jsxs("div",{className:"absolute inset-x-4 bottom-3 flex flex-wrap items-center justify-between gap-2",children:[h.jsx("div",{className:"flex items-center gap-1.5",children:[["wave3d","Mặt Nước 3D"],["aurora3d","Biển Hoàng Hôn 3D"],["vinyl3d","Cầu Âm Học 3D"]].map(([J,De])=>h.jsx("button",{type:"button",onClick:()=>Ze(J),className:`rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur-md transition ${E===J?"bg-white text-[#0B0B0E]":"bg-black/45 text-white/85 hover:bg-black/65"}`,children:De},J))}),h.jsx("div",{className:"flex items-center gap-1.5 rounded-full bg-black/45 px-2 py-1 backdrop-blur-md",children:[["azure","Biển Xanh","#38D6FF"],["sunset","Hoàng Hôn","#FF7852"],["lagoon","Ánh Trăng","#5EEAD4"],["artwork","Ảnh Bìa","#F5F5F7"]].map(([J,De,xt])=>h.jsx("button",{type:"button",title:`Phối màu: ${De}`,onClick:()=>A(J),className:`h-4 w-4 rounded-full transition-transform ${L===J?"scale-125 ring-2 ring-white":"opacity-65 hover:opacity-100"}`,style:{backgroundColor:xt}},J))})]})]}),h.jsxs("div",{className:"flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#15151A] p-4",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"font-mono-tech text-[10.5px] uppercase tracking-wider text-[#8E8E93]",children:"REAL-TIME FFT ANALYZER (WEB AUDIO)"}),h.jsx("span",{className:"font-mono-tech text-[10.5px]",style:{color:x?"var(--accent)":"#8E8E93"},children:x?"LIVE 60 FPS":"STANDBY"})]}),h.jsx("canvas",{ref:o,width:620,height:144,className:"h-[144px] w-full rounded-xl bg-[#0B0B0E] p-2"})]})]}),h.jsx("div",{className:"flex flex-wrap gap-2 border-b border-white/[0.07] pb-4",children:[["eq","Equalizer 10 Dải & DSP",sf],["mixer","Bàn Mix Nhạc (DJ Deck)",ry],["karaoke","Phòng Hát Karaoke",ju]].map(([J,De,xt])=>{const mt=t===J;return h.jsxs("button",{type:"button",onClick:()=>i(J),className:`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-[13px] font-semibold transition ${mt?"text-white":"border border-white/[0.08] bg-[#15151A] text-[#8E8E93] hover:text-[#F5F5F7]"}`,style:mt?{backgroundColor:"var(--accent)"}:void 0,children:[h.jsx(xt,{className:"h-4 w-4"}),De]},J)})}),t==="eq"&&h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[h.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[w.map(J=>{const De=M===J.id;return h.jsx("button",{type:"button",onClick:()=>H(J.id),className:`rounded-full px-3.5 py-1.5 text-[12px] font-medium transition ${De?"text-white":"border border-white/[0.08] bg-[#15151A] text-[#8E8E93] hover:text-[#F5F5F7]"}`,style:De?{backgroundColor:"var(--accent)"}:void 0,children:J.name},J.id)}),h.jsx("button",{type:"button",onClick:()=>{Q("playbackRate",.85),Se(!1),Q("reverbAmount",.45),Q("bassBoost",.4),Ne("Đã kích hoạt chế độ Slowed + Reverb!")},className:"rounded-full border border-white/[0.14] bg-white/[0.04] px-3.5 py-1.5 text-[12px] font-medium text-[#F5F5F7] hover:bg-white/[0.1]",children:"Slowed + Reverb"})]}),h.jsxs("button",{type:"button",onClick:()=>{H("builtin_flat"),Se(!0)},className:"inline-flex items-center gap-1.5 text-[12px] text-[#8E8E93] hover:text-[#F5F5F7]",children:[h.jsx(vM,{className:"h-3.5 w-3.5"}),"Reset Flat"]})]}),h.jsx("div",{className:"rounded-2xl border border-white/[0.08] bg-[#15151A] p-5 overflow-x-auto",children:h.jsx("div",{className:"grid min-w-[540px] grid-cols-10 gap-2",children:UM.map((J,De)=>{const xt=m[De];return h.jsxs("div",{className:"flex flex-col items-center gap-3",children:[h.jsx("span",{className:"font-mono-tech text-[11px]",style:{color:xt!==0?"var(--accent)":"#8E8E93"},children:xt>0?`+${xt.toFixed(1)}`:xt.toFixed(1)}),h.jsx("div",{className:"flex h-36 items-center justify-center",children:h.jsx("input",{type:"range",min:-12,max:12,step:.5,value:xt,onChange:mt=>P(De,Number(mt.target.value)),"aria-label":`Dải tần ${J}Hz`,className:"hifi-slider w-32 -rotate-90"})}),h.jsx("span",{className:"font-mono-tech text-[10.5px] text-[#8E8E93]",children:J})]},J)})})}),h.jsxs("form",{onSubmit:Re,className:"flex flex-col sm:flex-row gap-2.5 max-w-md",children:[h.jsx("input",{type:"text",value:s,onChange:J=>l(J.target.value),placeholder:"Tên preset cá nhân (vd: Tai nghe IEM Bass)...",className:"flex-1 rounded-xl border border-white/[0.09] bg-[#15151A] px-3.5 py-2 text-[13px] text-[#F5F5F7] placeholder:text-[#636366] focus:border-[var(--accent)] focus:outline-none"}),h.jsxs("button",{type:"submit",className:"inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/[0.12] bg-white/[0.05] px-4 py-2 text-[12.5px] font-medium text-[#F5F5F7] hover:bg-white/[0.1]",children:[h.jsx(_M,{className:"h-3.5 w-3.5"}),"Lưu Preset"]})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[h.jsxs("div",{className:"rounded-2xl border border-white/[0.08] bg-[#15151A] p-4 flex flex-col justify-between gap-3",children:[h.jsxs("div",{children:[h.jsxs("p",{className:"font-mono-tech text-[10px] uppercase tracking-widest text-[#8E8E93]",children:["DAC ENGINE · ",It.getHardwareSpecs().bitDepth," · ",(It.getHardwareSpecs().sampleRateHz/1e3).toFixed(1),"KHZ"]}),h.jsx("h3",{className:"mt-1 text-[14px] font-semibold text-[#F5F5F7]",children:v?"Bit-Perfect Direct (Thuần gốc)":"Studio Hi-Fi DSP (Đang xử lý)"})]}),h.jsx("button",{type:"button",onClick:()=>{ce(!v),Ne(v?"Đã bật lại mạch Studio Hi-Fi DSP.":"Đã bật Bit-Perfect Direct (bypass EQ/FX cho nhạc Lossless).")},className:`rounded-xl px-3.5 py-2 text-[12px] font-semibold transition ${v?"bg-[#F5F5F7] text-[#0B0B0E]":"border border-white/[0.12] bg-white/[0.05] text-[#F5F5F7]"}`,children:v?"Đang bật Bit-Perfect · Tắt":"Bật Bit-Perfect Pure"})]}),h.jsxs("div",{className:"rounded-2xl border border-white/[0.08] bg-[#15151A] p-4",children:[h.jsxs("div",{className:"flex items-baseline justify-between",children:[h.jsx("h3",{className:"text-[14px] font-semibold text-[#F5F5F7]",children:"Analog Tube Warmth"}),h.jsxs("span",{className:"font-mono-tech text-[12.5px] font-semibold",style:{color:"var(--accent)"},children:[Math.round(g*100),"%"]})]}),h.jsx("p",{className:"mt-0.5 text-[11.5px] text-[#8E8E93]",children:"Bồi âm đèn chân không (4× oversample) làm dày & ấm tiếng"}),h.jsx("input",{type:"range",min:0,max:1,step:.05,disabled:v,value:g,onChange:J=>Q("tubeWarmth",Number(J.target.value)),className:"hifi-slider mt-3 w-full disabled:opacity-40"})]}),h.jsxs("div",{className:"rounded-2xl border border-white/[0.08] bg-[#15151A] p-4",children:[h.jsxs("div",{className:"flex items-baseline justify-between",children:[h.jsx("h3",{className:"text-[14px] font-semibold text-[#F5F5F7]",children:"Pre-Amp Gain"}),h.jsxs("span",{className:"font-mono-tech text-[12.5px] font-semibold",style:{color:"var(--accent)"},children:[_>0?`+${_.toFixed(1)}`:_.toFixed(1)," dB"]})]}),h.jsx("p",{className:"mt-0.5 text-[11.5px] text-[#8E8E93]",children:"Khuếch đại đầu vào trước EQ & True-Peak Limiter"}),h.jsx("input",{type:"range",min:-6,max:6,step:.5,disabled:v,value:_,onChange:J=>Q("preAmpDb",Number(J.target.value)),className:"hifi-slider mt-3 w-full disabled:opacity-40"})]})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{key:"bassBoost",label:"Bass Enhancer",desc:"LowShelf 68Hz tăng lực sub-bass & gợn sóng 3D",value:N,min:0,max:1,step:.05,display:`${Math.round(N*100)}%`},{key:"spatial3d",label:"Spatial Audio 3D",desc:"Mở rộng không gian stereo Haas 3D",value:b,min:0,max:1,step:.05,display:`${Math.round(b*100)}%`},{key:"playbackRate",label:"Tốc độ phát (Speed / Slowed)",desc:"0.75× Slowed tới 1.50× Nightcore",value:S,min:.75,max:1.5,step:.05,display:`${S.toFixed(2)}×`},{key:"reverbAmount",label:"Room Reverb (Convolver)",desc:"Độ vang phòng thu 3D thật bằng Web Audio Convolver",value:O,min:0,max:1,step:.05,display:`${Math.round(O*100)}%`}].map(J=>h.jsxs("div",{className:"rounded-2xl border border-white/[0.08] bg-[#15151A] p-5",children:[h.jsxs("div",{className:"flex items-baseline justify-between",children:[h.jsx("h3",{className:"text-[14px] font-semibold text-[#F5F5F7]",children:J.label}),h.jsx("span",{className:"font-mono-tech text-[13px] font-semibold",style:{color:"var(--accent)"},children:J.display})]}),h.jsx("p",{className:"mt-0.5 text-[12px] text-[#8E8E93]",children:J.desc}),h.jsx("input",{type:"range",min:J.min,max:J.max,step:J.step,value:J.value,onChange:De=>Q(J.key,Number(De.target.value)),className:"hifi-slider mt-4 w-full"}),J.key==="playbackRate"&&h.jsxs("label",{className:"mt-3 inline-flex items-center gap-2 text-[12px] text-[#C7C7CC] cursor-pointer",children:[h.jsx("input",{type:"checkbox",checked:!T,onChange:De=>Se(!De.target.checked),className:"accent-[var(--accent)]"}),"Hạ / nâng tông theo tốc độ (chuẩn Slowed + Reverb)"]})]},J.key))})]}),t==="mixer"&&h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"rounded-2xl border border-white/[0.08] bg-[#15151A] p-5",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"font-mono-tech text-[11px] font-semibold uppercase tracking-widest",style:{color:"var(--accent)"},children:"DECK A · MAIN"}),h.jsxs("span",{className:"font-mono-tech text-[11px] text-[#8E8E93]",children:[S.toFixed(2),"×"]})]}),h.jsx("p",{className:"mt-2 truncate text-[16px] font-bold text-[#F5F5F7]",children:(p==null?void 0:p.title)||"Chưa chọn bài"}),h.jsx("p",{className:"truncate text-[12.5px] text-[#8E8E93]",children:p==null?void 0:p.artist}),h.jsxs("div",{className:"mt-4",children:[h.jsx("label",{className:"font-mono-tech text-[10.5px] text-[#8E8E93]",children:"TEMPO DECK A"}),h.jsx("input",{type:"range",min:.75,max:1.5,step:.02,value:S,onChange:J=>Q("playbackRate",Number(J.target.value)),className:"hifi-slider mt-1.5 w-full"})]})]}),h.jsxs("div",{className:"rounded-2xl border border-white/[0.08] bg-[#15151A] p-5",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"font-mono-tech text-[11px] font-semibold uppercase tracking-widest text-[#5EB1EF]",children:"DECK B · MIX TRACK"}),h.jsxs("button",{type:"button",onClick:ye,className:"inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1 text-[11.5px] font-semibold text-white hover:bg-white/[0.12]",children:[G?h.jsx(Pl,{className:"h-3 w-3 fill-current"}):h.jsx(Ka,{className:"h-3 w-3 fill-current"}),G?"Tạm dừng B":"Phát Deck B"]})]}),h.jsx("select",{value:(F==null?void 0:F.id)||"",onChange:J=>{const De=Y.find(xt=>xt.id===J.target.value);De&&pe(De)},className:"mt-2.5 w-full rounded-xl border border-white/[0.1] bg-[#0B0B0E] px-3 py-2 text-[13px] text-[#F5F5F7] focus:border-[var(--accent)] focus:outline-none",children:Y.map(J=>h.jsxs("option",{value:J.id,children:[J.title," — ",J.artist]},J.id))}),h.jsxs("div",{className:"mt-4",children:[h.jsxs("div",{className:"flex justify-between font-mono-tech text-[10.5px] text-[#8E8E93]",children:[h.jsx("span",{children:"TEMPO DECK B"}),h.jsxs("span",{children:[Z.toFixed(2),"×"]})]}),h.jsx("input",{type:"range",min:.75,max:1.5,step:.02,value:Z,onChange:J=>Q("deckBRate",Number(J.target.value)),className:"hifi-slider mt-1.5 w-full"})]})]})]}),h.jsxs("div",{className:"rounded-2xl border border-white/[0.08] bg-[#15151A] p-6 space-y-6",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"font-mono-tech text-[11px] uppercase tracking-wider text-[#F5F5F7]",children:"EQUAL-POWER CROSSFADER (DECK A ↔ DECK B)"}),h.jsx("button",{type:"button",onClick:et,disabled:u,className:"rounded-lg border border-white/[0.12] bg-white/[0.05] px-3 py-1 text-[11.5px] font-medium text-[#F5F5F7] hover:bg-white/[0.1] disabled:opacity-50",children:u?"Đang chuyển mượt...":"Auto-Mix 3.6s"})]}),h.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[h.jsx("span",{className:"font-mono-tech text-[12px] font-bold",style:{color:"var(--accent)"},children:"A"}),h.jsx("input",{type:"range",min:0,max:1,step:.01,value:he,onChange:J=>Q("crossfader",Number(J.target.value)),className:"hifi-slider flex-1"}),h.jsx("span",{className:"font-mono-tech text-[12px] font-bold text-[#5EB1EF]",children:"B"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-white/[0.07] pt-5",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"text-[13.5px] font-semibold",children:"DJ Filter Sweep (LPF ↔ HPF)"}),h.jsx("span",{className:"font-mono-tech text-[12px]",style:{color:"var(--accent)"},children:Math.abs(q)<.04?"OFF":q<0?`LPF ${Math.round(q*100)}%`:`HPF +${Math.round(q*100)}%`})]}),h.jsx("input",{type:"range",min:-1,max:1,step:.02,value:q,onChange:J=>Q("djFilter",Number(J.target.value)),className:"hifi-slider mt-3 w-full"})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"text-[13.5px] font-semibold",children:"DJ Tape Echo Delay"}),h.jsxs("span",{className:"font-mono-tech text-[12px]",style:{color:"var(--accent)"},children:[Math.round(ae*100),"%"]})]}),h.jsx("input",{type:"range",min:0,max:1,step:.05,value:ae,onChange:J=>Q("djEcho",Number(J.target.value)),className:"hifi-slider mt-3 w-full"})]})]})]})]}),t==="karaoke"&&h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[h.jsxs("div",{className:"rounded-2xl border border-white/[0.08] bg-[#15151A] p-6 space-y-4",children:[h.jsxs("div",{className:"flex items-baseline justify-between",children:[h.jsx("h3",{className:"text-[15.5px] font-semibold",children:"Tách giọng ca sĩ (Vocal Remover DSP)"}),h.jsxs("span",{className:"font-mono-tech text-[14px] font-semibold",style:{color:"var(--accent)"},children:[Math.round(U*100),"%"]})]}),h.jsx("p",{className:"text-[12.5px] leading-relaxed text-[#8E8E93]",children:"Sử dụng mạch triệt pha Mid-Side (L − R) theo thời gian thực để giảm giọng hát trung tâm trong khi vẫn bảo toàn nguyên dải Sub-Bass dưới 140Hz."}),h.jsx("input",{type:"range",min:0,max:1,step:.05,value:U,onChange:J=>Q("vocalRemover",Number(J.target.value)),className:"hifi-slider w-full"}),h.jsxs("div",{className:"flex gap-2 pt-1",children:[h.jsx("button",{type:"button",onClick:()=>Q("vocalRemover",0),className:"rounded-lg border border-white/[0.1] px-3 py-1.5 text-[12px] text-[#C7C7CC] hover:bg-white/[0.06]",children:"Bản gốc (0%)"}),h.jsx("button",{type:"button",onClick:()=>Q("vocalRemover",1),className:"rounded-lg px-3 py-1.5 text-[12px] font-semibold text-white",style:{backgroundColor:"var(--accent)"},children:"Beat Karaoke (100%)"})]})]}),h.jsxs("div",{className:"rounded-2xl border border-white/[0.08] bg-[#15151A] p-6 space-y-4",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("h3",{className:"text-[15.5px] font-semibold",children:"Micro Hát Live + Echo Phòng Thu"}),h.jsxs("button",{type:"button",onClick:He,className:`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition ${z?"bg-[#30A46C] text-white":"border border-white/[0.12] bg-white/[0.05] text-white"}`,children:[z?h.jsx(ly,{className:"h-3.5 w-3.5"}):h.jsx(oy,{className:"h-3.5 w-3.5"}),z?"Đang bật Mic":"Bật Micro"]})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between font-mono-tech text-[11px] text-[#8E8E93]",children:[h.jsx("span",{children:"ÂM LƯỢNG MICRO"}),h.jsxs("span",{children:[Math.round(I*100),"%"]})]}),h.jsx("input",{type:"range",min:0,max:1.8,step:.05,value:I,onChange:J=>Q("micGain",Number(J.target.value)),className:"hifi-slider mt-2 w-full"})]}),h.jsx("button",{type:"button",onClick:()=>K(!0),className:"w-full rounded-xl py-2.5 text-[13px] font-semibold text-white transition active:scale-[0.99]",style:{backgroundColor:"var(--accent)"},children:"Mở Sân Khấu Lời Karaoke + Sóng Bass 3D"})]})]})]})}function wR(){const[o,t]=ke.useState(""),[i,s]=ke.useState(!1),[l,u]=ke.useState(!1),[d,p]=ke.useState(""),[x,m]=ke.useState(null),[_,g]=ke.useState([]),[v,M]=ke.useState(null),w=ke.useRef(null),N=Mt(A=>A.deliveryMode),b=Mt(A=>A.setDeliveryMode),S=Mt(A=>A.streamQuality),T=Mt(A=>A.showToast),O=ne(A=>A.libraryTracks),U=ne(A=>A.playlists),z=ne(A=>A.offlineTrackIds),I=ne(A=>A.currentTrack),E=ne(A=>A.playTrack),L=ne(A=>A.addLocalTrack),Y=ne(A=>A.prependLibraryTrack),F=ne(A=>A.setPlaylists),G=ne(A=>A.setOfflineTrackIds),Z=U.length>0?U:vp,he=AM(o);async function q(){try{const A=await Sn.listPlaylists();A.ok&&F(A.playlists)}catch{}}async function ae(A){if(m(A),!A){g([]);return}try{const K=await Sn.getPlaylist(A);K.ok&&g(K.tracks)}catch{g(O)}}async function P(A){A.preventDefault();const K=o.trim();if(!(!K||i)){s(!0);try{const pe=await Sn.resolveLink(K,S,x);pe.ok&&pe.track&&(Y(pe.track),E(pe.track,[pe.track,...O]),t(""),T(pe.is_preview?`Đang phát (Nghe thử 30s · Gắn Server ở Cài đặt để nghe trọn bài): ${pe.track.title}`:`Đã giải mã & phát Full: ${pe.track.title}`),x&&await ae(x),await q())}catch(pe){T(pe instanceof Error?pe.message:"Không thể kết nối Backend Harune (/api/resolve).")}finally{s(!1)}}}async function H(A){if(A.preventDefault(),!!d.trim())try{const K=await Sn.createPlaylist(d.trim());K.ok&&(await q(),p(""),u(!1),T(`Đã tạo Playlist "${K.playlist.name}"`))}catch{T("Cần bật Backend Harune (port 8787) để lưu Playlist vào Database.")}}async function ie(A){try{await Sn.deletePlaylist(A),x===A&&(m(null),g([])),await q(),T("Đã xóa Playlist.")}catch{T("Không thể xóa Playlist khi chưa kết nối Backend.")}}async function Q(A){if(!x){T("Hãy chọn một Playlist ở trên trước khi thêm bài.");return}try{await Sn.addTrackToPlaylist(x,A),await ae(x),await q(),T("Đã thêm bài vào Playlist tổ hợp!")}catch{T("Không thể thêm bài vào Playlist.")}}async function ce(A,K){if(!x)return;const pe=A+K;if(pe<0||pe>=_.length)return;const ye=[..._],[be]=ye.splice(A,1);ye.splice(pe,0,be),g(ye);try{await Sn.reorderPlaylist(x,ye.map(Ne=>Ne.id))}catch{}}async function Se(A){if(!A.stream_url){T("Bài mẫu chưa có luồng stream thực — hãy dán link thật để lưu Offline.");return}const K=z.includes(A.id);M(A.id);try{if(K)await KM(A.id),T(`Đã xóa cache offline: ${A.title}`);else{const be=(await WM(A.id,A.stream_url)/(1024*1024)).toFixed(1);T(`Đã lưu offline vào IndexedDB (${be} MB): ${A.title}`)}const pe=await yy();G(pe)}catch(pe){T(pe instanceof Error?pe.message:"Lỗi lưu Cache Offline.")}finally{M(null)}}function je(A){if(!A||A.length===0)return;const K=A[0],pe=URL.createObjectURL(K),ye=(K.name.split(".").pop()||"audio").toLowerCase(),be=["flac","wav","aiff","alac"].includes(ye),Ne=K.name.replace(/\.[^.]+$/,""),et={id:`local_${Date.now()}`,source_platform:"local",source_url:pe,title:Ne,artist:"Tệp Lossless từ thiết bị",album:be?"Local Master":"Local Library",cover_url:(I==null?void 0:I.cover_url)||"",duration_sec:0,codec:ye,bitrate_kbps:be?1411:320,sample_rate_hz:48e3,is_lossless:be,stream_url:pe,accent_hint:"94, 177, 239"};L(et,!0),T(`Đang phát trực tiếp tệp ${K.name} (${ye.toUpperCase()})`)}const Ze=x?_:O;return h.jsxs("div",{className:"space-y-10",children:[h.jsxs("header",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-white/[0.07] pb-6",children:[h.jsxs("div",{children:[h.jsx("p",{className:"font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#8E8E93]",children:"HARUNE · LIBRARY & MULTI-SOURCE"}),h.jsx("h1",{className:"mt-1.5 text-[30px] sm:text-[38px] font-bold tracking-[-0.03em] leading-[1.08]",children:"Thư viện & Gom Link"})]}),h.jsxs("div",{className:"inline-flex self-start sm:self-auto rounded-lg border border-white/[0.08] bg-[#15151A] p-1",children:[h.jsxs("button",{type:"button",onClick:()=>b("stream"),className:`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-medium transition ${N==="stream"?"bg-white/[0.1] text-[#F5F5F7]":"text-[#8E8E93] hover:text-[#F5F5F7]"}`,children:[h.jsx(cM,{className:"h-3.5 w-3.5"}),"Stream trực tiếp"]}),h.jsxs("button",{type:"button",onClick:()=>b("offline"),className:`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-medium transition ${N==="offline"?"bg-white/[0.1] text-[#F5F5F7]":"text-[#8E8E93] hover:text-[#F5F5F7]"}`,children:[h.jsx(pM,{className:"h-3.5 w-3.5"}),"Cache Offline (",z.length,")"]})]})]}),h.jsxs("section",{className:"grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4",children:[h.jsxs("form",{onSubmit:P,className:"flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#15151A] p-5",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between gap-2",children:[h.jsxs("label",{htmlFor:"harune-smart-link",className:"flex items-center gap-2 text-[13.5px] font-semibold text-[#F5F5F7]",children:[h.jsx(gM,{className:"h-4 w-4",style:{color:"var(--accent)"}}),"Dán link đa nền tảng hoặc tên bài hát"]}),he&&h.jsxs("span",{className:"inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] px-2.5 py-0.5 font-mono-tech text-[10.5px] text-[#F5F5F7]",children:[h.jsx("span",{className:"h-1.5 w-1.5 rounded-full",style:{backgroundColor:Xn[he].dotColor}}),Xn[he].label]})]}),h.jsx("p",{className:"mt-1 text-[12.5px] text-[#8E8E93]",children:"Hỗ trợ YouTube, Spotify, SoundCloud, TikTok, .mp3/.wav/.flac — giải mã trực tiếp qua HaruBot Bridge và chỉ lưu metadata nhẹ."})]}),h.jsxs("div",{className:"mt-4 flex flex-col sm:flex-row gap-2.5",children:[h.jsx("input",{id:"harune-smart-link",type:"text",value:o,onChange:A=>t(A.target.value),disabled:i,placeholder:"Dán link YouTube, Spotify, SoundCloud, TikTok hoặc nhập tên bài...",className:"flex-1 rounded-xl border border-white/[0.09] bg-[#0B0B0E] px-3.5 py-2.5 text-[13.5px] text-[#F5F5F7] placeholder:text-[#636366] focus:border-[var(--accent)] focus:outline-none disabled:opacity-60"}),h.jsxs("button",{type:"submit",disabled:i,className:"inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white transition active:scale-[0.98] disabled:opacity-60",style:{backgroundColor:"var(--accent)"},children:[i?h.jsx(xp,{className:"h-4 w-4 animate-spin"}):h.jsx(Jv,{className:"h-4 w-4"}),i?"Đang giải mã...":"Giải mã & Phát"]})]})]}),h.jsxs("div",{onDragOver:A=>A.preventDefault(),onDrop:A=>{A.preventDefault(),je(A.dataTransfer.files)},className:"flex flex-col items-start justify-between rounded-2xl border border-dashed border-white/[0.15] bg-[#15151A]/60 p-5 transition hover:border-white/[0.28]",children:[h.jsxs("div",{children:[h.jsx("p",{className:"font-mono-tech text-[10.5px] uppercase tracking-wider text-[#5EB1EF]",children:"LOCAL LOSSLESS · FLAC / WAV"}),h.jsx("h2",{className:"mt-1 text-[15px] font-semibold text-[#F5F5F7]",children:"Kéo-thả hoặc chọn tệp Lossless từ máy"}),h.jsx("p",{className:"mt-1 text-[12.5px] text-[#8E8E93]",children:"Chạy qua toàn bộ mạch EQ 10 băng, Karaoke & 3D Sóng Bass ngay lập tức."})]}),h.jsx("input",{ref:w,type:"file",accept:".flac,.wav,.mp3,.m4a,.ogg,.aac,audio/*",className:"hidden",onChange:A=>je(A.target.files)}),h.jsxs("button",{type:"button",onClick:()=>{var A;return(A=w.current)==null?void 0:A.click()},className:"mt-4 inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-3.5 py-2 text-[12.5px] font-medium text-[#F5F5F7] transition hover:bg-white/[0.08]",children:[h.jsx(MM,{className:"h-3.5 w-3.5"}),"Chọn file .flac / .wav"]})]})]}),h.jsxs("section",{children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.07] pb-3",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("h2",{className:"text-[16px] font-semibold",children:"Playlist Tổ Hợp"}),x&&h.jsx("button",{type:"button",onClick:()=>ae(null),className:"font-mono-tech text-[11px] text-[#8E8E93] underline hover:text-white",children:"Xem tất cả bài"})]}),h.jsxs("button",{type:"button",onClick:()=>u(A=>!A),className:"inline-flex items-center gap-1.5 text-[12.5px] font-medium transition hover:opacity-80",style:{color:"var(--accent)"},children:[h.jsx(hM,{className:"h-4 w-4"}),"Tạo Playlist mới"]})]}),l&&h.jsxs("form",{onSubmit:H,className:"mt-3 flex flex-col sm:flex-row gap-2 max-w-md",children:[h.jsx("input",{type:"text",value:d,onChange:A=>p(A.target.value),placeholder:"Tên playlist mới (vd: Đêm khuya Chill Mix)...",className:"flex-1 rounded-xl border border-white/[0.1] bg-[#15151A] px-3.5 py-2 text-[13px] text-[#F5F5F7] focus:border-[var(--accent)] focus:outline-none"}),h.jsx("button",{type:"submit",className:"rounded-xl px-4 py-2 text-[12.5px] font-semibold text-white",style:{backgroundColor:"var(--accent)"},children:"Tạo ngay"})]}),h.jsx("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:Z.map(A=>{const K=x===A.id;return h.jsxs("div",{className:`flex items-center gap-3 rounded-xl border p-3 transition ${K?"border-[var(--accent)] bg-[rgba(var(--accent-rgb),0.09)]":"border-white/[0.07] bg-[#15151A] hover:border-white/[0.15]"}`,children:[h.jsxs("button",{type:"button",onClick:()=>ae(K?null:A.id),className:"flex min-w-0 flex-1 items-center gap-3 text-left",children:[A.cover_url?h.jsx("img",{src:A.cover_url,alt:A.name,className:"h-12 w-12 shrink-0 rounded-lg object-cover ring-1 ring-white/10"}):h.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1E1E26] font-mono-tech text-[11px] text-[#8E8E93]",children:"MIX"}),h.jsxs("div",{className:"min-w-0 flex-1",children:[h.jsx("p",{className:"truncate text-[13.5px] font-semibold text-[#F5F5F7]",children:A.name}),h.jsxs("p",{className:"mt-0.5 font-mono-tech text-[11px] text-[#8E8E93]",children:[A.track_count," bài",A.platforms.length>0?` · ${A.platforms.map(pe=>{var ye;return((ye=Xn[pe])==null?void 0:ye.short)||pe}).join(" / ")}`:""]})]})]}),A.id!=="pl_mix_default"&&h.jsx("button",{type:"button",onClick:()=>ie(A.id),"aria-label":"Xóa playlist",className:"p-1.5 text-[#8E8E93] hover:text-[#E5484D]",children:h.jsx(bM,{className:"h-3.5 w-3.5"})})]},A.id)})})]}),h.jsxs("section",{children:[h.jsxs("div",{className:"flex items-baseline justify-between border-b border-white/[0.07] pb-3",children:[h.jsx("h2",{className:"text-[16px] font-semibold",children:x?"Bài hát trong Playlist đã chọn":"Kho bài hát đã gom"}),h.jsxs("span",{className:"font-mono-tech text-[11.5px] text-[#8E8E93]",children:[Ze.length," TRACKS"]})]}),h.jsx("ul",{className:"mt-2 divide-y divide-white/[0.06]",children:Ze.map((A,K)=>{const pe=(I==null?void 0:I.id)===A.id,ye=Xn[A.source_platform]||Xn.direct,be=z.includes(A.id);return h.jsxs("li",{className:"flex items-center gap-2 py-2.5 px-1 rounded-xl hover:bg-white/[0.025]",children:[h.jsxs("button",{type:"button",onClick:()=>E(A,Ze),className:"flex min-w-0 flex-1 items-center gap-3.5 text-left",children:[h.jsx("div",{className:"relative h-10 w-10 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10",children:A.cover_url?h.jsx("img",{src:A.cover_url,alt:A.title,className:"h-full w-full object-cover"}):h.jsx("div",{className:"flex h-full w-full items-center justify-center bg-[#1C1C23]",children:h.jsx(Ka,{className:"h-3.5 w-3.5 text-[#8E8E93]"})})}),h.jsxs("div",{className:"min-w-0 flex-1",children:[h.jsx("p",{className:"truncate text-[13.5px] font-semibold",style:pe?{color:"var(--accent)"}:void 0,children:A.title}),h.jsx("p",{className:"truncate text-[12px] text-[#8E8E93]",children:A.artist})]})]}),h.jsxs("span",{className:"hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] px-2 py-0.5 font-mono-tech text-[10px] text-[#C7C7CC]",children:[h.jsx("span",{className:"h-1.5 w-1.5 rounded-full",style:{backgroundColor:ye.dotColor}}),ye.short]}),h.jsx("button",{type:"button",onClick:()=>Se(A),disabled:v===A.id,title:be?"Đã lưu Offline (nhấn để xóa)":"Lưu tạm Offline (IndexedDB)",className:`p-1.5 rounded-lg transition ${be?"text-[#30A46C]":"text-[#8E8E93] hover:text-white"}`,children:v===A.id?h.jsx(xp,{className:"h-3.5 w-3.5 animate-spin"}):be?h.jsx(sy,{className:"h-3.5 w-3.5"}):h.jsx(af,{className:"h-3.5 w-3.5"})}),x?h.jsxs("div",{className:"flex items-center",children:[h.jsx("button",{type:"button",onClick:()=>ce(K,-1),"aria-label":"Di chuyển lên",className:"p-1 text-[#8E8E93] hover:text-white",children:h.jsx(sM,{className:"h-3.5 w-3.5"})}),h.jsx("button",{type:"button",onClick:()=>ce(K,1),"aria-label":"Di chuyển xuống",className:"p-1 text-[#8E8E93] hover:text-white",children:h.jsx(iM,{className:"h-3.5 w-3.5"})})]}):Z.length>0&&h.jsx("button",{type:"button",onClick:()=>Q(A.id),title:"Thêm vào Playlist đang chọn",className:"hidden md:inline-flex p-1.5 text-[#8E8E93] hover:text-white",children:h.jsx(Jv,{className:"h-3.5 w-3.5"})}),h.jsx("span",{className:"font-mono-tech w-11 text-right text-[11.5px] text-[#8E8E93]",children:cr(A.duration_sec)})]},A.id)})})]})]})}function RR(){const o=Mt(T=>T.accentColor),t=Mt(T=>T.setAccentColor),i=Mt(T=>T.navMode),s=Mt(T=>T.setNavMode),l=Mt(T=>T.deviceOS),u=Mt(T=>T.streamQuality),d=Mt(T=>T.setStreamQuality),p=Mt(T=>T.harubotConfig),x=Mt(T=>T.updateHarubotConfig),m=Mt(T=>T.showToast),_=i==="auto"?l:i,[g,v]=ke.useState(null),[M,w]=ke.useState(!1),[N,b]=ke.useState(()=>rf());ke.useEffect(()=>{w(window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0);const T=O=>{O.preventDefault(),v(O)};return window.addEventListener("beforeinstallprompt",T),()=>window.removeEventListener("beforeinstallprompt",T)},[]);async function S(){if(!g)return;await g.prompt(),(await g.userChoice).outcome==="accepted"&&(m("Đang cài đặt ứng dụng Harune lên thiết bị!"),v(null))}return h.jsxs("div",{className:"space-y-10 max-w-3xl",children:[h.jsxs("header",{className:"border-b border-white/[0.07] pb-6",children:[h.jsx("p",{className:"font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#8E8E93]",children:"HARUNE · PREFERENCES"}),h.jsx("h1",{className:"mt-1.5 text-[30px] sm:text-[38px] font-bold tracking-[-0.03em] leading-[1.08]",children:"Tùy chỉnh hệ thống"})]}),h.jsxs("section",{className:"space-y-4 border-b border-white/[0.07] pb-8",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"text-[16px] font-semibold",children:"Màu nhấn Hi-Fi (Accent Color)"}),h.jsx("p",{className:"mt-0.5 text-[13px] text-[#8E8E93]",children:"Mặc định #FF5A36 (Braun Signal Orange). Thay đổi áp dụng tức thì cho toàn bộ nút phát, thanh tiến độ và dải EQ."})]}),h.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[OM.map(T=>{const O=o.toLowerCase()===T.hex.toLowerCase();return h.jsxs("button",{type:"button",onClick:()=>t(T.hex),className:`flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12.5px] transition ${O?"border-white/40 bg-white/[0.08] text-[#F5F5F7]":"border-white/[0.08] bg-[#15151A] text-[#8E8E93] hover:text-[#F5F5F7]"}`,children:[h.jsx("span",{className:"flex h-4 w-4 items-center justify-center rounded-full",style:{backgroundColor:T.hex},children:O&&h.jsx(sy,{className:"h-2.5 w-2.5 text-black",strokeWidth:3})}),h.jsx("span",{children:T.name})]},T.hex)}),h.jsxs("label",{className:"inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/[0.1] bg-[#15151A] px-3 py-1.5 text-[12.5px] text-[#C7C7CC]",children:[h.jsx("input",{type:"color",value:o,onChange:T=>t(T.target.value),className:"h-4 w-4 cursor-pointer rounded-full border-0 bg-transparent p-0"}),h.jsx("span",{className:"font-mono-tech uppercase",children:o})]})]})]}),h.jsxs("section",{className:"space-y-4 border-b border-white/[0.07] pb-8",children:[h.jsxs("div",{children:[h.jsxs("h2",{className:"flex items-center gap-2 text-[16px] font-semibold",children:[h.jsx(SM,{className:"h-4 w-4",style:{color:"var(--accent)"}}),"Giao diện điều hướng theo hệ điều hành"]}),h.jsxs("p",{className:"mt-0.5 text-[13px] text-[#8E8E93]",children:["Thiết bị hiện tại nhận diện: ",h.jsx("strong",{className:"text-[#F5F5F7]",children:l==="ios"?"iOS (Liquid Glass)":"Android (Material)"}),". Đang hiển thị chế độ ",h.jsx("strong",{className:"text-[#F5F5F7]",children:_==="ios"?"iOS Liquid Glass":"Android Chuẩn"}),"."]})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[["auto","Tự động","Nhận diện iPhone/Android tự động"],["ios","iOS Liquid Glass","Thanh 5 tab viên thuốc kính lỏng nổi"],["android","Android Chuẩn","Thanh phẳng sát đáy + progress 2px"]].map(([T,O,U])=>{const z=i===T;return h.jsxs("button",{type:"button",onClick:()=>{s(T),m(`Đã chuyển điều hướng sang: ${O}`)},className:`rounded-xl border p-4 text-left transition ${z?"border-[var(--accent)] bg-[rgba(var(--accent-rgb),0.09)]":"border-white/[0.08] bg-[#15151A] hover:border-white/[0.16]"}`,children:[h.jsx("p",{className:"text-[13.5px] font-semibold text-[#F5F5F7]",children:O}),h.jsx("p",{className:"mt-1 text-[12px] text-[#8E8E93]",children:U})]},T)})}),h.jsxs("div",{className:"rounded-xl border border-white/[0.07] bg-[#0F0F13] p-4",children:[h.jsxs("p",{className:"font-mono-tech text-[10px] uppercase tracking-wider text-[#8E8E93] mb-3",children:["LIVE PREVIEW · ",_==="ios"?"IOS LIQUID GLASS DOCK":"ANDROID MATERIAL DOCK"]}),_==="ios"?h.jsxs("div",{className:"mx-auto max-w-xs space-y-2",children:[h.jsxs("div",{className:"ios-liquid-glass flex items-center justify-between rounded-[18px] px-3 py-2 text-[11px]",children:[h.jsx("span",{className:"truncate font-medium",children:"Đêm Mưa Sài Gòn"}),h.jsx("span",{className:"h-2 w-2 rounded-full",style:{backgroundColor:"var(--accent)"}})]}),h.jsxs("div",{className:"ios-liquid-glass flex justify-around rounded-[24px] py-2 font-mono-tech text-[10px] text-[#8E8E93]",children:[h.jsx("span",{style:{color:"var(--accent)"},children:"Khám phá"}),h.jsx("span",{children:"Thư viện"}),h.jsx("span",{children:"Hi-Fi"}),h.jsx("span",{children:"Thống kê"}),h.jsx("span",{children:"Cài đặt"})]})]}):h.jsxs("div",{className:"mx-auto max-w-xs overflow-hidden rounded-lg border border-white/[0.08]",children:[h.jsx("div",{className:"h-[2px] w-full bg-white/10",children:h.jsx("div",{className:"h-full w-2/5",style:{backgroundColor:"var(--accent)"}})}),h.jsx("div",{className:"bg-[#16161C] px-3 py-2 text-[11px] font-medium",children:"Đêm Mưa Sài Gòn · SP"}),h.jsxs("div",{className:"flex justify-around border-t border-white/[0.08] bg-[#111116] py-2 font-mono-tech text-[10px] text-[#8E8E93]",children:[h.jsx("span",{style:{color:"var(--accent)"},children:"Khám phá"}),h.jsx("span",{children:"Thư viện"}),h.jsx("span",{children:"Hi-Fi"}),h.jsx("span",{children:"Thống kê"}),h.jsx("span",{children:"Cài đặt"})]})]})]})]}),h.jsxs("section",{className:"space-y-4 border-b border-white/[0.07] pb-8",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"text-[16px] font-semibold",children:"Chất lượng phát ưu tiên"}),h.jsx("p",{className:"mt-0.5 text-[13px] text-[#8E8E93]",children:"Tự động chọn định dạng stream phù hợp từ HaruBot Bridge."})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[["saver","Tiết kiệm","Opus / M4A ≤ 96 kbps (4G ổn định)"],["high","Cao (Khuyên dùng)","Opus / M4A 160–256 kbps · 48 kHz"],["lossless","Lossless Hi-Fi","Ưu tiên FLAC / WAV gốc nếu nguồn hỗ trợ"]].map(([T,O,U])=>{const z=u===T;return h.jsxs("button",{type:"button",onClick:()=>d(T),className:`rounded-xl border p-4 text-left transition ${z?"border-[var(--accent)] bg-[rgba(var(--accent-rgb),0.09)]":"border-white/[0.08] bg-[#15151A] hover:border-white/[0.16]"}`,children:[h.jsx("p",{className:"text-[13.5px] font-semibold text-[#F5F5F7]",children:O}),h.jsx("p",{className:"mt-1 text-[12px] text-[#8E8E93]",children:U})]},T)})})]}),h.jsxs("section",{className:"space-y-4",children:[h.jsx("div",{className:"flex items-center justify-between",children:h.jsxs("div",{children:[h.jsxs("h2",{className:"flex items-center gap-2 text-[16px] font-semibold",children:[h.jsx(mm,{className:"h-4 w-4",style:{color:"var(--accent)"}}),"Kết nối lõi HaruBot / Lavalink"]}),h.jsx("p",{className:"mt-0.5 text-[13px] text-[#8E8E93]",children:"Mặc định nối trực tiếp lõi Python + yt-dlp & Render Gateway của HaruBot."})]})}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border border-white/[0.08] bg-[#15151A] p-5",children:[h.jsxs("div",{className:"sm:col-span-2",children:[h.jsx("label",{className:"block font-mono-tech text-[11px] uppercase text-[#8E8E93] mb-1.5",children:"Harune Audio Server URL (VibeHost Cloudflare Tunnel / Hugging Face / Local)"}),h.jsx("input",{type:"text",value:N,onChange:T=>b(T.target.value),placeholder:"Để trống nếu chạy cùng host, hoặc dán https://xxx.trycloudflare.com / https://xxx.hf.space",className:"font-mono-tech w-full rounded-lg border border-white/[0.1] bg-[#0B0B0E] px-3 py-2 text-[13px] text-[#F5F5F7] placeholder:text-[#636366] focus:border-[var(--accent)] focus:outline-none"}),h.jsx("p",{className:"mt-1 text-[11.5px] text-[#8E8E93]",children:"Hỗ trợ VibeHost + Cloudflare HTTPS Tunnel (24/7 không ngủ) hoặc Hugging Face Spaces Free 16GB RAM (mở file FLAC/WAV từ máy chạy hoàn toàn offline)."})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block font-mono-tech text-[11px] uppercase text-[#8E8E93] mb-1.5",children:"Chế độ lõi phát"}),h.jsxs("select",{value:p.mode,onChange:T=>x({mode:T.target.value}),className:"w-full rounded-lg border border-white/[0.1] bg-[#0B0B0E] px-3 py-2 text-[13.5px] text-[#F5F5F7] focus:border-[var(--accent)] focus:outline-none",children:[h.jsx("option",{value:"ytdlp",children:"HaruBot · Python yt-dlp (Mặc định)"}),h.jsx("option",{value:"lavalink",children:"Lavalink v4 Server"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block font-mono-tech text-[11px] uppercase text-[#8E8E93] mb-1.5",children:"Port"}),h.jsx("input",{type:"number",value:p.port,onChange:T=>x({port:Number(T.target.value)||2333}),className:"font-mono-tech w-full rounded-lg border border-white/[0.1] bg-[#0B0B0E] px-3 py-2 text-[13.5px] text-[#F5F5F7] focus:border-[var(--accent)] focus:outline-none"})]}),h.jsxs("div",{className:"sm:col-span-2",children:[h.jsx("label",{className:"block font-mono-tech text-[11px] uppercase text-[#8E8E93] mb-1.5",children:"Host / Gateway Endpoint"}),h.jsx("input",{type:"text",value:p.host,onChange:T=>x({host:T.target.value}),className:"font-mono-tech w-full rounded-lg border border-white/[0.1] bg-[#0B0B0E] px-3 py-2 text-[13.5px] text-[#F5F5F7] focus:border-[var(--accent)] focus:outline-none"})]}),h.jsxs("div",{className:"sm:col-span-2",children:[h.jsx("label",{className:"block font-mono-tech text-[11px] uppercase text-[#8E8E93] mb-1.5",children:"Password / API Key (tùy chọn)"}),h.jsx("input",{type:"password",value:p.key,onChange:T=>x({key:T.target.value}),placeholder:"••••••••••••",className:"font-mono-tech w-full rounded-lg border border-white/[0.1] bg-[#0B0B0E] px-3 py-2 text-[13.5px] text-[#F5F5F7] focus:border-[var(--accent)] focus:outline-none"})]}),h.jsx("div",{className:"sm:col-span-2 flex justify-end",children:h.jsx("button",{type:"button",onClick:async()=>{zM(N);try{await Sn.updateSettings({accent_color:o,nav_mode:i,stream_quality:u,harubot_mode:p.mode,harubot_host:p.host,harubot_port:p.port,harubot_key:p.key});const T=await Sn.getHarubotStatus();Mt.getState().setHarubotStatus(T),m(`Đã đồng bộ cấu hình & kết nối: ${T.label}`)}catch{m("Đã lưu cấu hình trên thiết bị (sẽ đồng bộ khi Backend chạy).")}},className:"rounded-xl px-4 py-2 text-[13px] font-semibold text-white transition active:scale-[0.98]",style:{backgroundColor:"var(--accent)"},children:"Lưu & Kiểm tra kết nối"})})]})]}),h.jsx("section",{className:"space-y-3 border-t border-white/[0.07] pt-8",children:h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-white/[0.08] bg-[#15151A] p-5",children:[h.jsxs("div",{children:[h.jsx("p",{className:"font-mono-tech text-[10.5px] uppercase tracking-widest",style:{color:"var(--accent)"},children:"PWA STANDALONE APP"}),h.jsx("h2",{className:"mt-1 text-[15.5px] font-semibold text-[#F5F5F7]",children:M?"Harune đang chạy như ứng dụng gốc":"Cài đặt Harune lên màn hình chính"}),h.jsx("p",{className:"mt-1 text-[12.5px] text-[#8E8E93]",children:l==="ios"?"Trên Safari iPhone/iPad: chạm nút Chia sẻ (↑) ở cạnh dưới → chọn 'Thêm vào MH chính' để kích hoạt chế độ iOS Liquid Glass toàn màn hình.":"Trên Android Chrome hoặc Desktop: bấm nút Cài đặt bên cạnh để chạy toàn màn hình + điều khiển nhạc ngoài màn hình khóa."})]}),g&&!M&&h.jsxs("button",{type:"button",onClick:S,className:"shrink-0 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white",style:{backgroundColor:"var(--accent)"},children:[h.jsx(af,{className:"h-4 w-4"}),"Cài App Harune"]})]})})]})}function CR(){const[o,t]=ke.useState("month"),[i,s]=ke.useState(null),[l,u]=ke.useState(!0),d=ne(S=>S.libraryTracks),p=ne(S=>S.playTrack),x=Mt(S=>S.showToast);async function m(){u(!0);try{const S=await Sn.getStats();S.ok&&s(S)}catch{}finally{u(!1)}}ke.useEffect(()=>{m()},[]);const _=i?i.hours[o].toFixed(1):"0.0",g=(i==null?void 0:i.streak_days)??0,v=(i==null?void 0:i.total_plays)??0,M=(i==null?void 0:i.sources)??[],w=(i==null?void 0:i.top_tracks)??[],N=(i==null?void 0:i.top_artists)??[];function b(S){const T=d.find(O=>O.id===S);T&&(p(T),x(`Đang phát lại: ${T.title}`))}return h.jsxs("div",{className:"space-y-10",children:[h.jsxs("header",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-white/[0.07] pb-6",children:[h.jsxs("div",{children:[h.jsx("p",{className:"font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#8E8E93]",children:"HARUNE · ANALYTICS"}),h.jsx("h1",{className:"mt-1.5 text-[30px] sm:text-[38px] font-bold tracking-[-0.03em] leading-[1.08]",children:"Thống kê cá nhân"})]}),h.jsxs("div",{className:"flex items-center gap-2 self-start sm:self-auto",children:[h.jsx("div",{className:"inline-flex rounded-lg border border-white/[0.08] bg-[#15151A] p-1",children:[["week","Tuần"],["month","Tháng"],["all","Tất cả"]].map(([S,T])=>h.jsx("button",{type:"button",onClick:()=>t(S),className:`rounded-md px-3 py-1 text-[12px] font-medium transition ${o===S?"bg-white/[0.1] text-[#F5F5F7]":"text-[#8E8E93] hover:text-[#F5F5F7]"}`,children:T},S))}),h.jsx("button",{type:"button",onClick:m,"aria-label":"Cập nhật thống kê",className:"rounded-lg border border-white/[0.08] bg-[#15151A] p-2 text-[#8E8E93] hover:text-white",children:h.jsx(cy,{className:`h-3.5 w-3.5 ${l?"animate-spin":""}`})})]})]}),h.jsxs("section",{className:"grid grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr] gap-6 border-b border-white/[0.07] pb-8",children:[h.jsxs("div",{children:[h.jsxs("p",{className:"font-mono-tech text-[11px] uppercase tracking-wider text-[#8E8E93]",children:["TỔNG GIỜ NGHE (",o==="week"?"7 NGÀY":o==="month"?"30 NGÀY":"TẤT CẢ",")"]}),h.jsxs("p",{className:"mt-2 font-mono-tech text-[42px] sm:text-[52px] font-semibold tracking-tight leading-none text-[#F5F5F7]",children:[_,h.jsx("span",{className:"ml-1.5 text-[18px] text-[#8E8E93]",children:"giờ"})]}),h.jsx("p",{className:"mt-2 text-[12.5px] text-[#8E8E93]",children:"Tự động ghi nhận vào Database khi nghe mỗi bài qua 30 giây."})]}),h.jsxs("div",{className:"border-l border-white/[0.07] pl-6",children:[h.jsx("p",{className:"font-mono-tech text-[11px] uppercase tracking-wider text-[#8E8E93]",children:"CHUỖI NGÀY NGHE"}),h.jsxs("p",{className:"mt-2 flex items-center gap-2 font-mono-tech text-[42px] sm:text-[52px] font-semibold leading-none",children:[h.jsx("span",{style:{color:"var(--accent)"},children:g}),h.jsx(dM,{className:"h-7 w-7",style:{color:"var(--accent)"}})]}),h.jsx("p",{className:"mt-2 text-[12.5px] text-[#8E8E93]",children:"Ngày liên tiếp"})]}),h.jsxs("div",{className:"col-span-2 md:col-span-1 md:border-l border-white/[0.07] md:pl-6",children:[h.jsx("p",{className:"font-mono-tech text-[11px] uppercase tracking-wider text-[#8E8E93]",children:"LƯỢT PHÁT HỢP LỆ (≥ 30S)"}),h.jsx("p",{className:"mt-2 font-mono-tech text-[42px] sm:text-[52px] font-semibold leading-none text-[#F5F5F7]",children:v}),h.jsx("p",{className:"mt-2 text-[12.5px] text-[#8E8E93]",children:M.length>0?`Trên ${M.length} nguồn nhạc`:"Chưa ghi nhận lượt phát"})]})]}),v===0?h.jsxs("section",{className:"rounded-2xl border border-white/[0.08] bg-[#15151A] p-8 text-center space-y-2",children:[h.jsx("p",{className:"text-[16px] font-semibold text-[#F5F5F7]",children:"Chưa có dữ liệu lịch sử nghe nhạc"}),h.jsxs("p",{className:"mx-auto max-w-md text-[13px] text-[#8E8E93]",children:["Hãy phát một bài hát từ ",h.jsx("strong",{children:"Bảng xếp hạng"})," hoặc ",h.jsx("strong",{children:"dán link YouTube / Spotify / SoundCloud"})," và nghe qua ",h.jsx("strong",{children:"30 giây"})," — Harune sẽ tự động tổng hợp giờ nghe, chuỗi ngày và tỷ lệ nguồn nhạc tại đây."]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("section",{children:[h.jsxs("div",{className:"flex items-baseline justify-between mb-3",children:[h.jsx("h2",{className:"text-[16px] font-semibold",children:"Tỷ lệ nguồn nhạc đã nghe"}),h.jsx("span",{className:"font-mono-tech text-[11px] text-[#8E8E93]",children:"100%"})]}),h.jsx("div",{className:"flex h-3 w-full overflow-hidden rounded-full bg-white/[0.06] gap-[2px]",children:M.map(S=>{const T=S.platform in Xn?S.platform:"direct";return h.jsx("div",{style:{width:`${S.percent}%`,backgroundColor:Xn[T].dotColor},title:`${Xn[T].label}: ${S.percent}%`},S.platform)})}),h.jsx("div",{className:"mt-4 grid grid-cols-2 sm:grid-cols-5 gap-3",children:M.map(S=>{const T=S.platform in Xn?S.platform:"direct",O=Xn[T];return h.jsxs("div",{className:"rounded-xl border border-white/[0.07] bg-[#15151A] px-3.5 py-2.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-[12px] text-[#C7C7CC]",children:[h.jsx("span",{className:"h-2 w-2 rounded-full shrink-0",style:{backgroundColor:O.dotColor}}),h.jsx("span",{className:"truncate",children:O.label})]}),h.jsxs("p",{className:"mt-1.5 font-mono-tech text-[17px] font-semibold text-[#F5F5F7]",children:[S.percent,"%"]}),h.jsxs("p",{className:"font-mono-tech text-[11px] text-[#8E8E93]",children:[(S.total_seconds/3600).toFixed(1),"h · ",S.plays," lượt"]})]},S.platform)})})]}),h.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"border-b border-white/[0.07] pb-3 text-[16px] font-semibold",children:"Top bài hát nghe nhiều nhất"}),h.jsx("ul",{className:"mt-2 divide-y divide-white/[0.06]",children:w.map((S,T)=>h.jsx("li",{children:h.jsxs("button",{type:"button",onClick:()=>b(S.id),className:"flex w-full items-center gap-3 py-3 px-1 rounded-xl text-left hover:bg-white/[0.03]",children:[h.jsx("span",{className:"font-mono-tech w-5 text-[12px] text-[#8E8E93]",children:String(T+1).padStart(2,"0")}),S.cover_url?h.jsx("img",{src:S.cover_url,alt:S.title,className:"h-10 w-10 rounded-md object-cover ring-1 ring-white/10"}):h.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-md bg-[#1C1C23]",children:h.jsx(Ka,{className:"h-3.5 w-3.5 text-[#8E8E93]"})}),h.jsxs("div",{className:"min-w-0 flex-1",children:[h.jsx("p",{className:"truncate text-[13.5px] font-medium text-[#F5F5F7]",children:S.title}),h.jsx("p",{className:"truncate text-[12px] text-[#8E8E93]",children:S.artist})]}),h.jsxs("span",{className:"font-mono-tech text-[12px] text-[#C7C7CC]",children:[S.plays," lượt"]})]})},S.id))})]}),h.jsxs("div",{children:[h.jsx("h2",{className:"border-b border-white/[0.07] pb-3 text-[16px] font-semibold",children:"Nghệ sĩ nổi bật"}),h.jsx("ul",{className:"mt-2 divide-y divide-white/[0.06]",children:N.map((S,T)=>h.jsxs("li",{className:"flex items-center justify-between py-3.5",children:[h.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[h.jsx("span",{className:"font-mono-tech w-5 text-[12px] text-[#8E8E93]",children:String(T+1).padStart(2,"0")}),h.jsx("span",{className:"truncate text-[14px] font-medium text-[#F5F5F7]",children:S.artist})]}),h.jsxs("span",{className:"font-mono-tech text-[12px] text-[#8E8E93]",children:[(S.total_seconds/3600).toFixed(1),"h · ",S.plays," lượt"]})]},`${S.artist}-${T}`))})]})]})]})]})}function NR(){const o=Mt(m=>m.activeTab),t=Mt(m=>m.toastMessage),i=Mt(m=>m.navMode),s=Mt(m=>m.deviceOS),l=i==="auto"?s:i,[u,d]=ke.useState(()=>{try{return new URLSearchParams(window.location.search).get("install")==="1"}catch{return!1}}),[p,x]=ke.useState(null);return ke.useEffect(()=>{const m=_=>{_.preventDefault(),x(_)};return window.addEventListener("beforeinstallprompt",m),()=>window.removeEventListener("beforeinstallprompt",m)},[]),ke.useEffect(()=>{const m=_=>{var M;const g=(M=_.target)==null?void 0:M.tagName;if(g==="INPUT"||g==="TEXTAREA"||g==="SELECT")return;const v=ne.getState();_.code==="Space"?(_.preventDefault(),v.togglePlay()):_.code==="ArrowRight"?(_.preventDefault(),v.requestSeek(Math.min(v.duration||0,v.currentTime+5))):_.code==="ArrowLeft"?(_.preventDefault(),v.requestSeek(Math.max(0,v.currentTime-5))):_.code==="ArrowUp"?(_.preventDefault(),v.setVolume(Math.min(1,v.volume+.05))):_.code==="ArrowDown"?(_.preventDefault(),v.setVolume(Math.max(0,v.volume-.05))):_.key==="f"||_.key==="F"?v.setFullscreenOpen(!v.isFullscreenOpen):_.key==="m"||_.key==="M"?v.toggleMute():_.code==="Escape"&&v.isFullscreenOpen&&v.setFullscreenOpen(!1)};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]),h.jsxs("div",{className:"relative min-h-screen bg-[#0B0B0E] text-[#F5F5F7]",children:[h.jsx("div",{className:"harune-ambient-glow","aria-hidden":"true"}),h.jsx(ZM,{}),h.jsxs("div",{className:"relative z-10 flex min-h-screen",children:[h.jsx(FM,{}),h.jsxs("main",{className:"flex-1 min-w-0 px-5 sm:px-8 lg:px-12 pt-7 lg:pt-10",style:{paddingTop:"calc(24px + var(--safe-top))",paddingBottom:l==="ios"?"calc(176px + var(--safe-bottom))":"calc(160px + var(--safe-bottom))"},children:[h.jsxs("div",{className:"lg:hidden mb-6 flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"h-2 w-2 rounded-full",style:{backgroundColor:"var(--accent)"}}),h.jsx("span",{className:"text-[14px] font-bold tracking-[0.16em]",children:"HARUNE"})]}),h.jsx("span",{className:"font-mono-tech text-[10px] uppercase tracking-widest text-[#8E8E93]",children:l==="ios"?"iOS GLASS":"ANDROID"})]}),h.jsxs("div",{className:"mx-auto max-w-5xl",children:[o==="discover"&&h.jsx(TR,{}),o==="library"&&h.jsx(wR,{}),o==="dsp"&&h.jsx(AR,{}),o==="stats"&&h.jsx(CR,{}),o==="settings"&&h.jsx(RR,{})]})]})]}),h.jsx(IM,{}),h.jsx(QM,{}),h.jsx(MR,{}),u&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md",children:h.jsxs("div",{className:"w-full max-w-md rounded-3xl border border-white/[0.12] bg-[#15151A] p-6 shadow-2xl space-y-4",children:[h.jsxs("div",{className:"flex items-start justify-between gap-3",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("img",{src:"./icons/icon-192.png",alt:"Harune",className:"h-12 w-12 rounded-2xl ring-1 ring-white/15"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-mono-tech text-[10px] uppercase tracking-widest",style:{color:"var(--accent)"},children:"HARUNE HI-FI · 32-BIT DSP PWA"}),h.jsx("h2",{className:"text-[18px] font-bold text-[#F5F5F7]",children:"Cài đặt App Harune"})]})]}),h.jsx("button",{type:"button",onClick:()=>d(!1),className:"rounded-full p-1.5 text-[#8E8E93] hover:bg-white/10 hover:text-white",children:h.jsx(EM,{className:"h-4 w-4"})})]}),h.jsx("p",{className:"text-[13px] leading-relaxed text-[#C7C7CC]",children:s==="ios"?"Trên Safari iPhone/iPad: bấm nút Chia sẻ (mũi tên hướng lên ↑) ở cạnh dưới → chọn 'Thêm vào MH chính' (Add to Home Screen) → Harune sẽ chạy như ứng dụng gốc với thanh iOS Liquid Glass!":"Cài trực tiếp Harune lên PC (Windows/macOS) hoặc Android để chạy cửa sổ độc lập, nghe Lossless FLAC, EQ 10 băng, Karaoke 3D và điều khiển từ màn hình khóa."}),h.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 pt-1",children:[p?h.jsxs("button",{type:"button",onClick:async()=>{await p.prompt(),await p.userChoice,x(null),d(!1)},className:"flex-1 inline-flex items-center justify-center gap-2 rounded-xl py-2.5 text-[13px] font-semibold text-white",style:{backgroundColor:"var(--accent)"},children:[h.jsx(af,{className:"h-4 w-4"}),"Cài đặt ngay"]}):h.jsx("button",{type:"button",onClick:()=>d(!1),className:"flex-1 rounded-xl py-2.5 text-[13px] font-semibold text-white",style:{backgroundColor:"var(--accent)"},children:"Đã hiểu · Mở Harune"}),h.jsx("button",{type:"button",onClick:()=>d(!1),className:"rounded-xl border border-white/[0.1] px-4 py-2.5 text-[13px] text-[#C7C7CC] hover:bg-white/[0.06]",children:"Để sau"})]})]})}),t&&h.jsx("div",{role:"status",className:"fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full border border-white/[0.14] bg-[#18181F]/95 px-4 py-2 text-[12.5px] font-medium text-[#F5F5F7] shadow-2xl backdrop-blur-md",children:t})]})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js",{updateViaCache:"none"}).then(o=>{document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&o.update().catch(()=>{})})}).catch(()=>{})});$b.createRoot(document.getElementById("root")).render(h.jsx(ke.StrictMode,{children:h.jsx(NR,{})}));
