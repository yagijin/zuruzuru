(self.webpackChunkzuruzurura_men=self.webpackChunkzuruzurura_men||[]).push([[536],{8218:function(e,t,r){"use strict";r.d(t,{$:function(){return a},o:function(){return o}});var n=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},o=function(e){if(null!=e){var t=document.createElement("span");return t.innerHTML="🍜",t.style.position="absolute",t.style.fontSize="xx-large",t.style.top=n(0,e.clientHeight-30)+"px",t.style.left=n(0,e.clientWidth-30)+"px",e.appendChild(t),t}},a=function(e){e.forEach((function(e){e.remove()}))}},4474:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7294),o=r(8218),a=function(){return n.createElement("div",{className:"Ramen-module--container--WN74a"},n.createElement("span",{onClick:function(){for(var e=0;e<3;e++){var t;(0,o.o)(null===(t=document.getElementsByTagName("body"))||void 0===t?void 0:t[0])}}},"🍜"),n.createElement("span",null,"< ズルズル "))}},3323:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294),o=function(e){var t=e.tags;return n.createElement("div",{className:"Tags-module--container--LSsc-"},t.map((function(e){return n.createElement("div",{key:e,className:"Tags-module--tag--sP4NK"},"#"+e)})))}},2401:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),o=r(1597),a=function(e){return n.createElement("header",{className:"Header-module--header--Kpy8C"},n.createElement(o.Link,{to:e.link,className:"Header-module--title--WzkVu not-default"},n.createElement("h1",null,n.createElement("span",{className:"Header-module--name--3bcv+"},e.title,"🍜"),n.createElement("span",{className:"Header-module--zuruzuru--DdP8M"},"< ズルズル "))),n.createElement(o.Link,{to:"/",className:"Header-module--link--eca+y"},"トップへ"))},l=r(4016),u=function(){return n.createElement(n.Fragment,null,n.createElement(l.Z,null),n.createElement("footer",{className:"Footer-module--footer--zaR3N"},n.createElement("hr",null),n.createElement(o.Link,{to:"/privacy"},"Privacy Policy"),n.createElement("p",null,"© 2019-",(new Date).getFullYear()," yagijin, All Rights Reserved.")))},c=r(9738),i=function(e){var t=e.children,r=e.head,o=e.filename,l=e.wrapperClassName,i=void 0===l?"page-wrapper-60":l,s=e.hasHeader,f=void 0===s||s,m=e.hasFooter,p=void 0===m||m;return n.createElement(n.Fragment,null,n.createElement(c.Z,{info:r,filename:o}),n.createElement("div",{className:i},f&&n.createElement(a,{title:r.title,link:"./"}),n.createElement("main",null,t),p&&n.createElement(u,null)))}},5504:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(7294),o=r(4983),a=r(1597),l=r(1955),u=r(2401),c=r(4474),i=r(3323),s=function(e){return n.createElement("div",{className:"GoogleMap-module--map--5wREP"},n.createElement("iframe",{src:e.url,width:"600",height:"450",frameBorder:"0",allowFullScreen:!1,loading:"lazy"}))},f=r(4016),m=r(5414),p=function(e){return n.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.createElement(m.q,null,n.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"})),e.children)},d={Link:a.Link,GoogleFonts:f.Z,GoogleMap:s,Twitter:p};function y(e){var t=e.data.mdx;return n.createElement(u.Z,{head:{title:t.frontmatter.title,type:"article",description:t.frontmatter.description,url:t.frontmatter.url},filename:"ogp_"+t.frontmatter.title.toLocaleLowerCase()+".png",hasHeader:!1},n.createElement("h2",{className:"blog-module--zuruzuru--vq0fP"},"Zuruzuru Blog ",n.createElement(c.Z,null)),n.createElement("div",{className:"blog-module--menu--fVPkf"},n.createElement(a.Link,{to:"/blogs"},"👉ブログ一覧へ"),n.createElement(a.Link,{to:"/"},"👉トップページへ")),n.createElement("div",{className:"blog-module--blog--yO7Sz"},n.createElement("p",{className:"blog-module--date--+WPQf"},t.frontmatter.date),n.createElement("h1",{className:"blog-module--title--TdY0b"},t.frontmatter.title),n.createElement(i.Z,{tags:t.frontmatter.tags}),n.createElement(o.MDXProvider,{components:d},n.createElement(l.MDXRenderer,{frontmatter:t.frontmatter},t.body))))}},1955:function(e,t,r){var n=r(7927);e.exports={MDXRenderer:n}},7927:function(e,t,r){var n=r(861),o=r(3515),a=r(8416),l=r(7071),u=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),f=r(4983).mdx,m=r(2174).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,u),c=m(t),p=s.useMemo((function(){if(!r)return null;var e=i({React:s,mdx:f},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return s.createElement(p,i({},a))}},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var n=r(6015),o=r(9617);function a(t,r,l){return o()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),o=r(9498),a=r(6116),l=r(2281);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-blog-tsx-9ca2cbcb1a18a0ff3dfa.js.map