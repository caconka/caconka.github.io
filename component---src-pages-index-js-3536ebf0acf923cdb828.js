"use strict";(self.webpackChunkcaconka_blog=self.webpackChunkcaconka_blog||[]).push([[678],{4558:function(e,t,a){var l=a(7294),n=a(574);t.Z=e=>{let{location:t,posts:a,withAuthor:o,withoutDate:r,prevTitle:s}=e;return l.createElement("ol",{className:"no-style"},a.map((e=>{const a=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug,className:"post-list-item"},l.createElement("div",{className:"meta"},!r&&l.createElement("time",{dateTime:e.frontmatter.date},e.frontmatter.date),o&&l.createElement("span",null,e.frontmatter.author)),l.createElement(n.Link,{to:e.fields.slug,itemProp:"url",state:{prevPath:t.pathname,prevTitle:s}},l.createElement("span",null,a))," ")})))}},6558:function(e,t,a){a.r(t);var l=a(7294),n=a(4e3),o=a(8183),r=a(4558);t.default=e=>{var t;let{data:a,location:s}=e;const i=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=a.allMarkdownRemark.nodes;return 0===c.length?l.createElement(n.Z,{location:s,title:i},l.createElement(o.Z,{title:"Writings"}),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(n.Z,{location:s,title:i},l.createElement(o.Z,{title:"Writings"}),l.createElement("span",{className:"sub-title"},"Entradas"),l.createElement(r.Z,{posts:c,location:s,prevTitle:"Home"}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-3536ebf0acf923cdb828.js.map