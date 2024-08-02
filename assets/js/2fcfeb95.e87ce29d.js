"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[6497],{7693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var i=n(9541),l=n(4317);const s={sidebar_position:3},c="Account",r={id:"basics/what-is-account",title:"Account",description:'You may have used a "bank account" before. It is essentially a simplified version of an account, involving only changes in balance.',source:"@site/docs/basics/what-is-account.md",sourceDirName:"basics",slug:"/basics/what-is-account",permalink:"/docs/basics/what-is-account",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/basics/what-is-account.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Product",permalink:"/docs/basics/what-is-product"},next:{title:"Orders",permalink:"/docs/basics/what-is-order"}},d={},o=[{value:"Currency",id:"currency",level:2},{value:"Standard Currency",id:"standard-currency",level:3},{value:"Positions",id:"positions",level:2},{value:"Trading",id:"trading",level:2},{value:"How to Calculate Margin",id:"how-to-calculate-margin",level:3},{value:"How to Calculate Profit and Loss",id:"how-to-calculate-profit-and-loss",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"account",children:"Account"}),"\n",(0,i.jsx)(t.p,{children:'You may have used a "bank account" before. It is essentially a simplified version of an account, involving only changes in balance.'}),"\n",(0,i.jsxs)(t.p,{children:["Now, we introduce a broader concept of ",(0,i.jsx)(t.strong,{children:"account"}),":"]}),"\n",(0,i.jsxs)(t.p,{children:["An account includes ",(0,i.jsx)(t.strong,{children:"currency (Currency)"})," and ",(0,i.jsx)(t.strong,{children:"positions (Position)"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Currency is an asset that can be directly transferred and used for transactions; since currency may be obtained through transfers, its cost cannot be known, and thus its profit and loss cannot be calculated."}),"\n",(0,i.jsx)(t.li,{children:"Positions include foreign exchange, stocks, commodities, bonds, etc. Any assets that you consider will eventually be converted into currency for sale belong to your positions. Positions have a shorter lifecycle than currency, can have their cost known, and can have profit and loss attributes calculated."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"currency",children:"Currency"}),"\n",(0,i.jsx)(t.p,{children:"Currency is described as a type of currency and several different amounts. An account can simultaneously hold multiple currencies."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Field Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Example Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"currency"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Currency name"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'"USD"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"balance"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Balance"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"10000"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"free"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available balance, the portion that can be transferred out through transfers"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"9000"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"equity"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Net worth, equity, the expected balance if all positions are exited"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"15000"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"profit"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Floating profit and loss of related positions"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"5000"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"used"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Used margin, the frozen portion that cannot be transferred out through transfers"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"6000"})})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["This equation always holds: ",(0,i.jsx)(t.code,{children:"equity"})," = ",(0,i.jsx)(t.code,{children:"balance"})," + ",(0,i.jsx)(t.code,{children:"profit"})," = ",(0,i.jsx)(t.code,{children:"used"})," + ",(0,i.jsx)(t.code,{children:"free"})]}),"\n",(0,i.jsx)(t.p,{children:"The floating profit and loss of an account is necessarily the sum of the floating profit and loss of each position in the account."}),"\n",(0,i.jsx)(t.p,{children:"The used margin of an account is usually the sum of the used margin of each position in the account (under a joint margin system, this is usually not the case), and is directly provided by the clearing house."}),"\n",(0,i.jsx)(t.p,{children:"The calculation method is typically:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Calculate the floating profit and loss using positions"}),"\n",(0,i.jsx)(t.li,{children:"Calculate the net worth using the balance and floating profit and loss"}),"\n",(0,i.jsx)(t.li,{children:"Calculate the available balance using the net worth and used margin"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"There are only two ways to change the account balance"}),":"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Trading"}),": The account's positions will profit or lose due to market price changes, and events such as opening positions, closing positions, and interest settlement can change the account balance."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Transferring"}),": The transfer of currency between accounts. Specifically, this refers to deposits and withdrawals."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"standard-currency",children:"Standard Currency"}),"\n",(0,i.jsx)(t.p,{children:"An account can hold multiple different currencies. When valuing an account in total, it is common to adopt a standard perspective, converting all different currencies into a single currency-denominated valuation based on market prices."}),"\n",(0,i.jsx)(t.p,{children:"We believe that the standard is something that needs to be aggregated from the frontend perspective, so during the production process of account information, there is no need to pre-specify which currency is the standard currency."}),"\n",(0,i.jsx)(t.h2,{id:"positions",children:"Positions"}),"\n",(0,i.jsx)(t.p,{children:"Each account can hold several positions. Positions can also be called positions."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Field Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Example Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"position_id"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Position ID (required)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'"1235123"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"product_id"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Product ID (required)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"XAUUSD"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"direction"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Position direction (required)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'"SHORT"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"volume"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Position volume (required)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"5"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"free_volume"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Volume available for trading"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"1"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"position_price"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Position cost price (required)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"1490"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"closable_price"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Market closing price (required)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"2500"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"floating_profit"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Floating profit and loss (required)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"149"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"comment"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Position comment"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'"Powered by Yuan"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"valuation"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Position valuation (required)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"1250000"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"settlement_scheduled_at"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next settlement timestamp (Unix millisecond style)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"1722104965015"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"interest_to_settle"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Expected interest to be received at next settlement"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"-2.21"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"trading",children:"Trading"}),"\n",(0,i.jsx)(t.p,{children:"Account trading involves five basic variables: balance, floating profit and loss (floating PnL), equity, used margin, and available margin."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"First, the account will have a balance, which is a basic variable not dependent on other variables."}),"\n",(0,i.jsxs)(t.li,{children:["Then select a ",(0,i.jsx)(t.a,{href:"/docs/basics/what-is-product",children:"product"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"You can submit a trading order to the exchange to prepare to establish a position."}),"\n",(0,i.jsxs)(t.li,{children:["When establishing a position, you need to pay a certain amount of margin. (",(0,i.jsx)(t.strong,{children:"Available margin"})," will be converted to ",(0,i.jsx)(t.strong,{children:"Used margin"}),")"]}),"\n",(0,i.jsx)(t.li,{children:"During price changes, the floating profit and loss caused by price differences will change in real time."}),"\n",(0,i.jsx)(t.li,{children:"Then you can choose to exit the position at a certain market price and time, and the floating profit and loss will be converted to the balance."}),"\n",(0,i.jsx)(t.li,{children:"In this way, the account balance can be accumulated."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"how-to-calculate-margin",children:"How to Calculate Margin"}),"\n",(0,i.jsxs)(t.p,{children:["The principle is that the larger the position, the greater the risk, and the more margin required, usually positively correlated with the position quantity. When the available margin is insufficient, the exchange will ",(0,i.jsx)(t.strong,{children:"reject"})," opening a position. The specific calculation method depends on the exchange rules."]}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"/docs/reference/how-to-calculate-margin",children:"How to Calculate Margin"})]}),"\n",(0,i.jsx)(t.h3,{id:"how-to-calculate-profit-and-loss",children:"How to Calculate Profit and Loss"}),"\n",(0,i.jsx)(t.p,{children:"Profit and loss is usually caused by market value changes and interest settlement events."}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"/docs/reference/how-to-calculate-pnl",children:"How to Calculate Profit and Loss"})]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},4317:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>c});var i=n(3981);const l={},s=i.createContext(l);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);