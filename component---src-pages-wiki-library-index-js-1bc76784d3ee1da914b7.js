(self.webpackChunkcaconka_blog=self.webpackChunkcaconka_blog||[]).push([[11],{4988:function(e,t){t._={RECIPE_BASE_PATH:"/wiki/cooking",RECIPE_BREADS:{folder:"breads",title:"Panes"},RECIPE_DESSERTS:{folder:"desserts",title:"Postres"},RECIPE_MAIN_DISHES:{folder:"main-dishes",title:"Principales"},RECIPE_SIDE_DISHES:{folder:"side-dishes",title:"Acompañamientos"},RECIPE_OTHERS:{folder:"others",title:"Otras"},RECIPE_SALADS:{folder:"salads",title:"Ensaladas"},RECIPE_SAUCES:{folder:"sauces",title:"Salsas"},RECIPE_SOUPS:{folder:"soups",title:"Cremas y sopas"},RECIPE_STARTERS:{folder:"starters",title:"Entrantes"},RECIPE_BASES:{folder:"bases",title:"Bases"},RECIPE_BREAKFASTS:{folder:"breakfasts-snacks",title:"Desayunos y meriendas"},LIBRARY_BASE_PATH:"/wiki/library",LIBRARY_CHARLIE:{folder:"charlie",title:"Charlie"},LIBRARY_LULE:{folder:"lule",title:"Lule"}}},1036:function(e,t,l){"use strict";var a=l(7294),r=l(574);t.Z=e=>{let{location:t,path:l,title:i}=e;var s,n;l||(l=null===(s=t.state)||void 0===s?void 0:s.prevPath);i||(i=null===(n=t.state)||void 0===n?void 0:n.prevTitle);return l&&i?a.createElement(r.Link,{id:"go-back",to:l,itemProp:"url"},a.createElement("span",null,"←")," ",i):a.createElement("p",null)}},540:function(e,t,l){"use strict";var a=l(7294),r=l(574);t.Z=e=>{let{folders:t,location:l,prevTitle:i}=e;const s=t.length<3;return a.createElement("ol",{className:"folder-list",style:s?{justifyContent:"start"}:null},t.map((e=>a.createElement("li",{key:e.name,style:s?{marginRight:"var(--spacing-2)"}:null},a.createElement(r.Link,{key:e.name,to:e.path,itemProp:"url",state:{prevPath:l.pathname,prevTitle:i}},a.createElement("span",null,e.name))))))}},7274:function(e,t,l){"use strict";l.r(t);var a=l(7294),r=l(4988),i=l(4e3),s=l(8183),n=l(540),o=l(1036);t.default=e=>{let{location:t}=e;const l="Librerías",E=r._.LIBRARY_BASE_PATH,c=[{name:r._.LIBRARY_CHARLIE.title,path:E+"/"+r._.LIBRARY_CHARLIE.folder},{name:r._.LIBRARY_LULE.title,path:E+"/"+r._.LIBRARY_LULE.folder}];return a.createElement(i.Z,{location:t,title:l},a.createElement(s.Z,{title:l}),a.createElement("h1",null,l),a.createElement(o.Z,{location:t,path:"/wiki",title:"Wiki"}),a.createElement(n.Z,{folders:c,location:t,prevTitle:l}))}}}]);
//# sourceMappingURL=component---src-pages-wiki-library-index-js-1bc76784d3ee1da914b7.js.map