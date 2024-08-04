"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[5481],{375:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(9541),i=t(4317);const r={},c="Provide Account Information",a={id:"vendor-guide/vendor-account-info",title:"Provide Account Information",description:"When integrating with an exchange, the vendor needs to convert the account opened on the exchange into the standard account information of Yuan.",source:"@site/docs/vendor-guide/vendor-account-info.md",sourceDirName:"vendor-guide",slug:"/vendor-guide/vendor-account-info",permalink:"/docs/vendor-guide/vendor-account-info",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/vendor-guide/vendor-account-info.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Cross-Language Interoperability Guide",permalink:"/docs/vendor-guide/cross-language-interoperability"},next:{title:"Providing Product Specifications",permalink:"/docs/vendor-guide/vendor-product"}},s={},d=[];function u(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"provide-account-information",children:"Provide Account Information"}),"\n",(0,o.jsxs)(n.p,{children:["When integrating with an exchange, the vendor needs to convert the account opened on the exchange into the standard ",(0,o.jsx)(n.a,{href:"/docs/basics/what-is-account",children:"account information"})," of Yuan."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { Terminal, provideAccountInfo } from '@yuants/protocol';\nimport { combineLatest, defer, map, shareReplay } from 'rxjs';\n\nconst terminal = new Terminal(process.env.HOST_URL!, {});\n\n// Assume the vendor's name is VENDOR_NAME and the user ID is USER_ID, AccountId must be globally unique\nconst ACCOUNT_ID = `${VENDOR_NAME}/${USER_ID}`;\n\n// Create an Observable to provide account information\nconst accountInfo$ = combineLatest([\n  defer(() => Api.getAccountWallet()), // Fetch account wallet balance\n  defer(() => Api.getAccountPositions()), // Fetch account positions\n  defer(() => Api.getAccountOrders()), // Fetch ongoing orders of the account\n]).pipe(\n  map(([wallet, positions, orders]) => {\n    // Convert the vendor's account information into Yuan's standard account information\n    return {\n      updated_at: Date.now(),\n      account_id: ACCOUNT_ID,\n      // ...\n    };\n  }),\n  shareReplay(1),\n);\n\n// Declare to the host through the terminal that you are providing account information\nprovideAccountInfo(terminal, accountInfo$);\n"})}),"\n",(0,o.jsx)(n.p,{children:"After successfully integrating the vendor's account information, other terminals in the host can subscribe to this channel to obtain the account information in real time."}),"\n",(0,o.jsxs)(n.p,{children:["For example, in the GUI, you can open the ",(0,o.jsx)(n.strong,{children:"Account List"}),", find the corresponding account, click ",(0,o.jsx)(n.strong,{children:"Details"}),", and then open the account details page to view the vendor's account information in real time."]}),"\n",(0,o.jsx)(n.p,{children:"Other considerations:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["A terminal can provide multiple account information. Throughout the host, the ",(0,o.jsx)(n.code,{children:"account_id"})," must be globally unique. If multiple accounts declare the same ",(0,o.jsx)(n.code,{children:"account_id"}),", the subscriber will consider them as multiple backup data sources of the same publisher and will choose one of them to subscribe to. For more details, refer to ",(0,o.jsx)(n.a,{href:"/docs/protocol/message-pattern-layer#publish-subscribe-pattern",children:"Technical Protocol - Message Pattern Layer - Publish/Subscribe Pattern"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"External systems usually do not directly provide interfaces that exactly match Yuan's standard account information. Instead, they typically provide account balance, positions, orders, etc., through RESTful interfaces. Vendors need to convert and integrate this information into Yuan's standard account information."}),"\n",(0,o.jsx)(n.li,{children:"Automatic push of account information can be achieved by polling the RESTful interfaces of external systems or by connecting to push interfaces such as WebSocket. It is recommended to use push interfaces due to their higher efficiency."}),"\n",(0,o.jsx)(n.li,{children:"The frequency of pushing account information is determined by the vendor. In principle, data should be pushed as frequently as possible without causing pressure on external systems. It should not be too sparse to avoid outdated account information in the Yuan system. For accounts involved in high-frequency trading, the push frequency should be higher."}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},4317:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var o=t(3981);const i={},r=o.createContext(i);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);