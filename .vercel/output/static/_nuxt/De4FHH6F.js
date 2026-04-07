const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Q897gMty.js","./CQB8luGP.js","./CaSyk9Qs.js","./C3vBdrXG.js","./CiLvG0-P.js","./X5tN8GVU.js","./fcdzOISc.js","./B5H5dDa3.js","./3gGgaDqB.js","./BcvC6vLn.js","./BLcPi6Xe.js","./BLP4vArp.js","./Dp5nSKBs.js","./B33vLN06.js","./BrwtvE9h.js","./CoozBmEj.js","./d0ovFEfo.js","./C3JnT5jU.js","./DJiOC6vb.js","./Dz7v_Gbr.js","./BdP4bkN0.js","./VgZQ4gc1.js","./error-404._yXoGkXB.css","./DwcyHsOB.js","./error-500.BENb_mjk.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function vu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const mt={},Wr=[],qn=()=>{},Ld=()=>!1,eo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Sa=t=>t.startsWith("onUpdate:"),Rt=Object.assign,xu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zg=Object.prototype.hasOwnProperty,rt=(t,e)=>zg.call(t,e),Oe=Array.isArray,Xr=t=>us(t)==="[object Map]",Id=t=>us(t)==="[object Set]",ff=t=>us(t)==="[object Date]",Gg=t=>us(t)==="[object RegExp]",ke=t=>typeof t=="function",gt=t=>typeof t=="string",Sn=t=>typeof t=="symbol",tt=t=>t!==null&&typeof t=="object",Nd=t=>(tt(t)||ke(t))&&ke(t.then)&&ke(t.catch),Ud=Object.prototype.toString,us=t=>Ud.call(t),Wg=t=>us(t).slice(8,-1),Fd=t=>us(t)==="[object Object]",Ma=t=>gt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hr=vu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Xg=/-\w/g,Xt=Ea(t=>t.replace(Xg,e=>e.slice(1).toUpperCase())),qg=/\B([A-Z])/g,yr=Ea(t=>t.replace(qg,"-$1").toLowerCase()),ba=Ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),qa=Ea(t=>t?`on${ba(t)}`:""),zn=(t,e)=>!Object.is(t,e),Is=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Od=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},$g=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Bd=t=>{const e=gt(t)?Number(t):NaN;return isNaN(e)?t:e};let hf;const Ta=()=>hf||(hf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Aa(t){if(Oe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=gt(i)?Zg(i):Aa(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(gt(t)||tt(t))return t}const jg=/;(?![^(]*\))/g,Yg=/:([^]+)/,Kg=/\/\*[^]*?\*\//g;function Zg(t){const e={};return t.replace(Kg,"").split(jg).forEach(n=>{if(n){const i=n.split(Yg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function to(t){let e="";if(gt(t))e=t;else if(Oe(t))for(let n=0;n<t.length;n++){const i=to(t[n]);i&&(e+=i+" ")}else if(tt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Jg(t){if(!t)return null;let{class:e,style:n}=t;return e&&!gt(e)&&(t.class=to(e)),n&&(t.style=Aa(n)),t}const Qg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",e_=vu(Qg);function kd(t){return!!t||t===""}function t_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=yu(t[i],e[i]);return n}function yu(t,e){if(t===e)return!0;let n=ff(t),i=ff(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Sn(t),i=Sn(e),n||i)return t===e;if(n=Oe(t),i=Oe(e),n||i)return n&&i?t_(t,e):!1;if(n=tt(t),i=tt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!yu(t[o],e[o]))return!1}}return String(t)===String(e)}const Hd=t=>!!(t&&t.__v_isRef===!0),n_=t=>gt(t)?t:t==null?"":Oe(t)||tt(t)&&(t.toString===Ud||!ke(t.toString))?Hd(t)?n_(t.value):JSON.stringify(t,Vd,2):String(t),Vd=(t,e)=>Hd(e)?Vd(t,e.value):Xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[$a(i,s)+" =>"]=r,n),{})}:Id(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$a(n))}:Sn(e)?$a(e):tt(e)&&!Oe(e)&&!Fd(e)?String(e):e,$a=(t,e="")=>{var n;return Sn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Kt;class zd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Kt;try{return Kt=this,e()}finally{Kt=n}}}on(){++this._on===1&&(this.prevScope=Kt,Kt=this)}off(){this._on>0&&--this._on===0&&(Kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function i_(t){return new zd(t)}function Gd(){return Kt}let pt;const ja=new WeakSet;class Wd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ja.has(this)&&(ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,df(this),$d(this);const e=pt,n=Dn;pt=this,Dn=!0;try{return this.fn()}finally{jd(this),pt=e,Dn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Eu(e);this.deps=this.depsTail=void 0,df(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wl(this)&&this.run()}get dirty(){return Wl(this)}}let Xd=0,Ns,Us;function qd(t,e=!1){if(t.flags|=8,e){t.next=Us,Us=t;return}t.next=Ns,Ns=t}function Su(){Xd++}function Mu(){if(--Xd>0)return;if(Us){let e=Us;for(Us=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ns;){let e=Ns;for(Ns=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function $d(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jd(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Eu(i),r_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Wl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Yd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Yd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===zs)||(t.globalVersion=zs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Wl(t))))return;t.flags|=2;const e=t.dep,n=pt,i=Dn;pt=t,Dn=!0;try{$d(t);const r=t.fn(t._value);(e.version===0||zn(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{pt=n,Dn=i,jd(t),t.flags&=-3}}function Eu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Eu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function r_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Dn=!0;const Kd=[];function gi(){Kd.push(Dn),Dn=!1}function _i(){const t=Kd.pop();Dn=t===void 0?!0:t}function df(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=pt;pt=void 0;try{e()}finally{pt=n}}}let zs=0;class s_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!pt||!Dn||pt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pt)n=this.activeLink=new s_(pt,this),pt.deps?(n.prevDep=pt.depsTail,pt.depsTail.nextDep=n,pt.depsTail=n):pt.deps=pt.depsTail=n,Zd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=pt.depsTail,n.nextDep=void 0,pt.depsTail.nextDep=n,pt.depsTail=n,pt.deps===n&&(pt.deps=i)}return n}trigger(e){this.version++,zs++,this.notify(e)}notify(e){Su();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Mu()}}}function Zd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Zd(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ia=new WeakMap,dr=Symbol(""),Xl=Symbol(""),Gs=Symbol("");function Ot(t,e,n){if(Dn&&pt){let i=ia.get(t);i||ia.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new bu),r.map=i,r.key=n),r.track()}}function fi(t,e,n,i,r,s){const o=ia.get(t);if(!o){zs++;return}const a=l=>{l&&l.trigger()};if(Su(),e==="clear")o.forEach(a);else{const l=Oe(t),c=l&&Ma(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Gs||!Sn(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Gs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(dr)),Xr(t)&&a(o.get(Xl)));break;case"delete":l||(a(o.get(dr)),Xr(t)&&a(o.get(Xl)));break;case"set":Xr(t)&&a(o.get(dr));break}}Mu()}function o_(t,e){const n=ia.get(t);return n&&n.get(e)}function br(t){const e=Je(t);return e===t?e:(Ot(e,"iterate",Gs),cn(t)?e:e.map(Ln))}function wa(t){return Ot(t=Je(t),"iterate",Gs),t}function Hn(t,e){return Kn(t)?Zr(ki(t)?Ln(e):e):Ln(e)}const a_={__proto__:null,[Symbol.iterator](){return Ya(this,Symbol.iterator,t=>Hn(this,t))},concat(...t){return br(this).concat(...t.map(e=>Oe(e)?br(e):e))},entries(){return Ya(this,"entries",t=>(t[1]=Hn(this,t[1]),t))},every(t,e){return ti(this,"every",t,e,void 0,arguments)},filter(t,e){return ti(this,"filter",t,e,n=>n.map(i=>Hn(this,i)),arguments)},find(t,e){return ti(this,"find",t,e,n=>Hn(this,n),arguments)},findIndex(t,e){return ti(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ti(this,"findLast",t,e,n=>Hn(this,n),arguments)},findLastIndex(t,e){return ti(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ti(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ka(this,"includes",t)},indexOf(...t){return Ka(this,"indexOf",t)},join(t){return br(this).join(t)},lastIndexOf(...t){return Ka(this,"lastIndexOf",t)},map(t,e){return ti(this,"map",t,e,void 0,arguments)},pop(){return gs(this,"pop")},push(...t){return gs(this,"push",t)},reduce(t,...e){return pf(this,"reduce",t,e)},reduceRight(t,...e){return pf(this,"reduceRight",t,e)},shift(){return gs(this,"shift")},some(t,e){return ti(this,"some",t,e,void 0,arguments)},splice(...t){return gs(this,"splice",t)},toReversed(){return br(this).toReversed()},toSorted(t){return br(this).toSorted(t)},toSpliced(...t){return br(this).toSpliced(...t)},unshift(...t){return gs(this,"unshift",t)},values(){return Ya(this,"values",t=>Hn(this,t))}};function Ya(t,e,n){const i=wa(t),r=i[e]();return i!==t&&!cn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const l_=Array.prototype;function ti(t,e,n,i,r,s){const o=wa(t),a=o!==t&&!cn(t),l=o[e];if(l!==l_[e]){const f=l.apply(t,s);return a?Ln(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,Hn(t,f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function pf(t,e,n,i){const r=wa(t),s=r!==t&&!cn(t);let o=n,a=!1;r!==t&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Hn(t,c)),n.call(this,c,Hn(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=r[e](o,...i);return a?Hn(t,l):l}function Ka(t,e,n){const i=Je(t);Ot(i,"iterate",Gs);const r=i[e](...n);return(r===-1||r===!1)&&Ra(n[0])?(n[0]=Je(n[0]),i[e](...n)):r}function gs(t,e,n=[]){gi(),Su();const i=Je(t)[e].apply(t,n);return Mu(),_i(),i}const c_=vu("__proto__,__v_isRef,__isVue"),Jd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sn));function u_(t){Sn(t)||(t=String(t));const e=Je(this);return Ot(e,"has",t),e.hasOwnProperty(t)}class Qd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?y_:ip:s?np:tp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Oe(e);if(!r){let l;if(o&&(l=a_[n]))return l;if(n==="hasOwnProperty")return u_}const a=Reflect.get(e,n,Tt(e)?e:i);if((Sn(n)?Jd.has(n):c_(n))||(r||Ot(e,"get",n),s))return a;if(Tt(a)){const l=o&&Ma(n)?a:a.value;return r&&tt(l)?$l(l):l}return tt(a)?r?$l(a):zi(a):a}}class ep extends Qd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=Oe(e)&&Ma(n);if(!this._isShallow){const c=Kn(s);if(!cn(i)&&!Kn(i)&&(s=Je(s),i=Je(i)),!o&&Tt(s)&&!Tt(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:rt(e,n),l=Reflect.set(e,n,i,Tt(e)?e:r);return e===Je(r)&&(a?zn(i,s)&&fi(e,"set",n,i):fi(e,"add",n,i)),l}deleteProperty(e,n){const i=rt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&fi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Sn(n)||!Jd.has(n))&&Ot(e,"has",n),i}ownKeys(e){return Ot(e,"iterate",Oe(e)?"length":dr),Reflect.ownKeys(e)}}class f_ extends Qd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const h_=new ep,d_=new f_,p_=new ep(!0);const ql=t=>t,po=t=>Reflect.getPrototypeOf(t);function m_(t,e,n){return function(...i){const r=this.__v_raw,s=Je(r),o=Xr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?ql:e?Zr:Ln;return!e&&Ot(s,"iterate",l?Xl:dr),Rt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function mo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function g_(t,e){const n={get(r){const s=this.__v_raw,o=Je(s),a=Je(r);t||(zn(r,a)&&Ot(o,"get",r),Ot(o,"get",a));const{has:l}=po(o),c=e?ql:t?Zr:Ln;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Ot(Je(r),"iterate",dr),r.size},has(r){const s=this.__v_raw,o=Je(s),a=Je(r);return t||(zn(r,a)&&Ot(o,"has",r),Ot(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Je(a),c=e?ql:t?Zr:Ln;return!t&&Ot(l,"iterate",dr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Rt(n,t?{add:mo("add"),set:mo("set"),delete:mo("delete"),clear:mo("clear")}:{add(r){const s=Je(this),o=po(s),a=Je(r),l=!e&&!cn(r)&&!Kn(r)?a:r;return o.has.call(s,l)||zn(r,l)&&o.has.call(s,r)||zn(a,l)&&o.has.call(s,a)||(s.add(l),fi(s,"add",l,l)),this},set(r,s){!e&&!cn(s)&&!Kn(s)&&(s=Je(s));const o=Je(this),{has:a,get:l}=po(o);let c=a.call(o,r);c||(r=Je(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?zn(s,u)&&fi(o,"set",r,s):fi(o,"add",r,s),this},delete(r){const s=Je(this),{has:o,get:a}=po(s);let l=o.call(s,r);l||(r=Je(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&fi(s,"delete",r,void 0),c},clear(){const r=Je(this),s=r.size!==0,o=r.clear();return s&&fi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=m_(r,t,e)}),n}function Tu(t,e){const n=g_(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(rt(n,r)&&r in i?n:i,r,s)}const __={get:Tu(!1,!1)},v_={get:Tu(!1,!0)},x_={get:Tu(!0,!1)};const tp=new WeakMap,np=new WeakMap,ip=new WeakMap,y_=new WeakMap;function S_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function M_(t){return t.__v_skip||!Object.isExtensible(t)?0:S_(Wg(t))}function zi(t){return Kn(t)?t:Au(t,!1,h_,__,tp)}function Gn(t){return Au(t,!1,p_,v_,np)}function $l(t){return Au(t,!0,d_,x_,ip)}function Au(t,e,n,i,r){if(!tt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=M_(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function ki(t){return Kn(t)?ki(t.__v_raw):!!(t&&t.__v_isReactive)}function Kn(t){return!!(t&&t.__v_isReadonly)}function cn(t){return!!(t&&t.__v_isShallow)}function Ra(t){return t?!!t.__v_raw:!1}function Je(t){const e=t&&t.__v_raw;return e?Je(e):t}function E_(t){return!rt(t,"__v_skip")&&Object.isExtensible(t)&&Od(t,"__v_skip",!0),t}const Ln=t=>tt(t)?zi(t):t,Zr=t=>tt(t)?$l(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function yn(t){return rp(t,!1)}function Jr(t){return rp(t,!0)}function rp(t,e){return Tt(t)?t:new b_(t,e)}class b_{constructor(e,n){this.dep=new bu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Je(e),this._value=n?e:Ln(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||cn(e)||Kn(e);e=i?e:Je(e),zn(e,n)&&(this._rawValue=e,this._value=i?e:Ln(e),this.dep.trigger())}}function ft(t){return Tt(t)?t.value:t}function T_(t){return ke(t)?t():ft(t)}const A_={get:(t,e,n)=>e==="__v_raw"?t:ft(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Tt(r)&&!Tt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function sp(t){return ki(t)?t:new Proxy(t,A_)}class w_{constructor(e,n,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=Sn(n)?n:String(n),this._raw=Je(e);let r=!0,s=e;if(!Oe(e)||Sn(this._key)||!Ma(this._key))do r=!Ra(s)||cn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=ft(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Tt(this._raw[this._key])){const n=this._object[this._key];if(Tt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return o_(this._raw,this._key)}}class R_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function C_(t,e,n){return Tt(t)?t:ke(t)?new R_(t):tt(t)&&arguments.length>1?P_(t,e,n):yn(t)}function P_(t,e,n){return new w_(t,e,n)}class D_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new bu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pt!==this)return qd(this,!0),!0}get value(){const e=this.dep.track();return Yd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function L_(t,e,n=!1){let i,r;return ke(t)?i=t:(i=t.get,r=t.set),new D_(i,r,n)}const go={},ra=new WeakMap;let ir;function I_(t,e=!1,n=ir){if(n){let i=ra.get(n);i||ra.set(n,i=[]),i.push(t)}}function N_(t,e,n=mt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=y=>r?y:cn(y)||r===!1||r===0?Ui(y,1):Ui(y);let u,f,h,d,m=!1,_=!1;if(Tt(t)?(f=()=>t.value,m=cn(t)):ki(t)?(f=()=>c(t),m=!0):Oe(t)?(_=!0,m=t.some(y=>ki(y)||cn(y)),f=()=>t.map(y=>{if(Tt(y))return y.value;if(ki(y))return c(y);if(ke(y))return l?l(y,2):y()})):ke(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){gi();try{h()}finally{_i()}}const y=ir;ir=u;try{return l?l(t,3,[d]):t(d)}finally{ir=y}}:f=qn,e&&r){const y=f,b=r===!0?1/0:r;f=()=>Ui(y(),b)}const g=Gd(),p=()=>{u.stop(),g&&g.active&&xu(g.effects,u)};if(s&&e){const y=e;e=(...b)=>{y(...b),p()}}let S=_?new Array(t.length).fill(go):go;const v=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const b=u.run();if(r||m||(_?b.some((T,w)=>zn(T,S[w])):zn(b,S))){h&&h();const T=ir;ir=u;try{const w=[b,S===go?void 0:_&&S[0]===go?[]:S,d];S=b,l?l(e,3,w):e(...w)}finally{ir=T}}}else u.run()};return a&&a(v),u=new Wd(f),u.scheduler=o?()=>o(v,!1):v,d=y=>I_(y,!1,u),h=u.onStop=()=>{const y=ra.get(u);if(y){if(l)l(y,4);else for(const b of y)b();ra.delete(u)}},e?i?v(!0):S=u.run():o?o(v.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ui(t,e=1/0,n){if(e<=0||!tt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Tt(t))Ui(t.value,e,n);else if(Oe(t))for(let i=0;i<t.length;i++)Ui(t[i],e,n);else if(Id(t)||Xr(t))t.forEach(i=>{Ui(i,e,n)});else if(Fd(t)){for(const i in t)Ui(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ui(t[i],e,n)}return t}function no(t,e,n,i){try{return i?t(...i):t()}catch(r){fs(r,e,n)}}function In(t,e,n,i){if(ke(t)){const r=no(t,e,n,i);return r&&Nd(r)&&r.catch(s=>{fs(s,e,n)}),r}if(Oe(t)){const r=[];for(let s=0;s<t.length;s++)r.push(In(t[s],e,n,i));return r}}function fs(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||mt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){gi(),no(s,null,10,[t,l,c]),_i();return}}U_(t,n,r,i,o)}function U_(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Wt=[];let On=-1;const qr=[];let Li=null,Vr=0;const op=Promise.resolve();let sa=null;function Ws(t){const e=sa||op;return t?e.then(this?t.bind(this):t):e}function F_(t){let e=On+1,n=Wt.length;for(;e<n;){const i=e+n>>>1,r=Wt[i],s=Xs(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function wu(t){if(!(t.flags&1)){const e=Xs(t),n=Wt[Wt.length-1];!n||!(t.flags&2)&&e>=Xs(n)?Wt.push(t):Wt.splice(F_(e),0,t),t.flags|=1,ap()}}function ap(){sa||(sa=op.then(lp))}function jl(t){Oe(t)?qr.push(...t):Li&&t.id===-1?Li.splice(Vr+1,0,t):t.flags&1||(qr.push(t),t.flags|=1),ap()}function mf(t,e,n=On+1){for(;n<Wt.length;n++){const i=Wt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Wt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function oa(t){if(qr.length){const e=[...new Set(qr)].sort((n,i)=>Xs(n)-Xs(i));if(qr.length=0,Li){Li.push(...e);return}for(Li=e,Vr=0;Vr<Li.length;Vr++){const n=Li[Vr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Li=null,Vr=0}}const Xs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function lp(t){try{for(On=0;On<Wt.length;On++){const e=Wt[On];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),no(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;On<Wt.length;On++){const e=Wt[On];e&&(e.flags&=-2)}On=-1,Wt.length=0,oa(),sa=null,(Wt.length||qr.length)&&lp()}}let Cn=null,cp=null;function aa(t){const e=Cn;return Cn=t,cp=t&&t.type.__scopeId||null,e}function Ru(t,e=Cn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&ha(-1);const s=aa(e);let o;try{o=t(...r)}finally{aa(s),i._d&&ha(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Bn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(gi(),In(l,n,8,[t.el,a,t,e]),_i())}}function pr(t,e){if(Lt){let n=Lt.provides;const i=Lt.parent&&Lt.parent.provides;i===n&&(n=Lt.provides=Object.create(i)),n[t]=e}}function un(t,e,n=!1){const i=Mr();if(i||gr){let r=gr?gr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ke(e)?e.call(i&&i.proxy):e}}function Cu(){return!!(Mr()||gr)}const O_=Symbol.for("v-scx"),B_=()=>un(O_);function k_(t,e){return Pu(t,null,e)}function mr(t,e,n){return Pu(t,e,n)}function Pu(t,e,n=mt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Rt({},n),l=e&&i||!e&&s!=="post";let c;if(ns){if(s==="sync"){const d=B_();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=qn,d.resume=qn,d.pause=qn,d}}const u=Lt;a.call=(d,m,_)=>In(d,u,m,_);let f=!1;s==="post"?a.scheduler=d=>{bt(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,m)=>{m?d():wu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=N_(t,e,a);return ns&&(c?c.push(h):l&&h()),h}function H_(t,e,n){const i=this.proxy,r=gt(t)?t.includes(".")?up(i,t):()=>i[t]:t.bind(i,i);let s;ke(e)?s=e:(s=e.handler,n=e);const o=so(this),a=Pu(r,s.bind(i),n);return o(),a}function up(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const qi=new WeakMap,fp=Symbol("_vte"),hp=t=>t.__isTeleport,or=t=>t&&(t.disabled||t.disabled===""),V_=t=>t&&(t.defer||t.defer===""),gf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,_f=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Yl=(t,e)=>{const n=t&&t.to;return gt(n)?e?e(n):null:n},z_={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:d,querySelector:m,createText:_,createComment:g}}=c,p=or(e.props);let{dynamicChildren:S}=e;const v=(T,w,I)=>{T.shapeFlag&16&&u(T.children,w,I,r,s,o,a,l)},y=(T=e)=>{const w=or(T.props),I=T.target=Yl(T.props,m),M=Kl(I,T,_,d);I&&(o!=="svg"&&gf(I)?o="svg":o!=="mathml"&&_f(I)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(I),w||(v(T,I,M),Rs(T,!1)))},b=T=>{const w=()=>{qi.get(T)===w&&(qi.delete(T),or(T.props)&&(v(T,n,T.anchor),Rs(T,!0)),y(T))};qi.set(T,w),bt(w,s)};if(t==null){const T=e.el=_(""),w=e.anchor=_("");if(d(T,n,i),d(w,n,i),V_(e.props)||s&&s.pendingBranch){b(e);return}p&&(v(e,n,w),Rs(e,!0)),y()}else{e.el=t.el;const T=e.anchor=t.anchor,w=qi.get(t);if(w){w.flags|=8,qi.delete(t),b(e);return}e.targetStart=t.targetStart;const I=e.target=t.target,M=e.targetAnchor=t.targetAnchor,E=or(t.props),L=E?n:I,U=E?T:M;if(o==="svg"||gf(I)?o="svg":(o==="mathml"||_f(I))&&(o="mathml"),S?(h(t.dynamicChildren,S,L,r,s,o,a),Nu(t,e,!0)):l||f(t,e,L,U,r,s,o,a,!1),p)E?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):_o(e,n,T,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const O=e.target=Yl(e.props,m);O&&_o(e,O,null,c,0)}else E&&_o(e,I,M,c,1);Rs(e,p)}},remove(t,e,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:h}=t;let d=s||!or(h);const m=qi.get(t);if(m&&(m.flags|=8,qi.delete(t),d=!1),f&&(r(c),r(u)),s&&r(l),o&16)for(let _=0;_<a.length;_++){const g=a[_];i(g,e,n,d,!!g.dynamicChildren)}},move:_o,hydrate:G_};function _o(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=s===2;if(f&&i(o,e,n),(!f||or(u))&&l&16)for(let h=0;h<c.length;h++)r(c[h],e,n,2);f&&i(a,e,n)}function G_(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function h(g,p){let S=p;for(;S;){if(S&&S.nodeType===8){if(S.data==="teleport start anchor")e.targetStart=S;else if(S.data==="teleport anchor"){e.targetAnchor=S,g._lpa=e.targetAnchor&&o(e.targetAnchor);break}}S=o(S)}}function d(g,p){p.anchor=f(o(g),p,a(g),n,i,r,s)}const m=e.target=Yl(e.props,l),_=or(e.props);if(m){const g=m._lpa||m.firstChild;e.shapeFlag&16&&(_?(d(t,e),h(m,g),e.targetAnchor||Kl(m,e,u,c,a(t)===m?t:null)):(e.anchor=o(t),h(m,g),e.targetAnchor||Kl(m,e,u,c),f(g&&o(g),e,m,n,i,r,s))),Rs(e,_)}else _&&e.shapeFlag&16&&(d(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const iC=z_;function Rs(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Kl(t,e,n,i,r=null){const s=e.targetStart=n(""),o=e.targetAnchor=n("");return s[fp]=o,t&&(i(s,t,r),i(o,t,r)),o}const kn=Symbol("_leaveCb"),_s=Symbol("_enterCb");function W_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Sr(()=>{t.isMounted=!0}),ro(()=>{t.isUnmounting=!0}),t}const dn=[Function,Array],dp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dn,onEnter:dn,onAfterEnter:dn,onEnterCancelled:dn,onBeforeLeave:dn,onLeave:dn,onAfterLeave:dn,onLeaveCancelled:dn,onBeforeAppear:dn,onAppear:dn,onAfterAppear:dn,onAppearCancelled:dn},pp=t=>{const e=t.subTree;return e.component?pp(e.component):e},X_={name:"BaseTransition",props:dp,setup(t,{slots:e}){const n=Mr(),i=W_();return()=>{const r=e.default&&_p(e.default(),!0);if(!r||!r.length)return;const s=mp(r),o=Je(t),{mode:a}=o;if(i.isLeaving)return Za(s);const l=vf(s);if(!l)return Za(s);let c=Zl(l,o,i,n,f=>c=f);l.type!==wt&&Qr(l,c);let u=n.subTree&&vf(n.subTree);if(u&&u.type!==wt&&!An(u,l)&&pp(n).type!==wt){let f=Zl(u,o,i,n);if(Qr(u,f),a==="out-in"&&l.type!==wt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Za(s);a==="in-out"&&l.type!==wt?f.delayLeave=(h,d,m)=>{const _=gp(i,u);_[String(u.key)]=u,h[kn]=()=>{d(),h[kn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{m(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function mp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==wt){e=n;break}}return e}const q_=X_;function gp(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Zl(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:g,onAppear:p,onAfterAppear:S,onAppearCancelled:v}=e,y=String(t.key),b=gp(n,t),T=(M,E)=>{M&&In(M,i,9,E)},w=(M,E)=>{const L=E[1];T(M,E),Oe(M)?M.every(U=>U.length<=1)&&L():M.length<=1&&L()},I={mode:o,persisted:a,beforeEnter(M){let E=l;if(!n.isMounted)if(s)E=g||l;else return;M[kn]&&M[kn](!0);const L=b[y];L&&An(t,L)&&L.el[kn]&&L.el[kn](),T(E,[M])},enter(M){if(b[y]===t)return;let E=c,L=u,U=f;if(!n.isMounted)if(s)E=p||c,L=S||u,U=v||f;else return;let O=!1;M[_s]=Q=>{O||(O=!0,Q?T(U,[M]):T(L,[M]),I.delayedLeave&&I.delayedLeave(),M[_s]=void 0)};const Y=M[_s].bind(null,!1);E?w(E,[M,Y]):Y()},leave(M,E){const L=String(t.key);if(M[_s]&&M[_s](!0),n.isUnmounting)return E();T(h,[M]);let U=!1;M[kn]=Y=>{U||(U=!0,E(),Y?T(_,[M]):T(m,[M]),M[kn]=void 0,b[L]===t&&delete b[L])};const O=M[kn].bind(null,!1);b[L]=t,d?w(d,[M,O]):O()},clone(M){const E=Zl(M,e,n,i,r);return r&&r(E),E}};return I}function Za(t){if(io(t))return t=Zn(t),t.children=null,t}function vf(t){if(!io(t))return hp(t.type)&&t.children?mp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ke(n.default))return n.default()}}function Qr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Qr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function _p(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===on?(o.patchFlag&128&&r++,i=i.concat(_p(o.children,e,a))):(e||o.type!==wt)&&i.push(a!=null?Zn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Gi(t,e){return ke(t)?Rt({name:t.name},e,{setup:t}):t}function Du(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function xf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const la=new WeakMap;function $r(t,e,n,i,r=!1){if(Oe(t)){t.forEach((_,g)=>$r(_,e&&(Oe(e)?e[g]:e),n,i,r));return}if(Hi(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&$r(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Fu(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===mt?a.refs={}:a.refs,f=a.setupState,h=Je(f),d=f===mt?Ld:_=>xf(u,_)?!1:rt(h,_),m=(_,g)=>!(g&&xf(u,g));if(c!=null&&c!==l){if(yf(e),gt(c))u[c]=null,d(c)&&(f[c]=null);else if(Tt(c)){const _=e;m(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(ke(l))no(l,a,12,[o,u]);else{const _=gt(l),g=Tt(l);if(_||g){const p=()=>{if(t.f){const S=_?d(l)?f[l]:u[l]:m()||!t.k?l.value:u[t.k];if(r)Oe(S)&&xu(S,s);else if(Oe(S))S.includes(s)||S.push(s);else if(_)u[l]=[s],d(l)&&(f[l]=u[l]);else{const v=[s];m(l,t.k)&&(l.value=v),t.k&&(u[t.k]=v)}}else _?(u[l]=o,d(l)&&(f[l]=o)):g&&(m(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const S=()=>{p(),la.delete(t)};S.id=-1,la.set(t,S),bt(S,n)}else yf(t),p()}}}function yf(t){const e=la.get(t);e&&(e.flags|=8,la.delete(t))}let Sf=!1;const Tr=()=>{Sf||(console.error("Hydration completed but contains mismatches."),Sf=!0)},$_=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",j_=t=>t.namespaceURI.includes("MathML"),vo=t=>{if(t.nodeType===1){if($_(t))return"svg";if(j_(t))return"mathml"}},Gr=t=>t.nodeType===8;function Y_(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(v,y)=>{if(!y.hasChildNodes()){n(null,v,y),oa(),y._vnode=v;return}f(y.firstChild,v,null,null,null),oa(),y._vnode=v},f=(v,y,b,T,w,I=!1)=>{I=I||!!y.dynamicChildren;const M=Gr(v)&&v.data==="[",E=()=>_(v,y,b,T,w,M),{type:L,ref:U,shapeFlag:O,patchFlag:Y}=y;let Q=v.nodeType;y.el=v,Y===-2&&(I=!1,y.dynamicChildren=null);let k=null;switch(L){case _r:Q!==3?y.children===""?(l(y.el=r(""),o(v),v),k=v):k=E():(v.data!==y.children&&(Tr(),v.data=y.children),k=s(v));break;case wt:S(v)?(k=s(v),p(y.el=v.content.firstChild,v,b)):Q!==8||M?k=E():k=s(v);break;case Os:if(M&&(v=s(v),Q=v.nodeType),Q===1||Q===3){k=v;const V=!y.children.length;for(let W=0;W<y.staticCount;W++)V&&(y.children+=k.nodeType===1?k.outerHTML:k.data),W===y.staticCount-1&&(y.anchor=k),k=s(k);return M?s(k):k}else E();break;case on:M?k=m(v,y,b,T,w,I):k=E();break;default:if(O&1)(Q!==1||y.type.toLowerCase()!==v.tagName.toLowerCase())&&!S(v)?k=E():k=h(v,y,b,T,w,I);else if(O&6){y.slotScopeIds=w;const V=o(v);if(M?k=g(v):Gr(v)&&v.data==="teleport start"?k=g(v,v.data,"teleport end"):k=s(v),e(y,V,null,b,T,vo(V),I),Hi(y)&&!y.type.__asyncResolved){let W;M?(W=yt(on),W.anchor=k?k.previousSibling:V.lastChild):W=v.nodeType===3?Zp(""):yt("div"),W.el=v,y.component.subTree=W}}else O&64?Q!==8?k=E():k=y.type.hydrate(v,y,b,T,w,I,t,d):O&128&&(k=y.type.hydrate(v,y,b,T,vo(o(v)),w,I,t,f))}return U!=null&&$r(U,null,T,y),k},h=(v,y,b,T,w,I)=>{I=I||!!y.dynamicChildren;const{type:M,props:E,patchFlag:L,shapeFlag:U,dirs:O,transition:Y}=y,Q=M==="input"||M==="option";if(Q||L!==-1){O&&Bn(y,null,b,"created");let k=!1;if(S(v)){k=Hp(null,Y)&&b&&b.vnode.props&&b.vnode.props.appear;const W=v.content.firstChild;if(k){const fe=W.getAttribute("class");fe&&(W.$cls=fe),Y.beforeEnter(W)}p(W,v,b),y.el=v=W}if(U&16&&!(E&&(E.innerHTML||E.textContent))){let W=d(v.firstChild,y,v,b,T,w,I);for(;W;){xo(v,1)||Tr();const fe=W;W=W.nextSibling,a(fe)}}else if(U&8){let W=y.children;W[0]===`
`&&(v.tagName==="PRE"||v.tagName==="TEXTAREA")&&(W=W.slice(1));const{textContent:fe}=v;fe!==W&&fe!==W.replace(/\r\n|\r/g,`
`)&&(xo(v,0)||Tr(),v.textContent=y.children)}if(E){if(Q||!I||L&48){const W=v.tagName.includes("-");for(const fe in E)(Q&&(fe.endsWith("value")||fe==="indeterminate")||eo(fe)&&!hr(fe)||fe[0]==="."||W&&!hr(fe))&&i(v,fe,null,E[fe],void 0,b)}else if(E.onClick)i(v,"onClick",null,E.onClick,void 0,b);else if(L&4&&ki(E.style))for(const W in E.style)E.style[W]}let V;(V=E&&E.onVnodeBeforeMount)&&Zt(V,b,y),O&&Bn(y,null,b,"beforeMount"),((V=E&&E.onVnodeMounted)||O||k)&&Xp(()=>{V&&Zt(V,b,y),k&&Y.enter(v),O&&Bn(y,null,b,"mounted")},T)}return v.nextSibling},d=(v,y,b,T,w,I,M)=>{M=M||!!y.dynamicChildren;const E=y.children,L=E.length;for(let U=0;U<L;U++){const O=M?E[U]:E[U]=an(E[U]),Y=O.type===_r;v?(Y&&!M&&U+1<L&&an(E[U+1]).type===_r&&(l(r(v.data.slice(O.children.length)),b,s(v)),v.data=O.children),v=f(v,O,T,w,I,M)):Y&&!O.children?l(O.el=r(""),b):(xo(b,1)||Tr(),n(null,O,b,null,T,w,vo(b),I))}return v},m=(v,y,b,T,w,I)=>{const{slotScopeIds:M}=y;M&&(w=w?w.concat(M):M);const E=o(v),L=d(s(v),y,E,b,T,w,I);return L&&Gr(L)&&L.data==="]"?s(y.anchor=L):(Tr(),l(y.anchor=c("]"),E,L),L)},_=(v,y,b,T,w,I)=>{if(xo(v.parentElement,1)||Tr(),y.el=null,I){const L=g(v);for(;;){const U=s(v);if(U&&U!==L)a(U);else break}}const M=s(v),E=o(v);return a(v),n(null,y,E,M,b,T,vo(E),w),b&&(b.vnode.el=y.el,La(b,y.el)),M},g=(v,y="[",b="]")=>{let T=0;for(;v;)if(v=s(v),v&&Gr(v)&&(v.data===y&&T++,v.data===b)){if(T===0)return s(v);T--}return v},p=(v,y,b)=>{const T=y.parentNode;T&&T.replaceChild(v,y);let w=b;for(;w;)w.vnode.el===y&&(w.vnode.el=w.subTree.el=v),w=w.parent},S=v=>v.nodeType===1&&v.tagName==="TEMPLATE";return[u,f]}const Mf="data-allow-mismatch",K_={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function xo(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Mf);)t=t.parentElement;const n=t&&t.getAttribute(Mf);if(n==null)return!1;if(n==="")return!0;{const i=n.split(",");return e===0&&i.includes("children")?!0:i.includes(K_[e])}}Ta().requestIdleCallback;Ta().cancelIdleCallback;function Z_(t,e){if(Gr(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Gr(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const Hi=t=>!!t.type.__asyncLoader;function Ef(t){ke(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=t;let c=null,u,f=0;const h=()=>(f++,c=null,d()),d=()=>{let m;return c||(m=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((g,p)=>{l(_,()=>g(h()),()=>p(_),f+1)});throw _}).then(_=>m!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return Gi({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(m,_,g){let p=!1;(_.bu||(_.bu=[])).push(()=>p=!0);const S=()=>{p||g()},v=s?()=>{const y=s(S,b=>Z_(m,b));y&&(_.bum||(_.bum=[])).push(y)}:S;u?v():d().then(()=>!_.isUnmounted&&v())},get __asyncResolved(){return u},setup(){const m=Lt;if(Du(m),u)return()=>yo(u,m);const _=v=>{c=null,fs(v,m,13,!i)};if(a&&m.suspense||ns)return d().then(v=>()=>yo(v,m)).catch(v=>(_(v),()=>i?yt(i,{error:v}):null));const g=yn(!1),p=yn(),S=yn(!!r);return r&&setTimeout(()=>{S.value=!1},r),o!=null&&setTimeout(()=>{if(!g.value&&!p.value){const v=new Error(`Async component timed out after ${o}ms.`);_(v),p.value=v}},o),d().then(()=>{g.value=!0,m.parent&&io(m.parent.vnode)&&m.parent.update()}).catch(v=>{_(v),p.value=v}),()=>{if(g.value&&u)return yo(u,m);if(p.value&&i)return yt(i,{error:p.value});if(n&&!S.value)return yo(n,m)}}})}function yo(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=yt(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const io=t=>t.type.__isKeepAlive,J_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Mr(),i=n.ctx;if(!i.renderer)return()=>{const S=e.default&&e.default();return S&&S.length===1?S[0]:S};const r=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(S,v,y,b,T)=>{const w=S.component;c(S,v,y,0,a),l(w.vnode,S,v,y,w,a,b,S.slotScopeIds,T),bt(()=>{w.isDeactivated=!1,w.a&&Is(w.a);const I=S.props&&S.props.onVnodeMounted;I&&Zt(I,w.parent,S)},a)},i.deactivate=S=>{const v=S.component;ua(v.m),ua(v.a),c(S,h,null,1,a),bt(()=>{v.da&&Is(v.da);const y=S.props&&S.props.onVnodeUnmounted;y&&Zt(y,v.parent,S),v.isDeactivated=!0},a)};function d(S){Ja(S),u(S,n,a,!0)}function m(S){r.forEach((v,y)=>{const b=oc(Hi(v)?v.type.__asyncResolved||{}:v.type);b&&!S(b)&&_(y)})}function _(S){const v=r.get(S);v&&(!o||!An(v,o))?d(v):o&&Ja(o),r.delete(S),s.delete(S)}mr(()=>[t.include,t.exclude],([S,v])=>{S&&m(y=>Cs(S,y)),v&&m(y=>!Cs(v,y))},{flush:"post",deep:!0});let g=null;const p=()=>{g!=null&&(fa(n.subTree.type)?bt(()=>{r.set(g,So(n.subTree))},n.subTree.suspense):r.set(g,So(n.subTree)))};return Sr(p),Sp(p),ro(()=>{r.forEach(S=>{const{subTree:v,suspense:y}=n,b=So(v);if(S.type===b.type&&S.key===b.key){Ja(b);const T=b.component.da;T&&bt(T,y);return}d(S)})}),()=>{if(g=null,!e.default)return o=null;const S=e.default(),v=S[0];if(S.length>1)return o=null,S;if(!ts(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let y=So(v);if(y.type===wt)return o=null,y;const b=y.type,T=oc(Hi(y)?y.type.__asyncResolved||{}:b),{include:w,exclude:I,max:M}=t;if(w&&(!T||!Cs(w,T))||I&&T&&Cs(I,T))return y.shapeFlag&=-257,o=y,v;const E=y.key==null?b:y.key,L=r.get(E);return y.el&&(y=Zn(y),v.shapeFlag&128&&(v.ssContent=y)),g=E,L?(y.el=L.el,y.component=L.component,y.transition&&Qr(y,y.transition),y.shapeFlag|=512,s.delete(E),s.add(E)):(s.add(E),M&&s.size>parseInt(M,10)&&_(s.values().next().value)),y.shapeFlag|=256,o=y,fa(v.type)?v:y}}},Q_=J_;function Cs(t,e){return Oe(t)?t.some(n=>Cs(n,e)):gt(t)?t.split(",").includes(e):Gg(t)?(t.lastIndex=0,t.test(e)):!1}function vp(t,e){yp(t,"a",e)}function xp(t,e){yp(t,"da",e)}function yp(t,e,n=Lt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ca(e,i,n),n){let r=n.parent;for(;r&&r.parent;)io(r.parent.vnode)&&e0(i,e,n,r),r=r.parent}}function e0(t,e,n,i){const r=Ca(e,t,i,!0);Pa(()=>{xu(i[e],r)},n)}function Ja(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function So(t){return t.shapeFlag&128?t.ssContent:t}function Ca(t,e,n=Lt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{gi();const a=so(n),l=In(e,n,t,o);return a(),_i(),l});return i?r.unshift(s):r.push(s),s}}const Mi=t=>(e,n=Lt)=>{(!ns||t==="sp")&&Ca(t,(...i)=>e(...i),n)},t0=Mi("bm"),Sr=Mi("m"),n0=Mi("bu"),Sp=Mi("u"),ro=Mi("bum"),Pa=Mi("um"),i0=Mi("sp"),r0=Mi("rtg"),s0=Mi("rtc");function Mp(t,e=Lt){Ca("ec",t,e)}const Ep="components";function rC(t,e){return Tp(Ep,t,!0,e)||t}const bp=Symbol.for("v-ndc");function o0(t){return gt(t)?Tp(Ep,t,!1)||t:t||bp}function Tp(t,e,n=!0,i=!1){const r=Cn||Lt;if(r){const s=r.type;{const a=oc(s,!1);if(a&&(a===e||a===Xt(e)||a===ba(Xt(e))))return s}const o=bf(r[t]||s[t],e)||bf(r.appContext[t],e);return!o&&i?s:o}}function bf(t,e){return t&&(t[e]||t[Xt(e)]||t[ba(Xt(e))])}function sC(t,e,n,i){let r;const s=n,o=Oe(t);if(o||gt(t)){const a=o&&ki(t);let l=!1,c=!1;a&&(l=!cn(t),c=Kn(t),t=wa(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Zr(Ln(t[u])):Ln(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(tt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Jl=t=>t?Jp(t)?Fu(t):Jl(t.parent):null,Fs=Rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jl(t.parent),$root:t=>Jl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>wp(t),$forceUpdate:t=>t.f||(t.f=()=>{wu(t.update)}),$nextTick:t=>t.n||(t.n=Ws.bind(t.proxy)),$watch:t=>H_.bind(t)}),Qa=(t,e)=>t!==mt&&!t.__isScriptSetup&&rt(t,e),a0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Qa(i,e))return o[e]=1,i[e];if(r!==mt&&rt(r,e))return o[e]=2,r[e];if(rt(s,e))return o[e]=3,s[e];if(n!==mt&&rt(n,e))return o[e]=4,n[e];Ql&&(o[e]=0)}}const c=Fs[e];let u,f;if(c)return e==="$attrs"&&Ot(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==mt&&rt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,rt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Qa(r,e)?(r[e]=n,!0):i!==mt&&rt(i,e)?(i[e]=n,!0):rt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==mt&&a[0]!=="$"&&rt(t,a)||Qa(e,a)||rt(s,a)||rt(i,a)||rt(Fs,a)||rt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:rt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Tf(t){return Oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ql=!0;function l0(t){const e=wp(t),n=t.proxy,i=t.ctx;Ql=!1,e.beforeCreate&&Af(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:m,activated:_,deactivated:g,beforeDestroy:p,beforeUnmount:S,destroyed:v,unmounted:y,render:b,renderTracked:T,renderTriggered:w,errorCaptured:I,serverPrefetch:M,expose:E,inheritAttrs:L,components:U,directives:O,filters:Y}=e;if(c&&c0(c,i,null),o)for(const V in o){const W=o[V];ke(W)&&(i[V]=W.bind(n))}if(r){const V=r.call(n,n);tt(V)&&(t.data=zi(V))}if(Ql=!0,s)for(const V in s){const W=s[V],fe=ke(W)?W.bind(n,n):ke(W.get)?W.get.bind(n,n):qn,_e=!ke(W)&&ke(W.set)?W.set.bind(n):qn,ye=wn({get:fe,set:_e});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ne=>ye.value=Ne})}if(a)for(const V in a)Ap(a[V],i,n,V);if(l){const V=ke(l)?l.call(n):l;Reflect.ownKeys(V).forEach(W=>{pr(W,V[W])})}u&&Af(u,t,"c");function k(V,W){Oe(W)?W.forEach(fe=>V(fe.bind(n))):W&&V(W.bind(n))}if(k(t0,f),k(Sr,h),k(n0,d),k(Sp,m),k(vp,_),k(xp,g),k(Mp,I),k(s0,T),k(r0,w),k(ro,S),k(Pa,y),k(i0,M),Oe(E))if(E.length){const V=t.exposed||(t.exposed={});E.forEach(W=>{Object.defineProperty(V,W,{get:()=>n[W],set:fe=>n[W]=fe,enumerable:!0})})}else t.exposed||(t.exposed={});b&&t.render===qn&&(t.render=b),L!=null&&(t.inheritAttrs=L),U&&(t.components=U),O&&(t.directives=O),M&&Du(t)}function c0(t,e,n=qn){Oe(t)&&(t=ec(t));for(const i in t){const r=t[i];let s;tt(r)?"default"in r?s=un(r.from||i,r.default,!0):s=un(r.from||i):s=un(r),Tt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Af(t,e,n){In(Oe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ap(t,e,n,i){let r=i.includes(".")?up(n,i):()=>n[i];if(gt(t)){const s=e[t];ke(s)&&mr(r,s)}else if(ke(t))mr(r,t.bind(n));else if(tt(t))if(Oe(t))t.forEach(s=>Ap(s,e,n,i));else{const s=ke(t.handler)?t.handler.bind(n):e[t.handler];ke(s)&&mr(r,s,t)}}function wp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>ca(l,c,o,!0)),ca(l,e,o)),tt(e)&&s.set(e,l),l}function ca(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&ca(t,s,n,!0),r&&r.forEach(o=>ca(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=u0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const u0={data:wf,props:Rf,emits:Rf,methods:Ps,computed:Ps,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:Ps,directives:Ps,watch:h0,provide:wf,inject:f0};function wf(t,e){return e?t?function(){return Rt(ke(t)?t.call(this,this):t,ke(e)?e.call(this,this):e)}:e:t}function f0(t,e){return Ps(ec(t),ec(e))}function ec(t){if(Oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ps(t,e){return t?Rt(Object.create(null),t,e):e}function Rf(t,e){return t?Oe(t)&&Oe(e)?[...new Set([...t,...e])]:Rt(Object.create(null),Tf(t),Tf(e??{})):e}function h0(t,e){if(!t)return e;if(!e)return t;const n=Rt(Object.create(null),t);for(const i in e)n[i]=Vt(t[i],e[i]);return n}function Rp(){return{app:null,config:{isNativeTag:Ld,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let d0=0;function p0(t,e){return function(i,r=null){ke(i)||(i=Rt({},i)),r!=null&&!tt(r)&&(r=null);const s=Rp(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:d0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:j0,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ke(u.install)?(o.add(u),u.install(c,...f)):ke(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||yt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,u):t(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Fu(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(In(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=gr;gr=c;try{return u()}finally{gr=f}}};return c}}let gr=null;const m0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Xt(e)}Modifiers`]||t[`${yr(e)}Modifiers`];function g0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||mt;let r=n;const s=e.startsWith("update:"),o=s&&m0(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>gt(u)?u.trim():u)),o.number&&(r=n.map($g)));let a,l=i[a=qa(e)]||i[a=qa(Xt(e))];!l&&s&&(l=i[a=qa(yr(e))]),l&&In(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,In(c,t,6,r)}}const _0=new WeakMap;function Cp(t,e,n=!1){const i=n?_0:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!ke(t)){const l=c=>{const u=Cp(c,e,!0);u&&(a=!0,Rt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(tt(t)&&i.set(t,null),null):(Oe(s)?s.forEach(l=>o[l]=null):Rt(o,s),tt(t)&&i.set(t,o),o)}function Da(t,e){return!t||!eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(t,e[0].toLowerCase()+e.slice(1))||rt(t,yr(e))||rt(t,e))}function el(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:m,inheritAttrs:_}=t,g=aa(t);let p,S;try{if(n.shapeFlag&4){const y=r||i,b=y;p=an(c.call(b,y,u,f,d,h,m)),S=a}else{const y=e;p=an(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),S=e.props?a:x0(a)}}catch(y){Bs.length=0,fs(y,t,1),p=yt(wt)}let v=p;if(S&&_!==!1){const y=Object.keys(S),{shapeFlag:b}=v;y.length&&b&7&&(s&&y.some(Sa)&&(S=y0(S,s)),v=Zn(v,S,!1,!0))}return n.dirs&&(v=Zn(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&Qr(v,n.transition),p=v,aa(g),p}function v0(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(ts(r)){if(r.type!==wt||r.children==="v-if"){if(n)return;n=r}}else return}return n}const x0=t=>{let e;for(const n in t)(n==="class"||n==="style"||eo(n))&&((e||(e={}))[n]=t[n]);return e},y0=(t,e)=>{const n={};for(const i in t)(!Sa(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function S0(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Cf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Pp(o,i,h)&&!Da(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Cf(i,o,c):!0:!!o;return!1}function Cf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Pp(e,t,s)&&!Da(n,s))return!0}return!1}function Pp(t,e,n){const i=t[n],r=e[n];return n==="style"&&tt(i)&&tt(r)?!yu(i,r):i!==r}function La({vnode:t,parent:e,suspense:n},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=i,t=r),r===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const Dp={},Lp=()=>Object.create(Dp),Ip=t=>Object.getPrototypeOf(t)===Dp;function M0(t,e,n,i=!1){const r={},s=Lp();t.propsDefaults=Object.create(null),Np(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Gn(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function E0(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=Je(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Da(t.emitsOptions,h))continue;const d=e[h];if(l)if(rt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const m=Xt(h);r[m]=tc(l,a,m,d,t,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Np(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!rt(e,f)&&((u=yr(f))===f||!rt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=tc(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!rt(e,f))&&(delete s[f],c=!0)}c&&fi(t.attrs,"set","")}function Np(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(hr(l))continue;const c=e[l];let u;r&&rt(r,u=Xt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Da(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Je(n),c=a||mt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=tc(r,l,f,c[f],t,!rt(c,f))}}return o}function tc(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=so(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===yr(n))&&(i=!0))}return i}const b0=new WeakMap;function Up(t,e,n=!1){const i=n?b0:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!ke(t)){const u=f=>{l=!0;const[h,d]=Up(f,e,!0);Rt(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return tt(t)&&i.set(t,Wr),Wr;if(Oe(s))for(let u=0;u<s.length;u++){const f=Xt(s[u]);Pf(f)&&(o[f]=mt)}else if(s)for(const u in s){const f=Xt(u);if(Pf(f)){const h=s[u],d=o[f]=Oe(h)||ke(h)?{type:h}:Rt({},h),m=d.type;let _=!1,g=!0;if(Oe(m))for(let p=0;p<m.length;++p){const S=m[p],v=ke(S)&&S.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(g=!1)}else _=ke(m)&&m.name==="Boolean";d[0]=_,d[1]=g,(_||rt(d,"default"))&&a.push(f)}}const c=[o,a];return tt(t)&&i.set(t,c),c}function Pf(t){return t[0]!=="$"&&!hr(t)}const Lu=t=>t==="_"||t==="_ctx"||t==="$stable",Iu=t=>Oe(t)?t.map(an):[an(t)],T0=(t,e,n)=>{if(e._n)return e;const i=Ru((...r)=>Iu(e(...r)),n);return i._c=!1,i},Fp=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Lu(r))continue;const s=t[r];if(ke(s))e[r]=T0(r,s,i);else if(s!=null){const o=Iu(s);e[r]=()=>o}}},Op=(t,e)=>{const n=Iu(e);t.slots.default=()=>n},Bp=(t,e,n)=>{for(const i in e)(n||!Lu(i))&&(t[i]=e[i])},A0=(t,e,n)=>{const i=t.slots=Lp();if(t.vnode.shapeFlag&32){const r=e._;r?(Bp(i,e,n),n&&Od(i,"_",r,!0)):Fp(e,i)}else e&&Op(t,e)},w0=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=mt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Bp(r,e,n):(s=!e.$stable,Fp(e,r)),o=e}else e&&(Op(t,e),o={default:1});if(s)for(const a in r)!Lu(a)&&o[a]==null&&delete r[a]},bt=Xp;function R0(t){return kp(t)}function C0(t){return kp(t,Y_)}function kp(t,e){const n=Ta();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=qn,insertStaticContent:m}=t,_=(P,D,z,Z=null,te=null,C=null,he=void 0,oe=null,ae=!!D.dynamicChildren)=>{if(P===D)return;P&&!An(P,D)&&(Z=F(P),Ne(P,te,C,!0),P=null),D.patchFlag===-2&&(ae=!1,D.dynamicChildren=null);const{type:q,ref:R,shapeFlag:x}=D;switch(q){case _r:g(P,D,z,Z);break;case wt:p(P,D,z,Z);break;case Os:P==null&&S(D,z,Z,he);break;case on:U(P,D,z,Z,te,C,he,oe,ae);break;default:x&1?b(P,D,z,Z,te,C,he,oe,ae):x&6?O(P,D,z,Z,te,C,he,oe,ae):(x&64||x&128)&&q.process(P,D,z,Z,te,C,he,oe,ae,re)}R!=null&&te?$r(R,P&&P.ref,C,D||P,!D):R==null&&P&&P.ref!=null&&$r(P.ref,null,C,P,!0)},g=(P,D,z,Z)=>{if(P==null)i(D.el=a(D.children),z,Z);else{const te=D.el=P.el;D.children!==P.children&&c(te,D.children)}},p=(P,D,z,Z)=>{P==null?i(D.el=l(D.children||""),z,Z):D.el=P.el},S=(P,D,z,Z)=>{[P.el,P.anchor]=m(P.children,D,z,Z,P.el,P.anchor)},v=({el:P,anchor:D},z,Z)=>{let te;for(;P&&P!==D;)te=h(P),i(P,z,Z),P=te;i(D,z,Z)},y=({el:P,anchor:D})=>{let z;for(;P&&P!==D;)z=h(P),r(P),P=z;r(D)},b=(P,D,z,Z,te,C,he,oe,ae)=>{if(D.type==="svg"?he="svg":D.type==="math"&&(he="mathml"),P==null)T(D,z,Z,te,C,he,oe,ae);else{const q=P.el&&P.el._isVueCE?P.el:null;try{q&&q._beginPatch(),M(P,D,te,C,he,oe,ae)}finally{q&&q._endPatch()}}},T=(P,D,z,Z,te,C,he,oe)=>{let ae,q;const{props:R,shapeFlag:x,transition:N,dirs:G}=P;if(ae=P.el=o(P.type,C,R&&R.is,R),x&8?u(ae,P.children):x&16&&I(P.children,ae,null,Z,te,tl(P,C),he,oe),G&&Bn(P,null,Z,"created"),w(ae,P,P.scopeId,he,Z),R){for(const j in R)j!=="value"&&!hr(j)&&s(ae,j,null,R[j],C,Z);"value"in R&&s(ae,"value",null,R.value,C),(q=R.onVnodeBeforeMount)&&Zt(q,Z,P)}G&&Bn(P,null,Z,"beforeMount");const ee=Hp(te,N);ee&&N.beforeEnter(ae),i(ae,D,z),((q=R&&R.onVnodeMounted)||ee||G)&&bt(()=>{q&&Zt(q,Z,P),ee&&N.enter(ae),G&&Bn(P,null,Z,"mounted")},te)},w=(P,D,z,Z,te)=>{if(z&&d(P,z),Z)for(let C=0;C<Z.length;C++)d(P,Z[C]);if(te){let C=te.subTree;if(D===C||fa(C.type)&&(C.ssContent===D||C.ssFallback===D)){const he=te.vnode;w(P,he,he.scopeId,he.slotScopeIds,te.parent)}}},I=(P,D,z,Z,te,C,he,oe,ae=0)=>{for(let q=ae;q<P.length;q++){const R=P[q]=oe?ui(P[q]):an(P[q]);_(null,R,D,z,Z,te,C,he,oe)}},M=(P,D,z,Z,te,C,he)=>{const oe=D.el=P.el;let{patchFlag:ae,dynamicChildren:q,dirs:R}=D;ae|=P.patchFlag&16;const x=P.props||mt,N=D.props||mt;let G;if(z&&$i(z,!1),(G=N.onVnodeBeforeUpdate)&&Zt(G,z,D,P),R&&Bn(D,P,z,"beforeUpdate"),z&&$i(z,!0),(x.innerHTML&&N.innerHTML==null||x.textContent&&N.textContent==null)&&u(oe,""),q?E(P.dynamicChildren,q,oe,z,Z,tl(D,te),C):he||W(P,D,oe,null,z,Z,tl(D,te),C,!1),ae>0){if(ae&16)L(oe,x,N,z,te);else if(ae&2&&x.class!==N.class&&s(oe,"class",null,N.class,te),ae&4&&s(oe,"style",x.style,N.style,te),ae&8){const ee=D.dynamicProps;for(let j=0;j<ee.length;j++){const ge=ee[j],ue=x[ge],xe=N[ge];(xe!==ue||ge==="value")&&s(oe,ge,ue,xe,te,z)}}ae&1&&P.children!==D.children&&u(oe,D.children)}else!he&&q==null&&L(oe,x,N,z,te);((G=N.onVnodeUpdated)||R)&&bt(()=>{G&&Zt(G,z,D,P),R&&Bn(D,P,z,"updated")},Z)},E=(P,D,z,Z,te,C,he)=>{for(let oe=0;oe<D.length;oe++){const ae=P[oe],q=D[oe],R=ae.el&&(ae.type===on||!An(ae,q)||ae.shapeFlag&198)?f(ae.el):z;_(ae,q,R,null,Z,te,C,he,!0)}},L=(P,D,z,Z,te)=>{if(D!==z){if(D!==mt)for(const C in D)!hr(C)&&!(C in z)&&s(P,C,D[C],null,te,Z);for(const C in z){if(hr(C))continue;const he=z[C],oe=D[C];he!==oe&&C!=="value"&&s(P,C,oe,he,te,Z)}"value"in z&&s(P,"value",D.value,z.value,te)}},U=(P,D,z,Z,te,C,he,oe,ae)=>{const q=D.el=P?P.el:a(""),R=D.anchor=P?P.anchor:a("");let{patchFlag:x,dynamicChildren:N,slotScopeIds:G}=D;G&&(oe=oe?oe.concat(G):G),P==null?(i(q,z,Z),i(R,z,Z),I(D.children||[],z,R,te,C,he,oe,ae)):x>0&&x&64&&N&&P.dynamicChildren&&P.dynamicChildren.length===N.length?(E(P.dynamicChildren,N,z,te,C,he,oe),(D.key!=null||te&&D===te.subTree)&&Nu(P,D,!0)):W(P,D,z,R,te,C,he,oe,ae)},O=(P,D,z,Z,te,C,he,oe,ae)=>{D.slotScopeIds=oe,P==null?D.shapeFlag&512?te.ctx.activate(D,z,Z,he,ae):Y(D,z,Z,te,C,he,ae):Q(P,D,ae)},Y=(P,D,z,Z,te,C,he)=>{const oe=P.component=z0(P,Z,te);if(io(P)&&(oe.ctx.renderer=re),G0(oe,!1,he),oe.asyncDep){if(te&&te.registerDep(oe,k,he),!P.el){const ae=oe.subTree=yt(wt);p(null,ae,D,z),P.placeholder=ae.el}}else k(oe,P,D,z,te,C,he)},Q=(P,D,z)=>{const Z=D.component=P.component;if(S0(P,D,z))if(Z.asyncDep&&!Z.asyncResolved){V(Z,D,z);return}else Z.next=D,Z.update();else D.el=P.el,Z.vnode=D},k=(P,D,z,Z,te,C,he)=>{const oe=()=>{if(P.isMounted){let{next:x,bu:N,u:G,parent:ee,vnode:j}=P;{const ce=Vp(P);if(ce){x&&(x.el=j.el,V(P,x,he)),ce.asyncDep.then(()=>{bt(()=>{P.isUnmounted||q()},te)});return}}let ge=x,ue;$i(P,!1),x?(x.el=j.el,V(P,x,he)):x=j,N&&Is(N),(ue=x.props&&x.props.onVnodeBeforeUpdate)&&Zt(ue,ee,x,j),$i(P,!0);const xe=el(P),Le=P.subTree;P.subTree=xe,_(Le,xe,f(Le.el),F(Le),P,te,C),x.el=xe.el,ge===null&&La(P,xe.el),G&&bt(G,te),(ue=x.props&&x.props.onVnodeUpdated)&&bt(()=>Zt(ue,ee,x,j),te)}else{let x;const{el:N,props:G}=D,{bm:ee,m:j,parent:ge,root:ue,type:xe}=P,Le=Hi(D);if($i(P,!1),ee&&Is(ee),!Le&&(x=G&&G.onVnodeBeforeMount)&&Zt(x,ge,D),$i(P,!0),N&&Ge){const ce=()=>{P.subTree=el(P),Ge(N,P.subTree,P,te,null)};Le&&xe.__asyncHydrate?xe.__asyncHydrate(N,P,ce):ce()}else{ue.ce&&ue.ce._hasShadowRoot()&&ue.ce._injectChildStyle(xe,P.parent?P.parent.type:void 0);const ce=P.subTree=el(P);_(null,ce,z,Z,P,te,C),D.el=ce.el}if(j&&bt(j,te),!Le&&(x=G&&G.onVnodeMounted)){const ce=D;bt(()=>Zt(x,ge,ce),te)}(D.shapeFlag&256||ge&&Hi(ge.vnode)&&ge.vnode.shapeFlag&256)&&P.a&&bt(P.a,te),P.isMounted=!0,D=z=Z=null}};P.scope.on();const ae=P.effect=new Wd(oe);P.scope.off();const q=P.update=ae.run.bind(ae),R=P.job=ae.runIfDirty.bind(ae);R.i=P,R.id=P.uid,ae.scheduler=()=>wu(R),$i(P,!0),q()},V=(P,D,z)=>{D.component=P;const Z=P.vnode.props;P.vnode=D,P.next=null,E0(P,D.props,Z,z),w0(P,D.children,z),gi(),mf(P),_i()},W=(P,D,z,Z,te,C,he,oe,ae=!1)=>{const q=P&&P.children,R=P?P.shapeFlag:0,x=D.children,{patchFlag:N,shapeFlag:G}=D;if(N>0){if(N&128){_e(q,x,z,Z,te,C,he,oe,ae);return}else if(N&256){fe(q,x,z,Z,te,C,he,oe,ae);return}}G&8?(R&16&&ie(q,te,C),x!==q&&u(z,x)):R&16?G&16?_e(q,x,z,Z,te,C,he,oe,ae):ie(q,te,C,!0):(R&8&&u(z,""),G&16&&I(x,z,Z,te,C,he,oe,ae))},fe=(P,D,z,Z,te,C,he,oe,ae)=>{P=P||Wr,D=D||Wr;const q=P.length,R=D.length,x=Math.min(q,R);let N;for(N=0;N<x;N++){const G=D[N]=ae?ui(D[N]):an(D[N]);_(P[N],G,z,null,te,C,he,oe,ae)}q>R?ie(P,te,C,!0,!1,x):I(D,z,Z,te,C,he,oe,ae,x)},_e=(P,D,z,Z,te,C,he,oe,ae)=>{let q=0;const R=D.length;let x=P.length-1,N=R-1;for(;q<=x&&q<=N;){const G=P[q],ee=D[q]=ae?ui(D[q]):an(D[q]);if(An(G,ee))_(G,ee,z,null,te,C,he,oe,ae);else break;q++}for(;q<=x&&q<=N;){const G=P[x],ee=D[N]=ae?ui(D[N]):an(D[N]);if(An(G,ee))_(G,ee,z,null,te,C,he,oe,ae);else break;x--,N--}if(q>x){if(q<=N){const G=N+1,ee=G<R?D[G].el:Z;for(;q<=N;)_(null,D[q]=ae?ui(D[q]):an(D[q]),z,ee,te,C,he,oe,ae),q++}}else if(q>N)for(;q<=x;)Ne(P[q],te,C,!0),q++;else{const G=q,ee=q,j=new Map;for(q=ee;q<=N;q++){const be=D[q]=ae?ui(D[q]):an(D[q]);be.key!=null&&j.set(be.key,q)}let ge,ue=0;const xe=N-ee+1;let Le=!1,ce=0;const ve=new Array(xe);for(q=0;q<xe;q++)ve[q]=0;for(q=G;q<=x;q++){const be=P[q];if(ue>=xe){Ne(be,te,C,!0);continue}let pe;if(be.key!=null)pe=j.get(be.key);else for(ge=ee;ge<=N;ge++)if(ve[ge-ee]===0&&An(be,D[ge])){pe=ge;break}pe===void 0?Ne(be,te,C,!0):(ve[pe-ee]=q+1,pe>=ce?ce=pe:Le=!0,_(be,D[pe],z,null,te,C,he,oe,ae),ue++)}const Pe=Le?P0(ve):Wr;for(ge=Pe.length-1,q=xe-1;q>=0;q--){const be=ee+q,pe=D[be],We=D[be+1],B=be+1<R?We.el||zp(We):Z;ve[q]===0?_(null,pe,z,B,te,C,he,oe,ae):Le&&(ge<0||q!==Pe[ge]?ye(pe,z,B,2):ge--)}}},ye=(P,D,z,Z,te=null)=>{const{el:C,type:he,transition:oe,children:ae,shapeFlag:q}=P;if(q&6){ye(P.component.subTree,D,z,Z);return}if(q&128){P.suspense.move(D,z,Z);return}if(q&64){he.move(P,D,z,re);return}if(he===on){i(C,D,z);for(let x=0;x<ae.length;x++)ye(ae[x],D,z,Z);i(P.anchor,D,z);return}if(he===Os){v(P,D,z);return}if(Z!==2&&q&1&&oe)if(Z===0)oe.beforeEnter(C),i(C,D,z),bt(()=>oe.enter(C),te);else{const{leave:x,delayLeave:N,afterLeave:G}=oe,ee=()=>{P.ctx.isUnmounted?r(C):i(C,D,z)},j=()=>{C._isLeaving&&C[kn](!0),x(C,()=>{ee(),G&&G()})};N?N(C,ee,j):j()}else i(C,D,z)},Ne=(P,D,z,Z=!1,te=!1)=>{const{type:C,props:he,ref:oe,children:ae,dynamicChildren:q,shapeFlag:R,patchFlag:x,dirs:N,cacheIndex:G,memo:ee}=P;if(x===-2&&(te=!1),oe!=null&&(gi(),$r(oe,null,z,P,!0),_i()),G!=null&&(D.renderCache[G]=void 0),R&256){D.ctx.deactivate(P);return}const j=R&1&&N,ge=!Hi(P);let ue;if(ge&&(ue=he&&he.onVnodeBeforeUnmount)&&Zt(ue,D,P),R&6)Ye(P.component,z,Z);else{if(R&128){P.suspense.unmount(z,Z);return}j&&Bn(P,null,D,"beforeUnmount"),R&64?P.type.remove(P,D,z,re,Z):q&&!q.hasOnce&&(C!==on||x>0&&x&64)?ie(q,D,z,!1,!0):(C===on&&x&384||!te&&R&16)&&ie(ae,D,z),Z&&He(P)}const xe=ee!=null&&G==null;(ge&&(ue=he&&he.onVnodeUnmounted)||j||xe)&&bt(()=>{ue&&Zt(ue,D,P),j&&Bn(P,null,D,"unmounted"),xe&&(P.el=null)},z)},He=P=>{const{type:D,el:z,anchor:Z,transition:te}=P;if(D===on){nt(z,Z);return}if(D===Os){y(P);return}const C=()=>{r(z),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(P.shapeFlag&1&&te&&!te.persisted){const{leave:he,delayLeave:oe}=te,ae=()=>he(z,C);oe?oe(P.el,C,ae):ae()}else C()},nt=(P,D)=>{let z;for(;P!==D;)z=h(P),r(P),P=z;r(D)},Ye=(P,D,z)=>{const{bum:Z,scope:te,job:C,subTree:he,um:oe,m:ae,a:q}=P;ua(ae),ua(q),Z&&Is(Z),te.stop(),C&&(C.flags|=8,Ne(he,P,D,z)),oe&&bt(oe,D),bt(()=>{P.isUnmounted=!0},D)},ie=(P,D,z,Z=!1,te=!1,C=0)=>{for(let he=C;he<P.length;he++)Ne(P[he],D,z,Z,te)},F=P=>{if(P.shapeFlag&6)return F(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const D=h(P.anchor||P.el),z=D&&D[fp];return z?h(z):D};let ne=!1;const se=(P,D,z)=>{let Z;P==null?D._vnode&&(Ne(D._vnode,null,null,!0),Z=D._vnode.component):_(D._vnode||null,P,D,null,null,null,z),D._vnode=P,ne||(ne=!0,mf(Z),oa(),ne=!1)},re={p:_,um:Ne,m:ye,r:He,mt:Y,mc:I,pc:W,pbc:E,n:F,o:t};let we,Ge;return e&&([we,Ge]=e(re)),{render:se,hydrate:we,createApp:p0(se,we)}}function tl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $i({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Hp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Nu(t,e,n=!1){const i=t.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ui(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Nu(o,a)),a.type===_r&&(a.patchFlag===-1&&(a=r[s]=ui(a)),a.el=o.el),a.type===wt&&!a.el&&(a.el=o.el)}}function P0(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Vp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vp(e)}function ua(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function zp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?zp(e.subTree):null}const fa=t=>t.__isSuspense;let nc=0;const D0={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,c){if(t==null)L0(e,n,i,r,s,o,a,l,c);else{if(s&&s.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}I0(t,e,n,i,r,o,a,l,c)}},hydrate:N0,normalize:U0},Gp=D0;function qs(t,e){const n=t.props&&t.props[e];ke(n)&&n()}function L0(t,e,n,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=t.suspense=Wp(t,r,i,e,f,n,s,o,a,l);c(null,h.pendingBranch=t.ssContent,f,null,i,h,s,o),h.deps>0?(qs(t,"onPending"),qs(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,o),jr(h,t.ssFallback)):h.resolve(!1,!0)}function I0(t,e,n,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:m,pendingBranch:_,isInFallback:g,isHydrating:p}=f;if(_)f.pendingBranch=h,An(_,h)?(l(_,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():g&&(p||(l(m,d,n,i,r,null,s,o,a),jr(f,d)))):(f.pendingId=nc++,p?(f.isHydrating=!1,f.activeBranch=_):c(_,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),g?(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(m,d,n,i,r,null,s,o,a),jr(f,d))):m&&An(m,h)?(l(m,h,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(m&&An(m,h))l(m,h,n,i,r,f,s,o,a),jr(f,h);else if(qs(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=nc++,l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:S,pendingId:v}=f;S>0?setTimeout(()=>{f.pendingId===v&&f.fallback(d)},S):S===0&&f.fallback(d)}}function Wp(t,e,n,i,r,s,o,a,l,c,u=!1){const{p:f,m:h,um:d,n:m,o:{parentNode:_,remove:g}}=c;let p;const S=F0(t);S&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const v=t.props?Bd(t.props.timeout):void 0,y=s,b={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:nc++,timeout:typeof v=="number"?v:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(T=!1,w=!1){const{vnode:I,activeBranch:M,pendingBranch:E,pendingId:L,effects:U,parentComponent:O,container:Y,isInFallback:Q}=b;let k=!1;b.isHydrating?b.isHydrating=!1:T||(k=M&&E.transition&&E.transition.mode==="out-in",k&&(M.transition.afterLeave=()=>{L===b.pendingId&&(h(E,Y,s===y?m(M):s,0),jl(U),Q&&I.ssFallback&&(I.ssFallback.el=null))}),M&&!b.isFallbackMountPending&&(_(M.el)===Y&&(s=m(M)),d(M,O,b,!0),!k&&Q&&I.ssFallback&&bt(()=>I.ssFallback.el=null,b)),k||h(E,Y,s,0)),b.isFallbackMountPending=!1,jr(b,E),b.pendingBranch=null,b.isInFallback=!1;let V=b.parent,W=!1;for(;V;){if(V.pendingBranch){V.effects.push(...U),W=!0;break}V=V.parent}!W&&!k&&jl(U),b.effects=[],S&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!w&&e.resolve()),qs(I,"onResolve")},fallback(T){if(!b.pendingBranch)return;const{vnode:w,activeBranch:I,parentComponent:M,container:E,namespace:L}=b;qs(w,"onFallback");const U=m(I),O=()=>{b.isFallbackMountPending=!1,b.isInFallback&&(f(null,T,E,U,M,null,L,a,l),jr(b,T))},Y=T.transition&&T.transition.mode==="out-in";Y&&(b.isFallbackMountPending=!0,I.transition.afterLeave=O),b.isInFallback=!0,d(I,M,null,!0),Y||O()},move(T,w,I){b.activeBranch&&h(b.activeBranch,T,w,I),b.container=T},next(){return b.activeBranch&&m(b.activeBranch)},registerDep(T,w,I){const M=!!b.pendingBranch;M&&b.deps++;const E=T.vnode.el;T.asyncDep.catch(L=>{fs(L,T,0)}).then(L=>{if(T.isUnmounted||b.isUnmounted||b.pendingId!==T.suspenseId)return;rc(),T.asyncResolved=!0;const{vnode:U}=T;sc(T,L),E&&(U.el=E);const O=!E&&T.subTree.el;w(T,U,_(E||T.subTree.el),E?null:m(T.subTree),b,o,I),O&&(U.placeholder=null,g(O)),La(T,U.el),M&&--b.deps===0&&b.resolve()})},unmount(T,w){b.isUnmounted=!0,b.activeBranch&&d(b.activeBranch,n,T,w),b.pendingBranch&&d(b.pendingBranch,n,T,w)}};return b}function N0(t,e,n,i,r,s,o,a,l){const c=e.suspense=Wp(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function U0(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=Df(i?n.default:n),t.ssFallback=i?Df(n.fallback):yt(wt)}function Df(t){let e;if(ke(t)){const n=es&&t._c;n&&(t._d=!1,_n()),t=t(),n&&(t._d=!0,e=Jt,qp())}return Oe(t)&&(t=v0(t)),t=an(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Xp(t,e){e&&e.pendingBranch?Oe(t)?e.effects.push(...t):e.effects.push(t):jl(t)}function jr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,La(i,r))}function F0(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const on=Symbol.for("v-fgt"),_r=Symbol.for("v-txt"),wt=Symbol.for("v-cmt"),Os=Symbol.for("v-stc"),Bs=[];let Jt=null;function _n(t=!1){Bs.push(Jt=t?null:[])}function qp(){Bs.pop(),Jt=Bs[Bs.length-1]||null}let es=1;function ha(t,e=!1){es+=t,t<0&&Jt&&e&&(Jt.hasOnce=!0)}function $p(t){return t.dynamicChildren=es>0?Jt||Wr:null,qp(),es>0&&Jt&&Jt.push(t),t}function Ia(t,e,n,i,r,s){return $p(Yp(t,e,n,i,r,s,!0))}function Fi(t,e,n,i,r){return $p(yt(t,e,n,i,r,!0))}function ts(t){return t?t.__v_isVNode===!0:!1}function An(t,e){return t.type===e.type&&t.key===e.key}const jp=({key:t})=>t??null,jo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?gt(t)||Tt(t)||ke(t)?{i:Cn,r:t,k:e,f:!!n}:t:null);function Yp(t,e=null,n=null,i=0,r=null,s=t===on?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jp(e),ref:e&&jo(e),scopeId:cp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Cn};return a?(Uu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=gt(n)?8:16),es>0&&!o&&Jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Jt.push(l),l}const yt=O0;function O0(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===bp)&&(t=wt),ts(t)){const a=Zn(t,e,!0);return n&&Uu(a,n),es>0&&!s&&Jt&&(a.shapeFlag&6?Jt[Jt.indexOf(t)]=a:Jt.push(a)),a.patchFlag=-2,a}if($0(t)&&(t=t.__vccOpts),e){e=Kp(e);let{class:a,style:l}=e;a&&!gt(a)&&(e.class=to(a)),tt(l)&&(Ra(l)&&!Oe(l)&&(l=Rt({},l)),e.style=Aa(l))}const o=gt(t)?1:fa(t)?128:hp(t)?64:tt(t)?4:ke(t)?2:0;return Yp(t,e,n,i,r,o,s,!0)}function Kp(t){return t?Ra(t)||Ip(t)?Rt({},t):t:null}function Zn(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?k0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&jp(c),ref:e&&e.ref?n&&s?Oe(s)?s.concat(jo(e)):[s,jo(e)]:jo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==on?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zn(t.ssContent),ssFallback:t.ssFallback&&Zn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Qr(u,l.clone(u)),u}function Zp(t=" ",e=0){return yt(_r,null,t,e)}function oC(t,e){const n=yt(Os,null,t);return n.staticCount=e,n}function B0(t="",e=!1){return e?(_n(),Fi(wt,null,t)):yt(wt,null,t)}function an(t){return t==null||typeof t=="boolean"?yt(wt):Oe(t)?yt(on,null,t.slice()):ts(t)?ui(t):yt(_r,null,String(t))}function ui(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zn(t)}function Uu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Oe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Uu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Ip(e)?e._ctx=Cn:r===3&&Cn&&(Cn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:Cn},n=32):(e=String(e),i&64?(n=16,e=[Zp(e)]):n=8);t.children=e,t.shapeFlag|=n}function k0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=to([e.class,i.class]));else if(r==="style")e.style=Aa([e.style,i.style]);else if(eo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Oe(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!Sa(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Zt(t,e,n,i=null){In(t,e,7,[n,i])}const H0=Rp();let V0=0;function z0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||H0,s={uid:V0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Up(i,r),emitsOptions:Cp(i,r),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:i.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=g0.bind(null,s),t.ce&&t.ce(s),s}let Lt=null;const Mr=()=>Lt||Cn;let da,ic;{const t=Ta(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};da=e("__VUE_INSTANCE_SETTERS__",n=>Lt=n),ic=e("__VUE_SSR_SETTERS__",n=>ns=n)}const so=t=>{const e=Lt;return da(t),t.scope.on(),()=>{t.scope.off(),da(e)}},rc=()=>{Lt&&Lt.scope.off(),da(null)};function Jp(t){return t.vnode.shapeFlag&4}let ns=!1;function G0(t,e=!1,n=!1){e&&ic(e);const{props:i,children:r}=t.vnode,s=Jp(t);M0(t,i,s,e),A0(t,r,n||e);const o=s?W0(t,e):void 0;return e&&ic(!1),o}function W0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,a0);const{setup:i}=n;if(i){gi();const r=t.setupContext=i.length>1?q0(t):null,s=so(t),o=no(i,t,0,[t.props,r]),a=Nd(o);if(_i(),s(),(a||t.sp)&&!Hi(t)&&Du(t),a){if(o.then(rc,rc),e)return o.then(l=>{sc(t,l)}).catch(l=>{fs(l,t,0)});t.asyncDep=o}else sc(t,o)}else Qp(t)}function sc(t,e,n){ke(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:tt(e)&&(t.setupState=sp(e)),Qp(t)}function Qp(t,e,n){const i=t.type;t.render||(t.render=i.render||qn);{const r=so(t);gi();try{l0(t)}finally{_i(),r()}}}const X0={get(t,e){return Ot(t,"get",""),t[e]}};function q0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,X0),slots:t.slots,emit:t.emit,expose:e}}function Fu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(sp(E_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fs)return Fs[n](t)},has(e,n){return n in e||n in Fs}})):t.proxy}function oc(t,e=!0){return ke(t)?t.displayName||t.name:t.name||e&&t.__name}function $0(t){return ke(t)&&"__vccOpts"in t}const wn=(t,e)=>L_(t,e,ns);function ln(t,e,n){try{ha(-1);const i=arguments.length;return i===2?tt(e)&&!Oe(e)?ts(e)?yt(t,null,[e]):yt(t,e):yt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ts(n)&&(n=[n]),yt(t,e,n))}finally{ha(1)}}const j0="3.5.32";let ac;const Lf=typeof window<"u"&&window.trustedTypes;if(Lf)try{ac=Lf.createPolicy("vue",{createHTML:t=>t})}catch{}const em=ac?t=>ac.createHTML(t):t=>t,Y0="http://www.w3.org/2000/svg",K0="http://www.w3.org/1998/Math/MathML",ci=typeof document<"u"?document:null,If=ci&&ci.createElement("template"),Z0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ci.createElementNS(Y0,t):e==="mathml"?ci.createElementNS(K0,t):n?ci.createElement(t,{is:n}):ci.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ci.createTextNode(t),createComment:t=>ci.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ci.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{If.innerHTML=em(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=If.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bi="transition",vs="animation",$s=Symbol("_vtc"),tm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},J0=Rt({},dp,tm),Q0=t=>(t.displayName="Transition",t.props=J0,t),ev=Q0((t,{slots:e})=>ln(q_,tv(t),e)),ji=(t,e=[])=>{Oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Nf=t=>t?Oe(t)?t.some(e=>e.length>1):t.length>1:!1;function tv(t){const e={};for(const U in t)U in tm||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,m=nv(r),_=m&&m[0],g=m&&m[1],{onBeforeEnter:p,onEnter:S,onEnterCancelled:v,onLeave:y,onLeaveCancelled:b,onBeforeAppear:T=p,onAppear:w=S,onAppearCancelled:I=v}=e,M=(U,O,Y,Q)=>{U._enterCancelled=Q,Yi(U,O?u:a),Yi(U,O?c:o),Y&&Y()},E=(U,O)=>{U._isLeaving=!1,Yi(U,f),Yi(U,d),Yi(U,h),O&&O()},L=U=>(O,Y)=>{const Q=U?w:S,k=()=>M(O,U,Y);ji(Q,[O,k]),Uf(()=>{Yi(O,U?l:s),ni(O,U?u:a),Nf(Q)||Ff(O,i,_,k)})};return Rt(e,{onBeforeEnter(U){ji(p,[U]),ni(U,s),ni(U,o)},onBeforeAppear(U){ji(T,[U]),ni(U,l),ni(U,c)},onEnter:L(!1),onAppear:L(!0),onLeave(U,O){U._isLeaving=!0;const Y=()=>E(U,O);ni(U,f),U._enterCancelled?(ni(U,h),kf(U)):(kf(U),ni(U,h)),Uf(()=>{U._isLeaving&&(Yi(U,f),ni(U,d),Nf(y)||Ff(U,i,g,Y))}),ji(y,[U,Y])},onEnterCancelled(U){M(U,!1,void 0,!0),ji(v,[U])},onAppearCancelled(U){M(U,!0,void 0,!0),ji(I,[U])},onLeaveCancelled(U){E(U),ji(b,[U])}})}function nv(t){if(t==null)return null;if(tt(t))return[nl(t.enter),nl(t.leave)];{const e=nl(t);return[e,e]}}function nl(t){return Bd(t)}function ni(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[$s]||(t[$s]=new Set)).add(e)}function Yi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[$s];n&&(n.delete(e),n.size||(t[$s]=void 0))}function Uf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let iv=0;function Ff(t,e,n,i){const r=t._endId=++iv,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=rv(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),s()},h=d=>{d.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function rv(t,e){const n=window.getComputedStyle(t),i=m=>(n[m]||"").split(", "),r=i(`${bi}Delay`),s=i(`${bi}Duration`),o=Of(r,s),a=i(`${vs}Delay`),l=i(`${vs}Duration`),c=Of(a,l);let u=null,f=0,h=0;e===bi?o>0&&(u=bi,f=o,h=s.length):e===vs?c>0&&(u=vs,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?bi:vs:null,h=u?u===bi?s.length:l.length:0);const d=u===bi&&/\b(?:transform|all)(?:,|$)/.test(i(`${bi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Of(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Bf(n)+Bf(t[i])))}function Bf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function kf(t){return(t?t.ownerDocument:document).body.offsetHeight}function sv(t,e,n){const i=t[$s];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Hf=Symbol("_vod"),ov=Symbol("_vsh"),av=Symbol(""),lv=/(?:^|;)\s*display\s*:/;function cv(t,e,n){const i=t.style,r=gt(n);let s=!1;if(n&&!r){if(e)if(gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Yo(i,a,"")}else for(const o in e)n[o]==null&&Yo(i,o,"");for(const o in n)o==="display"&&(s=!0),Yo(i,o,n[o])}else if(r){if(e!==n){const o=i[av];o&&(n+=";"+o),i.cssText=n,s=lv.test(n)}}else e&&t.removeAttribute("style");Hf in t&&(t[Hf]=s?i.display:"",t[ov]&&(i.display="none"))}const Vf=/\s*!important$/;function Yo(t,e,n){if(Oe(n))n.forEach(i=>Yo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=uv(t,e);Vf.test(n)?t.setProperty(yr(i),n.replace(Vf,""),"important"):t[i]=n}}const zf=["Webkit","Moz","ms"],il={};function uv(t,e){const n=il[e];if(n)return n;let i=Xt(e);if(i!=="filter"&&i in t)return il[e]=i;i=ba(i);for(let r=0;r<zf.length;r++){const s=zf[r]+i;if(s in t)return il[e]=s}return e}const Gf="http://www.w3.org/1999/xlink";function Wf(t,e,n,i,r,s=e_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gf,e.slice(6,e.length)):t.setAttributeNS(Gf,e,n):n==null||s&&!kd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Sn(n)?String(n):n)}function Xf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?em(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=kd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function fv(t,e,n,i){t.addEventListener(e,n,i)}function hv(t,e,n,i){t.removeEventListener(e,n,i)}const qf=Symbol("_vei");function dv(t,e,n,i,r=null){const s=t[qf]||(t[qf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=pv(e);if(i){const c=s[e]=_v(i,r);fv(t,a,c,l)}else o&&(hv(t,a,o,l),s[e]=void 0)}}const $f=/(?:Once|Passive|Capture)$/;function pv(t){let e;if($f.test(t)){e={};let i;for(;i=t.match($f);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):yr(t.slice(2)),e]}let rl=0;const mv=Promise.resolve(),gv=()=>rl||(mv.then(()=>rl=0),rl=Date.now());function _v(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;In(vv(i,n.value),e,5,[i])};return n.value=t,n.attached=gv(),n}function vv(t,e){if(Oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const jf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xv=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?sv(t,i,o):e==="style"?cv(t,n,i):eo(e)?Sa(e)||dv(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yv(t,e,i,o))?(Xf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wf(t,e,i,o,s,e!=="value")):t._isVueCE&&(Sv(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!gt(i)))?Xf(t,Xt(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Wf(t,e,i,o))};function yv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&jf(e)&&ke(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return jf(e)&&gt(n)?!1:e in t}function Sv(t,e){const n=t._def.props;if(!n)return!1;const i=Xt(e);return Array.isArray(n)?n.some(r=>Xt(r)===i):Object.keys(n).some(r=>Xt(r)===i)}const Mv=["ctrl","shift","alt","meta"],Ev={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Mv.some(n=>t[`${n}Key`]&&!e.includes(n))},aC=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=Ev[e[o]];if(a&&a(r,e))return}return t(r,...s)}))},nm=Rt({patchProp:xv},Z0);let ks,Yf=!1;function bv(){return ks||(ks=R0(nm))}function Tv(){return ks=Yf?ks:C0(nm),Yf=!0,ks}const Av=((...t)=>{const e=bv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=rm(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,im(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e}),wv=((...t)=>{const e=Tv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=rm(i);if(r)return n(r,!0,im(r))},e});function im(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rm(t){return gt(t)?document.querySelector(t):t}const Rv=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Cv=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Pv=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Dv(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){Lv(t);return}return e}function Lv(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Iv(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!Pv.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(Rv.test(t)||Cv.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,Dv)}return JSON.parse(t)}catch(i){if(e.strict)throw i;return t}}const sm=/#/g,om=/&/g,Nv=/\//g,Uv=/=/g,Fv=/\?/g,Na=/\+/g,Ov=/%5e/gi,Bv=/%60/gi,kv=/%7c/gi,Hv=/%20/gi,Vv=/%2f/gi,zv=/%252f/gi;function am(t){return encodeURI(""+t).replace(kv,"|")}function lc(t){return am(typeof t=="string"?t:JSON.stringify(t)).replace(Na,"%2B").replace(Hv,"+").replace(sm,"%23").replace(om,"%26").replace(Bv,"`").replace(Ov,"^").replace(Nv,"%2F")}function sl(t){return lc(t).replace(Uv,"%3D")}function Gv(t){return am(t).replace(sm,"%23").replace(Fv,"%3F").replace(zv,"%2F").replace(om,"%26").replace(Na,"%2B")}function js(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function Wv(t){return js(t.replace(Vv,"%252F"))}function Xv(t){return js(t.replace(Na," "))}function qv(t){return js(t.replace(Na," "))}function lm(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=Xv(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=qv(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function $v(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${sl(t)}=${lc(n)}`).join("&"):`${sl(t)}=${lc(e)}`:sl(t)}function jv(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>$v(e,t[e])).filter(Boolean).join("&")}const Yv=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Kv=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,Zv=/^([/\\]\s*){2,}[^/\\]/,Jv=/^[\s\0]*(blob|data|javascript|vbscript):$/i,Qv=/\/$|\/\?|\/#/,ex=/^\.?\//;function hs(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?Yv.test(t):Kv.test(t)||(e.acceptRelative?Zv.test(t):!1)}function tx(t){return!!t&&Jv.test(t)}function cc(t="",e){return e?Qv.test(t):t.endsWith("/")}function pa(t="",e){if(!e)return(cc(t)?t.slice(0,-1):t)||"/";if(!cc(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");r!==-1&&(n=t.slice(0,r),i=t.slice(r));const[s,...o]=n.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function nx(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(cc(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");if(r!==-1&&(n=t.slice(0,r),i=t.slice(r),!n))return i;const[s,...o]=n.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function ix(t,e){if(um(e)||hs(t))return t;const n=pa(e);if(t.startsWith(n)){const i=t[n.length];if(!i||i==="/"||i==="?")return t}return fm(n,t)}function Kf(t,e){if(um(e))return t;const n=pa(e);if(!t.startsWith(n))return t;const i=t[n.length];if(i&&i!=="/"&&i!=="?")return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function cm(t,e){const n=Ou(t),i={...lm(n.search),...e};return n.search=jv(i),sx(n)}function um(t){return!t||t==="/"}function rx(t){return t&&t!=="/"}function fm(t,...e){let n=t||"";for(const i of e.filter(r=>rx(r)))if(n){const r=i.replace(ex,"");n=nx(n)+r}else n=i;return n}function hm(...t){const e=/\/(?!\/)/,n=t.filter(Boolean),i=[];let r=0;for(const o of n)if(!(!o||o==="/")){for(const[a,l]of o.split(e).entries())if(!(!l||l===".")){if(l===".."){if(i.length===1&&hs(i[0]))continue;i.pop(),r--;continue}if(a===1&&i[i.length-1]?.endsWith(":/")){i[i.length-1]+="/"+l;continue}i.push(l),r++}}let s=i.join("/");return r>=0?n[0]?.startsWith("/")&&!s.startsWith("/")?s="/"+s:n[0]?.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,n[n.length-1]?.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function dm(t,e){return js(pa(t))===js(pa(e))}const pm=Symbol.for("ufo:protocolRelative");function Ou(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,h=""]=n;return{protocol:f.toLowerCase(),pathname:h,href:f+h,auth:"",host:"",search:"",hash:""}}if(!hs(t,{acceptRelative:!0}))return Zf(t);const[,i="",r,s=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:c,hash:u}=Zf(a);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:c,hash:u,[pm]:!i}}function Zf(t=""){const[e="",n="",i=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:i}}function sx(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",i=t.hash||"",r=t.auth?t.auth+"@":"",s=t.host||"";return(t.protocol||t[pm]?(t.protocol||"")+"//":"")+r+s+e+n+i}class ox extends Error{constructor(e,n){super(e,n),this.name="FetchError",n?.cause&&!this.cause&&(this.cause=n.cause)}}function ax(t){const e=t.error?.message||t.error?.toString()||"",n=t.request?.method||t.options?.method||"GET",i=t.request?.url||String(t.request)||"/",r=`[${n}] ${JSON.stringify(i)}`,s=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${r}: ${s}${e?` ${e}`:""}`,a=new ox(o,t.error?{cause:t.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(a,l,{get(){return t[l]}});for(const[l,c]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,l,{get(){return t.response&&t.response[c]}});return a}const lx=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Jf(t="GET"){return lx.has(t.toUpperCase())}function cx(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer||t instanceof FormData||t instanceof URLSearchParams?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const ux=new Set(["image/svg","application/xml","application/xhtml","application/html"]),fx=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function hx(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return fx.test(e)?"json":e==="text/event-stream"?"stream":ux.has(e)||e.startsWith("text/")?"text":"blob"}function dx(t,e,n,i){const r=px(e?.headers??t?.headers,n?.headers,i);let s;return(n?.query||n?.params||e?.params||e?.query)&&(s={...n?.params,...n?.query,...e?.params,...e?.query}),{...n,...e,query:s,params:s,headers:r}}function px(t,e,n){if(!e)return new n(t);const i=new n(e);if(t)for(const[r,s]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))i.set(r,s);return i}async function Mo(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const mx=new Set([408,409,425,429,500,502,503,504]),gx=new Set([101,204,205,304]);function mm(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:i=globalThis.AbortController}=t;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let u;typeof a.options.retry=="number"?u=a.options.retry:u=Jf(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):mx.has(f))){const h=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return h>0&&await new Promise(d=>setTimeout(d,h)),s(a.request,{...a.options,retry:u-1})}}const c=ax(a);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(l,c={}){const u={request:l,options:dx(l,c,t.defaults,n),response:void 0,error:void 0};if(u.options.method&&(u.options.method=u.options.method.toUpperCase()),u.options.onRequest&&(await Mo(u,u.options.onRequest),u.options.headers instanceof n||(u.options.headers=new n(u.options.headers||{}))),typeof u.request=="string"&&(u.options.baseURL&&(u.request=ix(u.request,u.options.baseURL)),u.options.query&&(u.request=cm(u.request,u.options.query),delete u.options.query),"query"in u.options&&delete u.options.query,"params"in u.options&&delete u.options.params),u.options.body&&Jf(u.options.method))if(cx(u.options.body)){const d=u.options.headers.get("content-type");typeof u.options.body!="string"&&(u.options.body=d==="application/x-www-form-urlencoded"?new URLSearchParams(u.options.body).toString():JSON.stringify(u.options.body)),d||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")}else("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half"));let f;if(!u.options.signal&&u.options.timeout){const d=new i;f=setTimeout(()=>{const m=new Error("[TimeoutError]: The operation was aborted due to timeout");m.name="TimeoutError",m.code=23,d.abort(m)},u.options.timeout),u.options.signal=d.signal}try{u.response=await e(u.request,u.options)}catch(d){return u.error=d,u.options.onRequestError&&await Mo(u,u.options.onRequestError),await r(u)}finally{f&&clearTimeout(f)}if((u.response.body||u.response._bodyInit)&&!gx.has(u.response.status)&&u.options.method!=="HEAD"){const d=(u.options.parseResponse?"json":u.options.responseType)||hx(u.response.headers.get("content-type")||"");switch(d){case"json":{const m=await u.response.text(),_=u.options.parseResponse||Iv;u.response._data=_(m);break}case"stream":{u.response._data=u.response.body||u.response._bodyInit;break}default:u.response._data=await u.response[d]()}}return u.options.onResponse&&await Mo(u,u.options.onResponse),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await Mo(u,u.options.onResponseError),await r(u)):u.response},o=async function(l,c){return(await s(l,c))._data};return o.raw=s,o.native=(...a)=>e(...a),o.create=(a={},l={})=>mm({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const ma=(function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")})(),_x=ma.fetch?(...t)=>ma.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),vx=ma.Headers,xx=ma.AbortController,yx=mm({fetch:_x,Headers:vx,AbortController:xx}),Sx=yx,Mx=()=>window?.__NUXT__?.config||window?.useNuxtApp?.().payload?.config,Bu=()=>Mx().app,Ex=()=>Bu().baseURL,bx=()=>Bu().buildAssetsDir,ku=(...t)=>hm(gm(),bx(),...t),gm=(...t)=>{const e=Bu(),n=e.cdnURL||e.baseURL;return t.length?hm(n,...t):n};globalThis.__buildAssetsURL=ku,globalThis.__publicAssetsURL=gm;globalThis.$fetch||(globalThis.$fetch=Sx.create({baseURL:Ex()}));"global"in globalThis||(globalThis.global=globalThis);function uc(t,e={},n){for(const i in t){const r=t[i],s=n?`${n}:${i}`:i;typeof r=="object"&&r!==null?uc(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const _m=(()=>{if(console.createTask)return console.createTask;const t={run:e=>e()};return()=>t})();function vm(t,e,n,i){for(let r=n;r<t.length;r+=1)try{const s=i?i.run(()=>t[r](...e)):t[r](...e);if(s instanceof Promise)return s.then(()=>vm(t,e,r+1,i))}catch(s){return Promise.reject(s)}}function Tx(t,e,n){if(t.length>0)return vm(t,e,0,_m(n))}function Ax(t,e,n){if(t.length>0){const i=_m(n);return Promise.all(t.map(r=>i.run(()=>r(...e))))}}function ol(t,e){for(const n of[...t])n(e)}var wx=class{_hooks;_before;_after;_deprecatedHooks;_deprecatedMessages;constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,e,n={}){if(!t||typeof e!="function")return()=>{};const i=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!n.allowDeprecated){let s=r.message;s||(s=`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(s)||(console.warn(s),this._deprecatedMessages.add(s))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(e),()=>{e&&(this.removeHook(t,e),e=void 0)}}hookOnce(t,e){let n,i=(...r)=>(typeof n=="function"&&n(),n=void 0,i=void 0,e(...r));return n=this.hook(t,i),n}removeHook(t,e){const n=this._hooks[t];if(n){const i=n.indexOf(e);i!==-1&&n.splice(i,1),n.length===0&&(this._hooks[t]=void 0)}}clearHook(t){this._hooks[t]=void 0}deprecateHook(t,e){this._deprecatedHooks[t]=typeof e=="string"?{to:e}:e;const n=this._hooks[t]||[];this._hooks[t]=void 0;for(const i of n)this.hook(t,i)}deprecateHooks(t){for(const e in t)this.deprecateHook(e,t[e])}addHooks(t){const e=uc(t),n=Object.keys(e).map(i=>this.hook(i,e[i]));return()=>{for(const i of n)i();n.length=0}}removeHooks(t){const e=uc(t);for(const n in e)this.removeHook(n,e[n])}removeAllHooks(){this._hooks={}}callHook(t,...e){return this.callHookWith(Tx,t,e)}callHookParallel(t,...e){return this.callHookWith(Ax,t,e)}callHookWith(t,e,n){const i=this._before||this._after?{name:e,args:n,context:{}}:void 0;this._before&&ol(this._before,i);const r=t(this._hooks[e]?[...this._hooks[e]]:[],n,e);return r instanceof Promise?r.finally(()=>{this._after&&i&&ol(this._after,i)}):(this._after&&i&&ol(this._after,i),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const e=this._before.indexOf(t);e!==-1&&this._before.splice(e,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const e=this._after.indexOf(t);e!==-1&&this._after.splice(e,1)}}}};function xm(){return new wx}function Rx(t={}){let e,n=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;fc.add(c);try{const u=r?r.run(o,a):a();return n||(e=void 0),await u}finally{fc.delete(c)}}}}function Cx(t={}){const e={};return{get(n,i={}){return e[n]||(e[n]=Rx({...t,...i})),e[n]}}}const ga=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Qf="__unctx__",Px=ga[Qf]||(ga[Qf]=Cx()),Dx=(t,e={})=>Px.get(t,e),eh="__unctx_async_handlers__",fc=ga[eh]||(ga[eh]=new Set);function Hs(t){const e=[];for(const r of fc){const s=r();s&&e.push(s)}const n=()=>{for(const r of e)r()};let i=t();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw n(),r})),[i,n]}const th=!1,Lx=!1,nh={id:"__nuxt-loader"},lC={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},Ix="#__nuxt",ym="nuxt-app",ih=36e5,Nx="vite:preloadError";function Sm(t=ym){return Dx(t,{asyncContext:!1})}const Ux="__nuxt_plugin";function Fx(t){let e=0;const n={_id:t.id||ym||"nuxt-app",_scope:i_(),provide:void 0,versions:{get nuxt(){return"4.4.2"},get vue(){return n.vueApp.version}},payload:Gn({...t.ssrContext?.payload||{},data:Gn({}),state:zi({}),once:new Set,_errors:Gn({})}),static:{data:{}},runWithContext(r){return n._scope.active&&!Gd()?n._scope.run(()=>rh(n,r)):rh(n,r)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Gn({}),_state:Gn({}),_payloadRevivers:{},...t};{const r=window.__NUXT__;if(r)for(const s in r)switch(s){case"data":case"state":case"_errors":Object.assign(n.payload[s],r[s]);break;default:n.payload[s]=r[s]}}n.hooks=xm(),n.hook=n.hooks.hook;{const r=n.hooks.callHook;n.hooks.callHook=(s,...o)=>Promise.resolve().then(()=>r(s,...o))}n.callHook=n.hooks.callHook,n.provide=(r,s)=>{const o="$"+r;Eo(n,o,s),Eo(n.vueApp.config.globalProperties,o,s)},Eo(n.vueApp,"$nuxt",n),Eo(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(Nx,s=>{n.callHook("app:chunkError",{error:s.payload}),s.payload.message.includes("Unable to preload CSS")&&s.preventDefault()}),window.useNuxtApp||=Nt;const r=n.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});n.hook("app:mounted",r)}const i=n.payload.config;return n.provide("config",i),n}function Ox(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function Bx(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const i in n)t.provide(i,n[i])}}async function kx(t,e){const n=new Set,i=[],r=[];let s,o=0;async function a(l){const c=l.dependsOn?.filter(u=>e.some(f=>f._name===u)&&!n.has(u))??[];if(c.length>0)i.push([new Set(c),l]);else{const u=Bx(t,l).then(async()=>{l._name&&(n.add(l._name),await Promise.all(i.map(async([f,h])=>{f.has(l._name)&&(f.delete(l._name),f.size===0&&(o++,await a(h)))})))}).catch(f=>{if(!l.parallel&&!t.payload.error)throw f;s||=f});l.parallel?r.push(u):await u}}for(const l of e)Ox(t,l);for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s)throw t.payload.error||s}function Ei(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[Ux]:!0,_name:e})}function rh(t,e,n){const i=()=>e();return Sm(t._id).set(t),t.vueApp.runWithContext(i)}function Hx(t){let e;return Cu()&&(e=Mr()?.appContext.app.$nuxt),e||=Sm(t).tryUse(),e||null}function Nt(t){const e=Hx(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Hu(t){return Nt().$config}function Eo(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function al(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function hc(t,e,n=".",i){if(!al(e))return hc(t,{},n,i);const r={...e};for(const s of Object.keys(t)){if(s==="__proto__"||s==="constructor")continue;const o=t[s];o!=null&&(i&&i(r,s,o,n)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:al(o)&&al(r[s])?r[s]=hc(o,r[s],(n?`${n}.`:"")+s.toString(),i):r[s]=o))}return r}function Vx(t){return(...e)=>e.reduce((n,i)=>hc(n,i,"",t),{})}const Mm=Vx();function zx(t,e){try{return e in t}catch{return!1}}class sh extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,n={}){super(e,n),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:dc(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Em(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function Gx(t){if(typeof t=="string")return new sh(t);if(Wx(t))return t;const e=new sh(t.message??t.statusMessage??"",{cause:t.cause||t});if(zx(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=dc(t.statusCode,e.statusCode):t.status&&(e.statusCode=dc(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Em(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function Wx(t){return t?.constructor?.__h3_error__===!0}const Xx=/[^\u0009\u0020-\u007E]/g;function Em(t=""){return t.replace(Xx,"")}function dc(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const qx=Symbol("layout-meta"),Ua=Symbol("route");import.meta.url.replace(/\/app\/.*$/,"/");const Mn=()=>Nt()?.$router,$x=()=>Cu()?un(Ua,Nt()._route):Nt()._route;const jx=()=>{try{if(Nt()._processingMiddleware)return!0}catch{return!1}return!1},cC=(t,e)=>{t||="/";const n=typeof t=="string"?t:"path"in t?Yx(t):Mn().resolve(t).href;if(e?.open){const{target:c="_blank",windowFeatures:u={}}=e.open,f=[];for(const[h,d]of Object.entries(u))d!==void 0&&f.push(`${h.toLowerCase()}=${d}`);return open(n,c,f.join(", ")),Promise.resolve()}const i=hs(n,{acceptRelative:!0}),r=e?.external||i;if(r){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&tx(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const s=jx();if(!r&&s){if(e?.replace){if(typeof t=="string"){const{pathname:c,search:u,hash:f}=Ou(t);return{path:c,...u&&{query:lm(u)},...f&&{hash:f},replace:!0}}return{...t,replace:!0}}return t}const o=Mn(),a=Nt();if(r)return a._scope.stop(),e?.replace?location.replace(n):location.href=n,s?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve();const l=typeof t=="string"?Kx(t):t;return e?.replace?o.replace(l):o.push(l)};function Yx(t){return cm(t.path||"",t.query||{})+(t.hash||"")}function Kx(t){const e=Ou(t);return Gv(Wv(e.pathname))+e.search+e.hash}const bm="__nuxt_error",Fa=()=>C_(Nt().payload,"error"),rr=t=>{const e=vr(t);try{const n=Fa();Nt().hooks.callHook("app:error",e),n.value||=e}catch{throw e}return e},Zx=async(t={})=>{const e=Nt(),n=Fa();e.callHook("app:error:cleared",t),t.redirect&&await Mn().replace(t.redirect),n.value=void 0},Tm=t=>!!t&&typeof t=="object"&&bm in t,vr=t=>{typeof t!="string"&&t.statusText&&(t.message??=t.statusText);const e=Gx(t);return Object.defineProperty(e,bm,{value:!0,configurable:!1,writable:!1}),Object.defineProperty(e,"status",{get:()=>e.statusCode,configurable:!0}),Object.defineProperty(e,"statusText",{get:()=>e.statusMessage,configurable:!0}),e};function Jx(t){return Uint8Array.fromBase64(t).buffer}function Qx(t){return Uint8Array.from(Buffer.from(t,"base64")).buffer}function ey(t){const e=atob(t),n=e.length,i=new Uint8Array(n);for(let r=0;r<n;r++)i[r]=e.charCodeAt(r);return i.buffer}const ty=typeof Uint8Array.fromBase64=="function",ny=typeof process=="object"&&process.versions?.node!==void 0,iy=ty?Jx:ny?Qx:ey,ry=-1,sy=-2,oy=-3,ay=-4,ly=-5,cy=-6,uy=-7;function fy(t,e){return hy(JSON.parse(t),e)}function hy(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,i=Array(n.length);let r=null;function s(o,a=!1){if(o===ry)return;if(o===oy)return NaN;if(o===ay)return 1/0;if(o===ly)return-1/0;if(o===cy)return-0;if(a||typeof o!="number")throw new Error("Invalid input");if(o in i)return i[o];const l=n[o];if(!l||typeof l!="object")i[o]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const c=l[0],u=e&&Object.hasOwn(e,c)?e[c]:void 0;if(u){let f=l[1];if(typeof f!="number"&&(f=n.push(l[1])-1),r??=new Set,r.has(f))throw new Error("Invalid circular reference");return r.add(f),i[o]=u(s(f)),r.delete(f),i[o]}switch(c){case"Date":i[o]=new Date(l[1]);break;case"Set":const f=new Set;i[o]=f;for(let m=1;m<l.length;m+=1)f.add(s(l[m]));break;case"Map":const h=new Map;i[o]=h;for(let m=1;m<l.length;m+=2)h.set(s(l[m]),s(l[m+1]));break;case"RegExp":i[o]=new RegExp(l[1],l[2]);break;case"Object":{const m=l[1];if(typeof n[m]=="object"&&n[m][0]!=="BigInt")throw new Error("Invalid input");i[o]=Object(s(m));break}case"BigInt":i[o]=BigInt(l[1]);break;case"null":const d=Object.create(null);i[o]=d;for(let m=1;m<l.length;m+=2){if(l[m]==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");d[l[m]]=s(l[m+1])}break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Float16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":case"DataView":{if(n[l[1]][0]!=="ArrayBuffer")throw new Error("Invalid data");const m=globalThis[c],_=s(l[1]);i[o]=l[2]!==void 0?new m(_,l[2],l[3]):new m(_);break}case"ArrayBuffer":{const m=l[1];if(typeof m!="string")throw new Error("Invalid ArrayBuffer encoding");const _=iy(m);i[o]=_;break}case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{const m=c.slice(9);i[o]=Temporal[m].from(l[1]);break}case"URL":{const m=new URL(l[1]);i[o]=m;break}case"URLSearchParams":{const m=new URLSearchParams(l[1]);i[o]=m;break}default:throw new Error(`Unknown type ${c}`)}}else if(l[0]===uy){const c=l[1];if(!Number.isInteger(c)||c<0)throw new Error("Invalid input");const u=new Array(c);i[o]=u;for(let f=2;f<l.length;f+=2){const h=l[f];if(!Number.isInteger(h)||h<0||h>=c)throw new Error("Invalid input");u[h]=s(l[f+1])}}else{const c=new Array(l.length);i[o]=c;for(let u=0;u<l.length;u+=1){const f=l[u];f!==sy&&(c[u]=s(f))}}else{const c={};i[o]=c;for(const u of Object.keys(l)){if(u==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");const f=l[u];c[u]=s(f)}}return i[o]}return s(0)}const dy=new Set(["link","style","script","noscript"]),py=new Set(["title","titleTemplate","script","style","noscript"]),pc=new Set(["base","meta","link","style","script","noscript"]),my=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),gy=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),_y=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),vy=new Set(["templateParams","htmlAttrs","bodyAttrs"]),xy=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),yy=["name","property","http-equiv"],Sy=new Set(["viewport","description","keywords","robots"]);function Am(t){const e=t.split(":");return e.length?xy.has(e[1]):!1}function mc(t){const{props:e,tag:n}=t;if(gy.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(n==="link"&&e.rel==="alternate"){const i=e.hreflang||e.type;if(i)return`alternate:${i}`}if(e.charset)return"charset";if(t.tag==="meta"){for(const i of yy)if(e[i]!==void 0){const r=e[i],s=r&&typeof r=="string"&&r.includes(":"),o=r&&Sy.has(r),l=!(s||o)&&t.key?`:key:${t.key}`:"";return`${n}:${r}${l}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(n==="link"&&e.rel==="alternate")return`alternate:${e.href||""}`;if(py.has(n)){const i=t.textContent||t.innerHTML;if(i)return`${n}:content:${i}`}}function wm(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([i,r])=>`${i}:${String(r)}`).join(",")}`}function _a(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());const r=e?e(n,t):t;if(Array.isArray(r))return r.map(s=>_a(s,e));if(r?.constructor===Object){const s={};for(const o of Object.keys(r))s[o]=_a(r[o],e,o);return s}return r}function My(t,e){const n=t==="style"?new Map:new Set;function i(r){if(r==null||r===void 0)return;const s=String(r).trim();if(s)if(t==="style"){const[o,...a]=s.split(":").map(l=>l?l.trim():"");o&&a.length&&n.set(o,a.join(":"))}else s.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(i):i(e):Array.isArray(e)?e.forEach(r=>i(r)):e&&typeof e=="object"&&Object.entries(e).forEach(([r,s])=>{s&&s!=="false"&&(t==="style"?n.set(String(r).trim(),String(s)):i(r))}),n}function Rm(t,e){if(t.props=t.props||{},!e)return t;if(t.tag==="templateParams")return t.props=e,t;const n=pc.has(t.tag)||t.tag==="htmlAttrs"||t.tag==="bodyAttrs";return Object.entries(e).forEach(([i,r])=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;if(r===null){t.props[i]=null;return}if(i==="class"||i==="style"){t.props[i]=My(i,r);return}if(_y.has(i)){if((i==="textContent"||i==="innerHTML")&&typeof r=="object"){let c=e.type;if(e.type||(c="application/json"),!c?.endsWith("json")&&c!=="speculationrules")return;e.type=c,t.props.type=c,t[i]=JSON.stringify(r)}else t[i]=r;return}const s=i.startsWith("data-"),o=n&&!s?i.toLowerCase():i,a=String(r),l=t.tag==="meta"&&o==="content";a==="true"||a===""?t.props[o]=s||l?a:!0:!r&&s&&a==="false"?t.props[o]="false":r!==void 0&&(t.props[o]=r)}),t}function Ey(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},i=Rm({tag:t,props:{}},n);return i.key&&dy.has(i.tag)&&(i.props["data-hid"]=i._h=i.key),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function by(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(r,s)=>{for(let o=0;o<e.length;o++)s=e[o](r,s);return s};t=n(void 0,t);const i=[];return t=_a(t,n),Object.entries(t||{}).forEach(([r,s])=>{if(s!==void 0)for(const o of Array.isArray(s)?s:[s])i.push(Ey(r,o))}),i.flat()}const oh=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,ah={base:-10,title:10},Ty={critical:-8,high:-1,low:2},lh={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},Ay=/@import/,xs=t=>t===""||t===!0;function wy(t,e){if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const i=Ty[e.tagPriority]||0,r=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:lh;if(e.tag in ah)n=ah[e.tag];else if(e.tag==="meta"){const s=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;s&&(n=lh.meta[s])}else if(e.tag==="link"&&e.props.rel)n=r.link[e.props.rel];else if(e.tag==="script"){const s=String(e.props.type);xs(e.props.async)?n=r.script.async:e.props.src&&!xs(e.props.defer)&&!xs(e.props.async)&&s!=="module"&&!s.endsWith("json")||e.innerHTML&&!s.endsWith("json")?n=r.script.sync:(xs(e.props.defer)&&e.props.src&&!xs(e.props.async)||s==="module")&&(n=r.script.defer)}else e.tag==="style"&&(n=e.innerHTML&&Ay.test(e.innerHTML)?r.style.imported:r.style.sync);return(n||100)+i}function ch(t,e){const n=typeof e=="function"?e(t):e,i=n.key||String(t.plugins.size+1);t.plugins.get(i)||(t.plugins.set(i,n),t.hooks.addHooks(n.hooks||{}))}function Ry(t={}){const e=xm();e.addHooks(t.hooks||{});const n=!t.document,i=new Map,r=new Map,s=new Set,o={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:i,headEntries(){return[...i.values()]},use:a=>ch(o,a),push(a,l){const c={...l||{}};delete c.head;const u=c._index??o._entryCount++,f={_i:u,input:a,options:c},h={_poll(d=!1){o.dirty=!0,!d&&s.add(u),e.callHook("entries:updated",o)},dispose(){i.delete(u)&&o.invalidate()},patch(d){(!c.mode||c.mode==="server"&&n||c.mode==="client"&&!n)&&(f.input=d,i.set(u,f),h._poll())}};return h.patch(a),h},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);s.size;){const h=s.values().next().value;s.delete(h);const d=i.get(h);if(d){const m={tags:by(d.input,t.propResolvers||[]).map(_=>Object.assign(_,d.options)),entry:d};await e.callHook("entries:normalize",m),d._tags=m.tags.map((_,g)=>(_._w=wy(o,_),_._p=(d._i<<10)+g,_._d=mc(_),_._d||(_._h=wm(_)),_))}}let l=!1;a.entries.flatMap(h=>(h._tags||[]).map(d=>({...d,props:{...d.props}}))).sort(oh).reduce((h,d)=>{const m=d._d||d._h;if(!h.has(m))return h.set(m,d);const _=h.get(m);if((d?.tagDuplicateStrategy||(vy.has(d.tag)?"merge":null)||(d.key&&d.key===_.key?"merge":null))==="merge"){const p={..._.props};Object.entries(d.props).forEach(([S,v])=>p[S]=S==="style"?new Map([..._.props.style||new Map,...v]):S==="class"?new Set([..._.props.class||new Set,...v]):v),h.set(m,{...d,props:p})}else d._p>>10===_._p>>10&&d.tag==="meta"&&Am(m)?(h.set(m,Object.assign([...Array.isArray(_)?_:[_],d],d)),l=!0):(d._w===_._w?d._p>_._p:d?._w<_?._w)&&h.set(m,d);return h},a.tagMap);const c=a.tagMap.get("title"),u=a.tagMap.get("titleTemplate");if(o._title=c?.textContent,u){const h=u?.textContent;if(o._titleTemplate=h,h){let d=typeof h=="function"?h(c?.textContent):h;typeof d=="string"&&!o.plugins.has("template-params")&&(d=d.replace("%s",c?.textContent||"")),c?d===null?a.tagMap.delete("title"):a.tagMap.set("title",{...c,textContent:d}):(u.tag="title",u.textContent=d)}}a.tags=Array.from(a.tagMap.values()),l&&(a.tags=a.tags.flat().sort(oh)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const f=[];for(const h of a.tags){const{innerHTML:d,tag:m,props:_}=h;if(my.has(m)&&!(Object.keys(_).length===0&&!h.innerHTML&&!h.textContent)&&!(m==="meta"&&!_.content&&!_["http-equiv"]&&!_.charset)){if(m==="script"&&d){if(String(_.type).endsWith("json")){const g=typeof d=="string"?d:JSON.stringify(d);h.innerHTML=g.replace(/</g,"\\u003C")}else typeof d=="string"&&(h.innerHTML=d.replace(new RegExp(`</${m}`,"g"),`<\\/${m}`));h._d=mc(h)}f.push(h)}}return f},invalidate(){for(const a of i.values())s.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(t?.plugins||[]).forEach(a=>ch(o,a)),o.hooks.callHook("init",o),t.init?.forEach(a=>a&&o.push(a)),o}const Cy=(t,e)=>Tt(e)?T_(e):e,Cm="usehead";function Py(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Cm,t)}}.install}function Dy(){if(Cu()){const t=un(Cm);if(t)return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function uC(t,e={}){const n=e.head||Dy();return n.ssr?n.push(t||{},e):Ly(n,t,e)}function Ly(t,e,n={}){const i=yn(!1);let r;return k_(()=>{const o=i.value?{}:_a(e,Cy);r?r.patch(o):r=t.push(o,n)}),Mr()&&(ro(()=>{r.dispose()}),xp(()=>{i.value=!0}),vp(()=>{i.value=!1})),r}const Iy=(t,e)=>[],Ny=t=>Mm({},...Iy().map(e=>e.data).reverse()),Uy=Ny;let Ko;function Fy(){return Ko=$fetch(ku(`builds/meta/${Hu().app.buildId}.json`),{responseType:"json"}),Ko.catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Ko}function Pm(){return Ko||Fy()}function Dm(t){const e=typeof t=="string"?t:t.path;try{return Uy(e)}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function uh(t,e={}){return null}async function Oy(t){return null}let Ki=null;async function By(){if(Ki)return Ki;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await ky(t.textContent||""),n=t.dataset.src?await Oy(t.dataset.src):void 0;return Ki={...e,...n,...window.__NUXT__},Ki.config?.public&&(Ki.config.public=zi(Ki.config.public)),Ki}async function ky(t){return await fy(t,Nt()._payloadRevivers)}function Hy(t,e){Nt()._payloadRevivers[t]=e}function fh(t){try{return JSON.parse(t)}catch{return t}}const Vy=[["NuxtError",t=>vr(t)],["EmptyShallowRef",t=>Jr(t==="_"?void 0:t==="0n"?BigInt(0):fh(t))],["EmptyRef",t=>yn(t==="_"?void 0:t==="0n"?BigInt(0):fh(t))],["ShallowRef",t=>Jr(t)],["ShallowReactive",t=>Gn(t)],["Ref",t=>yn(t)],["Reactive",t=>zi(t)]],zy=Ei({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[i,r]of Vy)Hy(i,r);Object.assign(t.payload,([e,n]=Hs(()=>t.runWithContext(By)),e=await e,n(),e)),delete window.__NUXT__}});async function Vu(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const i={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async r=>{const s=new Map,o=new Promise(d=>{t.resolveTags().then(m=>{d(m.map(_=>{const g=s.get(_._d)||0,p={tag:_,id:(g?`${_._d}:${g}`:_._d)||_._h,shouldRender:!0};return _._d&&Am(_._d)&&s.set(_._d,g+1),p}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const d of["body","head"]){const m=n[d]?.children;for(const _ of m){const g=_.tagName.toLowerCase();if(!pc.has(g))continue;const p=Rm({tag:g,props:{}},{innerHTML:_.innerHTML,..._.getAttributeNames().reduce((S,v)=>(S[v]=_.getAttribute(v),S),{})||{}});if(p.key=_.getAttribute("data-hid")||void 0,p._d=mc(p)||wm(p),a.elMap.has(p._d)){let S=1,v=p._d;for(;a.elMap.has(v);)v=`${p._d}:${S++}`;a.elMap.set(v,_)}else a.elMap.set(p._d,_)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(d,m,_){const g=`${d}:${m}`;a.sideEffects[g]=_,delete a.pendingSideEffects[g]}function c({id:d,$el:m,tag:_}){const g=_.tag.endsWith("Attrs");a.elMap.set(d,m),g||(_.textContent&&_.textContent!==m.textContent&&(m.textContent=_.textContent),_.innerHTML&&_.innerHTML!==m.innerHTML&&(m.innerHTML=_.innerHTML),l(d,"el",()=>{m?.remove(),a.elMap.delete(d)}));for(const p in _.props){if(!Object.prototype.hasOwnProperty.call(_.props,p))continue;const S=_.props[p];if(p.startsWith("on")&&typeof S=="function"){const y=m?.dataset;if(y&&y[`${p}fired`]){const b=p.slice(0,-5);S.call(m,new Event(b.substring(2)))}m.getAttribute(`data-${p}`)!==""&&((_.tag==="bodyAttrs"?n.defaultView:m).addEventListener(p.substring(2),S.bind(m)),m.setAttribute(`data-${p}`,""));continue}const v=`attr:${p}`;if(p==="class"){if(!S)continue;for(const y of S)g&&l(d,`${v}:${y}`,()=>m.classList.remove(y)),!m.classList.contains(y)&&m.classList.add(y)}else if(p==="style"){if(!S)continue;for(const[y,b]of S)l(d,`${v}:${y}`,()=>{m.style.removeProperty(y)}),m.style.setProperty(y,b)}else S!==!1&&S!==null&&(m.getAttribute(p)!==S&&m.setAttribute(p,S===!0?"":String(S)),g&&l(d,v,()=>m.removeAttribute(p)))}}const u=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},h=await o;for(const d of h){const{tag:m,shouldRender:_,id:g}=d;if(_){if(m.tag==="title"){n.title=m.textContent,l("title","",()=>n.title=a.title);continue}d.$el=d.$el||a.elMap.get(g),d.$el?c(d):pc.has(m.tag)&&u.push(d)}}for(const d of u){const m=d.tag.tagPosition||"head";d.$el=n.createElement(d.tag.tag),c(d),f[m]=f[m]||n.createDocumentFragment(),f[m].appendChild(d.$el)}for(const d of h)await t.hooks.callHook("dom:renderTag",d,n,l);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const d in a.pendingSideEffects)a.pendingSideEffects[d]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:h}),r()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function Gy(t={}){const e=t.domOptions?.render||Vu;t.document=t.document||(typeof window<"u"?document:void 0);const n=t.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1;return Ry({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function Wy(t,e){let n=0;return()=>{const i=++n;e(()=>{n===i&&t()})}}function Xy(t={}){const e=Gy({domOptions:{render:Wy(()=>Vu(e),n=>setTimeout(n,0))},...t});return e.install=Py(e),e}const qy={disableDefaults:!0},$y=Ei({name:"nuxt:head",enforce:"pre",setup(t){const e=Xy(qy);t.vueApp.use(e);{let n=!0;const i=async()=>{n=!1,await Vu(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||i()}),t.hooks.hook("app:error",i),t.hooks.hook("app:suspense:resolve",i)}}});const zr=typeof document<"u";function Lm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Lm(t.default)}const it=Object.assign;function ll(t,e){const n={};for(const i in e){const r=e[i];n[i]=Nn(r)?r.map(t):t(r)}return n}const Vs=()=>{},Nn=Array.isArray;function hh(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}let xt=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Im=Symbol("");xt.MATCHER_NOT_FOUND+"",xt.NAVIGATION_GUARD_REDIRECT+"",xt.NAVIGATION_ABORTED+"",xt.NAVIGATION_CANCELLED+"",xt.NAVIGATION_DUPLICATED+"";function is(t,e){return it(new Error,{type:t,[Im]:!0},e)}function ii(t,e){return t instanceof Error&&Im in t&&(e==null||!!(t.type&e))}const Yy=["params","query","hash"];function Ky(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Yy)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Zy=Symbol(""),dh=Symbol(""),zu=Symbol(""),Nm=Symbol(""),gc=Symbol("");const Um=/#/g,Jy=/&/g,Qy=/\//g,eS=/=/g,tS=/\?/g,Fm=/\+/g,nS=/%5B/g,iS=/%5D/g,Om=/%5E/g,rS=/%60/g,Bm=/%7B/g,sS=/%7C/g,km=/%7D/g,oS=/%20/g;function Gu(t){return t==null?"":encodeURI(""+t).replace(sS,"|").replace(nS,"[").replace(iS,"]")}function aS(t){return Gu(t).replace(Bm,"{").replace(km,"}").replace(Om,"^")}function _c(t){return Gu(t).replace(Fm,"%2B").replace(oS,"+").replace(Um,"%23").replace(Jy,"%26").replace(rS,"`").replace(Bm,"{").replace(km,"}").replace(Om,"^")}function lS(t){return _c(t).replace(eS,"%3D")}function cS(t){return Gu(t).replace(Um,"%23").replace(tS,"%3F")}function uS(t){return cS(t).replace(Qy,"%2F")}function Ys(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const fS=/\/$/,hS=t=>t.replace(fS,"");function cl(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=t(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=gS(i??e,n),{fullPath:i+s+o,path:i,query:r,hash:Ys(o)}}function dS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ph(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pS(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&rs(e.matched[i],n.matched[r])&&Hm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Hm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!mS(t[n],e[n]))return!1;return!0}function mS(t,e){return Nn(t)?mh(t,e):Nn(e)?mh(e,t):(t&&t.valueOf())===(e&&e.valueOf())}function mh(t,e){return Nn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function gS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let vc=(function(t){return t.pop="pop",t.push="push",t})({}),ul=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function _S(t){if(!t)if(zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hS(t)}const vS=/^[^#]+#/;function xS(t,e){return t.replace(vS,"#")+e}function yS(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Oa=()=>({left:window.scrollX,top:window.scrollY});function SS(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=yS(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function gh(t,e){return(history.state?history.state.position-e:-1)+t}const xc=new Map;function MS(t,e){xc.set(t,e)}function ES(t){const e=xc.get(t);return xc.delete(t),e}function bS(t){return typeof t=="string"||t&&typeof t=="object"}function Vm(t){return typeof t=="string"||typeof t=="symbol"}function TS(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(Fm," "),s=r.indexOf("="),o=Ys(s<0?r:r.slice(0,s)),a=s<0?null:Ys(r.slice(s+1));if(o in e){let l=e[o];Nn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function _h(t){let e="";for(let n in t){const i=t[n];if(n=lS(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Nn(i)?i.map(r=>r&&_c(r)):[i&&_c(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function AS(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Nn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}function ys(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ii(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(is(xt.NAVIGATION_ABORTED,{from:n,to:e})):h instanceof Error?l(h):bS(h)?l(is(xt.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function fl(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Lm(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Ii(c,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=jy(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&Ii(h,n,i,o,a,r)()}))}}return s}function wS(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>rs(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>rs(c,l))||r.push(l))}return[n,i,r]}let RS=()=>location.protocol+"//"+location.host;function zm(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),ph(a,"")}return ph(n,t)+i+r}function CS(t,e,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=zm(t,location),m=n.value,_=e.value;let g=0;if(h){if(n.value=d,e.value=h,o&&o===m){o=null;return}g=_?h.position-_.position:0}else i(d);r.forEach(p=>{p(n.value,m,{delta:g,type:vc.pop,direction:g?g>0?ul.forward:ul.back:ul.unknown})})};function l(){o=n.value}function c(h){r.push(h);const d=()=>{const m=r.indexOf(h);m>-1&&r.splice(m,1)};return s.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(it({},h.state,{scroll:Oa()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function vh(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Oa():null}}function PS(t){const{history:e,location:n}=window,i={value:zm(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:RS()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),n[u?"replace":"assign"](h)}}function o(l,c){s(l,it({},e.state,vh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=it({},r.value,e.state,{forward:l,scroll:Oa()});s(u.current,u,!0),s(l,it({},vh(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function DS(t){t=_S(t);const e=PS(t),n=CS(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=it({location:"",base:t,go:i,createHref:xS.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let cr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var At=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(At||{});const LS={type:cr.Static,value:""},IS=/[a-zA-Z0-9_]/;function NS(t){if(!t)return[[]];if(t==="/")return[[LS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=At.Static,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===At.Static?s.push({type:cr.Static,value:c}):n===At.Param||n===At.ParamRegExp||n===At.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:cr.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==At.ParamRegExp){i=n,n=At.EscapeNext;continue}switch(n){case At.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=At.Param):h();break;case At.EscapeNext:h(),n=i;break;case At.Param:l==="("?n=At.ParamRegExp:IS.test(l)?h():(f(),n=At.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case At.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=At.ParamRegExpEnd:u+=l;break;case At.ParamRegExpEnd:f(),n=At.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===At.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}const xh="[^/]+?",US={sensitive:!1,strict:!1,start:!0,end:!0};var Gt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Gt||{});const FS=/[.+*?^${}()[\]/\\]/g;function OS(t,e){const n=it({},US,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[Gt.Root];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=Gt.Segment+(n.sensitive?Gt.BonusCaseSensitive:0);if(h.type===cr.Static)f||(r+="/"),r+=h.value.replace(FS,"\\$&"),d+=Gt.Static;else if(h.type===cr.Param){const{value:m,repeatable:_,optional:g,regexp:p}=h;s.push({name:m,repeatable:_,optional:g});const S=p||xh;if(S!==xh){d+=Gt.BonusCustomRegExp;try{new RegExp(`(${S})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${m}" (${S}): `+y.message)}}let v=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(v=g&&c.length<2?`(?:/${v})`:"/"+v),g&&(v+="?"),r+=v,d+=Gt.Dynamic,g&&(d+=Gt.BonusOptional),_&&(d+=Gt.BonusRepeatable),S===".*"&&(d+=Gt.BonusWildcard)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Gt.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",m=s[h-1];f[m.name]=d&&m.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===cr.Static)u+=d.value;else if(d.type===cr.Param){const{value:m,repeatable:_,optional:g}=d,p=m in c?c[m]:"";if(Nn(p)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const S=Nn(p)?p.join("/"):p;if(!S)if(g)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function BS(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Gt.Static+Gt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Gt.Static+Gt.Segment?1:-1:0}function Gm(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=BS(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(yh(i))return 1;if(yh(r))return-1}return r.length-i.length}function yh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kS={strict:!1,end:!0,sensitive:!1};function HS(t,e,n){const i=OS(NS(t.path),n),r=it(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function VS(t,e){const n=[],i=new Map;e=hh(kS,e);function r(f){return i.get(f)}function s(f,h,d){const m=!d,_=Mh(f);_.aliasOf=d&&d.record;const g=hh(e,f),p=[_];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const b of y)p.push(Mh(it({},_,{components:d?d.record.components:_.components,path:b,aliasOf:d?d.record:_})))}let S,v;for(const y of p){const{path:b}=y;if(h&&b[0]!=="/"){const T=h.record.path,w=T[T.length-1]==="/"?"":"/";y.path=h.record.path+(b&&w+b)}if(S=HS(y,h,g),d?d.alias.push(S):(v=v||S,v!==S&&v.alias.push(S),m&&f.name&&!Eh(S)&&o(f.name)),Wm(S)&&l(S),_.children){const T=_.children;for(let w=0;w<T.length;w++)s(T[w],S,d&&d.children[w])}d=d||S}return v?()=>{o(v)}:Vs}function o(f){if(Vm(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const h=WS(f,n);n.splice(h,0,f),f.record.name&&!Eh(f)&&i.set(f.record.name,f)}function c(f,h){let d,m={},_,g;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw is(xt.MATCHER_NOT_FOUND,{location:f});g=d.record.name,m=it(Sh(h.params,d.keys.filter(v=>!v.optional).concat(d.parent?d.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),f.params&&Sh(f.params,d.keys.map(v=>v.name))),_=d.stringify(m)}else if(f.path!=null)_=f.path,d=n.find(v=>v.re.test(_)),d&&(m=d.parse(_),g=d.record.name);else{if(d=h.name?i.get(h.name):n.find(v=>v.re.test(h.path)),!d)throw is(xt.MATCHER_NOT_FOUND,{location:f,currentLocation:h});g=d.record.name,m=it({},h.params,f.params),_=d.stringify(m)}const p=[];let S=d;for(;S;)p.unshift(S.record),S=S.parent;return{name:g,path:_,params:m,matched:p,meta:GS(p)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Sh(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Mh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:zS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function zS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Eh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function GS(t){return t.reduce((e,n)=>it(e,n.meta),{})}function WS(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Gm(t,e[s])<0?i=s:n=s+1}const r=XS(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function XS(t){let e=t;for(;e=e.parent;)if(Wm(e)&&Gm(t,e)===0)return e}function Wm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function bh(t){const e=un(zu),n=un(Nm),i=wn(()=>{const l=ft(t.to);return e.resolve(l)}),r=wn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(rs.bind(null,u));if(h>-1)return h;const d=Th(l[c-2]);return c>1&&Th(u)===d&&f[f.length-1].path!==d?f.findIndex(rs.bind(null,l[c-2])):h}),s=wn(()=>r.value>-1&&KS(n.params,i.value.params)),o=wn(()=>r.value>-1&&r.value===n.matched.length-1&&Hm(n.params,i.value.params));function a(l={}){if(YS(l)){const c=e[ft(t.replace)?"replace":"push"](ft(t.to)).catch(Vs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:wn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function qS(t){return t.length===1?t[0]:t}const $S=Gi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:bh,setup(t,{slots:e}){const n=zi(bh(t)),{options:i}=un(zu),r=wn(()=>({[Ah(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ah(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&qS(e.default(n));return t.custom?s:ln("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),jS=$S;function YS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function KS(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Nn(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function Th(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ah=(t,e,n)=>t??e??n,ZS=Gi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=un(gc),r=wn(()=>t.route||i.value),s=un(dh,0),o=wn(()=>{let c=ft(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=wn(()=>r.value.matched[o.value]);pr(dh,wn(()=>o.value+1)),pr(Zy,a),pr(gc,r);const l=yn();return mr(()=>[l.value,a.value,t.name],([c,u,f],[h,d,m])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!rs(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return wh(n.default,{Component:h,route:c});const d=f.props[u],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,g=ln(h,it({},m,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return wh(n.default,{Component:g,route:c})||g}}});function wh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Xm=ZS;function JS(t){const e=VS(t.routes,t),n=t.parseQuery||TS,i=t.stringifyQuery||_h,r=t.history,s=ys(),o=ys(),a=ys(),l=Jr(mn);let c=mn;zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ll.bind(null,F=>""+F),f=ll.bind(null,uS),h=ll.bind(null,Ys);function d(F,ne){let se,re;return Vm(F)?(se=e.getRecordMatcher(F),re=ne):re=F,e.addRoute(re,se)}function m(F){const ne=e.getRecordMatcher(F);ne&&e.removeRoute(ne)}function _(){return e.getRoutes().map(F=>F.record)}function g(F){return!!e.getRecordMatcher(F)}function p(F,ne){if(ne=it({},ne||l.value),typeof F=="string"){const D=cl(n,F,ne.path),z=e.resolve({path:D.path},ne),Z=r.createHref(D.fullPath);return it(D,z,{params:h(z.params),hash:Ys(D.hash),redirectedFrom:void 0,href:Z})}let se;if(F.path!=null)se=it({},F,{path:cl(n,F.path,ne.path).path});else{const D=it({},F.params);for(const z in D)D[z]==null&&delete D[z];se=it({},F,{params:f(D)}),ne.params=f(ne.params)}const re=e.resolve(se,ne),we=F.hash||"";re.params=u(h(re.params));const Ge=dS(i,it({},F,{hash:aS(we),path:re.path})),P=r.createHref(Ge);return it({fullPath:Ge,hash:we,query:i===_h?AS(F.query):F.query||{}},re,{redirectedFrom:void 0,href:P})}function S(F){return typeof F=="string"?cl(n,F,l.value.path):it({},F)}function v(F,ne){if(c!==F)return is(xt.NAVIGATION_CANCELLED,{from:ne,to:F})}function y(F){return w(F)}function b(F){return y(it(S(F),{replace:!0}))}function T(F,ne){const se=F.matched[F.matched.length-1];if(se&&se.redirect){const{redirect:re}=se;let we=typeof re=="function"?re(F,ne):re;return typeof we=="string"&&(we=we.includes("?")||we.includes("#")?we=S(we):{path:we},we.params={}),it({query:F.query,hash:F.hash,params:we.path!=null?{}:F.params},we)}}function w(F,ne){const se=c=p(F),re=l.value,we=F.state,Ge=F.force,P=F.replace===!0,D=T(se,re);if(D)return w(it(S(D),{state:typeof D=="object"?it({},we,D.state):we,force:Ge,replace:P}),ne||se);const z=se;z.redirectedFrom=ne;let Z;return!Ge&&pS(i,re,se)&&(Z=is(xt.NAVIGATION_DUPLICATED,{to:z,from:re}),ye(re,re,!0,!1)),(Z?Promise.resolve(Z):E(z,re)).catch(te=>ii(te)?ii(te,xt.NAVIGATION_GUARD_REDIRECT)?te:_e(te):W(te,z,re)).then(te=>{if(te){if(ii(te,xt.NAVIGATION_GUARD_REDIRECT))return w(it({replace:P},S(te.to),{state:typeof te.to=="object"?it({},we,te.to.state):we,force:Ge}),ne||z)}else te=U(z,re,!0,P,we);return L(z,re,te),te})}function I(F,ne){const se=v(F,ne);return se?Promise.reject(se):Promise.resolve()}function M(F){const ne=nt.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(F):F()}function E(F,ne){let se;const[re,we,Ge]=wS(F,ne);se=fl(re.reverse(),"beforeRouteLeave",F,ne);for(const D of re)D.leaveGuards.forEach(z=>{se.push(Ii(z,F,ne))});const P=I.bind(null,F,ne);return se.push(P),ie(se).then(()=>{se=[];for(const D of s.list())se.push(Ii(D,F,ne));return se.push(P),ie(se)}).then(()=>{se=fl(we,"beforeRouteUpdate",F,ne);for(const D of we)D.updateGuards.forEach(z=>{se.push(Ii(z,F,ne))});return se.push(P),ie(se)}).then(()=>{se=[];for(const D of Ge)if(D.beforeEnter)if(Nn(D.beforeEnter))for(const z of D.beforeEnter)se.push(Ii(z,F,ne));else se.push(Ii(D.beforeEnter,F,ne));return se.push(P),ie(se)}).then(()=>(F.matched.forEach(D=>D.enterCallbacks={}),se=fl(Ge,"beforeRouteEnter",F,ne,M),se.push(P),ie(se))).then(()=>{se=[];for(const D of o.list())se.push(Ii(D,F,ne));return se.push(P),ie(se)}).catch(D=>ii(D,xt.NAVIGATION_CANCELLED)?D:Promise.reject(D))}function L(F,ne,se){a.list().forEach(re=>M(()=>re(F,ne,se)))}function U(F,ne,se,re,we){const Ge=v(F,ne);if(Ge)return Ge;const P=ne===mn,D=zr?history.state:{};se&&(re||P?r.replace(F.fullPath,it({scroll:P&&D&&D.scroll},we)):r.push(F.fullPath,we)),l.value=F,ye(F,ne,se,P),_e()}let O;function Y(){O||(O=r.listen((F,ne,se)=>{if(!Ye.listening)return;const re=p(F),we=T(re,Ye.currentRoute.value);if(we){w(it(we,{replace:!0,force:!0}),re).catch(Vs);return}c=re;const Ge=l.value;zr&&MS(gh(Ge.fullPath,se.delta),Oa()),E(re,Ge).catch(P=>ii(P,xt.NAVIGATION_ABORTED|xt.NAVIGATION_CANCELLED)?P:ii(P,xt.NAVIGATION_GUARD_REDIRECT)?(w(it(S(P.to),{force:!0}),re).then(D=>{ii(D,xt.NAVIGATION_ABORTED|xt.NAVIGATION_DUPLICATED)&&!se.delta&&se.type===vc.pop&&r.go(-1,!1)}).catch(Vs),Promise.reject()):(se.delta&&r.go(-se.delta,!1),W(P,re,Ge))).then(P=>{P=P||U(re,Ge,!1),P&&(se.delta&&!ii(P,xt.NAVIGATION_CANCELLED)?r.go(-se.delta,!1):se.type===vc.pop&&ii(P,xt.NAVIGATION_ABORTED|xt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),L(re,Ge,P)}).catch(Vs)}))}let Q=ys(),k=ys(),V;function W(F,ne,se){_e(F);const re=k.list();return re.length?re.forEach(we=>we(F,ne,se)):console.error(F),Promise.reject(F)}function fe(){return V&&l.value!==mn?Promise.resolve():new Promise((F,ne)=>{Q.add([F,ne])})}function _e(F){return V||(V=!F,Y(),Q.list().forEach(([ne,se])=>F?se(F):ne()),Q.reset()),F}function ye(F,ne,se,re){const{scrollBehavior:we}=t;if(!zr||!we)return Promise.resolve();const Ge=!se&&ES(gh(F.fullPath,0))||(re||!se)&&history.state&&history.state.scroll||null;return Ws().then(()=>we(F,ne,Ge)).then(P=>P&&SS(P)).catch(P=>W(P,F,ne))}const Ne=F=>r.go(F);let He;const nt=new Set,Ye={currentRoute:l,listening:!0,addRoute:d,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:_,resolve:p,options:t,push:y,replace:b,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:k.add,isReady:fe,install(F){F.component("RouterLink",jS),F.component("RouterView",Xm),F.config.globalProperties.$router=Ye,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>ft(l)}),zr&&!He&&l.value===mn&&(He=!0,y(r.location).catch(re=>{}));const ne={};for(const re in mn)Object.defineProperty(ne,re,{get:()=>l.value[re],enumerable:!0});F.provide(zu,Ye),F.provide(Nm,Gn(ne)),F.provide(gc,l);const se=F.unmount;nt.add(F),F.unmount=function(){nt.delete(F),nt.size<1&&(c=mn,O&&O(),O=null,l.value=mn,He=!1,V=!1),se()}}};function ie(F){return F.reduce((ne,se)=>ne.then(()=>M(se)),Promise.resolve())}return Ye}const QS=/(:\w+)\([^)]+\)/g,eM=/(:\w+)[?+*]/g,tM=/:\w+/g,nM=(t,e)=>e.path.replace(QS,"$1").replace(eM,"$1").replace(tM,n=>t.params[n.slice(1)]?.toString()||""),yc=(t,e)=>{const n=t.route.matched.find(r=>r.components?.default===t.Component.type),i=e??n?.meta.key??(n&&nM(t.route,n));return typeof i=="function"?i(t.route):i},iM=(t,e)=>({default:()=>t?ln(Q_,t===!0?{}:t,e):e});function qm(t){return Array.isArray(t)?t:[t]}const rM="modulepreload",sM=function(t,e){return new URL(t,e).href},Rh={},Ni=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=c(n.map(u=>{if(u=sM(u,i),u in Rh)return;Rh[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(i)for(let m=o.length-1;m>=0;m--){const _=o[m];if(_.href===u&&(!f||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":rM,f||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),f)return new Promise((m,_)=>{d.addEventListener("load",m),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},hl=[{name:"ajar-visual",path:"/ajar-visual",component:()=>Ni(()=>import("./Q897gMty.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)},{name:"insurance-mobile",path:"/insurance-mobile",component:()=>Ni(()=>import("./3gGgaDqB.js"),__vite__mapDeps([8,9,2,3,10,7]),import.meta.url)},{name:"insurance-web",path:"/insurance-web",component:()=>Ni(()=>import("./BLP4vArp.js"),__vite__mapDeps([11,12,2,3,10,13,5,7]),import.meta.url)},{name:"sync-board",path:"/sync-board",component:()=>Ni(()=>import("./BrwtvE9h.js"),__vite__mapDeps([14,15,2,3,4,16,6,5,7]),import.meta.url)},{name:"tenant-master",path:"/tenant-master",component:()=>Ni(()=>import("./C3JnT5jU.js"),__vite__mapDeps([17,18,2,3,16,13,6,5,7]),import.meta.url)},{name:"index",path:"/",component:()=>Ni(()=>import("./Dz7v_Gbr.js"),__vite__mapDeps([19,20,2,18,9,12,15,1,7]),import.meta.url)}],oM=(t,e)=>({default:()=>t?ln(ev,t===!0?{}:t,e):e.default?.()}),aM=/(:\w+)\([^)]+\)/g,lM=/(:\w+)[?+*]/g,cM=/:\w+/g;function Ch(t){const e=t?.meta.key??t.path.replace(aM,"$1").replace(lM,"$1").replace(cM,n=>t.params[n.slice(1)]?.toString()||"");return typeof e=="function"?e(t):e}function uM(t,e){return t===e||e===mn?!1:Ch(t)!==Ch(e)?!0:!t.matched.every((i,r)=>i.components&&i.components.default===e.matched[r]?.components?.default)}function Ph(t){return Array.isArray(t)?t:[t]}function fM(t){const e=[];for(const n of t)n&&e.push({...n,onAfterLeave:n.onAfterLeave?Ph(n.onAfterLeave):void 0,onBeforeLeave:n.onBeforeLeave?Ph(n.onBeforeLeave):void 0});return Mm(...e)}const hM={scrollBehavior(t,e,n){const i=Nt(),r=Mn().options?.scrollBehaviorType??"auto";return t.path.replace(/\/$/,"")===e.path.replace(/\/$/,"")?e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:$m(t.hash),behavior:r}:!1:(typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1?!1:e===mn?Dh(t,e,n,r):new Promise(o=>{const a=()=>{requestAnimationFrame(()=>o(Dh(t,e,n,r)))};i.hooks.hookOnce("page:loading:end",()=>{const l=i["~transitionPromise"];l?l.then(a):a()})})}};function $m(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function Dh(t,e,n,i){if(n)return n;const r=uM(t,e);return t.hash?{el:t.hash,top:$m(t.hash),behavior:r?i:"instant"}:{left:0,top:0}}const dM={hashMode:!1,scrollBehaviorType:"auto"},Ti={...dM,...hM},pM=async(t,e)=>{let n,i;if(!t.meta?.validate)return;const r=([n,i]=Hs(()=>Promise.resolve(t.meta.validate(t))),n=await n,i(),n);if(r===!0)return;const s=vr({fatal:!0,status:r&&(r.status||r.statusCode)||404,statusText:r&&(r.statusText||r.statusMessage)||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),s},mM=t=>{const e=Dm({path:t.path});if(e.redirect){const n=e.redirect.includes("#")?e.redirect:e.redirect+t.hash;return hs(n,{acceptRelative:!0})?(window.location.href=n,!1):n}},gM=[pM,mM],Sc={};function _M(t,e,n){const{pathname:i,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){const c=s.includes(t.slice(o))?t.slice(o).length:1;let u=s.slice(c);return u[0]!=="/"&&(u="/"+u),Kf(u,"")}const a=Kf(i,t),l=!n||dm(a,n)?a:n;return l+(l.includes("?")?"":r)+s}const vM=Ei({name:"nuxt:router",enforce:"pre",async setup(t){let e,n,i=Hu().app.baseURL;const r=Ti.history?.(i)??DS(i),s=Ti.routes?([e,n]=Hs(()=>Ti.routes(hl)),e=await e,n(),e??hl):hl;let o;const a=JS({...Ti,scrollBehavior:(p,S,v)=>{if(S===mn){o=v;return}if(Ti.scrollBehavior){if(a.options.scrollBehavior=Ti.scrollBehavior,"scrollRestoration"in window.history){const y=a.beforeEach(()=>{y(),window.history.scrollRestoration="manual"})}return Ti.scrollBehavior(p,mn,o||v)}},history:r,routes:s});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Jr(a.currentRoute.value);a.afterEach((p,S)=>{l.value=S}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const c=_M(i,window.location,t.payload.path),u=Jr(a.currentRoute.value),f=()=>{u.value=a.currentRoute.value};a.afterEach((p,S)=>{p.matched.at(-1)?.components?.default===S.matched.at(-1)?.components?.default&&f()});const h={sync:f};for(const p in u.value)Object.defineProperty(h,p,{get:()=>u.value[p],enumerable:!0});t._route=Gn(h),t._middleware||={global:[],named:{}};const d=Fa();a.afterEach(async(p,S,v)=>{delete t._processingMiddleware,!t.isHydrating&&d.value&&await t.runWithContext(Zx),v&&await t.callHook("page:loading:end")});try{[e,n]=Hs(()=>a.isReady()),await e,n()}catch(p){[e,n]=Hs(()=>t.runWithContext(()=>rr(p))),await e,n()}const m=c!==a.currentRoute.value.fullPath?a.resolve(c):a.currentRoute.value,_=t.isHydrating&&t.payload.prerenderedAt&&t.payload.path&&c!==t.payload.path&&dm(a.currentRoute.value.path,t.payload.path);f();const g=t.payload.state._layout;return a.beforeEach(async(p,S)=>{await t.callHook("page:loading:start"),p.meta=zi(p.meta),t.isHydrating&&g&&!Kn(p.meta.layout)&&(p.meta.layout=g),t._processingMiddleware=!0;{const v=new Set([...gM,...t._middleware.global]);for(const b of p.matched){const T=b.meta.middleware;if(T)for(const w of qm(T))v.add(w)}const y=Dm({path:p.path});if(y.appMiddleware)for(const b in y.appMiddleware)y.appMiddleware[b]?v.add(b):v.delete(b);for(const b of v){const T=typeof b=="string"?t._middleware.named[b]||await Sc[b]?.().then(w=>w.default||w):b;if(!T)throw new Error(`Unknown route middleware: '${b}'.`);try{const w=await t.runWithContext(()=>T(p,S));if(!t.payload.serverRendered&&t.isHydrating&&(w===!1||w instanceof Error)){const I=w||vr({status:404,statusText:`Page Not Found: ${c}`});return await t.runWithContext(()=>rr(I)),!1}if(w===!0)continue;if(w===!1)return w;if(w)return Tm(w)&&w.fatal&&await t.runWithContext(()=>rr(w)),w}catch(w){const I=vr(w);return I.fatal&&await t.runWithContext(()=>rr(I)),I}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(p=>{if(p.matched.length===0&&!d.value)return t.runWithContext(()=>rr(vr({status:404,fatal:!1,statusText:`Page not found: ${p.fullPath}`,data:{path:p.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{if("name"in m&&(m.name=void 0),_){const p=a.resolve(t.payload.path);"name"in p&&(p.name=void 0),await a.replace({...p,force:!0}),t.hooks.hookOnce("app:suspense:resolve",async()=>{await a.replace({...m,force:!0})})}else await a.replace({...m,force:!0});a.options.scrollBehavior=Ti.scrollBehavior}catch(p){await t.runWithContext(()=>rr(p))}}),{provide:{router:a}}}}),Lh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),fC=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Wu=t=>{const e=Nt();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Lh(()=>t())}):Lh(()=>t())},xM=Ei({name:"nuxt:payload",setup(t){const e=new Set;Mn().beforeResolve(async(n,i)=>{if(n.path===i.path)return;const r=await uh(n.path);if(r){for(const s of e)delete t.static.data[s];for(const s in r.data)s in t.static.data||e.add(s),t.static.data[s]=r.data[s]}}),Wu(()=>{t.hooks.hook("link:prefetch",async n=>{const{hostname:i}=new URL(n,window.location.href);i===window.location.hostname&&await uh().catch(()=>{console.warn("[nuxt] Error preloading payload for",n)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(Pm,1e3)})}}),yM=Ei(()=>{const t=Mn();Wu(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),SM=Ei(t=>{let e;async function n(){let i;try{i=await Pm()}catch(r){const s=r;if(!("status"in s&&(s.status===404||s.status===403)))throw s}e&&clearTimeout(e),e=setTimeout(n,ih);try{const r=await $fetch(ku("builds/latest.json")+`?${Date.now()}`);r.id!==i?.id&&(t.hooks.callHook("app:manifest:update",r),e&&clearTimeout(e))}catch{}}Wu(()=>{e=setTimeout(n,ih)})});function MM(t={}){const e=t.path||window.location.pathname;let n={};try{n=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||n?.path!==e||n?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Nt().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const EM=Ei({name:"nuxt:chunk-reload",setup(t){const e=Mn(),n=Hu(),i=new Set;e.beforeEach(()=>{i.clear()}),t.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const o=fm(n.app.baseURL,s.fullPath);MM({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,o)=>{i.has(s)&&r(o)})}}),bM=Ei({name:"nuxt:global-components"}),bo={};function TM(t){if(t?.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function AM(t,e=Mn()){const{path:n,matched:i}=e.resolve(t);if(!i.length||(e._routePreloaded||=new Set,e._routePreloaded.has(n)))return;const r=e._preloadPromises||=[];if(r.length>4)return Promise.all(r).then(()=>AM(t,e));e._routePreloaded.add(n);for(const s of i){const o=s.components?.default;if(typeof o!="function")continue;const a=Promise.resolve(o()).catch(()=>{}).finally(()=>r.splice(r.indexOf(a),1));r.push(a)}await Promise.all(r)}const wM=Ei({name:"nuxt:prefetch",setup(t){const e=Mn();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{const i=n?.meta?.layout;i&&typeof bo[i]=="function"&&await bo[i]()})}),t.hooks.hook("link:prefetch",n=>{if(hs(n))return;const i=e.resolve(n);if(!i)return;const r=i.meta.layout;let s=qm(i.meta.middleware);s=s.filter(o=>typeof o=="string");for(const o of s)typeof Sc[o]=="function"&&Sc[o]();typeof r=="string"&&r in bo&&TM(bo[r])})}}),RM=[zy,$y,vM,xM,yM,SM,EM,bM,wM];const Xu="182",CM=0,Ih=1,PM=2,Zo=1,DM=2,Ds=3,Vi=0,Qt=1,hi=2,pi=0,Yr=1,Mc=2,Nh=3,Uh=4,LM=5,ar=100,IM=101,NM=102,UM=103,FM=104,OM=200,BM=201,kM=202,HM=203,Ec=204,bc=205,VM=206,zM=207,GM=208,WM=209,XM=210,qM=211,$M=212,jM=213,YM=214,Tc=0,Ac=1,wc=2,ss=3,Rc=4,Cc=5,Pc=6,Dc=7,jm=0,KM=1,ZM=2,$n=0,Ym=1,Km=2,Zm=3,Jm=4,Qm=5,eg=6,tg=7,ng=300,xr=301,os=302,Lc=303,Ic=304,Ba=306,Nc=1e3,di=1001,Uc=1002,It=1003,JM=1004,To=1005,Bt=1006,dl=1007,ur=1008,xn=1009,ig=1010,rg=1011,Ks=1012,qu=1013,Jn=1014,Wn=1015,vi=1016,$u=1017,ju=1018,Zs=1020,sg=35902,og=35899,ag=1021,lg=1022,Pn=1023,xi=1026,fr=1027,cg=1028,Yu=1029,as=1030,Ku=1031,Zu=1033,Jo=33776,Qo=33777,ea=33778,ta=33779,Fc=35840,Oc=35841,Bc=35842,kc=35843,Hc=36196,Vc=37492,zc=37496,Gc=37488,Wc=37489,Xc=37490,qc=37491,$c=37808,jc=37809,Yc=37810,Kc=37811,Zc=37812,Jc=37813,Qc=37814,eu=37815,tu=37816,nu=37817,iu=37818,ru=37819,su=37820,ou=37821,au=36492,lu=36494,cu=36495,uu=36283,fu=36284,hu=36285,du=36286,QM=3200,eE=0,tE=1,Oi="",gn="srgb",ls="srgb-linear",va="linear",at="srgb",Ar=7680,Fh=519,nE=512,iE=513,rE=514,Ju=515,sE=516,oE=517,Qu=518,aE=519,Oh=35044,Bh="300 es",Xn=2e3,xa=2001;function ug(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ya(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function lE(){const t=ya("canvas");return t.style.display="block",t}const kh={};function Hh(...t){const e="THREE."+t.shift();console.log(e,...t)}function ze(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Qe(...t){const e="THREE."+t.shift();console.error(e,...t)}function Js(...t){const e=t.join(" ");e in kh||(kh[e]=!0,ze(...t))}function cE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pl=Math.PI/180,pu=180/Math.PI;function oo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function uE(t,e){return(t%e+e)%e}function ml(t,e,n){return(1-n)*t+n*e}function Ss(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ao{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(a<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a>=1){e[n+0]=h,e[n+1]=d,e[n+2]=m,e[n+3]=_;return}if(f!==_||l!==h||c!==d||u!==m){let g=l*h+c*d+u*m+f*_;g<0&&(h=-h,d=-d,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){const S=Math.acos(g),v=Math.sin(S);p=Math.sin(p*S)/v,a=Math.sin(a*S)/v,l=l*p+h*a,c=c*p+d*a,u=u*p+m*a,f=f*p+_*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+m*a,f=f*p+_*a;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],m=s[o+3];return e[n]=a*m+u*f+l*d-c*h,e[n+1]=l*m+u*h+c*f-a*d,e[n+2]=c*m+u*d+a*h-l*f,e[n+3]=u*m-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gl.copy(this).projectOnVector(e),this.sub(gl)}reflect(e){return this.sub(gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gl=new $,Vh=new ao;class Xe{constructor(e,n,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],m=i[8],_=r[0],g=r[3],p=r[6],S=r[1],v=r[4],y=r[7],b=r[2],T=r[5],w=r[8];return s[0]=o*_+a*S+l*b,s[3]=o*g+a*v+l*T,s[6]=o*p+a*y+l*w,s[1]=c*_+u*S+f*b,s[4]=c*g+u*v+f*T,s[7]=c*p+u*y+f*w,s[2]=h*_+d*S+m*b,s[5]=h*g+d*v+m*T,s[8]=h*p+d*y+m*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,m=n*f+i*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=d*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_l.makeScale(e,n)),this}rotate(e){return this.premultiply(_l.makeRotation(-e)),this}translate(e,n){return this.premultiply(_l.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _l=new Xe,zh=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fE(){const t={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=Kr(r.r),r.g=Kr(r.g),r.b=Kr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Oi?va:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ls]:{primaries:e,whitePoint:i,transfer:va,toXYZ:zh,fromXYZ:Gh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:zh,fromXYZ:Gh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),t}const Ke=fE();function mi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Kr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let wr;class hE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{wr===void 0&&(wr=ya("canvas")),wr.width=e.width,wr.height=e.height;const r=wr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=wr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ya("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(mi(n[i]/255)*255):n[i]=mi(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dE=0;class ef{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vl(r[o].image)):s.push(vl(r[o]))}else s=vl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function vl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?hE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let pE=0;const xl=new $;class qt extends ds{constructor(e=qt.DEFAULT_IMAGE,n=qt.DEFAULT_MAPPING,i=di,r=di,s=Bt,o=ur,a=Pn,l=xn,c=qt.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=oo(),this.name="",this.source=new ef(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nc:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nc:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=ng;qt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,n=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(d+1)/2,b=(p+1)/2,T=(u+h)/4,w=(f+_)/4,I=(m+g)/4;return v>y&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=w/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=I/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=I/s),this.set(i,r,s,n),this}let S=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(f-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mE extends ds{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new qt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ef(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends mE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class fg extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gE extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lo{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(En.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(En.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=En.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(s,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),wo.subVectors(this.max,Ms),Rr.subVectors(e.a,Ms),Cr.subVectors(e.b,Ms),Pr.subVectors(e.c,Ms),Ai.subVectors(Cr,Rr),wi.subVectors(Pr,Cr),Zi.subVectors(Rr,Pr);let n=[0,-Ai.z,Ai.y,0,-wi.z,wi.y,0,-Zi.z,Zi.y,Ai.z,0,-Ai.x,wi.z,0,-wi.x,Zi.z,0,-Zi.x,-Ai.y,Ai.x,0,-wi.y,wi.x,0,-Zi.y,Zi.x,0];return!yl(n,Rr,Cr,Pr,wo)||(n=[1,0,0,0,1,0,0,0,1],!yl(n,Rr,Cr,Pr,wo))?!1:(Ro.crossVectors(Ai,wi),n=[Ro.x,Ro.y,Ro.z],yl(n,Rr,Cr,Pr,wo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ri=[new $,new $,new $,new $,new $,new $,new $,new $],En=new $,Ao=new lo,Rr=new $,Cr=new $,Pr=new $,Ai=new $,wi=new $,Zi=new $,Ms=new $,wo=new $,Ro=new $,Ji=new $;function yl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ji.fromArray(t,s);const a=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),l=e.dot(Ji),c=n.dot(Ji),u=i.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _E=new lo,Es=new $,Sl=new $;class ka{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_E.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const n=Es.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Es,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(Sl)),this.expandByPoint(Es.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const si=new $,Ml=new $,Co=new $,Ri=new $,El=new $,Po=new $,bl=new $;class hg{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ml.copy(e).add(n).multiplyScalar(.5),Co.copy(n).sub(e).normalize(),Ri.copy(this.origin).sub(Ml);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Co),a=Ri.dot(this.direction),l=-Ri.dot(Co),c=Ri.lengthSq(),u=Math.abs(1-o*o);let f,h,d,m;if(u>0)if(f=o*l-a,h=o*a-l,m=s*u,f>=0)if(h>=-m)if(h<=m){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ml).addScaledVector(Co,h),d}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,s){El.subVectors(n,e),Po.subVectors(i,e),bl.crossVectors(El,Po);let o=this.direction.dot(bl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(Po.crossVectors(Ri,Po));if(l<0)return null;const c=a*this.direction.dot(El.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(bl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,s,o,a,l,c,u,f,h,d,m,_,g){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,d,m,_,g)}set(e,n,i,r,s,o,a,l,c,u,f,h,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,m=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=d+m*c,n[5]=h-_*c,n[9]=-a*l,n[2]=_-h*c,n[6]=m+d*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,m=c*u,_=c*f;n[0]=h+_*a,n[4]=m*a-d,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=d*a-m,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,m=c*u,_=c*f;n[0]=h-_*a,n[4]=-o*f,n[8]=m+d*a,n[1]=d+m*a,n[5]=o*u,n[9]=_-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,m=a*u,_=a*f;n[0]=l*u,n[4]=m*c-d,n[8]=h*c+_,n[1]=l*f,n[5]=_*c+h,n[9]=d*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,m=a*l,_=a*c;n[0]=l*u,n[4]=_-h*f,n[8]=m*f+d,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=d*f+m,n[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,m=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+_,n[5]=o*u,n[9]=d*f-m,n[2]=m*f-d,n[6]=a*u,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vE,e,xE)}lookAt(e,n,i){const r=this.elements;return rn.subVectors(e,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Ci.crossVectors(i,rn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Ci.crossVectors(i,rn)),Ci.normalize(),Do.crossVectors(rn,Ci),r[0]=Ci.x,r[4]=Do.x,r[8]=rn.x,r[1]=Ci.y,r[5]=Do.y,r[9]=rn.y,r[2]=Ci.z,r[6]=Do.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],m=i[2],_=i[6],g=i[10],p=i[14],S=i[3],v=i[7],y=i[11],b=i[15],T=r[0],w=r[4],I=r[8],M=r[12],E=r[1],L=r[5],U=r[9],O=r[13],Y=r[2],Q=r[6],k=r[10],V=r[14],W=r[3],fe=r[7],_e=r[11],ye=r[15];return s[0]=o*T+a*E+l*Y+c*W,s[4]=o*w+a*L+l*Q+c*fe,s[8]=o*I+a*U+l*k+c*_e,s[12]=o*M+a*O+l*V+c*ye,s[1]=u*T+f*E+h*Y+d*W,s[5]=u*w+f*L+h*Q+d*fe,s[9]=u*I+f*U+h*k+d*_e,s[13]=u*M+f*O+h*V+d*ye,s[2]=m*T+_*E+g*Y+p*W,s[6]=m*w+_*L+g*Q+p*fe,s[10]=m*I+_*U+g*k+p*_e,s[14]=m*M+_*O+g*V+p*ye,s[3]=S*T+v*E+y*Y+b*W,s[7]=S*w+v*L+y*Q+b*fe,s[11]=S*I+v*U+y*k+b*_e,s[15]=S*M+v*O+y*V+b*ye,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15],S=l*d-c*h,v=a*d-c*f,y=a*h-l*f,b=o*d-c*u,T=o*h-l*u,w=o*f-a*u;return n*(_*S-g*v+p*y)-i*(m*S-g*b+p*T)+r*(m*v-_*b+p*w)-s*(m*y-_*T+g*w)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],S=f*g*c-_*h*c+_*l*d-a*g*d-f*l*p+a*h*p,v=m*h*c-u*g*c-m*l*d+o*g*d+u*l*p-o*h*p,y=u*_*c-m*f*c+m*a*d-o*_*d-u*a*p+o*f*p,b=m*f*l-u*_*l-m*a*h+o*_*h+u*a*g-o*f*g,T=n*S+i*v+r*y+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=S*w,e[1]=(_*h*s-f*g*s-_*r*d+i*g*d+f*r*p-i*h*p)*w,e[2]=(a*g*s-_*l*s+_*r*c-i*g*c-a*r*p+i*l*p)*w,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*w,e[4]=v*w,e[5]=(u*g*s-m*h*s+m*r*d-n*g*d-u*r*p+n*h*p)*w,e[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*p-n*l*p)*w,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*d+n*l*d)*w,e[8]=y*w,e[9]=(m*f*s-u*_*s-m*i*d+n*_*d+u*i*p-n*f*p)*w,e[10]=(o*_*s-m*a*s+m*i*c-n*_*c-o*i*p+n*a*p)*w,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*d-n*a*d)*w,e[12]=b*w,e[13]=(u*_*r-m*f*r+m*i*h-n*_*h-u*i*g+n*f*g)*w,e[14]=(m*a*r-o*_*r-m*i*l+n*_*l+o*i*g-n*a*g)*w,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,m=s*f,_=o*u,g=o*f,p=a*f,S=l*c,v=l*u,y=l*f,b=i.x,T=i.y,w=i.z;return r[0]=(1-(_+p))*b,r[1]=(d+y)*b,r[2]=(m-v)*b,r[3]=0,r[4]=(d-y)*T,r[5]=(1-(h+p))*T,r[6]=(g+S)*T,r[7]=0,r[8]=(m+v)*w,r[9]=(g-S)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=Dr.set(r[0],r[1],r[2]).length();const o=Dr.set(r[4],r[5],r[6]).length(),a=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),bn.copy(this);const c=1/s,u=1/o,f=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,n.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Xn,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===Xn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===xa)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Xn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),d=-(i+r)/(i-r);let m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===Xn)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===xa)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Dr=new $,bn=new Mt,vE=new $(0,0,0),xE=new $(1,1,1),Ci=new $,Do=new $,rn=new $,Wh=new Mt,Xh=new ao;class yi{constructor(e=0,n=0,i=0,r=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class dg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yE=0;const qh=new $,Lr=new ao,oi=new Mt,Lo=new $,bs=new $,SE=new $,ME=new ao,$h=new $(1,0,0),jh=new $(0,1,0),Yh=new $(0,0,1),Kh={type:"added"},EE={type:"removed"},Ir={type:"childadded",child:null},Tl={type:"childremoved",child:null};class en extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new $,n=new yi,i=new ao,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Xe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis($h,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(Yh,e)}translateOnAxis(e,n){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($h,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(Yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Lo.copy(e):Lo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(bs,Lo,this.up):oi.lookAt(Lo,bs,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(oi),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kh),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(EE),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kh),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,SE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,ME,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}en.DEFAULT_UP=new $(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new $,ai=new $,Al=new $,li=new $,Nr=new $,Ur=new $,Zh=new $,wl=new $,Rl=new $,Cl=new $,Pl=new St,Dl=new St,Ll=new St;class Rn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Tn.subVectors(e,n),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Tn.subVectors(r,n),ai.subVectors(i,n),Al.subVectors(e,n);const o=Tn.dot(Tn),a=Tn.dot(ai),l=Tn.dot(Al),c=ai.dot(ai),u=ai.dot(Al),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,m=(o*u-a*l)*h;return s.set(1-d-m,m,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Pl.setScalar(0),Dl.setScalar(0),Ll.setScalar(0),Pl.fromBufferAttribute(e,n),Dl.fromBufferAttribute(e,i),Ll.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pl,s.x),o.addScaledVector(Dl,s.y),o.addScaledVector(Ll,s.z),o}static isFrontFacing(e,n,i,r){return Tn.subVectors(i,n),ai.subVectors(e,n),Tn.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Tn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Rn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Nr.subVectors(r,i),Ur.subVectors(s,i),wl.subVectors(e,i);const l=Nr.dot(wl),c=Ur.dot(wl);if(l<=0&&c<=0)return n.copy(i);Rl.subVectors(e,r);const u=Nr.dot(Rl),f=Ur.dot(Rl);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Nr,o);Cl.subVectors(e,s);const d=Nr.dot(Cl),m=Ur.dot(Cl);if(m>=0&&d<=m)return n.copy(s);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Ur,a);const g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return Zh.subVectors(s,r),a=(f-u)/(f-u+(d-m)),n.copy(r).addScaledVector(Zh,a);const p=1/(g+_+h);return o=_*p,a=h*p,n.copy(i).addScaledVector(Nr,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Il(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=uE(e,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Il(o,s,e+1/3),this.g=Il(o,s,e),this.b=Il(o,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,n=gn){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gn){const i=pg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return Ke.workingToColorSpace(Ft.copy(this),e),Math.round(je(Ft.r*255,0,255))*65536+Math.round(je(Ft.g*255,0,255))*256+Math.round(je(Ft.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=gn){Ke.workingToColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+n,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pi),e.getHSL(Io);const i=ml(Pi.h,Io.h,n),r=ml(Pi.s,Io.s,n),s=ml(Pi.l,Io.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new lt;lt.NAMES=pg;let bE=0;class co extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=Yr,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=bc,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ec&&(i.blendSrc=this.blendSrc),this.blendDst!==bc&&(i.blendDst=this.blendDst),this.blendEquation!==ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mg extends co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=jm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new $,No=new et;let TE=0;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Oh,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)No.fromBufferAttribute(this,n),No.applyMatrix3(e),this.setXY(n,No.x,No.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ss(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ss(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ss(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ss(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ss(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oh&&(e.usage=this.usage),e}}class gg extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _g extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kt extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let AE=0;const pn=new Mt,Nl=new en,Fr=new $,sn=new lo,Ts=new lo,Dt=new $;class fn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ug(e)?_g:gg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,n,i){return pn.makeTranslation(e,n,i),this.applyMatrix4(pn),this}scale(e,n,i){return pn.makeScale(e,n,i),this.applyMatrix4(pn),this}lookAt(e){return Nl.lookAt(e),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(sn.min,Ts.min),sn.expandByPoint(Dt),Dt.addVectors(sn.max,Ts.max),sn.expandByPoint(Dt)):(sn.expandByPoint(Ts.min),sn.expandByPoint(Ts.max))}sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(e,c),Dt.add(Fr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new $,l[I]=new $;const c=new $,u=new $,f=new $,h=new et,d=new et,m=new et,_=new $,g=new $;function p(I,M,E){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,I),d.fromBufferAttribute(s,M),m.fromBufferAttribute(s,E),u.sub(c),f.sub(c),d.sub(h),m.sub(h);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(L),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(L),a[I].add(_),a[M].add(_),a[E].add(_),l[I].add(g),l[M].add(g),l[E].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,M=S.length;I<M;++I){const E=S[I],L=E.start,U=E.count;for(let O=L,Y=L+U;O<Y;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new $,y=new $,b=new $,T=new $;function w(I){b.fromBufferAttribute(r,I),T.copy(b);const M=a[I];v.copy(M),v.sub(b.multiplyScalar(b.dot(M))).normalize(),y.crossVectors(T,M);const L=y.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,L)}for(let I=0,M=S.length;I<M;++I){const E=S[I],L=E.start,U=E.count;for(let O=L,Y=L+U;O<Y;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[m++]=c[d++]}return new Yn(h,u,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jh=new Mt,Qi=new hg,Uo=new ka,Qh=new $,Fo=new $,Oo=new $,Bo=new $,Ul=new $,ko=new $,ed=new $,Ho=new $;class Si extends en{constructor(e=new fn,n=new mg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ul.fromBufferAttribute(f,e),o?ko.addScaledVector(Ul,u):ko.addScaledVector(Ul.sub(n),u))}n.add(ko)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(Uo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Uo,Qh)===null||Qi.origin.distanceToSquared(Qh)>(e.far-e.near)**2))&&(Jh.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(Jh),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Qi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],S=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=S,b=v;y<b;y+=3){const T=a.getX(y),w=a.getX(y+1),I=a.getX(y+2);r=Vo(this,p,e,i,c,u,f,T,w,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const S=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);r=Vo(this,o,e,i,c,u,f,S,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],S=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=S,b=v;y<b;y+=3){const T=y,w=y+1,I=y+2;r=Vo(this,p,e,i,c,u,f,T,w,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const S=g,v=g+1,y=g+2;r=Vo(this,o,e,i,c,u,f,S,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function wE(t,e,n,i,r,s,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;Ho.copy(a),Ho.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ho);return c<n.near||c>n.far?null:{distance:c,point:Ho.clone(),object:t}}function Vo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Fo),t.getVertexPosition(l,Oo),t.getVertexPosition(c,Bo);const u=wE(t,e,n,i,Fo,Oo,Bo,ed);if(u){const f=new $;Rn.getBarycoord(ed,Fo,Oo,Bo,f),r&&(u.uv=Rn.getInterpolatedAttribute(r,a,l,c,f,new et)),s&&(u.uv1=Rn.getInterpolatedAttribute(s,a,l,c,f,new et)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,l,c,f,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new $,materialIndex:0};Rn.getNormal(Fo,Oo,Bo,h.normal),u.face=h,u.barycoord=f}return u}class uo extends fn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(f,2));function m(_,g,p,S,v,y,b,T,w,I,M){const E=y/w,L=b/I,U=y/2,O=b/2,Y=T/2,Q=w+1,k=I+1;let V=0,W=0;const fe=new $;for(let _e=0;_e<k;_e++){const ye=_e*L-O;for(let Ne=0;Ne<Q;Ne++){const He=Ne*E-U;fe[_]=He*S,fe[g]=ye*v,fe[p]=Y,c.push(fe.x,fe.y,fe.z),fe[_]=0,fe[g]=0,fe[p]=T>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Ne/w),f.push(1-_e/I),V+=1}}for(let _e=0;_e<I;_e++)for(let ye=0;ye<w;ye++){const Ne=h+ye+Q*_e,He=h+ye+Q*(_e+1),nt=h+(ye+1)+Q*(_e+1),Ye=h+(ye+1)+Q*_e;l.push(Ne,He,Ye),l.push(He,nt,Ye),W+=6}a.addGroup(d,W,M),d+=W,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const i=cs(t[n]);for(const r in i)e[r]=i[r]}return e}function RE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const CE={clone:cs,merge:zt};var PE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends co{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PE,this.fragmentShader=DE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=RE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class xg extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new $,td=new et,nd=new et;class vn extends xg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=pu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pu*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,n){return this.getViewBounds(e,td,nd),n.subVectors(nd,td)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Or=-90,Br=1;class LE extends en{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(Or,Br,e,n);r.layers=this.layers,this.add(r);const s=new vn(Or,Br,e,n);s.layers=this.layers,this.add(s);const o=new vn(Or,Br,e,n);o.layers=this.layers,this.add(o);const a=new vn(Or,Br,e,n);a.layers=this.layers,this.add(a);const l=new vn(Or,Br,e,n);l.layers=this.layers,this.add(l);const c=new vn(Or,Br,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class yg extends qt{constructor(e=[],n=xr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sg extends jn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yg(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new uo(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:pi});s.uniforms.tEquirect.value=n;const o=new Si(r,s),a=n.minFilter;return n.minFilter===ur&&(n.minFilter=Bt),new LE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class zo extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IE={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class NE extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class UE extends qt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=It,u=It,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ol=new $,FE=new $,OE=new Xe;class sr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ol.subVectors(i,n).cross(FE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OE.getNormalMatrix(e),r=this.coplanarPoint(Ol).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new ka,BE=new et(.5,.5),Go=new $;class Mg{constructor(e=new sr,n=new sr,i=new sr,r=new sr,s=new sr,o=new sr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Xn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],m=s[8],_=s[9],g=s[10],p=s[11],S=s[12],v=s[13],y=s[14],b=s[15];if(r[0].setComponents(c-o,d-u,p-m,b-S).normalize(),r[1].setComponents(c+o,d+u,p+m,b+S).normalize(),r[2].setComponents(c+a,d+f,p+_,b+v).normalize(),r[3].setComponents(c-a,d-f,p-_,b-v).normalize(),i)r[4].setComponents(l,h,g,y).normalize(),r[5].setComponents(c-l,d-h,p-g,b-y).normalize();else if(r[4].setComponents(c-l,d-h,p-g,b-y).normalize(),n===Xn)r[5].setComponents(c+l,d+h,p+g,b+y).normalize();else if(n===xa)r[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){er.center.set(0,0,0);const n=BE.distanceTo(e.center);return er.radius=.7071067811865476+n,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Go.x=r.normal.x>0?e.max.x:e.min.x,Go.y=r.normal.y>0?e.max.y:e.min.y,Go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eg extends co{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const id=new Mt,mu=new hg,Wo=new ka,Xo=new $;class kE extends en{constructor(e=new fn,n=new Eg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(r),Wo.radius+=s,e.ray.intersectsSphere(Wo)===!1)return;id.copy(r).invert(),mu.copy(e.ray).applyMatrix4(id);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=h,_=d;m<_;m++){const g=c.getX(m);Xo.fromBufferAttribute(f,g),rd(Xo,g,l,r,e,n,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,_=d;m<_;m++)Xo.fromBufferAttribute(f,m),rd(Xo,m,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rd(t,e,n,i,r,s,o){const a=mu.distanceSqToPoint(t);if(a<n){const l=new $;mu.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Qs extends qt{constructor(e,n,i=Jn,r,s,o,a=It,l=It,c,u=xi,f=1){if(u!==xi&&u!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ef(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class HE extends Qs{constructor(e,n=Jn,i=xr,r,s,o=It,a=It,l,c=xi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bg extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tf extends fn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new kt(s,3)),this.setAttribute("normal",new kt(s.slice(),3)),this.setAttribute("uv",new kt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const v=new $,y=new $,b=new $;for(let T=0;T<n.length;T+=3)d(n[T+0],v),d(n[T+1],y),d(n[T+2],b),l(v,y,b,S)}function l(S,v,y,b){const T=b+1,w=[];for(let I=0;I<=T;I++){w[I]=[];const M=S.clone().lerp(y,I/T),E=v.clone().lerp(y,I/T),L=T-I;for(let U=0;U<=L;U++)U===0&&I===T?w[I][U]=M:w[I][U]=M.clone().lerp(E,U/L)}for(let I=0;I<T;I++)for(let M=0;M<2*(T-I)-1;M++){const E=Math.floor(M/2);M%2===0?(h(w[I][E+1]),h(w[I+1][E]),h(w[I][E])):(h(w[I][E+1]),h(w[I+1][E+1]),h(w[I+1][E]))}}function c(S){const v=new $;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(S),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function u(){const S=new $;for(let v=0;v<s.length;v+=3){S.x=s[v+0],S.y=s[v+1],S.z=s[v+2];const y=g(S)/2/Math.PI+.5,b=p(S)/Math.PI+.5;o.push(y,1-b)}m(),f()}function f(){for(let S=0;S<o.length;S+=6){const v=o[S+0],y=o[S+2],b=o[S+4],T=Math.max(v,y,b),w=Math.min(v,y,b);T>.9&&w<.1&&(v<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),b<.2&&(o[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function d(S,v){const y=S*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function m(){const S=new $,v=new $,y=new $,b=new $,T=new et,w=new et,I=new et;for(let M=0,E=0;M<s.length;M+=9,E+=6){S.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),T.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),b.copy(S).add(v).add(y).divideScalar(3);const L=g(b);_(T,E+0,S,L),_(w,E+2,v,L),_(I,E+4,y,L)}}function _(S,v,y,b){b<0&&S.x===1&&(o[v]=S.x-1),y.x===0&&y.z===0&&(o[v]=b/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tf(e.vertices,e.indices,e.radius,e.detail)}}class Tg extends tf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Tg(e.radius,e.detail)}}class Ha extends fn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,d=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const S=p*h-o;for(let v=0;v<c;v++){const y=v*f-s;m.push(y,-S,0),_.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const v=S+c*p,y=S+c*(p+1),b=S+1+c*(p+1),T=S+1+c*p;d.push(v,y,T),d.push(y,b,T)}this.setIndex(d),this.setAttribute("position",new kt(m,3)),this.setAttribute("normal",new kt(_,3)),this.setAttribute("uv",new kt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ag extends fn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new $,f=new $,h=new $;for(let d=0;d<=i;d++)for(let m=0;m<=r;m++){const _=m/r*s,g=d/i*Math.PI*2;f.x=(e+n*Math.cos(g))*Math.cos(_),f.y=(e+n*Math.cos(g))*Math.sin(_),f.z=n*Math.sin(g),a.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(m/r),c.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=r;m++){const _=(r+1)*d+m-1,g=(r+1)*(d-1)+m-1,p=(r+1)*(d-1)+m,S=(r+1)*d+m;o.push(_,g,S),o.push(g,p,S)}this.setIndex(o),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(l,3)),this.setAttribute("uv",new kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ag(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class VE extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zE extends co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GE extends co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wg extends xg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class WE extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function sd(t,e,n,i){const r=XE(i);switch(n){case ag:return t*e;case cg:return t*e/r.components*r.byteLength;case Yu:return t*e/r.components*r.byteLength;case as:return t*e*2/r.components*r.byteLength;case Ku:return t*e*2/r.components*r.byteLength;case lg:return t*e*3/r.components*r.byteLength;case Pn:return t*e*4/r.components*r.byteLength;case Zu:return t*e*4/r.components*r.byteLength;case Jo:case Qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Oc:case kc:return Math.max(t,16)*Math.max(e,8)/4;case Fc:case Bc:return Math.max(t,8)*Math.max(e,8)/2;case Hc:case Vc:case Gc:case Wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zc:case Xc:case qc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case eu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case tu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case nu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case iu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ru:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case su:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ou:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case au:case lu:case cu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case uu:case fu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case hu:case du:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function XE(t){switch(t){case xn:case ig:return{byteLength:1,components:1};case Ks:case rg:case vi:return{byteLength:2,components:1};case $u:case ju:return{byteLength:2,components:4};case Jn:case qu:case Wn:return{byteLength:4,components:1};case sg:case og:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xu}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xu);function Rg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function qE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var $E=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jE=`#ifdef USE_ALPHAHASH
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
#endif`,YE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QE=`#ifdef USE_AOMAP
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
#endif`,eb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tb=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ib=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ob=`#ifdef USE_IRIDESCENCE
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
#endif`,ab=`#ifdef USE_BUMPMAP
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
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gb=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,_b=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vb=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",bb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Db=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nb=`#ifdef USE_GRADIENTMAP
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
}`,Ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bb=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,kb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Xb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,qb=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$b=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nT=`#if defined( USE_POINTS_UV )
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
#endif`,iT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lT=`#ifdef USE_MORPHTARGETS
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
#endif`,cT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mT=`#ifdef USE_NORMALMAP
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
#endif`,gT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_T=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ST=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ET=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,PT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,DT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,LT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IT=`#ifdef USE_SKINNING
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
#endif`,NT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UT=`#ifdef USE_SKINNING
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
#endif`,FT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HT=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VT=`#ifdef USE_TRANSMISSION
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
#endif`,zT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$T=`uniform sampler2D t2D;
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
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`#include <common>
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
}`,QT=`#if DEPTH_PACKING == 3200
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
}`,eA=`#define DISTANCE
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
}`,tA=`#define DISTANCE
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
void main () {
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`uniform float scale;
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
}`,sA=`uniform vec3 diffuse;
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
}`,oA=`#include <common>
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
}`,aA=`uniform vec3 diffuse;
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
}`,lA=`#define LAMBERT
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
}`,cA=`#define LAMBERT
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
}`,uA=`#define MATCAP
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
}`,fA=`#define MATCAP
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
}`,hA=`#define NORMAL
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
}`,dA=`#define NORMAL
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
}`,pA=`#define PHONG
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
}`,mA=`#define PHONG
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
}`,gA=`#define STANDARD
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
}`,_A=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <cube_uv_reflection_fragment>
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
}`,vA=`#define TOON
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
}`,xA=`#define TOON
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
}`,yA=`uniform float size;
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
}`,SA=`uniform vec3 diffuse;
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
}`,MA=`#include <common>
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
}`,EA=`uniform vec3 color;
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
}`,bA=`uniform float rotation;
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
}`,TA=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:$E,alphahash_pars_fragment:jE,alphamap_fragment:YE,alphamap_pars_fragment:KE,alphatest_fragment:ZE,alphatest_pars_fragment:JE,aomap_fragment:QE,aomap_pars_fragment:eb,batching_pars_vertex:tb,batching_vertex:nb,begin_vertex:ib,beginnormal_vertex:rb,bsdfs:sb,iridescence_fragment:ob,bumpmap_pars_fragment:ab,clipping_planes_fragment:lb,clipping_planes_pars_fragment:cb,clipping_planes_pars_vertex:ub,clipping_planes_vertex:fb,color_fragment:hb,color_pars_fragment:db,color_pars_vertex:pb,color_vertex:mb,common:gb,cube_uv_reflection_fragment:_b,defaultnormal_vertex:vb,displacementmap_pars_vertex:xb,displacementmap_vertex:yb,emissivemap_fragment:Sb,emissivemap_pars_fragment:Mb,colorspace_fragment:Eb,colorspace_pars_fragment:bb,envmap_fragment:Tb,envmap_common_pars_fragment:Ab,envmap_pars_fragment:wb,envmap_pars_vertex:Rb,envmap_physical_pars_fragment:kb,envmap_vertex:Cb,fog_vertex:Pb,fog_pars_vertex:Db,fog_fragment:Lb,fog_pars_fragment:Ib,gradientmap_pars_fragment:Nb,lightmap_pars_fragment:Ub,lights_lambert_fragment:Fb,lights_lambert_pars_fragment:Ob,lights_pars_begin:Bb,lights_toon_fragment:Hb,lights_toon_pars_fragment:Vb,lights_phong_fragment:zb,lights_phong_pars_fragment:Gb,lights_physical_fragment:Wb,lights_physical_pars_fragment:Xb,lights_fragment_begin:qb,lights_fragment_maps:$b,lights_fragment_end:jb,logdepthbuf_fragment:Yb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:Zb,logdepthbuf_vertex:Jb,map_fragment:Qb,map_pars_fragment:eT,map_particle_fragment:tT,map_particle_pars_fragment:nT,metalnessmap_fragment:iT,metalnessmap_pars_fragment:rT,morphinstance_vertex:sT,morphcolor_vertex:oT,morphnormal_vertex:aT,morphtarget_pars_vertex:lT,morphtarget_vertex:cT,normal_fragment_begin:uT,normal_fragment_maps:fT,normal_pars_fragment:hT,normal_pars_vertex:dT,normal_vertex:pT,normalmap_pars_fragment:mT,clearcoat_normal_fragment_begin:gT,clearcoat_normal_fragment_maps:_T,clearcoat_pars_fragment:vT,iridescence_pars_fragment:xT,opaque_fragment:yT,packing:ST,premultiplied_alpha_fragment:MT,project_vertex:ET,dithering_fragment:bT,dithering_pars_fragment:TT,roughnessmap_fragment:AT,roughnessmap_pars_fragment:wT,shadowmap_pars_fragment:RT,shadowmap_pars_vertex:CT,shadowmap_vertex:PT,shadowmask_pars_fragment:DT,skinbase_vertex:LT,skinning_pars_vertex:IT,skinning_vertex:NT,skinnormal_vertex:UT,specularmap_fragment:FT,specularmap_pars_fragment:OT,tonemapping_fragment:BT,tonemapping_pars_fragment:kT,transmission_fragment:HT,transmission_pars_fragment:VT,uv_pars_fragment:zT,uv_pars_vertex:GT,uv_vertex:WT,worldpos_vertex:XT,background_vert:qT,background_frag:$T,backgroundCube_vert:jT,backgroundCube_frag:YT,cube_vert:KT,cube_frag:ZT,depth_vert:JT,depth_frag:QT,distance_vert:eA,distance_frag:tA,equirect_vert:nA,equirect_frag:iA,linedashed_vert:rA,linedashed_frag:sA,meshbasic_vert:oA,meshbasic_frag:aA,meshlambert_vert:lA,meshlambert_frag:cA,meshmatcap_vert:uA,meshmatcap_frag:fA,meshnormal_vert:hA,meshnormal_frag:dA,meshphong_vert:pA,meshphong_frag:mA,meshphysical_vert:gA,meshphysical_frag:_A,meshtoon_vert:vA,meshtoon_frag:xA,points_vert:yA,points_frag:SA,shadow_vert:MA,shadow_frag:EA,sprite_vert:bA,sprite_frag:TA},Ee={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Vn={basic:{uniforms:zt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:zt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:zt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:zt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:zt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:zt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:zt([Ee.points,Ee.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:zt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:zt([Ee.common,Ee.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:zt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:zt([Ee.sprite,Ee.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:zt([Ee.common,Ee.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:zt([Ee.lights,Ee.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Vn.physical={uniforms:zt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const qo={r:0,b:0,g:0},tr=new yi,AA=new Mt;function wA(t,e,n,i,r,s,o){const a=new lt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function m(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y)),y}function _(v){let y=!1;const b=m(v);b===null?p(a,l):b&&b.isColor&&(p(b,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,y){const b=m(y);b&&(b.isCubeTexture||b.mapping===Ba)?(u===void 0&&(u=new Si(new uo(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:cs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),tr.copy(y.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(AA.makeRotationFromEuler(tr)),u.material.toneMapped=Ke.getTransfer(b.colorSpace)!==at,(f!==b||h!==b.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Si(new Ha(2,2),new Qn({name:"BackgroundMaterial",uniforms:cs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(b.colorSpace)!==at,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(qo,vg(t)),i.buffers.color.setClear(qo.r,qo.g,qo.b,y,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:g,dispose:S}}function RA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,L,U,O,Y){let Q=!1;const k=f(O,U,L);s!==k&&(s=k,c(s.object)),Q=d(E,O,U,Y),Q&&m(E,O,U,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(E,L,U,O),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function u(E){return t.deleteVertexArray(E)}function f(E,L,U){const O=U.wireframe===!0;let Y=i[E.id];Y===void 0&&(Y={},i[E.id]=Y);let Q=Y[L.id];Q===void 0&&(Q={},Y[L.id]=Q);let k=Q[O];return k===void 0&&(k=h(l()),Q[O]=k),k}function h(E){const L=[],U=[],O=[];for(let Y=0;Y<n;Y++)L[Y]=0,U[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:O,object:E,attributes:{},index:null}}function d(E,L,U,O){const Y=s.attributes,Q=L.attributes;let k=0;const V=U.getAttributes();for(const W in V)if(V[W].location>=0){const _e=Y[W];let ye=Q[W];if(ye===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(ye=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(ye=E.instanceColor)),_e===void 0||_e.attribute!==ye||ye&&_e.data!==ye.data)return!0;k++}return s.attributesNum!==k||s.index!==O}function m(E,L,U,O){const Y={},Q=L.attributes;let k=0;const V=U.getAttributes();for(const W in V)if(V[W].location>=0){let _e=Q[W];_e===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(_e=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(_e=E.instanceColor));const ye={};ye.attribute=_e,_e&&_e.data&&(ye.data=_e.data),Y[W]=ye,k++}s.attributes=Y,s.attributesNum=k,s.index=O}function _(){const E=s.newAttributes;for(let L=0,U=E.length;L<U;L++)E[L]=0}function g(E){p(E,0)}function p(E,L){const U=s.newAttributes,O=s.enabledAttributes,Y=s.attributeDivisors;U[E]=1,O[E]===0&&(t.enableVertexAttribArray(E),O[E]=1),Y[E]!==L&&(t.vertexAttribDivisor(E,L),Y[E]=L)}function S(){const E=s.newAttributes,L=s.enabledAttributes;for(let U=0,O=L.length;U<O;U++)L[U]!==E[U]&&(t.disableVertexAttribArray(U),L[U]=0)}function v(E,L,U,O,Y,Q,k){k===!0?t.vertexAttribIPointer(E,L,U,Y,Q):t.vertexAttribPointer(E,L,U,O,Y,Q)}function y(E,L,U,O){_();const Y=O.attributes,Q=U.getAttributes(),k=L.defaultAttributeValues;for(const V in Q){const W=Q[V];if(W.location>=0){let fe=Y[V];if(fe===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor)),fe!==void 0){const _e=fe.normalized,ye=fe.itemSize,Ne=e.get(fe);if(Ne===void 0)continue;const He=Ne.buffer,nt=Ne.type,Ye=Ne.bytesPerElement,ie=nt===t.INT||nt===t.UNSIGNED_INT||fe.gpuType===qu;if(fe.isInterleavedBufferAttribute){const F=fe.data,ne=F.stride,se=fe.offset;if(F.isInstancedInterleavedBuffer){for(let re=0;re<W.locationSize;re++)p(W.location+re,F.meshPerAttribute);E.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let re=0;re<W.locationSize;re++)g(W.location+re);t.bindBuffer(t.ARRAY_BUFFER,He);for(let re=0;re<W.locationSize;re++)v(W.location+re,ye/W.locationSize,nt,_e,ne*Ye,(se+ye/W.locationSize*re)*Ye,ie)}else{if(fe.isInstancedBufferAttribute){for(let F=0;F<W.locationSize;F++)p(W.location+F,fe.meshPerAttribute);E.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let F=0;F<W.locationSize;F++)g(W.location+F);t.bindBuffer(t.ARRAY_BUFFER,He);for(let F=0;F<W.locationSize;F++)v(W.location+F,ye/W.locationSize,nt,_e,ye*Ye,ye/W.locationSize*F*Ye,ie)}}else if(k!==void 0){const _e=k[V];if(_e!==void 0)switch(_e.length){case 2:t.vertexAttrib2fv(W.location,_e);break;case 3:t.vertexAttrib3fv(W.location,_e);break;case 4:t.vertexAttrib4fv(W.location,_e);break;default:t.vertexAttrib1fv(W.location,_e)}}}}S()}function b(){I();for(const E in i){const L=i[E];for(const U in L){const O=L[U];for(const Y in O)u(O[Y].object),delete O[Y];delete L[U]}delete i[E]}}function T(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const U in L){const O=L[U];for(const Y in O)u(O[Y].object),delete O[Y];delete L[U]}delete i[E.id]}function w(E){for(const L in i){const U=i[L];if(U[E.id]===void 0)continue;const O=U[E.id];for(const Y in O)u(O[Y].object),delete O[Y];delete U[E.id]}}function I(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function CA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let m=0;m<f;m++)d+=u[m];n.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_]*h[_];n.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function PA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Pn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const I=w===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==xn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Wn&&!I)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:y,maxSamples:b,samples:T}}function DA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new sr,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=t.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const S=s?0:i,v=S*4;let y=p.clippingState||null;l.value=y,y=u(m,h,v,d);for(let b=0;b!==v;++b)y[b]=n[b];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=d;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(S,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function LA(t){let e=new WeakMap;function n(o,a){return a===Lc?o.mapping=xr:a===Ic&&(o.mapping=os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lc||a===Ic)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Sg(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Bi=4,od=[.125,.215,.35,.446,.526,.582],lr=20,IA=256,As=new wg,ad=new lt;let Bl=null,kl=0,Hl=0,Vl=!1;const NA=new $;class ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=NA}=s;Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bl,kl,Hl),this._renderer.xr.enabled=Vl,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xr||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:vi,format:Pn,colorSpace:ls,depthBuffer:!1},r=cd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UA(s)),this._blurMaterial=OA(s,e,n),this._ggxMaterial=FA(s,e,n)}return r}_compileMaterial(e){const n=new Si(new fn,e);this._renderer.compile(n,As)}_sceneToCubeUV(e,n,i,r,s){const l=new vn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(ad),f.toneMapping=$n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Si(new uo,new mg({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,p=!0):(g.color.copy(ad),p=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));const b=this._cubeSize;kr(r,y*b,v>2?b:0,b,b),f.setRenderTarget(r),p&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=S}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===xr||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;kr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,As)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:m}=this,_=this._sizeLods[i],g=3*_*(i>m-Bi?i-m+Bi:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-n,kr(s,g,p,3*_,2*_),r.setRenderTarget(s),r.render(a,As),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,kr(e,g,p,3*_,2*_),r.setRenderTarget(e),r.render(a,As)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*lr-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):lr;g>lr&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${lr}`);const p=[];let S=0;for(let w=0;w<lr;++w){const I=w/_,M=Math.exp(-I*I/2);p.push(M),w===0?S+=M:w<g&&(S+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=m,h.mipInt.value=v-i;const y=this._sizeLods[r],b=3*y*(r>v-Bi?r-v+Bi:0),T=4*(this._cubeSize-y);kr(n,b,T,3*y,2*y),l.setRenderTarget(n),l.render(f,As)}}function UA(t){const e=[],n=[],i=[];let r=t;const s=t-Bi+1+od.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Bi?l=od[o-t+Bi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,_=3,g=2,p=1,S=new Float32Array(_*m*d),v=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,I=T>2?0:-1,M=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];S.set(M,_*m*T),v.set(h,g*m*T);const E=[T,T,T,T,T,T];y.set(E,p*m*T)}const b=new fn;b.setAttribute("position",new Yn(S,_)),b.setAttribute("uv",new Yn(v,g)),b.setAttribute("faceIndex",new Yn(y,p)),i.push(new Si(b,null)),r>Bi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function cd(t,e,n){const i=new jn(t,e,n);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function FA(t,e,n){return new Qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Va(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function OA(t,e,n){const i=new Float32Array(lr),r=new $(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ud(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function fd(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lc||l===Ic,u=l===xr||l===os;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new ld(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(n===null&&(n=new ld(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function kA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Js("WebGLRenderer: "+i+" extension not supported."),r}}}function HA(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],t.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,m=f.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let v=0,y=S.length;v<y;v+=3){const b=S[v+0],T=S[v+1],w=S[v+2];h.push(b,T,T,w,w,b)}}else if(m!==void 0){const S=m.array;_=m.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const b=v+0,T=v+1,w=v+2;h.push(b,T,T,w,w,b)}}else return;const g=new(ug(h)?_g:gg)(h,1);g.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function VA(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*o),n.update(d,i,1)}function c(h,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,h*o,m),n.update(d,i,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];n.update(g,i,1)}function f(h,d,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,m);let p=0;for(let S=0;S<m;S++)p+=d[S]*_[S];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function zA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function GA(t,e,n){const i=new WeakMap,r=new St;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),m===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*b*4*f),w=new fg(T,y,b,f);w.type=Wn,w.needsUpdate=!0;const I=v*4;for(let E=0;E<f;E++){const L=g[E],U=p[E],O=S[E],Y=y*b*4*E;for(let Q=0;Q<L.count;Q++){const k=Q*I;d===!0&&(r.fromBufferAttribute(L,Q),T[Y+k+0]=r.x,T[Y+k+1]=r.y,T[Y+k+2]=r.z,T[Y+k+3]=0),m===!0&&(r.fromBufferAttribute(U,Q),T[Y+k+4]=r.x,T[Y+k+5]=r.y,T[Y+k+6]=r.z,T[Y+k+7]=0),_===!0&&(r.fromBufferAttribute(O,Q),T[Y+k+8]=r.x,T[Y+k+9]=r.y,T[Y+k+10]=r.z,T[Y+k+11]=O.itemSize===4?r.w:1)}}h={count:f,texture:w,size:new et(y,b)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function WA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const XA={[Ym]:"LINEAR_TONE_MAPPING",[Km]:"REINHARD_TONE_MAPPING",[Zm]:"CINEON_TONE_MAPPING",[Jm]:"ACES_FILMIC_TONE_MAPPING",[eg]:"AGX_TONE_MAPPING",[tg]:"NEUTRAL_TONE_MAPPING",[Qm]:"CUSTOM_TONE_MAPPING"};function qA(t,e,n,i,r){const s=new jn(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new jn(e,n,{type:vi,depthBuffer:!1,stencilBuffer:!1}),a=new fn;a.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new kt([0,2,0,0,2,0],2));const l=new VE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Si(a,l),u=new wg(-1,1,1,-1,0,1);let f=null,h=null,d=!1,m,_=null,g=[],p=!1;this.setSize=function(S,v){s.setSize(S,v),o.setSize(S,v);for(let y=0;y<g.length;y++){const b=g[y];b.setSize&&b.setSize(S,v)}},this.setEffects=function(S){g=S,p=g.length>0&&g[0].isRenderPass===!0;const v=s.width,y=s.height;for(let b=0;b<g.length;b++){const T=g[b];T.setSize&&T.setSize(v,y)}},this.begin=function(S,v){if(d||S.toneMapping===$n&&g.length===0)return!1;if(_=v,v!==null){const y=v.width,b=v.height;(s.width!==y||s.height!==b)&&this.setSize(y,b)}return p===!1&&S.setRenderTarget(s),m=S.toneMapping,S.toneMapping=$n,!0},this.hasRenderPass=function(){return p},this.end=function(S,v){S.toneMapping=m,d=!0;let y=s,b=o;for(let T=0;T<g.length;T++){const w=g[T];if(w.enabled!==!1&&(w.render(S,b,y,v),w.needsSwap!==!1)){const I=y;y=b,b=I}}if(f!==S.outputColorSpace||h!==S.toneMapping){f=S.outputColorSpace,h=S.toneMapping,l.defines={},Ke.getTransfer(f)===at&&(l.defines.SRGB_TRANSFER="");const T=XA[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(_),S.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Cg=new qt,gu=new Qs(1,1),Pg=new fg,Dg=new gE,Lg=new yg,hd=[],dd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hd[r];if(s===void 0&&(s=new Float32Array(r),hd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function za(t,e){let n=dd[e];n===void 0&&(n=new Int32Array(e),dd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $A(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function jA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function YA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function ZA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;gd.set(i),t.uniformMatrix2fv(this.addr,!1,gd),Pt(n,i)}}function JA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;md.set(i),t.uniformMatrix3fv(this.addr,!1,md),Pt(n,i)}}function QA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;pd.set(i),t.uniformMatrix4fv(this.addr,!1,pd),Pt(n,i)}}function ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(gu.compareFunction=n.isReversedDepthBuffer()?Qu:Ju,s=gu):s=Cg,n.setTexture2D(e||s,r)}function cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dg,r)}function uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Lg,r)}function fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Pg,r)}function hw(t){switch(t){case 5126:return $A;case 35664:return jA;case 35665:return YA;case 35666:return KA;case 35674:return ZA;case 35675:return JA;case 35676:return QA;case 5124:case 35670:return ew;case 35667:case 35671:return tw;case 35668:case 35672:return nw;case 35669:case 35673:return iw;case 5125:return rw;case 36294:return sw;case 36295:return ow;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return lw;case 35679:case 36299:case 36307:return cw;case 35680:case 36300:case 36308:case 36293:return uw;case 36289:case 36303:case 36311:case 36292:return fw}}function dw(t,e){t.uniform1fv(this.addr,e)}function pw(t,e){const n=ps(e,this.size,2);t.uniform2fv(this.addr,n)}function mw(t,e){const n=ps(e,this.size,3);t.uniform3fv(this.addr,n)}function gw(t,e){const n=ps(e,this.size,4);t.uniform4fv(this.addr,n)}function _w(t,e){const n=ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vw(t,e){const n=ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xw(t,e){const n=ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function yw(t,e){t.uniform1iv(this.addr,e)}function Sw(t,e){t.uniform2iv(this.addr,e)}function Mw(t,e){t.uniform3iv(this.addr,e)}function Ew(t,e){t.uniform4iv(this.addr,e)}function bw(t,e){t.uniform1uiv(this.addr,e)}function Tw(t,e){t.uniform2uiv(this.addr,e)}function Aw(t,e){t.uniform3uiv(this.addr,e)}function ww(t,e){t.uniform4uiv(this.addr,e)}function Rw(t,e,n){const i=this.cache,r=e.length,s=za(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=gu:o=Cg;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function Cw(t,e,n){const i=this.cache,r=e.length,s=za(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Dg,s[o])}function Pw(t,e,n){const i=this.cache,r=e.length,s=za(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Lg,s[o])}function Dw(t,e,n){const i=this.cache,r=e.length,s=za(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Pg,s[o])}function Lw(t){switch(t){case 5126:return dw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return _w;case 35675:return vw;case 35676:return xw;case 5124:case 35670:return yw;case 35667:case 35671:return Sw;case 35668:case 35672:return Mw;case 35669:case 35673:return Ew;case 5125:return bw;case 36294:return Tw;case 36295:return Aw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Dw}}class Iw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=hw(n.type)}}class Nw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Lw(n.type)}}class Uw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const zl=/(\w+)(\])?(\[|\.)?/g;function _d(t,e){t.seq.push(e),t.map[e.id]=e}function Fw(t,e,n){const i=t.name,r=i.length;for(zl.lastIndex=0;;){const s=zl.exec(i),o=zl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_d(n,c===void 0?new Iw(a,t,e):new Nw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Uw(a),_d(n,f)),n=f}}}class na{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);Fw(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function vd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ow=37297;let Bw=0;function kw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const xd=new Xe;function Hw(t){Ke._getMatrix(xd,Ke.workingColorSpace,t);const e=`mat3( ${xd.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case va:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function yd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+kw(t.getShaderSource(e),a)}else return s}function Vw(t,e){const n=Hw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const zw={[Ym]:"Linear",[Km]:"Reinhard",[Zm]:"Cineon",[Jm]:"ACESFilmic",[eg]:"AgX",[tg]:"Neutral",[Qm]:"Custom"};function Gw(t,e){const n=zw[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $o=new $;function Ww(){Ke.getLuminanceCoefficients($o);const t=$o.x.toFixed(4),e=$o.y.toFixed(4),n=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function qw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $w(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ls(t){return t!==""}function Sd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Md(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function _u(t){return t.replace(jw,Kw)}const Yw=new Map;function Kw(t,e){let n=qe[e];if(n===void 0){const i=Yw.get(e);if(i!==void 0)n=qe[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _u(n)}const Zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(t){return t.replace(Zw,Jw)}function Jw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bd(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Qw={[Zo]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function eR(t){return Qw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tR={[xr]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE_UV"};function nR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":tR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const iR={[os]:"ENVMAP_MODE_REFRACTION"};function rR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":iR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sR={[jm]:"ENVMAP_BLENDING_MULTIPLY",[KM]:"ENVMAP_BLENDING_MIX",[ZM]:"ENVMAP_BLENDING_ADD"};function oR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":sR[t.combine]||"ENVMAP_BLENDING_NONE"}function aR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function lR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=eR(n),c=nR(n),u=rR(n),f=oR(n),h=aR(n),d=Xw(n),m=qw(s),_=r.createProgram();let g,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Ls).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Ls).join(`
`),p.length>0&&(p+=`
`)):(g=[bd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),p=[bd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$n?"#define TONE_MAPPING":"",n.toneMapping!==$n?qe.tonemapping_pars_fragment:"",n.toneMapping!==$n?Gw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Vw("linearToOutputTexel",n.outputColorSpace),Ww(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ls).join(`
`)),o=_u(o),o=Sd(o,n),o=Md(o,n),a=_u(a),a=Sd(a,n),a=Md(a,n),o=Ed(o),a=Ed(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=S+g+o,y=S+p+a,b=vd(r,r.VERTEX_SHADER,v),T=vd(r,r.FRAGMENT_SHADER,y);r.attachShader(_,b),r.attachShader(_,T),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(L){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(_)||"",O=r.getShaderInfoLog(b)||"",Y=r.getShaderInfoLog(T)||"",Q=U.trim(),k=O.trim(),V=Y.trim();let W=!0,fe=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,b,T);else{const _e=yd(r,b,"vertex"),ye=yd(r,T,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Q+`
`+_e+`
`+ye)}else Q!==""?ze("WebGLProgram: Program Info Log:",Q):(k===""||V==="")&&(fe=!1);fe&&(L.diagnostics={runnable:W,programLog:Q,vertexShader:{log:k,prefix:g},fragmentShader:{log:V,prefix:p}})}r.deleteShader(b),r.deleteShader(T),I=new na(r,_),M=$w(r,_)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,Ow)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let cR=0;class uR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fR(e),n.set(e,i)),i}}class fR{constructor(e){this.id=cR++,this.code=e,this.usedTimes=0}}function hR(t,e,n,i,r,s,o){const a=new dg,l=new uR,c=new Set,u=[],f=new Map,h=r.logarithmicDepthBuffer;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,E,L,U,O){const Y=U.fog,Q=O.geometry,k=M.isMeshStandardMaterial?U.environment:null,V=(M.isMeshStandardMaterial?n:e).get(M.envMap||k),W=V&&V.mapping===Ba?V.image.height:null,fe=m[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&ze("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const _e=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ye=_e!==void 0?_e.length:0;let Ne=0;Q.morphAttributes.position!==void 0&&(Ne=1),Q.morphAttributes.normal!==void 0&&(Ne=2),Q.morphAttributes.color!==void 0&&(Ne=3);let He,nt,Ye,ie;if(fe){const st=Vn[fe];He=st.vertexShader,nt=st.fragmentShader}else He=M.vertexShader,nt=M.fragmentShader,l.update(M),Ye=l.getVertexShaderID(M),ie=l.getFragmentShaderID(M);const F=t.getRenderTarget(),ne=t.state.buffers.depth.getReversed(),se=O.isInstancedMesh===!0,re=O.isBatchedMesh===!0,we=!!M.map,Ge=!!M.matcap,P=!!V,D=!!M.aoMap,z=!!M.lightMap,Z=!!M.bumpMap,te=!!M.normalMap,C=!!M.displacementMap,he=!!M.emissiveMap,oe=!!M.metalnessMap,ae=!!M.roughnessMap,q=M.anisotropy>0,R=M.clearcoat>0,x=M.dispersion>0,N=M.iridescence>0,G=M.sheen>0,ee=M.transmission>0,j=q&&!!M.anisotropyMap,ge=R&&!!M.clearcoatMap,ue=R&&!!M.clearcoatNormalMap,xe=R&&!!M.clearcoatRoughnessMap,Le=N&&!!M.iridescenceMap,ce=N&&!!M.iridescenceThicknessMap,ve=G&&!!M.sheenColorMap,Pe=G&&!!M.sheenRoughnessMap,be=!!M.specularMap,pe=!!M.specularColorMap,We=!!M.specularIntensityMap,B=ee&&!!M.transmissionMap,Ae=ee&&!!M.thicknessMap,me=!!M.gradientMap,Re=!!M.alphaMap,de=M.alphaTest>0,le=!!M.alphaHash,Se=!!M.extensions;let Ve=$n;M.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ve=t.toneMapping);const ht={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:He,fragmentShader:nt,defines:M.defines,customVertexShaderID:Ye,customFragmentShaderID:ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:re,batchingColor:re&&O._colorsTexture!==null,instancing:se,instancingColor:se&&O.instanceColor!==null,instancingMorph:se&&O.morphTexture!==null,outputColorSpace:F===null?t.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ls,alphaToCoverage:!!M.alphaToCoverage,map:we,matcap:Ge,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:z,bumpMap:Z,normalMap:te,displacementMap:C,emissiveMap:he,normalMapObjectSpace:te&&M.normalMapType===tE,normalMapTangentSpace:te&&M.normalMapType===eE,metalnessMap:oe,roughnessMap:ae,anisotropy:q,anisotropyMap:j,clearcoat:R,clearcoatMap:ge,clearcoatNormalMap:ue,clearcoatRoughnessMap:xe,dispersion:x,iridescence:N,iridescenceMap:Le,iridescenceThicknessMap:ce,sheen:G,sheenColorMap:ve,sheenRoughnessMap:Pe,specularMap:be,specularColorMap:pe,specularIntensityMap:We,transmission:ee,transmissionMap:B,thicknessMap:Ae,gradientMap:me,opaque:M.transparent===!1&&M.blending===Yr&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:de,alphaHash:le,combine:M.combine,mapUv:we&&_(M.map.channel),aoMapUv:D&&_(M.aoMap.channel),lightMapUv:z&&_(M.lightMap.channel),bumpMapUv:Z&&_(M.bumpMap.channel),normalMapUv:te&&_(M.normalMap.channel),displacementMapUv:C&&_(M.displacementMap.channel),emissiveMapUv:he&&_(M.emissiveMap.channel),metalnessMapUv:oe&&_(M.metalnessMap.channel),roughnessMapUv:ae&&_(M.roughnessMap.channel),anisotropyMapUv:j&&_(M.anisotropyMap.channel),clearcoatMapUv:ge&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(M.sheenRoughnessMap.channel),specularMapUv:be&&_(M.specularMap.channel),specularColorMapUv:pe&&_(M.specularColorMap.channel),specularIntensityMapUv:We&&_(M.specularIntensityMap.channel),transmissionMapUv:B&&_(M.transmissionMap.channel),thicknessMapUv:Ae&&_(M.thicknessMap.channel),alphaMapUv:Re&&_(M.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(te||q),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Q.attributes.uv&&(we||Re),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ne,skinning:O.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ve,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===at,decodeVideoTextureEmissive:he&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hi,flipSided:M.side===Qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Se&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&M.extensions.multiDraw===!0||re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)E.push(L),E.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(S(E,M),v(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function S(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const E=m[M.type];let L;if(E){const U=Vn[E];L=CE.clone(U.uniforms)}else L=M.uniforms;return L}function b(M,E){let L=f.get(E);return L!==void 0?++L.usedTimes:(L=new lR(t,E,M,s),u.push(L),f.set(E,L)),L}function T(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),f.delete(M.cacheKey),M.destroy()}}function w(M){l.remove(M)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:I}}function dR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function pR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Td(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ad(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,d,m,_,g){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:m,renderOrder:f.renderOrder,z:_,group:g},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=_,p.group=g),e++,p}function a(f,h,d,m,_,g){const p=o(f,h,d,m,_,g);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):n.push(p)}function l(f,h,d,m,_,g){const p=o(f,h,d,m,_,g);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,h){n.length>1&&n.sort(f||pR),i.length>1&&i.sort(h||Td),r.length>1&&r.sort(h||Td)}function u(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function mR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ad,t.set(i,[o])):r>=s.length?(o=new Ad,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function gR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new lt};break;case"SpotLight":n={position:new $,direction:new $,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function _R(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vR=0;function xR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yR(t){const e=new gR,n=_R(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new Mt,o=new Mt;function a(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,S=0,v=0,y=0,b=0,T=0,w=0;c.sort(xR);for(let M=0,E=c.length;M<E;M++){const L=c[M],U=L.color,O=L.intensity,Y=L.distance;let Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===as?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=U.r*O,f+=U.g*O,h+=U.b*O;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],O);w++}else if(L.isDirectionalLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,W=n.get(L);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=L.shadow.matrix,S++}i.directional[d]=k,d++}else if(L.isSpotLight){const k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(U).multiplyScalar(O),k.distance=Y,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[_]=k;const V=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,V.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[_]=V.matrix,L.castShadow){const W=n.get(L);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=Q,y++}_++}else if(L.isRectAreaLight){const k=e.get(L);k.color.copy(U).multiplyScalar(O),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=k,g++}else if(L.isPointLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const V=L.shadow,W=n.get(L);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,W.shadowCameraNear=V.camera.near,W.shadowCameraFar=V.camera.far,i.pointShadow[m]=W,i.pointShadowMap[m]=Q,i.pointShadowMatrix[m]=L.shadow.matrix,v++}i.point[m]=k,m++}else if(L.isHemisphereLight){const k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(O),k.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[p]=k,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==d||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==S||I.numPointShadows!==v||I.numSpotShadows!==y||I.numSpotMaps!==b||I.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,I.directionalLength=d,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=S,I.numPointShadows=v,I.numSpotShadows=y,I.numSpotMaps=b,I.numLightProbes=w,i.version=vR++)}function l(c,u){let f=0,h=0,d=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const v=c[p];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(v.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(v.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function wd(t){const e=new yR(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function SR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new wd(t),e.set(r,[a])):s>=o.length?(a=new wd(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const MR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ER=`uniform sampler2D shadow_pass;
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
}`,bR=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],TR=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Rd=new Mt,ws=new $,Gl=new $;function AR(t,e,n){let i=new Mg;const r=new et,s=new et,o=new St,a=new zE,l=new GE,c={},u=n.maxTextureSize,f={[Vi]:Qt,[Qt]:Vi,[hi]:hi},h=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:MR,fragmentShader:ER}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new fn;m.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Si(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let p=this.type;this.render=function(T,w,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;T.type===DM&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=Zo);const M=t.getRenderTarget(),E=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),U=t.state;U.setBlending(pi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==this.type;O&&w.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(Q=>Q.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,Q=T.length;Y<Q;Y++){const k=T[Y],V=k.shadow;if(V===void 0){ze("WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const W=V.getFrameExtents();if(r.multiply(W),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,V.mapSize.y=s.y)),V.map===null||O===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ds){if(k.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new jn(r.x,r.y,{format:as,type:vi,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),V.map.texture.name=k.name+".shadowMap",V.map.depthTexture=new Qs(r.x,r.y,Wn),V.map.depthTexture.name=k.name+".shadowMapDepth",V.map.depthTexture.format=xi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=It,V.map.depthTexture.magFilter=It}else{k.isPointLight?(V.map=new Sg(r.x),V.map.depthTexture=new HE(r.x,Jn)):(V.map=new jn(r.x,r.y),V.map.depthTexture=new Qs(r.x,r.y,Jn)),V.map.depthTexture.name=k.name+".shadowMap",V.map.depthTexture.format=xi;const _e=t.state.buffers.depth.getReversed();this.type===Zo?(V.map.depthTexture.compareFunction=_e?Qu:Ju,V.map.depthTexture.minFilter=Bt,V.map.depthTexture.magFilter=Bt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=It,V.map.depthTexture.magFilter=It)}V.camera.updateProjectionMatrix()}const fe=V.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<fe;_e++){if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,_e),t.clear();else{_e===0&&(t.setRenderTarget(V.map),t.clear());const ye=V.getViewport(_e);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),U.viewport(o)}if(k.isPointLight){const ye=V.camera,Ne=V.matrix,He=k.distance||ye.far;He!==ye.far&&(ye.far=He,ye.updateProjectionMatrix()),ws.setFromMatrixPosition(k.matrixWorld),ye.position.copy(ws),Gl.copy(ye.position),Gl.add(bR[_e]),ye.up.copy(TR[_e]),ye.lookAt(Gl),ye.updateMatrixWorld(),Ne.makeTranslation(-ws.x,-ws.y,-ws.z),Rd.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Rd,ye.coordinateSystem,ye.reversedDepth)}else V.updateMatrices(k);i=V.getFrustum(),y(w,I,V.camera,k,this.type)}V.isPointLightShadow!==!0&&this.type===Ds&&S(V,I),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(M,E,L)};function S(T,w){const I=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new jn(r.x,r.y,{format:as,type:vi})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,I,h,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,I,d,_,null)}function v(T,w,I,M){let E=null;const L=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)E=L;else if(E=I.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const U=E.uuid,O=w.uuid;let Y=c[U];Y===void 0&&(Y={},c[U]=Y);let Q=Y[O];Q===void 0&&(Q=E.clone(),Y[O]=Q,w.addEventListener("dispose",b)),E=Q}if(E.visible=w.visible,E.wireframe=w.wireframe,M===Ds?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:f[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=t.properties.get(E);U.light=I}return E}function y(T,w,I,M,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Ds)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const O=e.update(T),Y=T.material;if(Array.isArray(Y)){const Q=O.groups;for(let k=0,V=Q.length;k<V;k++){const W=Q[k],fe=Y[W.materialIndex];if(fe&&fe.visible){const _e=v(T,fe,M,E);T.onBeforeShadow(t,T,w,I,O,_e,W),t.renderBufferDirect(I,null,O,_e,T,W),T.onAfterShadow(t,T,w,I,O,_e,W)}}}else if(Y.visible){const Q=v(T,Y,M,E);T.onBeforeShadow(t,T,w,I,O,Q,null),t.renderBufferDirect(I,null,O,Q,T,null),T.onAfterShadow(t,T,w,I,O,Q,null)}}const U=T.children;for(let O=0,Y=U.length;O<Y;O++)y(U[O],w,I,M,E)}function b(T){T.target.removeEventListener("dispose",b);for(const I in c){const M=c[I],E=T.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const wR={[Tc]:Ac,[wc]:Pc,[Rc]:Dc,[ss]:Cc,[Ac]:Tc,[Pc]:wc,[Dc]:Rc,[Cc]:ss};function RR(t,e){function n(){let B=!1;const Ae=new St;let me=null;const Re=new St(0,0,0,0);return{setMask:function(de){me!==de&&!B&&(t.colorMask(de,de,de,de),me=de)},setLocked:function(de){B=de},setClear:function(de,le,Se,Ve,ht){ht===!0&&(de*=Ve,le*=Ve,Se*=Ve),Ae.set(de,le,Se,Ve),Re.equals(Ae)===!1&&(t.clearColor(de,le,Se,Ve),Re.copy(Ae))},reset:function(){B=!1,me=null,Re.set(-1,0,0,0)}}}function i(){let B=!1,Ae=!1,me=null,Re=null,de=null;return{setReversed:function(le){if(Ae!==le){const Se=e.get("EXT_clip_control");le?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),Ae=le;const Ve=de;de=null,this.setClear(Ve)}},getReversed:function(){return Ae},setTest:function(le){le?F(t.DEPTH_TEST):ne(t.DEPTH_TEST)},setMask:function(le){me!==le&&!B&&(t.depthMask(le),me=le)},setFunc:function(le){if(Ae&&(le=wR[le]),Re!==le){switch(le){case Tc:t.depthFunc(t.NEVER);break;case Ac:t.depthFunc(t.ALWAYS);break;case wc:t.depthFunc(t.LESS);break;case ss:t.depthFunc(t.LEQUAL);break;case Rc:t.depthFunc(t.EQUAL);break;case Cc:t.depthFunc(t.GEQUAL);break;case Pc:t.depthFunc(t.GREATER);break;case Dc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Re=le}},setLocked:function(le){B=le},setClear:function(le){de!==le&&(Ae&&(le=1-le),t.clearDepth(le),de=le)},reset:function(){B=!1,me=null,Re=null,de=null,Ae=!1}}}function r(){let B=!1,Ae=null,me=null,Re=null,de=null,le=null,Se=null,Ve=null,ht=null;return{setTest:function(st){B||(st?F(t.STENCIL_TEST):ne(t.STENCIL_TEST))},setMask:function(st){Ae!==st&&!B&&(t.stencilMask(st),Ae=st)},setFunc:function(st,Un,ei){(me!==st||Re!==Un||de!==ei)&&(t.stencilFunc(st,Un,ei),me=st,Re=Un,de=ei)},setOp:function(st,Un,ei){(le!==st||Se!==Un||Ve!==ei)&&(t.stencilOp(st,Un,ei),le=st,Se=Un,Ve=ei)},setLocked:function(st){B=st},setClear:function(st){ht!==st&&(t.clearStencil(st),ht=st)},reset:function(){B=!1,Ae=null,me=null,Re=null,de=null,le=null,Se=null,Ve=null,ht=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],m=null,_=!1,g=null,p=null,S=null,v=null,y=null,b=null,T=null,w=new lt(0,0,0),I=0,M=!1,E=null,L=null,U=null,O=null,Y=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,V=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=V>=1):W.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=V>=2);let fe=null,_e={};const ye=t.getParameter(t.SCISSOR_BOX),Ne=t.getParameter(t.VIEWPORT),He=new St().fromArray(ye),nt=new St().fromArray(Ne);function Ye(B,Ae,me,Re){const de=new Uint8Array(4),le=t.createTexture();t.bindTexture(B,le),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<me;Se++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(Ae,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(Ae+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return le}const ie={};ie[t.TEXTURE_2D]=Ye(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=Ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=Ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=Ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(t.DEPTH_TEST),o.setFunc(ss),Z(!1),te(Ih),F(t.CULL_FACE),D(pi);function F(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function ne(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function se(B,Ae){return f[B]!==Ae?(t.bindFramebuffer(B,Ae),f[B]=Ae,B===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Ae),B===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Ae),!0):!1}function re(B,Ae){let me=d,Re=!1;if(B){me=h.get(Ae),me===void 0&&(me=[],h.set(Ae,me));const de=B.textures;if(me.length!==de.length||me[0]!==t.COLOR_ATTACHMENT0){for(let le=0,Se=de.length;le<Se;le++)me[le]=t.COLOR_ATTACHMENT0+le;me.length=de.length,Re=!0}}else me[0]!==t.BACK&&(me[0]=t.BACK,Re=!0);Re&&t.drawBuffers(me)}function we(B){return m!==B?(t.useProgram(B),m=B,!0):!1}const Ge={[ar]:t.FUNC_ADD,[IM]:t.FUNC_SUBTRACT,[NM]:t.FUNC_REVERSE_SUBTRACT};Ge[UM]=t.MIN,Ge[FM]=t.MAX;const P={[OM]:t.ZERO,[BM]:t.ONE,[kM]:t.SRC_COLOR,[Ec]:t.SRC_ALPHA,[XM]:t.SRC_ALPHA_SATURATE,[GM]:t.DST_COLOR,[VM]:t.DST_ALPHA,[HM]:t.ONE_MINUS_SRC_COLOR,[bc]:t.ONE_MINUS_SRC_ALPHA,[WM]:t.ONE_MINUS_DST_COLOR,[zM]:t.ONE_MINUS_DST_ALPHA,[qM]:t.CONSTANT_COLOR,[$M]:t.ONE_MINUS_CONSTANT_COLOR,[jM]:t.CONSTANT_ALPHA,[YM]:t.ONE_MINUS_CONSTANT_ALPHA};function D(B,Ae,me,Re,de,le,Se,Ve,ht,st){if(B===pi){_===!0&&(ne(t.BLEND),_=!1);return}if(_===!1&&(F(t.BLEND),_=!0),B!==LM){if(B!==g||st!==M){if((p!==ar||y!==ar)&&(t.blendEquation(t.FUNC_ADD),p=ar,y=ar),st)switch(B){case Yr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mc:t.blendFunc(t.ONE,t.ONE);break;case Nh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Uh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",B);break}else switch(B){case Yr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mc:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Nh:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uh:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",B);break}S=null,v=null,b=null,T=null,w.set(0,0,0),I=0,g=B,M=st}return}de=de||Ae,le=le||me,Se=Se||Re,(Ae!==p||de!==y)&&(t.blendEquationSeparate(Ge[Ae],Ge[de]),p=Ae,y=de),(me!==S||Re!==v||le!==b||Se!==T)&&(t.blendFuncSeparate(P[me],P[Re],P[le],P[Se]),S=me,v=Re,b=le,T=Se),(Ve.equals(w)===!1||ht!==I)&&(t.blendColor(Ve.r,Ve.g,Ve.b,ht),w.copy(Ve),I=ht),g=B,M=!1}function z(B,Ae){B.side===hi?ne(t.CULL_FACE):F(t.CULL_FACE);let me=B.side===Qt;Ae&&(me=!me),Z(me),B.blending===Yr&&B.transparent===!1?D(pi):D(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Re=B.stencilWrite;a.setTest(Re),Re&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),he(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?F(t.SAMPLE_ALPHA_TO_COVERAGE):ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function Z(B){E!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),E=B)}function te(B){B!==CM?(F(t.CULL_FACE),B!==L&&(B===Ih?t.cullFace(t.BACK):B===PM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ne(t.CULL_FACE),L=B}function C(B){B!==U&&(k&&t.lineWidth(B),U=B)}function he(B,Ae,me){B?(F(t.POLYGON_OFFSET_FILL),(O!==Ae||Y!==me)&&(t.polygonOffset(Ae,me),O=Ae,Y=me)):ne(t.POLYGON_OFFSET_FILL)}function oe(B){B?F(t.SCISSOR_TEST):ne(t.SCISSOR_TEST)}function ae(B){B===void 0&&(B=t.TEXTURE0+Q-1),fe!==B&&(t.activeTexture(B),fe=B)}function q(B,Ae,me){me===void 0&&(fe===null?me=t.TEXTURE0+Q-1:me=fe);let Re=_e[me];Re===void 0&&(Re={type:void 0,texture:void 0},_e[me]=Re),(Re.type!==B||Re.texture!==Ae)&&(fe!==me&&(t.activeTexture(me),fe=me),t.bindTexture(B,Ae||ie[B]),Re.type=B,Re.texture=Ae)}function R(){const B=_e[fe];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(B){Qe("WebGLState:",B)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(B){Qe("WebGLState:",B)}}function G(){try{t.texSubImage2D(...arguments)}catch(B){Qe("WebGLState:",B)}}function ee(){try{t.texSubImage3D(...arguments)}catch(B){Qe("WebGLState:",B)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(B){Qe("WebGLState:",B)}}function ge(){try{t.compressedTexSubImage3D(...arguments)}catch(B){Qe("WebGLState:",B)}}function ue(){try{t.texStorage2D(...arguments)}catch(B){Qe("WebGLState:",B)}}function xe(){try{t.texStorage3D(...arguments)}catch(B){Qe("WebGLState:",B)}}function Le(){try{t.texImage2D(...arguments)}catch(B){Qe("WebGLState:",B)}}function ce(){try{t.texImage3D(...arguments)}catch(B){Qe("WebGLState:",B)}}function ve(B){He.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),He.copy(B))}function Pe(B){nt.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),nt.copy(B))}function be(B,Ae){let me=c.get(Ae);me===void 0&&(me=new WeakMap,c.set(Ae,me));let Re=me.get(B);Re===void 0&&(Re=t.getUniformBlockIndex(Ae,B.name),me.set(B,Re))}function pe(B,Ae){const Re=c.get(Ae).get(B);l.get(Ae)!==Re&&(t.uniformBlockBinding(Ae,Re,B.__bindingPointIndex),l.set(Ae,Re))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},fe=null,_e={},f={},h=new WeakMap,d=[],m=null,_=!1,g=null,p=null,S=null,v=null,y=null,b=null,T=null,w=new lt(0,0,0),I=0,M=!1,E=null,L=null,U=null,O=null,Y=null,He.set(0,0,t.canvas.width,t.canvas.height),nt.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:F,disable:ne,bindFramebuffer:se,drawBuffers:re,useProgram:we,setBlending:D,setMaterial:z,setFlipSided:Z,setCullFace:te,setLineWidth:C,setPolygonOffset:he,setScissorTest:oe,activeTexture:ae,bindTexture:q,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Le,texImage3D:ce,updateUBOMapping:be,uniformBlockBinding:pe,texStorage2D:ue,texStorage3D:xe,texSubImage2D:G,texSubImage3D:ee,compressedTexSubImage2D:j,compressedTexSubImage3D:ge,scissor:ve,viewport:Pe,reset:We}}function CR(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,x){return d?new OffscreenCanvas(R,x):ya("canvas")}function _(R,x,N){let G=1;const ee=q(R);if((ee.width>N||ee.height>N)&&(G=N/Math.max(ee.width,ee.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(G*ee.width),ge=Math.floor(G*ee.height);f===void 0&&(f=m(j,ge));const ue=x?m(j,ge):f;return ue.width=j,ue.height=ge,ue.getContext("2d").drawImage(R,0,0,j,ge),ze("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+ge+")."),ue}else return"data"in R&&ze("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){t.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(R,x,N,G,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=x;if(x===t.RED&&(N===t.FLOAT&&(j=t.R32F),N===t.HALF_FLOAT&&(j=t.R16F),N===t.UNSIGNED_BYTE&&(j=t.R8)),x===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.R8UI),N===t.UNSIGNED_SHORT&&(j=t.R16UI),N===t.UNSIGNED_INT&&(j=t.R32UI),N===t.BYTE&&(j=t.R8I),N===t.SHORT&&(j=t.R16I),N===t.INT&&(j=t.R32I)),x===t.RG&&(N===t.FLOAT&&(j=t.RG32F),N===t.HALF_FLOAT&&(j=t.RG16F),N===t.UNSIGNED_BYTE&&(j=t.RG8)),x===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.RG8UI),N===t.UNSIGNED_SHORT&&(j=t.RG16UI),N===t.UNSIGNED_INT&&(j=t.RG32UI),N===t.BYTE&&(j=t.RG8I),N===t.SHORT&&(j=t.RG16I),N===t.INT&&(j=t.RG32I)),x===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.RGB8UI),N===t.UNSIGNED_SHORT&&(j=t.RGB16UI),N===t.UNSIGNED_INT&&(j=t.RGB32UI),N===t.BYTE&&(j=t.RGB8I),N===t.SHORT&&(j=t.RGB16I),N===t.INT&&(j=t.RGB32I)),x===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),N===t.UNSIGNED_INT&&(j=t.RGBA32UI),N===t.BYTE&&(j=t.RGBA8I),N===t.SHORT&&(j=t.RGBA16I),N===t.INT&&(j=t.RGBA32I)),x===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),x===t.RGBA){const ge=ee?va:Ke.getTransfer(G);N===t.FLOAT&&(j=t.RGBA32F),N===t.HALF_FLOAT&&(j=t.RGBA16F),N===t.UNSIGNED_BYTE&&(j=ge===at?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(R,x){let N;return R?x===null||x===Jn||x===Zs?N=t.DEPTH24_STENCIL8:x===Wn?N=t.DEPTH32F_STENCIL8:x===Ks&&(N=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Jn||x===Zs?N=t.DEPTH_COMPONENT24:x===Wn?N=t.DEPTH_COMPONENT32F:x===Ks&&(N=t.DEPTH_COMPONENT16),N}function b(R,x){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==It&&R.minFilter!==Bt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function T(R){const x=R.target;x.removeEventListener("dispose",T),I(x),x.isVideoTexture&&u.delete(x)}function w(R){const x=R.target;x.removeEventListener("dispose",w),E(x)}function I(R){const x=i.get(R);if(x.__webglInit===void 0)return;const N=R.source,G=h.get(N);if(G){const ee=G[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(R),Object.keys(G).length===0&&h.delete(N)}i.remove(R)}function M(R){const x=i.get(R);t.deleteTexture(x.__webglTexture);const N=R.source,G=h.get(N);delete G[x.__cacheKey],o.memory.textures--}function E(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let ee=0;ee<x.__webglFramebuffer[G].length;ee++)t.deleteFramebuffer(x.__webglFramebuffer[G][ee]);else t.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)t.deleteFramebuffer(x.__webglFramebuffer[G]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=R.textures;for(let G=0,ee=N.length;G<ee;G++){const j=i.get(N[G]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(N[G])}i.remove(R)}let L=0;function U(){L=0}function O(){const R=L;return R>=r.maxTextures&&ze("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function Y(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function Q(R,x){const N=i.get(R);if(R.isVideoTexture&&oe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&N.__version!==R.version){const G=R.image;if(G===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(N,R,x);return}}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+x)}function k(R,x){const N=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){ie(N,R,x);return}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+x)}function V(R,x){const N=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){ie(N,R,x);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+x)}function W(R,x){const N=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&N.__version!==R.version){F(N,R,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+x)}const fe={[Nc]:t.REPEAT,[di]:t.CLAMP_TO_EDGE,[Uc]:t.MIRRORED_REPEAT},_e={[It]:t.NEAREST,[JM]:t.NEAREST_MIPMAP_NEAREST,[To]:t.NEAREST_MIPMAP_LINEAR,[Bt]:t.LINEAR,[dl]:t.LINEAR_MIPMAP_NEAREST,[ur]:t.LINEAR_MIPMAP_LINEAR},ye={[nE]:t.NEVER,[aE]:t.ALWAYS,[iE]:t.LESS,[Ju]:t.LEQUAL,[rE]:t.EQUAL,[Qu]:t.GEQUAL,[sE]:t.GREATER,[oE]:t.NOTEQUAL};function Ne(R,x){if(x.type===Wn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Bt||x.magFilter===dl||x.magFilter===To||x.magFilter===ur||x.minFilter===Bt||x.minFilter===dl||x.minFilter===To||x.minFilter===ur)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,fe[x.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,fe[x.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,fe[x.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,_e[x.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===It||x.minFilter!==To&&x.minFilter!==ur||x.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function He(R,x){let N=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",T));const G=x.source;let ee=h.get(G);ee===void 0&&(ee={},h.set(G,ee));const j=Y(x);if(j!==R.__cacheKey){ee[j]===void 0&&(ee[j]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ee[j].usedTimes++;const ge=ee[R.__cacheKey];ge!==void 0&&(ee[R.__cacheKey].usedTimes--,ge.usedTimes===0&&M(x)),R.__cacheKey=j,R.__webglTexture=ee[j].texture}return N}function nt(R,x,N){return Math.floor(Math.floor(R/N)/x)}function Ye(R,x,N,G){const j=R.updateRanges;if(j.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,N,G,x.data);else{j.sort((ce,ve)=>ce.start-ve.start);let ge=0;for(let ce=1;ce<j.length;ce++){const ve=j[ge],Pe=j[ce],be=ve.start+ve.count,pe=nt(Pe.start,x.width,4),We=nt(ve.start,x.width,4);Pe.start<=be+1&&pe===We&&nt(Pe.start+Pe.count-1,x.width,4)===pe?ve.count=Math.max(ve.count,Pe.start+Pe.count-ve.start):(++ge,j[ge]=Pe)}j.length=ge+1;const ue=t.getParameter(t.UNPACK_ROW_LENGTH),xe=t.getParameter(t.UNPACK_SKIP_PIXELS),Le=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let ce=0,ve=j.length;ce<ve;ce++){const Pe=j[ce],be=Math.floor(Pe.start/4),pe=Math.ceil(Pe.count/4),We=be%x.width,B=Math.floor(be/x.width),Ae=pe,me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,We),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,We,B,Ae,me,N,G,x.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ue),t.pixelStorei(t.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(t.UNPACK_SKIP_ROWS,Le)}}function ie(R,x,N){let G=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=t.TEXTURE_3D);const ee=He(R,x),j=x.source;n.bindTexture(G,R.__webglTexture,t.TEXTURE0+N);const ge=i.get(j);if(j.version!==ge.__version||ee===!0){n.activeTexture(t.TEXTURE0+N);const ue=Ke.getPrimaries(Ke.workingColorSpace),xe=x.colorSpace===Oi?null:Ke.getPrimaries(x.colorSpace),Le=x.colorSpace===Oi||ue===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ce=_(x.image,!1,r.maxTextureSize);ce=ae(x,ce);const ve=s.convert(x.format,x.colorSpace),Pe=s.convert(x.type);let be=v(x.internalFormat,ve,Pe,x.colorSpace,x.isVideoTexture);Ne(G,x);let pe;const We=x.mipmaps,B=x.isVideoTexture!==!0,Ae=ge.__version===void 0||ee===!0,me=j.dataReady,Re=b(x,ce);if(x.isDepthTexture)be=y(x.format===fr,x.type),Ae&&(B?n.texStorage2D(t.TEXTURE_2D,1,be,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,be,ce.width,ce.height,0,ve,Pe,null));else if(x.isDataTexture)if(We.length>0){B&&Ae&&n.texStorage2D(t.TEXTURE_2D,Re,be,We[0].width,We[0].height);for(let de=0,le=We.length;de<le;de++)pe=We[de],B?me&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,pe.width,pe.height,ve,Pe,pe.data):n.texImage2D(t.TEXTURE_2D,de,be,pe.width,pe.height,0,ve,Pe,pe.data);x.generateMipmaps=!1}else B?(Ae&&n.texStorage2D(t.TEXTURE_2D,Re,be,ce.width,ce.height),me&&Ye(x,ce,ve,Pe)):n.texImage2D(t.TEXTURE_2D,0,be,ce.width,ce.height,0,ve,Pe,ce.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){B&&Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,be,We[0].width,We[0].height,ce.depth);for(let de=0,le=We.length;de<le;de++)if(pe=We[de],x.format!==Pn)if(ve!==null)if(B){if(me)if(x.layerUpdates.size>0){const Se=sd(pe.width,pe.height,x.format,x.type);for(const Ve of x.layerUpdates){const ht=pe.data.subarray(Ve*Se/pe.data.BYTES_PER_ELEMENT,(Ve+1)*Se/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,Ve,pe.width,pe.height,1,ve,ht)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,pe.width,pe.height,ce.depth,ve,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,be,pe.width,pe.height,ce.depth,0,pe.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,pe.width,pe.height,ce.depth,ve,Pe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,be,pe.width,pe.height,ce.depth,0,ve,Pe,pe.data)}else{B&&Ae&&n.texStorage2D(t.TEXTURE_2D,Re,be,We[0].width,We[0].height);for(let de=0,le=We.length;de<le;de++)pe=We[de],x.format!==Pn?ve!==null?B?me&&n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,pe.width,pe.height,ve,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,de,be,pe.width,pe.height,0,pe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?me&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,pe.width,pe.height,ve,Pe,pe.data):n.texImage2D(t.TEXTURE_2D,de,be,pe.width,pe.height,0,ve,Pe,pe.data)}else if(x.isDataArrayTexture)if(B){if(Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,be,ce.width,ce.height,ce.depth),me)if(x.layerUpdates.size>0){const de=sd(ce.width,ce.height,x.format,x.type);for(const le of x.layerUpdates){const Se=ce.data.subarray(le*de/ce.data.BYTES_PER_ELEMENT,(le+1)*de/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,ce.width,ce.height,1,ve,Pe,Se)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ve,Pe,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ce.width,ce.height,ce.depth,0,ve,Pe,ce.data);else if(x.isData3DTexture)B?(Ae&&n.texStorage3D(t.TEXTURE_3D,Re,be,ce.width,ce.height,ce.depth),me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ve,Pe,ce.data)):n.texImage3D(t.TEXTURE_3D,0,be,ce.width,ce.height,ce.depth,0,ve,Pe,ce.data);else if(x.isFramebufferTexture){if(Ae)if(B)n.texStorage2D(t.TEXTURE_2D,Re,be,ce.width,ce.height);else{let de=ce.width,le=ce.height;for(let Se=0;Se<Re;Se++)n.texImage2D(t.TEXTURE_2D,Se,be,de,le,0,ve,Pe,null),de>>=1,le>>=1}}else if(We.length>0){if(B&&Ae){const de=q(We[0]);n.texStorage2D(t.TEXTURE_2D,Re,be,de.width,de.height)}for(let de=0,le=We.length;de<le;de++)pe=We[de],B?me&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ve,Pe,pe):n.texImage2D(t.TEXTURE_2D,de,be,ve,Pe,pe);x.generateMipmaps=!1}else if(B){if(Ae){const de=q(ce);n.texStorage2D(t.TEXTURE_2D,Re,be,de.width,de.height)}me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Pe,ce)}else n.texImage2D(t.TEXTURE_2D,0,be,ve,Pe,ce);g(x)&&p(G),ge.__version=j.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function F(R,x,N){if(x.image.length!==6)return;const G=He(R,x),ee=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+N);const j=i.get(ee);if(ee.version!==j.__version||G===!0){n.activeTexture(t.TEXTURE0+N);const ge=Ke.getPrimaries(Ke.workingColorSpace),ue=x.colorSpace===Oi?null:Ke.getPrimaries(x.colorSpace),xe=x.colorSpace===Oi||ge===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Le=x.isCompressedTexture||x.image[0].isCompressedTexture,ce=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let le=0;le<6;le++)!Le&&!ce?ve[le]=_(x.image[le],!0,r.maxCubemapSize):ve[le]=ce?x.image[le].image:x.image[le],ve[le]=ae(x,ve[le]);const Pe=ve[0],be=s.convert(x.format,x.colorSpace),pe=s.convert(x.type),We=v(x.internalFormat,be,pe,x.colorSpace),B=x.isVideoTexture!==!0,Ae=j.__version===void 0||G===!0,me=ee.dataReady;let Re=b(x,Pe);Ne(t.TEXTURE_CUBE_MAP,x);let de;if(Le){B&&Ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,We,Pe.width,Pe.height);for(let le=0;le<6;le++){de=ve[le].mipmaps;for(let Se=0;Se<de.length;Se++){const Ve=de[Se];x.format!==Pn?be!==null?B?me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,Ve.width,Ve.height,be,Ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,We,Ve.width,Ve.height,0,Ve.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,Ve.width,Ve.height,be,pe,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,We,Ve.width,Ve.height,0,be,pe,Ve.data)}}}else{if(de=x.mipmaps,B&&Ae){de.length>0&&Re++;const le=q(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,We,le.width,le.height)}for(let le=0;le<6;le++)if(ce){B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ve[le].width,ve[le].height,be,pe,ve[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,ve[le].width,ve[le].height,0,be,pe,ve[le].data);for(let Se=0;Se<de.length;Se++){const ht=de[Se].image[le].image;B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,ht.width,ht.height,be,pe,ht.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,We,ht.width,ht.height,0,be,pe,ht.data)}}else{B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be,pe,ve[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,be,pe,ve[le]);for(let Se=0;Se<de.length;Se++){const Ve=de[Se];B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,be,pe,Ve.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,We,be,pe,Ve.image[le])}}}g(x)&&p(t.TEXTURE_CUBE_MAP),j.__version=ee.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ne(R,x,N,G,ee,j){const ge=s.convert(N.format,N.colorSpace),ue=s.convert(N.type),xe=v(N.internalFormat,ge,ue,N.colorSpace),Le=i.get(x),ce=i.get(N);if(ce.__renderTarget=x,!Le.__hasExternalTextures){const ve=Math.max(1,x.width>>j),Pe=Math.max(1,x.height>>j);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,j,xe,ve,Pe,x.depth,0,ge,ue,null):n.texImage2D(ee,j,xe,ve,Pe,0,ge,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),he(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,ee,ce.__webglTexture,0,C(x)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,ee,ce.__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(R,x,N){if(t.bindRenderbuffer(t.RENDERBUFFER,R),x.depthBuffer){const G=x.depthTexture,ee=G&&G.isDepthTexture?G.type:null,j=y(x.stencilBuffer,ee),ge=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;he(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(x),j,x.width,x.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(x),j,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,j,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,R)}else{const G=x.textures;for(let ee=0;ee<G.length;ee++){const j=G[ee],ge=s.convert(j.format,j.colorSpace),ue=s.convert(j.type),xe=v(j.internalFormat,ge,ue,j.colorSpace);he(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(x),xe,x.width,x.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(x),xe,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,xe,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(R,x,N){const G=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(x.depthTexture);if(ee.__renderTarget=x,(!ee.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,x.depthTexture.addEventListener("dispose",T)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,x.depthTexture);const Le=s.convert(x.depthTexture.format),ce=s.convert(x.depthTexture.type);let ve;x.depthTexture.format===xi?ve=t.DEPTH_COMPONENT24:x.depthTexture.format===fr&&(ve=t.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ve,x.width,x.height,0,Le,ce,null)}}else Q(x.depthTexture,0);const j=ee.__webglTexture,ge=C(x),ue=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,xe=x.depthTexture.format===fr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===xi)he(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,xe,ue,j,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,xe,ue,j,0);else if(x.depthTexture.format===fr)he(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,xe,ue,j,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,xe,ue,j,0);else throw new Error("Unknown depthTexture format")}function we(R){const x=i.get(R),N=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const G=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",ee)};G.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=G}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let G=0;G<6;G++)re(x.__webglFramebuffer[G],R,G);else{const G=R.texture.mipmaps;G&&G.length>0?re(x.__webglFramebuffer[0],R,0):re(x.__webglFramebuffer,R,0)}else if(N){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=t.createRenderbuffer(),se(x.__webglDepthbuffer[G],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,j)}}else{const G=R.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),se(x.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,j)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(R,x,N){const G=i.get(R);x!==void 0&&ne(G.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&we(R)}function P(R){const x=R.texture,N=i.get(R),G=i.get(x);R.addEventListener("dispose",w);const ee=R.textures,j=R.isWebGLCubeRenderTarget===!0,ge=ee.length>1;if(ge||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=x.version,o.memory.textures++),j){N.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ue]=[];for(let xe=0;xe<x.mipmaps.length;xe++)N.__webglFramebuffer[ue][xe]=t.createFramebuffer()}else N.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)N.__webglFramebuffer[ue]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ge)for(let ue=0,xe=ee.length;ue<xe;ue++){const Le=i.get(ee[ue]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&he(R)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const xe=ee[ue];N.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const Le=s.convert(xe.format,xe.colorSpace),ce=s.convert(xe.type),ve=v(xe.internalFormat,Le,ce,xe.colorSpace,R.isXRRenderTarget===!0),Pe=C(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,ve,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),se(N.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)ne(N.__webglFramebuffer[ue][xe],R,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else ne(N.__webglFramebuffer[ue],R,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ge){for(let ue=0,xe=ee.length;ue<xe;ue++){const Le=ee[ue],ce=i.get(Le);let ve=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,ce.__webglTexture),Ne(ve,Le),ne(N.__webglFramebuffer,R,Le,t.COLOR_ATTACHMENT0+ue,ve,0),g(Le)&&p(ve)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,G.__webglTexture),Ne(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)ne(N.__webglFramebuffer[xe],R,x,t.COLOR_ATTACHMENT0,ue,xe);else ne(N.__webglFramebuffer,R,x,t.COLOR_ATTACHMENT0,ue,0);g(x)&&p(ue),n.unbindTexture()}R.depthBuffer&&we(R)}function D(R){const x=R.textures;for(let N=0,G=x.length;N<G;N++){const ee=x[N];if(g(ee)){const j=S(R),ge=i.get(ee).__webglTexture;n.bindTexture(j,ge),p(j),n.unbindTexture()}}}const z=[],Z=[];function te(R){if(R.samples>0){if(he(R)===!1){const x=R.textures,N=R.width,G=R.height;let ee=t.COLOR_BUFFER_BIT;const j=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(R),ue=x.length>1;if(ue)for(let Le=0;Le<x.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const xe=R.texture.mipmaps;xe&&xe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Le=0;Le<x.length;Le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Le]);const ce=i.get(x[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,N,G,0,0,N,G,ee,t.NEAREST),l===!0&&(z.length=0,Z.length=0,z.push(t.COLOR_ATTACHMENT0+Le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(z.push(j),Z.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,z))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let Le=0;Le<x.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Le]);const ce=i.get(x[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function C(R){return Math.min(r.maxSamples,R.samples)}function he(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function oe(R){const x=o.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function ae(R,x){const N=R.colorSpace,G=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||N!==ls&&N!==Oi&&(Ke.getTransfer(N)===at?(G!==Pn||ee!==xn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",N)),x}function q(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=Q,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=W,this.rebindTextures=Ge,this.setupRenderTarget=P,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function PR(t,e){function n(i,r=Oi){let s;const o=Ke.getTransfer(r);if(i===xn)return t.UNSIGNED_BYTE;if(i===$u)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ju)return t.UNSIGNED_SHORT_5_5_5_1;if(i===sg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===og)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ig)return t.BYTE;if(i===rg)return t.SHORT;if(i===Ks)return t.UNSIGNED_SHORT;if(i===qu)return t.INT;if(i===Jn)return t.UNSIGNED_INT;if(i===Wn)return t.FLOAT;if(i===vi)return t.HALF_FLOAT;if(i===ag)return t.ALPHA;if(i===lg)return t.RGB;if(i===Pn)return t.RGBA;if(i===xi)return t.DEPTH_COMPONENT;if(i===fr)return t.DEPTH_STENCIL;if(i===cg)return t.RED;if(i===Yu)return t.RED_INTEGER;if(i===as)return t.RG;if(i===Ku)return t.RG_INTEGER;if(i===Zu)return t.RGBA_INTEGER;if(i===Jo||i===Qo||i===ea||i===ta)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fc||i===Oc||i===Bc||i===kc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hc||i===Vc||i===zc||i===Gc||i===Wc||i===Xc||i===qc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hc||i===Vc)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gc)return s.COMPRESSED_R11_EAC;if(i===Wc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Xc)return s.COMPRESSED_RG11_EAC;if(i===qc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$c||i===jc||i===Yc||i===Kc||i===Zc||i===Jc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===ou)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$c)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===iu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ru)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===su)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ou)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===au||i===lu||i===cu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===au)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uu||i===fu||i===hu||i===du)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===uu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===du)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const DR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LR=`
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

}`;class IR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new bg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qn({vertexShader:DR,fragmentShader:LR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Si(new Ha(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NR extends ds{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",g=new IR,p={},S=n.getContextAttributes();let v=null,y=null;const b=[],T=[],w=new et;let I=null;const M=new vn;M.viewport=new St;const E=new vn;E.viewport=new St;const L=[M,E],U=new WE;let O=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let F=b[ie];return F===void 0&&(F=new Fl,b[ie]=F),F.getTargetRaySpace()},this.getControllerGrip=function(ie){let F=b[ie];return F===void 0&&(F=new Fl,b[ie]=F),F.getGripSpace()},this.getHand=function(ie){let F=b[ie];return F===void 0&&(F=new Fl,b[ie]=F),F.getHandSpace()};function Q(ie){const F=T.indexOf(ie.inputSource);if(F===-1)return;const ne=b[F];ne!==void 0&&(ne.update(ie.inputSource,ie.frame,c||o),ne.dispatchEvent({type:ie.type,data:ie.inputSource}))}function k(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",V);for(let ie=0;ie<b.length;ie++){const F=T[ie];F!==null&&(T[ie]=null,b[ie].disconnect(F))}O=null,Y=null,g.reset();for(const ie in p)delete p[ie];e.setRenderTarget(v),d=null,h=null,f=null,r=null,y=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",k),r.addEventListener("inputsourceschange",V),S.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,se=null,re=null;S.depth&&(re=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=S.stencil?fr:xi,se=S.stencil?Zs:Jn);const we={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(we),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new jn(h.textureWidth,h.textureHeight,{format:Pn,type:xn,depthTexture:new Qs(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ne={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new jn(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(ie){for(let F=0;F<ie.removed.length;F++){const ne=ie.removed[F],se=T.indexOf(ne);se>=0&&(T[se]=null,b[se].disconnect(ne))}for(let F=0;F<ie.added.length;F++){const ne=ie.added[F];let se=T.indexOf(ne);if(se===-1){for(let we=0;we<b.length;we++)if(we>=T.length){T.push(ne),se=we;break}else if(T[we]===null){T[we]=ne,se=we;break}if(se===-1)break}const re=b[se];re&&re.connect(ne)}}const W=new $,fe=new $;function _e(ie,F,ne){W.setFromMatrixPosition(F.matrixWorld),fe.setFromMatrixPosition(ne.matrixWorld);const se=W.distanceTo(fe),re=F.projectionMatrix.elements,we=ne.projectionMatrix.elements,Ge=re[14]/(re[10]-1),P=re[14]/(re[10]+1),D=(re[9]+1)/re[5],z=(re[9]-1)/re[5],Z=(re[8]-1)/re[0],te=(we[8]+1)/we[0],C=Ge*Z,he=Ge*te,oe=se/(-Z+te),ae=oe*-Z;if(F.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ae),ie.translateZ(oe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),re[10]===-1)ie.projectionMatrix.copy(F.projectionMatrix),ie.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const q=Ge+oe,R=P+oe,x=C-ae,N=he+(se-ae),G=D*P/R*q,ee=z*P/R*q;ie.projectionMatrix.makePerspective(x,N,G,ee,q,R),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ye(ie,F){F===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(F.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let F=ie.near,ne=ie.far;g.texture!==null&&(g.depthNear>0&&(F=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),U.near=E.near=M.near=F,U.far=E.far=M.far=ne,(O!==U.near||Y!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,Y=U.far),U.layers.mask=ie.layers.mask|6,M.layers.mask=U.layers.mask&3,E.layers.mask=U.layers.mask&5;const se=ie.parent,re=U.cameras;ye(U,se);for(let we=0;we<re.length;we++)ye(re[we],se);re.length===2?_e(U,M,E):U.projectionMatrix.copy(M.projectionMatrix),Ne(ie,U,se)};function Ne(ie,F,ne){ne===null?ie.matrix.copy(F.matrixWorld):(ie.matrix.copy(ne.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(F.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(F.projectionMatrix),ie.projectionMatrixInverse.copy(F.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=pu*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(ie){return p[ie]};let He=null;function nt(ie,F){if(u=F.getViewerPose(c||o),m=F,u!==null){const ne=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let se=!1;ne.length!==U.cameras.length&&(U.cameras.length=0,se=!0);for(let P=0;P<ne.length;P++){const D=ne[P];let z=null;if(d!==null)z=d.getViewport(D);else{const te=f.getViewSubImage(h,D);z=te.viewport,P===0&&(e.setRenderTargetTextures(y,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(y))}let Z=L[P];Z===void 0&&(Z=new vn,Z.layers.enable(P),Z.viewport=new St,L[P]=Z),Z.matrix.fromArray(D.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(D.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(z.x,z.y,z.width,z.height),P===0&&(U.matrix.copy(Z.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),se===!0&&U.cameras.push(Z)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const P=f.getDepthInformation(ne[0]);P&&P.isValid&&P.texture&&g.init(P,r.renderState)}if(re&&re.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let P=0;P<ne.length;P++){const D=ne[P].camera;if(D){let z=p[D];z||(z=new bg,p[D]=z);const Z=f.getCameraImage(D);z.sourceTexture=Z}}}}for(let ne=0;ne<b.length;ne++){const se=T[ne],re=b[ne];se!==null&&re!==void 0&&re.update(se,F,c||o)}He&&He(ie,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),m=null}const Ye=new Rg;Ye.setAnimationLoop(nt),this.setAnimationLoop=function(ie){He=ie},this.dispose=function(){}}}const nr=new yi,UR=new Mt;function FR(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,vg(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,S,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,S,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=e.get(p),v=S.envMap,y=S.envMapRotation;v&&(g.envMap.value=v,nr.copy(y),nr.x*=-1,nr.y*=-1,nr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),g.envMapRotation.value.setFromMatrix4(UR.makeRotationFromEuler(nr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=v*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const S=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function OR(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const y=v.program;i.uniformBlockBinding(S,y)}function c(S,v){let y=r[S.id];y===void 0&&(m(S),y=u(S),r[S.id]=y,S.addEventListener("dispose",g));const b=v.program;i.updateUBOMapping(S,b);const T=e.render.frame;s[S.id]!==T&&(h(S),s[S.id]=T)}function u(S){const v=f();S.__bindingPointIndex=v;const y=t.createBuffer(),b=S.__size,T=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const v=r[S.id],y=S.uniforms,b=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,w=y.length;T<w;T++){const I=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,E=I.length;M<E;M++){const L=I[M];if(d(L,T,M,b)===!0){const U=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let Q=0;Q<O.length;Q++){const k=O[Q],V=_(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,U+Y,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,Y),Y+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(S,v,y,b){const T=S.value,w=v+"_"+y;if(b[w]===void 0)return typeof T=="number"||typeof T=="boolean"?b[w]=T:b[w]=T.clone(),!0;{const I=b[w];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return b[w]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(S){const v=S.uniforms;let y=0;const b=16;for(let w=0,I=v.length;w<I;w++){const M=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,L=M.length;E<L;E++){const U=M[E],O=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,Q=O.length;Y<Q;Y++){const k=O[Y],V=_(k),W=y%b,fe=W%V.boundary,_e=W+fe;y+=fe,_e!==0&&b-_e<V.storage&&(y+=b-_e),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=V.storage}}}const T=y%b;return T>0&&(y+=b-T),S.__size=y,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ze("WebGLRenderer: Unsupported uniform value type.",S),v}function g(S){const v=S.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}const BR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function kR(){return Fn===null&&(Fn=new UE(BR,16,16,as,vi),Fn.name="DFG_LUT",Fn.minFilter=Bt,Fn.magFilter=Bt,Fn.wrapS=di,Fn.wrapT=di,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class HR{constructor(e={}){const{canvas:n=lE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=xn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=d,g=new Set([Zu,Ku,Yu]),p=new Set([xn,Jn,Ks,Zs,$u,ju]),S=new Uint32Array(4),v=new Int32Array(4);let y=null,b=null;const T=[],w=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let E=!1;this._outputColorSpace=gn;let L=0,U=0,O=null,Y=-1,Q=null;const k=new St,V=new St;let W=null;const fe=new lt(0);let _e=0,ye=n.width,Ne=n.height,He=1,nt=null,Ye=null;const ie=new St(0,0,ye,Ne),F=new St(0,0,ye,Ne);let ne=!1;const se=new Mg;let re=!1,we=!1;const Ge=new Mt,P=new $,D=new St,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function te(){return O===null?He:1}let C=i;function he(A,H){return n.getContext(A,H)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xu}`),n.addEventListener("webglcontextlost",Ve,!1),n.addEventListener("webglcontextrestored",ht,!1),n.addEventListener("webglcontextcreationerror",st,!1),C===null){const H="webgl2";if(C=he(H,A),C===null)throw he(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Qe("WebGLRenderer: "+A.message),A}let oe,ae,q,R,x,N,G,ee,j,ge,ue,xe,Le,ce,ve,Pe,be,pe,We,B,Ae,me,Re,de;function le(){oe=new kA(C),oe.init(),me=new PR(C,oe),ae=new PA(C,oe,e,me),q=new RR(C,oe),ae.reversedDepthBuffer&&h&&q.buffers.depth.setReversed(!0),R=new zA(C),x=new dR,N=new CR(C,oe,q,x,ae,me,R),G=new LA(M),ee=new BA(M),j=new qE(C),Re=new RA(C,j),ge=new HA(C,j,R,Re),ue=new WA(C,ge,j,R),We=new GA(C,ae,N),Pe=new DA(x),xe=new hR(M,G,ee,oe,ae,Re,Pe),Le=new FR(M,x),ce=new mR,ve=new SR(oe),pe=new wA(M,G,ee,q,ue,m,l),be=new AR(M,ue,ae),de=new OR(C,R,ae,q),B=new CA(C,oe,R),Ae=new VA(C,oe,R),R.programs=xe.programs,M.capabilities=ae,M.extensions=oe,M.properties=x,M.renderLists=ce,M.shadowMap=be,M.state=q,M.info=R}le(),_!==xn&&(I=new qA(_,n.width,n.height,r,s));const Se=new NR(M,C);this.xr=Se,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const A=oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(A){A!==void 0&&(He=A,this.setSize(ye,Ne,!1))},this.getSize=function(A){return A.set(ye,Ne)},this.setSize=function(A,H,J=!0){if(Se.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=A,Ne=H,n.width=Math.floor(A*He),n.height=Math.floor(H*He),J===!0&&(n.style.width=A+"px",n.style.height=H+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(ye*He,Ne*He).floor()},this.setDrawingBufferSize=function(A,H,J){ye=A,Ne=H,He=J,n.width=Math.floor(A*J),n.height=Math.floor(H*J),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(_===xn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(ie)},this.setViewport=function(A,H,J,K){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,H,J,K),q.viewport(k.copy(ie).multiplyScalar(He).round())},this.getScissor=function(A){return A.copy(F)},this.setScissor=function(A,H,J,K){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,H,J,K),q.scissor(V.copy(F).multiplyScalar(He).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(A){q.setScissorTest(ne=A)},this.setOpaqueSort=function(A){nt=A},this.setTransparentSort=function(A){Ye=A},this.getClearColor=function(A){return A.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,J=!0){let K=0;if(A){let X=!1;if(O!==null){const Me=O.texture.format;X=g.has(Me)}if(X){const Me=O.texture.type,Ce=p.has(Me),Te=pe.getClearColor(),De=pe.getClearAlpha(),Ie=Te.r,Be=Te.g,Ue=Te.b;Ce?(S[0]=Ie,S[1]=Be,S[2]=Ue,S[3]=De,C.clearBufferuiv(C.COLOR,0,S)):(v[0]=Ie,v[1]=Be,v[2]=Ue,v[3]=De,C.clearBufferiv(C.COLOR,0,v))}else K|=C.COLOR_BUFFER_BIT}H&&(K|=C.DEPTH_BUFFER_BIT),J&&(K|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ve,!1),n.removeEventListener("webglcontextrestored",ht,!1),n.removeEventListener("webglcontextcreationerror",st,!1),pe.dispose(),ce.dispose(),ve.dispose(),x.dispose(),G.dispose(),ee.dispose(),ue.dispose(),Re.dispose(),de.dispose(),xe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",rf),Se.removeEventListener("sessionend",sf),Wi.stop()};function Ve(A){A.preventDefault(),Hh("WebGLRenderer: Context Lost."),E=!0}function ht(){Hh("WebGLRenderer: Context Restored."),E=!1;const A=R.autoReset,H=be.enabled,J=be.autoUpdate,K=be.needsUpdate,X=be.type;le(),R.autoReset=A,be.enabled=H,be.autoUpdate=J,be.needsUpdate=K,be.type=X}function st(A){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Un(A){const H=A.target;H.removeEventListener("dispose",Un),ei(H)}function ei(A){Ng(A),x.remove(A)}function Ng(A){const H=x.get(A).programs;H!==void 0&&(H.forEach(function(J){xe.releaseProgram(J)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,J,K,X,Me){H===null&&(H=z);const Ce=X.isMesh&&X.matrixWorld.determinant()<0,Te=Fg(A,H,J,K,X);q.setMaterial(K,Ce);let De=J.index,Ie=1;if(K.wireframe===!0){if(De=ge.getWireframeAttribute(J),De===void 0)return;Ie=2}const Be=J.drawRange,Ue=J.attributes.position;let $e=Be.start*Ie,ct=(Be.start+Be.count)*Ie;Me!==null&&($e=Math.max($e,Me.start*Ie),ct=Math.min(ct,(Me.start+Me.count)*Ie)),De!==null?($e=Math.max($e,0),ct=Math.min(ct,De.count)):Ue!=null&&($e=Math.max($e,0),ct=Math.min(ct,Ue.count));const _t=ct-$e;if(_t<0||_t===1/0)return;Re.setup(X,K,Te,J,De);let vt,ut=B;if(De!==null&&(vt=j.get(De),ut=Ae,ut.setIndex(vt)),X.isMesh)K.wireframe===!0?(q.setLineWidth(K.wireframeLinewidth*te()),ut.setMode(C.LINES)):ut.setMode(C.TRIANGLES);else if(X.isLine){let Fe=K.linewidth;Fe===void 0&&(Fe=1),q.setLineWidth(Fe*te()),X.isLineSegments?ut.setMode(C.LINES):X.isLineLoop?ut.setMode(C.LINE_LOOP):ut.setMode(C.LINE_STRIP)}else X.isPoints?ut.setMode(C.POINTS):X.isSprite&&ut.setMode(C.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Js("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ut.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Fe=X._multiDrawStarts,ot=X._multiDrawCounts,Ze=X._multiDrawCount,tn=De?j.get(De).bytesPerElement:1,Er=x.get(K).currentProgram.getUniforms();for(let nn=0;nn<Ze;nn++)Er.setValue(C,"_gl_DrawID",nn),ut.render(Fe[nn]/tn,ot[nn])}else if(X.isInstancedMesh)ut.renderInstances($e,_t,X.count);else if(J.isInstancedBufferGeometry){const Fe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ot=Math.min(J.instanceCount,Fe);ut.renderInstances($e,_t,ot)}else ut.render($e,_t)};function nf(A,H,J){A.transparent===!0&&A.side===hi&&A.forceSinglePass===!1?(A.side=Qt,A.needsUpdate=!0,ho(A,H,J),A.side=Vi,A.needsUpdate=!0,ho(A,H,J),A.side=hi):ho(A,H,J)}this.compile=function(A,H,J=null){J===null&&(J=A),b=ve.get(J),b.init(H),w.push(b),J.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),A!==J&&A.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights();const K=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Me=X.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const Te=Me[Ce];nf(Te,J,X),K.add(Te)}else nf(Me,J,X),K.add(Me)}),b=w.pop(),K},this.compileAsync=function(A,H,J=null){const K=this.compile(A,H,J);return new Promise(X=>{function Me(){if(K.forEach(function(Ce){x.get(Ce).currentProgram.isReady()&&K.delete(Ce)}),K.size===0){X(A);return}setTimeout(Me,10)}oe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ga=null;function Ug(A){Ga&&Ga(A)}function rf(){Wi.stop()}function sf(){Wi.start()}const Wi=new Rg;Wi.setAnimationLoop(Ug),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(A){Ga=A,Se.setAnimationLoop(A),A===null?Wi.stop():Wi.start()},Se.addEventListener("sessionstart",rf),Se.addEventListener("sessionend",sf),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const J=Se.enabled===!0&&Se.isPresenting===!0,K=I!==null&&(O===null||J)&&I.begin(M,O);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(H),H=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,H,O),b=ve.get(A,w.length),b.init(H),w.push(b),Ge.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),se.setFromProjectionMatrix(Ge,Xn,H.reversedDepth),we=this.localClippingEnabled,re=Pe.init(this.clippingPlanes,we),y=ce.get(A,T.length),y.init(),T.push(y),Se.enabled===!0&&Se.isPresenting===!0){const Ce=M.xr.getDepthSensingMesh();Ce!==null&&Wa(Ce,H,-1/0,M.sortObjects)}Wa(A,H,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(nt,Ye),Z=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Z&&pe.addToRenderList(y,A),this.info.render.frame++,re===!0&&Pe.beginShadows();const X=b.state.shadowsArray;if(be.render(X,A,H),re===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&I.hasRenderPass())===!1){const Ce=y.opaque,Te=y.transmissive;if(b.setupLights(),H.isArrayCamera){const De=H.cameras;if(Te.length>0)for(let Ie=0,Be=De.length;Ie<Be;Ie++){const Ue=De[Ie];af(Ce,Te,A,Ue)}Z&&pe.render(A);for(let Ie=0,Be=De.length;Ie<Be;Ie++){const Ue=De[Ie];of(y,A,Ue,Ue.viewport)}}else Te.length>0&&af(Ce,Te,A,H),Z&&pe.render(A),of(y,A,H)}O!==null&&U===0&&(N.updateMultisampleRenderTarget(O),N.updateRenderTargetMipmap(O)),K&&I.end(M),A.isScene===!0&&A.onAfterRender(M,A,H),Re.resetDefaultState(),Y=-1,Q=null,w.pop(),w.length>0?(b=w[w.length-1],re===!0&&Pe.setGlobalState(M.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function Wa(A,H,J,K){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||se.intersectsSprite(A)){K&&D.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ge);const Ce=ue.update(A),Te=A.material;Te.visible&&y.push(A,Ce,Te,J,D.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||se.intersectsObject(A))){const Ce=ue.update(A),Te=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),D.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),D.copy(Ce.boundingSphere.center)),D.applyMatrix4(A.matrixWorld).applyMatrix4(Ge)),Array.isArray(Te)){const De=Ce.groups;for(let Ie=0,Be=De.length;Ie<Be;Ie++){const Ue=De[Ie],$e=Te[Ue.materialIndex];$e&&$e.visible&&y.push(A,Ce,$e,J,D.z,Ue)}}else Te.visible&&y.push(A,Ce,Te,J,D.z,null)}}const Me=A.children;for(let Ce=0,Te=Me.length;Ce<Te;Ce++)Wa(Me[Ce],H,J,K)}function of(A,H,J,K){const{opaque:X,transmissive:Me,transparent:Ce}=A;b.setupLightsView(J),re===!0&&Pe.setGlobalState(M.clippingPlanes,J),K&&q.viewport(k.copy(K)),X.length>0&&fo(X,H,J),Me.length>0&&fo(Me,H,J),Ce.length>0&&fo(Ce,H,J),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function af(A,H,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[K.id]===void 0){const $e=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[K.id]=new jn(1,1,{generateMipmaps:!0,type:$e?vi:xn,minFilter:ur,samples:ae.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const Me=b.state.transmissionRenderTarget[K.id],Ce=K.viewport||k;Me.setSize(Ce.z*M.transmissionResolutionScale,Ce.w*M.transmissionResolutionScale);const Te=M.getRenderTarget(),De=M.getActiveCubeFace(),Ie=M.getActiveMipmapLevel();M.setRenderTarget(Me),M.getClearColor(fe),_e=M.getClearAlpha(),_e<1&&M.setClearColor(16777215,.5),M.clear(),Z&&pe.render(J);const Be=M.toneMapping;M.toneMapping=$n;const Ue=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),b.setupLightsView(K),re===!0&&Pe.setGlobalState(M.clippingPlanes,K),fo(A,J,K),N.updateMultisampleRenderTarget(Me),N.updateRenderTargetMipmap(Me),oe.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ct=0,_t=H.length;ct<_t;ct++){const vt=H[ct],{object:ut,geometry:Fe,material:ot,group:Ze}=vt;if(ot.side===hi&&ut.layers.test(K.layers)){const tn=ot.side;ot.side=Qt,ot.needsUpdate=!0,lf(ut,J,K,Fe,ot,Ze),ot.side=tn,ot.needsUpdate=!0,$e=!0}}$e===!0&&(N.updateMultisampleRenderTarget(Me),N.updateRenderTargetMipmap(Me))}M.setRenderTarget(Te,De,Ie),M.setClearColor(fe,_e),Ue!==void 0&&(K.viewport=Ue),M.toneMapping=Be}function fo(A,H,J){const K=H.isScene===!0?H.overrideMaterial:null;for(let X=0,Me=A.length;X<Me;X++){const Ce=A[X],{object:Te,geometry:De,group:Ie}=Ce;let Be=Ce.material;Be.allowOverride===!0&&K!==null&&(Be=K),Te.layers.test(J.layers)&&lf(Te,H,J,De,Be,Ie)}}function lf(A,H,J,K,X,Me){A.onBeforeRender(M,H,J,K,X,Me),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(M,H,J,K,A,Me),X.transparent===!0&&X.side===hi&&X.forceSinglePass===!1?(X.side=Qt,X.needsUpdate=!0,M.renderBufferDirect(J,H,K,X,A,Me),X.side=Vi,X.needsUpdate=!0,M.renderBufferDirect(J,H,K,X,A,Me),X.side=hi):M.renderBufferDirect(J,H,K,X,A,Me),A.onAfterRender(M,H,J,K,X,Me)}function ho(A,H,J){H.isScene!==!0&&(H=z);const K=x.get(A),X=b.state.lights,Me=b.state.shadowsArray,Ce=X.state.version,Te=xe.getParameters(A,X.state,Me,H,J),De=xe.getProgramCacheKey(Te);let Ie=K.programs;K.environment=A.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(A.isMeshStandardMaterial?ee:G).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ie===void 0&&(A.addEventListener("dispose",Un),Ie=new Map,K.programs=Ie);let Be=Ie.get(De);if(Be!==void 0){if(K.currentProgram===Be&&K.lightsStateVersion===Ce)return uf(A,Te),Be}else Te.uniforms=xe.getUniforms(A),A.onBeforeCompile(Te,M),Be=xe.acquireProgram(Te,De),Ie.set(De,Be),K.uniforms=Te.uniforms;const Ue=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=Pe.uniform),uf(A,Te),K.needsLights=Bg(A),K.lightsStateVersion=Ce,K.needsLights&&(Ue.ambientLightColor.value=X.state.ambient,Ue.lightProbe.value=X.state.probe,Ue.directionalLights.value=X.state.directional,Ue.directionalLightShadows.value=X.state.directionalShadow,Ue.spotLights.value=X.state.spot,Ue.spotLightShadows.value=X.state.spotShadow,Ue.rectAreaLights.value=X.state.rectArea,Ue.ltc_1.value=X.state.rectAreaLTC1,Ue.ltc_2.value=X.state.rectAreaLTC2,Ue.pointLights.value=X.state.point,Ue.pointLightShadows.value=X.state.pointShadow,Ue.hemisphereLights.value=X.state.hemi,Ue.directionalShadowMap.value=X.state.directionalShadowMap,Ue.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ue.spotShadowMap.value=X.state.spotShadowMap,Ue.spotLightMatrix.value=X.state.spotLightMatrix,Ue.spotLightMap.value=X.state.spotLightMap,Ue.pointShadowMap.value=X.state.pointShadowMap,Ue.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Be,K.uniformsList=null,Be}function cf(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=na.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function uf(A,H){const J=x.get(A);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Fg(A,H,J,K,X){H.isScene!==!0&&(H=z),N.resetTextureUnits();const Me=H.fog,Ce=K.isMeshStandardMaterial?H.environment:null,Te=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ls,De=(K.isMeshStandardMaterial?ee:G).get(K.envMap||Ce),Ie=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Be=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ue=!!J.morphAttributes.position,$e=!!J.morphAttributes.normal,ct=!!J.morphAttributes.color;let _t=$n;K.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(_t=M.toneMapping);const vt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ut=vt!==void 0?vt.length:0,Fe=x.get(K),ot=b.state.lights;if(re===!0&&(we===!0||A!==Q)){const Ht=A===Q&&K.id===Y;Pe.setState(K,A,Ht)}let Ze=!1;K.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ot.state.version||Fe.outputColorSpace!==Te||X.isBatchedMesh&&Fe.batching===!1||!X.isBatchedMesh&&Fe.batching===!0||X.isBatchedMesh&&Fe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Fe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Fe.instancing===!1||!X.isInstancedMesh&&Fe.instancing===!0||X.isSkinnedMesh&&Fe.skinning===!1||!X.isSkinnedMesh&&Fe.skinning===!0||X.isInstancedMesh&&Fe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Fe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Fe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Fe.instancingMorph===!1&&X.morphTexture!==null||Fe.envMap!==De||K.fog===!0&&Fe.fog!==Me||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Pe.numPlanes||Fe.numIntersection!==Pe.numIntersection)||Fe.vertexAlphas!==Ie||Fe.vertexTangents!==Be||Fe.morphTargets!==Ue||Fe.morphNormals!==$e||Fe.morphColors!==ct||Fe.toneMapping!==_t||Fe.morphTargetsCount!==ut)&&(Ze=!0):(Ze=!0,Fe.__version=K.version);let tn=Fe.currentProgram;Ze===!0&&(tn=ho(K,H,X));let Er=!1,nn=!1,ms=!1;const dt=tn.getUniforms(),$t=Fe.uniforms;if(q.useProgram(tn.program)&&(Er=!0,nn=!0,ms=!0),K.id!==Y&&(Y=K.id,nn=!0),Er||Q!==A){q.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),dt.setValue(C,"projectionMatrix",A.projectionMatrix),dt.setValue(C,"viewMatrix",A.matrixWorldInverse);const jt=dt.map.cameraPosition;jt!==void 0&&jt.setValue(C,P.setFromMatrixPosition(A.matrixWorld)),ae.logarithmicDepthBuffer&&dt.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&dt.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,nn=!0,ms=!0)}if(Fe.needsLights&&(ot.state.directionalShadowMap.length>0&&dt.setValue(C,"directionalShadowMap",ot.state.directionalShadowMap,N),ot.state.spotShadowMap.length>0&&dt.setValue(C,"spotShadowMap",ot.state.spotShadowMap,N),ot.state.pointShadowMap.length>0&&dt.setValue(C,"pointShadowMap",ot.state.pointShadowMap,N)),X.isSkinnedMesh){dt.setOptional(C,X,"bindMatrix"),dt.setOptional(C,X,"bindMatrixInverse");const Ht=X.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),dt.setValue(C,"boneTexture",Ht.boneTexture,N))}X.isBatchedMesh&&(dt.setOptional(C,X,"batchingTexture"),dt.setValue(C,"batchingTexture",X._matricesTexture,N),dt.setOptional(C,X,"batchingIdTexture"),dt.setValue(C,"batchingIdTexture",X._indirectTexture,N),dt.setOptional(C,X,"batchingColorTexture"),X._colorsTexture!==null&&dt.setValue(C,"batchingColorTexture",X._colorsTexture,N));const hn=J.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&We.update(X,J,tn),(nn||Fe.receiveShadow!==X.receiveShadow)&&(Fe.receiveShadow=X.receiveShadow,dt.setValue(C,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&($t.envMap.value=De,$t.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&($t.envMapIntensity.value=H.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=kR()),nn&&(dt.setValue(C,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&Og($t,ms),Me&&K.fog===!0&&Le.refreshFogUniforms($t,Me),Le.refreshMaterialUniforms($t,K,He,Ne,b.state.transmissionRenderTarget[A.id]),na.upload(C,cf(Fe),$t,N)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(na.upload(C,cf(Fe),$t,N),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&dt.setValue(C,"center",X.center),dt.setValue(C,"modelViewMatrix",X.modelViewMatrix),dt.setValue(C,"normalMatrix",X.normalMatrix),dt.setValue(C,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ht=K.uniformsGroups;for(let jt=0,Xa=Ht.length;jt<Xa;jt++){const Xi=Ht[jt];de.update(Xi,tn),de.bind(Xi,tn)}}return tn}function Og(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Bg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,H,J){const K=x.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),x.get(A.texture).__webglTexture=H,x.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:J,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const J=x.get(A);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0};const kg=C.createFramebuffer();this.setRenderTarget=function(A,H=0,J=0){O=A,L=H,U=J;let K=null,X=!1,Me=!1;if(A){const Te=x.get(A);if(Te.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(C.FRAMEBUFFER,Te.__webglFramebuffer),k.copy(A.viewport),V.copy(A.scissor),W=A.scissorTest,q.viewport(k),q.scissor(V),q.setScissorTest(W),Y=-1;return}else if(Te.__webglFramebuffer===void 0)N.setupRenderTarget(A);else if(Te.__hasExternalTextures)N.rebindTextures(A,x.get(A.texture).__webglTexture,x.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Be=A.depthTexture;if(Te.__boundDepthTexture!==Be){if(Be!==null&&x.has(Be)&&(A.width!==Be.image.width||A.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(A)}}const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Me=!0);const Ie=x.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ie[H])?K=Ie[H][J]:K=Ie[H],X=!0):A.samples>0&&N.useMultisampledRTT(A)===!1?K=x.get(A).__webglMultisampledFramebuffer:Array.isArray(Ie)?K=Ie[J]:K=Ie,k.copy(A.viewport),V.copy(A.scissor),W=A.scissorTest}else k.copy(ie).multiplyScalar(He).floor(),V.copy(F).multiplyScalar(He).floor(),W=ne;if(J!==0&&(K=kg),q.bindFramebuffer(C.FRAMEBUFFER,K)&&q.drawBuffers(A,K),q.viewport(k),q.scissor(V),q.setScissorTest(W),X){const Te=x.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,Te.__webglTexture,J)}else if(Me){const Te=H;for(let De=0;De<A.textures.length;De++){const Ie=x.get(A.textures[De]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+De,Ie.__webglTexture,J,Te)}}else if(A!==null&&J!==0){const Te=x.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Te.__webglTexture,J)}Y=-1},this.readRenderTargetPixels=function(A,H,J,K,X,Me,Ce,Te=0){if(!(A&&A.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=x.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){q.bindFramebuffer(C.FRAMEBUFFER,De);try{const Ie=A.textures[Te],Be=Ie.format,Ue=Ie.type;if(!ae.textureFormatReadable(Be)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Ue)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-K&&J>=0&&J<=A.height-X&&(A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Te),C.readPixels(H,J,K,X,me.convert(Be),me.convert(Ue),Me))}finally{const Ie=O!==null?x.get(O).__webglFramebuffer:null;q.bindFramebuffer(C.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(A,H,J,K,X,Me,Ce,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=x.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(H>=0&&H<=A.width-K&&J>=0&&J<=A.height-X){q.bindFramebuffer(C.FRAMEBUFFER,De);const Ie=A.textures[Te],Be=Ie.format,Ue=Ie.type;if(!ae.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.bufferData(C.PIXEL_PACK_BUFFER,Me.byteLength,C.STREAM_READ),A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Te),C.readPixels(H,J,K,X,me.convert(Be),me.convert(Ue),0);const ct=O!==null?x.get(O).__webglFramebuffer:null;q.bindFramebuffer(C.FRAMEBUFFER,ct);const _t=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await cE(C,_t,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Me),C.deleteBuffer($e),C.deleteSync(_t),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,J=0){const K=Math.pow(2,-J),X=Math.floor(A.image.width*K),Me=Math.floor(A.image.height*K),Ce=H!==null?H.x:0,Te=H!==null?H.y:0;N.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,J,0,0,Ce,Te,X,Me),q.unbindTexture()};const Hg=C.createFramebuffer(),Vg=C.createFramebuffer();this.copyTextureToTexture=function(A,H,J=null,K=null,X=0,Me=null){Me===null&&(X!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=X,X=0):Me=0);let Ce,Te,De,Ie,Be,Ue,$e,ct,_t;const vt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(J!==null)Ce=J.max.x-J.min.x,Te=J.max.y-J.min.y,De=J.isBox3?J.max.z-J.min.z:1,Ie=J.min.x,Be=J.min.y,Ue=J.isBox3?J.min.z:0;else{const hn=Math.pow(2,-X);Ce=Math.floor(vt.width*hn),Te=Math.floor(vt.height*hn),A.isDataArrayTexture?De=vt.depth:A.isData3DTexture?De=Math.floor(vt.depth*hn):De=1,Ie=0,Be=0,Ue=0}K!==null?($e=K.x,ct=K.y,_t=K.z):($e=0,ct=0,_t=0);const ut=me.convert(H.format),Fe=me.convert(H.type);let ot;H.isData3DTexture?(N.setTexture3D(H,0),ot=C.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(N.setTexture2DArray(H,0),ot=C.TEXTURE_2D_ARRAY):(N.setTexture2D(H,0),ot=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);const Ze=C.getParameter(C.UNPACK_ROW_LENGTH),tn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Er=C.getParameter(C.UNPACK_SKIP_PIXELS),nn=C.getParameter(C.UNPACK_SKIP_ROWS),ms=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,vt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,vt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ie),C.pixelStorei(C.UNPACK_SKIP_ROWS,Be),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ue);const dt=A.isDataArrayTexture||A.isData3DTexture,$t=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const hn=x.get(A),Ht=x.get(H),jt=x.get(hn.__renderTarget),Xa=x.get(Ht.__renderTarget);q.bindFramebuffer(C.READ_FRAMEBUFFER,jt.__webglFramebuffer),q.bindFramebuffer(C.DRAW_FRAMEBUFFER,Xa.__webglFramebuffer);for(let Xi=0;Xi<De;Xi++)dt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(A).__webglTexture,X,Ue+Xi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(H).__webglTexture,Me,_t+Xi)),C.blitFramebuffer(Ie,Be,Ce,Te,$e,ct,Ce,Te,C.DEPTH_BUFFER_BIT,C.NEAREST);q.bindFramebuffer(C.READ_FRAMEBUFFER,null),q.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||x.has(A)){const hn=x.get(A),Ht=x.get(H);q.bindFramebuffer(C.READ_FRAMEBUFFER,Hg),q.bindFramebuffer(C.DRAW_FRAMEBUFFER,Vg);for(let jt=0;jt<De;jt++)dt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,hn.__webglTexture,X,Ue+jt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,hn.__webglTexture,X),$t?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ht.__webglTexture,Me,_t+jt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ht.__webglTexture,Me),X!==0?C.blitFramebuffer(Ie,Be,Ce,Te,$e,ct,Ce,Te,C.COLOR_BUFFER_BIT,C.NEAREST):$t?C.copyTexSubImage3D(ot,Me,$e,ct,_t+jt,Ie,Be,Ce,Te):C.copyTexSubImage2D(ot,Me,$e,ct,Ie,Be,Ce,Te);q.bindFramebuffer(C.READ_FRAMEBUFFER,null),q.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else $t?A.isDataTexture||A.isData3DTexture?C.texSubImage3D(ot,Me,$e,ct,_t,Ce,Te,De,ut,Fe,vt.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(ot,Me,$e,ct,_t,Ce,Te,De,ut,vt.data):C.texSubImage3D(ot,Me,$e,ct,_t,Ce,Te,De,ut,Fe,vt):A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Me,$e,ct,Ce,Te,ut,Fe,vt.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Me,$e,ct,vt.width,vt.height,ut,vt.data):C.texSubImage2D(C.TEXTURE_2D,Me,$e,ct,Ce,Te,ut,Fe,vt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ze),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,tn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Er),C.pixelStorei(C.UNPACK_SKIP_ROWS,nn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ms),Me===0&&H.generateMipmaps&&C.generateMipmap(ot),q.unbindTexture()},this.initRenderTarget=function(A){x.get(A).__webglFramebuffer===void 0&&N.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?N.setTextureCube(A,0):A.isData3DTexture?N.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?N.setTexture2DArray(A,0):N.setTexture2D(A,0),q.unbindTexture()},this.resetState=function(){L=0,U=0,O=null,q.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}const Hr=yn(!0);function VR(){const t=()=>{Hr.value=!Hr.value,e()},e=()=>{Hr.value?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))};return Sr(()=>{const n=localStorage.getItem("theme");n?Hr.value=n==="dark":Hr.value=window.matchMedia("(prefers-color-scheme: dark)").matches,e()}),{isDark:Hr,toggleTheme:t}}const zR=2e3,GR=Gi({__name:"ThreeBackground",setup(t){const{isDark:e}=VR(),n=yn(null);let i,r,s,o,a,l=0,c=0,u=0,f=0,h=0,d=0;const m=b=>{l=b.clientX-h,c=b.clientY-d};let _,g;const p=()=>{if(!n.value)return;h=window.innerWidth/2,d=window.innerHeight/2,i=new NE,g=new Eg({size:3,sizeAttenuation:!0,transparent:!0,opacity:.8,blending:Mc}),S(),r=new vn(75,window.innerWidth/window.innerHeight,1,1e4),r.position.z=1e3;const b=[],T=[];for(let w=0;w<zR;w++){const I=Math.random()*2e3-1e3,M=Math.random()*2e3-1e3,E=Math.random()*2e3-1e3;b.push(I,M,E),T.push((Math.random()-.5)*.5,(Math.random()-.5)*.5,(Math.random()-.5)*.5)}_=new fn,_.setAttribute("position",new kt(b,3)),_.userData={velocities:T},o=new kE(_,g),i.add(o),s=new HR({alpha:!0,antialias:!0}),s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight),n.value.appendChild(s.domElement),document.addEventListener("mousemove",m),window.addEventListener("resize",v),y()},S=()=>{g&&(e.value?(g.color.setHex(3462041),g.size=2.5,g.opacity=.8):(g.color.setHex(165063),g.size=3.5,g.opacity=.6))},v=()=>{h=window.innerWidth/2,d=window.innerHeight/2,r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)},y=()=>{a=requestAnimationFrame(y),u=l*.001,f=c*.001,o.rotation.y+=.05*(u-o.rotation.y),o.rotation.x+=.05*(f-o.rotation.x),o.rotation.z+=.001,s.render(i,r)};return mr(e,()=>{S()}),Sr(()=>{p()}),Pa(()=>{typeof window<"u"&&(cancelAnimationFrame(a),s&&s.dispose(),_&&_.dispose(),document.removeEventListener("mousemove",m),window.removeEventListener("resize",v))}),(b,T)=>(_n(),Ia("div",{ref_key:"containerRef",ref:n,class:to(["fixed inset-0 -z-50 transition-colors duration-500",[(ft(e),"bg-[var(--color-bg)]")]])},null,2))}}),WR=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},XR=Object.assign(WR(GR,[["__scopeId","data-v-bb7cf8d7"]]),{__name:"ThreeBackground"}),qR=Symbol.for("nuxt:client-only"),$R=Gi({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:n}){const i=Jr(!1);Sr(()=>{i.value=!0});const r=Mr();return r&&(r._nuxtClientOnly=!0),pr(qR,!0),()=>{if(i.value){const l=e.default?.();return l&&l.length===1?[Zn(l[0],n)]:l}const s=e.fallback||e.placeholder;if(s)return ln(s);const o=t.fallback||t.placeholder||"",a=t.fallbackTag||t.placeholderTag||"span";return Ia(a,n,o)}}}),Ig=(t="RouteProvider")=>Gi({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,i=e.route,r={};for(const s in e.route)Object.defineProperty(r,s,{get:()=>n===e.renderKey?e.route[s]:i[s],enumerable:!0});return pr(Ua,Gn(r)),()=>e.vnode?ln(e.vnode,{ref:e.vnodeRef}):e.vnode}}),jR=Ig(),Cd=new WeakMap,YR=Gi({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:i}){const r=Nt(),s=yn(),o=un(Ua,null);let a;i({pageRef:s});const l=un(qx,null);let c;const u=r.deferHydration();let f=!1,h=0;if(r.isHydrating){const m=r.hooks.hookOnce("app:error",u);Mn().beforeEach(m)}t.pageKey&&mr(()=>t.pageKey,(m,_)=>{m!==_&&r.callHook("page:loading:start")});let d=!1;{const m=Mn().beforeResolve(()=>{d=!1});ro(()=>{m(),u()})}return()=>ln(Xm,{name:t.name,route:t.route,...e},{default:m=>{const _=KR(o,m.route,m.Component),g=o&&o.matched.length===m.route.matched.length;if(!m.Component){if(c&&!g)return c;u();return}if(c&&l&&!l.isCurrent(m.route))return c;if(_&&o&&(!l||l?.isCurrent(o)))return g||c?c:null;const p=yc(m,t.pageKey),S=ZR(o,m.route,m.Component);!r.isHydrating&&a===p&&!S&&Ws(()=>{d||(d=!0,r.callHook("page:loading:end"))}),f&&a!==p&&h++,a=p;const v=!!(t.transition??m.route.meta.pageTransition??th),y=v&&fM([t.transition,m.route.meta.pageTransition,th,{onAfterLeave(){r["~transitionFinish"]?.(),delete r["~transitionFinish"],delete r["~transitionPromise"],r.callHook("page:transition:finish",m.Component)}}]),b=t.keepalive??m.route.meta.keepalive??Lx;return c=oM(v&&y,iM(b,ln(Gp,{key:h,suspensible:!0,onPending:()=>{f=!0,v&&!r["~transitionPromise"]&&(r["~transitionPromise"]=new Promise(T=>{r["~transitionFinish"]=T})),r.callHook("page:start",m.Component)},onResolve:async()=>{f=!1;try{await Ws(),r._route.sync?.(),await r.callHook("page:finish",m.Component),!d&&!S&&(d=!0,await r.callHook("page:loading:end"))}finally{u()}}},{default:()=>{const T={key:p||void 0,vnode:n.default?JR(n.default,m):m.Component,route:m.route,renderKey:p||void 0,trackRootNodes:v,vnodeRef:s};if(!b)return ln(jR,T);const w=m.Component.type,I=w;let M=Cd.get(I);return M||(M=Ig(w.name||w.__name),Cd.set(I,M)),ln(M,T)}}))).default(),c}})}});function KR(t,e,n){if(!t)return!1;const i=e.matched.findIndex(r=>r.components?.default===n?.type);return!i||i===-1?!1:e.matched.slice(0,i).some((r,s)=>r.components?.default!==t.matched[s]?.components?.default)||n&&yc({route:e,Component:n})!==yc({route:t,Component:n})}function ZR(t,e,n){return t?e.matched.findIndex(r=>r.components?.default===n?.type)<e.matched.length-1:!1}function JR(t,e){const n=t(e);return n.length===1?ln(n[0]):ln(on,void 0,n)}const QR={class:"min-h-screen text-[var(--color-text)] selection:bg-primary selection:text-white transition-colors duration-500 bg-[var(--color-bg)]"},eC=Gi({__name:"app",setup(t){const e=yn(!1),n=()=>{e.value=window.innerWidth<=768};return Sr(()=>{n(),window.addEventListener("resize",n,{passive:!0})}),Pa(()=>{window.removeEventListener("resize",n)}),(i,r)=>{const s=XR,o=$R,a=YR;return _n(),Ia("div",QR,[yt(o,null,{default:Ru(()=>[e.value?B0("",!0):(_n(),Fi(s,{key:0}))]),_:1}),yt(a)])}}}),tC={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error,i=Number(n.statusCode||500),r=i===404,s=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=r?Ef(()=>Ni(()=>import("./VgZQ4gc1.js"),__vite__mapDeps([21,20,7,22]),import.meta.url)):Ef(()=>Ni(()=>import("./DwcyHsOB.js"),__vite__mapDeps([23,7,24]),import.meta.url));return(f,h)=>(_n(),Fi(ft(u),Jg(Kp({status:ft(i),statusText:ft(s),statusCode:ft(i),statusMessage:ft(s),description:ft(o),stack:ft(a)})),null,16))}},nC={key:0},Pd={__name:"nuxt-root",setup(t){const e=()=>null,n=Nt(),i=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",i);Mn().beforeEach(c)}const r=!1;pr(Ua,$x()),n.hooks.callHookWith(c=>c.map(u=>u()),"vue:setup");const s=Fa(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;Mp((c,u,f)=>{if(n.hooks.callHook("vue:error",c,u,f)?.catch(h=>console.error("[nuxt] Error in `vue:error` hook",h)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",c),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,c),!1;if(Tm(c)&&(c.fatal||c.unhandled))return n.runWithContext(()=>rr(c)),!1});const l=!1;return(c,u)=>(_n(),Fi(Gp,{onResolve:ft(i)},{default:Ru(()=>[ft(o)?(_n(),Ia("div",nC)):ft(s)?(_n(),Fi(ft(tC),{key:1,error:ft(s)},null,8,["error"])):ft(l)?(_n(),Fi(ft(e),{key:2,context:ft(l)},null,8,["context"])):ft(r)?(_n(),Fi(o0(ft(r)),{key:3})):(_n(),Fi(ft(eC),{key:4}))]),_:1},8,["onResolve"]))}};let Dd;{let t;Dd=async function(){if(t)return t;const n=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true"),i=n?wv(Pd):Av(Pd),r=Fx({vueApp:i});async function s(o){await r.callHook("app:error",o),r.payload.error||=vr(o)}i.config.errorHandler=s,r.hook("app:suspense:resolve",()=>{i.config.errorHandler===s&&(i.config.errorHandler=void 0)}),!n&&nh.id&&r.hook("app:suspense:resolve",()=>{document.getElementById(nh.id)?.remove()});try{await kx(r,RM)}catch(o){s(o)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(Ix),await r.hooks.callHook("app:mounted",i),await Ws()}catch(o){s(o)}return i},t=Dd().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{cC as $,Si as A,Eg as B,kE as C,Ag as D,$R as E,on as F,zo as G,Mn as H,Tg as I,Nt as J,Wu as K,Lh as L,mg as M,fC as N,en as O,vn as P,ln as Q,rC as R,NE as S,ev as T,lm as U,Kx as V,HR as W,Jr as X,Yx as Y,AM as Z,WR as _,Yp as a,hs as a0,fm as a1,lC as a2,nx as a3,pa as a4,Hu as a5,uC as a6,Cu as a7,un as a8,Cm as a9,yt as b,Ia as c,Zp as d,Gi as e,Sr as f,oC as g,Fi as h,o0 as i,ro as j,aC as k,B0 as l,iC as m,yn as n,_n as o,VR as p,Pa as q,sC as r,$x as s,n_ as t,ft as u,to as v,Ru as w,wn as x,Aa as y,mr as z};
