(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{135:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(146);t.default=function(){return r.a.createElement(i.a,null,"Found Nothing!!!")}},141:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(140),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(141),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(147),r=n.n(a),i=n(148),o=n.n(i),u=new r.a(o.a),c=u.rhythm;u.scale,u.options},144:function(e){e.exports={data:{site:{siteMetadata:{siteName:"Gatsby site"}}}}},145:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(48),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},146:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(144),o=n(142),u=function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},r.a.createElement(o.Link,{to:e.to},e.children))},c=function(){return r.a.createElement(o.StaticQuery,{query:"871777783",render:function(e){return r.a.createElement("header",{style:{marginBottom:"1.5rem"}},e&&r.a.createElement(o.Link,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},r.a.createElement("h3",{style:{display:"inline"}},e.site.siteMetadata.siteName)),r.a.createElement("ul",{style:{listStyle:"none",float:"right"}},r.a.createElement(u,{to:"/"},"Home"),r.a.createElement(u,{to:"/content/"},"Content"),r.a.createElement(u,{to:"/about/"},"About")))},data:i})},l=n(143);t.a=function(e){var t=e.children;return a.createElement("div",{style:{margin:"0 auto",marginBottom:Object(l.a)(1.5),marginTop:Object(l.a)(1.5),maxWidth:650,paddingLeft:Object(l.a)(.75),paddingRight:Object(l.a)(.75)}},a.createElement(c,null),t)}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-e01be523825181135436.js.map