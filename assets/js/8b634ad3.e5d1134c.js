"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[590],{4685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(9541),r=n(4317);const a={},o="Providing Historical Market Data",s={id:"vendor-guide/vendor-historical-market-data",title:"Providing Historical Market Data",description:"Market data comes in several different specific types, but they can all be summarized as queries for a specific type, within a specific time range, and for a specific sequence.",source:"@site/docs/vendor-guide/vendor-historical-market-data.md",sourceDirName:"vendor-guide",slug:"/vendor-guide/vendor-historical-market-data",permalink:"/docs/vendor-guide/vendor-historical-market-data",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/vendor-guide/vendor-historical-market-data.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Providing Account Information",permalink:"/docs/vendor-guide/vendor-account-info"},next:{title:"Providing Historical Order Data",permalink:"/docs/vendor-guide/vendor-historical-order"}},d={},c=[];function l(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"providing-historical-market-data",children:"Providing Historical Market Data"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"../basics/what-is-market-data",children:"Market data"})," comes in several different specific types, but they can all be summarized as queries for a specific type, within a specific time range, and for a specific sequence."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import { Terminal, provideSeriesData } from '@yuants/protocol';\n\nconst terminal = new Terminal(process.env.HOST_URL!, {});\n\nprovideDataSeries(\n  terminal,\n  {\n    // Type of the data series\n    type: 'ohlc',\n    // Regular expression for the data series, matching Series IDs will be passed to the callback function\n    pattern: `^${VENDOR_NAME}/`,\n  },\n  async (series_id, [from, to]) => {\n    // Parse the product ID and duration from the Series ID\n    const [, product_id, duration] = decodePath(series_id);\n    // Fetch OHLC data from an external system (to be implemented by the provider)\n    const res = await Api.getOHLC(product_id, duration, from, to);\n    // Convert to Yuan's OHLC-V data\n    return res.map((x) => ({\n      product_id,\n      duration,\n      opened_at: x.t,\n      closed_at: inferClosedAt(x.t, duration), // Calculate the closing time (flexibly handled according to market rules)\n      open: x.o,\n      high: x.h,\n      low: x.l,\n      close: x.c,\n      volume: x.v,\n    }));\n  },\n);\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Vendors provide historical market data for all OHLC data prefixed with ",(0,i.jsx)(t.code,{children:"VENDOR_NAME"}),". However, this does not guarantee that all OHLC data prefixed with ",(0,i.jsx)(t.code,{children:"VENDOR_NAME"})," exists, so vendors need to determine whether the Series ID exists themselves. Generally, vendors are indeed responsible for verifying the existence of Series IDs within their jurisdiction."]}),"\n",(0,i.jsx)(t.li,{children:"When a Series ID does not exist, an exception is thrown, and the client will receive a 404 error."}),"\n",(0,i.jsx)(t.li,{children:"When there is no data within the given time range, an empty array is returned."}),"\n",(0,i.jsx)(t.li,{children:"When the API returns data outside the given time range, Yuan will automatically filter out the out-of-range data. Providers do not need to handle this themselves."}),"\n",(0,i.jsxs)(t.li,{children:["The given time range is a left-closed, right-open interval, i.e., ",(0,i.jsx)(t.code,{children:"[from, to)"}),", with timestamps in milliseconds."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4317:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var i=n(3981);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);