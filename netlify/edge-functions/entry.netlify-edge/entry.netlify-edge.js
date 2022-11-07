/**
 * @license
 * @builder.io/qwik 0.11.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */const Xe=t=>t&&typeof t.nodeType=="number",Ii=t=>t&&t.nodeType===9,Ze=t=>t.nodeType===1,et=t=>Xe(t)&&(t.nodeType===1||t.nodeType===111),fe=t=>t.nodeType===111,Ei=t=>t.nodeType===3,dn=t=>t.nodeType===8,kt=(t,...e)=>{const n=t instanceof Error?t:new Error(t);return typeof globalThis._handleError=="function"&&t instanceof Error?globalThis._handleError(t,e):console.error("%cQWIK ERROR","",n.message,...Da(e),n.stack),n},_s=(t,...e)=>kt(t,...e),Da=t=>t,B=(t,...e)=>{const n=hn(t);return _s(n,...e)},hn=t=>`Code(${t})`,ws=t=>{const e=Object.getPrototypeOf(t);return e===Object.prototype||e===null},Q=t=>t&&typeof t=="object",q=t=>Array.isArray(t),Tt=t=>typeof t=="string",ee=t=>typeof t=="function",pe="q:slot",F=t=>t instanceof Promise,Is=(t,e,n)=>{try{const s=t();return F(s)?s.then(e,n):e(s)}catch(s){return n(s)}},x=(t,e)=>F(t)?t.then(e):e(t),Es=t=>t.some(F)?Promise.all(t):t,Si=t=>t.length>0?Promise.all(t):t,Xn=t=>t!=null,La=t=>new Promise(e=>{setTimeout(e,t)});let ht;const Ht=()=>{if(!ht){const t=typeof document<"u"&&document&&document.__q_context__;return t?q(t)?document.__q_context__=Ti(t):t:void 0}return ht},ki=()=>{const t=Ht();if(!t)throw B(14);return t},Ss=()=>{const t=ki();if(t.$event$!=="qRender")throw B(20);return t.$hostElement$,t.$waitOn$,t.$renderCtx$,t.$subscriber$,t},Se=(t,e,...n)=>{const s=ht;let r;try{ht=t,r=e.apply(null,n)}finally{ht=s}return r},Ma=(t,e)=>{const n=t.$waitOn$;if(n.length===0){const s=e();F(s)&&n.push(s)}else n.push(Promise.all(n).then(e))},Ti=t=>{const e=t[0];return me(void 0,e,t[1],t[2])},me=(t,e,n,s)=>({$seq$:0,$hostElement$:t,$element$:e,$event$:n,$url$:s,$qrl$:void 0,$props$:void 0,$renderCtx$:void 0,$subscriber$:void 0,$waitOn$:void 0}),Ai=t=>t.closest("[q\\:container]"),fn=t=>typeof document<"u"?document:t.nodeType===9?t:t.ownerDocument;let ks={isServer:!1,importSymbol(t,e,n){const s=((o,a,c)=>{var d;const l=o.baseURI,u=new URL((d=a.getAttribute("q:base"))!=null?d:l,l);return new URL(c,u)})(t.ownerDocument,t,e).toString(),r=new URL(s);return r.hash="",r.search="",import(r.href).then(o=>((a,c)=>{if(c in a)return a[c];for(const l of Object.values(a))if(Q(l)&&c in l)return l[c]})(o,n))},raf:t=>new Promise(e=>{requestAnimationFrame(()=>{e(t())})}),nextTick:t=>new Promise(e=>{setTimeout(()=>{e(t())})}),chunkForSymbol(){}};const ja=t=>ks=t,pn=()=>ks,tt=()=>ks.isServer,le=[],he={},j=(t,e,n=le)=>Qs(null,e,t,null,null,n,null),Ts=(t,e={})=>{var l;let n=t.$symbol$,s=t.$chunk$;const r=(l=t.$refSymbol$)!=null?l:n,i=pn();if(i){const u=i.chunkForSymbol(r);u&&(s=u[1],t.$refSymbol$||(n=u[0]))}if(!s)throw B(31,t);s.startsWith("./")&&(s=s.slice(2));const o=[s,"#",n],a=t.$capture$,c=t.$captureRef$;if(c&&c.length){if(e.$getObjId$){const u=c.map(e.$getObjId$);o.push(`[${u.join(" ")}]`)}else if(e.$addRefMap$){const u=c.map(e.$addRefMap$);o.push(`[${u.join(" ")}]`)}}else a&&a.length>0&&o.push(`[${a.join(" ")}]`);return o.join("")},As=(t,e)=>{e.$element$;const n={$element$:e.$element$,$addRefMap$:s=>Ua(e.$refMap$,s)};return t.map(s=>Ts(s,n)).join(`
`)},mn=(t,e)=>{const n=t.length,s=gr(t,0,"#"),r=gr(t,s,"["),i=Math.min(s,r),o=t.substring(0,i),a=s==n?s:s+1,c=r,l=a==c?"default":t.substring(a,c),u=r,d=n,h=u===d?le:t.substring(u+1,d-1).split(" "),f=Qs(o,l,null,null,h,null,null);return e&&f.$setContainer$(e),f},gr=(t,e,n)=>{const s=t.length,r=t.indexOf(n,e==s?0:e);return r==-1?s:r},Ua=(t,e)=>{const n=t.indexOf(e);return n===-1?(t.push(e),t.length-1):n},V=(t,e,n)=>t.setAttribute(e,n),ae=(t,e)=>t.getAttribute(e),Ba=/^(on|window:|document:)/,xs=t=>t.endsWith("$")&&Ba.test(t),At=(t,e)=>{for(const n of e){const s=n[0],r=n[1].$hash$;let i=!1;for(let o=0;o<t.length;o++){const a=t[o];if(a[0]===s&&a[1].$hash$===r){t.splice(o,1,n),i=!0;break}}i||t.push(n)}},Rs=t=>{if(t.length===0)return le;if(t.length===1){const n=t[0];return[[n[0],[n[1]]]]}const e=[];for(let n=0;n<t.length;n++){const s=t[n][0];e.includes(s)||e.push(s)}return e.map(n=>[n,t.filter(s=>s[0]===n).map(s=>s[1])])},xi=(t,e,n,s)=>{if(e.endsWith("$"),e=ao(e.slice(0,-1)),n){const r=q(n)?n.map(i=>[e,$r(i,s)]):[[e,$r(n,s)]];At(t,r)}return e},$r=(t,e)=>(t.$setContainer$(e),t),Fa=(t,e)=>{const n=t.$element$.attributes,s=[];for(let r=0;r<n.length;r++){const{name:i,value:o}=n.item(r);if(i.startsWith("on:")||i.startsWith("on-window:")||i.startsWith("on-document:")){const a=o.split(`
`);for(const c of a){const l=mn(c,e);l.$capture$&&co(l,t),s.push([i,l])}}}return s},xt=()=>{const t=Ss(),e=t.$seq$,n=t.$hostElement$,s=U(n),r=s.$seq$?s.$seq$:s.$seq$=[];return t.$seq$++,{get:r[e],set:i=>r[e]=i,i:e,ctx:t}},za=(t,e)=>Ri(`on-${t}`,e),yr=(t,e)=>Ri(`document:on-${t}`,e),Ri=(t,e)=>{const n=Ss(),s=U(n.$hostElement$);At(s.li,[[ao(t),e]]),s.$needAttachListeners$=!0},_=(t,e,n)=>{const s=n==null?null:String(n);return new Ni(t,e,s)};class Ni{constructor(e,n,s=null){this.type=e,this.props=n,this.key=s}}const gn=t=>t instanceof Ni,Rt=t=>t.children,Ns=Symbol("skip render"),Ci=()=>null,Nt=t=>t.children,Oi=()=>null,Cs=t=>t.replace(/([A-Z])/g,"-$1").toLowerCase(),$n=(t,e,n,s)=>{t?t.$operations$.push({$operation$:vr,$args$:[e,n,s]}):vr(e,n,s)},vr=(t,e,n)=>{if(n==null||n===!1)t.removeAttribute(e);else{const s=n===!0?"":String(n);V(t,e,s)}},qe=(t,e,n,s)=>{t?t.$operations$.push({$operation$:br,$args$:[e,n,s]}):br(e,n,s)},br=(t,e,n)=>{try{t[e]=n==null?"":n,n==null&&Xe(t)&&Ze(t)&&t.removeAttribute(e)}catch(s){kt(hn(6),{node:t,key:e,value:n},s)}},Os=(t,e,n)=>n?t.createElementNS(js,e):t.createElement(e),Be=(t,e,n,s)=>(t.$operations$.push({$operation$:bn,$args$:[e,n,s||null]}),n),_r=(t,e,n)=>(t.$operations$.push({$operation$:Jt,$args$:[e,n]}),n),wr=(t,e,n)=>{const s=t.classList;s.remove(...e),s.add(...n)},Ha=(t,e)=>{const n=fn(t),s=n.documentElement===t,r=n.head,i=n.createElement("style");V(i,"q:style",e.styleId),i.textContent=e.content,s&&r?Jt(r,i):bn(t,i,t.firstChild)},Pi=(t,e)=>{t.$operations$.push({$operation$:Wa,$args$:[e,t]})},Wa=(t,e)=>{const n=t.parentElement;if(n){if(t.nodeType===1||t.nodeType===111){const s=e.$containerState$.$subsManager$;zs(t,e,s,!0)}vc(n,t)}},qi=(t,e)=>{const n=Os(t,"q:template",!1);return V(n,pe,e),V(n,"hidden",""),V(n,"aria-hidden","true"),n},Va=t=>{for(const e of t.$operations$)e.$operation$.apply(void 0,e.$args$);Ka(t)},Zn=t=>ae(t,"q:key"),Dn=(t,e)=>{e!==null&&V(t,"q:key",e)},Ka=t=>{const e=t.$containerState$.$subsManager$;for(const n of t.$rmSlots$){const s=Zn(n),r=$t(n,"root");if(r.length>0){const i=n.getAttribute("q:sref"),o=t.$roots$.find(a=>a.$id$===i);if(o){const a=qi(t.$doc$,s),c=o.$element$;for(const l of r)Jt(a,l);bn(c,a,c.firstChild)}else zs(n,t,e,!1)}}for(const[n,s]of t.$addSlots$){const r=Zn(n),i=Array.from(s.childNodes).find(o=>Vi(o)&&o.getAttribute(pe)===r);i&&($t(i,"root").forEach(o=>{Jt(n,o)}),i.remove())}};class Ps{constructor(e,n){this.open=e,this.close=n,this._qc_=null,this.nodeType=111,this.localName=":virtual",this.nodeName=":virtual";const s=this.ownerDocument=e.ownerDocument;this.template=Os(s,"template",!1),this.attributes=(r=>{if(!r)return new Map;const i=r.split(" ");return new Map(i.map(o=>{const a=o.indexOf("=");return a>=0?[o.slice(0,a),(c=o.slice(a+1),c.replace(/\+/g," "))]:[o,""];var c}))})(e.data.slice(3)),e.data.startsWith("qv "),e.__virtual=this}insertBefore(e,n){const s=this.parentElement;if(s){const r=n||this.close;s.insertBefore(e,r)}else this.template.insertBefore(e,n);return e}remove(){const e=this.parentElement;if(e){const n=Array.from(this.childNodes);this.template.childElementCount,e.removeChild(this.open),this.template.append(...n),e.removeChild(this.close)}}appendChild(e){return this.insertBefore(e,null)}insertBeforeTo(e,n){const s=Array.from(this.childNodes);e.insertBefore(this.open,n);for(const r of s)e.insertBefore(r,n);e.insertBefore(this.close,n),this.template.childElementCount}appendTo(e){this.insertBeforeTo(e,null)}get namespaceURI(){var e,n;return(n=(e=this.parentElement)==null?void 0:e.namespaceURI)!=null?n:""}removeChild(e){this.parentElement?this.parentElement.removeChild(e):this.template.removeChild(e)}getAttribute(e){var n;return(n=this.attributes.get(e))!=null?n:null}hasAttribute(e){return this.attributes.has(e)}setAttribute(e,n){this.attributes.set(e,n),this.open.data=Ir(this.attributes)}removeAttribute(e){this.attributes.delete(e),this.open.data=Ir(this.attributes)}matches(e){return!1}compareDocumentPosition(e){return this.open.compareDocumentPosition(e)}closest(e){const n=this.parentElement;return n?n.closest(e):null}querySelectorAll(e){const n=[];return $t(this,"elements").forEach(s=>{et(s)&&(s.matches(e)&&n.push(s),n.concat(Array.from(s.querySelectorAll(e))))}),n}querySelector(e){for(const n of this.childNodes)if(Ze(n)){if(n.matches(e))return n;const s=n.querySelector(e);if(s!==null)return s}return null}get firstChild(){if(this.parentElement){const e=this.open.nextSibling;return e===this.close?null:e}return this.template.firstChild}get nextSibling(){return this.close.nextSibling}get previousSibling(){return this.open.previousSibling}get childNodes(){if(!this.parentElement)return this.template.childNodes;const e=[];let n=this.open;for(;(n=n.nextSibling)&&n!==this.close;)e.push(n);return e}get isConnected(){return this.open.isConnected}get parentElement(){return this.open.parentElement}}const Ir=t=>`qv ${(e=>{const n=[];return e.forEach((s,r)=>{var i;s?n.push(`${r}=${i=s,i.replace(/ /g,"+")}`):n.push(`${r}`)}),n.join(" ")})(t)}`,qs=t=>{if(t==null)return null;if(dn(t)){const e=Wt(t);if(e)return e}return t},Wt=t=>{const e=t.__virtual;if(e)return e;if(t.data.startsWith("qv ")){const n=Di(t);return new Ps(t,n)}return null},Di=t=>{let e=t.nextSibling,n=1;for(;e;){if(dn(e)){if(e.data.startsWith("qv "))n++;else if(e.data==="/qv"&&(n--,n===0))return e}e=e.nextSibling}throw new Error("close not found")},Vt=t=>t==null?null:fe(t)?t.open:t,nt=t=>(/^[\w/.-]+$/.test(t),Object.freeze({id:Cs(t)})),it=(t,e)=>{const{get:n,set:s,ctx:r}=xt();if(n!==void 0)return;const i=r.$hostElement$,o=U(i);let a=o.$contexts$;a||(o.$contexts$=a=new Map),a.set(t.id,e),s(!0)},yn=(t,e)=>{const{get:n,set:s,ctx:r}=xt();if(n!==void 0)return n;const i=Li(t,r.$hostElement$,r.$renderCtx$);if(i!==void 0)return s(i);if(e!==void 0)return s(e);throw B(13,t.id)},Li=(t,e,n)=>{const s=t.id;if(n){const r=n.$localStack$;for(let i=r.length-1;i>=0;i--){const o=r[i];if(e=o.$element$,o.$contexts$){const a=o.$contexts$.get(s);if(a)return a}}}if(e.closest){const r=Qa(e,s);if(r!==void 0)return r}},Qa=(t,e)=>{var s;let n=t;for(;n;){let r=n,i;for(;r&&(i=Ga(r));){const o=(s=te(i))==null?void 0:s.$contexts$;if(o&&o.has(e))return o.get(e);r=i}n=n.parentElement}},Ga=t=>{let e=t,n=1;for(;e=e.previousSibling;)if(dn(e)){if(e.data==="/qv")n++;else if(e.data.startsWith("qv ")&&(n--,n===0))return Wt(e)}return null},Ja=nt("qk-error"),Mi=(t,e,n)=>{if(tt())throw t;{const s=Li(Ja,e,n);if(s===void 0)throw t;s.error=t}},Kt=(t,e)=>{e.$dirty$=!1,e.$mounted$=!0,e.$slots$=[];const n=e.$element$,s=e.$componentQrl$,r=e.$props$,i=Ds(t,e),o=me(n,void 0,"qRender"),a=o.$waitOn$=[];i.$cmpCtx$=e,o.$subscriber$=n,o.$renderCtx$=t,s.$setContainer$(t.$static$.$containerState$.$containerEl$);const c=s.getFn(o);return Is(()=>c(r),l=>a.length>0?Promise.all(a).then(()=>e.$dirty$?Kt(t,e):{node:l,rCtx:i}):e.$dirty$?Kt(t,e):{node:l,rCtx:i},l=>(Mi(l,n,t),{node:Ns,rCtx:i}))},ji=(t,e)=>({$static$:{$doc$:t,$containerState$:e,$hostElements$:new Set,$operations$:[],$postOperations$:[],$roots$:[],$addSlots$:[],$rmSlots$:[]},$cmpCtx$:void 0,$localStack$:[]}),Ds=(t,e)=>({$static$:t.$static$,$cmpCtx$:t.$cmpCtx$,$localStack$:t.$localStack$.concat(e)}),Ui=t=>{if(Tt(t))return t;if(Q(t)){if(q(t))return t.join(" ");{let e="",n=!1;for(const s of Object.keys(t))t[s]&&(n&&(e+=" "),e+=s,n=!0);return e}}return""},Ya=/\s/,es=t=>t?t.split(Ya):le,Bi=t=>{if(t==null)return"";if(typeof t=="object"){if(q(t))throw B(0,t,"style");{const e=[];for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const s=t[n];s&&e.push(Cs(n)+":"+s)}return e.join(";")}}return String(t)},vn=t=>en(t.$static$.$containerState$.$elementIndex$++),ts=(t,e)=>{const n=vn(t);e.$id$=n,e.$element$.setAttribute("q:id",n)},Xa=[pe,"children"],Fi=t=>{const e=t.join(" ");if(e.length>0)return e},Ls=(t,e,n)=>{const s=!e.$mounted$,r=e.$element$,i=t.$static$.$containerState$;return i.$hostsStaging$.delete(r),i.$subsManager$.$clearSub$(r),x(Kt(t,e),o=>{const a=t.$static$,c=o.rCtx,l=me(r);if(a.$hostElements$.add(r),l.$subscriber$=r,l.$renderCtx$=c,s){if(e.$appendStyles$)for(const f of e.$appendStyles$)d=f,(u=a).$containerState$.$styleIds$.add(d.styleId),u.$postOperations$.push({$operation$:Ha,$args$:[u.$containerState$.$containerEl$,d]});if(e.$scopeIds$){const f=Fi(e.$scopeIds$);f&&r.setAttribute("q:sstyle",f)}}var u,d;const h=ut(o.node,l);return x(h,f=>{const g=Za(r,f),$=zi(e);return x(ic(c,$,g,n),()=>{e.$vdom$=g})})})},zi=t=>(t.$vdom$||(t.$vdom$=yt(t.$element$)),t.$vdom$);class ce{constructor(e,n,s,r){this.$type$=e,this.$props$=n,this.$children$=s,this.$key$=r,this.$elm$=null,this.$text$="",this.$signal$=null}}const Za=(t,e)=>{const n=e===void 0?le:q(e)?e:[e],s=new ce(":virtual",{},n,null);return s.$elm$=t,s},ut=(t,e)=>{if(t!=null&&typeof t!="boolean"){if(ec(t)){const n=new ce("#text",he,le,null);return n.$text$=String(t),n}if(gn(t))return((n,s)=>{const r=n.key!=null?String(n.key):null,i=n.type,o=n.props,a=o.children;let c="";if(Tt(i))c=i;else{if(i!==Nt){if(ee(i)){const u=Se(s,i,o,n.key);return ut(u,s)}throw B(25,i)}c=":virtual"}let l=le;return a!=null?x(ut(a,s),u=>(u!==void 0&&(l=q(u)?u:[u]),new ce(c,o,l,r))):new ce(c,o,l,r)})(t,e);if(H(t)){const n=t.value,s=new ce("#text",he,le,null);return s.$text$=String(n),s.$signal$=t,s}if(q(t)){const n=Es(t.flatMap(s=>ut(s,e)));return x(n,s=>s.flat(100).filter(Xn))}return F(t)?t.then(n=>ut(n,e)):t===Ns?new ce(":skipRender",he,le,null):void 0}},ec=t=>Tt(t)||typeof t=="number",Er=Symbol("ContainerState"),Qt=t=>{let e=t[Er];return e||(t[Er]=e=Hi(t)),e},Hi=t=>{const e={$containerEl$:t,$elementIndex$:0,$proxyMap$:new WeakMap,$opsNext$:new Set,$watchNext$:new Set,$watchStaging$:new Set,$hostsNext$:new Set,$hostsStaging$:new Set,$styleIds$:new Set,$events$:new Set,$envData$:{},$renderPromise$:void 0,$hostsRendering$:void 0,$subsManager$:null};return e.$subsManager$=sc(e),e},tc=(t,e)=>{const n=t[0],s=e(t[1]);if(!s)return;let r=n+" "+s;if(t[0]===0)t[2]&&(r+=" "+t[2]);else{const i=typeof t[3]=="string"?t[3]:Sr(e(t[3]));r+=` ${Sr(e(t[2]))} ${i} ${t[4]}`,t[5]&&(r+=` ${t[5]}`)}return r},nc=(t,e)=>{const n=t.split(" "),s=parseInt(n[0],10);n.length;const r=[s,e(n[1])];return s===0?(n.length,r.push(n[2])):(n.length===5||n.length,r.push(e(n[2]),e(n[3]),n[4],n[5])),r},sc=t=>{const e=new Map;return{$createManager$:n=>new rc(e,t,n),$clearSub$:n=>{const s=e.get(n);if(s){for(const r of s)r.$unsubGroup$(n);e.delete(n),s.length=0}}}};class rc{constructor(e,n,s){this.$groupToManagers$=e,this.$containerState$=n,this.$subs$=[],s&&this.$addSubs$(s)}$addSubs$(e){this.$subs$.push(...e);for(const n of this.$subs$)this.$addToGroup$(n[1],this)}$addToGroup$(e,n){let s=this.$groupToManagers$.get(e);s||this.$groupToManagers$.set(e,s=[]),s.includes(n)||s.push(n)}$unsubGroup$(e){const n=this.$subs$;for(let s=0;s<n.length;s++)n[s][1]===e&&(n.splice(s,1),s--)}$addSub$(e){const n=this.$subs$,s=e[1],r=e[e.length-1];n.some(([i,o,a])=>i===0&&o===s&&a===r)||(n.push(e),this.$addToGroup$(s,this))}$notifySubs$(e){const n=this.$subs$;for(const s of n){const r=s[s.length-1];e&&r&&r!==e||wc(s,this.$containerState$)}}}const Ms=(t,e)=>{if(ee(t))return t(e);if(Q(t)){if("current"in t)return t.current=e;if("value"in t)return t.value=e}throw B(32,t)},Sr=t=>{if(t==null)throw kt("must be non null",t);return t},gt=(t,e)=>{const n=sl(t);if(!tt())try{window.qwikevents&&window.qwikevents.push(n)}catch{}e.$events$.add(n)},js="http://www.w3.org/2000/svg",Gt=[],ic=(t,e,n,s)=>Us(t,e,n,"root",s),Us=(t,e,n,s,r)=>{e.$elm$;const i=n.$children$;if(i.length===1&&i[0].$type$===":skipRender")return;const o=e.$elm$;e.$children$===Gt&&o.nodeName==="HEAD"&&(s="head",r|=2);const a=oc(e,s);return a.length>0&&i.length>0?ac(t,o,a,i,r):i.length>0?Ki(t,o,null,i,0,i.length-1,r):a.length>0?Bs(t.$static$,a,0,a.length-1):void 0},oc=(t,e)=>{const n=t.$children$,s=t.$elm$;return n===Gt?t.$children$=Wi(s,e):n},ac=(t,e,n,s,r)=>{let i=0,o=0,a=n.length-1,c=n[0],l=n[a],u=s.length-1,d=s[0],h=s[u],f,g,$;const y=[],p=t.$static$;for(;i<=a&&o<=u;)if(c==null)c=n[++i];else if(l==null)l=n[--a];else if(d==null)d=s[++o];else if(h==null)h=s[--u];else if(Lt(c,d))y.push(ot(t,c,d,r)),c=n[++i],d=s[++o];else if(Lt(l,h))y.push(ot(t,l,h,r)),l=n[--a],h=s[--u];else if(Lt(c,h))c.$elm$,l.$elm$,y.push(ot(t,c,h,r)),Be(p,e,c.$elm$,l.$elm$.nextSibling),c=n[++i],h=s[--u];else if(Lt(l,d))c.$elm$,l.$elm$,y.push(ot(t,l,d,r)),Be(p,e,l.$elm$,c.$elm$),l=n[--a],d=s[++o];else{if(f===void 0&&(f=bc(n,i,a)),g=f[d.$key$],g===void 0){const b=vt(t,d,r,y);Be(p,e,b,c==null?void 0:c.$elm$)}else if($=n[g],_c($,d.$type$))y.push(ot(t,$,d,r)),n[g]=void 0,$.$elm$,Be(p,e,$.$elm$,c.$elm$);else{const b=vt(t,d,r,y);x(b,v=>{Be(p,e,v,c==null?void 0:c.$elm$)})}d=s[++o]}if(o<=u){const b=s[u+1]==null?null:s[u+1].$elm$;y.push(Ki(t,e,b,s,o,u,r))}let m=Es(y);return i<=a&&(m=x(m,()=>{Bs(p,n,i,a)})),m},Ln=(t,e)=>{const n=fe(t)?t.close:null,s=[];let r=t.firstChild;for(;(r=qs(r))&&(e(r)&&s.push(r),r=r.nextSibling,r!==n););return s},$t=(t,e)=>{switch(e){case"root":return Ln(t,hc);case"head":return Ln(t,dc);case"elements":return Ln(t,et)}},Wi=(t,e)=>$t(t,e).map(cc),cc=t=>{var e,n;return Ze(t)&&(n=(e=te(t))==null?void 0:e.$vdom$)!=null?n:yt(t)},yt=t=>{if(et(t)){const e=fe(t)?he:lc(t),n=new ce(t.localName,e,Gt,Zn(t));return n.$elm$=t,n}if(Ei(t)){const e=new ce(t.nodeName,{},Gt,null);return e.$text$=t.data,e.$elm$=t,e}throw new Error("invalid node")},lc=t=>{const e={},n=t.attributes,s=n.length;for(let r=0;r<s;r++){const i=n.item(r),o=i.name;o.includes(":")||(e[o]=o==="class"?uc(i.value):i.value)}return e},uc=t=>es(t).filter(e=>!e.startsWith("\u2B50\uFE0F")).join(" "),dc=t=>{const e=t.nodeType;return e===1?t.hasAttribute("q:head"):e===111},Vi=t=>t.nodeName==="Q:TEMPLATE",hc=t=>{const e=t.nodeType;if(e===3||e===111)return!0;if(e!==1)return!1;const n=t.nodeName;return n!=="Q:TEMPLATE"&&(n!=="HEAD"||t.hasAttribute("q:head"))},ot=(t,e,n,s)=>{e.$type$,n.$type$;const r=e.$elm$,i=n.$type$,o=t.$static$,a=i===":virtual",c=t.$cmpCtx$;if(n.$elm$=r,i==="#text"){const y=n.$signal$;return y&&st(2,c.$element$,y,r,"data"),void(e.$text$!==n.$text$&&qe(o,r,"data",n.$text$))}let l=!!(1&s);l||i!=="svg"||(s|=1,l=!0);const u=n.$props$,d=a&&"q:renderFn"in u,h=U(r),f=o.$containerState$;if(!d){const y=c.li,p=h.li;if(p.length=0,n.$props$=mc(o,h,c.$element$,e.$props$,u,l),y.length>0&&(At(p,y),y.length=0),p.length>0){const m=Rs(p);for(const b of m)$n(o,r,b[0],As(b[1],h)),gt(b[0],f)}return l&&n.$type$==="foreignObject"&&(s&=-2,l=!1),a&&"q:s"in u?(c.$slots$,void c.$slots$.push(n)):u[ft]!==void 0||a&&"qonce"in u?void 0:Us(t,e,n,"root",s)}const g=u.props;let $=Yi(h,t,g);return $||h.$componentQrl$||h.$element$.hasAttribute("q:id")||(ts(t,h),h.$componentQrl$=g["q:renderFn"],h.$componentQrl$,$=!0),$?x(Ls(t,h,s),()=>kr(t,h,n,s)):kr(t,h,n,s)},kr=(t,e,n,s)=>{const r=n.$children$,i=t.$static$,o=(l=>{var d;const u={};for(const h of l){const f=Gi(h);((d=u[f])!=null?d:u[f]=new ce(":virtual",{"q:s":""},[],f)).$children$.push(h)}return u})(r),a=Ds(t,e),c=Ji(e);for(const l of Object.keys(c.slots))if(!o[l]){const u=c.slots[l],d=Wi(u,"root");if(d.length>0){const h=te(u);h&&h.$vdom$&&(h.$vdom$.$children$=[]),Bs(i,d,0,d.length-1)}}for(const l of Object.keys(c.templates)){const u=c.templates[l];u&&(o[l]&&!c.slots[l]||(Pi(i,u),c.templates[l]=void 0))}return Es(Object.keys(o).map(l=>{const u=o[l],d=Qi(i,c,e.$element$,l),h=U(d),f=zi(h);return h.$vdom$=u,u.$elm$=d,Us(a,f,u,"root",s)}))},Ki=(t,e,n,s,r,i,o)=>{const a=[];for(;r<=i;++r){const c=s[r],l=vt(t,c,o,a);Be(t.$static$,e,l,n)}return Si(a)},Bs=(t,e,n,s)=>{for(;n<=s;++n){const r=e[n];r&&(r.$elm$,Pi(t,r.$elm$))}},Qi=(t,e,n,s)=>{const r=e.slots[s];if(r)return r;const i=e.templates[s];if(i)return i;const o=qi(t.$doc$,s);return((a,c,l)=>{a.$operations$.push({$operation$:bn,$args$:[c,l,c.firstChild]})})(t,n,o),e.templates[s]=o,o},Gi=t=>{var e;return(e=t.$props$[pe])!=null?e:""},vt=(t,e,n,s)=>{const r=e.$type$,i=t.$static$.$doc$,o=t.$cmpCtx$;if(r==="#text"){const v=e.$signal$,I=((S,w)=>S.createTextNode(w))(i,e.$text$);return v&&o&&st(2,o.$element$,v,I,"data"),e.$elm$=I}let a,c=!!(2&n),l=!!(1&n);l||r!=="svg"||(n|=1,l=!0);const u=r===":virtual",d=e.$props$,h="q:renderFn"in d,f=t.$static$;u?a=(v=>{const I=v.createComment("qv "),S=v.createComment("/qv");return new Ps(I,S)})(i):r==="head"?(a=i.head,n|=2,c=!0):(a=Os(i,r,l),n&=-3),e.$elm$=a,l&&r==="foreignObject"&&(l=!1,n&=-2);const g=U(a);if(h){Dn(a,e.$key$);const v=d["q:renderFn"];Yi(g,t,d.props),ts(t,g),g.$componentQrl$=v;const I=x(Ls(t,g,n),()=>{let S=e.$children$;if(S.length===0)return;S.length===1&&S[0].$type$===":skipRender"&&(S=S[0].$children$);const w=Ds(t,g),T=Ji(g),R=[];for(const O of S){const N=vt(w,O,n,R);O.$elm$,O.$elm$,_r(f,Qi(f,T,a,Gi(O)),N)}return Si(R)});return F(I)&&s.push(I),a}const $=u&&"q:s"in d,y=!u&&"ref"in d,p=g.li;if(e.$props$=$c(f,g,o==null?void 0:o.$element$,d,l),o&&!u){const v=o.$scopeIds$;v&&v.forEach(I=>{a.classList.add(I)}),o.$needAttachListeners$&&(At(p,o.li),o.$needAttachListeners$=!1)}$?(o.$slots$,Dn(a,e.$key$),V(a,"q:sref",o.$id$),o.$slots$.push(e),f.$addSlots$.push([a,o.$element$])):Dn(a,e.$key$);{c&&!u&&V(a,"q:head",""),(p.length>0||y)&&ts(t,g);const v=Rs(p);for(const I of v)$n(f,a,I[0],As(I[1],g)),gt(I[0],f.$containerState$)}if(d[ft]!==void 0)return a;let m=e.$children$;if(m.length===0)return a;m.length===1&&m[0].$type$===":skipRender"&&(m=m[0].$children$);const b=m.map(v=>vt(t,v,n,s));for(const v of b)_r(t.$static$,a,v);return a},Ji=t=>{var i,o;const e=(a=>a.$slots$||(a.$element$.parentElement,a.$slots$=fc(a)))(t),n={},s={},r=Array.from(t.$element$.childNodes).filter(Vi);for(const a of e)a.$elm$,n[(i=a.$key$)!=null?i:""]=a.$elm$;for(const a of r)s[(o=ae(a,pe))!=null?o:""]=a;return{slots:n,templates:s}},fc=t=>((e,n,s)=>{const r=((a,c,l)=>a.ownerDocument.createTreeWalker(a,128,{acceptNode(u){const d=Wt(u);return d&&ae(d,"q:sref")===l?1:2}}))(e,0,s),i=[];let o=null;for(;o=r.nextNode();)i.push(Wt(o));return i})(t.$element$.parentElement,0,t.$id$).map(yt),Tr=(t,e,n,s)=>(n in e&&e[n]!==s&&qe(t,e,n,s),!0),at=(t,e,n,s)=>($n(t,e,n.toLowerCase(),s),!0),ft="dangerouslySetInnerHTML",pc={style:(t,e,n,s)=>(qe(t,e.style,"cssText",Bi(s)),!0),class:(t,e,n,s,r)=>{const i=es(r),o=es(s);return((a,c,l,u)=>{a?a.$operations$.push({$operation$:wr,$args$:[c,l,u]}):wr(c,l,u)})(t,e,i.filter(a=>a&&!o.includes(a)),o.filter(a=>a&&!i.includes(a))),!0},value:Tr,checked:Tr,href:at,list:at,form:at,tabIndex:at,download:at,[ft]:(t,e,n,s)=>(ft in e?qe(t,e,ft,s):"innerHTML"in e&&qe(t,e,"innerHTML",s),!0),innerHTML:()=>!0},mc=(t,e,n,s,r,i)=>{var u;const o=gc(s,r),a={};if(o.length===0)return a;const c=(u=r[K])!=null?u:he,l=e.$element$;for(let d of o){if(d==="ref"){Ms(r[d],l);continue}let h=H(c[d])?c[d]:r[d];if(xs(d)){Xi(t,e,d,h);continue}d==="className"&&(d="class"),H(h)&&(st(1,n,h,l,d),h=h.value),d==="class"&&(r.class=h=Ui(h));const f=i?d:d.toLowerCase(),g=s[f];a[f]=h,g!==h&&Fs(t,l,d,h,g,i)}return a},Fs=(t,e,n,s,r,i)=>{const o=pc[n];o&&o(t,e,n,s,r)||(i||!(n in e)?(n.startsWith("preventdefault:")&&gt(n.slice(15),t.$containerState$),$n(t,e,n,s)):qe(t,e,n,s))},gc=(t,e)=>{const n=Object.keys(e),s=n.map(i=>i.toLowerCase()),r=Object.keys(t);return n.push(...r.filter(i=>!s.includes(i))),n.filter(i=>i!=="children")},$c=(t,e,n,s,r)=>{var l;const i=e.$element$,o=Object.keys(s),a={};if(o.length===0)return a;const c=(l=s[K])!=null?l:he;for(let u of o){if(u==="children")continue;if(u==="ref"){Ms(s[u],i);continue}let d=H(c[u])?c[u]:s[u];xs(u)?Xi(t,e,u,d):(u==="className"&&(u="class"),n&&H(d)&&(st(1,n,d,i,u),d=d.value),u==="class"&&(d=Ui(d)),a[r?u:u.toLowerCase()]=d,Fs(t,i,u,d,void 0,r))}return a},Yi=(t,e,n)=>{var c;const s=Object.keys(n);let r=t.$props$;if(r||(t.$props$=r=wn({[Le]:tn},e.$static$.$containerState$)),s.length===0)return!1;const i=ge(r),o=rt(r),a=o[K]=(c=n[K])!=null?c:he;for(const l of s)if(!Xa.includes(l))if(H(a[l]))o[Ce+l]=a[l];else{const u=n[l],d=o[l];o[l]=u,d!==u&&i.$notifySubs$(l)}return t.$dirty$},zs=(t,e,n,s)=>{if(s&&t.hasAttribute("q:s"))return void e.$rmSlots$.push(t);yc(t,n);const r=$t(t,"elements");for(const i of r)zs(i,e,n,!0)},yc=(t,e)=>{const n=te(t);n&&il(n,e)},Jt=(t,e)=>{fe(e)?e.appendTo(t):t.appendChild(e)},vc=(t,e)=>{fe(e)?e.remove():t.removeChild(e)},bn=(t,e,n)=>{fe(e)?e.insertBeforeTo(t,Vt(n)):t.insertBefore(e,Vt(n))},bc=(t,e,n)=>{const s={};for(let r=e;r<=n;++r){const i=t[r].$key$;i!=null&&(s[i]=r)}return s},Xi=(t,e,n,s)=>{const r=t.$containerState$;xi(e.li,n,s,r.$containerEl$)},Lt=(t,e)=>t.$type$===e.$type$&&t.$key$===e.$key$,_c=(t,e)=>t.$type$===e,Hs=()=>{const t=ki();let e=t.$qrl$;if(e)e.$captureRef$;else{const n=t.$element$,s=Ai(n),r=U(n);e=mn(decodeURIComponent(String(t.$url$)),s),oo(s),co(e,r)}return e.$captureRef$},wc=(t,e)=>{if(t[0]===0){const n=t[1];et(n)?Ic(n,e):Zi(n,e)}else Ec(t,e)},Ic=(t,e)=>{const n=tt();n||oo(e.$containerEl$);const s=U(t);if(s.$componentQrl$,!s.$dirty$)if(s.$dirty$=!0,e.$hostsRendering$!==void 0)e.$renderPromise$,e.$hostsStaging$.add(t);else{if(n)return;e.$hostsNext$.add(t),_n(e)}},Ec=(t,e)=>{e.$hostsRendering$!==void 0?(e.$renderPromise$,e.$opsNext$.add(t)):(e.$opsNext$.add(t),_n(e))},Zi=(t,e)=>{t.$flags$&bt||(t.$flags$|=bt,e.$hostsRendering$!==void 0?(e.$renderPromise$,e.$watchStaging$.add(t)):(e.$watchNext$.add(t),_n(e)))},_n=t=>(t.$renderPromise$===void 0&&(t.$renderPromise$=pn().nextTick(()=>kc(t))),t.$renderPromise$),Sc=()=>{const[t]=Hs();Zi(t,Qt(Ai(t.$el$)))},kc=async t=>{const e=fn(t.$containerEl$);try{const n=ji(e,t),s=n.$static$,r=t.$hostsRendering$=new Set(t.$hostsNext$);t.$hostsNext$.clear(),await Ac(t),t.$hostsStaging$.forEach(o=>{r.add(o)}),t.$hostsStaging$.clear();const i=Array.from(r);Rc(i);for(const o of i)if(!s.$hostElements$.has(o)){const a=U(o);if(a.$componentQrl$){o.isConnected,s.$roots$.push(a);try{await Ls(n,a,Tc(o.parentElement))}catch{}}}if(t.$opsNext$.forEach(o=>((a,c)=>{var d;const l=(d=c[5])!=null?d:"value",u=c[2][l];switch(c[0]){case 1:{const h=c[4],f=c[3],g=te(f),$=f.namespaceURI===js;let y;if(g&&g.$vdom$){const p=$?h:h.toLowerCase();y=g.$vdom$.$props$[p],g.$vdom$.$props$[p]=u}return Fs(a,f,h,u,y,$)}case 2:return qe(a,c[3],"data",u)}})(s,o)),t.$opsNext$.clear(),s.$operations$.push(...s.$postOperations$),s.$operations$.length===0)return void await Ar(t,s);await pn().raf(()=>((({$static$:o})=>{Va(o)})(n),Ar(t,s)))}catch(n){kt(n)}},Tc=t=>{let e=0;return t&&(t.namespaceURI===js&&(e|=1),t.tagName==="HEAD"&&(e|=2)),e},Ar=async(t,e)=>{await xc(t,(n,s)=>(n.$flags$&Nc)!=0&&(!s||e.$hostElements$.has(n.$el$))),t.$hostsStaging$.forEach(n=>{t.$hostsNext$.add(n)}),t.$hostsStaging$.clear(),t.$hostsRendering$=void 0,t.$renderPromise$=void 0,t.$hostsNext$.size+t.$watchNext$.size+t.$opsNext$.size>0&&_n(t)},Ac=async t=>{const e=t.$containerEl$,n=[],s=[],r=o=>(o.$flags$&eo)!=0,i=o=>(o.$flags$&Cc)!=0;t.$watchNext$.forEach(o=>{r(o)&&(s.push(x(o.$qrl$.$resolveLazy$(e),()=>o)),t.$watchNext$.delete(o)),i(o)&&(n.push(x(o.$qrl$.$resolveLazy$(e),()=>o)),t.$watchNext$.delete(o))});do if(t.$watchStaging$.forEach(o=>{r(o)?s.push(x(o.$qrl$.$resolveLazy$(e),()=>o)):i(o)?n.push(x(o.$qrl$.$resolveLazy$(e),()=>o)):t.$watchNext$.add(o)}),t.$watchStaging$.clear(),s.length>0){const o=await Promise.all(s);ns(o),await Promise.all(o.map(a=>Yt(a,t))),s.length=0}while(t.$watchStaging$.size>0);if(n.length>0){const o=await Promise.all(n);ns(o),o.forEach(a=>Yt(a,t))}},xc=async(t,e)=>{const n=[],s=t.$containerEl$;t.$watchNext$.forEach(r=>{e(r,!1)&&(n.push(x(r.$qrl$.$resolveLazy$(s),()=>r)),t.$watchNext$.delete(r))});do if(t.$watchStaging$.forEach(r=>{e(r,!0)?n.push(x(r.$qrl$.$resolveLazy$(s),()=>r)):t.$watchNext$.add(r)}),t.$watchStaging$.clear(),n.length>0){const r=await Promise.all(n);ns(r),await Promise.all(r.map(i=>Yt(i,t))),n.length=0}while(t.$watchStaging$.size>0)},Rc=t=>{t.sort((e,n)=>2&e.compareDocumentPosition(Vt(n))?1:-1)},ns=t=>{t.sort((e,n)=>e.$el$===n.$el$?e.$index$<n.$index$?-1:1:(2&e.$el$.compareDocumentPosition(Vt(n.$el$)))!=0?1:-1)},Nc=1,eo=2,bt=4,xr=8,Cc=16,Oc=(t,e)=>{const{get:n,set:s,ctx:r,i}=xt();if(n)return;const o=r.$hostElement$,a=r.$renderCtx$.$static$.$containerState$,c=new ss(bt|eo,i,o,t,void 0),l=U(o);s(!0),t.$resolveLazy$(a.$containerEl$),l.$watches$||(l.$watches$=[]),l.$watches$.push(c),Ma(r,()=>Yt(c,a,r.$renderCtx$)),tt()&&Dc(c,e==null?void 0:e.eagerness)},to=t=>!!t.$resource$,Yt=async(t,e,n)=>(t.$flags$,to(t)?Pc(t,e):qc(t,e,n)),Pc=(t,e,n)=>{t.$flags$&=~bt,Xt(t);const s=t.$el$,r=me(s,void 0,"WatchEvent"),{$subsManager$:i}=e;t.$qrl$.$captureRef$;const o=t.$qrl$.getFn(r,()=>{i.$clearSub$(t)}),a=[],c=t.$resource$,l=En(c),u={track:(p,m)=>{if(ee(p)){const v=me();return v.$subscriber$=t,Se(v,p)}const b=ge(p);return b?b.$addSub$([0,t,m]):_s(hn(26),p),m?p[m]:H(p)?p.value:p},cleanup(p){a.push(p)},previous:l.resolved};let d,h,f=!1;const g=(p,m)=>!f&&(f=!0,p?(f=!0,c.state="resolved",c.resolved=m,c.error=void 0,d(m)):(f=!0,c.state="rejected",c.resolved=void 0,c.error=m,h(m)),!0);Se(r,()=>{c.state="pending",c.resolved=void 0,c.promise=new Promise((p,m)=>{d=p,h=m})}),t.$destroy$=In(()=>{a.forEach(p=>p())});const $=Is(()=>x(n,()=>o(u)),p=>{g(!0,p)},p=>{g(!1,p)}),y=l.timeout;return y?Promise.race([$,La(y).then(()=>{g(!1,"timeout")&&Xt(t)})]):$},qc=(t,e,n)=>{t.$flags$&=~bt,Xt(t);const s=t.$el$,r=me(s,void 0,"WatchEvent"),{$subsManager$:i}=e,o=t.$qrl$.getFn(r,()=>{i.$clearSub$(t)}),a=[];t.$destroy$=In(()=>{a.forEach(l=>l())});const c={track:(l,u)=>{if(ee(l)){const h=me();return h.$subscriber$=t,Se(h,l)}const d=ge(l);return d?d.$addSub$([0,t,u]):_s(hn(26),l),u?l[u]:l},cleanup(l){a.push(l)}};return Is(()=>o(c),l=>{ee(l)&&a.push(l)},l=>{Mi(l,s,n)})},Xt=t=>{const e=t.$destroy$;if(e){t.$destroy$=void 0;try{e()}catch(n){kt(n)}}},no=t=>{t.$flags$&xr?(t.$flags$&=~xr,(0,t.$qrl$)()):Xt(t)},Dc=(t,e)=>{e==="visible"?za("qvisible",Mn(t)):e==="load"?yr("qinit",Mn(t)):e==="idle"&&yr("qidle",Mn(t))},Mn=t=>{const e=t.$qrl$;return Qs(e.$chunk$,"_hW",Sc,null,null,[t],e.$symbol$)};class ss{constructor(e,n,s,r,i){this.$flags$=e,this.$index$=n,this.$el$=s,this.$qrl$=r,this.$resource$=i}}const Lc=t=>({__brand:"resource",promise:void 0,resolved:void 0,error:void 0,state:"pending",timeout:t==null?void 0:t.timeout}),Mc={prefix:"",test:t=>lo(t),collect:(t,e,n)=>{if(t.$captureRef$)for(const s of t.$captureRef$)C(s,e,n)},serialize:(t,e)=>Ts(t,{$getObjId$:e}),prepare:(t,e)=>mn(t,e.$containerEl$),fill:(t,e)=>{t.$capture$&&t.$capture$.length>0&&(t.$captureRef$=t.$capture$.map(e),t.$capture$=null)}},jc={prefix:"",test:t=>{return Q(e=t)&&e instanceof ss;var e},collect:(t,e,n)=>{C(t.$qrl$,e,n),t.$resource$&&C(t.$resource$,e,n)},serialize:(t,e)=>((n,s)=>{let r=`${en(n.$flags$)} ${en(n.$index$)} ${s(n.$qrl$)} ${s(n.$el$)}`;return to(n)&&(r+=` ${s(n.$resource$)}`),r})(t,e),prepare:t=>(e=>{const[n,s,r,i,o]=e.split(" ");return new ss(ze(n),ze(s),i,r,o)})(t),fill:(t,e)=>{t.$el$=e(t.$el$),t.$qrl$=e(t.$qrl$),t.$resource$&&(t.$resource$=e(t.$resource$))}},Uc={prefix:"",test:t=>{return Q(e=t)&&e.__brand==="resource";var e},collect:(t,e,n)=>{C(t.promise,e,n),C(t.resolved,e,n)},serialize:(t,e)=>((n,s)=>{const r=n.state;return r==="resolved"?`0 ${s(n.resolved)}`:r==="pending"?"1":`2 ${s(n.error)}`})(t,e),prepare:t=>(e=>{const[n,s]=e.split(" "),r=Lc(void 0);return r.promise=Promise.resolve(),n==="0"?(r.state="resolved",r.resolved=s):n==="1"?(r.state="pending",r.promise=new Promise(()=>{})):n==="2"&&(r.state="rejected",r.error=s),r})(t),fill:(t,e)=>{if(t.state==="resolved")t.resolved=e(t.resolved),t.promise=Promise.resolve(t.resolved);else if(t.state==="rejected"){const n=Promise.reject(t.error);n.catch(()=>null),t.error=e(t.error),t.promise=n}}},Bc={prefix:"",test:t=>t instanceof URL,serialize:t=>t.href,prepare:t=>new URL(t),fill:void 0},Fc={prefix:"",test:t=>t instanceof Date,serialize:t=>t.toISOString(),prepare:t=>new Date(t),fill:void 0},zc={prefix:"\x07",test:t=>t instanceof RegExp,serialize:t=>`${t.flags} ${t.source}`,prepare:t=>{const e=t.indexOf(" "),n=t.slice(e+1),s=t.slice(0,e);return new RegExp(n,s)},fill:void 0},Hc={prefix:"",test:t=>t instanceof Error,serialize:t=>t.message,prepare:t=>{const e=new Error(t);return e.stack=void 0,e},fill:void 0},Wc={prefix:"",test:t=>Ii(t),serialize:void 0,prepare:(t,e,n)=>n,fill:void 0},Zt=Symbol("serializable-data"),Vc={prefix:"",test:t=>gl(t),serialize:(t,e)=>{const[n]=t[Zt];return Ts(n,{$getObjId$:e})},prepare:(t,e)=>{const n=t.indexOf("{"),s=n==-1?t:t.slice(0,n),r=mn(s,e.$containerEl$);return se(r)},fill:(t,e)=>{const[n]=t[Zt];n.$capture$&&n.$capture$.length>0&&(n.$captureRef$=n.$capture$.map(e),n.$capture$=null)}},Ws=[Mc,{prefix:"",test:t=>t instanceof _t,collect:(t,e,n)=>(C(t.untrackedValue,e,n),n&&io(t[we],e),t),serialize:(t,e)=>e(t.untrackedValue),prepare:(t,e)=>new _t(t,e.$subsManager$.$createManager$()),subs:(t,e)=>{t[we].$addSubs$(e)},fill:(t,e)=>{t.untrackedValue=e(t.untrackedValue)}},{prefix:"",test:t=>t instanceof Qe,collect:(t,e,n)=>(C(t.ref,e,n),t),serialize:(t,e)=>`${e(t.ref)} ${t.prop}`,prepare:t=>{const[e,n]=t.split(" ");return new Qe(e,n)},fill:(t,e)=>{t.ref=e(t.ref)}},jc,Uc,Bc,Fc,zc,Hc,Wc,Vc,{prefix:"",test:t=>typeof t=="function"&&t.__qwik_serializable__!==void 0,serialize:t=>t.toString(),prepare:t=>{const e=new Function("return "+t)();return e.__qwik_serializable__=!0,e},fill:void 0},{prefix:"",test:t=>typeof t=="number",serialize:t=>String(t),prepare:t=>Number(t),fill:void 0}],Kc=Ws.filter(t=>t.collect),so=async(t,e)=>{const n=Xc(e),s=[];for(const p of t)if(p.$watches$)for(const m of p.$watches$)no(m);for(const p of t){const m=p.$element$,b=p.li;for(const v of b){const I=v[0],S=v[1],w=S.$captureRef$;if(w)for(const T of w)C(T,n,!0);Ze(m)&&s.push({key:I,qrl:S,el:m})}}if(s.length===0)return{state:{ctx:{},objs:[],subs:[]},objs:[],listeners:[],mode:"static"};let r;for(;(r=n.$promises$).length>0;)n.$promises$=[],await Promise.allSettled(r);const i=n.$elements$.length>0;if(i){for(const p of n.$elements$)ro(te(p),n);for(const p of t)if(p.$props$&&Yc(p,n),p.$contexts$)for(const m of p.$contexts$.values())C(m,n,!1)}for(;(r=n.$promises$).length>0;)n.$promises$=[],await Promise.all(r);const o=new Map,a=Array.from(n.$objSet$.keys()),c=new Map,l=p=>{let m=o.get(p);return m===void 0&&(m=(b=>{const v=te(b);return v?v.$id$:null})(p),m?m="#"+m:console.warn("Missing ID",p),o.set(p,m)),m},u=p=>{let m="";if(F(p)){const{value:v,resolved:I}=tl(p);p=v,m+=I?"~":"_"}if(Q(p)){const v=rt(p);if(v)m+="!",p=v;else if(et(p)){const I=l(p);return I?I+m:null}}const b=c.get(p);return b?b+m:null},d=p=>{const m=u(p);if(m===null)throw B(27,p);return m},h=new Map;a.forEach(p=>{var I,S;const m=(I=Qc(p,e))==null?void 0:I.$subs$;if(!m)return null;const b=(S=dl(p))!=null?S:0,v=[];b>0&&v.push(b);for(const w of m){const T=w[1];w[0]===0&&Xe(T)&&fe(T)&&!n.$elements$.includes(T)||v.push(w)}v.length>0&&h.set(p,v)}),a.sort((p,m)=>(h.has(p)?0:1)-(h.has(m)?0:1));let f=0;for(const p of a)c.set(p,en(f)),f++;if(n.$noSerialize$.length>0){const p=c.get(void 0);for(const m of n.$noSerialize$)c.set(m,p)}const g=[];for(const p of a){const m=h.get(p);if(m==null)break;g.push(m.map(b=>typeof b=="number"?`_${b}`:tc(b,u)).filter(Xn))}g.length,h.size;const $=a.map(p=>{if(p===null)return null;const m=typeof p;switch(m){case"undefined":return"";case"number":if(!Number.isFinite(p))break;return p;case"string":case"boolean":return p}const b=((v,I,S)=>{for(const w of Ws)if(w.test(v)){let T=w.prefix;return w.serialize&&(T+=w.serialize(v,I,S)),T}})(p,d,e);if(b!==void 0)return b;if(m==="object"){if(q(p))return p.map(d);if(ws(p)){const v={};for(const I of Object.keys(p))v[I]=d(p[I]);return v}}throw B(3,p)}),y={};return t.forEach(p=>{const m=p.$element$,b=p.$refMap$,v=p.$props$,I=p.$contexts$,S=p.$watches$,w=p.$componentQrl$,T=p.$seq$,R={},O=fe(m)&&n.$elements$.includes(m);let N=!1;if(b.length>0){const P=b.map(d).join(" ");P&&(R.r=P,N=!0)}if(i){if(O&&v&&(R.h=d(v)+" "+d(w),N=!0),S&&S.length>0){const P=S.map(u).filter(Xn).join(" ");P&&(R.w=P,N=!0)}if(O&&T&&T.length>0){const P=T.map(d).join(" ");R.s=P,N=!0}if(I){const P=[];I.forEach((re,L)=>{P.push(`${L}=${d(re)}`)});const Te=P.join(" ");Te&&(R.c=Te,N=!0)}}if(N){const P=l(m);y[P]=R}}),{state:{ctx:y,objs:$,subs:g},objs:a,listeners:s,mode:i?"render":"listeners"}},Qc=(t,e)=>{if(!Q(t))return;if(t instanceof _t)return ge(t);const n=e.$proxyMap$.get(t);return n?ge(n):void 0},Gc=(t,e,n)=>{if(!n.fill(t)&&t&&typeof t=="object"){if(q(t))for(let s=0;s<t.length;s++)t[s]=e(t[s]);else if(ws(t))for(const s of Object.keys(t))t[s]=e(t[s])}},Jc={"!":(t,e)=>{var n;return(n=e.$proxyMap$.get(t))!=null?n:Vs(t,e)},"~":t=>Promise.resolve(t),_:t=>Promise.reject(t)},Yc=(t,e)=>{var s;const n=t.$parent$;if(n&&t.$props$&&e.$elements$.includes(n.$element$)){const r=(s=ge(t.$props$))==null?void 0:s.$subs$,i=t.$element$;r&&r.some(o=>o[0]===0&&o[1]===i)&&el(i,e)}},Xc=t=>({$containerState$:t,$seen$:new Set,$objSet$:new Set,$noSerialize$:[],$elements$:[],$promises$:[]}),Zc=(t,e)=>{e.$elements$.includes(t)||e.$elements$.push(t)},el=(t,e)=>{if(e.$elements$.includes(t))return;const n=te(t);n&&(e.$elements$.push(t),ro(n,e))},ro=(t,e)=>{if(t.$props$&&C(t.$props$,e,!1),t.$componentQrl$&&C(t.$componentQrl$,e,!1),t.$seq$)for(const n of t.$seq$)C(n,e,!1);if(t.$watches$)for(const n of t.$watches$)C(n,e,!1);if(t.$contexts$)for(const n of t.$contexts$.values())C(n,e,!1)},io=(t,e)=>{if(e.$seen$.has(t))return;e.$seen$.add(t);const n=t.$subs$;for(const s of n){const r=s[1];Xe(r)&&fe(r)?s[0]===0&&Zc(r,e):C(r,e,!0)}},rs=Symbol(),tl=t=>t[rs],C=(t,e,n)=>{if(t!==null){const r=typeof t;switch(r){case"function":case"object":{const i=e.$seen$;if(i.has(t))return;if(i.add(t),!ul(t))return e.$objSet$.add(void 0),void e.$noSerialize$.push(t);const o=t,a=rt(t);if(a){if(t=a,i.has(t))return;i.add(t),n&&io(ge(o),e)}if(((l,u,d)=>{for(const h of Kc)if(h.test(l))return h.collect(l,u,d),!0;return!1})(t,e,n))return void e.$objSet$.add(t);if(F(t))return void e.$promises$.push((s=t,s.then(l=>{const u={resolved:!0,value:l};return s[rs]=u,l},l=>{const u={resolved:!1,value:l};return s[rs]=u,l})).then(l=>{C(l,e,n)}));if(r==="object"){if(Xe(t))return;if(q(t))for(let l=0;l<t.length;l++)C(t[l],e,n);else if(ws(t))for(const l of Object.keys(t))C(t[l],e,n)}break}}}var s;e.$objSet$.add(t)},is=t=>Ze(t)&&t.hasAttribute("q:container"),nl=t=>{const e=qs(t);return!!et(e)&&e.hasAttribute("q:id")},en=t=>t.toString(36),ze=t=>parseInt(t,36),sl=t=>{const e=t.indexOf(":");return t&&t.slice(e+1).replace(/-./g,n=>n[1].toUpperCase())},oo=t=>{ae(t,"q:container")==="paused"&&((e=>{if(!is(e))return;let n=0;const s=fn(e),r=(h=>{let f=h.lastElementChild;for(;f;){if(f.tagName==="SCRIPT"&&ae(f,"type")==="qwik/json")return f;f=f.previousElementSibling}})(e===s.documentElement?s.body:e);if(!r)return;r.remove();const i=Qt(e);((h,f)=>{const g=h.ownerDocument.head;h.querySelectorAll("style[q\\:style]").forEach($=>{f.$styleIds$.add(ae($,"q:style")),g.appendChild($)})})(e,i);const o=JSON.parse((r.textContent||"{}").replace(/\\x3C(\/?script)/g,"<$1")),a=new Map,c=h=>((f,g,$,y)=>{if(typeof f=="string"&&f.length,f.startsWith("#"))return g.has(f),g.get(f);const p=ze(f);$.length;let m=$[p];for(let b=f.length-1;b>=0;b--){const v=f[b],I=Jc[v];if(!I)break;m=I(m,y)}return m})(h,a,o.objs,i),l=s.createTreeWalker(e,129,{acceptNode(h){if(dn(h)){const f=h.data;if(f.startsWith("qv ")){const g=Di(h),$=new Ps(h,g),y=ae($,"q:id");y&&(U($).$id$=y,a.set("#"+y,$),n=Math.max(n,ze(y)))}else if(f.startsWith("t=")){const g=f.slice(2);a.set("#"+f.slice(2),($=>{const y=$.nextSibling;if(Ei(y))return y;{const p=$.ownerDocument.createTextNode("");return $.parentElement.insertBefore(p,$),p}})(h)),n=Math.max(n,ze(g))}return 3}return is(h)?2:h.hasAttribute("q:id")?1:3}});let u=null;for(;u=l.nextNode();){const h=ae(u,"q:id"),f=U(u);f.$id$=h,f.$vdom$=yt(u),a.set("#"+h,u),n=Math.max(n,ze(h))}i.$elementIndex$=++n;const d=((h,f,g)=>{const $=new Map,y=new Map;return{prepare(p){for(const m of Ws){const b=m.prefix;if(p.startsWith(b)){const v=m.prepare(p.slice(b.length),f,g);return m.fill&&$.set(v,m),m.subs&&y.set(v,m),v}}return p},subs(p,m){const b=y.get(p);return!!b&&(b.subs(p,m,f),!0)},fill(p){const m=$.get(p);return!!m&&(m.fill(p,h,f),!0)}}})(c,i,s);((h,f)=>{for(let g=0;g<h.length;g++){const $=h[g];Tt($)&&(h[g]=$===""?void 0:f.prepare($))}})(o.objs,d),((h,f,g,$,y)=>{for(let p=0;p<f.length;p++){const m=h[p],b=f[p];if(b){const v=[];let I=0;for(const S of b)S.startsWith("_")?I=parseInt(S.slice(1),10):v.push(nc(S,g));I>0&&(m[Le]=I),y.subs(m,v)||wn(m,$,v)}}})(o.objs,o.subs,c,i,d);for(const h of o.objs)Gc(h,c,d);for(const h of Object.keys(o.ctx)){h.startsWith("#");const f=o.ctx[h],g=a.get(h),$=U(g),y=f.r,p=f.s,m=f.h,b=f.c,v=f.w;if(y&&(Ze(g),$.$refMap$=y.split(" ").map(c),$.li=Fa($,e)),p&&($.$seq$=p.split(" ").map(c)),v&&($.$watches$=v.split(" ").map(c)),b){$.$contexts$=new Map;for(const I of b.split(" ")){const[S,w]=I.split("=");$.$contexts$.set(S,c(w))}}if(m){const[I,S]=m.split(" "),w=g.getAttribute("q:sstyle");$.$scopeIds$=w?w.split(" "):null,$.$mounted$=!0,$.$props$=c(I),$.$componentQrl$=c(S)}}V(e,"q:container","resumed"),((h,f,g,$)=>{h&&typeof CustomEvent=="function"&&h.dispatchEvent(new CustomEvent("qresume",{detail:void 0,bubbles:!0,composed:!0}))})(e)})(t),rl(t))},rl=t=>{t.qwik={pause:()=>(async(e,n)=>{const s=fn(e),r=s.documentElement,i=Ii(e)?r:e;if(ae(i,"q:container")==="paused")throw B(21);const o=i===s.documentElement?s.body:i,a=await(async l=>{const u=Qt(l),d=((h,f)=>{f(h);const g=h.ownerDocument.createTreeWalker(h,129,{acceptNode:p=>is(p)?2:f(p)?1:3}),$=[];let y=null;for(;y=g.nextNode();)$.push(qs(y));return $})(l,nl).map(te);return so(d,u)})(i),c=s.createElement("script");return V(c,"type","qwik/json"),c.textContent=JSON.stringify(a.state,void 0,void 0).replace(/<(\/?script)/g,"\\x3C$1"),o.appendChild(c),V(i,"q:container","paused"),a})(t),state:Qt(t)}},te=t=>t._qc_,U=t=>{let e=te(t);return e||(t._qc_=e={$dirty$:!1,$mounted$:!1,$needAttachListeners$:!1,$id$:"",$element$:t,$refMap$:[],li:[],$watches$:null,$seq$:null,$slots$:null,$scopeIds$:null,$appendStyles$:null,$props$:null,$vdom$:null,$componentQrl$:null,$contexts$:null,$parent$:null}),e},il=(t,e)=>{var s;const n=t.$element$;(s=t.$watches$)==null||s.forEach(r=>{e.$clearSub$(r),no(r)}),t.$componentQrl$&&e.$clearSub$(n),t.$componentQrl$=null,t.$seq$=null,t.$watches$=null,t.$dirty$=!1,n._qc_=void 0},Rr=["on","window:on","document:on"],ol=["on","on-window","on-document"],ao=t=>{let e="on";for(let n=0;n<Rr.length;n++){const s=Rr[n];if(t.startsWith(s)){e=ol[n],t=t.slice(s.length);break}}return e+":"+(t.startsWith("-")?Cs(t.slice(1)):t.toLowerCase())},co=(t,e)=>(t.$capture$,t.$captureRef$=t.$capture$.map(n=>{const s=parseInt(n,10),r=e.$refMap$[s];return e.$refMap$.length,r})),tn=2,os=Symbol("proxy target"),Le=Symbol("proxy flags"),we=Symbol("proxy manager"),K=Symbol("IMMUTABLE"),Ce="$$",Vs=(t,e,n=0)=>e.$proxyMap$.get(t)||(n!==0&&(t[Le]=n),wn(t,e,void 0));class _t{constructor(e,n){this.untrackedValue=e,this[we]=n}get value(){var n;const e=(n=Ht())==null?void 0:n.$subscriber$;return e&&this[we].$addSub$([0,e,void 0]),this.untrackedValue}set value(e){const n=this[we],s=this.untrackedValue;n&&s!==e&&(this.untrackedValue=e,n.$notifySubs$())}}const H=t=>t instanceof _t||t instanceof Qe,st=(t,e,n,s,r)=>{const i=n instanceof Qe?[t,e,rt(n.ref),s,r,n.prop==="value"?void 0:n.prop]:[t,e,n,s,r,void 0];ge(n).$addSub$(i)},wn=(t,e,n)=>{En(t),e.$proxyMap$.has(t);const s=e.$subsManager$.$createManager$(n),r=new Proxy(t,new al(e,s));return e.$proxyMap$.set(t,r),r};class al{constructor(e,n){this.$containerState$=e,this.$manager$=n}get(e,n){var l,u;if(typeof n=="symbol")return n===os?e:n===we?this.$manager$:e[n];let s;const r=(l=e[Le])!=null?l:0,i=Ht(),o=(1&r)!=0,a=(r&tn)!=0;let c=e[n];if(i&&(s=i.$subscriber$),a){const d=e[Ce+n];n in e&&!d&&!((u=e[K])!=null&&u[n])||(s=null),d&&(c=d.value)}if(s){const d=q(e);this.$manager$.$addSub$([0,s,d?void 0:n])}return o?cl(c,this.$containerState$):c}set(e,n,s){var o;if(typeof n=="symbol")return e[n]=s,!0;const r=(o=e[Le])!=null?o:0;if((r&tn)!=0)throw B(17);const i=(1&r)!=0?En(s):s;return q(e)?(e[n]=i,this.$manager$.$notifySubs$(),!0):(e[n]!==i&&(e[n]=i,this.$manager$.$notifySubs$(n)),!0)}has(e,n){if(n===os)return!0;const s=Object.prototype.hasOwnProperty;return!!s.call(e,n)||!(typeof n!="string"||!s.call(e,Ce+n))}ownKeys(e){let n=null;const s=Ht();return s&&(n=s.$subscriber$),n&&this.$manager$.$addSub$([0,n,void 0]),Reflect.ownKeys(e).map(r=>typeof r=="string"&&r.startsWith(Ce)?r.slice(Ce.length):r)}}const cl=(t,e)=>{if(lo(t))return t;if(Q(t)){if(Object.isFrozen(t))return t;const n=En(t);return n!==t||Xe(n)?t:ll(n)?e.$proxyMap$.get(t)||Vs(t,e,1):t}return t},Ks=new WeakSet,ll=t=>!Q(t)&&!ee(t)||!Ks.has(t),ul=t=>!Ks.has(t),In=t=>(t!=null&&Ks.add(t),t),En=t=>{var e;return Q(t)&&(e=rt(t))!=null?e:t},rt=t=>t[os],ge=t=>t[we],dl=t=>t[Le];class Qe{constructor(e,n){this.ref=e,this.prop=n}get[we](){return ge(this.ref)}get value(){return this.ref[this.prop]}set value(e){this.ref[this.prop]=e}}const jn=(t,e)=>{var r;if(!Q(t))return;if(t instanceof _t||t instanceof Qe)return t;const n=rt(t);if(n){const i=n[Ce+e];return i||new Qe(t,e)}const s=(r=t[K])==null?void 0:r[e];return H(s)?s:t[e]},lo=t=>typeof t=="function"&&typeof t.getSymbol=="function",Qs=(t,e,n,s,r,i,o)=>{let a;const c=m=>{a||(a=m)},l=async m=>{if(m&&c(m),n!==null)return n;if(s!==null)return n=s().then(b=>n=b[e]);{if(!t)throw B(31,e);if(!a)throw B(30,t,e);const b=pn().importSymbol(a,t,e);return n=x(b,v=>n=v)}},u=m=>n!==null?n:l(m),d=(m,b)=>(...v)=>{const I=ml(),S=u();return x(S,w=>{if(ee(w)){if(b&&b()===!1)return;const T={...h(m),$qrl$:y};return fl(e,T.$element$,I),Se(T,w,...v)}throw B(10)})},h=m=>m==null?me():q(m)?Ti(m):m,f=async function(...m){return await d()(...m)},g=o!=null?o:e,$=hl(g),y=f;return Object.assign(f,{getSymbol:()=>g,getHash:()=>$,resolve:l,$resolveLazy$:u,$setContainer$:c,$chunk$:t,$symbol$:e,$refSymbol$:o,$hash$:$,getFn:d,$capture$:r,$captureRef$:i,$dev$:null})},hl=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t},fl=(t,e,n)=>{pl("qsymbol",{symbol:t,element:e,reqTime:n})},pl=(t,e)=>{tt()||typeof document!="object"||document.dispatchEvent(new CustomEvent(t,{bubbles:!1,detail:e}))},ml=()=>tt()?0:typeof performance=="object"?performance.now():0,se=t=>{function e(n,s){const r=t.$hash$+":"+(s||"");return _(Nt,{"q:renderFn":t,[pe]:n[pe],children:n.children,props:n},r)}return e[Zt]=[t],e},gl=t=>typeof t=="function"&&t[Zt]!==void 0,Gs=t=>{var n;const e=(n=t.name)!=null?n:"";return _(Nt,{"q:s":""},e)},$l=async(t,e)=>{var l;const n=e.containerTagName,s=as(1).$element$,r=Hi(s),i=ji({nodeType:9},r),o=(l=e.beforeContent)!=null?l:[],a={rCtx:i,$contexts$:[],projectedChildren:void 0,projectedContext:void 0,hostCtx:null,invocationContext:void 0,headNodes:n==="html"?o:[],$pendingListeners$:[]},c={...e.containerAttributes,"q:container":"paused","q:version":"0.11.0","q:render":"ssr","q:base":e.base,children:n==="html"?[t]:[o,t]};r.$envData$={url:e.url,...e.envData},t=_(n,c),r.$hostsRendering$=new Set,r.$renderPromise$=Promise.resolve().then(()=>yl(t,a,e.stream,r,e)),await r.$renderPromise$},yl=async(t,e,n,s,r)=>{const i=r.beforeClose;return await fo(t,e,n,0,i?o=>{const a=i(e.$contexts$,s);return Y(a,e,o,0,void 0)}:void 0),e.rCtx.$static$},uo=(t,e,n,s,r,i,o)=>{var f;const a=t.props,c=a["q:renderFn"];if(c)return e.$componentQrl$=c,bl(s,r,e,t,i,o);let l="<!--qv"+vl(a);const u="q:s"in a,d=t.key!=null?String(t.key):null;if(u&&((f=s.hostCtx)==null||f.$id$,l+=" q:sref="+s.hostCtx.$id$),d!=null&&(l+=" q:key="+d),l+="-->",r.write(l),n)for(const g of n)ho(g.type,g.props,r);const h=po(a.children,s,r,i);return x(h,()=>{var $;if(!u&&!o)return void r.write(Nr);let g;if(u){const y=($=s.projectedChildren)==null?void 0:$[d];y&&(s.projectedChildren[d]=void 0,g=Y(y,s.projectedContext,r,i))}return o&&(g=x(g,()=>o(r))),x(g,()=>{r.write(Nr)})})},Nr="<!--/qv-->",vl=t=>{let e="";for(const n of Object.keys(t)){if(n==="children")continue;const s=t[n];s!=null&&(e+=" "+(s===""?n:n+"="+s))}return e},ho=(t,e,n)=>{if(n.write("<"+t+(r=>{let i="";for(const o of Object.keys(r)){if(o==="dangerouslySetInnerHTML")continue;const a=r[o];a!=null&&(i+=" "+(a===""?o:o+'="'+a+'"'))}return i})(e)+">"),!!$o[t])return;const s=e.dangerouslySetInnerHTML;s!=null&&n.write(s),n.write(`</${t}>`)},bl=(t,e,n,s,r,i)=>{const o=s.props;return Il(t.rCtx,n,o.props),x(Kt(t.rCtx,n),a=>{const c=n.$element$,l=a.rCtx,u=me(c,void 0);u.$subscriber$=c,u.$renderCtx$=l;const d={...t,rCtx:l},h={...t,projectedChildren:_l(o.children,t),projectedContext:d,rCtx:l,invocationContext:u},f=[];if(n.$appendStyles$){const p=4&r?t.headNodes:f;for(const m of n.$appendStyles$)p.push(_("style",{"q:style":m.styleId,dangerouslySetInnerHTML:m.content}))}const g=vn(t.rCtx),$=n.$scopeIds$?Fi(n.$scopeIds$):void 0,y=_(s.type,{"q:sstyle":$,"q:id":g,children:a.node},s.key);return n.$id$=g,t.$contexts$.push(n),h.hostCtx=n,uo(y,n,f,h,e,r,p=>(n.$needAttachListeners$,i?x(Cr(h,p),()=>i(p)):Cr(h,p)))})},Cr=(t,e)=>{const n=t.projectedChildren;if(n){const s=Object.keys(n).map(r=>{const i=n[r];if(i)return _("q:template",{[pe]:r,hidden:"","aria-hidden":"true",children:i})});return Y(s,t,e,0,void 0)}},_l=(t,e)=>{var r;const n=mo(t,e);if(n===null)return;const s={};for(const i of n){let o="";gn(i)&&(o=(r=i.props[pe])!=null?r:"");let a=s[o];a||(s[o]=a=[]),a.push(i)}return s},as=t=>U({nodeType:t,_qc_:null}),fo=(t,e,n,s,r)=>{var a,c;const i=t.type;if(typeof i=="string"){const l=t.key,u=t.props,d=(a=u[K])!=null?a:he,h=as(1),f=h.$element$,g=i==="head",$=e.hostCtx;let y="<"+i,p=!1;for(const w of Object.keys(u)){if(w==="children"||w==="key"||w==="class"||w==="className"||w==="dangerouslySetInnerHTML")continue;if(w==="ref"){Ms(u[w],f);continue}let T=H(d[w])?d[w]:u[w];if(xs(w)){xi(h.li,w,T,void 0);continue}const R=El(w);if(H(T)){if($){const N=$.$element$;st(1,N,T,f,R),p=!0}T=T.value}w.startsWith("preventdefault:")&&gt(w.slice(15),e.rCtx.$static$.$containerState$);const O=Sl(R,T);O!=null&&(y+=" "+(T===""?R:R+'="'+xl(O)+'"'))}const m=h.li,b=(c=u.class)!=null?c:u.className;let v=wl(b);if($&&($.$scopeIds$&&(v=$.$scopeIds$.join(" ")+" "+v),$.$needAttachListeners$&&(At(m,$.li),$.$needAttachListeners$=!1)),g&&(s|=1),kl[i]&&(s|=8),v=v.trim(),v&&(y+=' class="'+v+'"'),m.length>0){const w=Rs(m);for(const T of w)y+=" "+T[0]+'="'+As(T[1],h)+'"',gt(T[0],e.rCtx.$static$.$containerState$)}if(l!=null&&(y+=' q:key="'+l+'"'),"ref"in u||m.length>0||p){const w=vn(e.rCtx);y+=' q:id="'+w+'"',h.$id$=w,e.$contexts$.push(h)}if(1&s&&(y+=" q:head"),y+=">",n.write(y),$o[i])return;const I=u.dangerouslySetInnerHTML;if(I!=null)return n.write(String(I)),void n.write(`</${i}>`);g||(s&=-2),i==="html"?s|=4:s&=-5;const S=Y(u.children,e,n,s);return x(S,()=>{if(g){for(const w of e.headNodes)ho(w.type,w.props,n);e.headNodes.length=0}if(r)return x(r(n),()=>{n.write(`</${i}>`)});n.write(`</${i}>`)})}if(i===Nt){const l=as(111);return l.$parent$=e.hostCtx,uo(t,l,void 0,e,n,s,r)}if(i===Ci)return void n.write("<!--"+t.props.data+"-->");if(i===Oi)return(async(l,u,d,h)=>{d.write("<!--qkssr-f-->");const f=l.props.children;let g;if(ee(f)){const $=f({write(y){d.write(y),d.write("<!--qkssr-f-->")}});if(F($))return $;g=$}else g=f;for await(const $ of g)await Y($,u,d,h,void 0),d.write("<!--qkssr-f-->")})(t,e,n,s);const o=Se(e.invocationContext,i,t.props,t.key);return Y(o,e,n,s,r)},Y=(t,e,n,s,r)=>{var i;if(t!=null&&typeof t!="boolean")if(Tt(t)||typeof t=="number")n.write(Un(String(t)));else{if(gn(t))return fo(t,e,n,s,r);if(q(t))return po(t,e,n,s);if(H(t)){const o=8&s,a=(i=e.hostCtx)==null?void 0:i.$element$;let c;if(a){if(!o){c=t.value;const l=vn(e.rCtx);return st(2,a,t,"#"+l,"data"),void n.write(`<!--t=${l}-->${Un(String(c))}<!---->`)}c=Se(e.invocationContext,()=>t.value)}return void n.write(Un(String(c)))}if(F(t))return n.write("<!--qkssr-f-->"),t.then(o=>Y(o,e,n,s,r))}};function po(t,e,n,s){if(t==null)return;if(!q(t))return Y(t,e,n,s);if(t.length===1)return Y(t[0],e,n,s);if(t.length===0)return;let r=0;const i=[];return t.reduce((o,a,c)=>{const l=[];i.push(l);const u=Y(a,e,o?{write(h){r===c?n.write(h):l.push(h)}}:n,s),d=()=>{r++,i.length>r&&i[r].forEach(h=>n.write(h))};return F(u)&&o?Promise.all([u,o]).then(d):F(u)?u.then(d):o?o.then(d):void r++},void 0)}const mo=(t,e)=>{if(t==null)return null;const n=go(t,e),s=q(n)?n:[n];return s.length===0?null:s},wl=t=>{if(!t)return"";if(typeof t=="string")return t;if(Array.isArray(t))return t.join(" ");const e=[];for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&t[n]&&e.push(n);return e.join(" ")},go=(t,e)=>{if(t==null)return null;if(q(t))return t.flatMap(n=>go(n,e));if(gn(t)&&ee(t.type)&&t.type!==Ci&&t.type!==Oi&&t.type!==Nt){const n=Se(e.invocationContext,t.type,t.props,t.key);return mo(n,e)}return t},Il=(t,e,n)=>{var o;const s=Object.keys(n),r={[Le]:tn};if(e.$props$=wn(r,t.$static$.$containerState$),s.length===0)return;const i=r[K]=(o=n[K])!=null?o:he;for(const a of s)a!=="children"&&(H(i[a])?r[Ce+a]=i[a]:r[a]=n[a])};function El(t){return t==="htmlFor"?"for":t}function Sl(t,e){return t==="style"?Bi(e):e===!1||e==null?null:e===!0?"":String(e)}const kl={title:!0,style:!0,script:!0,noframes:!0,noscript:!0},$o={area:!0,base:!0,basefont:!0,bgsound:!0,br:!0,col:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Tl=/[&<>]/g,Al=/[&"]/g,Un=t=>t.replace(Tl,e=>{switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return""}}),xl=t=>t.replace(Al,e=>{switch(e){case"&":return"&amp;";case'"':return"&quot;";default:return""}}),ct=(t,e)=>{var o;const{get:n,set:s,ctx:r}=xt();if(n!=null)return n;const i=ee(t)?t():t;if((e==null?void 0:e.reactive)===!1)return s(i),i;{const a=r.$renderCtx$.$static$.$containerState$,c=Vs(i,a,(o=e==null?void 0:e.recursive)!=null&&o?1:0);return s(c),c}};function yo(t,e){var n;return(n=Ss().$renderCtx$.$static$.$containerState$.$envData$[t])!=null?n:e}const Or=new Map,Rl=(t,e)=>{let n=Or.get(e);return n||Or.set(e,n=Nl(t,e)),n},Nl=(t,e)=>{const n=t.length,s=[],r=[];let i=0,o=i,a=He,c=0;for(;i<n;){let f=t.charCodeAt(i++);f===Ul&&(i++,f=Eo);const g=Wl[a];for(let $=0;$<g.length;$++){const y=g[$],[p,m,b]=y;if((p===c||p===E||p===nn&&jt(c)||p===cs&&qr(c))&&(m===f||m===E||m===nn&&jt(f)||m===oe&&!jt(f)&&f!==Ys||m===cs&&qr(f))&&(y.length==3||d(y))){if(y.length>3&&(f=t.charCodeAt(i-1)),b===M||b==Ne){b===Ne&&(a!==vo||h()?Pr(f)||u(i-(m==oe?1:m==ls?2:0)):(Pr(f)?l(i-2):u(i-2),o++)),m===oe&&(i--,f=c);do a=r.pop()||He,a===Oe&&(l(i-1),o++);while(Cl(a))}else r.push(a),a===Oe&&b===He?(l(i-8),o=i):b===bo&&u(i-2),a=b;break}}c=f}return l(i),s.join("");function l(f){s.push(t.substring(o,f)),o=f}function u(f){a===Oe||h()||(l(f),s.push(".","\u2B50\uFE0F",e))}function d(f){let g=0;if(t.charCodeAt(i)===us){for(let $=1;$<10;$++)if(t.charCodeAt(i+$)===us){g=$+1;break}}e:for(let $=3;$<f.length;$++){const y=f[$];for(let p=0;p<y.length;p++)if((t.charCodeAt(i+p+g)|Fl)!==y.charCodeAt(p))continue e;return i+=y.length+g,!0}return!1}function h(){return r.indexOf(Oe)!==-1||r.indexOf(Js)!==-1}},jt=t=>t>=Ll&&t<=Ml||t>=Eo&&t<=jl||t>=zl&&t<=Hl||t>=128||t===Bl||t===us,Pr=t=>t===Fe||t===Ys||t===So||t===Io||jt(t),Cl=t=>t===_o||t===Js||t===wo||t===Oe,qr=t=>t===Dl||t===Ol||t===Pl||t===ql,He=0,vo=2,Oe=5,bo=6,Js=10,_o=11,wo=12,M=17,Ne=18,E=0,nn=1,oe=2,cs=3,Ol=9,Pl=10,ql=13,Dl=32,Io=35,ls=41,us=45,Ys=46,Ll=48,Ml=57,Fe=58,Eo=65,jl=90,So=91,Ul=92,Bl=95,Fl=32,zl=97,Hl=122,Ae=[[E,39,14],[E,34,15],[E,47,16,"*"]],Wl=[[[E,42,vo],[E,So,7],[E,Fe,bo,":"],[E,Fe,Oe,"global"],[E,Fe,3,"has","host-context","not","where","is","matches","any"],[E,Fe,4],[E,nn,1],[E,Ys,1],[E,Io,1],[E,64,Js,"keyframe"],[E,64,_o,"media","supports"],[E,64,wo],[E,123,13],[47,42,16],[E,59,M],[E,125,M],[E,ls,M],...Ae],[[E,oe,Ne]],[[E,oe,Ne]],[[E,40,He],[E,oe,Ne]],[[E,40,8],[E,oe,Ne]],[[E,40,He],[E,oe,M]],[[E,oe,M]],[[E,93,Ne],[E,39,14],[E,34,15]],[[E,ls,M],...Ae],[[E,125,M],...Ae],[[E,125,M],[cs,nn,1],[E,Fe,Oe,"global"],[E,123,13],...Ae],[[E,123,He],[E,59,M],...Ae],[[E,59,M],[E,123,9],...Ae],[[E,125,M],[E,123,13],[E,40,8],...Ae],[[E,39,M]],[[E,34,M]],[[42,47,M]]],Vl=t=>({scopeId:Kl(t,Rl,!0)}),Kl=(t,e,n)=>{const{get:s,set:r,ctx:i,i:o}=xt();if(s)return s;const a=i.$renderCtx$,c=(l=o,`${((g,$=0)=>{if(g.length===0)return $;for(let y=0;y<g.length;y++)$=($<<5)-$+g.charCodeAt(y),$|=0;return Number(Math.abs($)).toString(36)})(t.$hash$)}-${l}`);var l;const u=a.$static$.$containerState$,d=U(i.$hostElement$);if(r(c),d.$appendStyles$||(d.$appendStyles$=[]),d.$scopeIds$||(d.$scopeIds$=[]),n&&d.$scopeIds$.push((g=>"\u2B50\uFE0F"+g)(c)),((g,$)=>g.$styleIds$.has($))(u,c))return c;u.$styleIds$.add(c);const h=t.$resolveLazy$(u.$containerEl$),f=g=>{d.$appendStyles$,d.$appendStyles$.push({styleId:c,content:e(g,c)})};return F(h)?i.$waitOn$.push(h.then(f)):f(h),c},Ql="";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Gl=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},To={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(h=64)),s.push(n[u],n[d],n[h],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ko(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||d==null)throw Error();const h=i<<2|a>>4;if(s.push(h),l!==64){const f=a<<4&240|l>>2;if(s.push(f),d!==64){const g=l<<6&192|d;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Jl=function(t){const e=ko(t);return To.encodeByteArray(e,!0)},Ao=function(t){return Jl(t).replace(/\./g,"")},xo=function(t){try{return To.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(D())}function Xl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eu(){const t=D();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tu(){return typeof indexedDB=="object"}function nu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function su(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=()=>su().__FIREBASE_DEFAULTS__,iu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ou=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xo(t[1]);return e&&JSON.parse(e)},Xs=()=>{try{return ru()||iu()||ou()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},au=t=>{var e,n;return(n=(e=Xs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cu=()=>{var t;return(t=Xs())===null||t===void 0?void 0:t.config},Ro=t=>{var e;return(e=Xs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="FirebaseError";class ke extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=uu,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ct.prototype.create)}}class Ct{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?du(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ke(r,a,s)}}function du(t,e){return t.replace(hu,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const hu=/\{\$([^}]+)}/g;function fu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Dr(i)&&Dr(o)){if(!sn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Dr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function pu(t,e){const n=new mu(t,e);return n.subscribe.bind(n)}class mu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gu(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Bn),r.error===void 0&&(r.error=Bn),r.complete===void 0&&(r.complete=Bn);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gu(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){return t&&t._delegate?t._delegate:t}class Ge{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new lu;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vu(e))try{this.getOrInitializeService({instanceIdentifier:Re})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Re){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Re){return this.instances.has(e)}getOptions(e=Re){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yu(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Re){return this.component?this.component.multipleInstances?e:Re:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yu(t){return t===Re?void 0:t}function vu(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $u(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(A||(A={}));const _u={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},wu=A.INFO,Iu={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},Eu=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Iu[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class No{constructor(e){this.name=e,this._logLevel=wu,this._logHandler=Eu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_u[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...e),this._logHandler(this,A.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...e),this._logHandler(this,A.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A.INFO,...e),this._logHandler(this,A.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A.WARN,...e),this._logHandler(this,A.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...e),this._logHandler(this,A.ERROR,...e)}}const Su=(t,e)=>e.some(n=>t instanceof n);let Lr,Mr;function ku(){return Lr||(Lr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tu(){return Mr||(Mr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Co=new WeakMap,ds=new WeakMap,Oo=new WeakMap,Fn=new WeakMap,Zs=new WeakMap;function Au(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ie(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Co.set(n,t)}).catch(()=>{}),Zs.set(e,t),e}function xu(t){if(ds.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ds.set(t,e)}let hs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ds.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Oo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ie(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ru(t){hs=t(hs)}function Nu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(zn(this),e,...n);return Oo.set(s,e.sort?e.sort():[e]),Ie(s)}:Tu().includes(t)?function(...e){return t.apply(zn(this),e),Ie(Co.get(this))}:function(...e){return Ie(t.apply(zn(this),e))}}function Cu(t){return typeof t=="function"?Nu(t):(t instanceof IDBTransaction&&xu(t),Su(t,ku())?new Proxy(t,hs):t)}function Ie(t){if(t instanceof IDBRequest)return Au(t);if(Fn.has(t))return Fn.get(t);const e=Cu(t);return e!==t&&(Fn.set(t,e),Zs.set(e,t)),e}const zn=t=>Zs.get(t);function Ou(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ie(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ie(o.result),c.oldVersion,c.newVersion,Ie(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Pu=["get","getKey","getAll","getAllKeys","count"],qu=["put","add","delete","clear"],Hn=new Map;function jr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hn.get(e))return Hn.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=qu.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Pu.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Hn.set(e,i),i}Ru(t=>({...t,get:(e,n,s)=>jr(e,n)||t.get(e,n,s),has:(e,n)=>!!jr(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lu(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Lu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fs="@firebase/app",Ur="0.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new No("@firebase/app"),Mu="@firebase/app-compat",ju="@firebase/analytics-compat",Uu="@firebase/analytics",Bu="@firebase/app-check-compat",Fu="@firebase/app-check",zu="@firebase/auth",Hu="@firebase/auth-compat",Wu="@firebase/database",Vu="@firebase/database-compat",Ku="@firebase/functions",Qu="@firebase/functions-compat",Gu="@firebase/installations",Ju="@firebase/installations-compat",Yu="@firebase/messaging",Xu="@firebase/messaging-compat",Zu="@firebase/performance",ed="@firebase/performance-compat",td="@firebase/remote-config",nd="@firebase/remote-config-compat",sd="@firebase/storage",rd="@firebase/storage-compat",id="@firebase/firestore",od="@firebase/firestore-compat",ad="firebase",cd="9.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="[DEFAULT]",ld={[fs]:"fire-core",[Mu]:"fire-core-compat",[Uu]:"fire-analytics",[ju]:"fire-analytics-compat",[Fu]:"fire-app-check",[Bu]:"fire-app-check-compat",[zu]:"fire-auth",[Hu]:"fire-auth-compat",[Wu]:"fire-rtdb",[Vu]:"fire-rtdb-compat",[Ku]:"fire-fn",[Qu]:"fire-fn-compat",[Gu]:"fire-iid",[Ju]:"fire-iid-compat",[Yu]:"fire-fcm",[Xu]:"fire-fcm-compat",[Zu]:"fire-perf",[ed]:"fire-perf-compat",[td]:"fire-rc",[nd]:"fire-rc-compat",[sd]:"fire-gcs",[rd]:"fire-gcs-compat",[id]:"fire-fst",[od]:"fire-fst-compat","fire-js":"fire-js",[ad]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Map,ms=new Map;function ud(t,e){try{t.container.addComponent(e)}catch(n){Me.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wt(t){const e=t.name;if(ms.has(e))return Me.debug(`There were multiple attempts to register component ${e}.`),!1;ms.set(e,t);for(const n of rn.values())ud(n,t);return!0}function Po(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ee=new Ct("app","Firebase",dd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=cd;function kn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ps,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ee.create("bad-app-name",{appName:String(r)});if(n||(n=cu()),!n)throw Ee.create("no-options");const i=rn.get(r);if(i){if(sn(n,i.options)&&sn(s,i.config))return i;throw Ee.create("duplicate-app",{appName:r})}const o=new bu(r);for(const c of ms.values())o.addComponent(c);const a=new hd(n,s,o);return rn.set(r,a),a}function fd(t=ps){const e=rn.get(t);if(!e&&t===ps)return kn();if(!e)throw Ee.create("no-app",{appName:t});return e}function We(t,e,n){var s;let r=(s=ld[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Me.warn(a.join(" "));return}wt(new Ge(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="firebase-heartbeat-database",md=1,It="firebase-heartbeat-store";let Wn=null;function qo(){return Wn||(Wn=Ou(pd,md,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(It)}}}).catch(t=>{throw Ee.create("idb-open",{originalErrorMessage:t.message})})),Wn}async function gd(t){var e;try{return(await qo()).transaction(It).objectStore(It).get(Do(t))}catch(n){if(n instanceof ke)Me.warn(n.message);else{const s=Ee.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Me.warn(s.message)}}}async function Br(t,e){var n;try{const r=(await qo()).transaction(It,"readwrite");return await r.objectStore(It).put(e,Do(t)),r.done}catch(s){if(s instanceof ke)Me.warn(s.message);else{const r=Ee.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Me.warn(r.message)}}}function Do(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=1024,yd=30*24*60*60*1e3;class vd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _d(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=yd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fr(),{heartbeatsToSend:n,unsentEntries:s}=bd(this._heartbeatsCache.heartbeats),r=Ao(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fr(){return new Date().toISOString().substring(0,10)}function bd(t,e=$d){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),zr(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),zr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _d{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tu()?nu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Br(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Br(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zr(t){return Ao(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t){wt(new Ge("platform-logger",e=>new Du(e),"PRIVATE")),wt(new Ge("heartbeat",e=>new vd(e),"PRIVATE")),We(fs,Ur,t),We(fs,Ur,"esm2017"),We("fire-js","")}wd("");function er(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Lo(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Id=Lo,Mo=new Ct("auth","Firebase",Lo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new No("@firebase/auth");function Ut(t,...e){Hr.logLevel<=A.ERROR&&Hr.error(`Auth (${Sn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t,...e){throw tr(t,...e)}function X(t,...e){return tr(t,...e)}function jo(t,e,n){const s=Object.assign(Object.assign({},Id()),{[e]:n});return new Ct("auth","Firebase",s).create(e,{appName:t.name})}function Ed(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ne(t,"argument-error"),jo(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tr(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Mo.create(t,...e)}function k(t,e,...n){if(!t)throw tr(e,...n)}function ue(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ut(e),new Error(e)}function $e(t,e){t||ue(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Map;function de(t){$e(t instanceof Function,"Expected a class definition");let e=Wr.get(t);return e?($e(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wr.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e){const n=Po(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(sn(i,e!=null?e:{}))return r;ne(r,"already-initialized")}return n.initialize({options:e})}function kd(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(de);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Td(){return Vr()==="http:"||Vr()==="https:"}function Vr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Td()||Xl()||"connection"in navigator)?navigator.onLine:!0}function xd(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n){this.shortDelay=e,this.longDelay=n,$e(n>e,"Short delay should be less than long delay!"),this.isMobile=Yl()||Zl()}get(){return Ad()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){$e(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new Pt(3e4,6e4);function Cd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tn(t,e,n,s,r={}){return Bo(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ot(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Uo.fetch()(Fo(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Bo(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Rd),e);try{const r=new Pd(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Mt(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mt(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Mt(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Mt(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw jo(t,u,l);ne(t,u)}}catch(r){if(r instanceof ke)throw r;ne(t,"network-request-failed")}}async function Od(t,e,n,s,r={}){const i=await Tn(t,e,n,s,r);return"mfaPendingCredential"in i&&ne(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Fo(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?nr(t.config,r):`${t.config.apiScheme}://${r}`}class Pd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(X(this.auth,"network-request-failed")),Nd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mt(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=X(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qd(t,e){return Tn(t,"POST","/v1/accounts:delete",e)}async function Dd(t,e){return Tn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ld(t,e=!1){const n=Ue(t),s=await n.getIdToken(e),r=sr(s);k(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:pt(Vn(r.auth_time)),issuedAtTime:pt(Vn(r.iat)),expirationTime:pt(Vn(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vn(t){return Number(t)*1e3}function sr(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return Ut("JWT malformed, contained fewer than 3 sections"),null;try{const i=xo(s);return i?JSON.parse(i):(Ut("Failed to decode base64 JWT payload"),null)}catch(i){return Ut("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Md(t){const e=sr(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ke&&jd(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function jd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pt(this.lastLoginAt),this.creationTime=pt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Et(t,Dd(n,{idToken:s}));k(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?zd(i.providerUserInfo):[],a=Fd(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zo(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Bd(t){const e=Ue(t);await on(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fd(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function zd(t){return t.map(e=>{var{providerId:n}=e,s=er(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hd(t,e){const n=await Bo(t,{},async()=>{const s=Ot({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Fo(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Uo.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Md(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Hd(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new St;return s&&(k(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(k(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(k(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new St,this.toJSON())}_performRefresh(){return ue("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class De{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=er(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ud(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Et(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ld(this,e)}reload(){return Bd(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new De(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await on(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Et(this,qd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,$=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,p=(l=n.createdAt)!==null&&l!==void 0?l:void 0,m=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:v,isAnonymous:I,providerData:S,stsTokenManager:w}=n;k(b&&w,e,"internal-error");const T=St.fromJSON(this.name,w);k(typeof b=="string",e,"internal-error"),ye(d,e.name),ye(h,e.name),k(typeof v=="boolean",e,"internal-error"),k(typeof I=="boolean",e,"internal-error"),ye(f,e.name),ye(g,e.name),ye($,e.name),ye(y,e.name),ye(p,e.name),ye(m,e.name);const R=new De({uid:b,auth:e,email:h,emailVerified:v,displayName:d,isAnonymous:I,photoURL:g,phoneNumber:f,tenantId:$,stsTokenManager:T,createdAt:p,lastLoginAt:m});return S&&Array.isArray(S)&&(R.providerData=S.map(O=>Object.assign({},O))),y&&(R._redirectEventId=y),R}static async _fromIdTokenResponse(e,n,s=!1){const r=new St;r.updateFromServerResponse(n);const i=new De({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await on(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ho.type="NONE";const Kr=Ho;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e,n){return`firebase:${t}:${e}:${n}`}class Ve{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Bt(this.userKey,r.apiKey,i),this.fullPersistenceKey=Bt("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?De._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ve(de(Kr),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||de(Kr);const o=Bt(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=De._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ve(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ve(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ko(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Go(e))return"Blackberry";if(Jo(e))return"Webos";if(rr(e))return"Safari";if((e.includes("chrome/")||Vo(e))&&!e.includes("edge/"))return"Chrome";if(Qo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Wo(t=D()){return/firefox\//i.test(t)}function rr(t=D()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vo(t=D()){return/crios\//i.test(t)}function Ko(t=D()){return/iemobile/i.test(t)}function Qo(t=D()){return/android/i.test(t)}function Go(t=D()){return/blackberry/i.test(t)}function Jo(t=D()){return/webos/i.test(t)}function An(t=D()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Wd(t=D()){var e;return An(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vd(){return eu()&&document.documentMode===10}function Yo(t=D()){return An(t)||Qo(t)||Jo(t)||Go(t)||/windows phone/i.test(t)||Ko(t)}function Kd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t,e=[]){let n;switch(t){case"Browser":n=Qr(D());break;case"Worker":n=`${Qr(D())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gr(this),this.idTokenSubscription=new Gr(this),this.beforeStateQueue=new Qd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mo,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=de(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ve.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await on(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(de(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ct("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&de(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await Ve.create(this,[de(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return k(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function xn(t){return Ue(t)}class Gr{constructor(e){this.auth=e,this.observer=null,this.addObserver=pu(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Jd(t,e,n){const s=xn(t);k(s._canInitEmulator,s,"emulator-config-failed"),k(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Zo(e),{host:o,port:a}=Yd(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Xd()}function Zo(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yd(t){const e=Zo(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Jr(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Jr(o)}}}function Jr(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Xd(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ue("not implemented")}_getIdTokenResponse(e){return ue("not implemented")}_linkToIdToken(e,n){return ue("not implemented")}_getReauthenticationResolver(e){return ue("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(t,e){return Od(t,"POST","/v1/accounts:signInWithIdp",Cd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="http://localhost";class je extends ea{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new je(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ne("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=er(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new je(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ke(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ke(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ke(e,n)}buildRequest(){const e={requestUri:Zd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ot(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends ir{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends qt{constructor(){super("facebook.com")}static credential(e){return je._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ve.credential(e.oauthAccessToken)}catch{return null}}}ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";ve.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W extends qt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return je._fromParams({providerId:W.PROVIDER_ID,signInMethod:W.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return W.credentialFromTaggedObject(e)}static credentialFromError(e){return W.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return W.credential(n,s)}catch{return null}}}W.GOOGLE_SIGN_IN_METHOD="google.com";W.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends qt{constructor(){super("github.com")}static credential(e){return je._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return be.credential(e.oauthAccessToken)}catch{return null}}}be.GITHUB_SIGN_IN_METHOD="github.com";be.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends qt{constructor(){super("twitter.com")}static credential(e,n){return je._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return _e.credential(n,s)}catch{return null}}}_e.TWITTER_SIGN_IN_METHOD="twitter.com";_e.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await De._fromIdTokenResponse(e,s,r),o=Yr(s);return new Je({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Yr(s);return new Je({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Yr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends ke{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,an.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new an(e,n,s,r)}}function ta(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?an._fromErrorAndOperation(t,i,e,s):i})}async function eh(t,e,n=!1){const s=await Et(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Je._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await Et(t,ta(r,i,e,t),n);k(o.idToken,r,"internal-error");const a=sr(o.idToken);k(a,r,"internal-error");const{sub:c}=a;return k(t.uid===c,r,"user-mismatch"),Je._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&ne(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nh(t,e,n=!1){const s="signIn",r=await ta(t,s,e),i=await Je._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function sh(t,e,n,s){return Ue(t).onIdTokenChanged(e,n,s)}function rh(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function ih(t,e,n,s){return Ue(t).onAuthStateChanged(e,n,s)}const cn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cn,"1"),this.storage.removeItem(cn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(){const t=D();return rr(t)||An(t)}const ah=1e3,ch=10;class sa extends na{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oh()&&Kd(),this.fallbackToPolling=Yo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Vd()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ch):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ah)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sa.type="LOCAL";const lh=sa;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends na{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ra.type="SESSION";const ia=ra;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Rn(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await uh(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=or("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return window}function hh(t){Z().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(){return typeof Z().WorkerGlobalScope<"u"&&typeof Z().importScripts=="function"}async function fh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ph(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mh(){return oa()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="firebaseLocalStorageDb",gh=1,ln="firebaseLocalStorage",ca="fbase_key";class Dt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nn(t,e){return t.transaction([ln],e?"readwrite":"readonly").objectStore(ln)}function $h(){const t=indexedDB.deleteDatabase(aa);return new Dt(t).toPromise()}function $s(){const t=indexedDB.open(aa,gh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ln,{keyPath:ca})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ln)?e(s):(s.close(),await $h(),e(await $s()))})})}async function Xr(t,e,n){const s=Nn(t,!0).put({[ca]:e,value:n});return new Dt(s).toPromise()}async function yh(t,e){const n=Nn(t,!1).get(e),s=await new Dt(n).toPromise();return s===void 0?null:s.value}function Zr(t,e){const n=Nn(t,!0).delete(e);return new Dt(n).toPromise()}const vh=800,bh=3;class la{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $s(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>bh)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rn._getInstance(mh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fh(),!this.activeServiceWorker)return;this.sender=new dh(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ph()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $s();return await Xr(e,cn,"1"),await Zr(e,cn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Xr(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>yh(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Nn(r,!1).getAll();return new Dt(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}la.type="LOCAL";const _h=la;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ih(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=X("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",wh().appendChild(s)})}function Eh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Pt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t,e){return e?de(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends ea{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ke(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ke(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ke(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Sh(t){return nh(t.auth,new ar(t),t.bypassAuthState)}function kh(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),th(n,new ar(t),t.bypassAuthState)}async function Th(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),eh(n,new ar(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sh;case"linkViaPopup":case"linkViaRedirect":return Th;case"reauthViaPopup":case"reauthViaRedirect":return kh;default:ne(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=new Pt(2e3,1e4);async function xh(t,e,n){const s=xn(t);Ed(t,e,ir);const r=ua(s,n);return new Pe(s,"signInViaPopup",e,r).executeNotNull()}class Pe extends da{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Pe.currentPopupAction&&Pe.currentPopupAction.cancel(),Pe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){$e(this.filter.length===1,"Popup operations only handle one event");const e=or();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(X(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(X(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(X(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Ah.get())};e()}}Pe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="pendingRedirect",Ft=new Map;class Nh extends da{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ft.get(this.auth._key());if(!e){try{const s=await Ch(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ft.set(this.auth._key(),e)}return this.bypassAuthState||Ft.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ch(t,e){const n=qh(e),s=Ph(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Oh(t,e){Ft.set(t._key(),e)}function Ph(t){return de(t._redirectPersistence)}function qh(t){return Bt(Rh,t.config.apiKey,t.name)}async function Dh(t,e,n=!1){const s=xn(t),r=ua(s,e),o=await new Nh(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=10*60*1e3;class Mh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ha(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(X(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lh&&this.cachedEventUids.clear(),this.cachedEventUids.has(ei(e))}saveEventToCache(e){this.cachedEventUids.add(ei(e)),this.lastProcessedEventTime=Date.now()}}function ei(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ha({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ha(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uh(t,e={}){return Tn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fh=/^https?/;async function zh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Uh(t);for(const n of e)try{if(Hh(n))return}catch{}ne(t,"unauthorized-domain")}function Hh(t){const e=gs(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Fh.test(n))return!1;if(Bh.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=new Pt(3e4,6e4);function ti(){const t=Z().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vh(t){return new Promise((e,n)=>{var s,r,i;function o(){ti(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ti(),n(X(t,"network-request-failed"))},timeout:Wh.get()})}if(!((r=(s=Z().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Z().gapi)===null||i===void 0)&&i.load)o();else{const a=Eh("iframefcb");return Z()[a]=()=>{gapi.load?o():n(X(t,"network-request-failed"))},Ih(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw zt=null,e})}let zt=null;function Kh(t){return zt=zt||Vh(t),zt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=new Pt(5e3,15e3),Gh="__/auth/iframe",Jh="emulator/auth/iframe",Yh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zh(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nr(e,Jh):`https://${t.config.authDomain}/${Gh}`,s={apiKey:e.apiKey,appName:t.name,v:Sn},r=Xh.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ot(s).slice(1)}`}async function ef(t){const e=await Kh(t),n=Z().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:Zh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yh,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=X(t,"network-request-failed"),a=Z().setTimeout(()=>{i(o)},Qh.get());function c(){Z().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nf=500,sf=600,rf="_blank",of="http://localhost";class ni{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function af(t,e,n,s=nf,r=sf){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tf),{width:s.toString(),height:r.toString(),top:i,left:o}),l=D().toLowerCase();n&&(a=Vo(l)?rf:n),Wo(l)&&(e=e||of,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[f,g])=>`${h}${f}=${g},`,"");if(Wd(l)&&a!=="_self")return cf(e||"",a),new ni(null);const d=window.open(e||"",a,u);k(d,t,"popup-blocked");try{d.focus()}catch{}return new ni(d)}function cf(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="__/auth/handler",uf="emulator/auth/handler";function si(t,e,n,s,r,i){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Sn,eventId:r};if(e instanceof ir){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof qt){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${df(t)}?${Ot(a).slice(1)}`}function df({config:t}){return t.emulator?nr(t,uf):`https://${t.authDomain}/${lf}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="webStorageSupport";class hf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ia,this._completeRedirectFn=Dh,this._overrideRedirectResult=Oh}async _openPopup(e,n,s,r){var i;$e((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=si(e,n,s,gs(),r);return af(e,o,or())}async _openRedirect(e,n,s,r){return await this._originValidation(e),hh(si(e,n,s,gs(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):($e(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ef(e),s=new Mh(e);return n.register("authEvent",r=>(k(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kn,{type:Kn},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Kn];o!==void 0&&n(!!o),ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yo()||rr()||An()}}const ff=hf;var ri="@firebase/auth",ii="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gf(t){wt(new Ge("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{k(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),k(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xo(t)},u=new Gd(a,c,l);return kd(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),wt(new Ge("auth-internal",e=>{const n=xn(e.getProvider("auth").getImmediate());return(s=>new pf(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(ri,ii,mf(t)),We(ri,ii,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=5*60,yf=Ro("authIdTokenMaxAge")||$f;let oi=null;const vf=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>yf)return;const r=n==null?void 0:n.token;oi!==r&&(oi=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function bf(t=fd()){const e=Po(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Sd(t,{popupRedirectResolver:ff,persistence:[_h,lh,ia]}),s=Ro("authTokenSyncURL");if(s){const i=vf(s);rh(n,i,()=>i(n.currentUser)),sh(n,o=>i(o))}const r=au("auth");return r&&Jd(n,`http://${r}`),n}gf("Browser");var _f="firebase",wf="9.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We(_f,wf,"app");const If={apiKey:"AIzaSyAmZmuckTBZuUwetU3xROn0DBmdFjGZpvE",authDomain:"ttstvsschool.firebaseapp.com",projectId:"ttstvsschool",storageBucket:"ttstvsschool.appspot.com",messagingSenderId:"557949322894",appId:"1:557949322894:web:564892b7f3b3600ff7abdf",measurementId:"G-H56FQJJJ16"},Ef=kn(If),Sf=new W,fa=bf(Ef);function kf(){xh(fa,Sf).then(t=>{W.credentialFromResult(t).accessToken,t.user}).catch(t=>{t.code,t.message,t.customData.email,W.credentialFromError(t)})}ih(fa,t=>{console.log(t||"no")});const Tf=se(j(()=>(Vl(j(Ql,"s_N39ca0w8E8Y")),_("header",{class:"bg-black bg-opacity-90 py-[14px] relative px-4 flex flex-row items-center content-center",children:[_("div",{class:"flex flex-col space-x-[2px] "}),_("div",{class:" md:flex hidden flex-row space-x-3 left-0 right-0 ml-auto items-center content-center ",children:[_("a",{class:"text-neutral-300 font-mono font-medium text-xs font-plex",children:"HOME"}),_("span",{class:"text-neutral-700 font-plex text-lg",children:"|"}),_("a",{class:"text-neutral-300 font-mono font-medium text-xs font-plex",children:"EVENTS"}),_("span",{class:"text-neutral-700 font-plex text-lg",children:"|"}),_("a",{class:"text-neutral-300 font-mono font-medium text-xs font-plex",children:"REGISTERATIONS"}),_("span",{class:"text-neutral-700 font-plex text-lg",children:"|"}),_("a",{class:"text-neutral-300 font-mono font-medium text-xs font-plex",children:"CONTACT US"}),_("span",{class:"text-neutral-700 font-plex text-lg",children:"|"})]}),_("button",{onClick$:j(()=>kf(),"s_PQPQ1jYjsWE"),class:"py-[7px] md:py-[7px] px-[14px] ml-auto md:ml-3 text-black bg-white bg-opacity-90 font-bold font-plex text-[12px] md:text-[11.5px] ",style:"clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 90% 0);",children:"Sign In"})]})),"s_ceU05TscGYE")),Af=se(j(()=>_(Rt,{children:[_("main",{children:[_(Tf,{}),_("section",{children:_(Gs,{})})]}),_("footer",{class:"hidden",children:_("div",{class:"bg-neutral-00 h-96 w-screen",style:"footerclass"})})]}),"s_VkLNXphUh5s")),xf=Object.freeze(Object.defineProperty({__proto__:null,default:Af},Symbol.toStringTag,{value:"Module"})),Rf={apiKey:"AIzaSyAmZmuckTBZuUwetU3xROn0DBmdFjGZpvE",authDomain:"ttstvsschool.firebaseapp.com",projectId:"ttstvsschool",storageBucket:"ttstvsschool.appspot.com",messagingSenderId:"557949322894",appId:"1:557949322894:web:564892b7f3b3600ff7abdf",measurementId:"G-H56FQJJJ16"};kn(Rf);const Nf=se(j(()=>_(Rt,{children:[_("div",{style:" width: 100%; height: calc(100vh - 60px); position: relative; background-color: #000; background-size: 60px 80px; background-image: linear-gradient(90deg,hsla(0,0%,100%,.1) 1px,transparent 0),linear-gradient(180deg,hsla(0,0%,100%,.1) 1px,transparent 0); max-height: 900px; min-height: 653px; overflow: hidden; ",class:" pt-8 ",children:[_("div",{class:"fade-in-border",style:"border: 12px solid #e8e8e8; width: 100%; height: 100%; position: absolute; top: 0; left: 0; transition: all .5s ease;"}),_("div",{class:"relative w-screen ",children:[_("div",{class:"fade-in-text mt-5",children:[_("h1",{style:"z-index:1;",class:" left-0 right-0 text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-neue font-bold opacity-80 mt-[2px] text-center text-neutral-700",children:["Swarn",_("span",{style:"text-underline-offset: 15px;",class:"text-neutral-700 underline",children:"otsav"})]}),_("h1",{style:"z-index:0;position: absolute;right:2px; bottom: -9px; left: 1%; ",class:" left-0 right-0 mb-3 text-[45px] sm:text-[60px] md:text-[80px] mr-2 lg:text-[100px] font-neue font-bold text-center text-[#e8e8e8]",children:["Swarn",_("span",{style:"text-underline-offset: 15px; text-decoration-color: #e8e8e8;",class:"text-[#e8e8e8] underline",children:"otsav"})]})]}),"  ",_("div",{class:"fade-in-other absolute left-0 right-0 mx-auto mt-12 md:mt-10 flex items-center content-center lg:bg-banner bg-no-repeat bg-center ",id:"banner",children:[" ",_("img",{class:" hiddenmain mx-auto fade-in-main rounded-full w-[200px] h-[200px] md:w-[236px] md:h-[236px] ",src:"https://i.picsum.photos/id/43/300/300.jpg?hmac=Sm3OKu2moFYAaBOpd9SmwpJSwp54NijrGe-PZXNMBmc"})]})]}),_("img",{class:"hero-date",src:"/svg/hero-date.svg",style:"opacity: 1; transform: none;"}),_("div",{style:"width: 100vw; position: absolute; bottom: 0px; right: 0px; display: flex; align-items: end; justify-content: between; flex-direction: column;",children:_("img",{class:"slide-in",src:"hero-biggest 1.svg",style:"opacity: 1; transform: none;"})}),_("a",{href:"/events",class:"fade-in-slideup registeranim py-[10px] mt-[306px] md:mt-[340px] mx-auto absolute md:py-[10px] px-[24px] right-0 left-0 w-max text-black bg-[#e8e8e8] font-bold font-plex text-[16px] mx-auto md:text-[18.5px] eventbutton",style:"clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 90% 0);",children:"View All Events"})]}),"ok"]}),"s_xYL1qOwPyDI")),Cf={title:"Swarnotsav"},Of=Object.freeze(Object.defineProperty({__proto__:null,default:Nf,head:Cf},Symbol.toStringTag,{value:"Module"})),Pf={apiKey:"AIzaSyAmZmuckTBZuUwetU3xROn0DBmdFjGZpvE",authDomain:"ttstvsschool.firebaseapp.com",projectId:"ttstvsschool",storageBucket:"ttstvsschool.appspot.com",messagingSenderId:"557949322894",appId:"1:557949322894:web:564892b7f3b3600ff7abdf",measurementId:"G-H56FQJJJ16"};kn(Pf);const qf=se(j(()=>_("div",{class:"px-32",children:[_("div",{class:"md:py-10 py-5 ",children:_("h1",{class:"md:text-7xl text-3xl font-neue font-light text-neutral-200",children:"Events"})}),_("div",{class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",children:[_("div",{class:"w-96 h-80 border border-[#e8e8e8]"}),_("div",{class:"w-96 h-80 border border-[#e8e8e8]"})]})]}),"s_EhRtPfnZCb0")),Df={title:"Swarnotsav"},Lf=Object.freeze(Object.defineProperty({__proto__:null,default:qf,head:Df},Symbol.toStringTag,{value:"Module"})),ai=()=>xf,pa=[[/^\/$/,[ai,()=>Of],void 0,"/",["q-e4ff179e.js","q-a60149ac.js"]],[/^\/events\/?$/,[ai,()=>Lf],void 0,"/events",["q-e4ff179e.js","q-b4be0180.js"]]],ma=[],ys=!1,ga="/",$a=!0,Mf=Object.freeze(Object.defineProperty({__proto__:null,routes:pa,menus:ma,trailingSlash:ys,basePathname:ga,cacheModules:$a},Symbol.toStringTag,{value:"Module"}));var z=Symbol("headers"),ci,jf=class{constructor(){this[ci]={}}[(ci=z,Symbol.iterator)](){return this.entries()}*keys(){for(const t of Object.keys(this[z]))yield t}*values(){for(const t of Object.values(this[z]))yield t}*entries(){for(const t of Object.keys(this[z]))yield[t,this.get(t)]}get(t){return this[z][lt(t)]||null}set(t,e){const n=lt(t);this[z][n]=typeof e!="string"?String(e):e}append(t,e){const n=lt(t),s=this.has(n)?`${this.get(n)}, ${e}`:e;this.set(t,s)}delete(t){if(!this.has(t))return;const e=lt(t);delete this[z][e]}all(){return this[z]}has(t){return this[z].hasOwnProperty(lt(t))}forEach(t,e){for(const n in this[z])this[z].hasOwnProperty(n)&&t.call(e,this[z][n],n,this)}},Uf=/[^a-z0-9\-#$%&'*+.^_`|~]/i;function lt(t){if(typeof t!="string"&&(t=String(t)),Uf.test(t)||t.trim()==="")throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function Cn(){return new(typeof Headers=="function"?Headers:jf)}var mt=class extends Error{constructor(t,e){super(e),this.status=t}};function Bf(t){return ya(t,new mt(404,"Not Found"))}function Ff(t,e){const s=va(500,e),r=Cn();return r.set("Content-Type","text/html; charset=utf-8"),t.response(500,r,async i=>{i.write(s)},e)}function ya(t,e){const n=ba(e.status,e.message,e.stack),s=Cn();return s.set("Content-Type","text/html; charset=utf-8"),t.response(e.status,s,async r=>{r.write(n)},e)}function va(t,e){let n="Server Error",s;return e!=null&&(typeof e=="object"?(typeof e.message=="string"&&(n=e.message),e.stack!=null&&(s=String(e.stack))):n=String(e)),ba(t,n,s)}function ba(t,e,n){const s=typeof e=="string"?"600px":"300px",r=t>=500?Hf:zf;return t<500&&(n=""),`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${t}"/>
  <title>${t} ${e}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${s}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
    pre { max-width: 580px; margin: 0 auto; }
  </style>
</head>
<body>
  <p>
    <strong>${t}</strong>
    <span>${e}</span>
  </p>
  ${n?`<pre><code>${n}</code></pre>`:""}
</body>
</html>
`}var zf="#006ce9",Hf="#713fc2",li=new WeakMap,Wf=async(t,e,n,s)=>{if(Array.isArray(t))for(const r of t){const i=r[0].exec(s);if(i){const o=r[1],a=Kf(r[2],i),c=r[4],l=new Array(o.length),u=[],d=Vf(e,s);let h;return o.forEach((f,g)=>{ui(f,u,$=>l[g]=$,n)}),ui(d,u,f=>h=f==null?void 0:f.default,n),u.length>0&&await Promise.all(u),[a,l,h,c]}}return null},ui=(t,e,n,s)=>{if(typeof t=="function"){const r=li.get(t);if(r)n(r);else{const i=t();typeof i.then=="function"?e.push(i.then(o=>{s!==!1&&li.set(t,o),n(o)})):i&&n(i)}}},Vf=(t,e)=>{if(t){const n=t.find(s=>s[0]===e||e.startsWith(s[0]+(e.endsWith("/")?"":"/")));if(n)return n[1]}},Kf=(t,e)=>{const n={};if(t)for(let s=0;s<t.length;s++)n[t[s]]=e?e[s+1]:"";return n},dt=class{constructor(t,e,n){this.url=t,this.location=t,this.status=_a(e)?e:302,this.headers=n||Cn(),this.headers.set("Location",this.location),this.headers.delete("Cache-Control")}};function Qf(t,e){return t.response(e.status,e.headers,async()=>{})}function _a(t){return typeof t=="number"&&t>=301&&t<=308}async function Gf(t,e,n,s,r,i="/"){if(n.length===0)throw new mt(404,"Not Found");const{request:o,url:a}=t,{pathname:c}=a,l=Jf(n),u=l&&o.headers.get("Accept")==="application/json",d=u?"pagedata":l?"pagehtml":"endpoint",h={type:d,url:a,params:e,status:200,headers:Cn(),resolvedBody:void 0,pendingBody:void 0,aborted:!1};let f=!1;if(l&&c!==i){if(r){if(!c.endsWith("/"))throw new dt(c+"/"+a.search,302)}else if(c.endsWith("/"))throw new dt(c.slice(0,c.length-1)+a.search,302)}let g=-1;const $=()=>{g=hi},y=(b,v)=>new dt(b,v,h.headers),p=(b,v)=>new mt(b,v),m=async()=>{for(g++;g<n.length;){const b=n[g];let v;switch(o.method){case"GET":{v=b.onGet;break}case"POST":{v=b.onPost;break}case"PUT":{v=b.onPut;break}case"PATCH":{v=b.onPatch;break}case"OPTIONS":{v=b.onOptions;break}case"HEAD":{v=b.onHead;break}case"DELETE":{v=b.onDelete;break}}if(v=v||b.onRequest,typeof v=="function"){f=!0;const I={get status(){return h.status},set status(T){h.status=T},get headers(){return h.headers},redirect:y,error:p},S={request:o,url:new URL(a),params:{...e},response:I,platform:s,next:m,abort:$},w=v(S);if(typeof w=="function")h.pendingBody=di(w);else if(w!==null&&typeof w=="object"&&typeof w.then=="function"){const T=await w;typeof T=="function"?h.pendingBody=di(T):h.resolvedBody=T}else h.resolvedBody=w}g++}};if(await m(),h.aborted=g>=hi,!u&&_a(h.status)&&h.headers.has("Location"))throw new dt(h.headers.get("Location"),h.status,h.headers);if(d==="endpoint"&&!f)throw new mt(405,"Method Not Allowed");return h}function di(t){return new Promise((e,n)=>{try{const s=t();s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(e,n):e(s)}catch(s){n(s)}})}function Jf(t){const e=t[t.length-1];return e&&typeof e.default=="function"}function Yf(t,e){let n=t.url.pathname;if(n.endsWith(wa)){t.request.headers.set("Accept","application/json");const s=n.length-Xf+(e?1:0);n=n.slice(0,s),n===""&&(n="/"),t.url.pathname=n}}var wa="/q-data.json",Xf=wa.length,hi=999999999;function Zf(t,e){const{pendingBody:n,resolvedBody:s,status:r,headers:i}=e,{response:o}=t;if(n===void 0&&s===void 0)return o(r,i,ep);i.has("Content-Type")||i.set("Content-Type","application/json; charset=utf-8");const a=i.get("Content-Type").includes("json");return o(r,i,async({write:c})=>{const l=n!==void 0?await n:s;if(l!==void 0)if(a)c(JSON.stringify(l));else{const u=typeof l;c(u==="string"?l:u==="number"||u==="boolean"?String(l):l)}})}var ep=async()=>{};function tp(t,e,n,s,r){const{status:i,headers:o}=e,{response:a}=t,c=e.type==="pagedata";return c?o.set("Content-Type","application/json; charset=utf-8"):o.has("Content-Type")||o.set("Content-Type","text/html; charset=utf-8"),a(c?200:i,o,async l=>{try{const u=await n({stream:c?rp:l,envData:sp(e),...s});c?l.write(JSON.stringify(await fi(e,u,r))):(typeof u).html==="string"&&l.write(u.html),typeof l.clientData=="function"&&l.clientData(await fi(e,u,r))}catch(u){const d=va(500,u);l.write(d)}})}async function fi(t,e,n){const s=np(e,n);return{body:t.pendingBody?await t.pendingBody:t.resolvedBody,status:t.status!==200?t.status:void 0,redirect:t.status>=301&&t.status<=308&&t.headers.get("location")||void 0,prefetch:s.length>0?s:void 0}}function np(t,e){const n=[],s=a=>{a&&!n.includes(a)&&n.push(a)},r=a=>{if(Array.isArray(a))for(const c of a){const l=c.url.split("/").pop();l&&!n.includes(l)&&(s(l),r(c.imports))}};r(t.prefetchResources);const i=t.manifest||t._manifest,o=t._symbols;if(i&&o)for(const a of o){const c=i.symbols[a];c&&c.ctxName==="component$"&&s(i.mapping[a])}if(e)for(const a of e)s(a);return n}function sp(t){const{url:e,params:n,pendingBody:s,resolvedBody:r,status:i}=t;return{url:e.href,qwikcity:{params:{...n},response:{body:s||r,status:i}}}}var rp={write:()=>{}};async function ip(t,e,n,s){try{Yf(t,ys);const r=await Wf(pa,ma,$a,t.url.pathname);if(r){const[i,o,a,c]=r,l=await Gf(t,i,o,n,ys,ga);return l.aborted?null:l.type==="endpoint"?await Zf(t,l):await tp(t,l,e,s,c)}}catch(r){return r instanceof dt?Qf(t,r):r instanceof mt?ya(t,r):Ff(t,r)}return null}function op(t,e){async function n(s,r){try{const i={url:new URL(s.url),request:s,response:(l,u,d)=>new Promise(h=>{let f=!1;const{readable:g,writable:$}=new TransformStream,y=$.getWriter(),p=new Response(g,{status:l,headers:u});d({write:m=>{if(f||(f=!0,h(p)),typeof m=="string"){const b=new TextEncoder;y.write(b.encode(m))}else y.write(m)}}).finally(()=>{f||(f=!0,h(p)),y.close()})})},o=await r.next();if(o.ok)return o;const a=await ip(i,t,r,e);return a||await Bf(i)}catch(i){return new Response(String(i||"Error"),{status:500,headers:{"Content-Type":"text/plain; charset=utf-8"}})}}return n}/**
 * @license
 * @builder.io/qwik/server 0.11.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */if(typeof global>"u"){const t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:{};t.global=t}var ap=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});function Qn(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function Ia(t){let e=t.base;return typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}function cp(t,e){const n=e==null?void 0:e.mapper,s=t.symbolMapper?t.symbolMapper:i=>{if(n){const o=Ea(i),a=n[o];return a||console.error("Cannot resolve symbol",i,"in",n),a}};return{isServer:!0,async importSymbol(i,o,a){let c=String(o);c.endsWith(".js")||(c+=".js");const l=ap(c);if(!(a in l))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${c}'.`);return l[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(o=>{setTimeout(()=>{o(i())})}),chunkForSymbol(i){return s(i,n)}}}async function lp(t,e){const n=cp(t,e);ja(n)}var Ea=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t},up='((e,t)=>{const n="__q_context__",o=window,r=new Set,i=t=>e.querySelectorAll(t),s=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>l(o,e,t,n)))},a=(e,t)=>new CustomEvent(e,{detail:t}),c=(t,n)=>(t=t.closest("[q\\\\:container]"),new URL(n,new URL(t.getAttribute("q:base"),e.baseURI))),l=async(t,o,r,i=r.type)=>{const s="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&r.preventDefault();const a=t._qc_,l=null==a?void 0:a.li.filter((e=>e[0]===s));if(l&&l.length>0){for(const e of l)await e[1].getFn([t,r],(()=>t.isConnected))(r,t);return}const d=t.getAttribute(s);if(d)for(const o of d.split("\\n")){const i=c(t,o),s=b(i),a=performance.now(),l=u(await import(i.href.split("#")[0]),s),d=e[n];if(t.isConnected)try{e[n]=[t,r,i],f("qsymbol",{symbol:s,element:t,reqTime:a}),await l(r,t)}finally{e[n]=d}}},f=(t,n)=>{e.dispatchEvent(a(t,n))},u=(e,t)=>{if(t in e)return e[t];for(const n of Object.values(e))if("object"==typeof n&&n&&t in n)return n[t]},b=e=>e.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",d=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=d(e.type),n=e.target;for(s("-document",e,t);n&&n.getAttribute;)await l(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},v=e=>{s("-window",e,d(e.type))},w=()=>{var n;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(t=1,f("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>f("qidle"))),r.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),l(n.target,"",a("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),y=t=>{for(const n of t)r.has(n)||(q(e,n,p,!0),q(o,n,v),r.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&y(t),o.qwikevents={push:(...e)=>y(e)},q(e,"readystatechange",w),w()}})(document);',dp=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const qrlResolver = (element, qrl) => {
            element = element.closest("[q\\\\:container]");
            return new URL(qrl, new URL(element.getAttribute("q:base"), doc.baseURI));
        };
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                for (const qrl of attrValue.split("\\n")) {
                    const url = qrlResolver(element, qrl);
                    const symbolName = getSymbolName(url);
                    const reqTime = performance.now();
                    const handler = findSymbol(await import(url.href.split("#")[0]), symbolName);
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findSymbol = (module, symbol) => {
            if (symbol in module) {
                return module[symbol];
            }
            for (const v of Object.values(module)) {
                if ("object" == typeof v && v && symbol in v) {
                    return v[symbol];
                }
            }
        };
        const getSymbolName = url => url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,hp='((e,t)=>{const n="__q_context__",o=window,r=new Set,i=t=>e.querySelectorAll(t),s=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>l(o,e,t,n)))},a=(e,t)=>new CustomEvent(e,{detail:t}),c=(t,n)=>(t=t.closest("[q\\\\:container]"),new URL(n,new URL(t.getAttribute("q:base"),e.baseURI))),l=async(t,o,r,i=r.type)=>{const s="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&r.preventDefault();const a=t._qc_,l=null==a?void 0:a.li.filter((e=>e[0]===s));if(l&&l.length>0){for(const e of l)await e[1].getFn([t,r],(()=>t.isConnected))(r,t);return}const d=t.getAttribute(s);if(d)for(const o of d.split("\\n")){const i=c(t,o),s=b(i),a=performance.now(),l=u(await import(i.href.split("#")[0]),s),d=e[n];if(t.isConnected)try{e[n]=[t,r,i],f("qsymbol",{symbol:s,element:t,reqTime:a}),await l(r,t)}finally{e[n]=d}}},f=(t,n)=>{e.dispatchEvent(a(t,n))},u=(e,t)=>{if(t in e)return e[t];for(const n of Object.values(e))if("object"==typeof n&&n&&t in n)return n[t]},b=e=>e.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",d=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=d(e.type),n=e.target;for(s("-document",e,t);n&&n.getAttribute;)await l(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},v=e=>{s("-window",e,d(e.type))},w=()=>{var n;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(t=1,f("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>f("qidle"))),r.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),l(n.target,"",a("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),y=t=>{for(const n of t)r.has(n)||(q(e,n,p,!0),q(o,n,v),r.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&y(t),o.qwikevents={push:(...e)=>y(e)},q(e,"readystatechange",w),w()}})(document);',fp=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const qrlResolver = (element, qrl) => {
            element = element.closest("[q\\\\:container]");
            return new URL(qrl, new URL(element.getAttribute("q:base"), doc.baseURI));
        };
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                for (const qrl of attrValue.split("\\n")) {
                    const url = qrlResolver(element, qrl);
                    const symbolName = getSymbolName(url);
                    const reqTime = performance.now();
                    const handler = findSymbol(await import(url.href.split("#")[0]), symbolName);
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findSymbol = (module, symbol) => {
            if (symbol in module) {
                return module[symbol];
            }
            for (const v of Object.values(module)) {
                if ("object" == typeof v && v && symbol in v) {
                    return v[symbol];
                }
            }
        };
        const getSymbolName = url => url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function pp(t={}){return Array.isArray(t.events)&&t.events.length>0?(t.debug?fp:hp).replace("window.qEvents",JSON.stringify(t.events)):t.debug?dp:up}function mp(t,e,n){if(!n)return[];const s=e.prefetchStrategy,r=Ia(e);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return gp(t,n,r);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:n.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function gp(t,e,n){const s=[],r=t==null?void 0:t.listeners,i=t==null?void 0:t.objs,{mapper:o,manifest:a}=e,c=new Set;if(Array.isArray(r))for(const l in o)r.some(d=>d.qrl.getHash()===l)&&vs(a,c,s,n,o[l][1]);if(Array.isArray(i)){for(const l of i)if($p(l)){const u=l.getHash(),d=o[u];d&&vs(a,c,s,n,d[0])}}return s}function vs(t,e,n,s,r){const i=s+r;if(!e.has(i)){e.add(i);const o=t.bundles[r];if(o){const a={url:i,imports:[]};if(n.push(a),Array.isArray(o.imports))for(const c of o.imports)vs(t,e,a.imports,s,c)}}}var $p=t=>typeof t=="function"&&typeof t.getSymbol=="function",Sa=globalThis.qDev===!0,yp=[],ka={};Sa&&(Object.freeze(yp),Object.freeze(ka),Error.stackTraceLimit=9999);["click","dblclick","contextmenu","auxclick","pointerdown","pointerup","pointermove","pointerover","pointerenter","pointerleave","pointerout","pointercancel","gotpointercapture","lostpointercapture","touchstart","touchend","touchmove","touchcancel","mousedown","mouseup","mousemove","mouseenter","mouseleave","mouseover","mouseout","wheel","gesturestart","gesturechange","gestureend","keydown","keyup","keypress","input","change","search","invalid","beforeinput","select","focusin","focusout","focus","blur","submit","reset","scroll"].map(t=>`on${t.toLowerCase()}$`);["useWatch$","useClientEffect$","useEffect$","component$","useStyles$","useStylesScoped$"].map(t=>t.toLowerCase());function vp(t){if(t!=null&&t.mapping!=null&&typeof t.mapping=="object"&&t.symbols!=null&&typeof t.symbols=="object"&&t.bundles!=null&&typeof t.bundles=="object")return t}function bs(){let r=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return r+="w.postMessage(u.map(u=>new URL(u,origin)+''));",r+="w.onmessage=()=>{w.terminate()};",r}function bp(t){const e={bundles:On(t).map(n=>n.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(e)}}))`}function On(t){const e=[],n=s=>{if(Array.isArray(s))for(const r of s)e.includes(r.url)||(e.push(r.url),n(r.imports))};return n(t),e}function _p(t,e){const n=kp(t==null?void 0:t.implementation),s=[];return n.prefetchEvent==="always"&&wp(s,e),n.linkInsert==="html-append"&&Ip(s,e,n),n.linkInsert==="js-append"?Ep(s,e,n):n.workerFetchInsert==="always"&&Sp(s,e),s.length>0?_(Rt,{children:s}):null}function wp(t,e){t.push(_("script",{type:"module",dangerouslySetInnerHTML:bp(e)}))}function Ip(t,e,n){const s=On(e),r=n.linkRel||"prefetch";for(const i of s){const o={};o.href=i,o.rel=r,(r==="prefetch"||r==="preload")&&i.endsWith(".js")&&(o.as="script"),t.push(_("link",o,void 0))}}function Ep(t,e,n){const s=n.linkRel||"prefetch";let r="";n.workerFetchInsert==="no-link-support"&&(r+="let supportsLinkRel = true;"),r+=`const u=${JSON.stringify(On(e))};`,r+="u.map((u,i)=>{",r+="const l=document.createElement('link');",r+='l.setAttribute("href",u);',r+=`l.setAttribute("rel","${s}");`,n.workerFetchInsert==="no-link-support"&&(r+="if(i===0){",r+="try{",r+=`supportsLinkRel=l.relList.supports("${s}");`,r+="}catch(e){}",r+="}"),r+="document.body.appendChild(l);",r+="});",n.workerFetchInsert==="no-link-support"&&(r+="if(!supportsLinkRel){",r+=bs(),r+="}"),n.workerFetchInsert==="always"&&(r+=bs()),t.push(_("script",{type:"module",dangerouslySetInnerHTML:r}))}function Sp(t,e){let n=`const u=${JSON.stringify(On(e))};`;n+=bs(),t.push(_("script",{type:"module",dangerouslySetInnerHTML:n}))}function kp(t){if(typeof t=="string"){switch(t){case"link-prefetch-html":return xe(t,"linkInsert"),{linkInsert:"html-append",linkRel:"prefetch",workerFetchInsert:null,prefetchEvent:null};case"link-prefetch":return xe(t,"linkInsert"),{linkInsert:"js-append",linkRel:"prefetch",workerFetchInsert:"no-link-support",prefetchEvent:null};case"link-preload-html":return xe(t,"linkInsert"),{linkInsert:"html-append",linkRel:"preload",workerFetchInsert:null,prefetchEvent:null};case"link-preload":return xe(t,"linkInsert"),{linkInsert:"js-append",linkRel:"preload",workerFetchInsert:"no-link-support",prefetchEvent:null};case"link-modulepreload-html":return xe(t,"linkInsert"),{linkInsert:"html-append",linkRel:"modulepreload",workerFetchInsert:null,prefetchEvent:null};case"link-modulepreload":return xe(t,"linkInsert"),{linkInsert:"js-append",linkRel:"modulepreload",workerFetchInsert:"no-link-support",prefetchEvent:null}}return xe(t,"workerFetchInsert"),{linkInsert:null,linkRel:null,workerFetchInsert:"always",prefetchEvent:null}}return t&&typeof t=="object"?t:Tp}var Tp={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"};function xe(t,e){console.warn(`The Prefetch Strategy Implementation "${t}" has been deprecated and will be removed in an upcoming release. Please update to use the "prefetchStrategy.implementation.${e}" interface.`)}var Ap="<!DOCTYPE html>";async function xp(t,e){var R,O,N,P,Te,re;let n=e.stream,s=0,r=0,i=0,o=0;const a=(O=(R=e.streaming)==null?void 0:R.inOrder)!=null?O:{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},c=(N=e.containerTagName)!=null?N:"html",l=(P=e.containerAttributes)!=null?P:{};let u="";const d=n,h=Qn();function f(){u&&(d.write(u),u="",s=0,i++,i===1&&(o=h()))}function g(L){s+=L.length,r+=L.length,u+=L}switch(a.strategy){case"disabled":n={write:g};break;case"direct":n=d;break;case"auto":let L=0,G=!1;const Pn=(Te=a.maximunChunk)!=null?Te:0,qn=(re=a.maximunInitialChunk)!=null?re:0;n={write(ie){ie==="<!--qkssr-f-->"?G||(G=!0):ie==="<!--qkssr-pu-->"?L++:ie==="<!--qkssr-po-->"?L--:g(ie),L===0&&(G||s>=(i===0?qn:Pn))&&(G=!1,f())}};break}c==="html"?n.write(Ap):e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"},e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404");const $=Ia(e),y=Rp(e.manifest);await lp(e,y);let p=null;const m=y==null?void 0:y.manifest.injections,b=m?m.map(L=>{var G;return _(L.tag,(G=L.attributes)!=null?G:ka)}):void 0,v=Qn(),I=[];let S=0,w=0;return await $l(t,{stream:n,containerTagName:c,containerAttributes:l,envData:e.envData,base:$,beforeContent:b,beforeClose:async(L,G)=>{var hr,fr,pr;S=v();const Pn=Qn();p=await so(L,G);const qn=JSON.stringify(p.state,void 0,Sa?"  ":void 0),ie=[_("script",{type:"qwik/json",dangerouslySetInnerHTML:Np(qn)})];if(e.prefetchStrategy!==null){const J=mp(p,e,y);if(J.length>0){const mr=_p(e.prefetchStrategy,J);mr&&ie.push(mr)}}const cr=!p||p.mode!=="static",lr=(fr=(hr=e.qwikLoader)==null?void 0:hr.include)!=null?fr:"auto",ur=lr==="always"||lr==="auto"&&cr;if(ur){const J=pp({events:(pr=e.qwikLoader)==null?void 0:pr.events,debug:e.debug});ie.push(_("script",{id:"qwikloader",dangerouslySetInnerHTML:J}))}const dr=Array.from(G.$events$,J=>JSON.stringify(J));if(dr.length>0){let J=`window.qwikevents.push(${dr.join(", ")})`;ur||(J=`window.qwikevents||=[];${J}`),ie.push(_("script",{dangerouslySetInnerHTML:J}))}return Cp(I,L),w=Pn(),_(Rt,{children:ie})}}),f(),{prefetchResources:void 0,snapshotResult:p,flushes:i,manifest:y==null?void 0:y.manifest,size:r,timing:{render:S,snapshot:w,firstFlush:o},_symbols:I}}function Rp(t){if(!!t){if("mapper"in t)return t;if(t=vp(t),t){const e={};return Object.entries(t.mapping).forEach(([n,s])=>{e[Ea(n)]=[n,s]}),{mapper:e,manifest:t}}}}var Np=t=>t.replace(/<(\/?script)/g,"\\x3C$1");function Cp(t,e){var n;for(const s of e){const r=(n=s.$componentQrl$)==null?void 0:n.getSymbol();r&&!t.includes(r)&&t.push(r)}}const Op={symbols:{s_PQPQ1jYjsWE:{origin:"components/header/header.tsx",displayName:"header_component_header_button_onClick",canonicalFilename:"s_pqpq1jyjswe",hash:"PQPQ1jYjsWE",ctxKind:"event",ctxName:"onClick$",captures:!1,parent:"s_ceU05TscGYE"},s_hA9UPaY8sNQ:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_a_onClick",canonicalFilename:"s_ha9upay8snq",hash:"hA9UPaY8sNQ",ctxKind:"event",ctxName:"onClick$",captures:!0,parent:"s_mYsiJcA4IBc"},s_skxgNVWVOT8:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_a_onMouseOver",canonicalFilename:"s_skxgnvwvot8",hash:"skxgNVWVOT8",ctxKind:"event",ctxName:"onMouseOver$",captures:!1,parent:"s_mYsiJcA4IBc"},s_uVE5iM9H73c:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_a_onQVisible",canonicalFilename:"s_uve5im9h73c",hash:"uVE5iM9H73c",ctxKind:"event",ctxName:"onQVisible$",captures:!1,parent:"s_mYsiJcA4IBc"},s_AaAlzKH0KlQ:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCity_component_useWatch",canonicalFilename:"s_aaalzkh0klq",hash:"AaAlzKH0KlQ",ctxKind:"function",ctxName:"useWatch$",captures:!0,parent:"s_z1nvHyEppoI"},s_3sccYCDd1Z0:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_3sccycdd1z0",hash:"3sccYCDd1Z0",ctxKind:"function",ctxName:"component$",captures:!1},s_EhRtPfnZCb0:{origin:"routes/events/index.tsx",displayName:"events_component",canonicalFilename:"s_ehrtpfnzcb0",hash:"EhRtPfnZCb0",ctxKind:"function",ctxName:"component$",captures:!1},s_VkLNXphUh5s:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vklnxphuh5s",hash:"VkLNXphUh5s",ctxKind:"function",ctxName:"component$",captures:!1},s_ceU05TscGYE:{origin:"components/header/header.tsx",displayName:"header_component",canonicalFilename:"s_ceu05tscgye",hash:"ceU05TscGYE",ctxKind:"function",ctxName:"component$",captures:!1},s_mYsiJcA4IBc:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_mysijca4ibc",hash:"mYsiJcA4IBc",ctxKind:"function",ctxName:"component$",captures:!1},s_nd8yk3KO22c:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_nd8yk3ko22c",hash:"nd8yk3KO22c",ctxKind:"function",ctxName:"component$",captures:!1},s_xYL1qOwPyDI:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_xyl1qowpydi",hash:"xYL1qOwPyDI",ctxKind:"function",ctxName:"component$",captures:!1},s_z1nvHyEppoI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCity_component",canonicalFilename:"s_z1nvhyeppoi",hash:"z1nvHyEppoI",ctxKind:"function",ctxName:"component$",captures:!1},s_zrbrqoaqXSY:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_zrbrqoaqxsy",hash:"zrbrqoaqXSY",ctxKind:"function",ctxName:"component$",captures:!1},s_N39ca0w8E8Y:{origin:"components/header/header.tsx",displayName:"header_component_useStylesScoped",canonicalFilename:"s_n39ca0w8e8y",hash:"N39ca0w8E8Y",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_ceU05TscGYE"}},mapping:{s_PQPQ1jYjsWE:"q-747979d1.js",s_hA9UPaY8sNQ:"q-597b798d.js",s_skxgNVWVOT8:"q-597b798d.js",s_uVE5iM9H73c:"q-597b798d.js",s_AaAlzKH0KlQ:"q-5f972ba1.js",s_3sccYCDd1Z0:"q-f8ccbfce.js",s_EhRtPfnZCb0:"q-876d09ab.js",s_VkLNXphUh5s:"q-1d93749e.js",s_ceU05TscGYE:"q-747979d1.js",s_mYsiJcA4IBc:"q-597b798d.js",s_nd8yk3KO22c:"q-f9a998c6.js",s_xYL1qOwPyDI:"q-e5073b48.js",s_z1nvHyEppoI:"q-5f972ba1.js",s_zrbrqoaqXSY:"q-0a3b54bb.js",s_N39ca0w8E8Y:"q-747979d1.js"},bundles:{"q-0a3b54bb.js":{size:872,imports:["q-33d5cf9f.js","q-f8ccbfce.js"],origins:["src/entry_RouterHead.js","src/s_zrbrqoaqxsy.js"],symbols:["s_zrbrqoaqXSY"]},"q-1d93749e.js":{size:104026,imports:["q-33d5cf9f.js","q-cb5a51c2.js"],dynamicImports:["q-747979d1.js"],origins:["node_modules/@firebase/auth/dist/esm2017/index-0bb4da3b.js","node_modules/@firebase/auth/node_modules/tslib/tslib.es6.js","src/components/header/header.js","src/entry_layout.js","src/s_vklnxphuh5s.js"],symbols:["s_VkLNXphUh5s"]},"q-1dd5e43f.js":{size:2536,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.js"]},"q-2276ab43.js":{size:58,imports:["q-33d5cf9f.js"]},"q-33d5cf9f.js":{size:39960,dynamicImports:["q-f8ccbfce.js"],origins:["\0vite/preload-helper","node_modules/@builder.io/qwik/core.min.mjs","src/global.css","src/root.js"]},"q-597b798d.js":{size:886,imports:["q-33d5cf9f.js","q-f8ccbfce.js"],origins:["src/entry_Link.js","src/s_ha9upay8snq.js","src/s_mysijca4ibc.js","src/s_skxgnvwvot8.js","src/s_uve5im9h73c.js"],symbols:["s_hA9UPaY8sNQ","s_mYsiJcA4IBc","s_skxgNVWVOT8","s_uVE5iM9H73c"]},"q-5f972ba1.js":{size:1484,imports:["q-33d5cf9f.js","q-f8ccbfce.js"],dynamicImports:["q-8ae59791.js"],origins:["@builder.io/qwik/build","src/entry_QwikCity.js","src/s_aaalzkh0klq.js","src/s_z1nvhyeppoi.js"],symbols:["s_AaAlzKH0KlQ","s_z1nvHyEppoI"]},"q-747979d1.js":{size:1705,imports:["q-1d93749e.js","q-33d5cf9f.js","q-cb5a51c2.js"],origins:["src/components/header/header.css?used&inline","src/entry_header.js","src/s_ceu05tscgye.js","src/s_n39ca0w8e8y.js","src/s_pqpq1jyjswe.js"],symbols:["s_ceU05TscGYE","s_N39ca0w8E8Y","s_PQPQ1jYjsWE"]},"q-876d09ab.js":{size:433,imports:["q-33d5cf9f.js"],origins:["src/entry_events.js","src/s_ehrtpfnzcb0.js"],symbols:["s_EhRtPfnZCb0"]},"q-8ae59791.js":{size:424,imports:["q-33d5cf9f.js"],dynamicImports:["q-a60149ac.js","q-b4be0180.js","q-e4ff179e.js","q-fc12b783.js"],origins:["@qwik-city-plan"]},"q-a60149ac.js":{size:511,imports:["q-33d5cf9f.js","q-cb5a51c2.js"],dynamicImports:["q-e5073b48.js"],origins:["src/routes/index.js"]},"q-b4be0180.js":{size:511,imports:["q-33d5cf9f.js","q-cb5a51c2.js"],dynamicImports:["q-876d09ab.js"],origins:["src/routes/events/index.js"]},"q-cb5a51c2.js":{size:39827,origins:["node_modules/@firebase/app/dist/esm/index.esm2017.js","node_modules/@firebase/component/dist/esm/index.esm2017.js","node_modules/@firebase/logger/dist/esm/index.esm2017.js","node_modules/@firebase/util/dist/index.esm2017.js","node_modules/firebase/app/dist/index.esm.js","node_modules/idb/build/index.js","node_modules/idb/build/wrap-idb-value.js"]},"q-e4ff179e.js":{size:171,imports:["q-33d5cf9f.js"],dynamicImports:["q-1d93749e.js"],origins:["src/routes/layout.js"]},"q-e5073b48.js":{size:2479,imports:["q-33d5cf9f.js"],origins:["src/entry_routes.js","src/s_xyl1qowpydi.js"],symbols:["s_xYL1qOwPyDI"]},"q-f8ccbfce.js":{size:4180,imports:["q-33d5cf9f.js"],dynamicImports:["q-0a3b54bb.js","q-597b798d.js","q-5f972ba1.js","q-f9a998c6.js"],origins:["node_modules/@builder.io/qwik-city/index.qwik.mjs","src/components/router-head/router-head.js","src/entry_root.js","src/s_3sccycdd1z0.js"],symbols:["s_3sccYCDd1Z0"]},"q-f9a998c6.js":{size:269,imports:["q-33d5cf9f.js","q-f8ccbfce.js"],origins:["src/entry_RouterOutlet.js","src/s_nd8yk3ko22c.js"],symbols:["s_nd8yk3KO22c"]},"q-fc12b783.js":{size:128,imports:["q-33d5cf9f.js"],dynamicImports:["q-1dd5e43f.js"],origins:["@qwik-city-entries"]}},injections:[{tag:"link",location:"head",attributes:{rel:"stylesheet",href:"/build/q-afc0a903.css"}}],version:"1",options:{target:"client",buildMode:"production",forceFullBuild:!0,entryStrategy:{type:"smart"}},platform:{qwik:"0.11.0",vite:"",rollup:"2.78.1",env:"node",os:"linux",node:"19.0.0"}},Pp=!0,qp=!1,Dp=nt("qc-c"),Ta=nt("qc-ic"),Aa=nt("qc-h"),xa=nt("qc-l"),Ra=nt("qc-n"),Lp=se(j(()=>{const{contents:t}=yn(Ta);if(t&&t.length>0){const e=t.length;let n=null;for(let s=e-1;s>=0;s--)n=_(t[s].default,{children:n});return n}return Ns},"RouterOutlet_component_nd8yk3KO22c")),pi=new WeakMap,Mp=async(t,e,n,s)=>{if(Array.isArray(t))for(const r of t){const i=r[0].exec(s);if(i){const o=r[1],a=Up(r[2],i),c=r[4],l=new Array(o.length),u=[],d=jp(e,s);let h;return o.forEach((f,g)=>{mi(f,u,$=>l[g]=$,n)}),mi(d,u,f=>h=f==null?void 0:f.default,n),u.length>0&&await Promise.all(u),[a,l,h,c]}}return null},mi=(t,e,n,s)=>{if(typeof t=="function"){const r=pi.get(t);if(r)n(r);else{const i=t();typeof i.then=="function"?e.push(i.then(o=>{s!==!1&&pi.set(t,o),n(o)})):i&&n(i)}}},jp=(t,e)=>{if(t){const n=t.find(s=>s[0]===e||e.startsWith(s[0]+(e.endsWith("/")?"":"/")));if(n)return n[1]}},Up=(t,e)=>{const n={};if(t)for(let s=0;s<t.length;s++)n[t[s]]=e?e[s+1]:"";return n},Bp=(t,e,n)=>{const s=Na(),r={data:t?t.body:null,head:s,...e};for(let i=n.length-1;i>=0;i--){const o=n[i]&&n[i].head;o&&(typeof o=="function"?gi(s,o(r)):typeof o=="object"&&gi(s,o))}return r.head},gi=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),Gn(t.meta,e.meta),Gn(t.links,e.links),Gn(t.styles,e.styles)},Gn=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const s=t.findIndex(r=>r.key===n.key);if(s>-1){t[s]=n;continue}}t.push(n)}},Na=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),Fp=()=>yn(Aa),Ca=()=>yn(xa),zp=()=>yn(Ra),Hp=()=>In(yo("qwikcity")),un=t=>t.pathname+t.search+t.hash,Ye=(t,e)=>new URL(t,e.href),Oa=(t,e)=>t.origin===e.origin,Pa=(t,e)=>t.pathname+t.search===e.pathname+e.search,Wp=(t,e)=>t.pathname===e.pathname,$i=(t,e)=>Oa(t,e)&&!Pa(t,e),Vp=t=>t+(t.endsWith("/")?"":"/")+"q-data.json",Kp=(t,e)=>{const n=t.href;if(typeof n=="string"&&n.trim()!==""&&typeof t.target!="string")try{const s=Ye(n,e),r=Ye("",e);if(Oa(s,r))return un(s)}catch(s){console.error(s)}return null},Qp=(t,e,n)=>{if(t.prefetch&&e){const s=Ye(e,n);if(!Wp(s,Ye("",n)))return s+""}return null},Gp=(t,e)=>{const n=t.location,s=Ye(e.path,n);$i(n,s)&&(yi(t,n,s),t.history.pushState("","",un(s))),t[_i]||(t[_i]=1,t.addEventListener("popstate",()=>{const r=t.location,i=Ye(e.path,r);$i(r,i)&&(yi(t,i,r),e.path=un(r))}))},yi=async(t,e,n)=>{const s=t.document,r=n.hash;if(Pa(e,n))e.hash!==r&&(await Jn(),r?vi(s,r):t.scrollTo(0,0));else if(r)for(let i=0;i<24&&(await Jn(),!vi(s,r));i++);else await Jn(),t.scrollTo(0,0)},Jn=()=>new Promise(t=>setTimeout(t,12)),vi=(t,e)=>{const n=e.slice(1),s=t.getElementById(n);return s&&s.scrollIntoView(),s},bi=t=>{typeof document<"u"&&document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},_i=Symbol(),qa=async t=>{const e=new URL(t).pathname,n=Vp(e);bi({links:[e]});const s=await fetch(n),r=s.headers.get("content-type")||"";if(s.ok&&r.includes("json")){const i=await s.json();return bi({bundles:i.prefetch,links:[e]}),i}},Jp=se(j(()=>{const t=Hp();if(!(t!=null&&t.params))throw new Error("Missing Qwik City Env Data");const e=yo("url");if(!e)throw new Error("Missing Qwik URL Env Data");const n=new URL(e),s=ct({href:n.href,pathname:n.pathname,query:Object.fromEntries(n.searchParams.entries()),params:t.params}),r=ct({path:un(n)}),i=ct(Na),o=ct({headings:void 0,menu:void 0}),a=ct({contents:void 0});return it(Dp,o),it(Ta,a),it(Aa,i),it(xa,s),it(Ra,r),Oc(j(async({track:c})=>{const[l,u,d,h,f,g]=Hs(),{routes:$,menus:y,cacheModules:p}=await Promise.resolve().then(()=>Mf),m=c(g,"path"),b=new URL(m,f.href),v=b.pathname,I=Mp($,y,p,v),S=Pp?h.response:qa(b.href),w=await I;if(w){const[T,R,O]=w,N=R,P=N[N.length-1];f.href=b.href,f.pathname=v,f.params={...T},f.query=Object.fromEntries(b.searchParams.entries()),l.headings=P.headings,l.menu=O,u.contents=In(N);const Te=await S,re=Bp(Te,f,N);d.links=re.links,d.meta=re.meta,d.styles=re.styles,d.title=re.title,qp&&Gp(window,g)}},"QwikCity_component_useWatch_AaAlzKH0KlQ",[o,a,i,t,s,r])),_(Gs,{})},"QwikCity_component_z1nvHyEppoI"));j(t=>{const e=zp(),n=Ca(),s=t.href,r={...t},i=Kp(r,n),o=Qp(t,i,n);return r["preventdefault:click"]=!!i,r.href=i||s,_("a",{...r,onClick$:j(()=>{const[a,c,l]=Hs();a&&(l.path=c.href)},"Link_component_a_onClick_hA9UPaY8sNQ",[i,r,e]),"data-prefetch":o,onMouseOver$:j((a,c)=>wi(c),"Link_component_a_onMouseOver_skxgNVWVOT8"),onQVisible$:j((a,c)=>wi(c,!0),"Link_component_a_onQVisible_uVE5iM9H73c"),children:_(Gs,{})})},"Link_component_mYsiJcA4IBc");const wi=(t,e)=>{var s;const n=(s=t==null?void 0:t.dataset)==null?void 0:s.prefetch;n&&(Yn||(Yn=window.innerWidth),(!e||e&&Yn<520)&&qa(n))};let Yn=0;const Yp='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',Xp=()=>_("script",{dangerouslySetInnerHTML:Yp}),Zp=se(j(()=>{const t=Fp(),e=Ca();return _(Rt,{children:[_("title",{children:jn(t,"title")}),_("link",{rel:"canonical",get href(){return e.href},[K]:{href:jn(e,"href")}}),_("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),_("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),_("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),_("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),_("link",{href:"https://fonts.googleapis.com/css2?family=Poppins&display=swap",rel:"stylesheet"}),t.meta.map(n=>_("meta",{...n})),t.links.map(n=>_("link",{...n})),t.styles.map(n=>_("style",{...n.props,get dangerouslySetInnerHTML(){return n.style},[K]:{dangerouslySetInnerHTML:jn(n,"style")}}))]})},"s_zrbrqoaqXSY"));const em=se(j(()=>_(Jp,{children:[_("head",{children:[_("meta",{charSet:"utf-8"}),_(Zp,{})]}),_("body",{class:"bg-[#000000]",lang:"en",children:[_(Lp,{}),_(Xp,{})]})]}),"s_3sccYCDd1Z0"));function tm(t){return xp(_(em,{}),{manifest:Op,...t,prefetchStrategy:{implementation:{linkInsert:null,workerFetchInsert:null,prefetchEvent:"always"}}})}const nm=op(tm);export{nm as default};
