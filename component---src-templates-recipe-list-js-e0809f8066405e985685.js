(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{WclA:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("Bl7J"),i=t("vrFN"),c=t("Wbzz"),m={page:1,name:1},o=function(e){var a=e.location,t=e.pagination,n=t.numPages,r=t.currentPage,i=t.fields,o=[],s={page:n,name:n},p=r+i,u=1;if(r>i&&(u=r-i),r>i+1){var E=u-1;o.push(m),E>1&&o.push({page:0===u?1:u-1,name:"..."})}for(var v=u;v<=p&&(o.push({page:v,name:v}),v!==n);v++);if(p<n){var g=p+1;g<n&&o.push({page:g,name:"..."}),o.push(s)}return l.a.createElement("ol",{className:"pagination"},o.map((function(e){var t=e.page,n=e.name,i="pagination-number"+t;return t===r?l.a.createElement("li",{key:i},l.a.createElement("span",null,n)):l.a.createElement("li",{key:i},l.a.createElement(c.Link,{key:i,to:a.pathname.replace(/(\/[0-9]+$)|\/$/,"")+"/"+(1===t?"":t)},n))})))},s=t("rcZq"),p=t("phxV");a.default=function(e){var a=e.data,t=e.location,n=e.pageContext,c=n.numPages,m=n.currentPage,u=n.title,E=a.allMarkdownRemark.nodes;return l.a.createElement(r.a,{location:t,title:u},l.a.createElement(i.a,{title:u}),l.a.createElement("h1",null,u),l.a.createElement(p.a,{location:t,path:"/wiki/cooking",title:"Recetas"}),l.a.createElement(s.a,{recipes:E,location:t,containerTitle:u}),c>1&&l.a.createElement(o,{location:t,pagination:{numPages:c,currentPage:m,fields:3}}))}},phxV:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("Wbzz");a.a=function(e){var a,t,n=e.location,i=e.path,c=e.title;i||(i=null===(a=n.state)||void 0===a?void 0:a.prevPath);c||(c=null===(t=n.state)||void 0===t?void 0:t.prevTitle);return i&&c?l.a.createElement(r.Link,{id:"go-back",to:i,itemProp:"url"},l.a.createElement("span",null,"←")," ",c):l.a.createElement("p",null)}},rcZq:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),i=function(e){var a=e.recipe,t=e.location,n=e.containerTitle,i=a.frontmatter,c=a.fields,m=i.img?i.img.childImageSharp.fluid.src:i.image;return l.a.createElement("li",{key:i.title},l.a.createElement(r.Link,{key:i.title,to:c.slug,itemProp:"url",state:{prevPath:t.pathname,prevTitle:n}},l.a.createElement("section",{className:"image"},l.a.createElement("img",{src:m,alt:i.title})),l.a.createElement("section",{className:"recipe-spec-container"},l.a.createElement("div",null,l.a.createElement("h4",null,i.title),l.a.createElement("small",{className:"author"},i.author)),l.a.createElement("div",null,l.a.createElement("div",{className:"separator-line"}),l.a.createElement("div",{className:"recipe-spec"},l.a.createElement("div",{className:"recipe-spec-time"},l.a.createElement("small",{className:"spec-key"},"Tiempo"),l.a.createElement("small",null,i.time)),l.a.createElement("div",{className:"recipe-spec-portion"},l.a.createElement("small",{className:"spec-key"},"Porción"),l.a.createElement("small",null,i.portion||"-")))))))};a.a=function(e){var a=e.recipes,t=e.location,n=e.containerTitle;return l.a.createElement("div",{className:"recipe-list-container"},l.a.createElement("ul",{className:"recipe-list"},a.map((function(e){return l.a.createElement(i,{key:e.frontmatter.title,recipe:e,location:t,containerTitle:n})}))))}}}]);
//# sourceMappingURL=component---src-templates-recipe-list-js-e0809f8066405e985685.js.map