"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[230],{158:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(5296),r=(n(6393),n(158));const o={slug:"do-we-really-need-python-for-quant",title:"Do we really need Python for Quant?",authors:["zccz14"],tags:["Yuan","Tech"]},i=void 0,s={permalink:"/blog/do-we-really-need-python-for-quant",source:"@site/blog/2023-11-17-do-we-really-need-python-for-quant.md",title:"Do we really need Python for Quant?",description:"Nowadays, Python is the most popular programming language in quantitative trading. VNPY, Zipline, PyAlgoTrade, and Backtrader are all written in Python. Python is widely used in quantitative trading, but it may not be the best language for the job. While it has many advantages, such as being easy to learn and having a great ecosystem for data science, quantitative investment platforms like Quantopian, JoinQuant, and QuantConnect have struggled to be profitable, despite the decreasing costs of internet infrastructure. This is because the software depends on computing power, which remains expensive.",date:"2023-11-17T00:00:00.000Z",formattedDate:"November 17, 2023",tags:[{label:"Yuan",permalink:"/blog/tags/yuan"},{label:"Tech",permalink:"/blog/tags/tech"}],readingTime:1.83,hasTruncateMarker:!1,authors:[{name:"Zheng Chen",title:"Yuan maintainer",url:"https://github.com/zccz14",imageURL:"https://github.com/zccz14.png",key:"zccz14"}],frontMatter:{slug:"do-we-really-need-python-for-quant",title:"Do we really need Python for Quant?",authors:["zccz14"],tags:["Yuan","Tech"]}},l={authorsImageUrls:[void 0]},c=[],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nowadays, Python is the most popular programming language in quantitative trading. VNPY, Zipline, PyAlgoTrade, and Backtrader are all written in Python. Python is widely used in quantitative trading, but it may not be the best language for the job. While it has many advantages, such as being easy to learn and having a great ecosystem for data science, quantitative investment platforms like Quantopian, JoinQuant, and QuantConnect have struggled to be profitable, despite the decreasing costs of internet infrastructure. This is because the software depends on computing power, which remains expensive."),(0,r.kt)("p",null,"Local installed software can be cheaper, but it can be difficult for non-professional traders to install and use. Platforms often provide a web GUI for users to overcome this issue. Some argue that local installed software is not cross-platform, cannot utilize cloud computing power, and are not highly available."),(0,r.kt)("p",null,"The reason why users don't want to pay for cloud computing power is that they do not see the value in it. Quantitative trading requires a lot of research and development, which can be costly in terms of computing power and time. If users are not convinced that they can make money from the platform, they will not pay for it."),(0,r.kt)("p",null,"Therefore, we propose a solution: replace Python with JavaScript. JavaScript can be used in the browser, allowing users to utilize their own computing power and eliminating the need for a local installation. The JavaScript ecosystem is mature and growing, making it the best ecosystem for web development and data science. And JavaScript is faster than Python."),(0,r.kt)("p",null,"We have built a quantitative platform with JavaScript that can run in a browser and on cloud servers. The research and development can be done completely free in the browser until users want to run the model in cloud servers. This way, users can gain value from the platform before paying for it, and the platform can pay for the computing power after receiving payment, making it a win-win solution."),(0,r.kt)("p",null,"In the future, we will share how we store and distribute data without cost, ensuring that the platform will always be running. With these advantages, we are confident that JavaScript is the best choice for the future of quantitative trading."))}h.isMDXComponent=!0}}]);