"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[162],{1031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(9541),a=n(4317);const o={sidebar_position:1},s="Real world trading",i={id:"tutorial-basics/real-world-trading",title:"Real world trading",description:"It's a simple context diagram for real world trading.",source:"@site/docs/tutorial-basics/real-world-trading.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/real-world-trading",permalink:"/docs/tutorial-basics/real-world-trading",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/tutorial-basics/real-world-trading.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Getting Start",permalink:"/docs/category/getting-start"},next:{title:"Basic Concepts",permalink:"/docs/category/basic-concepts"}},c={},d=[{value:"Further Reading",id:"further-reading",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",section:"section",sup:"sup",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"real-world-trading",children:"Real world trading"}),"\n",(0,r.jsx)(t.p,{children:"It's a simple context diagram for real world trading."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Yuan have broker programs for unify data source and exchange interfaces."}),"\n",(0,r.jsx)(t.li,{children:"Agent will not submit orders to exchange directly, it will simulate accounts internally. And then send the simulated accounts to Trade Copier."}),"\n",(0,r.jsx)(t.li,{children:"Trade Copier will compare the simulated accounts and real accounts, and submit orders to exchange broker. In order to keep their account positions consistent."}),"\n",(0,r.jsx)(t.li,{children:"Trade Copier will wait for the order to be finished. And then compare the simulated accounts and real accounts again. If the positions are not consistent, it will submit orders again."}),"\n",(0,r.jsxs)(t.li,{children:["This architecture has at least tens of ms latency, So it's not suitable for high frequency trading",(0,r.jsx)(t.sup,{children:(0,r.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),", but it's very easy to do portfolio and very robust. Extra latency may comes from network with external systems."]}),"\n"]}),"\n",(0,r.jsx)(t.mermaid,{value:'C4Context\n    System_Ext(VendorDataSource, "DataSource Vendor", "A system that provides data for Yuan")\n    System_Ext(VendorExchange, "Exchange Vendor", "A system that hosts account and orders")\n    Enterprise_Boundary(b0, "Host") {\n        System(DataSource, "Data Source Broker", "A system that provides data for Yuan")\n        System(Exchange, "Exchange Broker", "Broker for external exchange")\n        System(Agent, "Agent", "Trading Strategy")\n        System(TradeCopier, "Trade Copier", "Compare account info and submit orders")\n    }\n    Rel(VendorDataSource, DataSource, "Data")\n    Rel(DataSource, Agent, "Data")\n    Rel(Agent, TradeCopier, "AccountInfo", "Simulated")\n    Rel(Exchange, TradeCopier, "AccountInfo", "Real")\n    Rel(TradeCopier, Exchange, "Submit Orders")\n    Rel(Exchange, VendorExchange, "Submit Orders")\n    Rel(VendorExchange, Exchange, "AccountInfo", "Real")\n\n\n    UpdateRelStyle(Agent, TradeCopier, $offsetY="-40", $offsetX="-30")\n    UpdateRelStyle(Exchange, TradeCopier, $offsetY="0", $offsetX="-100")\n    UpdateRelStyle(TradeCopier, Exchange, $offsetY="0", $offsetX="20")\n    UpdateRelStyle(Exchange, VendorExchange, $offsetY="0", $offsetX="20")\n    UpdateRelStyle(VendorExchange, Exchange, $offsetY="0", $offsetX="-100")\n\n    UpdateLayoutConfig($c4ShapeInRow="2", $c4BoundaryInRow="1")'}),"\n",(0,r.jsx)(t.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,r.jsxs)(t.p,{children:["You can find more information about Trade Copier in ",(0,r.jsx)(t.a,{href:"https://github.com/No-Trade-No-Life/Yuan/tree/main/apps/trade-copier",children:"GitHub"}),"."]}),"\n",(0,r.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,r.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,r.jsxs)(t.p,{children:["Note the best solutions for high frequency trading is to cohere the agent, data source and exchange brokers in one dedicated program. And deploy it as close as possible to the exchange. So that the latency can be reduced to less than 1ms. The key-point is to reduce all the no need processing. Yuan is temporarily not suitable for high frequency trading. But we will try to improve it in the future. ",(0,r.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4317:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(3981);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);