"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[1297],{4819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(9541),i=t(4317);const r={sidebar_position:4},s="How to calculate PnL",a={id:"basics/how-to-calculate-pnl",title:"How to calculate PnL",description:"PnL = Standard PnL + PnL Correction",source:"@site/docs/basics/how-to-calculate-pnl.md",sourceDirName:"basics",slug:"/basics/how-to-calculate-pnl",permalink:"/docs/basics/how-to-calculate-pnl",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/basics/how-to-calculate-pnl.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"How to calculate margin",permalink:"/docs/basics/how-to-calculate-margin"},next:{title:"Guide - Agent",permalink:"/docs/category/guide---agent"}},c={},l=[{value:"Standard PnL",id:"standard-pnl",level:2},{value:"PnL correction",id:"pnl-correction",level:2}];function d(e){const n={blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"how-to-calculate-pnl",children:"How to calculate PnL"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"PnL = Standard PnL + PnL Correction"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"standard-pnl",children:"Standard PnL"}),"\n",(0,o.jsx)(n.p,{children:"**Standard PnL\xa0=\xa0Position Direction * Position Volume\xa0*\xa0(Close Price - Open Price)\xa0* Product\xa0Value Speed\xa0* Factor of Asset\xa0*\xa0Base Currency Exchange Rate\n**"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Position Direction = 1 if long, -1 if short;"}),"\n",(0,o.jsx)(n.li,{children:"Factor of Asset = 1 / Close Price if foreign exchange or bond spot, otherwise 1;"}),"\n",(0,o.jsxs)(n.li,{children:["Base Currency Exchange Rate = the exchange rate of ",(0,o.jsx)(n.strong,{children:"product's base currency"})," vs ",(0,o.jsx)(n.strong,{children:"account's margin currency"})," at the time of position exiting."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This standard equation applies to the calculation of PnL in ideal cases for all known products such as stocks, foreign exchange, bonds, commodity futures, precious metals, option contracts, etc."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Value speed is a constant for the same product, usually 1 in stocks, and is called "contract size" in futures or options contracts.'}),"\n",(0,o.jsx)(n.li,{children:'Floating PnL is the PnL calculated by substituting "Close Price = Current Closable Price" into the formula.'}),"\n",(0,o.jsx)(n.li,{children:"For cases where the base currency and margin currency are different , it is not possible to directly obtain the base currency exchange rate at the time of position squaring from historical orders. However, the exchange usually directly gives the standard PnL of the order. At this time, the price of the base currency against the margin currency at the time of position squaring can be deduced from the PnL."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"pnl-correction",children:"PnL correction"}),"\n",(0,o.jsx)(n.p,{children:'"PnL correction" mainly refers to transaction costs, which generally account for a small part of speculative trading.\nThe calculation of PnL correction is actually very complicated, and different exchanges may have different formats of rules to regulate trading behavior.'}),"\n",(0,o.jsx)(n.p,{children:"Let's learn some rules:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"According to trading volume : for example, the handling fee of non-ferrous metal futures of the Shanghai Futures Exchange is calculated based on a fixed amount per lot;"}),"\n",(0,o.jsx)(n.li,{children:"According to the turnover : for example, the handling fee of the stock index futures of CICC is calculated at 2.3% of the turnover;"}),"\n",(0,o.jsx)(n.li,{children:"One-way two-way : some products of handling fees are only charged when opening positions, and some are charged in both directions of opening."}),"\n",(0,o.jsx)(n.li,{children:"Today's Position / yesterday's Position : China futures usually designate close today 's position and close yesterday's position to charge different fees;"}),"\n",(0,o.jsx)(n.li,{children:"Overnight interest : When the foreign exchange spread contract position is held overnight (usually at 0:00 Eastern European time), interest will be generated, but it will not be charged overnight;"}),"\n",(0,o.jsx)(n.li,{children:"Alternate Weekly Interest : Usually on Wednesday, overnight interest will be charged for 3 days at a time."}),"\n",(0,o.jsx)(n.li,{children:"Dividend : When trading stocks, the position dividend will increase the PnL correction value."}),"\n",(0,o.jsx)(n.li,{children:"Policy adjustment : An event in which the exchange changes the coefficients of its fees."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"It has been found that it is difficult to calculate transaction costs using the standard equation."}),"\n",(0,o.jsx)(n.p,{children:"However, the exchange will definitely give the final true PnL in the settlement, and at least the PnL correction value can be deduced through the final true PnL."}),"\n",(0,o.jsx)(n.p,{children:"So, we can use the following equation to calculate the PnL correction:"}),"\n",(0,o.jsx)(n.p,{children:"PnL Correction = PnL - Standard PnL"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4317:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(3981);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);