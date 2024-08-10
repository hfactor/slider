"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2383],{5289:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var t=n(5723),s=n(3327);const d={title:"Styling"},l=void 0,o={id:"guides/styling",title:"Styling",description:"The minimum styles required to get the slider working are the width and height properties.",source:"@site/docs/guides/05-styling.md",sourceDirName:"guides",slug:"/guides/styling",permalink:"/slider/docs/guides/styling",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Styling"},sidebar:"docsSidebar",previous:{title:"Slider Controls",permalink:"/slider/docs/guides/slider-controls"},next:{title:"Accessibility",permalink:"/slider/docs/guides/accessibility"}},r={},h=[{value:"Responsive design",id:"responsive-design",level:2},{value:"Avoiding cumulative layout shift",id:"avoiding-cumulative-layout-shift",level:2}];function c(e){const i={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["The minimum styles required to get the slider working are the ",(0,t.jsx)(i.code,{children:"width"})," and ",(0,t.jsx)(i.code,{children:"height"})," properties.\nThe slider element will also need to have a block content layout with a ",(0,t.jsx)(i.code,{children:"display"})," value of\n",(0,t.jsx)(i.code,{children:"block"}),", ",(0,t.jsx)(i.code,{children:"grid"})," or ",(0,t.jsx)(i.code,{children:"flex"}),". The slides inside the slider element should have an equal width\nand height that is easily achieved by setting the ",(0,t.jsx)(i.code,{children:"width"})," and ",(0,t.jsx)(i.code,{children:"height"})," properties to ",(0,t.jsx)(i.code,{children:"100%"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-html",children:'<style>\n  .slider {\n    height: 400px;\n    width: 800px;\n  }\n\n  .slide {\n    height: 100%;\n    width: 100%;\n  }\n</style>\n\n<div class="slider">\n  <div class="slide">Slide one</div>\n  <div class="slide">Slide two</div>\n  <div class="slide">Slide three</div>\n</div>\n'})}),"\n",(0,t.jsx)(i.h2,{id:"responsive-design",children:"Responsive design"}),"\n",(0,t.jsx)(i.p,{children:"The slider will react to changes in the size of the slider element if the page size or display\norientation changes. Set the width and height of the slider element within a media or container\nquery to suit your design."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-css",children:".slider {\n  height: 400px;\n  width: 800px;\n}\n\n.slide {\n  height: 100%;\n  width: 100%;\n}\n\n@media (max-width: 600px) {\n  .slider {\n    height: 200px;\n    width: 400px;\n  }\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"avoiding-cumulative-layout-shift",children:"Avoiding cumulative layout shift"}),"\n",(0,t.jsx)(i.p,{children:"To avoid a cumulative layout shift (CLS) when the page is first rendered and the slider is yet to\nbe initialised you can style the slides so that they do not overflow the slider element."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-css",children:".slider {\n  height: 400px;\n  position: relative;\n  width: 800px;\n}\n\n.slide {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n}\n\n/* Have the first slide visible */\n.slide:first-child {\n  z-index: 2;\n}\n"})})]})}function a(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3327:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var t=n(2155);const s={},d=t.createContext(s);function l(e){const i=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(d.Provider,{value:i},e.children)}}}]);