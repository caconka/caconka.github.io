(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{I5CP:function(t,e,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz");e.a=function(t){var e=t.location,a=t.posts,n=t.withAuthor;return l.a.createElement("ol",{className:"no-style"},a.map((function(t){var a=t.frontmatter.title||t.fields.slug;return l.a.createElement("li",{key:t.fields.slug,className:"post-list-item"},l.a.createElement("div",{className:"meta"},l.a.createElement("time",{dateTime:t.frontmatter.date},t.frontmatter.date)),l.a.createElement(r.Link,{to:t.fields.slug,itemProp:"url",state:{prevPath:e.pathname,prevTitle:"Home"}},n&&l.a.createElement("span",null,t.frontmatter.author," ~ ",a),!n&&l.a.createElement("span",null,a))," ")})))}},RXBc:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),l=a.n(n),r=a("Bl7J"),o=a("vrFN"),i=a("I5CP");e.default=function(t){var e,a=t.data,n=t.location,s=(null===(e=a.site.siteMetadata)||void 0===e?void 0:e.title)||"Title",c=a.allMarkdownRemark.nodes;return 0===c.length?l.a.createElement(r.a,{location:n,title:s},l.a.createElement(o.a,{title:"Writings"}),l.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.a.createElement(r.a,{location:n,title:s},l.a.createElement(o.a,{title:"Writings"}),l.a.createElement("span",{className:"sub-title"},"Entradas"),l.a.createElement(i.a,{posts:c,location:n}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-3f2e1e7cbd1b766d0131.js.map