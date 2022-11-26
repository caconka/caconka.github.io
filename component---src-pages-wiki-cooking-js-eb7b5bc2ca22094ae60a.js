(self.webpackChunkcaconka_blog=self.webpackChunkcaconka_blog||[]).push([[292],{4988:function(e,t){t._={RECIPE_BASE_PATH:"/wiki/cooking",RECIPE_BREADS:{folder:"breads",title:"Panes"},RECIPE_DESSERTS:{folder:"desserts",title:"Postres"},RECIPE_MAIN_DISHES:{folder:"main_dishes",title:"Principales"},RECIPE_OTHERS:{folder:"others",title:"Otras"},RECIPE_SALADS:{folder:"salads",title:"Ensaladas"},RECIPE_SAUCES:{folder:"sauces",title:"Salsas"},RECIPE_SOUPS:{folder:"soups",title:"Cremas y sopas"},RECIPE_STARTERS:{folder:"starters",title:"Entrantes"},RECIPE_BASES:{folder:"bases",title:"Bases"},RECIPE_BREAKFASTS:{folder:"breakfasts_snacks",title:"Desayunos y meriendas"},LIBRARY_BASE_PATH:"/wiki/library",LIBRARY_CHARLIE:{folder:"charlie",title:"Charlie"},LIBRARY_LULE:{folder:"lule",title:"Lule"}}},540:function(e,t,l){"use strict";var a=l(7294),r=l(574);t.Z=e=>{let{folders:t,location:l,prevTitle:n}=e;const i=t.length<3;return a.createElement("ol",{className:"folder-list",style:i?{justifyContent:"start"}:null},t.map((e=>a.createElement("li",{key:e.name,style:i?{marginRight:"var(--spacing-2)"}:null},a.createElement(r.Link,{key:e.name,to:e.path,itemProp:"url",state:{prevPath:l.pathname,prevTitle:n}},a.createElement("span",null,e.name))))))}},6133:function(e,t,l){"use strict";l.d(t,{Z:function(){return i}});var a=l(7294),r=l(574);var n=e=>{let{recipe:t,location:l,containerTitle:n}=e;const{frontmatter:i,fields:s}=t,o=i.img?i.img.childImageSharp.fluid.src:i.image;return a.createElement("li",{key:i.title},a.createElement(r.Link,{key:i.title,to:s.slug,itemProp:"url",state:{prevPath:l.pathname,prevTitle:n}},a.createElement("section",{className:"image"},a.createElement("img",{src:o,alt:i.title})),a.createElement("section",{className:"recipe-spec-container"},a.createElement("div",null,a.createElement("h4",null,i.title),a.createElement("small",{className:"author"},i.author)),a.createElement("div",null,a.createElement("div",{className:"separator-line"}),a.createElement("div",{className:"recipe-spec"},a.createElement("div",{className:"recipe-spec-time"},a.createElement("small",{className:"spec-key"},"Tiempo"),a.createElement("small",null,i.time)),a.createElement("div",{className:"recipe-spec-portion"},a.createElement("small",{className:"spec-key"},"Porción"),a.createElement("small",null,i.portion||"-")))))))};var i=e=>{let{recipes:t,location:l,containerTitle:r}=e;return a.createElement("div",{className:"recipe-list-container"},a.createElement("ul",{className:"recipe-list"},t.map((e=>a.createElement(n,{key:e.frontmatter.title,recipe:e,location:l,containerTitle:r})))))}},8559:function(e,t,l){"use strict";l.r(t);var a=l(7294),r=l(9260),n=l(4988),i=l(4e3),s=l(8183),o=l(540),c=l(6133),E=l(4381);const m="ingredients",d="author",u="title",p=e=>e.ingredients&&e.ingredients.length>0||e.author||e.title,S=e=>({...e,borderRadius:"var(--radius-1)",colors:{...e.colors,primary25:"var(--color-folders)",primary:"var(--color-text-light)"}}),f=e=>{const t={},l={},a={};for(let r of e){const e=r.frontmatter.author;e&&!l[e]&&(l[e]=e);const n=r.frontmatter.title;if(n&&!a[n]&&(a[n]=n),r.frontmatter.ingredients)for(let l of r.frontmatter.ingredients)t[l]||(t[l]=l)}return{ingredientSelect:_(t),authorSelect:_(l),titleSelect:_(a)}},_=e=>{const t=[];for(let l in e)t.push({value:l,label:l});return t.sort(((e,t)=>e.value>t.value))},R=e=>{let{recipes:t,filters:l}=e;return t.filter((e=>{for(let t in l)if(t===u){if(l[t].value!==e.frontmatter.title)return!1}else if(t===m){if(!l[t].every((t=>{var l;return null===(l=e.frontmatter.ingredients)||void 0===l?void 0:l.includes(t)})))return!1}else if(t===d&&l[t]!==e.frontmatter.author)return!1;return!0}))};t.default=e=>{var t;let{data:l,location:m}=e;const _="Recetas",h=n._.RECIPE_BASE_PATH,P=l.allMarkdownRemark.nodes,{0:C,1:I}=(0,a.useState)(P),{0:v,1:A}=(0,a.useState)({}),{ingredientSelect:g,authorSelect:T,titleSelect:k}=f(P),N=[{name:n._.RECIPE_BASES.title,path:h+"/"+n._.RECIPE_BASES.folder},{name:n._.RECIPE_BREAKFASTS.title,path:h+"/"+n._.RECIPE_BREAKFASTS.folder},{name:n._.RECIPE_STARTERS.title,path:h+"/"+n._.RECIPE_STARTERS.folder},{name:n._.RECIPE_SALADS.title,path:h+"/"+n._.RECIPE_SALADS.folder},{name:n._.RECIPE_SOUPS.title,path:h+"/"+n._.RECIPE_SOUPS.folder},{name:n._.RECIPE_MAIN_DISHES.title,path:h+"/"+n._.RECIPE_MAIN_DISHES.folder},{name:n._.RECIPE_SAUCES.title,path:h+"/"+n._.RECIPE_SAUCES.folder},{name:n._.RECIPE_BREADS.title,path:h+"/"+n._.RECIPE_BREADS.folder},{name:n._.RECIPE_DESSERTS.title,path:h+"/"+n._.RECIPE_DESSERTS.folder},{name:n._.RECIPE_OTHERS.title,path:h+"/"+n._.RECIPE_OTHERS.folder}];return a.createElement(i.Z,{location:m,title:_},a.createElement(s.Z,{title:_}),a.createElement("h1",null,_),a.createElement(E.Z,{location:m,title:"Wiki",path:"/wiki"},a.createElement("div",{className:"select select-title"},v.title&&a.createElement("span",{className:"filter-name"},"Título:"),a.createElement(r.ZP,{isClearable:!0,placeholder:"Título",isDisabled:v.author||(null===(t=v.ingredients)||void 0===t?void 0:t.length)>0,value:v.title,options:k,onChange:(e,t)=>{let{action:l}=t;const a={...v};"select-option"===l?a.title=e:delete a[u],A(a),I(R({recipes:P,filters:a}))},theme:S})),a.createElement("div",{className:"select select-author"},v.author&&a.createElement("span",{className:"filter-name"},"Autor:"),a.createElement(r.ZP,{isClearable:!0,placeholder:"Autor",isDisabled:v.title,options:T,onChange:(e,t)=>{let{action:l}=t;const a={...v};let r=P;"select-option"===l?(a.author=e.value,r=C):delete a[d],A(a),I(R({recipes:r,filters:a}))},theme:S})),a.createElement("div",{className:"select select-ingredients"},v.ingredients&&v.ingredients.length>0&&a.createElement("span",{className:"filter-name"},"Ingredientes:"),a.createElement(r.ZP,{closeMenuOnSelect:!1,isMulti:!0,isDisabled:v.title,placeholder:"Ingredientes",options:g,onChange:(e,t)=>{let{action:l}=t;const a={...v,ingredients:e.map((e=>e.value))};A(a),I(R({recipes:"select-option"===l?C:P,filters:a}))},theme:S}))),!p(v)&&a.createElement(o.Z,{folders:N,location:m,prevTitle:_}),p(v)&&a.createElement(c.Z,{recipes:C,location:m,containerTitle:_}))}}}]);
//# sourceMappingURL=component---src-pages-wiki-cooking-js-eb7b5bc2ca22094ae60a.js.map