(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{GdOh:function(t,e,a){"use strict";a.r(e);var l=a("q1tI"),n=a.n(l),r=a("xPX6"),i=a("Bl7J"),s=a("vrFN"),o=a("U5hm"),E=a("phxV");e.default=function(t){var e=t.location,a="Librerías",l=r.constants.LIBRARY_BASE_PATH,c=[{name:r.constants.LIBRARY_CHARLIE.title,path:l+"/"+r.constants.LIBRARY_CHARLIE.folder},{name:r.constants.LIBRARY_LULE.title,path:l+"/"+r.constants.LIBRARY_LULE.folder}];return n.a.createElement(i.a,{location:e,title:a},n.a.createElement(s.a,{title:a}),n.a.createElement("h1",null,a),n.a.createElement(E.a,{location:e,path:"/wiki",title:"Wiki"}),n.a.createElement(o.a,{folders:c,location:e,title:a}))}},U5hm:function(t,e,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");e.a=function(t){var e=t.folders,a=t.location,l=t.title,i=e.length<3;return n.a.createElement("ol",{className:"folder-list",style:i?{justifyContent:"start"}:null},e.map((function(t){return n.a.createElement("li",{key:t.name,style:i?{marginRight:"var(--spacing-2)"}:null},n.a.createElement(r.Link,{key:t.name,to:t.path,itemProp:"url",state:{prevPath:a.pathname,prevTitle:l}},n.a.createElement("span",null,t.name)))})))}},phxV:function(t,e,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");e.a=function(t){var e,a,l=t.location,i=t.path,s=t.title;i||(i=null===(e=l.state)||void 0===e?void 0:e.prevPath);s||(s=null===(a=l.state)||void 0===a?void 0:a.prevTitle);return i&&s?n.a.createElement(r.Link,{id:"go-back",to:i,itemProp:"url"},n.a.createElement("span",null,"←")," ",s):n.a.createElement("p",null)}},xPX6:function(t,e){e.constants={RECIPE_BASE_PATH:"/wiki/cooking",RECIPE_BREADS:{folder:"breads",title:"Panes"},RECIPE_DESSERTS:{folder:"desserts",title:"Postres"},RECIPE_MAIN_DISHES:{folder:"main_dishes",title:"Principales"},RECIPE_OTHERS:{folder:"others",title:"Otras"},RECIPE_SALADS:{folder:"salads",title:"Ensaladas"},RECIPE_SAUCES:{folder:"sauces",title:"Salsas"},RECIPE_SOUPS:{folder:"soups",title:"Cremas y sopas"},RECIPE_STARTERS:{folder:"starters",title:"Entrantes"},RECIPE_BASES:{folder:"bases",title:"Bases"},RECIPE_BREAKFASTS:{folder:"breakfasts",title:"Desayunos"},LIBRARY_BASE_PATH:"/wiki/library",LIBRARY_CHARLIE:{folder:"charlie",title:"Charlie"},LIBRARY_LULE:{folder:"lule",title:"Lule"}}}}]);
//# sourceMappingURL=component---src-pages-wiki-library-index-js-3cc781022e033b1ffe67.js.map