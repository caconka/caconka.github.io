(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{WclA:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("Bl7J"),c=t("vrFN"),i=t("Wbzz"),o={page:1,name:1},m=function(e){var a=e.location,t=e.pagination,n=t.numPages,r=t.currentPage,c=t.fields,m=[],s={page:n,name:n},p=r+c,u=1;if(r>c&&(u=r-c),r>c+1){var E=u-1;m.push(o),E>1&&m.push({page:0===u?1:u-1,name:"..."})}for(var v=u;v<=p&&(m.push({page:v,name:v}),v!==n);v++);if(p<n){var d=p+1;d<n&&m.push({page:d,name:"..."}),m.push(s)}return console.log(m),l.a.createElement("ol",{className:"pagination"},m.map((function(e){var t=e.page,n=e.name,c="pagination-number"+t;return t===r?l.a.createElement("li",{key:c},l.a.createElement("span",null,n)):l.a.createElement("li",{key:c},l.a.createElement(i.Link,{key:c,to:a.pathname.replace(/(\/[0-9]+$)|\/$/,"")+"/"+(1===t?"":t)},n))})))},s=t("rcZq"),p=t("phxV");a.default=function(e){var a=e.data,t=e.location,n=e.pageContext,i=n.numPages,o=n.currentPage,u=n.title,E=a.allMarkdownRemark.nodes;return l.a.createElement(r.a,{location:t,title:u},l.a.createElement(c.a,{title:u}),l.a.createElement("h1",null,u),l.a.createElement(p.a,{location:t,path:"/wiki/cooking",title:"Recetas"}),l.a.createElement(s.a,{recipes:E,location:t,containerTitle:u}),i>1&&l.a.createElement(m,{location:t,pagination:{numPages:i,currentPage:o,fields:3}}))}},phxV:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("Wbzz");a.a=function(e){var a,t,n=e.location,c=e.path,i=e.title;c||(c=null===(a=n.state)||void 0===a?void 0:a.prevPath);i||(i=null===(t=n.state)||void 0===t?void 0:t.prevTitle);return c&&i?l.a.createElement(r.Link,{id:"go-back",to:c,itemProp:"url"},l.a.createElement("span",null,"←")," ",i):l.a.createElement("p",null)}},rcZq:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=function(e){var a=e.recipe,t=e.location,c=e.containerTitle,i=a.frontmatter,o=a.fields,m=Object(n.useState)(!1),s=m[0],p=m[1];return l.a.createElement("li",{key:i.title},l.a.createElement(r.Link,{key:i.title,to:o.slug,itemProp:"url",state:{prevPath:t.pathname,prevTitle:c}},l.a.createElement("section",{className:"image"},s?null:l.a.createElement("div",{className:"skeleton"}),l.a.createElement("img",{src:i.image,onLoad:function(){return p(!s)},alt:i.title,style:{display:s?void 0:"none"}})),l.a.createElement("section",{className:"recipe-spec-container"},l.a.createElement("div",null,l.a.createElement("h4",null,i.title),l.a.createElement("small",{className:"author"},i.author)),l.a.createElement("div",null,l.a.createElement("div",{className:"separator-line"}),l.a.createElement("div",{className:"recipe-spec"},l.a.createElement("div",{className:"recipe-spec-time"},l.a.createElement("small",{className:"spec-key"},"Tiempo"),l.a.createElement("small",null,i.time)),l.a.createElement("div",{className:"recipe-spec-portion"},l.a.createElement("small",{className:"spec-key"},"Porción"),l.a.createElement("small",null,i.portion||"-")))))))};a.a=function(e){var a=e.recipes,t=e.location,n=e.containerTitle;return l.a.createElement("div",{className:"recipe-list-container"},l.a.createElement("ul",{className:"recipe-list"},a.map((function(e){return l.a.createElement(c,{key:e.frontmatter.title,recipe:e,location:t,containerTitle:n})}))))}}}]);
//# sourceMappingURL=component---src-templates-recipe-list-js-7ed95c0e862df3cfefa7.js.map