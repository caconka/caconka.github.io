(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{U5hm:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz");t.a=function(e){var t=e.folders,a=e.location,n=e.title;return t||(t=[]),r.a.createElement("ol",{className:"folder-list"},t.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(l.Link,{key:e.name,to:e.path,itemProp:"url",state:{prevPath:a.pathname,prevTitle:n}},r.a.createElement("span",null,e.name)))})))}},d3OC:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Cs6D"),i=a("xPX6"),s=a("Bl7J"),o=a("vrFN"),c=a("U5hm"),E=a("rcZq"),m=a("JM3L");function u(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var d="ingredients",p="author",S="title",h=function(e){return e.ingredients&&e.ingredients.length>0||e.author||e.title},v=function(e){return Object.assign({},e,{borderRadius:"var(--radius-1)",colors:Object.assign({},e.colors,{primary25:"var(--color-folders)",primary:"var(--color-text-light)"})})},R=function(e){for(var t,a={},n={},r={},l=u(e);!(t=l()).done;){var i=t.value,s=i.frontmatter.author;s&&!n[s]&&(n[s]=s);var o=i.frontmatter.title;if(o&&!r[o]&&(r[o]=o),i.frontmatter.ingredients)for(var c,E=u(i.frontmatter.ingredients);!(c=E()).done;){var m=c.value;a[m]||(a[m]=m)}}return{ingredientSelect:I(a),authorSelect:I(n),titleSelect:I(r)}},I=function(e){var t=[];for(var a in e)t.push({value:a,label:a});return t.sort((function(e,t){return e.value>t.value}))},P=function(e){var t=e.recipes,a=e.filters;return t.filter((function(e){for(var t in a)if(t===S){if(a[t].value!==e.frontmatter.title)return!1}else if(t===d){if(!a[t].every((function(t){var a;return null===(a=e.frontmatter.ingredients)||void 0===a?void 0:a.includes(t)})))return!1}else if(t===p&&a[t]!==e.frontmatter.author)return!1;return!0}))};t.default=function(e){var t,a=e.data,u=e.location,f="Recetas",d=i.constants.RECIPE_BASE_PATH,I=a.allMarkdownRemark.nodes,C=Object(n.useState)(I),A=C[0],g=C[1],_=Object(n.useState)({}),b=_[0],y=_[1],T=R(I),N=T.ingredientSelect,k=T.authorSelect,O=T.titleSelect,B=[{name:i.constants.RECIPE_BASES.title,path:d+"/"+i.constants.RECIPE_BASES.folder},{name:i.constants.RECIPE_BREAKFASTS.title,path:d+"/"+i.constants.RECIPE_BREAKFASTS.folder},{name:i.constants.RECIPE_STARTERS.title,path:d+"/"+i.constants.RECIPE_STARTERS.folder},{name:i.constants.RECIPE_SALADS.title,path:d+"/"+i.constants.RECIPE_SALADS.folder},{name:i.constants.RECIPE_SOUPS.title,path:d+"/"+i.constants.RECIPE_SOUPS.folder},{name:i.constants.RECIPE_MAIN_DISHES.title,path:d+"/"+i.constants.RECIPE_MAIN_DISHES.folder},{name:i.constants.RECIPE_SAUCES.title,path:d+"/"+i.constants.RECIPE_SAUCES.folder},{name:i.constants.RECIPE_BREADS.title,path:d+"/"+i.constants.RECIPE_BREADS.folder},{name:i.constants.RECIPE_DESSERTS.title,path:d+"/"+i.constants.RECIPE_DESSERTS.folder},{name:i.constants.RECIPE_OTHERS.title,path:d+"/"+i.constants.RECIPE_OTHERS.folder}];return r.a.createElement(s.a,{location:u,title:f},r.a.createElement(o.a,{title:f}),r.a.createElement("h1",null,f),r.a.createElement(m.a,{location:u,title:"Wiki",path:"/wiki"},r.a.createElement("div",{className:"select select-title"},b.title&&r.a.createElement("span",{className:"filter-name"},"Título:"),r.a.createElement(l.a,{isClearable:!0,placeholder:"Título",isDisabled:b.author||(null===(t=b.ingredients)||void 0===t?void 0:t.length)>0,value:b.title,options:O,onChange:function(e,t){var a=t.action,n=Object.assign({},b);"select-option"===a?n.title=e:delete n[S],y(n),g(P({recipes:I,filters:n}))},theme:v})),r.a.createElement("div",{className:"select select-author"},b.author&&r.a.createElement("span",{className:"filter-name"},"Autor:"),r.a.createElement(l.a,{isClearable:!0,placeholder:"Autor",isDisabled:b.title,options:k,onChange:function(e,t){var a=t.action,n=Object.assign({},b),r=I;"select-option"===a?(n.author=e.value,r=A):delete n[p],y(n),g(P({recipes:r,filters:n}))},theme:v})),r.a.createElement("div",{className:"select select-ingredients"},b.ingredients&&b.ingredients.length>0&&r.a.createElement("span",{className:"filter-name"},"Ingredientes:"),r.a.createElement(l.a,{closeMenuOnSelect:!1,isMulti:!0,isDisabled:b.title,placeholder:"Ingredientes",options:N,onChange:function(e,t){var a=t.action,n=Object.assign({},b,{ingredients:e.map((function(e){return e.value}))});y(n),g(P({recipes:"select-option"===a?A:I,filters:n}))},theme:v}))),!h(b)&&r.a.createElement(c.a,{folders:B,location:u,title:f}),h(b)&&r.a.createElement(E.a,{recipes:A,location:u,containerTitle:f}))}},rcZq:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=function(e){var t=e.recipe,a=e.location,n=e.containerTitle,i=t.frontmatter,s=t.fields,o=i.img?i.img.childImageSharp.fluid.src:i.image;return r.a.createElement("li",{key:i.title},r.a.createElement(l.Link,{key:i.title,to:s.slug,itemProp:"url",state:{prevPath:a.pathname,prevTitle:n}},r.a.createElement("section",{className:"image"},r.a.createElement("img",{src:o,alt:i.title})),r.a.createElement("section",{className:"recipe-spec-container"},r.a.createElement("div",null,r.a.createElement("h4",null,i.title),r.a.createElement("small",{className:"author"},i.author)),r.a.createElement("div",null,r.a.createElement("div",{className:"separator-line"}),r.a.createElement("div",{className:"recipe-spec"},r.a.createElement("div",{className:"recipe-spec-time"},r.a.createElement("small",{className:"spec-key"},"Tiempo"),r.a.createElement("small",null,i.time)),r.a.createElement("div",{className:"recipe-spec-portion"},r.a.createElement("small",{className:"spec-key"},"Porción"),r.a.createElement("small",null,i.portion||"-")))))))};t.a=function(e){var t=e.recipes,a=e.location,n=e.containerTitle;return r.a.createElement("div",{className:"recipe-list-container"},r.a.createElement("ul",{className:"recipe-list"},t.map((function(e){return r.a.createElement(i,{key:e.frontmatter.title,recipe:e,location:a,containerTitle:n})}))))}},xPX6:function(e,t){t.constants={RECIPE_BASE_PATH:"/wiki/cooking",RECIPE_BREADS:{folder:"breads",title:"Panes"},RECIPE_DESSERTS:{folder:"desserts",title:"Postres"},RECIPE_MAIN_DISHES:{folder:"main_dishes",title:"Principales"},RECIPE_OTHERS:{folder:"others",title:"Otras"},RECIPE_SALADS:{folder:"salads",title:"Ensaladas"},RECIPE_SAUCES:{folder:"sauces",title:"Salsas"},RECIPE_SOUPS:{folder:"soups",title:"Cremas y sopas"},RECIPE_STARTERS:{folder:"starters",title:"Entrantes"},RECIPE_BASES:{folder:"bases",title:"Bases"},RECIPE_BREAKFASTS:{folder:"breakfasts",title:"Desayunos"},LIBRARY_BASE_PATH:"/wiki/library",LIBRARY_CHARLIE:{folder:"charlie",title:"Charlie"},LIBRARY_LULE:{folder:"lule",title:"Lule"}}}}]);
//# sourceMappingURL=component---src-pages-wiki-cooking-js-c851ccf46c5d27314372.js.map