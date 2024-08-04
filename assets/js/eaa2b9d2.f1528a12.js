"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[7690],{7859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(9541),r=t(4317);const i={},a="Providing Product Specifications",s={id:"vendor-guide/vendor-product",title:"Providing Product Specifications",description:"Vendors are responsible for providing product specification information.",source:"@site/docs/vendor-guide/vendor-product.md",sourceDirName:"vendor-guide",slug:"/vendor-guide/vendor-product",permalink:"/docs/vendor-guide/vendor-product",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/vendor-guide/vendor-product.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Provide Account Information",permalink:"/docs/vendor-guide/vendor-account-info"},next:{title:"Protocol",permalink:"/docs/category/protocol"}},c={},d=[];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"providing-product-specifications",children:"Providing Product Specifications"}),"\n",(0,o.jsx)(n.p,{children:"Vendors are responsible for providing product specification information."}),"\n",(0,o.jsx)(n.p,{children:"First, obtain the list of product information from the external system, and then store the product information in the database."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { Terminal, writeDataRecords } from '@vendor/protocol';\nimport { defer, repeat, retry, shareReplay, delayWhen, map, from } from 'rxjs';\n\nconst terminal = new Terminal(process.env.HOST_URL!, {});\n\n/// Note: Api.getAllProducts needs to be implemented by you\nconst products$ = defer(() => Api.getAllProducts()) // Fetch all product information from the external system API\n  .pipe(\n    // Convert external system product information to Yuan product information\n    map((extProducts) =>\n      extProducts.map((x) => ({\n        // Define a globally unique product ID (it's recommended to use the vendor's name as a prefix)\n        product_id: `${VENDOR_NAME}/${x.id}`,\n        // ...map other fields (implement yourself)\n      })),\n    ),\n    // Retry every hour (adjust according to actual conditions)\n    repeat({ delay: 3600_000 }),\n    retry({ delay: 3600_000 }),\n    // Cache the latest product information\n    shareReplay(1),\n  );\n\n// Store product information in the database\nproducts$\n  .pipe(\n    delayWhen((products) => from(writeDataRecords(terminal, products.map(getDataRecordWrapper('product')!)))),\n  )\n  .subscribe();\n"})}),"\n",(0,o.jsx)(n.admonition,{title:"Why is it necessary to store product information in the database?",type:"info",children:(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Product specifications are information that needs to be accessed frequently in Yuan, storing them in the database can improve access speed."}),"\n",(0,o.jsx)(n.li,{children:"The external system may have API rate limits, making it inefficient to query the external system for each request."}),"\n",(0,o.jsx)(n.li,{children:"Changes to product specification information are infrequent, making caching highly valuable."}),"\n"]})}),"\n",(0,o.jsx)(n.admonition,{title:"What if the external system does not support querying all product information?",type:"info",children:(0,o.jsx)(n.p,{children:"You can choose not to implement a full query but instead implement an incremental query."})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},4317:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(3981);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);