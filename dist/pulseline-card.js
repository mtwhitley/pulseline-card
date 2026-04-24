function t(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,f=globalThis,_=f.trustedTypes,g=_?_.emptyScript:"",y=f.reactiveElementPolyfillSupport,v=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);n?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:m).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=s;const r=n.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const r=this.constructor;if(!1===s&&(n=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??$)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,y?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const b=globalThis,A=t=>t,E=b.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,U=`<${P}>`,N=document,D=()=>N.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,R="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,I=/>/g,H=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,j=/"/g,F=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),L=B(1),W=B(2),q=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),J=new WeakMap,Z=N.createTreeWalker(N,129);function G(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Q=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=T;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===T?"!--"===l[1]?o=z:void 0!==l[1]?o=I:void 0!==l[2]?(F.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=H):void 0!==l[3]&&(o=H):o===H?">"===l[0]?(o=n??T,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?H:'"'===l[3]?j:V):o===j||o===V?o=H:o===z||o===I?o=T:(o=H,n=void 0);const d=o===H&&t[e+1].startsWith("/>")?" ":"";r+=o===T?i+U:c>=0?(s.push(a),i.slice(0,c)+k+i.slice(c)+C+d):i+C+(-2===c?e:d)}return[G(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class X{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,c]=Q(t,e);if(this.el=X.createElement(l,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Z.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=c[r++],i=s.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?st:"?"===o[1]?nt:"@"===o[1]?rt:it}),s.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(F.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],D()),Z.nextNode(),a.push({type:2,index:++n});s.append(t[e],D())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){if(e===q)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=M(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Y(t,n._$AS(t,e.values),n,s)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??N).importNode(e,!0);Z.currentNode=s;let n=Z.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new et(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new ot(n,this,t)),this._$AV.push(e),a=i[++o]}r!==a?.index&&(n=Z.nextNode(),r++)}return Z.currentNode=N,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),M(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new tt(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new X(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new et(this.O(D()),this.O(D()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=Y(this,t,e,0),r=!M(t)||t!==this._$AH&&t!==q,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=Y(this,s[i+o],e,o),a===q&&(a=this._$AH[o]),r||=!M(a)||a!==this._$AH[o],a===K?t=K:t!==K&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class nt extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class rt extends it{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??K)===q)return;const i=this._$AH,s=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==K&&(i===K||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const at=b.litHtmlPolyfillSupport;at?.(X,et),(b.litHtmlVersions??=[]).push("3.3.2");const lt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ct extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new et(e.insertBefore(D(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ct._$litElement$=!0,ct.finalized=!0,lt.litElementHydrateSupport?.({LitElement:ct});const ht=lt.litElementPolyfillSupport;ht?.({LitElement:ct}),(lt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:$},ut=(t=dt,e,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t){return pt({...t,state:!0,attribute:!1})}const _t="pulseline-card";function gt(t){const e=[];for(const i of t){const t=i.s??i.state;if(!t)continue;const s=parseFloat(t);if(isNaN(s))continue;let n;if(null!=i.lu)n=1e3*i.lu;else{if(!i.last_updated)continue;n=new Date(i.last_updated).getTime()}e.push({value:s,timestamp:n})}return e}function yt(t){if(0===t.length)return[];const e=[t[0]];let i=Math.round(100*t[0]);for(let s=1;s<t.length;s++){const n=Math.round(100*t[s]);n!==i&&(e.push(t[s]),i=n)}return e}async function vt(t,e,i){const s=new Date,n=new Date(s);n.setDate(n.getDate()-(i-1)),n.setHours(0,0,0,0);try{const s=(await t.callWS({type:"recorder/statistics_during_period",statistic_ids:[e],period:"day",start_time:n.toISOString(),types:["mean"]}))[e];if(s&&s.length>0){const t=new Array(i).fill(null);for(const e of s){if(null==e.mean)continue;const s=new Date(e.start).getTime()-n.getTime(),r=Math.floor(s/864e5);r>=0&&r<i&&(t[r]=e.mean)}const e=t.filter(t=>null!==t).length;if(e>=2)return t}}catch{}return async function(t,e,i,s){try{const n=gt((await t.callWS({type:"history/history_during_period",start_time:s.toISOString(),entity_ids:[e],minimal_response:!0,no_attributes:!0,significant_changes_only:!1}))[e]||[]),r=new Array(i).fill(null),o=new Array(i).fill(0),a=new Array(i).fill(0);for(const t of n){const e=t.timestamp-s.getTime(),n=Math.floor(e/864e5);n>=0&&n<i&&(o[n]+=t.value,a[n]++)}for(let t=0;t<i;t++)a[t]>0&&(r[t]=o[t]/a[t]);return r}catch{return new Array(i).fill(null)}}(t,e,i,n)}const mt=[30,90,365];async function $t(t,e,i){const s=new Date;s.setDate(s.getDate()-i);return gt((await t.callWS({type:"history/history_during_period",start_time:s.toISOString(),entity_ids:[e],minimal_response:!0,no_attributes:!0,significant_changes_only:!1}))[e]||[]).map(t=>t.value)}async function wt(t,e,i){let s=[];for(const n of mt)try{const r=yt(await $t(t,e,n));if(r.length>s.length&&(s=r),s.length>=i)return s.slice(-i)}catch{continue}try{const i=await async function(t,e,i){const s=new Date;return s.setDate(s.getDate()-i),((await t.callWS({type:"recorder/statistics_during_period",statistic_ids:[e],period:"day",start_time:s.toISOString(),types:["mean"]}))[e]||[]).filter(t=>null!=t.mean).map(t=>t.mean)}(t,e,365),n=yt(i);n.length>s.length&&(s=n)}catch{}return s.slice(-i)}console.info(`%c  ${_t.toUpperCase()}  %c  v0.3.0-dev.1  `,"color: white; background: #3b82f6; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;","color: #3b82f6; background: #e0e7ff; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;");const xt=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];let bt=class extends ct{constructor(){super(...arguments),this._dailyBuckets=[],this._recentValues=[],this._lastFetchKey="",this._lastFetchTime=0,this._fetchInProgress=!1}static getStubConfig(){return{entity:"sensor.temperature"}}setConfig(t){if(!t||"object"!=typeof t)throw new Error("Invalid configuration: config must be an object");if(!t.entity||"string"!=typeof t.entity)throw new Error("Invalid configuration: 'entity' is required");const e=t.card_mode||"single";if("single"!==e&&"dual"!==e)throw new Error("Invalid configuration: 'card_mode' must be 'single' or 'dual'");if("dual"===e){if(!t.entity_2||"string"!=typeof t.entity_2)throw new Error("Invalid configuration: 'entity_2' is required when card_mode is 'dual'");if("score"===t.display_style)throw new Error("Invalid configuration: display_style 'score' is not supported in dual mode");if(t.footer_row&&"none"!==t.footer_row.type)throw new Error("Invalid configuration: footer_row is not supported in dual mode");if(t.supporting_row&&"delta"===t.supporting_row.type)throw new Error("Invalid configuration: supporting_row 'delta' is not supported in dual mode")}if(t.display_style&&"unit"!==t.display_style&&"score"!==t.display_style)throw new Error("Invalid configuration: 'display_style' must be 'unit' or 'score'");if("score"===t.display_style&&(null==t.score_max||"number"!=typeof t.score_max))throw new Error("Invalid configuration: 'score_max' is required when display_style is 'score'");if(null!=t.value_precision&&("number"!=typeof t.value_precision||t.value_precision<0))throw new Error("Invalid configuration: 'value_precision' must be a non-negative number");if(t.supporting_row){const e=t.supporting_row.type;if("none"!==e&&"kudos"!==e&&"delta"!==e)throw new Error("Invalid configuration: supporting_row.type must be 'none', 'kudos', or 'delta'");if("kudos"===e){if(!Array.isArray(t.supporting_row.kudos_rules)||0===t.supporting_row.kudos_rules.length)throw new Error("Invalid configuration: 'kudos_rules' must be a non-empty array when type is 'kudos'");for(const e of t.supporting_row.kudos_rules){if("number"!=typeof e.min||"string"!=typeof e.label)throw new Error("Invalid configuration: each kudos rule must have 'min' (number) and 'label' (string)");if(null!=e.max&&"number"!=typeof e.max)throw new Error("Invalid configuration: kudos rule 'max' must be a number if provided");if(null!=e.icon&&"string"!=typeof e.icon)throw new Error("Invalid configuration: kudos rule 'icon' must be a string if provided");if(null!=e.color&&"string"!=typeof e.color)throw new Error("Invalid configuration: kudos rule 'color' must be a string if provided")}}}if(t.footer_row){const e=t.footer_row.type;if("none"!==e&&"sparkline_days"!==e&&"sparkline_values"!==e&&"progress_bar"!==e)throw new Error("Invalid configuration: footer_row.type must be 'none', 'sparkline_days', 'sparkline_values', or 'progress_bar'");if("sparkline_values"===e&&null!=t.footer_row.x_values&&("number"!=typeof t.footer_row.x_values||t.footer_row.x_values<2||t.footer_row.x_values>14))throw new Error("Invalid configuration: x_values must be a number between 2 and 14");if("progress_bar"===e&&"score"!==t.display_style)throw new Error("Invalid configuration: progress_bar footer requires display_style 'score'")}this._config=t}_computeRowSize(){const t=this._config?.footer_row?.type??"none";return"sparkline_days"===t||"sparkline_values"===t?3:2}getCardSize(){return this._computeRowSize()}getGridOptions(){return{columns:6,rows:this._computeRowSize(),min_columns:3,min_rows:1}}updated(t){super.updated(t),(t.has("hass")||t.has("_config"))&&this._scheduleDataFetch()}_needsRecentValues(){const t=this._config?.footer_row?.type;if("sparkline_values"===t)return!0;const e=this._config?.supporting_row?.type;return"delta"===e&&"sparkline_days"!==t}_needsDailyBuckets(){return"sparkline_days"===this._config?.footer_row?.type}_scheduleDataFetch(){if(!this._config||!this.hass)return;const t=this._needsRecentValues(),e=this._needsDailyBuckets();if(!t&&!e)return;const i=t?this._config.footer_row?.x_values||7:0,s=`${this._config.entity}:r${t?i:0}:d${e?7:0}`,n=Date.now();(s!==this._lastFetchKey||n-this._lastFetchTime>3e5)&&(this._fetchInProgress||(this._lastFetchKey=s,this._lastFetchTime=n,this._fetchData()))}async _fetchData(){if(this.hass&&this._config){this._fetchInProgress=!0;try{this._needsDailyBuckets()&&(this._dailyBuckets=await vt(this.hass,this._config.entity,7)),this._needsRecentValues()&&(this._recentValues=await wt(this.hass,this._config.entity,this._config.footer_row?.x_values||7))}finally{this._fetchInProgress=!1}}}_handleClick(){if(!this._config)return;const t=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:this._config.entity}});this.dispatchEvent(t)}_isDualMode(){return"dual"===(this._config?.card_mode||"single")}_getEntity(){if(this.hass&&this._config)return this.hass.states[this._config.entity]}_getEntity2(){if(this.hass&&this._config?.entity_2)return this.hass.states[this._config.entity_2]}_getIcon(t){return this._config.icon?this._config.icon:t?.attributes.icon?t.attributes.icon:"mdi:chart-line"}_getAccentColor(){return this._config.accent_color||"#3b82f6"}_getTitle(t){return this._config.name?this._config.name:t?.attributes.friendly_name?t.attributes.friendly_name:this._config.entity}_isEntityUnavailable(t){const e=t.state;return"unavailable"===e||"unknown"===e}_isValueUnavailable(){const t=this._getEntity();if(!t||this._isEntityUnavailable(t))return!0;if(this._isDualMode()){const t=this._getEntity2();if(!t||this._isEntityUnavailable(t))return!0}return!1}_evaluateKudos(t,e){for(const i of e)if(t>=i.min&&(null==i.max||t<=i.max))return i;return null}_normalizeNumeric(t){const e=this._config.value_precision??0,i=parseFloat(t);return isNaN(i)?NaN:parseFloat(i.toFixed(e))}_isNumericState(t){const e=t.trim();return""!==e&&!isNaN(Number(e))}_formatValue(t){const e=this._normalizeNumeric(t);return isNaN(e)?this._formatNonNumeric(t):e.toFixed(this._config.value_precision??0)}_formatNonNumeric(t){const e=t.replace(/_/g," ").trim();return""===e?"–":e.replace(/\S+/g,t=>t===t.toUpperCase()?t:t.charAt(0).toUpperCase()+t.slice(1))}_renderValueRow(t){if(this._isDualMode())return this._renderDualValueRow(t);if(this._isEntityUnavailable(t))return L`<div class="value-row"><span class="value-suffix">–</span></div>`;const e=this._formatValue(t.state),i=this._isNumericState(t.state);if("score"===(this._config.display_style||"unit")&&i)return L`
        <div class="value-row">
          <span class="value">${e}</span>
          <span class="value-suffix score-max">/ ${this._config.score_max}</span>
        </div>
      `;if(!i)return L`
        <div class="value-row">
          <span class="value value-text">${e}</span>
        </div>
      `;const s=this._getUnit(t);return L`
      <div class="value-row">
        <span class="value">${e}</span>
        ${void 0!==s?L`<span class="value-suffix unit">${s}</span>`:K}
      </div>
    `}_getUnit(t){const e=t.attributes.unit_of_measurement;if("string"==typeof e&&""!==e.trim())return e}_renderDualValueRow(t){const e=this._getEntity2(),i=this._isEntityUnavailable(t),s=!e||this._isEntityUnavailable(e);if(i||s)return L`
        <div class="value-row">
          <span class="value-suffix">–</span>
          <span class="value-suffix dual-separator">/</span>
          <span class="value-suffix">–</span>
        </div>
      `;const n=this._formatValue(t.state),r=this._formatValue(e.state),o=this._isNumericState(t.state),a=this._isNumericState(e.state),l=o?this._getUnit(t):void 0,c=a?this._getUnit(e):void 0,h=void 0!==l&&void 0!==c&&l===c;return L`
      <div class="value-row">
        <span class="${o?"value value-dual":"value value-dual value-text"}">${n}</span>
        ${h||void 0===l?K:L`<span class="value-suffix unit">${l}</span>`}
        <span class="value-suffix dual-separator">/</span>
        <span class="${a?"value value-dual":"value value-dual value-text"}">${r}</span>
        ${h||void 0===c?K:L`<span class="value-suffix unit">${c}</span>`}
        ${h?L`<span class="value-suffix unit">${l}</span>`:K}
      </div>
    `}_renderSupportingRow(t){if(this._isValueUnavailable())return K;const e=this._config.supporting_row;if(!e||"none"===e.type)return K;if("kudos"===e.type&&e.kudos_rules){const i=this._normalizeNumeric(t.state);if(isNaN(i))return K;const s=this._evaluateKudos(i,e.kudos_rules);return s?this._renderKudos(s):K}return"delta"===e.type?this._renderDelta(t):K}_renderKudos(t){const e=!!t.icon,i=t.color||this._getAccentColor();return e&&t.color?L`<div class="supporting-row kudos" style="color: ${t.color};">
        <div class="kudos-badge" style="background: ${i}33; color: ${i};">
          <ha-icon .icon=${t.icon}></ha-icon>
        </div>
        <span>${t.label}</span>
      </div>`:e?L`<div class="supporting-row kudos">
        <div class="kudos-badge" style="background: ${i}33; color: ${i};">
          <ha-icon .icon=${t.icon}></ha-icon>
        </div>
        <span>${t.label}</span>
      </div>`:t.color?L`<div class="supporting-row" style="color: ${t.color};">${t.label}</div>`:L`<div class="supporting-row">${t.label}</div>`}_getDeltaValues(){const t=this._config?.footer_row?.type;return"sparkline_days"===t?this._dailyBuckets.filter(t=>null!=t):this._recentValues}_renderDelta(t){const e=this._getDeltaValues();if(e.length<2)return K;const i=e[0],s=e[e.length-1]-i,n=Math.abs(s),r=Math.round(10*n)/10,o="unit"===(this._config.display_style||"unit")&&t.attributes.unit_of_measurement||"",a=o?` ${o}`:"";let l;l=0===r?"mdi:minus":s>0?"mdi:arrow-up":"mdi:arrow-down";const c=0===r?"0":r%1==0?r.toString():r.toFixed(1),h=this._getAccentColor();return L`<div class="supporting-row delta">
      <div class="delta-badge" style="background: ${h}33; color: ${h};">
        <ha-icon .icon=${l}></ha-icon>
      </div>
      <span>${c}${a}</span>
    </div>`}_renderFooterRow(t,e){if(this._isValueUnavailable())return K;const i=this._config.footer_row;return i&&"none"!==i.type?"sparkline_days"===i.type?this._renderSparkline(this._dailyBuckets,e,!0):"sparkline_values"===i.type?this._renderSparkline(this._recentValues,e,!1):"progress_bar"===i.type?this._renderProgressBar(t,e):K:K}_renderSparkline(t,e,i){const s=[];for(let e=0;e<t.length;e++)null!=t[e]&&s.push({index:e,value:t[e]});if(s.length<2)return K;const n=Math.min(...s.map(t=>t.value)),r=Math.max(...s.map(t=>t.value)),o=r-n||1,a=t.length,l=a>1?276/(a-1):0,c=s.map(t=>({x:12+t.index*l,y:34-(t.value-n)/o*28})),h=c.map((t,e)=>`${0===e?"M":"L"}${t.x.toFixed(1)},${t.y.toFixed(1)}`).join(" "),d=c.map(t=>W`<circle cx="${t.x.toFixed(1)}" cy="${t.y.toFixed(1)}" r="${3.5}" fill="${e}" />`),u=i?56:40;let p=K;if(i){const t=new Date;p=Array.from({length:a},(i,s)=>{const n=new Date(t);n.setDate(n.getDate()-(a-1-s));const r=xt[n.getDay()],o=s===a-1;return W`
          <text
            x="${(12+s*l).toFixed(1)}"
            y="${54}"
            text-anchor="middle"
            font-size="9"
            font-weight="${o?"bold":"normal"}"
            fill="${o?e:"var(--secondary-text-color)"}"
            opacity="${o?1:.7}"
          >${r}</text>
        `})}return L`
      <div class="footer-row">
        <svg viewBox="0 0 ${300} ${u}" class="sparkline-svg">
          ${W`<path d="${h}" fill="none" stroke="${e}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`}
          ${d}
          ${p}
        </svg>
      </div>
    `}_renderProgressBar(t,e){const i=parseFloat(t.state);if(isNaN(i))return K;const s=this._config.score_max,n=Math.max(0,Math.min(100,i/s*100));return L`
      <div class="footer-row">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${n}%; background: ${e};"></div>
        </div>
      </div>
    `}render(){if(!this._config||!this.hass)return L``;const t=this._getEntity();if(!t)return L`
        <ha-card>
          <div class="content">
            <div class="not-found">Entity not found: ${this._config.entity}</div>
          </div>
        </ha-card>
      `;if(this._isDualMode()&&!this._getEntity2())return L`
        <ha-card>
          <div class="content">
            <div class="not-found">Entity not found: ${this._config.entity_2}</div>
          </div>
        </ha-card>
      `;const e=this._getAccentColor(),i=this._getIcon(t),s=this._getTitle(t);return L`
      <ha-card @click=${this._handleClick}>
        <div class="content">
          <div
            class="icon-badge"
            style="background: ${e}33; color: ${e};"
          >
            <ha-icon .icon=${i}></ha-icon>
          </div>
          <div class="text-block">
            <div class="title-row">${s}</div>
            ${this._renderValueRow(t)}
            ${this._renderSupportingRow(t)}
          </div>
        </div>
        ${this._renderFooterRow(t,e)}
      </ha-card>
    `}static get styles(){return o`
      :host {
        display: block;
      }
      ha-card {
        padding: 10px 15px;
        overflow: hidden;
        box-sizing: border-box;
        cursor: pointer;
      }
      .content {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 14px;
      }
      .icon-badge {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon-badge ha-icon {
        --mdc-icon-size: 20px;
      }
      .text-block {
        display: flex;
        flex-direction: column;
        min-width: 0;
      }
      .title-row {
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-text-color);
        line-height: 1.2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .value-row {
        display: flex;
        align-items: baseline;
        margin-top: 6px;
        white-space: nowrap;
      }
      .value {
        font-size: 32px;
        font-weight: 700;
        color: var(--primary-text-color);
        line-height: 1.15;
      }
      .value-suffix {
        font-size: 14px;
        font-weight: 400;
        color: var(--secondary-text-color);
        opacity: 0.7;
      }
      .score-max {
        margin-left: 6px;
      }
      .unit {
        margin-left: 6px;
      }
      .dual-separator {
        margin: 0 4px;
      }
      .value-dual {
        font-size: 28px;
      }
      .value-text {
        font-size: 24px;
        font-weight: 600;
      }
      .supporting-row {
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-top: 6px;
        line-height: 1.2;
      }
      .kudos {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .kudos-badge {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .kudos-badge ha-icon {
        --mdc-icon-size: 12px;
      }
      .delta {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .delta-badge {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .delta-badge ha-icon {
        --mdc-icon-size: 12px;
      }
      .footer-row {
        margin-top: 6px;
      }
      .sparkline-svg {
        display: block;
        width: 100%;
        height: auto;
      }
      .progress-bar {
        height: 4px;
        background: var(--divider-color, rgba(255, 255, 255, 0.12));
        border-radius: 2px;
        overflow: hidden;
      }
      .progress-fill {
        height: 100%;
        border-radius: 2px;
      }
      .not-found {
        font-size: 13px;
        color: var(--error-color, #ef4444);
        padding: 8px 0;
      }
      @media (min-width: 481px) and (max-width: 900px) {
        .value {
          font-size: 30px;
        }
        .value-text {
          font-size: 22px;
        }
        .value-dual {
          font-size: 26px;
        }
        .value-suffix {
          font-size: 13px;
        }
        .score-max,
        .unit {
          margin-left: 5px;
        }
        .dual-separator {
          margin: 0 3px;
        }
      }
      @media (max-width: 480px) {
        .value {
          font-size: 26px;
        }
        .value-text {
          font-size: 20px;
        }
        .value-dual {
          font-size: 24px;
        }
        .value-suffix {
          font-size: 12px;
        }
        .score-max,
        .unit {
          margin-left: 4px;
        }
        .dual-separator {
          margin: 0 2px;
        }
        .content {
          gap: 10px;
        }
        .icon-badge {
          width: 36px;
          height: 36px;
        }
        .icon-badge ha-icon {
          --mdc-icon-size: 18px;
        }
      }
    `}};t([pt({attribute:!1})],bt.prototype,"hass",void 0),t([ft()],bt.prototype,"_config",void 0),t([ft()],bt.prototype,"_dailyBuckets",void 0),t([ft()],bt.prototype,"_recentValues",void 0),bt=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})(_t)],bt);const At=window;At.customCards=At.customCards||[],At.customCards.push({type:_t,name:"PulseLine Card",description:"A compact metric and trend card with deltas, sparklines, and contextual insights."});export{bt as PulseLineCard};
