(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{U5hm:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz");t.a=function(e){var t=e.folders,a=e.location,n=e.title;return t||(t=[]),r.a.createElement("ol",{className:"folder-list"},t.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(l.Link,{key:e.name,to:e.path,itemProp:"url",state:{prevPath:a.pathname,prevTitle:n}},r.a.createElement("span",null,e.name)))})))}},d3OC:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Cs6D"),i=a("xPX6"),s=a("Bl7J"),o=a("vrFN"),c=a("phxV"),E=a("U5hm"),m=a("rcZq");function u(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var f="ingredients",p="author",S=function(e){return e.ingredients&&e.ingredients.length>0||e.author},v=function(e){return Object.assign({},e,{borderRadius:"var(--radius-1)",colors:Object.assign({},e.colors,{primary25:"var(--color-folders)",primary:"var(--color-text-light)"})})},R=function(e){for(var t,a={},n=u(e);!(t=n()).done;){var r=t.value;if(r.frontmatter.ingredients)for(var l,i=u(r.frontmatter.ingredients);!(l=i()).done;){var s=l.value;a[s]||(a[s]=s)}}return I(a)},h=function(e){for(var t,a={},n=u(e);!(t=n()).done;){var r=t.value.frontmatter.author;r&&!a[r]&&(a[r]=r)}return I(a)},I=function(e){var t=[];for(var a in e)t.push({value:a,label:a});return t.sort((function(e,t){return e.value>t.value}))},P=function(e){var t=e.recipes,a=e.filters;return t.filter((function(e){for(var t in a)if(t===f){if(!a[t].every((function(t){var a;return null===(a=e.frontmatter.ingredients)||void 0===a?void 0:a.includes(t)})))return!1}else if(t===p&&a[t]!==e.frontmatter.author)return!1;return!0}))};t.default=function(e){var t=e.data,a=e.location,u="Recetas",d=i.constants.RECIPE_BASE_PATH,f=t.allMarkdownRemark.nodes,I=Object(n.useState)(f),A=I[0],C=I[1],_=Object(n.useState)({}),g=_[0],b=_[1],y=Object(n.useState)(!1),N=y[0],T=y[1],k=R(f),O=h(f),B=[{name:i.constants.RECIPE_BASES.title,path:d+"/"+i.constants.RECIPE_BASES.folder},{name:i.constants.RECIPE_BREAKFASTS.title,path:d+"/"+i.constants.RECIPE_BREAKFASTS.folder},{name:i.constants.RECIPE_STARTERS.title,path:d+"/"+i.constants.RECIPE_STARTERS.folder},{name:i.constants.RECIPE_SALADS.title,path:d+"/"+i.constants.RECIPE_SALADS.folder},{name:i.constants.RECIPE_SOUPS.title,path:d+"/"+i.constants.RECIPE_SOUPS.folder},{name:i.constants.RECIPE_MAIN_DISHES.title,path:d+"/"+i.constants.RECIPE_MAIN_DISHES.folder},{name:i.constants.RECIPE_SAUCES.title,path:d+"/"+i.constants.RECIPE_SAUCES.folder},{name:i.constants.RECIPE_BREADS.title,path:d+"/"+i.constants.RECIPE_BREADS.folder},{name:i.constants.RECIPE_DESSERTS.title,path:d+"/"+i.constants.RECIPE_DESSERTS.folder},{name:i.constants.RECIPE_OTHERS.title,path:d+"/"+i.constants.RECIPE_OTHERS.folder}];return r.a.createElement(s.a,{location:a,title:u},r.a.createElement(o.a,{title:u}),r.a.createElement("h1",null,u),r.a.createElement("div",{className:N?"back-filter expanded":"back-filter"},r.a.createElement(c.a,{location:a,path:"/wiki",title:"Wiki"}),r.a.createElement("button",{className:N?"active":"",onClick:function(){return T(!N)}},r.a.createElement("span",{className:N?"active":"disabled"},"↿"),r.a.createElement("span",{className:N?"disabled":"active"},"⇃"),"Filtros")),N&&r.a.createElement("div",{className:"cooking-filter"},r.a.createElement("div",{className:"select-author"},g.author&&r.a.createElement("span",{className:"filter-name"},"Autor:"),r.a.createElement(l.a,{isClearable:!0,placeholder:"Autor",options:O,onChange:function(e,t){var a=t.action,n=Object.assign({},g),r=f;"select-option"===a?(n.author=e.value,r=A):delete n[p],b(n),C(P({recipes:r,filters:n}))},theme:v})),r.a.createElement("div",{className:"select-ingredients"},g.ingredients&&g.ingredients.length>0&&r.a.createElement("span",{className:"filter-name"},"Ingredientes:"),r.a.createElement(l.a,{closeMenuOnSelect:!1,isMulti:!0,placeholder:"Ingredientes",options:k,onChange:function(e,t){var a=t.action,n=Object.assign({},g,{ingredients:e.map((function(e){return e.value}))});b(n),C(P({recipes:"select-option"===a?A:f,filters:n}))},theme:v}))),!S(g)&&r.a.createElement(E.a,{folders:B,location:a,title:u}),S(g)&&r.a.createElement(m.a,{recipes:A,location:a,containerTitle:u}))}},rcZq:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=function(e){var t=e.recipe,a=e.location,i=e.containerTitle,s=t.frontmatter,o=t.fields,c=s.img?s.img.childImageSharp.fluid.src:s.image,E=Object(n.useState)(!1),m=E[0],u=E[1];return r.a.createElement("li",{key:s.title},r.a.createElement(l.Link,{key:s.title,to:o.slug,itemProp:"url",state:{prevPath:a.pathname,prevTitle:i}},r.a.createElement("section",{className:"image"},m?null:r.a.createElement("div",{className:"skeleton"}),r.a.createElement("img",{src:c,onLoad:function(){return u(!0)},alt:s.title,style:{display:m?void 0:"none"}})),r.a.createElement("section",{className:"recipe-spec-container"},r.a.createElement("div",null,r.a.createElement("h4",null,s.title),r.a.createElement("small",{className:"author"},s.author)),r.a.createElement("div",null,r.a.createElement("div",{className:"separator-line"}),r.a.createElement("div",{className:"recipe-spec"},r.a.createElement("div",{className:"recipe-spec-time"},r.a.createElement("small",{className:"spec-key"},"Tiempo"),r.a.createElement("small",null,s.time)),r.a.createElement("div",{className:"recipe-spec-portion"},r.a.createElement("small",{className:"spec-key"},"Porción"),r.a.createElement("small",null,s.portion||"-")))))))};t.a=function(e){var t=e.recipes,a=e.location,n=e.containerTitle;return r.a.createElement("div",{className:"recipe-list-container"},r.a.createElement("ul",{className:"recipe-list"},t.map((function(e){return r.a.createElement(i,{key:e.frontmatter.title,recipe:e,location:a,containerTitle:n})}))))}},xPX6:function(e,t){t.constants={RECIPE_BASE_PATH:"/wiki/cooking",RECIPE_BREADS:{folder:"breads",title:"Panes"},RECIPE_DESSERTS:{folder:"desserts",title:"Postres"},RECIPE_MAIN_DISHES:{folder:"main_dishes",title:"Principales"},RECIPE_OTHERS:{folder:"others",title:"Otras"},RECIPE_SALADS:{folder:"salads",title:"Ensaladas"},RECIPE_SAUCES:{folder:"sauces",title:"Salsas"},RECIPE_SOUPS:{folder:"soups",title:"Cremas y sopas"},RECIPE_STARTERS:{folder:"starters",title:"Entrantes"},RECIPE_BASES:{folder:"bases",title:"Bases"},RECIPE_BREAKFASTS:{folder:"breakfasts",title:"Desayunos"},LIBRARY_BASE_PATH:"/wiki/library",LIBRARY_CHARLIE:{folder:"charlie",title:"Charlie"},LIBRARY_LULE:{folder:"lule",title:"Lule"}}}}]);
//# sourceMappingURL=component---src-pages-wiki-cooking-js-6c26e81e9b1cec68ec58.js.map