(self.webpackChunkgatsby_starter_hoodie=self.webpackChunkgatsby_starter_hoodie||[]).push([[150],{3962:function(e,t,o){"use strict";o.d(t,{A:function(){return c}});var n=o(6540),r=o(134),l=o(4848);function i({id:e,host:t,repo:r,repoId:i,category:a,categoryId:c,mapping:s,term:d,strict:p,reactionsEnabled:m,emitMetadata:g,inputPosition:u,theme:h,lang:k,loading:f}){const[b,x]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{b||(o.e(135).then(o.bind(o,1135)),x(!0))}),[]),b?(0,l.jsx)("giscus-widget",{id:e,host:t,repo:r,repoid:i,category:a,categoryid:c,mapping:s,term:d,strict:p,reactionsenabled:m,emitmetadata:g,inputposition:u,theme:h,lang:k,loading:f}):null}var a=o(1960);var c=()=>{const{theme:e}=(0,r.useSelector)((e=>e.theme));return n.createElement(i,{id:"comments",repo:a.giscus.repo,repoId:a.giscus.repoId,category:a.giscus.category,categoryId:a.giscus.categoryId,mapping:a.giscus.mapping,strict:a.giscus.strict,reactionsEnabled:a.giscus.reactionsEnabled,inputPosition:a.giscus.inputPosition,lang:a.giscus.lang,theme:"light"===e?"light":"dark",emitMetadata:"0"})}},1509:function(e,t,o){"use strict";o.d(t,{A:function(){return le}});var n=o(2568),r=o(6540),l=o(1960),i=o(3173),a=o(786),c=o(4794);const s=n.default.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-1d3p6ct-0"})(["margin-top:32px;@media (max-width:768px){padding:0 15px;}"]),d=n.default.h1.withConfig({displayName:"Header__ArticleTitle",componentId:"sc-1d3p6ct-1"})(["margin-bottom:25.6px;line-height:1.2;font-size:44.8px;font-weight:700;color:",";"],(e=>e.theme.colors.text)),p=n.default.div.withConfig({displayName:"Header__Information",componentId:"sc-1d3p6ct-2"})(["margin-bottom:32px;font-size:16px;"]),m=n.default.span.withConfig({displayName:"Header__Author",componentId:"sc-1d3p6ct-3"})(["& > a{font-weight:700;color:",";text-decoration:none;}& > a:hover{text-decoration:underline;}"],(e=>e.theme.colors.text)),g=n.default.span.withConfig({displayName:"Header__Date",componentId:"sc-1d3p6ct-4"})(["font-weight:300;color:",";"],(e=>e.theme.colors.secondaryText));var u=e=>{let{title:t,date:o,tags:n,minToRead:u}=e;return r.createElement(s,null,r.createElement(d,null," ",t," "),r.createElement(p,null,r.createElement(m,null,r.createElement(c.Link,{to:"/about"},"@",l.author)),r.createElement(g,null,"· ",o," "),r.createElement(g,null,"· ",u," min read ")),n&&r.createElement(a.A,{tagList:n}),r.createElement(i.A,{mt:"0"}))},h=o(3472),k=o.n(h),f=o(4713),b=o.n(f),x=o(4263);const v=n.default.div.withConfig({displayName:"Series__SeriesWrapper",componentId:"sc-ifd2zz-0"})(["margin-bottom:32px;padding:16px;background-color:",";"],(e=>e.theme.colors.seriesBackground)),w=n.default.h2.withConfig({displayName:"Series__SeriesHeader",componentId:"sc-ifd2zz-1"})(["margin-bottom:16px;font-size:16px;font-weight:bold;color:",";& > span{font-weight:normal;color:",";}& > a{color:inherit;text-decoration:none;}& > a:hover{text-decoration:underline;}"],(e=>e.theme.colors.text),(e=>e.theme.colors.tertiaryText)),y=n.default.ul.withConfig({displayName:"Series__PostWrapper",componentId:"sc-ifd2zz-2"})([""]),E=n.default.li.withConfig({displayName:"Series__Post",componentId:"sc-ifd2zz-3"})(["position:relative;font-size:12.8px;color:",";&:not(:last-child){margin-bottom:9.6px;}& > a{text-decoration:none;color:inherit;transition:color 0.3s;}& > a:hover{color:",";}& > svg{position:absolute;margin-left:5px;}"],(e=>e.currentPost?e.theme.colors.text:e.theme.colors.tertiaryText),(e=>e.theme.colors.text)),_=n.default.div.withConfig({displayName:"Series__ViewMore",componentId:"sc-ifd2zz-4"})(["margin-top:15px;font-size:14.4px;text-align:center;color:",";cursor:pointer;transition:color 0.3s;&:hover{color:",";}"],(e=>e.theme.colors.tertiaryText),(e=>e.theme.colors.text));var z=e=>{let{header:t,series:o}=e;const{0:n,1:l}=(0,r.useState)(!0),i=(0,r.useMemo)((()=>{if(o.length<5)return o;if(!n)return o;const e=b()(o,{currentPost:!0});return e<2?o.slice(0,5):o.length-e-1<2?o.slice(o.length-5,o.length):o.slice(e-2,e+3)}),[o,n]),a=(0,r.useMemo)((()=>o.length>5),[o]);return r.createElement(v,null,r.createElement(w,null,r.createElement(c.Link,{to:`/series/${k()(t,/\s/g,"-")}`},"SERIES: ",t)," ",r.createElement("span",null,"(",o.length,")")),r.createElement(y,null,i.map(((e,t)=>r.createElement(E,{key:t,currentPost:e.currentPost},r.createElement(c.Link,{to:e.fields.slug},e.frontmatter.title)," ",e.currentPost&&r.createElement(x.nXt,null)," ")))),a&&r.createElement(_,{onClick:()=>{l(!n)}},n?`View More (+${o.length-i.length})`:"View Less"))};var C=()=>{const e=(0,r.useRef)();let t=0;return e.current&&(t=e.current.getBoundingClientRect().top+document.documentElement.scrollTop),[e,t]},I=o(4506);var N=()=>{const{0:e,1:t}=(0,r.useState)({x:0,y:0}),o=()=>{t({y:window.scrollY,x:window.scrollX})};return(0,r.useEffect)((()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o))),[]),(0,r.useEffect)((()=>{t({y:window.scrollY,x:window.scrollX})}),[]),e};var T=e=>{const t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+o}};const B=n.default.div.withConfig({displayName:"RevealOnScroll__StyledWrapper",componentId:"sc-j177rt-0"})(["position:relative;opacity:0;transition:0.35s all ease;",""],(e=>e.visible&&(0,n.css)(["opacity:1;"])));var S=e=>{let{revealAt:t,reverse:o,children:n}=e;const{y:l}=N();let i=null;return i=o?l<t:l>t,r.createElement(B,{visible:i},n)};const A=n.default.div.withConfig({displayName:"Toc__TocWrapper",componentId:"sc-1axrmab-0"})(["position:absolute;opacity:1;left:100%;& > div{padding-right:20px;padding-left:16px;margin-left:48px;position:relative;width:240px;max-height:calc(100% - 185px);overflow-y:auto;::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-track{background:",";}::-webkit-scrollbar-thumb{background:",";}","}@media (max-width:1300px){display:None;}"],(e=>e.theme.colors.scrollTrack),(e=>e.theme.colors.scrollHandle),(e=>e.stick&&(0,n.css)(["position:fixed;top:","px;"],100))),q=n.default.div.withConfig({displayName:"Toc__ParagraphTitle",componentId:"sc-1axrmab-1"})(["margin-bottom:8px;padding-left:","px;font-size:14.4px;color:",";line-height:1.3;transition:all 0.2s;"," &:hover{color:",";cursor:pointer;}"],(e=>e.subtitle?19.2:0),(e=>e.theme.colors.mutedText),(e=>e.active&&(0,n.css)(["transform:translate(-10px,0);color:",";"],(e=>e.theme.colors.secondaryText))),(e=>e.theme.colors.text));var L=e=>{let{items:t,articleOffset:o}=e;const{y:n}=N(),{0:l,1:i}=(0,r.useState)(4e3),{0:a,1:c}=(0,r.useState)([]),{0:s,1:d}=(0,r.useState)(0);(0,r.useEffect)((()=>{const e=document.getElementById("bio");i(T(e).top-e.getBoundingClientRect().height)}),[]),(0,r.useEffect)((()=>{c((0,I.A)(document.querySelectorAll("#article-body > h2, #article-body > h3")).map((e=>T(e).top)))}),[]),(0,r.useEffect)((()=>{a.forEach(((e,t)=>{e<n+1&&d(t)}))}),[n]);return r.createElement(S,{revealAt:l,reverse:!0},r.createElement(A,{stick:n>o-100},r.createElement("div",null,t.map(((e,t)=>r.createElement(q,{key:t,subtitle:"H3"===e.tagName,active:t===s,onClick:()=>(e=>{window.location.hash=null,window.location.hash=e.id})(e)},e.innerText))))))};var P=n.default.div.withConfig({displayName:"StyledMarkdown",componentId:"sc-lqtcur-0"})(["&{font-size:16px;color:",";line-height:1.73;overflow:visible;}& h1:first-child,& h2:first-child,& h3:first-child,& h4:first-child{margin-top:0;}& > p,& > ul,& > ol,& table,& blockquote,& img,& .katex-display{margin-top:0;margin-bottom:15px;}& p{overflow-x:scroll;word-break:break-word;::-webkit-scrollbar{display:none;}}& h2,& h3,& h4,& h5,& h6{margin:11.2px 0 4.8px 0;font-weight:700;overflow:visible;}& h2{margin-top:50px;font-size:24px;}& h3{margin-top:30px;font-size:20px;}& h4,& h5,& h6{margin-top:30px;font-size:16px;}& .heading-anchor{display:flex;align-items:center;width:20px;height:100%;font-weight:400;}@media (max-width:768px){& .heading-anchor{display:none;}}& .heading-anchor svg{fill:",";}& strong{font-weight:700;}& em{font-style:italic;}& blockquote{padding:18px 24px;border-left:4px solid ",";background-color:",";& *:last-child{margin-bottom:0;}}& blockquote blockquote{margin-top:24px;}& blockquote > p > code.language-text{background-color:",";}& table{border-collapse:collapse;}& th{border-bottom:2px solid ",";font-weight:700;}& td{border-top:1px solid ",";border-bottom:1px solid ",";}& td,th{padding:8px;}& tr:first-child td{border-top:none;}& tr:nth-child(even){background-color:",";}& tr:last-child td{border-bottom:none;}& *:not(pre) > code.language-text,& table code.language-text{position:relative;top:-1px;padding:3px 5px 3px 5px;font-size:13px;background-color:",";font-weight:bold;color:",";}& h2 > code.language-text,& h3 > code.language-text,& h4 > code.language-text{font-size:inherit;}& tr:nth-child(even) code.language-text{background-color:",";}& > p + ul,& > p + ol{margin-top:-8px;}& ul,& ol{padding-left:25px;}& ol{list-style:decimal;}& ul{list-style:disc;}& ul ul{list-style:circle;}& ul ul ul{list-style:square;}& li{margin-bottom:7px;}& li p{margin-bottom:7px;}& ul li::marker{font-size:12px;}& pre{::-webkit-scrollbar{height:10px;}::-webkit-scrollbar-track{background:",";}::-webkit-scrollbar-thumb{background:",";}}& img{display:block;margin-left:auto;margin-right:auto;max-width:100%;}& figcaption{margin-top:5px;text-align:center;color:#868e96;font-size:12px;font-style:italic;}& hr{border:none;border-bottom:1px solid ",";}& a{padding:1.6px 0;color:",";}& a:hover:not(.heading-anchor){background-color:",";color:",";}& sup{margin-left:2px;font-size:13px;vertical-align:super;}& sup > a{padding:0 1px;}& .footnotes{margin-top:60px;padding-top:20px;border-top:1px solid ",";font-size:14px;}"],(e=>e.theme.colors.text),(e=>e.theme.colors.text),(e=>e.theme.colors.blockQuoteBorder),(e=>e.theme.colors.blockQuoteBackground),(e=>e.theme.colors.inlineCodeBackgroundDarker),(e=>e.theme.colors.border),(e=>e.theme.colors.border),(e=>e.theme.colors.border),(e=>e.theme.colors.tableBackground),(e=>e.theme.colors.inlineCodeBackground),(e=>e.theme.colors.text),(e=>e.theme.colors.inlineCodeBackgroundDarker),(e=>e.theme.colors.scrollTrack),(e=>e.theme.colors.scrollHandle),(e=>e.theme.colors.border),(e=>e.theme.colors.text),(e=>e.theme.colors.text),(e=>e.theme.colors.hoveredLinkText),(e=>e.theme.colors.border)),F=o(134);var W=(0,n.css)(['code[class*="language-"],pre[class*="language-"]{margin-bottom:24px;font-size:13.5px;color:#ccc;background:none;font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}pre[class*="language-"]{padding:1em;overflow:auto;}:not(pre) > code[class*="language-"]{padding:0.1em;border-radius:0.3em;white-space:normal;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}']);const H=(0,n.css)(['& code[class*="language-"],& pre[class*="language-"]{background-color:#222222;}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:#999;}.token.punctuation{color:#ccc;}.token.tag,.token.attr-name,.token.namespace,.token.deleted{color:#e2777a;}.token.function-name{color:#6196cc;}.token.boolean,.token.number,.token.function{color:#f08d49;}.token.property,.token.class-name,.token.constant,.token.symbol{color:#f8c555;}.token.selector,.token.important,.token.atrule,.token.keyword,.token.builtin{color:#cc99cd;}.token.string,.token.char,.token.attr-value,.token.regex,.token.variable{color:#7ec699;}.token.operator,.token.entity,.token.url{color:#67cdcc;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}.token.inserted{color:green;}']);var M=(0,n.createGlobalStyle)([""," ",""],W,H);const j=(0,n.css)(['code[class*="language-"],pre[class*="language-"]{background-color:#f7f6f3;color:hsl(230,8%,24%);}code[class*="language-"]::-moz-selection,code[class*="language-"] *::-moz-selection,pre[class*="language-"] *::-moz-selection{background:hsl(230,1%,90%);color:inherit;}code[class*="language-"]::selection,code[class*="language-"] *::selection,pre[class*="language-"] *::selection{background:hsl(230,1%,90%);color:inherit;}.token.comment,.token.prolog,.token.cdata{color:hsl(230,4%,64%);}.token.doctype,.token.punctuation,.token.entity{color:hsl(230,8%,24%);}.token.attr-name,.token.class-name,.token.boolean,.token.constant,.token.number,.token.atrule{color:hsl(35,99%,36%);}.token.keyword{color:hsl(301,63%,40%);}.token.property,.token.tag,.token.symbol,.token.deleted,.token.important{color:hsl(5,74%,59%);}.token.selector,.token.string,.token.char,.token.builtin,.token.inserted,.token.regex,.token.attr-value,.token.attr-value > .token.punctuation{color:hsl(119,34%,47%);}.token.variable,.token.operator,.token.function{color:hsl(221,87%,60%);}.token.url{color:hsl(198,99%,37%);}.token.attr-value > .token.punctuation.attr-equals,.token.special-attr > .token.attr-value > .token.value.css{color:hsl(230,8%,24%);}.language-css .token.selector{color:hsl(5,74%,59%);}.language-css .token.property{color:hsl(230,8%,24%);}.language-css .token.function,.language-css .token.url > .token.function{color:hsl(198,99%,37%);}.language-css .token.url > .token.string.url{color:hsl(119,34%,47%);}.language-css .token.important,.language-css .token.atrule .token.rule{color:hsl(301,63%,40%);}.language-javascript .token.operator{color:hsl(301,63%,40%);}.language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation{color:hsl(344,84%,43%);}.language-json .token.operator{color:hsl(230,8%,24%);}.language-json .token.null.keyword{color:hsl(35,99%,36%);}.language-markdown .token.url,.language-markdown .token.url > .token.operator,.language-markdown .token.url-reference.url > .token.string{color:hsl(230,8%,24%);}.language-markdown .token.url > .token.content{color:hsl(221,87%,60%);}.language-markdown .token.url > .token.url,.language-markdown .token.url-reference.url{color:hsl(198,99%,37%);}.language-markdown .token.blockquote.punctuation,.language-markdown .token.hr.punctuation{color:hsl(230,4%,64%);font-style:italic;}.language-markdown .token.code-snippet{color:hsl(119,34%,47%);}.language-markdown .token.bold .token.content{color:hsl(35,99%,36%);}.language-markdown .token.italic .token.content{color:hsl(301,63%,40%);}.language-markdown .token.strike .token.content,.language-markdown .token.strike .token.punctuation,.language-markdown .token.list.punctuation,.language-markdown .token.title.important > .token.punctuation{color:hsl(5,74%,59%);}.token.bold{font-weight:bold;}.token.comment,.token.italic{font-style:italic;}.token.entity{cursor:help;}.token.namespace{opacity:0.8;}.token.token.tab:not(:empty):before,.token.token.cr:before,.token.token.lf:before,.token.token.space:before{color:hsla(230,8%,24%,0.2);}div.code-toolbar > .toolbar.toolbar > .toolbar-item > button,div.code-toolbar > .toolbar.toolbar > .toolbar-item > a,div.code-toolbar > .toolbar.toolbar > .toolbar-item > span{background:hsl(230,1%,90%);color:hsl(230,6%,44%);padding:0.1em 0.4em;border-radius:0.3em;}div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover,div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus,div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover,div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus,div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover,div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus{background:hsl(230,1%,78%);color:hsl(230,8%,24%);}.line-highlight.line-highlight{background:hsla(230,8%,24%,0.05);}.line-highlight.line-highlight:before,.line-highlight.line-highlight[data-end]:after{background:hsl(230,1%,90%);color:hsl(230,8%,24%);padding:0.1em 0.6em;border-radius:0.3em;box-shadow:0 2px 0 0 rgba(0,0,0,0.2);}pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before{background-color:hsla(230,8%,24%,0.05);}.line-numbers.line-numbers .line-numbers-rows,.command-line .command-line-prompt{border-right-color:hsla(230,8%,24%,0.2);}.line-numbers .line-numbers-rows > span:before,.command-line .command-line-prompt > span:before{color:hsl(230,1%,62%);}.rainbow-braces .token.token.punctuation.brace-level-1,.rainbow-braces .token.token.punctuation.brace-level-5,.rainbow-braces .token.token.punctuation.brace-level-9{color:hsl(5,74%,59%);}.rainbow-braces .token.token.punctuation.brace-level-2,.rainbow-braces .token.token.punctuation.brace-level-6,.rainbow-braces .token.token.punctuation.brace-level-10{color:hsl(119,34%,47%);}.rainbow-braces .token.token.punctuation.brace-level-3,.rainbow-braces .token.token.punctuation.brace-level-7,.rainbow-braces .token.token.punctuation.brace-level-11{color:hsl(221,87%,60%);}.rainbow-braces .token.token.punctuation.brace-level-4,.rainbow-braces .token.token.punctuation.brace-level-8,.rainbow-braces .token.token.punctuation.brace-level-12{color:hsl(301,63%,40%);}pre.diff-highlight > code .token.token.deleted:not(.prefix),pre > code.diff-highlight .token.token.deleted:not(.prefix){background-color:hsla(353,100%,66%,0.15);}pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection,pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection,pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection,pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection{background-color:hsla(353,95%,66%,0.25);}pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection,pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection,pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection,pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection{background-color:hsla(353,95%,66%,0.25);}pre.diff-highlight > code .token.token.inserted:not(.prefix),pre > code.diff-highlight .token.token.inserted:not(.prefix){background-color:hsla(137,100%,55%,0.15);}pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection,pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection,pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection,pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection{background-color:hsla(135,73%,55%,0.25);}pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection,pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection,pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection,pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection{background-color:hsla(135,73%,55%,0.25);}.prism-previewer.prism-previewer:before,.prism-previewer-gradient.prism-previewer-gradient div{border-color:hsl(0,0,95%);}.prism-previewer-color.prism-previewer-color:before,.prism-previewer-gradient.prism-previewer-gradient div,.prism-previewer-easing.prism-previewer-easing:before{border-radius:0.3em;}.prism-previewer.prism-previewer:after{border-top-color:hsl(0,0,95%);}.prism-previewer-flipped.prism-previewer-flipped.after{border-bottom-color:hsl(0,0,95%);}.prism-previewer-angle.prism-previewer-angle:before,.prism-previewer-time.prism-previewer-time:before,.prism-previewer-easing.prism-previewer-easing{background:hsl(0,0%,100%);}.prism-previewer-angle.prism-previewer-angle circle,.prism-previewer-time.prism-previewer-time circle{stroke:hsl(230,8%,24%);stroke-opacity:1;}.prism-previewer-easing.prism-previewer-easing circle,.prism-previewer-easing.prism-previewer-easing path,.prism-previewer-easing.prism-previewer-easing line{stroke:hsl(230,8%,24%);}.prism-previewer-easing.prism-previewer-easing circle{fill:transparent;}']);var O=(0,n.createGlobalStyle)([""," ",""],W,j);var R=()=>{const{theme:e}=(0,F.useSelector)((e=>e.theme));return r.createElement(r.Fragment,null,"light"===e?r.createElement(O,null):r.createElement(M,null))};const V=n.default.div.withConfig({displayName:"Body__Wrapper",componentId:"sc-7hat30-0"})(["position:relative;margin-bottom:112px;@media (max-width:768px){padding:0 15px;}"]);var D=e=>{let{html:t,hideToc:o}=e;const{0:n,1:l}=(0,r.useState)([]),[i,a]=C();return(0,r.useEffect)((()=>{l(Array.from(document.querySelectorAll("#article-body > h2, #article-body > h3")))}),[]),r.createElement(V,null,o||r.createElement(L,{items:n,articleOffset:a}),r.createElement(R,null),r.createElement(P,{id:"article-body",dangerouslySetInnerHTML:{__html:t},itemProp:"articleBody",ref:i}))},$=o(5504),Q=o(3416),X=o(3962);const Y=n.default.div.withConfig({displayName:"Footer__ArticleButtonContainer",componentId:"sc-zqxmks-0"})(["display:flex;justify-content:space-between;margin-bottom:48px;@media (max-width:768px){margin-bottom:80px;padding:0 12.8px;flex-direction:column;& > div:first-child{margin-bottom:12.8px;}}"]),J=n.default.div.withConfig({displayName:"Footer__ArrowFlexWrapper",componentId:"sc-zqxmks-1"})(["width:100%;display:flex;align-items:center;white-space:nowrap;"]),G=n.default.div.withConfig({displayName:"Footer__ArticleButtonTextWrapper",componentId:"sc-zqxmks-2"})(["display:flex;align-items:flex-end;flex-direction:column;overflow:hidden;"]),K=n.default.div.withConfig({displayName:"Footer__Arrow",componentId:"sc-zqxmks-3"})(["position:relative;left:0;display:flex;align-items:center;font-size:24px;flex-basis:24px;transition:left 0.3s;"]),U=n.default.div.withConfig({displayName:"Footer__ArticleButtonWrapper",componentId:"sc-zqxmks-4"})(["display:flex;flex-direction:column;align-items:",";padding:20.8px 16px;max-width:250px;flex-basis:250px;font-size:17.6px;border-radius:5px;background-color:",";color:",";cursor:pointer;transition:background-color 0.3s;&:hover{background-color:",";}& ","{flex-direction:",";}& ","{align-items:",";}& ","{",";}&:hover ","{left:","px;}@media (max-width:768px){max-width:inherit;flex-basis:inherit;}"],(e=>e.right?"flex-end":"flex-start"),(e=>e.theme.colors.nextPostButtonBackground),(e=>e.theme.colors.text),(e=>e.theme.colors.hoveredNextPostButtonBackground),J,(e=>e.right?"row-reverse":"row"),G,(e=>e.right?"flex-end":"flex-start"),K,(e=>e.right?"margin-left: 16px":"margin-right: 16px"),K,(e=>e.right?2:-2)),Z=n.default.div.withConfig({displayName:"Footer__ArticleButtonLabel",componentId:"sc-zqxmks-5"})(["margin-bottom:9.6px;font-size:12.8px;"]),ee=n.default.div.withConfig({displayName:"Footer__ArticleButtonTitle",componentId:"sc-zqxmks-6"})(["padding:2px 0;width:100%;text-overflow:ellipsis;overflow:hidden;"]),te=n.default.div.withConfig({displayName:"Footer__CommentWrapper",componentId:"sc-zqxmks-7"})(["@media (max-width:768px){padding:0 15px;}"]),oe=e=>{let{right:t,children:o,onClick:n}=e;return r.createElement(U,{right:t,onClick:n},r.createElement(J,null,r.createElement(K,null,t?r.createElement($.OZ6,null):r.createElement($.VKQ,null)),r.createElement(G,null,r.createElement(Z,null,t?r.createElement(r.Fragment,null,"Next Post"):r.createElement(r.Fragment,null,"Previous Post")),r.createElement(ee,null,o))))};var ne=e=>{var t,o;let{previous:n,next:l}=e;return r.createElement(r.Fragment,null,r.createElement(Y,null,n?r.createElement(oe,{onClick:()=>{var e;return(0,c.navigate)(null==n||null===(e=n.fields)||void 0===e?void 0:e.slug)}},null==n||null===(t=n.frontmatter)||void 0===t?void 0:t.title):r.createElement("div",null),l&&r.createElement(oe,{right:!0,onClick:()=>{var e;return(0,c.navigate)(null==l||null===(e=l.fields)||void 0===e?void 0:e.slug)}},null==l||null===(o=l.frontmatter)||void 0===o?void 0:o.title)),r.createElement(Q.A,null),r.createElement(te,null,r.createElement(i.A,{mt:"32px"}),r.createElement(X.A,null)))};const re=n.default.article.withConfig({displayName:"Article",componentId:"sc-1tzp0ke-0"})([""]);re.Header=u,re.Series=z,re.Body=D,re.Footer=ne;var le=re},3416:function(e,t,o){"use strict";var n=o(6540),r=o(2568),l=o(1612),i=o(7008),a=o(1960);const c=r.default.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-5v8ml6-0"})(["display:flex;align-items:center;@media (max-width:768px){padding:0 15px;}"]),s="undefined"!=typeof window&&"localhost:8000"===window.location.host?"http://localhost:8000":a.siteUrl,d=r.default.div.withConfig({displayName:"Bio__Profile",componentId:"sc-5v8ml6-1"})(["flex:0 0 auto;margin-right:16px;width:128px;height:128px;border-radius:999px;background-image:url(","/profile.png);background-size:cover;background-position:center;"],s),p=r.default.div.withConfig({displayName:"Bio__Author",componentId:"sc-5v8ml6-2"})(["margin-bottom:4.8px;font-size:24px;font-weight:700;color:",";"],(e=>e.theme.colors.text)),m=r.default.div.withConfig({displayName:"Bio__Description",componentId:"sc-5v8ml6-3"})(["margin-bottom:11.2px;line-height:1.5;font-size:16px;color:",";"],(e=>e.theme.colors.secondaryText)),g=r.default.div.withConfig({displayName:"Bio__LinksWrapper",componentId:"sc-5v8ml6-4"})(["& a{margin-right:9.6px;}& svg{width:25.6px;height:25.6px;cursor:pointer;}& svg path{fill:",";transition:fill 0.3s;}& a:hover svg path{fill:",";}"],(e=>e.theme.colors.icon),(e=>e.theme.colors.text)),u=e=>{let{link:t,children:o}=e;return t?n.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},o):null};t.A=()=>{const{github:e,kaggle:t,instagram:o,facebook:r,twitter:s,x:h,blogger:k,medium:f,linkedIn:b,email:x,resume:v,link:w}=a.links;return n.createElement(c,{id:"bio"},n.createElement(d,null),n.createElement("div",null,n.createElement(p,null,"@",a.author),n.createElement(m,null,a.description),n.createElement(g,null,n.createElement(u,{link:e},n.createElement(l.hL4,null)),n.createElement(u,{link:t},n.createElement(l.jJF,null)),n.createElement(u,{link:o},n.createElement(l.ao$,null)),n.createElement(u,{link:r},n.createElement(l.iYk,null)),n.createElement(u,{link:s},n.createElement(l.feZ,null)),n.createElement(u,{link:h},n.createElement(i.TCj,null)),n.createElement(u,{link:f},n.createElement(i.DC0,null)),n.createElement(u,{link:k},n.createElement(i.KRq,null)),n.createElement(u,{link:b},n.createElement(l.QEs,null)),n.createElement(u,{link:x},n.createElement(i.Wjb,null)),n.createElement(u,{link:v},n.createElement(i.HkI,null)),n.createElement(u,{link:w},n.createElement(i.AnD,null)))))}},786:function(e,t,o){"use strict";var n=o(6540),r=o(2568),l=o(4794);const i=r.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-s1uz5f-0"})(["margin-bottom:16px;word-break:break-all;"]),a=r.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-s1uz5f-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:8px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;&:hover{background-color:",";}"],(e=>e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground),(e=>e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText),(e=>e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground)),c=e=>e.replace(/\s+/g,"-");t.A=e=>{let{tagList:t,count:o,selected:r}=e;return t?o?n.createElement(i,null,t.map(((e,t)=>n.createElement(l.Link,{key:JSON.stringify({tag:e,i:t}),to:r===e.fieldValue?"/tags":`/tags?q=${e.fieldValue}`},n.createElement(a,{selected:e.fieldValue===r},c(e.fieldValue)," (",e.totalCount,")"))))):n.createElement(i,null,t.map(((e,t)=>n.createElement(l.Link,{key:JSON.stringify({tag:e,i:t}),to:`/tags?q=${e}`},n.createElement(a,null,c(e)))))):null}},2523:function(e){e.exports=function(e,t,o,n){for(var r=e.length,l=o+(n?1:-1);n?l--:++l<r;)if(t(e[l],l,e))return l;return-1}},4713:function(e,t,o){var n=o(2523),r=o(5389),l=o(1489),i=Math.max;e.exports=function(e,t,o){var a=null==e?0:e.length;if(!a)return-1;var c=null==o?0:l(o);return c<0&&(c=i(a+c,0)),n(e,r(t,3),c)}},3472:function(e,t,o){var n=o(3222);e.exports=function(){var e=arguments,t=n(e[0]);return e.length<3?t:t.replace(e[1],e[2])}},7400:function(e,t,o){var n=o(9374),r=1/0;e.exports=function(e){return e?(e=n(e))===r||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},1489:function(e,t,o){var n=o(7400);e.exports=function(e){var t=n(e),o=t%1;return t==t?o?t-o:t:0}}}]);
//# sourceMappingURL=98746260b83f1504b91525807bb027b2132b1e06-03ff47934fd26e6d26e2.js.map