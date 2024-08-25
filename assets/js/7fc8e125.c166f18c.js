"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[388],{9506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var s=t(5723),o=t(5298);const l={title:"Slider Controls"},i=void 0,r={id:"guides/slider-controls",title:"Slider Controls",description:"The slider controls component wraps a slider to provide navigation and slide index buttons.",source:"@site/docs/guides/06-slider-controls.md",sourceDirName:"guides",slug:"/guides/slider-controls",permalink:"/slider/docs/guides/slider-controls",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Slider Controls"},sidebar:"docsSidebar",previous:{title:"Vue",permalink:"/slider/docs/guides/vue"},next:{title:"Styling",permalink:"/slider/docs/guides/styling"}},d={},a=[];function c(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The slider controls component wraps a slider to provide navigation and slide index buttons."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<bs-slider-controls>\n  <bs-carousel auto-scroll="false" timeout="5000" cover>\n    <div class="slide">Slide One</div>\n    <div class="slide">Slide Two</div>\n    <div class="slide">Slide Three</div>\n    <div class="slide">Slide Four</div>\n    <div class="slide">Slide Five</div>\n  </bs-carousel>\n</bs-slider-controls>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Button labels for the default controls can be set via attributes. The ",(0,s.jsx)(n.code,{children:"index-btn-label"}),"\nattribute may include a ",(0,s.jsx)(n.code,{children:"%d"})," placeholder for the slide number."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<bs-slider-controls\n  next-btn-label="Next slide"\n  prev-btn-label="Previous slide"\n  play-btn-label="Start slide show"\n  pause-btn-label="Stop slide show"\n  index-label="Select a slide"\n  index-btn-label="Go to slide %d">\n  \x3c!-- slider content ---\x3e\n</bs-slider-controls>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Slots for the controls are available if you want to provide your own and these will be activated\nwith event listeners to control the slider for you."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<bs-slider-controls>\n  <bs-carousel auto-scroll="false" timeout="5000" cover>\n    <div class="slide">Slide One</div>\n    <div class="slide">Slide Two</div>\n    <div class="slide">Slide Three</div>\n    <div class="slide">Slide Four</div>\n    <div class="slide">Slide Five</div>\n  </bs-carousel>\n\n  <button slot="next-btn">Next</button>\n  <button slot="prev-btn">Previous</button>\n\n  <div slot="index">\n    <button>View slide one</button>\n    <button>View slide two</button>\n    <button>View slide three</button>\n    <button>View slide four</button>\n    <button>View slide five</button>\n  </div>\n</bs-slider-controls>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"bs-slider-controls"})," element has some basic layout and button styles that can be configured via the\ncustom properties as show below. The styling can be disabled completely by setting the ",(0,s.jsx)(n.code,{children:"unstyled"})," attribute."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"\x3c!-- Disable default styling --\x3e\n<bs-slider-controls unstyled></bs-slider-controls>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"/* Override the default styles via custom properties */\n:root {\n  /* The amount of space between the slides and the button controls */\n  --bs-button-bar-gap: 0.5rem;\n\n  /* The color of the index button pips */\n  --bs-index-btn-color: rgb(0 0 0 / 50%);\n\n  /* The color of the index button pip when hovered */\n  --bs-index-btn-hover-color: rgb(0 0 0 / 75%);\n\n  /* The color of the index button pip when it's slide is in view (active) */\n  --bs-index-btn-active-color: black;\n\n  /* The Size of the index button pips */\n  --bs-index-btn-size: 1rem;\n\n  /* The background color of the control buttons */\n  --bs-btn-background-color: rgb(0 0 0 / 50%);\n\n  /* The background color of the control buttons when hovered */\n  --bs-btn-hover-background-color: rgb(0 0 0 / 75%);\n\n  /* The border radius of the control buttons */\n  --bs-btn-border-radius: 999px;\n\n  /* The size of the control buttons */\n  --bs-btn-size: 2rem;\n\n  /* The background image icon for the next button */\n  --bs-next-icon: url('/next.svg');\n\n  /* The background image icon for the previous button */\n  --bs-prev-icon: url('/prev.svg');\n\n  /* The background image icon for the play button. */\n  --play-icon: url('/play.svg');\n\n  /* The background image icon for the pause button. */\n  --pause-icon: url('/pause.svg');\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To further customize the controls, the ",(0,s.jsx)(n.code,{children:"part"})," attribute can be used to target the individual parts of the controls.\nBelow is the template for the slider controls showing the available parts."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<div part="container">\n  <div part="slider-container">\n    <slot id="slider"></slot>\n  </div>\n\n  <div part="play-btn-container">\n    <slot name="play-btn">\n      <button part="btn play-btn"></button>\n    </slot>\n  </div>\n\n  <div part="controls-container">\n    <slot name="prev-btn">\n      <button part="prev-btn btn"></button>\n    </slot>\n    <slot name="next-btn">\n      <button part="next-btn btn"></button>\n    </slot>\n  </div>\n\n  <div part="index-container">\n    <slot name="index">\n      \x3c!-- index buttons are generated with part="index-btn" --\x3e\n    </slot>\n  </div>\n</div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As an example, to style the control buttons create a selector to target the ",(0,s.jsx)(n.code,{children:"btn"})," part."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"bs-slider-controls::part(btn) {\n  background: red;\n  color: white;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Additional parts are added to controls for the active index button and the state of the\nplay button."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"/* Active index button */\nbs-slider-controls::part(index-btn active) {\n  /* button style rules */\n}\n\n/* Play button for a slider in auto scrolling state has the pause part */\nbs-slider-controls::part(play-btn pause) {\n  /* button style rules */\n}\n"})})]})}function b(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5298:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(2155);const o={},l=s.createContext(o);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);