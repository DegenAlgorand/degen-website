function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function a(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function l(t,e,n,r){if(t){const o=u(t,e,n,r);return t[0](o)}}function u(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function d(t,e,n,r,o,s){if(o){const i=u(e,n,r,s);t.p(i,o)}}function p(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}let h,m=!1;function g(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function $(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let t=0;t<e.length;t++){const s=e[t].claim_order,i=(o>0&&e[n[o]].claim_order<=s?o+1:g(1,o,(t=>e[n[t]].claim_order),s))-1;r[t]=n[i]+1;const c=i+1;n[c]=t,o=Math.max(c,o)}const s=[],i=[];let c=e.length-1;for(let t=n[o]+1;0!=t;t=r[t-1]){for(s.push(e[t-1]);c>=t;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);s.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<s.length&&i[e].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function _(t,e,n){m&&!n?$(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function x(){return b(" ")}function E(){return b("")}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t){return Array.from(t.childNodes)}function N(t,e,n,r,o=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const s=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(e(s)){const e=n(s);return void 0===e?t.splice(r,1):t[r]=e,o||(t.claim_info.last_index=r),s}}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(e(s)){const e=n(s);return void 0===e?t.splice(r,1):t[r]=e,o?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,s}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function R(t,e,n){return function(t,e,n,r){return N(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const o=t.attributes[r];n[o.name]||e.push(o.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}(t,e,n,v)}function A(t,e){return N(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>b(e)),!0)}function P(t){return A(t," ")}function L(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e=document.body){return Array.from(e.querySelectorAll(t))}function j(t){h=t}function U(){if(!h)throw new Error("Function called outside component initialization");return h}const q=[],O=[],T=[],C=[],B=Promise.resolve();let I=!1;function J(t){T.push(t)}let D=!1;const K=new Set;function M(){if(!D){D=!0;do{for(let t=0;t<q.length;t+=1){const e=q[t];j(e),z(e.$$)}for(j(null),q.length=0;O.length;)O.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];K.has(e)||(K.add(e),e())}T.length=0}while(q.length);for(;C.length;)C.pop()();I=!1,D=!1,K.clear()}}function z(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}const H=new Set;let V;function G(){V={r:0,c:[],p:V}}function W(){V.r||o(V.c),V=V.p}function Y(t,e){t&&t.i&&(H.delete(t),t.i(e))}function F(t,e,n,r){if(t&&t.o){if(H.has(t))return;H.add(t),V.c.push((()=>{H.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function X(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Q(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,e){t&&t.l(e)}function et(t,e,r,i){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,r),i||J((()=>{const e=a.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(J)}function nt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){-1===t.$$.dirty[0]&&(q.push(t),I||(I=!0,B.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,s,i,c,a,l,u=[-1]){const f=h;j(e);const d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let p=!1;if(d.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&rt(e,t)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){m=!0;const t=w(n.target);d.fragment&&d.fragment.l(t),t.forEach(y)}else d.fragment&&d.fragment.c();n.intro&&Y(e.$$.fragment),et(e,n.target,n.anchor,n.customElement),m=!1,M()}j(f)}class st{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const it=[];function ct(e,n=t){let r;const o=new Set;function s(t){if(i(e,t)&&(e=t,r)){const t=!it.length;for(const t of o)t[1](),it.push(t,e);if(t){for(let t=0;t<it.length;t+=2)it[t][0](it[t+1]);it.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return o.add(a),1===o.size&&(r=n(s)||t),i(e),()=>{o.delete(a),0===o.size&&(r(),r=null)}}}}const at={};function lt(t){let e,n;const r=t[1].default,o=l(r,t,t[0],null);return{c(){e=x(),o&&o.c(),this.h()},l(t){k('[data-svelte="svelte-1im3xxu"]',document.head).forEach(y),e=P(t),o&&o.l(t),this.h()},h(){document.title="$DEGEN Token"},m(t,r){_(t,e,r),o&&o.m(t,r),n=!0},p(t,[e]){o&&o.p&&(!n||1&e)&&d(o,r,t,t[0],n?f(r,t[0],e,null):p(t[0]),null)},i(t){n||(Y(o,t),n=!0)},o(t){F(o,t),n=!1},d(t){t&&y(e),o&&o.d(t)}}}function ut(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class ft extends st{constructor(t){super(),ot(this,t,ut,lt,i,{})}}function dt(t){let e,n,r=t[1].stack+"";return{c(){e=v("pre"),n=b(r)},l(t){e=R(t,"PRE",{});var o=w(e);n=A(o,r),o.forEach(y)},m(t,r){_(t,e,r),$(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&L(n,r)},d(t){t&&y(e)}}}function pt(e){let n,r,o,s,i,c,a,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&dt(e);return{c(){r=x(),o=v("h1"),s=b(e[0]),i=x(),c=v("p"),a=b(f),l=x(),d&&d.c(),u=E(),this.h()},l(t){k('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(y),r=P(t),o=R(t,"H1",{class:!0});var n=w(o);s=A(n,e[0]),n.forEach(y),i=P(t),c=R(t,"P",{class:!0});var p=w(c);a=A(p,f),p.forEach(y),l=P(t),d&&d.l(t),u=E(),this.h()},h(){S(o,"class","svelte-8od9u6"),S(c,"class","svelte-8od9u6")},m(t,e){_(t,r,e),_(t,o,e),$(o,s),_(t,i,e),_(t,c,e),$(c,a),_(t,l,e),d&&d.m(t,e),_(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&L(s,t[0]),2&e&&f!==(f=t[1].message+"")&&L(a,f),t[2]&&t[1].stack?d?d.p(t,e):(d=dt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&y(r),t&&y(o),t&&y(i),t&&y(c),t&&y(l),d&&d.d(t),t&&y(u)}}}function ht(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class mt extends st{constructor(t){super(),ot(this,t,ht,pt,i,{status:0,error:1})}}function gt(t){let n,r,o;const s=[t[4].props];var i=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c())),{c(){n&&Z(n.$$.fragment),r=E()},l(t){n&&tt(n.$$.fragment,t),r=E()},m(t,e){n&&et(n,t,e),_(t,r,e),o=!0},p(t,e){const o=16&e?X(s,[Q(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){G();const t=n;F(t.$$.fragment,1,0,(()=>{nt(t,1)})),W()}i?(n=new i(c()),Z(n.$$.fragment),Y(n.$$.fragment,1),et(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(t){o||(n&&Y(n.$$.fragment,t),o=!0)},o(t){n&&F(n.$$.fragment,t),o=!1},d(t){t&&y(r),n&&nt(n,t)}}}function $t(t){let e,n;return e=new mt({props:{error:t[0],status:t[1]}}),{c(){Z(e.$$.fragment)},l(t){tt(e.$$.fragment,t)},m(t,r){et(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function _t(t){let e,n,r,o;const s=[$t,gt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),r=E()},l(t){n.l(t),r=E()},m(t,n){i[e].m(t,n),_(t,r,n),o=!0},p(t,o){let a=e;e=c(t),e===a?i[e].p(t,o):(G(),F(i[a],1,1,(()=>{i[a]=null})),W(),n=i[e],n?n.p(t,o):(n=i[e]=s[e](t),n.c()),Y(n,1),n.m(r.parentNode,r))},i(t){o||(Y(n),o=!0)},o(t){F(n),o=!1},d(t){i[e].d(t),t&&y(r)}}}function yt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[_t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ft({props:s}),{c(){Z(n.$$.fragment)},l(t){tt(n.$$.fragment,t)},m(t,e){et(n,t,e),r=!0},p(t,[e]){const r=12&e?X(o,[4&e&&{segment:t[2][0]},8&e&&Q(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(Y(n.$$.fragment,t),r=!0)},o(t){F(n.$$.fragment,t),r=!1},d(t){nt(n,t)}}}function vt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:i}=e,{level0:c}=e,{level1:a=null}=e,{notify:l}=e;var u,f,d;return u=l,U().$$.after_update.push(u),f=at,d=r,U().$$.context.set(f,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,i,c,a,r,l]}class bt extends st{constructor(t){super(),ot(this,t,vt,yt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const xt=[],Et=[{js:()=>Promise.all([import("./index.3dc69632.js"),__inject_styles(["client-aec18862.css","index-387dfc9e.css"])]).then((function(t){return t[0]}))}],St=[{pattern:/^\/$/,parts:[{i:0}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function wt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{a(r.next(t))}catch(t){s(t)}}function c(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}a((r=r.apply(t,e||[])).next())}))}function Nt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Rt,At=1;const Pt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Lt={};let kt,jt;function Ut(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function qt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(kt))return null;let e=t.pathname.slice(kt.length);if(""===e&&(e="/"),!xt.some((t=>t.test(e))))for(let n=0;n<St.length;n+=1){const r=St[n],o=r.pattern.exec(e);if(o){const n=Ut(t.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:o,page:c}}}}function Ot(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Nt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=qt(o);if(s){Bt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Pt.pushState({id:Rt},"",o.href)}}function Tt(){return{x:pageXOffset,y:pageYOffset}}function Ct(t){if(Lt[Rt]=Tt(),t.state){const e=qt(new URL(location.href));e?Bt(e,t.state.id):location.href=location.href}else At=At+1,function(t){Rt=t}(At),Pt.replaceState({id:Rt},"",location.href)}function Bt(t,e,n,r){return wt(this,void 0,void 0,(function*(){const o=!!e;if(o)Rt=e;else{const t=Tt();Lt[Rt]=t,Rt=e=++At,Lt[Rt]=n?t:{x:0,y:0}}if(yield jt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Lt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Lt[Rt]=n,n&&(o||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function It(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Jt,Dt=null;function Kt(t){const e=Nt(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=qt(new URL(t,It(document)));if(e)Dt&&t===Dt.href||(Dt={href:t,promise:se(e)}),Dt.promise}(e.href)}function Mt(t){clearTimeout(Jt),Jt=setTimeout((()=>{Kt(t)}),20)}function zt(t,e={noscroll:!1,replaceState:!1}){const n=qt(new URL(t,It(document)));if(n){const r=Bt(n,null,e.noscroll);return Pt[e.replaceState?"replaceState":"pushState"]({id:Rt},"",t),r}return location.href=t,new Promise((()=>{}))}const Ht="undefined"!=typeof __SAPPER__&&__SAPPER__;let Vt,Gt,Wt,Yt=!1,Ft=[],Xt="{}";const Qt={page:function(t){const e=ct(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:ct(null),session:ct(Ht&&Ht.session)};let Zt,te,ee;function ne(t,e){const{error:n}=t;return Object.assign({error:n},e)}function re(t){return wt(this,void 0,void 0,(function*(){Vt&&Qt.preloading.set(!0);const e=function(t){return Dt&&Dt.href===t.href?Dt.promise:se(t)}(t),n=Gt={},r=yield e,{redirect:o}=r;if(n===Gt)if(o)yield zt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield oe(n,e,ne(e,t.page))}}))}function oe(t,e,n){return wt(this,void 0,void 0,(function*(){Qt.page.set(n),Qt.preloading.set(!1),Vt?Vt.$set(e):(e.stores={page:{subscribe:Qt.page.subscribe},preloading:{subscribe:Qt.preloading.subscribe},session:Qt.session},e.level0={props:yield Wt},e.notify=Qt.page.notify,Vt=new bt({target:ee,props:e,hydrate:!0})),Ft=t,Xt=JSON.stringify(n.query),Yt=!0,te=!1}))}function se(t){return wt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Wt){const t=()=>({});Wt=Ht.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Zt)}let c,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map(((e,c)=>wt(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==Xt)return!0;const o=Ft[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[a]=r[c+1],!e)return{segment:f};const d=a++;let p;if(te||u||!Ft[c]||Ft[c].part!==e.i){u=!1;const{default:r,preload:o}=yield Et[e.i].js();let s;s=Yt||!Ht.preloaded[c+1]?o?yield o.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Zt):{}:Ht.preloaded[c+1],p={component:r,props:s,segment:f,match:l,part:e.i}}else p=Ft[c];return s[`level${d}`]=p})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var ie,ce,ae;Qt.session.subscribe((t=>wt(void 0,void 0,void 0,(function*(){if(Zt=t,!Yt)return;te=!0;const e=qt(new URL(location.href)),n=Gt={},{redirect:r,props:o,branch:s}=yield se(e);n===Gt&&(r?yield zt(r.location,{replaceState:!0}):yield oe(s,o,ne(o,e.page)))})))),ie={target:document.querySelector("#sapper")},ce=ie.target,ee=ce,ae=Ht.baseUrl,kt=ae,jt=re,"scrollRestoration"in Pt&&(Pt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Pt.scrollRestoration="auto"})),addEventListener("load",(()=>{Pt.scrollRestoration="manual"})),addEventListener("click",Ot),addEventListener("popstate",Ct),addEventListener("touchstart",Kt),addEventListener("mousemove",Mt),Ht.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:i}=Ht;Wt||(Wt=o&&o[0]);const c={error:i,status:s,session:r,level0:{props:Wt},level1:{props:{status:s,error:i},component:mt},segments:o},a=Ut(n);oe([],c,{host:t,path:e,query:a,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Pt.replaceState({id:At},"",e);const n=qt(new URL(location.href));if(n)return Bt(n,At,!0,t)}));export{st as S,R as a,w as b,l as c,y as d,v as e,S as f,_ as g,$ as h,ot as i,p as j,f as k,F as l,b as m,x as n,A as o,P as p,t as q,Z as r,i as s,Y as t,d as u,tt as v,et as w,nt as x,a as y};

import __inject_styles from './inject_styles.803b7e80.js';