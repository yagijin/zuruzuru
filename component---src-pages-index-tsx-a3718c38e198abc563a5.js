"use strict";(self.webpackChunkzuruzurura_men=self.webpackChunkzuruzurura_men||[]).push([[691],{4462:function(e,t,n){n.d(t,{$:function(){return a},o:function(){return r}});var l=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},r=function(e){var t=document.createElement("span");return t.innerHTML="🍜",t.style.position="absolute",t.style.fontSize="xx-large",t.style.top=l(0,e.clientHeight-30)+"px",t.style.left=l(0,e.clientWidth-30)+"px",e.appendChild(t),t},a=function(e){e.forEach((function(e){e.remove()}))}},7455:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(7294),r=n(1597),a=n(2015),m=function(e){var t=e.blog;return l.createElement("div",{className:"BlogCard-module--card--HGaGG"},l.createElement("h3",null,l.createElement(r.Link,{to:t.frontmatter.url},t.frontmatter.title)),l.createElement(a.Z,{tags:t.frontmatter.tags}),l.createElement("p",null,t.frontmatter.description))}},2015:function(e,t,n){n.d(t,{Z:function(){return r}});var l=n(7294),r=function(e){var t=e.tags;return l.createElement("div",{className:"Tags-module--container--3AKtl"},t.map((function(e){return l.createElement("div",{key:e,className:"Tags-module--tag--wBR2o"},"#"+e)})))}},6604:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var l=n(7294),r=n(1597),a=n(4462),m=function(){return l.createElement("div",{className:"Ramen-module--container--A47bC"},l.createElement("span",{onClick:function(){for(var e=0;e<3;e++)(0,a.o)(document.getElementsByTagName("body")[0])}},"🍜"),l.createElement("span",null,"< ズルズル "))},c=function(e){var t;return l.createElement("h2",{id:"title-"+e.title,className:"Title-module--title--Dncfh"},"🍜"==e.emoji?l.createElement(l.Fragment,null,l.createElement("span",null,e.title+" "),l.createElement(m,null)):l.createElement("span",null,e.title+" "+(null!==(t=e.emoji)&&void 0!==t?t:"")))},u=n(7455),o=function(){var e=(0,r.useStaticQuery)("253740809");return l.createElement(l.Fragment,null,l.createElement(c,{title:"Recent Blogs",emoji:"🗒"}),e.allMdx.nodes.map((function(e){return l.createElement(l.Fragment,null,l.createElement(u.Z,{key:e.frontmatter.title,blog:e}),l.createElement("hr",null))})),l.createElement(r.Link,{to:"/blogs",className:"RecentBlogs-module--link--cV6sm"},"もっと見る"))},i=function(){var e=[{name:"Github",url:"https://github.com/yagijin"},{name:"Twitter",url:"https://twitter.com/yagijinjin"},{name:"Instagram",url:"https://www.instagram.com/yagijimjim"},{name:"RSS",url:"https://zuruzurura.men/rss.xml"}].map((function(e){return l.createElement("a",{key:e.name,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"SNS-module--link--J2VSS not-default"},e.name)}));return l.createElement("div",{className:"SNS-module--container--RBRnP"},e)},s=function(){return l.createElement(l.Fragment,null,l.createElement("div",{className:"Profile-module--profile--dN6hK"},l.createElement("img",{src:"./profile.jpeg",alt:"profile"}),l.createElement("div",null,l.createElement("h1",null,"yagijin"),l.createElement("p",null,"よく登呂遺跡に出没します"))),l.createElement("table",{className:"Profile-module--career--YJ0kx"},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"現在"),l.createElement("td",null,"Webエンジニア")),l.createElement("tr",null,l.createElement("td",null,"2021"),l.createElement("td",{style:{display:"flex",flexWrap:"wrap"}},l.createElement("span",null,"名城大学大学院"),l.createElement("span",null,"理工学研究科情報工学専攻"))),l.createElement("tr",null,l.createElement("td",null,"2019"),l.createElement("td",null,"名城大学 理工学部情報工学科")))),l.createElement(i,null))},E=function(){return l.createElement("div",{className:"Marquee-module--marquee--rcbqD"},l.createElement("div",null,l.createElement("span",{className:"Marquee-module--emoji--rqItD"},"🍜 🐐")))},d=n(1042),f=function(){var e=(0,r.useStaticQuery)("1397919646");return l.createElement(l.Fragment,null,l.createElement(c,{title:"Reading",emoji:"📕"}),e.allMdx.nodes[0]&&l.createElement(l.Fragment,null,l.createElement("a",{href:e.allMdx.nodes[0].frontmatter.url,className:"Reading-module--link--6DYNT"},e.allMdx.nodes[0].frontmatter.title)))},p=n(6163),g="Card-module--card---ehP1",h="Card-module--link--IFh-S",v=function(e){var t=e.link,n=e.children;return t.match(/^http/g)?l.createElement(r.Link,{to:t,className:h},l.createElement("div",{className:g},n)):l.createElement("a",{href:t,className:h},l.createElement("div",{className:g},n))},k=function(){return l.createElement(l.Fragment,null,l.createElement(c,{title:"その他コンテンツ",emoji:"🍜"}),l.createElement("ul",{className:"OtherContents-module--contents--y9ED8"},l.createElement("li",null,l.createElement(v,{link:"/console"},l.createElement("div",null,l.createElement("img",{src:"./ogp/ogp_console.png",alt:"consoleのスクリーンショット"}),l.createElement("p",null,"Console Style Profile")))),l.createElement("li",null,l.createElement(v,{link:"https://chrome.google.com/webstore/detail/rubydocument-template/bnhpmjnifppbemfkmfpgadhfaemgkoia"},l.createElement("div",null,l.createElement("img",{src:"./cards/chrome-extension-ruby.png",alt:"chrome拡張のスクリーンショット"}),l.createElement("p",null,"Chrome Extension")))),l.createElement("li",null,l.createElement(v,{link:"/hackathon"},l.createElement("div",null,l.createElement("img",{src:"./cards/hackathon.png",alt:"ハッカソンで発表している様子"}),l.createElement("p",null,"Hackathons"))))))},N=n(9565),y=function(){var e,t=(0,r.useStaticQuery)("164642035");return l.createElement(l.Fragment,null,l.createElement(c,{title:"やりたいこと",emoji:"✈️"}),l.createElement(N.Z,{todos:null!==(e=t.allMdx.nodes.map((function(e){return e.frontmatter})))&&void 0!==e?e:[]}),l.createElement(r.Link,{to:"/todo",className:"Todo-module--more--iqbjo"}," もっと見る"))},b=function(){return l.createElement(l.Fragment,null,l.createElement(p.Z,{info:{title:"Top - zuruzuru",type:"website",description:"yagijinのサイト",url:""}}),l.createElement("div",{className:"page-wrapper"},l.createElement("main",{className:"index-module--index--JWe1X"},l.createElement(s,null),l.createElement(f,null),l.createElement(o,null),l.createElement(y,null),l.createElement(k,null),l.createElement(E,null)),l.createElement(d.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a3718c38e198abc563a5.js.map