(self.webpackChunkblog=self.webpackChunkblog||[]).push([[216],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,l){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},1274:function(e,t,r){var n=r(1048);e.exports={MDXRenderer:n}},1048:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),l=r(7316),c=["scope","children"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(3191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,c),u=f(t),m=i.useMemo((function(){if(!r)return null;var e=s({React:i,mdx:p},u),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return i.createElement(m,s({},a))}},6015:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7294),o=r(5414),a=r(4983),l=r(5444),c=r(1274),u=r(3375),s=r(5072),i=r(2041),p=function(){return n.createElement(o.q,null,n.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Noto+Sans+JP&effect=anaglyph|emboss|fire|fire-animation|neon|outline|shadow-multiple|3d|3d-float|"}))},f=function(e){var t="https://zuruzurura.men";return n.createElement(o.q,null,n.createElement("title",null,e.title),n.createElement("meta",{property:"og:url",content:t+e.url}),n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"og:title",content:e.title}),n.createElement("meta",{property:"og:description",content:e.description}),n.createElement("meta",{property:"og:site_name",content:"zuruzurura.men"}),n.createElement("meta",{property:"og:image",content:t+"/ogp/ogp_"+e.title+".png"}))},m={Link:l.Link,GoogleFonts:p};function d(e){var t=e.data.mdx;return n.createElement(n.Fragment,null,n.createElement(f,{title:t.frontmatter.title,description:t.frontmatter.description,url:t.frontmatter.url}),n.createElement("main",{className:"blog-template-main"},n.createElement(s.Z,{link:"/blogs",title:"Blog"}),n.createElement("p",{className:"blog-template-date"},t.frontmatter.date),n.createElement("h1",{className:"blog-template-title"},t.frontmatter.title),n.createElement(i.Z,{tags:t.frontmatter.tags}),n.createElement(a.MDXProvider,{components:m},n.createElement(c.MDXRenderer,{frontmatter:t.frontmatter},t.body)),n.createElement("hr",null)),n.createElement(u.Z,null))}},5072:function(e,t,r){"use strict";var n=r(7294),o=r(5444);t.Z=function(e){return n.createElement(n.Fragment,null,n.createElement("header",{className:"header-main"},n.createElement(o.Link,{to:e.link,className:"header-title not-default"},n.createElement("h1",null,n.createElement("span",{className:"header-name"},e.title,"🍜"),n.createElement("span",{className:"header-zuruzuru"},"< ズルズル "))),n.createElement(o.Link,{to:"/",className:"not-default"},n.createElement("p",null,"＞Topへ"))))}},2041:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.tags.map((function(e){return n.createElement("div",{key:e,className:"tags-main"},e)}));return n.createElement("div",{className:"tags-container"},t)}}}]);
//# sourceMappingURL=component---src-components-blog-template-js-4f9a42d0fa9a8f37baee.js.map