(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{I5CP:function(t,e,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");e.a=function(t){var e=t.location,a=t.posts,l=t.withAuthor,i=t.withoutDate,o=t.prevTitle;return n.a.createElement("ol",{className:"no-style"},a.map((function(t){var a=t.frontmatter.title||t.fields.slug;return n.a.createElement("li",{key:t.fields.slug,className:"post-list-item"},n.a.createElement("div",{className:"meta"},!i&&n.a.createElement("time",{dateTime:t.frontmatter.date},t.frontmatter.date),l&&n.a.createElement("span",null,t.frontmatter.author)),n.a.createElement(r.Link,{to:t.fields.slug,itemProp:"url",state:{prevPath:e.pathname,prevTitle:o}},n.a.createElement("span",null,a))," ")})))}},Mlnk:function(t,e,a){"use strict";a.r(e);var l=a("q1tI"),n=a.n(l),r=a("Bl7J"),i=a("vrFN"),o=a("I5CP"),s=a("phxV");e.default=function(t){var e=t.data,a=t.location,l=t.path,c=t.prevTitle,u="Guitarra";return console.log(e),n.a.createElement(r.a,{location:a,title:u},n.a.createElement(i.a,{title:u}),n.a.createElement("h1",null,u),n.a.createElement(s.a,{location:a,path:l,title:c}),n.a.createElement("span",{className:"sub-title"},"Tablaturas"),n.a.createElement(o.a,{posts:e.allMarkdownRemark.nodes,location:a,withAuthor:!0,withoutDate:!0,prevTitle:u}))}},phxV:function(t,e,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");e.a=function(t){var e,a,l=t.location,i=t.path,o=t.title;i||(i=null===(e=l.state)||void 0===e?void 0:e.prevPath);o||(o=null===(a=l.state)||void 0===a?void 0:a.prevTitle);return i&&o?n.a.createElement(r.Link,{id:"go-back",to:i,itemProp:"url"},n.a.createElement("span",null,"←")," ",o):n.a.createElement("p",null)}}}]);
//# sourceMappingURL=component---src-pages-wiki-guitar-js-bbc79f00ccd8c37fce81.js.map