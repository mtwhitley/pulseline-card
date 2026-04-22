function t(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new o(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,f=_.trustedTypes,g=f?f.emptyScript:"",y=_.reactiveElementPolyfillSupport,$=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:m).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=i;const o=r.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const o=this.constructor;if(!1===i&&(r=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??v)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[$("elementProperties")]=new Map,b[$("finalized")]=new Map,y?.({ReactiveElement:b}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,x=t=>t,E=A.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,O=`<${P}>`,M=document,T=()=>M.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,R="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,I=/>/g,z=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,F=/"/g,B=/^(?:script|style|textarea|title)$/i,L=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),V=L(1),q=L(2),W=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),J=new WeakMap,Z=M.createTreeWalker(M,129);function G(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Q=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=N;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,h=0;for(;h<s.length&&(n.lastIndex=h,l=n.exec(s),null!==l);)h=n.lastIndex,n===N?"!--"===l[1]?n=H:void 0!==l[1]?n=I:void 0!==l[2]?(B.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=z):void 0!==l[3]&&(n=z):n===z?">"===l[0]?(n=r??N,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?z:'"'===l[3]?F:j):n===F||n===j?n=z:n===H||n===I?n=N:(n=z,r=void 0);const d=n===z&&t[e+1].startsWith("/>")?" ":"";o+=n===N?s+O:c>=0?(i.push(a),s.slice(0,c)+k+s.slice(c)+C+d):s+C+(-2===c?e:d)}return[G(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class X{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,c]=Q(t,e);if(this.el=X.createElement(l,s),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Z.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(k)){const e=c[o++],s=i.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?it:"?"===n[1]?rt:"@"===n[1]?ot:st}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),Z.nextNode(),a.push({type:2,index:++r});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){if(e===W)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=U(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=Y(t,r._$AS(t,e.values),r,i)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);Z.currentNode=i;let r=Z.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new et(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new nt(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=Z.nextNode(),o++)}return Z.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),U(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=X.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new tt(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new X(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new et(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=K}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=Y(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Y(this,i[s+n],e,n),a===W&&(a=this._$AH[n]),o||=!U(a)||a!==this._$AH[n],a===K?t=K:t!==K&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class rt extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class ot extends st{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??K)===W)return;const s=this._$AH,i=t===K&&s!==K||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==K&&(s===K||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const at=A.litHtmlPolyfillSupport;at?.(X,et),(A.litHtmlVersions??=[]).push("3.3.2");const lt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ct extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new et(e.insertBefore(T(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ct._$litElement$=!0,ct.finalized=!0,lt.litElementHydrateSupport?.({LitElement:ct});const ht=lt.litElementPolyfillSupport;ht?.({LitElement:ct}),(lt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:v},pt=(t=dt,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return(e,s)=>"object"==typeof s?pt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t(t){return ut({...t,state:!0,attribute:!1})}const ft="pulseline-card";function gt(t){const e=[];for(const s of t){const t=s.s??s.state;if(!t)continue;const i=parseFloat(t);if(isNaN(i))continue;let r;if(null!=s.lu)r=1e3*s.lu;else{if(!s.last_updated)continue;r=new Date(s.last_updated).getTime()}e.push({value:i,timestamp:r})}return e}async function yt(t,e,s){const i=new Date,r=new Date(i);r.setDate(r.getDate()-(s-1)),r.setHours(0,0,0,0);try{const i=(await t.callWS({type:"recorder/statistics_during_period",statistic_ids:[e],period:"day",start_time:r.toISOString(),types:["mean"]}))[e];if(i&&i.length>0){const t=new Array(s).fill(null);for(const e of i){if(null==e.mean)continue;const i=new Date(e.start).getTime()-r.getTime(),o=Math.floor(i/864e5);o>=0&&o<s&&(t[o]=e.mean)}return t}}catch{}return async function(t,e,s,i){try{const r=gt((await t.callWS({type:"history/history_during_period",start_time:i.toISOString(),entity_ids:[e],minimal_response:!0,no_attributes:!0,significant_changes_only:!1}))[e]||[]),o=new Array(s).fill(null),n=new Array(s).fill(0),a=new Array(s).fill(0);for(const t of r){const e=t.timestamp-i.getTime(),r=Math.floor(e/864e5);r>=0&&r<s&&(n[r]+=t.value,a[r]++)}for(let t=0;t<s;t++)a[t]>0&&(o[t]=n[t]/a[t]);return o}catch{return new Array(s).fill(null)}}(t,e,s,r)}console.info(`%c  ${ft.toUpperCase()}  %c  v0.2.0-dev.1  `,"color: white; background: #3b82f6; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;","color: #3b82f6; background: #e0e7ff; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;");const $t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];let mt=class extends ct{constructor(){super(...arguments),this._dailyBuckets=[],this._recentValues=[],this._lastFetchKey="",this._lastFetchTime=0,this._fetchInProgress=!1}static getStubConfig(){return{entity:"sensor.temperature"}}setConfig(t){if(!t||"object"!=typeof t)throw new Error("Invalid configuration: config must be an object");if(!t.entity||"string"!=typeof t.entity)throw new Error("Invalid configuration: 'entity' is required");if(t.display_style&&"unit"!==t.display_style&&"score"!==t.display_style)throw new Error("Invalid configuration: 'display_style' must be 'unit' or 'score'");if("score"===t.display_style&&(null==t.score_max||"number"!=typeof t.score_max))throw new Error("Invalid configuration: 'score_max' is required when display_style is 'score'");if(t.supporting_row){const e=t.supporting_row.type;if("none"!==e&&"kudos"!==e&&"delta"!==e)throw new Error("Invalid configuration: supporting_row.type must be 'none', 'kudos', or 'delta'");if("kudos"===e){if(!Array.isArray(t.supporting_row.kudos_rules)||0===t.supporting_row.kudos_rules.length)throw new Error("Invalid configuration: 'kudos_rules' must be a non-empty array when type is 'kudos'");for(const e of t.supporting_row.kudos_rules){if("number"!=typeof e.min||"string"!=typeof e.label)throw new Error("Invalid configuration: each kudos rule must have 'min' (number) and 'label' (string)");if(null!=e.max&&"number"!=typeof e.max)throw new Error("Invalid configuration: kudos rule 'max' must be a number if provided")}}if("delta"===e&&(!t.footer_row||"recent_values_sparkline"!==t.footer_row.type))throw new Error("Invalid configuration: supporting_row 'delta' requires footer_row type 'recent_values_sparkline'")}if(t.footer_row){const e=t.footer_row.type;if("none"!==e&&"recent_days_sparkline"!==e&&"recent_values_sparkline"!==e&&"progress_bar"!==e)throw new Error("Invalid configuration: footer_row.type must be 'none', 'recent_days_sparkline', 'recent_values_sparkline', or 'progress_bar'");if("recent_values_sparkline"===e&&null!=t.footer_row.x_values&&("number"!=typeof t.footer_row.x_values||t.footer_row.x_values<2||t.footer_row.x_values>14))throw new Error("Invalid configuration: x_values must be a number between 2 and 14");if("progress_bar"===e&&"score"!==t.display_style)throw new Error("Invalid configuration: progress_bar footer requires display_style 'score'")}this._config=t}getCardSize(){return this._config?.footer_row&&"none"!==this._config.footer_row.type?3:2}getGridOptions(){return{columns:6,rows:this._config?.footer_row&&"none"!==this._config.footer_row.type?3:2,min_columns:3,min_rows:1}}updated(t){super.updated(t),(t.has("hass")||t.has("_config"))&&this._scheduleDataFetch()}_scheduleDataFetch(){if(!this._config||!this.hass)return;const t=this._config.footer_row;if(!t||"none"===t.type||"progress_bar"===t.type)return;const e="recent_values_sparkline"===t.type&&t.x_values||7,s=`${this._config.entity}:${t.type}:${e}`,i=Date.now();(s!==this._lastFetchKey||i-this._lastFetchTime>3e5)&&(this._fetchInProgress||(this._lastFetchKey=s,this._lastFetchTime=i,this._fetchData()))}async _fetchData(){if(this.hass&&this._config?.footer_row){this._fetchInProgress=!0;try{const t=this._config.footer_row;"recent_days_sparkline"===t.type?this._dailyBuckets=await yt(this.hass,this._config.entity,7):"recent_values_sparkline"===t.type&&(this._recentValues=await async function(t,e,s){const i=new Date;i.setDate(i.getDate()-30);try{return gt((await t.callWS({type:"history/history_during_period",start_time:i.toISOString(),entity_ids:[e],minimal_response:!0,no_attributes:!0,significant_changes_only:!1}))[e]||[]).map(t=>t.value).slice(-s)}catch{return[]}}(this.hass,this._config.entity,t.x_values||7))}finally{this._fetchInProgress=!1}}}_getEntity(){if(this.hass&&this._config)return this.hass.states[this._config.entity]}_getIcon(t){return this._config.icon?this._config.icon:t?.attributes.icon?t.attributes.icon:"mdi:chart-line"}_getAccentColor(){return this._config.accent_color||"#3b82f6"}_getTitle(t){return this._config.name?this._config.name:t?.attributes.friendly_name?t.attributes.friendly_name:this._config.entity}_evaluateKudos(t,e){for(const s of e)if(t>=s.min&&(null==s.max||t<=s.max))return s.label;return null}_renderValueRow(t){const e=t.state;if("score"===(this._config.display_style||"unit"))return V`
        <div class="value-row">
          <span class="value">${e}</span>
          <span class="score-max">/ ${this._config.score_max}</span>
        </div>
      `;const s=t.attributes.unit_of_measurement;return V`
      <div class="value-row">
        <span class="value">${e}</span>
        ${s?V`<span class="unit">${s}</span>`:K}
      </div>
    `}_renderSupportingRow(t){const e=this._config.supporting_row;if(!e||"none"===e.type)return K;if("kudos"===e.type&&e.kudos_rules){const s=parseFloat(t.state);if(isNaN(s))return K;const i=this._evaluateKudos(s,e.kudos_rules);return i?V`<div class="supporting-row">${i}</div>`:K}return"delta"===e.type?this._renderDelta(t):K}_renderDelta(t){if(this._recentValues.length<2)return K;const e=this._recentValues[0],s=this._recentValues[this._recentValues.length-1]-e,i=Math.abs(s),r=Math.round(10*i)/10,o="unit"===(this._config.display_style||"unit")&&t.attributes.unit_of_measurement||"",n=o?` ${o}`:"";if(0===r)return V`<div class="supporting-row delta">
        <span class="delta-arrow">–</span>
        <span>0${n}</span>
      </div>`;const a=s>0?"▴":"▾",l=r%1==0?r.toString():r.toFixed(1);return V`<div class="supporting-row delta">
      <span class="delta-arrow">${a}</span>
      <span>${l}${n}</span>
    </div>`}_renderFooterRow(t,e){const s=this._config.footer_row;return s&&"none"!==s.type?"recent_days_sparkline"===s.type?this._renderSparkline(this._dailyBuckets,e,!0):"recent_values_sparkline"===s.type?this._renderSparkline(this._recentValues,e,!1):"progress_bar"===s.type?this._renderProgressBar(t,e):K:K}_renderSparkline(t,e,s){const i=[];for(let e=0;e<t.length;e++)null!=t[e]&&i.push({index:e,value:t[e]});if(i.length<2)return K;const r=Math.min(...i.map(t=>t.value)),o=Math.max(...i.map(t=>t.value)),n=o-r||1,a=t.length,l=a>1?276/(a-1):0,c=i.map(t=>({x:12+t.index*l,y:34-(t.value-r)/n*28})),h=c.map((t,e)=>`${0===e?"M":"L"}${t.x.toFixed(1)},${t.y.toFixed(1)}`).join(" "),d=c.map(t=>q`<circle cx="${t.x.toFixed(1)}" cy="${t.y.toFixed(1)}" r="${3.5}" fill="${e}" />`),p=s?56:40;let u=K;if(s){const t=new Date;u=Array.from({length:a},(s,i)=>{const r=new Date(t);r.setDate(r.getDate()-(a-1-i));const o=$t[r.getDay()],n=i===a-1;return q`
          <text
            x="${(12+i*l).toFixed(1)}"
            y="${54}"
            text-anchor="middle"
            font-size="9"
            font-weight="${n?"bold":"normal"}"
            fill="${n?e:"var(--secondary-text-color)"}"
            opacity="${n?1:.7}"
          >${o}</text>
        `})}return V`
      <div class="footer-row">
        <svg viewBox="0 0 ${300} ${p}" class="sparkline-svg">
          ${q`<path d="${h}" fill="none" stroke="${e}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`}
          ${d}
          ${u}
        </svg>
      </div>
    `}_renderProgressBar(t,e){const s=parseFloat(t.state);if(isNaN(s))return K;const i=this._config.score_max,r=Math.max(0,Math.min(100,s/i*100));return V`
      <div class="footer-row">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${r}%; background: ${e};"></div>
        </div>
      </div>
    `}render(){if(!this._config||!this.hass)return V``;const t=this._getEntity();if(!t)return V`
        <ha-card>
          <div class="content">
            <div class="not-found">Entity not found: ${this._config.entity}</div>
          </div>
        </ha-card>
      `;const e=this._getAccentColor(),s=this._getIcon(t),i=this._getTitle(t);return V`
      <ha-card>
        <div class="content">
          <div
            class="icon-badge"
            style="background: ${e}33; color: ${e};"
          >
            <ha-icon .icon=${s}></ha-icon>
          </div>
          <div class="text-block">
            <div class="title-row">${i}</div>
            ${this._renderValueRow(t)}
            ${this._renderSupportingRow(t)}
          </div>
        </div>
        ${this._renderFooterRow(t,e)}
      </ha-card>
    `}static get styles(){return n`
      :host {
        display: block;
      }
      ha-card {
        padding: 6px 10px;
        overflow: hidden;
        box-sizing: border-box;
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
      }
      .value {
        font-size: 32px;
        font-weight: 700;
        color: var(--primary-text-color);
        line-height: 1.15;
      }
      .unit {
        font-size: 14px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-left: 5px;
      }
      .score-max {
        font-size: 14px;
        font-weight: 400;
        color: var(--secondary-text-color);
        margin-left: 6px;
        opacity: 0.7;
      }
      .supporting-row {
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-top: 6px;
        line-height: 1.2;
      }
      .delta {
        display: flex;
        align-items: center;
        gap: 3px;
      }
      .delta-arrow {
        font-size: 10px;
        line-height: 1;
      }
      .footer-row {
        margin-top: 8px;
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
    `}};t([ut({attribute:!1})],mt.prototype,"hass",void 0),t([_t()],mt.prototype,"_config",void 0),t([_t()],mt.prototype,"_dailyBuckets",void 0),t([_t()],mt.prototype,"_recentValues",void 0),mt=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})(ft)],mt);const vt=window;vt.customCards=vt.customCards||[],vt.customCards.push({type:ft,name:"PulseLine Card",description:"A compact metric + trend card for Home Assistant"});export{mt as PulseLineCard};
