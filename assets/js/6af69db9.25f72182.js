"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[3627],{2525:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=i(9541),r=i(4317);const o={sidebar_position:4},t="Using Technical Indicators",c={id:"agent-guide/using-technical-indicators",title:"Using Technical Indicators",description:"Technical Indicators helps analyzing the time series, which is one of advanced forms of hook.",source:"@site/docs/agent-guide/using-technical-indicators.md",sourceDirName:"agent-guide",slug:"/agent-guide/using-technical-indicators",permalink:"/docs/agent-guide/using-technical-indicators",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/agent-guide/using-technical-indicators.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Using Position Manager",permalink:"/docs/agent-guide/using-position-manager"}},a={},l=[{value:"Visualization",id:"visualization",level:2},{value:"Improve Code",id:"improve-code",level:2},{value:"Further Reading",id:"further-reading",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"using-technical-indicators",children:"Using Technical Indicators"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Technical Indicators"})," helps analyzing the time series, which is one of advanced forms of hook."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Prerequisite Reading:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./using-hooks",children:"Using Hooks"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can compose your own technical indicators by using the basic hooks."}),"\n",(0,s.jsx)(n.p,{children:"For example, you want to use Simple Moving Average (SMA) on close price series."}),"\n",(0,s.jsx)(n.p,{children:"Let's see how to implement it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export const useSMA = (source: Series, period: number): Series => {\n  const SMA = useSeries(`SMA(${source.name},${period})`, source, { display: 'line' });\n  useEffect(() => {\n    const i = source.length - 1;\n    if (i < 0) return;\n    // slice the window\n    const values = source.slice(Math.max(0, i - period), i + 1);\n    // sum up\n    const sum = values.reduce((a, b) => a + b, 0);\n    const count = Math.min(i + 1, period);\n    // average\n    SMA[i] = sum / count;\n  });\n\n  return SMA;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Create a series, and maintain the series values. Series is almost an array but with some extra metadata."}),"\n",(0,s.jsx)(n.p,{children:"Very simple. Isn't it? Let's use it in agent."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { useSMA } from '@libs';\nexport default () => {\n  const { close } = useOHLC('Y', 'XAUUSD', 'PT1H');\n  const ma20 = useSMA(close, 20);\n  const ma60 = useSMA(close, 60);\n  // do something\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"visualization",children:"Visualization"}),"\n",(0,s.jsxs)(n.p,{children:["You can specify the third parameter of ",(0,s.jsx)(n.code,{children:"useSeries"})," to control the visualization."]}),"\n",(0,s.jsx)(n.p,{children:"You can specify the display type of the series."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It will hide the series by default."}),"\n",(0,s.jsxs)(n.li,{children:["You can draw line chart by specify ",(0,s.jsx)(n.code,{children:"display: 'line'"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["You can draw histogram by specify ",(0,s.jsx)(n.code,{children:"display: 'hist'"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can specify which chart to place the series."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It will place the series follow the parent series by default."}),"\n",(0,s.jsxs)(n.li,{children:["You can place the series on a new chart by specify ",(0,s.jsx)(n.code,{children:"chart: 'new'"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["You can place the series follow another series by specify ",(0,s.jsx)(n.code,{children:"chart: anotherSeries.id"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"improve-code",children:"Improve Code"}),"\n",(0,s.jsx)(n.p,{children:"You can use dynamic programming to improve the calculation performance of technical indicators."}),"\n",(0,s.jsx)(n.p,{children:"It's a key point that you can cache the intermediate result."}),"\n",(0,s.jsx)(n.p,{children:"For example, SMA need to calculate a moving sum of source values. It's possible to cache the sum of previous period."}),"\n",(0,s.jsx)(n.p,{children:"The next time, you can use the previous sum to calculate the current sum."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export const useSUM = (source: Series, period: number) => {\n  const SUM = useSeries(`SUM(${source.name}, ${period})`, source, {});\n  useEffect(() => {\n    const i = source.length - 1;\n    if (i < 0) return;\n    SUM[i] = (source[i] || 0) + (i > 0 ? SUM[i - 1] : 0) - (i - period >= 0 ? source[i - period] || 0 : 0);\n  });\n  return SUM;\n};\n\nexport const useSMA = (source: Series, period: number): Series => {\n  const SUM = useSUM(source, period);\n  const SMA = useSeries(`SMA(${source.name},${period})`, source, { display: 'line' });\n  useEffect(() => {\n    const i = source.length - 1;\n    if (i < 0) return;\n    SMA[i] = SUM[i] / Math.min(i + 1, period);\n  });\n\n  return SMA;\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No need to slice the window, it's a big performance improvement."}),"\n",(0,s.jsx)(n.li,{children:"The time complexity is O(n) now."}),"\n",(0,s.jsx)(n.li,{children:"Cumulative sum is a common technique in dynamic programming."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now you can find a pattern of technical indicators. Let's extract it as a helper hook function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export const useSeriesMap = (\n  name: string,\n  parent: Series,\n  tags: Record<string, any> | undefined,\n  fn: (i: number, series: Series) => number,\n) => {\n  const series = useSeries(name, parent, tags);\n  useEffect(() => {\n    const i = parent.length - 1;\n    if (i < 0) return;\n    series[i] = fn(i, series);\n  });\n  return series;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then you can use it to implement the SMA indicator:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export const useSUM = (source: Series, period: number) =>\n  useSeriesMap(\n    `SUM(${source.name}, ${period})`,\n    source,\n    {},\n    (i, SUM) =>\n      // ISSUE: SUM may keep outputting NaN if source has NaN values\n      // => use fallback to prevent source[i], source[i - period] is NaN\n      (source[i] || 0) + (i > 0 ? SUM[i - 1] : 0) - (i - period >= 0 ? source[i - period] || 0 : 0),\n  );\n\nexport const useSMA = (source: Series, period: number): Series => {\n  const SUM = useSUM(source, period);\n  const SMA = useSeriesMap(\n    `SMA(${source.name},${period})`,\n    source,\n    {\n      display: 'line',\n    },\n    (i) => SUM[i] / Math.min(i + 1, period),\n  );\n  return SMA;\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It's much more concise now."}),"\n",(0,s.jsxs)(n.li,{children:["The optimized indicators are ready for production. You can import them from ",(0,s.jsx)(n.code,{children:"@libs"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsxs)(n.p,{children:["You can also checkout the ",(0,s.jsx)(n.a,{href:"https://github.com/No-Trade-No-Life/Yuan-Public-Workspace/blob/main/%40models/double-ma.ts",children:"double moving average strategy"})," to learn how to use it."]}),"\n",(0,s.jsx)(n.p,{children:"You can find out more indicators resource in the repo:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/No-Trade-No-Life/Yuan-Public-Workspace",children:"Yuan Public Workspace"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4317:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>t});var s=i(3981);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);