"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6537],{9007:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=s(5723),r=s(3327),n=s(3677);const o={title:"Fade"},l=void 0,a={id:"effects/fade",title:"Fade",description:"",source:"@site/docs/effects/02-fade.md",sourceDirName:"effects",slug:"/effects/fade",permalink:"/slider/docs/effects/fade",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Fade"},sidebar:"docsSidebar",previous:{title:"Carousel",permalink:"/slider/docs/effects/carousel"},next:{title:"Cube",permalink:"/slider/docs/effects/cube"}},d={},c=[];function h(e){return(0,i.jsx)(n.zW,{showOptions:!0})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h()}},3677:(e,t,s)=>{s.d(t,{FN:()=>f,I1:()=>v,zW:()=>w,FA:()=>g});var i=s(9348),r=s(2155);const n={container:"container_NLor",fields:"fields_g1uo",field:"field_JJFJ"};var o=s(5723);function l(e){let{controls:t=[]}=e;const s=(0,r.useId)(),{options:i,setOption:l}=d();return(0,o.jsx)("div",{className:n.container,children:(0,o.jsxs)("div",{className:n.fields,children:[(0,o.jsxs)("div",{className:n.field,children:[(0,o.jsx)("label",{htmlFor:`speed-${s}`,children:"speed"}),(0,o.jsx)("input",{id:`speed-${s}`,size:4,type:"number",value:i.speed,onChange:e=>l("speed",e.target.value)})]}),(0,o.jsxs)("div",{className:n.field,children:[(0,o.jsx)("label",{htmlFor:`'timeout-${s}'`,children:"timeout"}),(0,o.jsx)("input",{id:`timeout-${s}`,size:4,type:"number",value:i.timeout,onChange:e=>l("timeout",e.target.value)})]}),(0,o.jsxs)("div",{className:n.field,children:[(0,o.jsx)("label",{htmlFor:`pause-on-hover-${s}`,children:"pauseOnHover"}),(0,o.jsx)("input",{id:`pause-on-hover-${s}`,type:"checkbox",checked:i.pauseOnHover,onChange:e=>l("pauseOnHover",e.target.checked)})]}),(0,o.jsxs)("div",{className:n.field,children:[(0,o.jsx)("label",{htmlFor:`loop-${s}`,children:"loop"}),(0,o.jsx)("input",{id:`loop-${s}`,type:"checkbox",checked:i.loop,onChange:e=>l("loop",e.target.checked)})]}),(0,o.jsxs)("div",{className:n.field,children:[(0,o.jsx)("label",{htmlFor:`swipe-${s}`,children:"swipe"}),(0,o.jsx)("input",{id:`swipe-${s}`,type:"checkbox",checked:i.swipe,onChange:e=>l("swipe",e.target.checked)})]}),(0,o.jsxs)("div",{className:n.field,children:[(0,o.jsx)("label",{htmlFor:`swipe-tolerance-${s}`,children:"swipeTolerance"}),(0,o.jsx)("input",{id:`swipe-tolerance-${s}`,size:4,type:"number",value:i.swipeTolerance,onChange:e=>l("swipeTolerance",e.target.value)})]}),t.map((e=>{let{label:t,type:r,optionKey:a,values:d}=e;return(0,o.jsx)("div",{className:n.field,children:"radio"===r?(0,o.jsxs)("fieldset",{children:[(0,o.jsx)("legend",{children:t}),d?.map((e=>(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:r,value:e,checked:i[a]===e,onChange:t=>t.target.checked&&l(a,e)}),e]},e)))]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("label",{htmlFor:`${a}-${s}`,children:t}),(0,o.jsx)("input",{id:`${a}-${s}`,type:r,value:i[a],checked:!0===i[a],onChange:e=>l(a,"checkbox"===r?e.target.checked:e.target.value)})]})},t)}))]})})}const a=(0,r.createContext)({options:{},setOption:()=>{}});function d(){return(0,r.useContext)(a)}const c={controls:"controls_sqVm",viewport:"viewport_ywrr",slider:"slider_K2Xb",slide:"slide_W3F6",slideImage:"slideImage_TYtL",optionsContainer:"optionsContainer_W_Ak"};function h(e){let{children:t,showOptions:s,effectControls:n}=e;const[d,h]=(0,r.useState)({autoScroll:!0,loop:!0,speed:"800",swipe:!0,swipeTolerance:30,timeout:5e3,pauseOnHover:!0,...n.reduce(((e,t)=>({...e,[t.optionKey]:t.defaultValue})),{})});return(0,o.jsxs)(a.Provider,{value:{options:d,setOption:(e,t)=>{h((s=>({...s,[e]:t})))}},children:[(0,o.jsx)(i.ev,{className:c.controls,indexBtnLabel:"%d of 4","aria-label":"BoxSlider demonstration with AI generated images of animals in a Vaporwave style",children:(0,o.jsx)("div",{className:c.viewport,children:t})}),s&&(0,o.jsx)("div",{className:c.optionsContainer,children:(0,o.jsx)(l,{controls:n})})]})}function p(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:c.slide,"aria-label":"1 of 4",children:(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{srcSet:"/slider/img/slides/hyena-square.webp",media:"(max-width: 480px)"}),(0,o.jsx)("img",{className:c.slideImage,src:"/slider/img/slides/hyena.webp",alt:"Face of a hyena looking slightly to the left with the sun and pyramids in the background"})]})}),(0,o.jsx)("div",{className:c.slide,"aria-label":"2 of 4",children:(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{srcSet:"/slider/img/slides/elephant-square.webp",media:"(max-width: 480px)"}),(0,o.jsx)("img",{className:c.slideImage,src:"/slider/img/slides/elephant.webp",alt:"Front view of an elephant with patterns on it's skin walking forwards with the suns rays and palm trees in the background"})]})}),(0,o.jsx)("div",{className:c.slide,"aria-label":"3 of 4",children:(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{srcSet:"/slider/img/slides/lion-square.webp",media:"(max-width: 480px)"}),(0,o.jsx)("img",{className:c.slideImage,src:"/slider/img/slides/lion.webp",alt:"Face of a lion looking slightly to the right with a wavey pattern mane and plant leafs in the background"})]})}),(0,o.jsx)("div",{className:c.slide,"aria-label":"4 of 4",role:"region",children:(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{srcSet:"/slider/img/slides/ram-square.webp",media:"(max-width: 480px)"}),(0,o.jsx)("img",{className:c.slideImage,src:"/slider/img/slides/ram.webp",alt:"Face of a ram with horns and large ears with hair that creates a pattern of swirls in the background"})]})})]})}function u(){const{options:e}=d();return(0,o.jsx)(i.qj,{className:c.slider,...e,children:(0,o.jsx)(p,{})})}function f(e){let{showOptions:t=!1}=e;return(0,o.jsx)(h,{showOptions:t,effectControls:[{label:"timing-function",type:"text",optionKey:"timingFunction",defaultValue:"ease-in-out"},{label:"cover",type:"checkbox",optionKey:"cover",defaultValue:!1}],children:(0,o.jsx)(u,{})})}function m(){const{options:e}=d();return(0,o.jsx)(i.Zk,{className:c.slider,...e,children:(0,o.jsx)(p,{})})}function v(e){let{showOptions:t=!1}=e;return(0,o.jsx)(h,{showOptions:t,effectControls:[{label:"direction",type:"radio",optionKey:"direction",defaultValue:"horizontal",values:["horizontal","vertical"]},{label:"perspective",type:"number",optionKey:"perspective",defaultValue:"1000"}],children:(0,o.jsx)(m,{})})}function b(){const{options:e}=d();return(0,o.jsx)(i.UC,{className:c.slider,...e,children:(0,o.jsx)(p,{})})}function w(e){let{showOptions:t=!1}=e;return(0,o.jsx)(h,{showOptions:t,effectControls:[{label:"timing-function",type:"text",optionKey:"timing-function",defaultValue:"ease-in-out"}],children:(0,o.jsx)(b,{})})}function x(){const{options:e}=d();return(0,o.jsx)(i.ae,{className:c.slider,...e,children:(0,o.jsx)(p,{})})}function g(e){let{showOptions:t=!1}=e;return(0,o.jsx)(h,{showOptions:t,effectControls:[{label:"rows",type:"number",optionKey:"rows",defaultValue:"5"},{label:"rowOffset",type:"number",optionKey:"rowOffset",defaultValue:"50"},{label:"tileEffect",type:"radio",optionKey:"tileEffect",defaultValue:"fade",values:["flip","fade"]}],children:(0,o.jsx)(x,{})})}},3327:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var i=s(2155);const r={},n=i.createContext(r);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:t},e.children)}},9348:(e,t,s)=>{function i(e,t){Object.keys(t).forEach((s=>e.style.setProperty(s,t[s])))}s.d(t,{qj:()=>G,Zk:()=>ee,UC:()=>te,ev:()=>se,ae:()=>ie});var r,n=class{options;transitionTimer=0;asyncTimer=0;constructor(e){this.options={cover:!0===e?.cover,timingFunction:e?.timingFunction||"ease-in-out"}}initialize(e,t,s){i(e,{overflow:"hidden"}),-1!=="static inherit".indexOf(getComputedStyle(e).position)&&i(e,{position:"relative"}),t.forEach(((e,t)=>{i(e,{left:"0",position:"absolute",top:"0",transform:`translateX(${e.offsetWidth}px)`,transition:"initial",visibility:"hidden","z-index":"1"}),t===s.startIndex&&i(e,{transform:"translateX(0px)",visibility:"visible","z-index":"2"})}))}destroy(){window.clearTimeout(this.transitionTimer),window.clearTimeout(this.asyncTimer)}transition(e){return new Promise((t=>{const s=e.slides[e.currentIndex],r=`${s.offsetWidth}px`,n=e.slides[e.nextIndex],o=`${n.offsetWidth}px`;i(n,{transform:`translateX(${e.isPrevious?"-"+o:o})`}),this.asyncTimer=window.setTimeout((()=>{i(n,{transform:"translateX(0px)",transition:`transform ${e.speed}ms ${this.options.timingFunction}`,visibility:"visible","z-index":"2"}),i(s,{transform:this.options.cover?"translateX(0px)":`translateX(${e.isPrevious?r:"-"+r})`,transition:this.options.cover?"initial":`transform ${e.speed}ms ${this.options.timingFunction}`,visibility:"visible","z-index":"1"}),this.transitionTimer=window.setTimeout((()=>{i(s,{transform:`translateX(${r})`,transition:"initial",visibility:"hidden"}),t()}),e.speed)}),0)}))}},o=class{elementStore;constructor(){this.elementStore=new Map}storeAttributes(e,t){(Array.isArray(e)?e:[e]).forEach((e=>{const s=this.elementStore.get(e)??{};t.forEach((t=>s[t]=e.getAttribute(t))),this.elementStore.set(e,s)}))}revert(){for(const[e,t]of this.elementStore.entries())Object.keys(t).forEach((s=>{const i=t[s];null===i||""===i?e.removeAttribute(s):null!==i&&e.setAttribute(s,i)}));this.elementStore.clear()}},l=[];"undefined"!=typeof ResizeObserver&&(r=new ResizeObserver((e=>{e.forEach((e=>l.find((t=>t.el===e.target))?.reset()))})));var a={add(e){l.push(e),r?.observe(e.el)},remove(e){r?.unobserve(e.el),l=l.filter((t=>t!==e))}},d=Object.freeze({autoScroll:"undefined"!=typeof matchMedia&&!matchMedia("(prefers-reduced-motion: reduce)").matches,loop:!0,pauseOnHover:!1,speed:800,startIndex:0,swipe:!0,swipeTolerance:30,timeout:5e3}),c=class{_activeIndex;_el;_effect;_stateStore;options;slides;autoScrollTimer;eventListeners;elListeners;isDestroyed;transitionQueue;get activeIndex(){return this._activeIndex}get el(){if(void 0===this._el)throw new Error("Slider element is undefined");return this._el}get length(){return this.slides.length}getOption(e){return this.options[e]}get stateStore(){if(void 0===this._stateStore)throw new Error("State store is undefined, are you trying to interact with a destroyed slider?");return this._stateStore}get effect(){if(void 0===this._effect)throw new Error("Slide effect is undefined, are you trying to interact with a destroyed slider?");return this._effect}constructor(e,t,s){if(this._el=e,this._stateStore=new o,this.transitionQueue=(()=>{const e=[],t=()=>{const s=e[0];s&&s().then((()=>{e.shift(),t()}))};return{push(s){e.push(s),1===e.length&&t()},clear(){e.length=0}}})(),this.slides=[],this.eventListeners={},this.elListeners={},this.isDestroyed=!1,this.options={...d,...s},this._activeIndex=this.options.startIndex,this.init(t),this.slides.length<this.activeIndex)throw this.destroy(),new Error(`Start index option is out of bounds - slides=${this.slides.length} start=${this.activeIndex}`);this.applyEventListeners(),a.add(this)}reset(e,t){this.stopAutoScroll(),"function"==typeof this.effect.destroy&&this.effect.destroy(this.el),this.stateStore.revert(),this.options={...this.options,...e},void 0===e?.startIndex||isNaN(e.startIndex)||(this._activeIndex=e.startIndex),this.init(t||this.effect)}next(){const e=this.activeIndex===this.slides.length-1;return e&&!this.options.loop?Promise.resolve():this.skipTo(e?0:this.activeIndex+1,!1)}prev(){const e=0===this.activeIndex;return e&&!this.options.loop?Promise.resolve():this.skipTo(e?this.slides.length-1:this.activeIndex-1)}skipTo(e,t){return new Promise((s=>{this.transitionQueue.push((async()=>{await this.transitionTo(e,void 0===t?e<this.activeIndex:t),s()}))}))}pause(){return this.options.autoScroll=!1,this.autoScrollTimer&&(this.stopAutoScroll(),this.emit("pause")),this}play(){return this.options.autoScroll=!0,this.setAutoScroll(),this.emit("play"),this}addEventListener(e,t){return Array.isArray(this.eventListeners[e])||(this.eventListeners[e]=[]),this.eventListeners[e].push(t),this}removeEventListener(e,t){const s=this.eventListeners[e]?.filter((e=>e!==t));return this.eventListeners[e]=s,this}destroy(){this.isDestroyed=!0,this.stopAutoScroll(),this.effect.destroy&&this.effect.destroy(this.el),this.stateStore.revert(),this.transitionQueue.clear(),a.remove(this),this.emit("destroy"),this.eventListeners={},Object.entries(this.elListeners).forEach((e=>{let[t,s]=e;return s.forEach((e=>this.el.removeEventListener(t,e)))})),this.elListeners={},delete this._el,delete this._stateStore,delete this._effect,this.slides.length=0}init(e){this._effect=e,this.slides=this.getSlides(),this.stateStore.storeAttributes([this.el,...this.slides],["style"]),this.effect.initialize(this.el,this.slides,{...this.options,startIndex:this.activeIndex},this.stateStore),this.addAriaAttributes(),this.options.autoScroll&&this.setAutoScroll()}addAriaAttributes(){this.stateStore.storeAttributes([this.el,...this.slides],["aria-live","role","aria-roledescription"]),this.el.setAttribute("aria-atomic","false"),this.el.setAttribute("aria-live","polite"),this.el.hasAttribute("role")||this.el.setAttribute("role","region"),this.slides.forEach((e=>{e.hasAttribute("role")||e.setAttribute("role","group"),e.hasAttribute("aria-roledescription")||e.setAttribute("aria-roledescription","slide")}))}getSlides(){return Array.from(this.el.children).filter((e=>e instanceof HTMLElement))}transitionTo(e,t){return new Promise(((s,i)=>{if(this.isDestroyed||e===this.activeIndex)return s();if(e<0||e>=this.slides.length)return i(new Error(`${e} is not a valid slide index`));this.stopAutoScroll();const r={el:this.el,slides:this.slides,speed:this.options.speed,currentIndex:this.activeIndex,isPrevious:t,nextIndex:e};this._activeIndex=e,this.emit("before",{currentIndex:r.currentIndex,nextIndex:r.nextIndex,speed:r.speed}),this.effect.transition(r).then((()=>{this.options.autoScroll&&this.setAutoScroll(),this.emit("after"),s()}))}))}stopAutoScroll(){window.clearTimeout(this.autoScrollTimer)}emit(e,t){const s=this.eventListeners[e];if("destroy"===e){const e=s;e?.forEach((e=>e()))}else s?.forEach((e=>e({currentIndex:this.activeIndex,speed:this.options.speed,...t})))}setAutoScroll(){this.stopAutoScroll(),window.requestAnimationFrame((()=>{this._el&&(this.el.setAttribute("aria-live","off"),this.autoScrollTimer=window.setTimeout((()=>this.next()),this.options.timeout))}))}addElListener(e,t){this.el.addEventListener(e,t),this.elListeners[e]=this.elListeners[e]||[],this.elListeners[e].push(t)}applyEventListeners(){this.addElListener("pointerenter",(()=>{this.options.autoScroll&&this.options.pauseOnHover&&this.pause()})),this.addElListener("pointerleave",(()=>{this.options.autoScroll&&this.options.pauseOnHover&&this.play()})),this.options.swipe&&this.addSwipeNavigation()}addSwipeNavigation(){let e=0;this.addElListener("pointerdown",(t=>{e=t.clientX})),this.addElListener("pointerup",(t=>{const s=t.clientX-e;Math.abs(s)>=this.options.swipeTolerance&&(s>0?this.prev():this.next(),t.stopPropagation())}))}},h="undefined"!=typeof HTMLElement?HTMLElement:class{},p="undefined"!=typeof customElements?(e,t)=>{void 0===customElements.get(e)&&customElements.define(e,t)}:()=>{},u=["auto-scroll","loop","pause-on-hover","swipe"],f=["speed","start-index","swipe-tolerance","timeout"],m=[...u,...f],v=class extends h{#e;#t=(()=>d.autoScroll)();#s=(()=>d.loop)();#i=(()=>d.pauseOnHover)();#r=(()=>d.speed)();#n=(()=>d.swipe)();#o=(()=>d.swipeTolerance)();#l=(()=>d.startIndex)();#a=(()=>d.timeout)();get slider(){return this.#e}get autoScroll(){return this.#t}set autoScroll(e){this.#t=e,this.reset({autoScroll:e})}get loop(){return this.#s}set loop(e){this.#s=e,this.reset({loop:e})}get pauseOnHover(){return this.#i}set pauseOnHover(e){this.#i=e,this.reset({pauseOnHover:e})}get speed(){return this.#r}set speed(e){this.#r=e,this.reset({speed:e})}get startIndex(){return this.#l}set startIndex(e){this.#l=e,this.reset({startIndex:e})}get swipe(){return this.#n}set swipe(e){this.#n=e,this.reset({swipe:e})}get swipeTolerance(){return this.#o}set swipeTolerance(e){this.#o=e,this.reset({swipeTolerance:e})}get timeout(){return this.#a}set timeout(e){this.#a=e,this.reset({timeout:e})}get options(){return{autoScroll:this.autoScroll,loop:this.loop,pauseOnHover:this.pauseOnHover,speed:this.speed,startIndex:this.startIndex,swipe:this.swipe,swipeTolerance:this.swipeTolerance,timeout:this.timeout}}init(e){const t=new c(this,e,this.options);["play","pause","before","after","destroy"].forEach((e=>t.addEventListener(e,(t=>this.dispatchEvent(new CustomEvent(e,{detail:t})))))),this.#e=t}reset(e,t){this.slider?.reset(e,t)}attributeChangedCallback(e,t,s){if(m.includes(e)){const t=e.replace(/-./g,(e=>e[1].toUpperCase()));f.includes(e)?this[t]=parseInt(s,10):u.includes(e)&&(this[t]="false"!==s)}}disconnectedCallback(){this.slider?.destroy(),this.#e=void 0}};p("bs-carousel",class extends v{static observedAttributes=(()=>[...m,"cover","timing-function"])();#d=null;#c=!1;get cover(){return this.#c}set cover(e){this.#c=e,this.reset({},new n({cover:e,timingFunction:this.timingFunction}))}get timingFunction(){return this.#d??"ease-out"}set timingFunction(e){this.#d=e,this.reset({},new n({cover:this.cover,timingFunction:e}))}connectedCallback(){this.init(new n({cover:this.cover,timingFunction:this.timingFunction}))}attributeChangedCallback(e,t,s){"timing-function"===e?this.timingFunction=s:"cover"===e?this.cover="false"!==s:super.attributeChangedCallback(e,t,s)}});var b=s(5723);function w(e,t){Object.keys(t).forEach((s=>e.style.setProperty(s,t[s])))}var x=class{options;translateZ;transitionTimer=0;constructor(e){this.options={direction:e?.direction||"horizontal",perspective:e?.perspective||1e3}}initialize(e,t,s,i){const r=e.offsetWidth,n=e.offsetHeight,o=`${this.options.perspective}px`,l=e.parentElement;if(null==l)throw new Error("Unable to locate viewport element for Cube slider");this.translateZ="vertical"===this.options.direction?n/2:r/2,i.storeAttributes(l,["style"]),t.forEach((e=>w(e,{left:"0",position:"absolute",top:"0"}))),w(e,{left:"0",overflow:"visible",position:"absolute",top:"0"}),-1===["absolute","fixed","relative"].indexOf(getComputedStyle(l).position)&&w(l,{position:"relative"}),w(l,{overflow:"visible",perspective:o}),w(t[s.startIndex||0],{transform:`${this.rotation(0)} translate3d(0, 0, ${this.translateZ}px)`}),w(e,{"transform-style":"preserve-3d",transform:`translate3d(0, 0, -${this.translateZ}px)`}),this.transitionTimer=window.setTimeout((()=>w(e,{transition:`transform ${s.speed}ms`})),50)}transition(e){return new Promise((t=>{const s=e.isPrevious?90:-90;w(e.slides[e.nextIndex],{transform:`${this.rotation(-s)} translate3d(0, 0, ${this.translateZ}px)`,"z-index":"2"}),w(e.el,{transition:`transform ${e.speed}ms`,transform:`translate3d(0, 0, -${this.translateZ}px) ${this.rotation(s)}`}),this.transitionTimer=window.setTimeout((()=>{e.slides.forEach(((t,s)=>{s!==e.nextIndex&&w(t,{transform:"initial"})})),w(e.el,{transition:"initial",transform:`translate3d(0, 0, -${this.translateZ}px) ${this.rotation(0)}`}),w(e.slides[e.nextIndex],{transform:`${this.rotation(0)} translate3d(0, 0, ${this.translateZ}px)`,"z-index":"1"}),t()}),e.speed)}))}destroy(){window.clearTimeout(this.transitionTimer)}rotation(e){return`rotate3d(${"vertical"===this.options.direction?"1, 0, 0":"0, 1, 0"}, ${e}deg)`}},g="undefined"!=typeof HTMLElement?HTMLElement:class{},y="undefined"!=typeof customElements?(e,t)=>{void 0===customElements.get(e)&&customElements.define(e,t)}:()=>{},E=["auto-scroll","loop","pause-on-hover","swipe"],S=["speed","start-index","swipe-tolerance","timeout"],T=[...E,...S],I=class extends g{#e;#t=(()=>d.autoScroll)();#s=(()=>d.loop)();#i=(()=>d.pauseOnHover)();#r=(()=>d.speed)();#n=(()=>d.swipe)();#o=(()=>d.swipeTolerance)();#l=(()=>d.startIndex)();#a=(()=>d.timeout)();get slider(){return this.#e}get autoScroll(){return this.#t}set autoScroll(e){this.#t=e,this.reset({autoScroll:e})}get loop(){return this.#s}set loop(e){this.#s=e,this.reset({loop:e})}get pauseOnHover(){return this.#i}set pauseOnHover(e){this.#i=e,this.reset({pauseOnHover:e})}get speed(){return this.#r}set speed(e){this.#r=e,this.reset({speed:e})}get startIndex(){return this.#l}set startIndex(e){this.#l=e,this.reset({startIndex:e})}get swipe(){return this.#n}set swipe(e){this.#n=e,this.reset({swipe:e})}get swipeTolerance(){return this.#o}set swipeTolerance(e){this.#o=e,this.reset({swipeTolerance:e})}get timeout(){return this.#a}set timeout(e){this.#a=e,this.reset({timeout:e})}get options(){return{autoScroll:this.autoScroll,loop:this.loop,pauseOnHover:this.pauseOnHover,speed:this.speed,startIndex:this.startIndex,swipe:this.swipe,swipeTolerance:this.swipeTolerance,timeout:this.timeout}}init(e){const t=new c(this,e,this.options);["play","pause","before","after","destroy"].forEach((e=>t.addEventListener(e,(t=>this.dispatchEvent(new CustomEvent(e,{detail:t})))))),this.#e=t}reset(e,t){this.slider?.reset(e,t)}attributeChangedCallback(e,t,s){if(T.includes(e)){const t=e.replace(/-./g,(e=>e[1].toUpperCase()));S.includes(e)?this[t]=parseInt(s,10):E.includes(e)&&(this[t]="false"!==s)}}disconnectedCallback(){this.slider?.destroy(),this.#e=void 0}};function C(e,t){Object.keys(t).forEach((s=>e.style.setProperty(s,t[s])))}y("bs-cube",class extends I{static observedAttributes=(()=>[...T,"direction","perspective"])();#h="horizontal";#p=1e3;get direction(){return this.#h}set direction(e){this.#h=e,this.reset({},new x({direction:e,perspective:this.perspective}))}get perspective(){return this.#p}set perspective(e){this.#p=e,this.reset({},new x({direction:this.direction,perspective:e}))}attributeChangedCallback(e,t,s){"perspective"===e?this.perspective=parseInt(s,10):"direction"===e?this.direction=s:super.attributeChangedCallback(e,t,s)}connectedCallback(){this.init(new x({direction:this.direction,perspective:this.perspective}))}});var O=class{options;transitionTimer=0;constructor(e){this.options={timingFunction:e?.timingFunction||"ease-in"}}initialize(e,t,s){-1!=="static inherit".indexOf(getComputedStyle(e).position)&&C(e,{position:"relative"}),t.forEach(((e,t)=>{C(e,{height:"100%",left:"0",opacity:"2",position:"absolute",top:"0",transition:`opacity ${s.speed}ms ${this.options.timingFunction}`,width:"100%","z-index":"2"}),t!==s.startIndex&&C(e,{opacity:"0","z-index":"1"})}))}transition(e){return new Promise((t=>{const s=e.slides[e.currentIndex],i=e.slides[e.nextIndex];C(s,{"z-index":"1",opacity:"0"}),C(i,{"z-index":"2",opacity:"1"}),this.transitionTimer=window.setTimeout(t,e.speed)}))}destroy(){window.clearTimeout(this.transitionTimer)}},L="undefined"!=typeof HTMLElement?HTMLElement:class{},$="undefined"!=typeof customElements?(e,t)=>{void 0===customElements.get(e)&&customElements.define(e,t)}:()=>{},A=["auto-scroll","loop","pause-on-hover","swipe"],j=["speed","start-index","swipe-tolerance","timeout"],k=[...A,...j],H=class extends L{#e;#t=(()=>d.autoScroll)();#s=(()=>d.loop)();#i=(()=>d.pauseOnHover)();#r=(()=>d.speed)();#n=(()=>d.swipe)();#o=(()=>d.swipeTolerance)();#l=(()=>d.startIndex)();#a=(()=>d.timeout)();get slider(){return this.#e}get autoScroll(){return this.#t}set autoScroll(e){this.#t=e,this.reset({autoScroll:e})}get loop(){return this.#s}set loop(e){this.#s=e,this.reset({loop:e})}get pauseOnHover(){return this.#i}set pauseOnHover(e){this.#i=e,this.reset({pauseOnHover:e})}get speed(){return this.#r}set speed(e){this.#r=e,this.reset({speed:e})}get startIndex(){return this.#l}set startIndex(e){this.#l=e,this.reset({startIndex:e})}get swipe(){return this.#n}set swipe(e){this.#n=e,this.reset({swipe:e})}get swipeTolerance(){return this.#o}set swipeTolerance(e){this.#o=e,this.reset({swipeTolerance:e})}get timeout(){return this.#a}set timeout(e){this.#a=e,this.reset({timeout:e})}get options(){return{autoScroll:this.autoScroll,loop:this.loop,pauseOnHover:this.pauseOnHover,speed:this.speed,startIndex:this.startIndex,swipe:this.swipe,swipeTolerance:this.swipeTolerance,timeout:this.timeout}}init(e){const t=new c(this,e,this.options);["play","pause","before","after","destroy"].forEach((e=>t.addEventListener(e,(t=>this.dispatchEvent(new CustomEvent(e,{detail:t})))))),this.#e=t}reset(e,t){this.slider?.reset(e,t)}attributeChangedCallback(e,t,s){if(k.includes(e)){const t=e.replace(/-./g,(e=>e[1].toUpperCase()));j.includes(e)?this[t]=parseInt(s,10):A.includes(e)&&(this[t]="false"!==s)}}disconnectedCallback(){this.slider?.destroy(),this.#e=void 0}};$("bs-fade",class extends H{static observedAttributes=(()=>[...k,"timing-function"])();#d;get timingFunction(){return this.#d??"ease-in-out"}set timingFunction(e){this.#d=e,this.reset({},new O({timingFunction:e}))}attributeChangedCallback(e,t,s){"timing-function"===e?this.timingFunction=s:super.attributeChangedCallback(e,t,s)}connectedCallback(){this.init(new O({timingFunction:this.timingFunction}))}});var F,N="undefined"!=typeof HTMLElement?HTMLElement:class{},P="undefined"!=typeof customElements?(e,t)=>{void 0===customElements.get(e)&&customElements.define(e,t)}:()=>{};"undefined"!=typeof document&&((F=document.createElement("template")).innerHTML='\n<div part="container">\n  <div part="slider-container">\n    <slot id="slider"></slot>\n  </div>\n\n  <div  part="play-btn-container">\n    <slot name="play-btn">\n      <button part="btn play-btn"></button>\n    </slot>\n  </div>\n\n  <div part="controls-container">\n    <slot name="prev-btn">\n      <button part="prev-btn btn"></button>\n    </slot>\n    <slot name="next-btn">\n      <button part="next-btn btn"></button>\n    </slot>\n  </div>\n\n  <div part="index-container" role="group">\n    <slot name="index"></slot>\n  </div>\n</div>\n');function _(e,t){Object.keys(t).forEach((s=>e.style.setProperty(s,t[s])))}P("bs-slider-controls",class extends N{#u=null;#f;#m=!1;constructor(){super(),this.#f=new MutationObserver((()=>{this.#v()}))}connectedCallback(){const e=this.attachShadow({mode:"open"});e.appendChild(F.content.cloneNode(!0));const t=e.querySelector("#slider");this.hasAttribute("aria-roledescription")||this.setAttribute("aria-roledescription","carousel"),this.hasAttribute("role")||this.setAttribute("role","region"),this.#b(e.querySelector('slot[name="prev-btn"]'),(()=>this.#u?.slider?.prev()),{"aria-label":this.#w()}),this.#b(e.querySelector('slot[name="next-btn"]'),(()=>this.#u?.slider?.next()),{"aria-label":this.#x()}),this.#g(),this.#y(),t?.addEventListener("slotchange",(()=>this.#v()))}#v(){this.#f.disconnect();const e=this.shadowRoot?.querySelector("#slider")?.assignedElements()[0];e.tagName.toLowerCase().startsWith("bs-")?this.#u=e:(this.#f.observe(e,{subtree:!0,childList:!0}),this.#u=e.querySelector("bs-carousel, bs-cube, bs-fade, bs-tile")),this.#u?.slider&&(this.shadowRoot?.querySelectorAll('[part~="btn"]').forEach((e=>{e.setAttribute("aria-controls","slider")})),this.#E(),this.#u?.slider.addEventListener("play",(()=>this.#E())),this.#u?.slider.addEventListener("pause",(()=>this.#E())),this.#S(),this.#u?.slider.addEventListener("before",(e=>{let{currentIndex:t,nextIndex:s}=e;this.#T(t,s)})))}#b(e,t,s){void 0===s&&(s={});const i=e.querySelector('[part~="btn"]');if(i)for(const[r,n]of Object.entries(s))i.setAttribute(r,n);e.addEventListener("click",(e=>{this.#m=!0,this.#u?.slider?.pause(),t(e)})),e.addEventListener("focusin",(()=>{this.#m||this.#u?.slider?.pause()}))}#y(){const e=this.shadowRoot?.querySelector('slot[name="index"]');e&&(e.setAttribute("aria-label",this.#I()),e?.addEventListener("click",(t=>{const s=e.assignedElements()[0]??e;if(s){const e=Array.from(s.querySelectorAll("button")).indexOf(t.target);e>-1&&(this.#m=!0,this.#u?.slider?.pause(),this.#u?.slider?.skipTo(e))}})),e?.addEventListener("slotchange",(()=>{const t=e.assignedElements()[0];if(t){const e=t.querySelectorAll("button"),s=this.#u?.slider;s&&e&&e.forEach(((e,t)=>{e.setAttribute("aria-disabled",t===s.activeIndex?"true":"false")}))}})))}#S(){const e=this.shadowRoot?.querySelector('slot[name="index"]');if(e){this.#C();const t=this.#u?.slider?.length??0;if(t>1&&!this.hasAttribute("disable-index")){const s=document.createDocumentFragment(),i=this.getAttribute("index-btn-label")??"View slide %d";for(let e=0;e<t;e++){const t=document.createElement("button"),r=e===this.#u.slider.activeIndex,n=i.replace(/%d/g,`${e+1}`);t.setAttribute("aria-label",n),t.setAttribute("aria-disabled",r?"true":"false"),t.setAttribute("aria-controls","slider"),t.setAttribute("part",r?"index-btn active":"index-btn"),t.setAttribute("type","button"),s.appendChild(t)}e?.appendChild(s)}}}#T(e,t){const s=this.shadowRoot?.querySelector('slot[name="index"]');if(s){const i=s?.assignedElements()[0]??s,r=i?.querySelectorAll("button"),n=r?.item(e),o=r?.item(t??-1);n&&(n.setAttribute("aria-disabled","false"),n.hasAttribute("part")&&n.setAttribute("part","index-btn")),o&&(o.setAttribute("aria-disabled","true"),o.hasAttribute("part")&&o.setAttribute("part","index-btn active"))}}#C(){const e=this.shadowRoot?.querySelector('slot[name="index"]');if(e){const t=e?.assignedElements()??[];e?.querySelectorAll("button").forEach((s=>{t.includes(s)||e.removeChild(s)}))}}#g(){const e=this.shadowRoot?.querySelector('slot[name="play-btn"]');e&&(e.addEventListener("slotchange",(()=>{this.#E()})),e.addEventListener("click",(()=>{this.#m=!0,this.#u?.slider?.getOption("autoScroll")?this.#u?.slider?.pause():this.#u?.slider?.play()})))}#E(){const e=this.shadowRoot?.querySelector('slot[name="play-btn"]');if(e){const t=e.assignedElements()[0]??e.querySelector('[part~="btn"]');t.setAttribute("aria-label",this.#u?.slider?.getOption("autoScroll")?this.#O():this.#L()),t?.setAttribute("part",this.#u?.slider?.getOption("autoScroll")?"btn play-btn pause":"btn play-btn")}}#I(){return this.getAttribute("index-label")??"Select a slide"}#x(){return this.getAttribute("next-btn-label")??"Next"}#w(){return this.getAttribute("prev-btn-label")??"Previous"}#L(){return this.getAttribute("play-btn-label")??"Start slide auto scroll"}#O(){return this.getAttribute("pause-btn-label")??"Stop slide auto scroll"}});var W="bs-tile",z="bs-tile-front",q="bs-tile-back",B=class{createTile(e){const t=document.createElement("div"),s=document.createElement("div"),i=document.createElement("div"),r=[s,i];return t.classList.add(e.tileClass),_(t,{height:`${e.height}px`,left:`${e.fromLeft}px`,overflow:"hidden",position:"absolute",top:`${e.fromTop}px`,width:`${e.width}px`}),r.forEach((t=>{_(t,{height:`${e.boxHeight}px`,left:`-${e.fromLeft}px`,position:"absolute",top:`-${e.fromTop}px`,transition:"opacity 400ms",width:`${e.boxWidth}px`})})),_(i,{opacity:"0"}),s.classList.add(e.frontClass),t.appendChild(s),i.classList.add(e.backClass),t.appendChild(i),t}transition(e,t){const s=e.querySelector(`.${z}`),i=e.querySelector(`.${q}`);_(s,{opacity:"front"===t?"1":"0"}),_(i,{opacity:"front"===t?"0":"1"})}setTileFace(e,t){const s=e.cloneNode(!0);s.removeAttribute("style"),t.replaceChildren(s)}},M=class{createTile(e){const t=document.createElement("div"),s=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),l=[r,o];return _(t,{height:`${e.height}px`,left:`${e.fromLeft}px`,perspective:"300px",position:"absolute",top:`${e.fromTop}px`,width:`${e.width}px`,"z-index":`${e.zIndex}`}),s.classList.add(e.tileClass),_(s,{height:"100%",position:"relative","transform-style":"preserve-3d",transition:`transform ${e.speed}ms`,width:"100%"}),t.appendChild(s),l.forEach((t=>_(t,{height:`${e.boxHeight}px`,left:`-${e.fromLeft}px`,position:"absolute",top:`-${e.fromTop}px`,width:`${e.boxWidth}px`}))),_(i,{"backface-visibility":"hidden",inset:"0",overflow:"clip",position:"absolute"}),_(n,{"backface-visibility":"hidden",inset:"0",overflow:"clip",position:"absolute",transform:"rotateY(180deg)"}),i.appendChild(r),i.classList.add(e.frontClass),s.appendChild(i),n.appendChild(o),n.classList.add(e.backClass),s.appendChild(n),t}transition(e,t){_(e,{transform:`rotateY(${"back"===t?180:0}deg)`})}setTileFace(e,t){const s=e.cloneNode(!0);s.removeAttribute("style"),t.firstChild.replaceChildren(s)}},R={rowOffset:50,rows:8,tileEffect:"flip"},V=class{options;_tileWrapper;tileTransition;grid;activeFace;rowTimers=[];tileTimers=[];get tileWrapper(){if(void 0===this._tileWrapper)throw new Error("TileWrapper is undefined");return this._tileWrapper}constructor(e){this.options={...R,...e},this.activeFace="front",this.tileTransition="fade"===this.options.tileEffect?new B:new M}initialize(e,t,s){const i=t[s.startIndex||0],r=document.createDocumentFragment();this.grid=this.calculateGrid(e),this._tileWrapper&&this.destroy(e);const n=document.createElement("div");n.setAttribute("aria-hidden","true"),e.appendChild(n),this._tileWrapper=n,-1==="fixed absolute relative".indexOf(getComputedStyle(e).position)&&_(e,{position:"relative"}),_(this.tileWrapper,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"});const o=this.grid.rows*this.grid.cols;for(let l=0;l<this.grid.rows;++l){const e=l*this.grid.tileHeight;for(let t=0;t<this.grid.cols;++t){const n=this.tileTransition.createTile({backClass:`${W}-back`,boxWidth:this.grid.width,boxHeight:this.grid.height,fromTop:e,fromLeft:t*this.grid.tileWidth,frontClass:`${W}-front`,height:this.grid.tileHeight,speed:(s.speed-this.options.rowOffset*(this.grid.rows-1))/this.grid.cols,tileClass:W,width:this.grid.tileWidth,zIndex:o-(l+t)});r.appendChild(n),this.tileTransition.setTileFace(i,n.querySelector(`.${z}`))}}t.forEach((e=>_(e,{position:"absolute",clip:"rect(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",border:"0"}))),this.tileWrapper.appendChild(r)}transition(e){return new Promise((t=>{const s=this.tileWrapper.querySelectorAll(`.${W}`),i=this.options.rowOffset,r=(e.speed-i*(this.grid.rows-1))/this.grid.cols,n="front"===this.activeFace?"back":"front";this.rowTimers.length=0,this.tileTimers.length=0,this.tileWrapper.querySelectorAll(`.${"front"===n?z:q}`).forEach((t=>this.tileTransition.setTileFace(e.slides[e.nextIndex],t)));for(let e=0;e<this.grid.rows;++e){let o=e*this.grid.cols,l=0;const a=o+this.grid.cols,d=e*i;this.rowTimers.push(window.setTimeout((()=>{for(;o<a;++o){const e=l*r,i=s[o];this.tileTimers.push(window.setTimeout((()=>{this.tileTransition.transition(i,n),i===s[s.length-1]&&(this.activeFace=n,t())}),e)),l+=1}}),d))}}))}destroy(e){e.removeChild(this.tileWrapper),delete this._tileWrapper,this.rowTimers.forEach(window.clearTimeout),this.tileTimers.forEach(window.clearTimeout)}calculateGrid(e){const{width:t,height:s}=getComputedStyle(e),i=parseInt(s,10)??e.offsetHeight,r=parseInt(t,10)??e.offsetWidth,n=this.options.rows,o=Math.ceil(i/n),l=Math.floor(e.offsetWidth/o);return{cols:l,height:i,rows:n,tileHeight:o,tileWidth:Math.ceil(r/l),width:r}}},K="undefined"!=typeof HTMLElement?HTMLElement:class{},D="undefined"!=typeof customElements?(e,t)=>{void 0===customElements.get(e)&&customElements.define(e,t)}:()=>{},X=["auto-scroll","loop","pause-on-hover","swipe"],Z=["speed","start-index","swipe-tolerance","timeout"],U=[...X,...Z],Q=class extends K{#e;#t=(()=>d.autoScroll)();#s=(()=>d.loop)();#i=(()=>d.pauseOnHover)();#r=(()=>d.speed)();#n=(()=>d.swipe)();#o=(()=>d.swipeTolerance)();#l=(()=>d.startIndex)();#a=(()=>d.timeout)();get slider(){return this.#e}get autoScroll(){return this.#t}set autoScroll(e){this.#t=e,this.reset({autoScroll:e})}get loop(){return this.#s}set loop(e){this.#s=e,this.reset({loop:e})}get pauseOnHover(){return this.#i}set pauseOnHover(e){this.#i=e,this.reset({pauseOnHover:e})}get speed(){return this.#r}set speed(e){this.#r=e,this.reset({speed:e})}get startIndex(){return this.#l}set startIndex(e){this.#l=e,this.reset({startIndex:e})}get swipe(){return this.#n}set swipe(e){this.#n=e,this.reset({swipe:e})}get swipeTolerance(){return this.#o}set swipeTolerance(e){this.#o=e,this.reset({swipeTolerance:e})}get timeout(){return this.#a}set timeout(e){this.#a=e,this.reset({timeout:e})}get options(){return{autoScroll:this.autoScroll,loop:this.loop,pauseOnHover:this.pauseOnHover,speed:this.speed,startIndex:this.startIndex,swipe:this.swipe,swipeTolerance:this.swipeTolerance,timeout:this.timeout}}init(e){const t=new c(this,e,this.options);["play","pause","before","after","destroy"].forEach((e=>t.addEventListener(e,(t=>this.dispatchEvent(new CustomEvent(e,{detail:t})))))),this.#e=t}reset(e,t){this.slider?.reset(e,t)}attributeChangedCallback(e,t,s){if(U.includes(e)){const t=e.replace(/-./g,(e=>e[1].toUpperCase()));Z.includes(e)?this[t]=parseInt(s,10):X.includes(e)&&(this[t]="false"!==s)}}disconnectedCallback(){this.slider?.destroy(),this.#e=void 0}};function J(e){const{autoScroll:t,loop:s,onAfter:i,onBefore:r,onDestroy:n,onPause:o,onPlay:l,pauseOnHover:a,startIndex:d,speed:c,swipe:h,swipeTolerance:p,timeout:u}=e,f={onAfter:i,onBefore:r,onDestroy:n,onPause:o,onPlay:l},m={};return void 0!==t&&(m["auto-scroll"]=`${t}`),void 0!==s&&(m.loop=`${s}`),void 0!==a&&(m["pause-on-hover"]=`${a}`),void 0!==c&&(m.speed=`${c}`),void 0!==d&&(m["start-index"]=`${d}`),void 0!==h&&(m.swipe=`${h}`),void 0!==p&&(m["swipe-tolerance"]=`${p}`),void 0!==u&&(m.timeout=`${u}`),{attributes:m,eventHandlers:f}}function Y(e,t){let{onAfter:s,onBefore:i,onDestroy:r,onPause:n,onPlay:o}=e;return e=>{const l=e?.slider;l&&(s&&l.addEventListener("after",s),i&&l.addEventListener("before",i),r&&l.addEventListener("destroy",r),n&&l.addEventListener("pause",n),o&&l.addEventListener("play",o),t&&(t.current=l))}}D("bs-tile",class extends Q{static observedAttributes=(()=>[...U,"rows","row-offset","tile-effect"])();#$=8;#A=50;#j="flip";get rows(){return this.#$}set rows(e){this.#$=e,this.reset({},new V({rowOffset:this.rowOffset,rows:e,tileEffect:this.tileEffect}))}get rowOffset(){return this.#A}set rowOffset(e){this.#A=e,this.reset({},new V({rowOffset:e,rows:this.rows,tileEffect:this.tileEffect}))}get tileEffect(){return this.#j}set tileEffect(e){this.#j=e,this.reset({},new V({rowOffset:this.rowOffset,rows:this.rows,tileEffect:e}))}attributeChangedCallback(e,t,s){"rows"===e?this.rows=parseInt(s,10):"row-offset"===e?this.rowOffset=parseInt(s,10):"tile-effect"===e?this.tileEffect=s:super.attributeChangedCallback(e,t,s)}connectedCallback(){this.init(new V({rows:this.rows,rowOffset:this.rowOffset,tileEffect:this.tileEffect}))}});var G=function(e){let{children:t,className:s,cover:i,sliderRef:r,timingFunction:n,...o}=e;const{attributes:l,eventHandlers:a}=J(o),d={...l};return n&&(d["timing-function"]=n),void 0!==i&&(d.cover=`${i}`),(0,b.jsx)("bs-carousel",{...d,ref:Y(a,r),class:s,children:t})};var ee=function(e){let{children:t,className:s,direction:i,perspective:r,sliderRef:n,...o}=e;const{attributes:l,eventHandlers:a}=J(o),d={...l};return void 0!==i&&(d.direction=i),void 0!==r&&(d.perspective=`${r}`),(0,b.jsx)("bs-cube",{...d,ref:Y(a,n),class:s,children:t})};var te=function(e){let{children:t,className:s,sliderRef:i,timingFunction:r,...n}=e;const{attributes:o,eventHandlers:l}=J(n),a={...o};return r&&(a["timing-function"]=r),(0,b.jsx)("bs-fade",{...a,ref:Y(l,i),class:s,children:t})};var se=function(e){let{className:t,indexBtnLabel:s,indexLabel:i,nextBtnLabel:r,pauseBtnLabel:n,playBtnLabel:o,prevBtnLabel:l,...a}=e;const d={};return s&&(d["index-btn-label"]=s),i&&(d["index-label"]=i),r&&(d["next-btn-label"]=r),n&&(d["pause-btn-label"]=n),o&&(d["play-btn-label"]=o),l&&(d["prev-btn-label"]=l),(0,b.jsx)("bs-slider-controls",{class:t,...d,...a})};var ie=function(e){let{children:t,className:s,sliderRef:i,rows:r,rowOffset:n,tileEffect:o,...l}=e;const{attributes:a,eventHandlers:d}=J(l),c={...a};return void 0!==r&&(c.rows=`${r}`),void 0!==n&&(c["row-offset"]=`${n}`),void 0!==o&&(c["tile-effect"]=o),(0,b.jsx)("bs-tile",{...c,ref:Y(d,i),class:s,children:t})}}}]);