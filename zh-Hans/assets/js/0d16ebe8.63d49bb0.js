"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[7621],{95:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=r(9541),o=r(4317);const i={},s="\u63d0\u4f9b\u5386\u53f2\u884c\u60c5\u6570\u636e",d={id:"vendor-guide/vendor-historical-market-data",title:"\u63d0\u4f9b\u5386\u53f2\u884c\u60c5\u6570\u636e",description:"\u884c\u60c5\u6570\u636e\u6709\u82e5\u5e72\u79cd\u4e0d\u540c\u7684\u5177\u4f53\u7c7b\u578b\uff0c\u4f46\u90fd\u53ef\u4ee5\u5f52\u7ed3\u4e3a\u5bf9\u7279\u5b9a\u7c7b\u578b\uff0c\u5728\u7279\u5b9a\u7684\u65f6\u95f4\u8303\u56f4\u5185\u7684\uff0c\u5bf9\u7279\u5b9a\u5e8f\u5217\u7684\u67e5\u8be2\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/vendor-guide/vendor-historical-market-data.md",sourceDirName:"vendor-guide",slug:"/vendor-guide/vendor-historical-market-data",permalink:"/zh-Hans/docs/vendor-guide/vendor-historical-market-data",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/vendor-guide/vendor-historical-market-data.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u63d0\u4f9b\u8d26\u6237\u4fe1\u606f",permalink:"/zh-Hans/docs/vendor-guide/vendor-account-info"},next:{title:"\u63d0\u4f9b\u5386\u53f2\u8ba2\u5355\u6570\u636e",permalink:"/zh-Hans/docs/vendor-guide/vendor-historical-order"}},a={},c=[];function l(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u63d0\u4f9b\u5386\u53f2\u884c\u60c5\u6570\u636e",children:"\u63d0\u4f9b\u5386\u53f2\u884c\u60c5\u6570\u636e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"../basics/what-is-market-data",children:"\u884c\u60c5\u6570\u636e"}),"\u6709\u82e5\u5e72\u79cd\u4e0d\u540c\u7684\u5177\u4f53\u7c7b\u578b\uff0c\u4f46\u90fd\u53ef\u4ee5\u5f52\u7ed3\u4e3a\u5bf9\u7279\u5b9a\u7c7b\u578b\uff0c\u5728\u7279\u5b9a\u7684\u65f6\u95f4\u8303\u56f4\u5185\u7684\uff0c\u5bf9\u7279\u5b9a\u5e8f\u5217\u7684\u67e5\u8be2\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { Terminal, provideSeriesData } from '@yuants/protocol';\n\nconst terminal = new Terminal(process.env.HOST_URL!, {});\n\nprovideDataSeries(\n  terminal,\n  {\n    // \u6570\u636e\u5e8f\u5217\u7684\u7c7b\u578b\n    type: 'ohlc',\n    // \u6570\u636e\u5e8f\u5217\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5339\u914d\u7684 Series ID \u4f1a\u88ab\u4f20\u5165\u5230\u56de\u8c03\u51fd\u6570\u4e2d\n    pattern: `^${VENDOR_NAME}/`,\n  },\n  async (series_id, [from, to]) => {\n    // \u4ece Series ID \u4e2d\u89e3\u6790\u51fa\u4ea7\u54c1 ID \u548c\u5468\u671f\n    const [, product_id, duration] = decodePath(series_id);\n    // \u4ece\u5916\u90e8\u7cfb\u7edf\u83b7\u53d6 OHLC \u6570\u636e (\u9700\u8981\u81ea\u884c\u5b9e\u73b0)\n    const res = await Api.getOHLC(product_id, duration, from, to);\n    // \u8f6c\u6362\u4e3a Yuan \u7684 OHLC-V \u6570\u636e\n    return res.map((x) => ({\n      product_id,\n      duration,\n      opened_at: x.t,\n      closed_at: inferClosedAt(x.t, duration), // \u8ba1\u7b97\u6536\u76d8\u65f6\u95f4 (\u6839\u636e\u6bcf\u4e2a\u5e02\u573a\u7684\u89c4\u5219\u7075\u6d3b\u5904\u7406)\n      open: x.o,\n      high: x.h,\n      low: x.l,\n      close: x.c,\n      volume: x.v,\n    }));\n  },\n);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4f9b\u5e94\u5546\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"VENDOR_NAME"})," \u5bf9\u6240\u6709\u524d\u7f00\u4e3a ",(0,t.jsx)(n.code,{children:"VENDOR_NAME"})," \u7684 OHLC \u6570\u636e\u63d0\u4f9b\u5386\u53f2\u884c\u60c5\u6570\u636e\u3002\u4f46\u8fd9\u663e\u7136\u4e0d\u80fd\u4fdd\u8bc1\u4ee5 ",(0,t.jsx)(n.code,{children:"VENDOR_NAME"})," \u4e3a\u524d\u7f00\u7684\u6240\u6709 OHLC \u6570\u636e\u90fd\u662f\u5b58\u5728\u7684\uff0c\u56e0\u6b64\u4f9b\u5e94\u5546\u9700\u8981\u81ea\u884c\u5224\u65ad Series ID \u662f\u5426\u5b58\u5728\u3002\u4e00\u822c\u800c\u8a00\uff0c\u4f9b\u5e94\u5546\u4e5f\u786e\u5b9e\u6709\u8d23\u4efb\u53bb\u9274\u522b\u81ea\u8eab\u8f96\u533a\u5185\u7684 Series ID \u662f\u5426\u5b58\u5728\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5f53 Series ID \u4e0d\u5b58\u5728\u65f6\uff0c\u629b\u51fa\u5f02\u5e38\uff0c\u5ba2\u6237\u7aef\u4f1a\u63a5\u53d7\u5230 404 \u9519\u8bef\u7c7b\u578b\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5f53\u7ed9\u5b9a\u7684\u65f6\u95f4\u8303\u56f4\u5185\u6ca1\u6709\u6570\u636e\u65f6\uff0c\u8fd4\u56de\u7a7a\u6570\u7ec4\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5f53 API \u8fd4\u56de\u4e86\u8d85\u51fa\u7ed9\u5b9a\u65f6\u95f4\u8303\u56f4\u7684\u6570\u636e\u65f6\uff0cYuan \u4f1a\u81ea\u52a8\u8fc7\u6ee4\u6389\u8d85\u51fa\u8303\u56f4\u7684\u6570\u636e\u3002\u63d0\u4f9b\u5546\u4e0d\u9700\u8981\u81ea\u884c\u5904\u7406\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u7ed9\u5b9a\u7684\u65f6\u95f4\u8303\u56f4\u662f\u5de6\u95ed\u53f3\u5f00\u533a\u95f4\uff0c\u5373 ",(0,t.jsx)(n.code,{children:"[from, to)"}),"\uff0c\u65f6\u95f4\u6233\u7684\u5355\u4f4d\u662f\u6beb\u79d2\u3002"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4317:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>s});var t=r(3981);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);