"use strict";(self.webpackChunkdigital_garden=self.webpackChunkdigital_garden||[]).push([[806],{1036:function(e,t,l){var a=l(7294),n=l(574);t.Z=e=>{let{location:t,path:l,title:i}=e;var r,o;l||(l=null===(r=t.state)||void 0===r?void 0:r.prevPath);i||(i=null===(o=t.state)||void 0===o?void 0:o.prevTitle);return l&&i?a.createElement(n.Link,{id:"go-back",to:l,itemProp:"url"},a.createElement("span",null,"←")," ",i):a.createElement("p",null)}},540:function(e,t,l){var a=l(7294),n=l(574);t.Z=e=>{let{folders:t,location:l,prevTitle:i}=e;const r=t.length<3;return a.createElement("ol",{className:"folder-list",style:r?{justifyContent:"start"}:null},t.map((e=>a.createElement("li",{key:e.name,style:r?{marginRight:"var(--spacing-2)"}:null},a.createElement(n.Link,{key:e.name,to:e.path,itemProp:"url",state:{prevPath:l.pathname,prevTitle:i}},a.createElement("span",null,e.name))))))}},9389:function(e,t,l){l.r(t);var a=l(7294),n=l(4e3),i=l(8183),r=l(540),o=l(1036);t.default=e=>{let{location:t}=e;const l="Wiki";return a.createElement(n.Z,{location:t,title:l},a.createElement(i.Z,{title:l}),a.createElement("h1",null,l),a.createElement(o.Z,{location:t,path:"/",title:"Home"}),a.createElement(r.Z,{folders:[{name:"Libros",path:"/wiki/library"},{name:"Recetas",path:"/wiki/cooking"},{name:"Listas",path:"/wiki/lists"},{name:"Fitness",path:"/wiki/fitness"},{name:"Climbing",path:"/wiki/climbing"}],location:t,prevTitle:l}))}}}]);
//# sourceMappingURL=component---src-pages-wiki-index-js-9ade242b82e8c78cbfef.js.map