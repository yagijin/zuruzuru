(self.webpackChunkblog=self.webpackChunkblog||[]).push([[678],{3956:function(e,t,n){"use strict";var l=n(7294),a=n(5444),r=n(2041);t.Z=function(e){return l.createElement("div",{className:"blogcard-main"},l.createElement("h3",null,l.createElement(a.Link,{to:e.blog.frontmatter.url},e.blog.frontmatter.title)),l.createElement(r.Z,{tags:e.blog.frontmatter.tags,isSmall:!0}),l.createElement("p",null,e.blog.frontmatter.description),l.createElement("hr",null))}},2041:function(e,t,n){"use strict";var l=n(7294);t.Z=function(e){var t=e.tags.map((function(e){return l.createElement("div",{key:e,className:"tags-main"},e)}));return l.createElement("div",{className:"tags-container"},t)}},2484:function(e,t,n){"use strict";var l=n(7294);t.Z=function(e){return l.createElement("h2",{id:"title-"+e.title,className:"title-main"},l.createElement("span",null,e.title,e.emoji))}},5821:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var l=n(7294),a=n(5414),r=n(5444),m=n(2484),c=n(3956),u=function(){var e=(0,r.useStaticQuery)("2742411371").allMdx.nodes.map((function(e){return l.createElement(c.Z,{key:e.frontmatter.title,blog:e})}));return l.createElement("div",null,l.createElement(m.Z,{title:"Recent Blogs",emoji:"📖"}),e,l.createElement(r.Link,{to:"/blogs",className:"not-default"},"Show All"))},i=function(){function e(e,t){return Math.floor(Math.random()*(t-e+1))+e}function t(t){var n=document.createElement("span");n.innerHTML="🍜",n.style.position="absolute",n.style.fontSize="xx-large",n.style.top=e(0,t.clientHeight-30)+"px",n.style.left=e(0,t.clientWidth-30)+"px",t.appendChild(n)}return l.createElement("div",{className:"preparing-main"},"Coming Soon",l.createElement("span",{onClick:function(){for(var e=document.getElementsByTagName("body")[0],n=0;n<3;n++)t(e)}},"🍜"),l.createElement("span",{className:"preparing-zuruzuru"},"< ズルズル "))},s=function(){var e=[{name:"Github",url:"https://github.com/yagijin"},{name:"Twitter",url:"https://twitter.com/yagijinjin"},{name:"Instagram",url:"https://www.instagram.com/yagijimjim"},{name:"Blog",url:"https://zuruzurura.men/blogs"}].map((function(e){return l.createElement("a",{key:e.name,href:e.url,target:"_blank",rel:"noopener",className:"sns-main not-default"},e.name)}));return l.createElement("div",{className:"sns-container"},e)},o=function(){return l.createElement(l.Fragment,null,l.createElement("div",{className:"profile-main"},l.createElement("img",{src:"./profile.jpeg"}),l.createElement("div",null,l.createElement("h1",null,"yagijin"),l.createElement("p",null,"よく登呂遺跡に出没します"))),l.createElement("table",{className:"profile-career"},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"現在"),l.createElement("td",null,"Webエンジニア")),l.createElement("tr",null,l.createElement("td",null,"2021"),l.createElement("td",{style:{display:"flex",flexWrap:"wrap"}},l.createElement("span",null,"名城大学大学院"),l.createElement("span",null,"理工学研究科情報工学専攻"))),l.createElement("tr",null,l.createElement("td",null,"2019"),l.createElement("td",null,"名城大学 理工学部情報工学科")))),l.createElement(s,null))},E=function(){return l.createElement("div",{className:"marquee-main"},l.createElement("div",null,l.createElement("span",{className:"marquee-emoji"},"🍜 🐐")))},f=n(3375),p=function(){return l.createElement(l.Fragment,null,l.createElement(a.q,{title:"zuruzuru",defer:!1}),l.createElement("main",{className:"index-main"},l.createElement(E,null),l.createElement(o,null),l.createElement(u,null),l.createElement(m.Z,{title:"その他コンテンツ",emoji:""}),l.createElement(i,null),l.createElement("hr",null)),l.createElement(f.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-60b9ea3636e822897438.js.map