"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[8658],{3885:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=i(9541),r=i(4317);const o={sidebar_position:1},s="What is a Vendor",a={id:"vendor-guide/what-is-vendor",title:"What is a Vendor",description:"A Vendor is an extension program in Yuan that connects Yuan to external systems, acting as a bridge between Yuan and these external systems.",source:"@site/docs/vendor-guide/what-is-vendor.md",sourceDirName:"vendor-guide",slug:"/vendor-guide/what-is-vendor",permalink:"/docs/vendor-guide/what-is-vendor",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/vendor-guide/what-is-vendor.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Guide - Vendor",permalink:"/docs/category/guide---vendor"},next:{title:"Cross-Language Interoperability Guide",permalink:"/docs/vendor-guide/cross-language-interoperability"}},l={},d=[{value:"Responsibilities of a Vendor",id:"responsibilities-of-a-vendor",level:2},{value:"Types of External System Interfaces",id:"types-of-external-system-interfaces",level:2}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"what-is-a-vendor",children:"What is a Vendor"}),"\n",(0,t.jsx)(n.p,{children:"A Vendor is an extension program in Yuan that connects Yuan to external systems, acting as a bridge between Yuan and these external systems."}),"\n",(0,t.jsx)(n.p,{children:"Vendors map Yuan's standard concepts to those of external systems, enabling interaction between Yuan and these systems."}),"\n",(0,t.jsx)(n.p,{children:"Developing a vendor requires the developer to understand both Yuan's standard concepts and the concepts and corresponding APIs of the external system."}),"\n",(0,t.jsx)(n.p,{children:"Typically, a vendor specifically refers to an Exchange and a Data Source. Many exchanges are also data sources, so a vendor program can serve as both an exchange and a data source."}),"\n",(0,t.jsx)(n.p,{children:"This guide will introduce the basic concepts of vendors and how to write a vendor."}),"\n",(0,t.jsx)(n.h2,{id:"responsibilities-of-a-vendor",children:"Responsibilities of a Vendor"}),"\n",(0,t.jsx)(n.p,{children:"A vendor program can be responsible for multiple products and multiple accounts."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./vendor-product",children:"Provide product specifications"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./vendor-realtime-market-data",children:"Provide real-time market data"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./vendor-historical-market-data",children:"Provide historical market data"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./vendor-account-info",children:"Provide real-time account information"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./vendor-historical-order",children:"Provide historical order information"})}),"\n",(0,t.jsx)(n.li,{children:"Provide trading interfaces (placing orders, modifying orders, canceling orders)"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./vendor-transfer",children:"Provide transfer interfaces (sending, receiving)"})}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{title:"Single Account Principle",type:"info",children:[(0,t.jsx)(n.p,{children:"When integrating with accounts, ensure that one container corresponds to one account, using environment variables to set account authorization."}),(0,t.jsx)(n.p,{children:"Do not use one container to maintain the authorization of multiple accounts, because:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Authorization information is insecure"}),"\n",(0,t.jsx)(n.p,{children:"If someone has control over the vendor's deployment, they can inevitably access this deployment environment and obtain authorization information for the environment and vendor API through some dump method, which is equivalent to having the account authorization. Therefore, to ensure that account authorization does not leak, users must have control over the vendor's deployment.\nControlling the environment means controlling the authorization, so environment variables are the simplest channel for authorization transmission."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"It reduces availability"}),"\n",(0,t.jsx)(n.p,{children:"If a program anomaly occurs with an account, such as OOM, it will affect other accounts in the same container, leading to restarts and reinitializations, resulting in significantly reduced availability. Sacrificing availability for the potential benefit of more efficient resource allocation is clearly not worthwhile."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"It complicates program structure"}),"\n",(0,t.jsx)(n.p,{children:"If a container needs to manage multiple accounts, it inevitably requires setting up an account pool, with each step needing to retrieve the corresponding state from the account pool, which imposes higher requirements on program design.\nTypically, a vendor process holds only one API authorization key and should not hold multiple API authorization keys."}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"types-of-external-system-interfaces",children:"Types of External System Interfaces"}),"\n",(0,t.jsx)(n.p,{children:"External system interfaces come in various types, but they can generally be categorized into the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"HTTP API (including WebSocket, as WebSocket is based on the HTTP protocol)"}),"\n",(0,t.jsx)(n.p,{children:"HTTP-based APIs offer the best compatibility, as almost all programming languages have HTTP request libraries. Moreover, they can be used in browsers."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Node.js Lib (e.g., requiring the use of Raw Socket, C++ Addon, or N-API bindings)"}),"\n",(0,t.jsx)(n.p,{children:"Libraries that can only be used by Node.js programs, usually based on C++ Addons, or using N-API for bindings with other languages."}),"\n",(0,t.jsx)(n.p,{children:"The difficulty is moderate; it only requires installing an additional npm package to integrate."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Cross-language interoperability SDK (e.g., C++ DLL)"}),"\n",(0,t.jsxs)(n.p,{children:["Some external systems may only provide a C++ SDK, and writing bindings can be challenging. In such cases, it is recommended to use an embedded message queue like ",(0,t.jsx)(n.a,{href:"https://zeromq.org/",children:"ZeroMQ"})," for cross-language interoperability."]}),"\n",(0,t.jsxs)(n.p,{children:["The difficulty is high; it is advisable to read our best practices - ",(0,t.jsx)(n.a,{href:"./cross-language-interoperability",children:"Cross-Language Interoperability Guide"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Graphical User Interface (including Web GUI, Native GUI)"}),"\n",(0,t.jsx)(n.p,{children:"Some external systems may only provide a graphical user interface, requiring the use of automation testing tools for simulated operations. However, this method has high resource consumption and may involve infringement on the external system. It is only recommended when no other solutions are available. You can learn about automation testing tools like Puppeteer, Selenium, and WinAppDriver."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4317:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(3981);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);