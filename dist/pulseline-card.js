function t(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,_=globalThis,f=_.trustedTypes,g=f?f.emptyScript:"",y=_.reactiveElementPolyfillSupport,m=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},$=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);r?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:v).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=i;const n=r.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const n=this.constructor;if(!1===i&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??$)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[m("elementProperties")]=new Map,b[m("finalized")]=new Map,y?.({ReactiveElement:b}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,A=t=>t,E=x.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,U=`<${P}>`,M=document,O=()=>M.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,T="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,H=/>/g,z=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,V=/"/g,F=/^(?:script|style|textarea|title)$/i,B=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),L=B(1),q=B(2),W=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),J=new WeakMap,Z=M.createTreeWalker(M,129);function G(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Q=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=R;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,h=0;for(;h<s.length&&(o.lastIndex=h,l=o.exec(s),null!==l);)h=o.lastIndex,o===R?"!--"===l[1]?o=I:void 0!==l[1]?o=H:void 0!==l[2]?(F.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=z):void 0!==l[3]&&(o=z):o===z?">"===l[0]?(o=r??R,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?z:'"'===l[3]?V:j):o===V||o===j?o=z:o===I||o===H?o=R:(o=z,r=void 0);const d=o===z&&t[e+1].startsWith("/>")?" ":"";n+=o===R?s+U:c>=0?(i.push(a),s.slice(0,c)+k+s.slice(c)+C+d):s+C+(-2===c?e:d)}return[G(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class X{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,c]=Q(t,e);if(this.el=X.createElement(l,s),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Z.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(k)){const e=c[n++],s=i.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?it:"?"===o[1]?rt:"@"===o[1]?nt:st}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(F.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),Z.nextNode(),a.push({type:2,index:++r});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){if(e===W)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=D(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=Y(t,r._$AS(t,e.values),r,i)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);Z.currentNode=i;let r=Z.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new et(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new ot(r,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(r=Z.nextNode(),n++)}return Z.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),D(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=X.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new tt(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new X(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new et(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=K}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=Y(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Y(this,i[s+o],e,o),a===W&&(a=this._$AH[o]),n||=!D(a)||a!==this._$AH[o],a===K?t=K:t!==K&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class rt extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class nt extends st{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??K)===W)return;const s=this._$AH,i=t===K&&s!==K||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==K&&(s===K||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const at=x.litHtmlPolyfillSupport;at?.(X,et),(x.litHtmlVersions??=[]).push("3.3.2");const lt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ct extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new et(e.insertBefore(O(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ct._$litElement$=!0,ct.finalized=!0,lt.litElementHydrateSupport?.({LitElement:ct});const ht=lt.litElementPolyfillSupport;ht?.({LitElement:ct}),(lt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:$},ut=(t=dt,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return(e,s)=>"object"==typeof s?ut(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t(t){return pt({...t,state:!0,attribute:!1})}const ft="pulseline-card";function gt(t){const e=[];for(const s of t){const t=s.s??s.state;if(!t)continue;const i=parseFloat(t);if(isNaN(i))continue;let r;if(null!=s.lu)r=1e3*s.lu;else{if(!s.last_updated)continue;r=new Date(s.last_updated).getTime()}e.push({value:i,timestamp:r})}return e}function yt(t){if(0===t.length)return[];const e=[t[0]];let s=Math.round(100*t[0]);for(let i=1;i<t.length;i++){const r=Math.round(100*t[i]);r!==s&&(e.push(t[i]),s=r)}return e}async function mt(t,e,s){const i=new Date,r=new Date(i);r.setDate(r.getDate()-(s-1)),r.setHours(0,0,0,0);try{const i=(await t.callWS({type:"recorder/statistics_during_period",statistic_ids:[e],period:"day",start_time:r.toISOString(),types:["mean"]}))[e];if(i&&i.length>0){const t=new Array(s).fill(null);for(const e of i){if(null==e.mean)continue;const i=new Date(e.start).getTime()-r.getTime(),n=Math.floor(i/864e5);n>=0&&n<s&&(t[n]=e.mean)}return t}}catch{}return async function(t,e,s,i){try{const r=gt((await t.callWS({type:"history/history_during_period",start_time:i.toISOString(),entity_ids:[e],minimal_response:!0,no_attributes:!0,significant_changes_only:!1}))[e]||[]),n=new Array(s).fill(null),o=new Array(s).fill(0),a=new Array(s).fill(0);for(const t of r){const e=t.timestamp-i.getTime(),r=Math.floor(e/864e5);r>=0&&r<s&&(o[r]+=t.value,a[r]++)}for(let t=0;t<s;t++)a[t]>0&&(n[t]=o[t]/a[t]);return n}catch{return new Array(s).fill(null)}}(t,e,s,r)}const vt=[30,90,365];async function $t(t,e,s){const i=new Date;i.setDate(i.getDate()-s);return gt((await t.callWS({type:"history/history_during_period",start_time:i.toISOString(),entity_ids:[e],minimal_response:!0,no_attributes:!0,significant_changes_only:!1}))[e]||[]).map(t=>t.value)}async function wt(t,e,s){let i=[];for(const r of vt)try{const n=yt(await $t(t,e,r));if(n.length>i.length&&(i=n),i.length>=s)return i.slice(-s)}catch{continue}try{const s=await async function(t,e,s){const i=new Date;return i.setDate(i.getDate()-s),((await t.callWS({type:"recorder/statistics_during_period",statistic_ids:[e],period:"day",start_time:i.toISOString(),types:["mean"]}))[e]||[]).filter(t=>null!=t.mean).map(t=>t.mean)}(t,e,365),r=yt(s);r.length>i.length&&(i=r)}catch{}return i.slice(-s)}console.info(`%c  ${ft.toUpperCase()}  %c  v0.3.0-dev.1  `,"color: white; background: #3b82f6; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;","color: #3b82f6; background: #e0e7ff; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;");const bt=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];let xt=class extends ct{constructor(){super(...arguments),this._dailyBuckets=[],this._recentValues=[],this._lastFetchKey="",this._lastFetchTime=0,this._fetchInProgress=!1}static getStubConfig(){return{entity:"sensor.temperature"}}setConfig(t){if(!t||"object"!=typeof t)throw new Error("Invalid configuration: config must be an object");if(!t.entity||"string"!=typeof t.entity)throw new Error("Invalid configuration: 'entity' is required");const e=t.card_mode||"single";if("single"!==e&&"dual"!==e)throw new Error("Invalid configuration: 'card_mode' must be 'single' or 'dual'");if("dual"===e){if(!t.entity_2||"string"!=typeof t.entity_2)throw new Error("Invalid configuration: 'entity_2' is required when card_mode is 'dual'");if("score"===t.display_style)throw new Error("Invalid configuration: display_style 'score' is not supported in dual mode");if(t.footer_row&&"none"!==t.footer_row.type)throw new Error("Invalid configuration: footer_row is not supported in dual mode");if(t.supporting_row&&"delta"===t.supporting_row.type)throw new Error("Invalid configuration: supporting_row 'delta' is not supported in dual mode")}if(t.display_style&&"unit"!==t.display_style&&"score"!==t.display_style)throw new Error("Invalid configuration: 'display_style' must be 'unit' or 'score'");if("score"===t.display_style&&(null==t.score_max||"number"!=typeof t.score_max))throw new Error("Invalid configuration: 'score_max' is required when display_style is 'score'");if(null!=t.value_precision&&("number"!=typeof t.value_precision||t.value_precision<0))throw new Error("Invalid configuration: 'value_precision' must be a non-negative number");if(t.supporting_row){const e=t.supporting_row.type;if("none"!==e&&"kudos"!==e&&"delta"!==e)throw new Error("Invalid configuration: supporting_row.type must be 'none', 'kudos', or 'delta'");if("kudos"===e){if(!Array.isArray(t.supporting_row.kudos_rules)||0===t.supporting_row.kudos_rules.length)throw new Error("Invalid configuration: 'kudos_rules' must be a non-empty array when type is 'kudos'");for(const e of t.supporting_row.kudos_rules){if("number"!=typeof e.min||"string"!=typeof e.label)throw new Error("Invalid configuration: each kudos rule must have 'min' (number) and 'label' (string)");if(null!=e.max&&"number"!=typeof e.max)throw new Error("Invalid configuration: kudos rule 'max' must be a number if provided")}}if("delta"===e&&(!t.footer_row||"recent_values_sparkline"!==t.footer_row.type))throw new Error("Invalid configuration: supporting_row 'delta' requires footer_row type 'recent_values_sparkline'")}if(t.footer_row){const e=t.footer_row.type;if("none"!==e&&"recent_days_sparkline"!==e&&"recent_values_sparkline"!==e&&"progress_bar"!==e)throw new Error("Invalid configuration: footer_row.type must be 'none', 'recent_days_sparkline', 'recent_values_sparkline', or 'progress_bar'");if("recent_values_sparkline"===e&&null!=t.footer_row.x_values&&("number"!=typeof t.footer_row.x_values||t.footer_row.x_values<2||t.footer_row.x_values>14))throw new Error("Invalid configuration: x_values must be a number between 2 and 14");if("progress_bar"===e&&"score"!==t.display_style)throw new Error("Invalid configuration: progress_bar footer requires display_style 'score'")}this._config=t}_computeRowSize(){const t=this._config?.footer_row?.type??"none";return"recent_days_sparkline"===t||"recent_values_sparkline"===t?3:2}getCardSize(){return this._computeRowSize()}getGridOptions(){return{columns:6,rows:this._computeRowSize(),min_columns:3,min_rows:1}}updated(t){super.updated(t),(t.has("hass")||t.has("_config"))&&this._scheduleDataFetch()}_scheduleDataFetch(){if(!this._config||!this.hass)return;const t=this._config.footer_row;if(!t||"none"===t.type||"progress_bar"===t.type)return;const e="recent_values_sparkline"===t.type&&t.x_values||7,s=`${this._config.entity}:${t.type}:${e}`,i=Date.now();(s!==this._lastFetchKey||i-this._lastFetchTime>3e5)&&(this._fetchInProgress||(this._lastFetchKey=s,this._lastFetchTime=i,this._fetchData()))}async _fetchData(){if(this.hass&&this._config?.footer_row){this._fetchInProgress=!0;try{const t=this._config.footer_row;"recent_days_sparkline"===t.type?this._dailyBuckets=await mt(this.hass,this._config.entity,7):"recent_values_sparkline"===t.type&&(this._recentValues=await wt(this.hass,this._config.entity,t.x_values||7))}finally{this._fetchInProgress=!1}}}_handleClick(){if(!this._config)return;const t=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:this._config.entity}});this.dispatchEvent(t)}_isDualMode(){return"dual"===(this._config?.card_mode||"single")}_getEntity(){if(this.hass&&this._config)return this.hass.states[this._config.entity]}_getEntity2(){if(this.hass&&this._config?.entity_2)return this.hass.states[this._config.entity_2]}_getIcon(t){return this._config.icon?this._config.icon:t?.attributes.icon?t.attributes.icon:"mdi:chart-line"}_getAccentColor(){return this._config.accent_color||"#3b82f6"}_getTitle(t){return this._config.name?this._config.name:t?.attributes.friendly_name?t.attributes.friendly_name:this._config.entity}_isEntityUnavailable(t){const e=t.state;return"unavailable"===e||"unknown"===e}_isValueUnavailable(){const t=this._getEntity();if(!t||this._isEntityUnavailable(t))return!0;if(this._isDualMode()){const t=this._getEntity2();if(!t||this._isEntityUnavailable(t))return!0}return!1}_evaluateKudos(t,e){for(const s of e)if(t>=s.min&&(null==s.max||t<=s.max))return s.label;return null}_normalizeNumeric(t){const e=this._config.value_precision??0,s=parseFloat(t);return isNaN(s)?NaN:parseFloat(s.toFixed(e))}_formatValue(t){const e=this._normalizeNumeric(t);return isNaN(e)?t:e.toFixed(this._config.value_precision??0)}_renderValueRow(t){if(this._isDualMode())return this._renderDualValueRow(t);if(this._isEntityUnavailable(t))return L`<div class="value-row"><span class="value-suffix">–</span></div>`;const e=this._formatValue(t.state);if("score"===(this._config.display_style||"unit"))return L`
        <div class="value-row">
          <span class="value">${e}</span>
          <span class="value-suffix score-max">/ ${this._config.score_max}</span>
        </div>
      `;const s=t.attributes.unit_of_measurement;return L`
      <div class="value-row">
        <span class="value">${e}</span>
        ${s?L`<span class="value-suffix unit">${s}</span>`:K}
      </div>
    `}_renderDualValueRow(t){const e=this._getEntity2(),s=this._isEntityUnavailable(t),i=!e||this._isEntityUnavailable(e);if(s||i)return L`
        <div class="value-row">
          <span class="value-suffix">–</span>
          <span class="value-suffix dual-separator">/</span>
          <span class="value-suffix">–</span>
        </div>
      `;const r=this._formatValue(t.state),n=this._formatValue(e.state),o=t.attributes.unit_of_measurement;return L`
      <div class="value-row">
        <span class="value value-dual">${r}</span>
        <span class="value-suffix dual-separator">/</span>
        <span class="value value-dual">${n}</span>
        ${o?L`<span class="value-suffix unit">${o}</span>`:K}
      </div>
    `}_renderSupportingRow(t){if(this._isValueUnavailable())return K;const e=this._config.supporting_row;if(!e||"none"===e.type)return K;if("kudos"===e.type&&e.kudos_rules){const s=this._normalizeNumeric(t.state);if(isNaN(s))return K;const i=this._evaluateKudos(s,e.kudos_rules);return i?L`<div class="supporting-row">${i}</div>`:K}return"delta"===e.type?this._renderDelta(t):K}_renderDelta(t){if(this._recentValues.length<2)return K;const e=this._recentValues[0],s=this._recentValues[this._recentValues.length-1]-e,i=Math.abs(s),r=Math.round(10*i)/10,n="unit"===(this._config.display_style||"unit")&&t.attributes.unit_of_measurement||"",o=n?` ${n}`:"";let a;a=0===r?"mdi:minus":s>0?"mdi:arrow-up":"mdi:arrow-down";const l=0===r?"0":r%1==0?r.toString():r.toFixed(1),c=this._getAccentColor();return L`<div class="supporting-row delta">
      <div class="delta-badge" style="background: ${c}33; color: ${c};">
        <ha-icon .icon=${a}></ha-icon>
      </div>
      <span>${l}${o}</span>
    </div>`}_renderFooterRow(t,e){if(this._isValueUnavailable())return K;const s=this._config.footer_row;return s&&"none"!==s.type?"recent_days_sparkline"===s.type?this._renderSparkline(this._dailyBuckets,e,!0):"recent_values_sparkline"===s.type?this._renderSparkline(this._recentValues,e,!1):"progress_bar"===s.type?this._renderProgressBar(t,e):K:K}_renderSparkline(t,e,s){const i=[];for(let e=0;e<t.length;e++)null!=t[e]&&i.push({index:e,value:t[e]});if(i.length<2)return K;const r=Math.min(...i.map(t=>t.value)),n=Math.max(...i.map(t=>t.value)),o=n-r||1,a=t.length,l=a>1?276/(a-1):0,c=i.map(t=>({x:12+t.index*l,y:34-(t.value-r)/o*28})),h=c.map((t,e)=>`${0===e?"M":"L"}${t.x.toFixed(1)},${t.y.toFixed(1)}`).join(" "),d=c.map(t=>q`<circle cx="${t.x.toFixed(1)}" cy="${t.y.toFixed(1)}" r="${3.5}" fill="${e}" />`),u=s?56:40;let p=K;if(s){const t=new Date;p=Array.from({length:a},(s,i)=>{const r=new Date(t);r.setDate(r.getDate()-(a-1-i));const n=bt[r.getDay()],o=i===a-1;return q`
          <text
            x="${(12+i*l).toFixed(1)}"
            y="${54}"
            text-anchor="middle"
            font-size="9"
            font-weight="${o?"bold":"normal"}"
            fill="${o?e:"var(--secondary-text-color)"}"
            opacity="${o?1:.7}"
          >${n}</text>
        `})}return L`
      <div class="footer-row">
        <svg viewBox="0 0 ${300} ${u}" class="sparkline-svg">
          ${q`<path d="${h}" fill="none" stroke="${e}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`}
          ${d}
          ${p}
        </svg>
      </div>
    `}_renderProgressBar(t,e){const s=parseFloat(t.state);if(isNaN(s))return K;const i=this._config.score_max,r=Math.max(0,Math.min(100,s/i*100));return L`
      <div class="footer-row">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${r}%; background: ${e};"></div>
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
      `;const e=this._getAccentColor(),s=this._getIcon(t),i=this._getTitle(t);return L`
      <ha-card @click=${this._handleClick}>
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
      @media (max-width: 480px) {
        .value {
          font-size: 26px;
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
    `}};t([pt({attribute:!1})],xt.prototype,"hass",void 0),t([_t()],xt.prototype,"_config",void 0),t([_t()],xt.prototype,"_dailyBuckets",void 0),t([_t()],xt.prototype,"_recentValues",void 0),xt=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})(ft)],xt);const At=window;At.customCards=At.customCards||[],At.customCards.push({type:ft,name:"PulseLine Card",description:"A compact metric + trend card for Home Assistant"});export{xt as PulseLineCard};
