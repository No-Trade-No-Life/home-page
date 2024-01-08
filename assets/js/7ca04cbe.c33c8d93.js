"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[3998],{6470:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=n(9541),i=n(4317);const r={sidebar_position:2},a="What is Product",l={id:"basics/what-is-product",title:"What is Product",description:"A product is a set of information which describes a financial instrument. It is used to identify a financial instrument in the trading system.",source:"@site/docs/basics/what-is-product.md",sourceDirName:"basics",slug:"/basics/what-is-product",permalink:"/docs/basics/what-is-product",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/basics/what-is-product.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Basic Concepts",permalink:"/docs/category/basic-concepts"},next:{title:"What is Account",permalink:"/docs/basics/what-is-account"}},d={},o=[{value:"Product specification",id:"product-specification",level:2},{value:"Association of products",id:"association-of-products",level:2},{value:"World status of products",id:"world-status-of-products",level:2}];function c(e){const s={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"what-is-product",children:"What is Product"}),"\n",(0,t.jsxs)(s.p,{children:["A ",(0,t.jsx)(s.strong,{children:"product"})," is a set of information which describes a financial instrument. It is used to identify a financial instrument in the trading system."]}),"\n",(0,t.jsxs)(s.p,{children:["In the world of trading, terms that express the same concept may be seen elsewhere, such as security, symbol, instrument, commodity. In fact, they all refer to ",(0,t.jsx)(s.strong,{children:"product"}),", but the degree of abstraction and source of the words are different. We choose the term ",(0,t.jsx)(s.strong,{children:"product"})," because it is plain enough and not too narrow to include all global trade-able things."]}),"\n",(0,t.jsx)(s.h2,{id:"product-specification",children:"Product specification"}),"\n",(0,t.jsx)(s.p,{children:"When we talk about product, we must first talk about its specifications.\nThe specifications for evaluating products have the following dimensions:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field name"}),(0,t.jsx)(s.th,{children:"Meaning and remarks"}),(0,t.jsx)(s.th,{children:"Example value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"product_id"})}),(0,t.jsxs)(s.td,{children:["(",(0,t.jsx)(s.strong,{children:"Required"}),") Which product does this specification information belong to? How to distinguish it from other products?"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"XAUUSD"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"datasource_id"})}),(0,t.jsxs)(s.td,{children:["(",(0,t.jsx)(s.strong,{children:"Required"}),")\xa0Who provided this specification information?"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"Y"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"currency"})}),(0,t.jsxs)(s.td,{children:["(",(0,t.jsx)(s.strong,{children:"Required"}),") What currency is used for trading this product?"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"USD"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"name"})}),(0,t.jsx)(s.td,{children:"How do humans generally refer to this species?"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"Gold Spot vs US Dollar"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"value_scale"})}),(0,t.jsx)(s.td,{children:'How many units of the subject matter is equivalent to 1 lot? How much profit and loss will be generated by changes in unit prices? Some places are also called "contract multipliers". Default to 1'}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"100"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"value_scale_unit"})}),(0,t.jsx)(s.td,{children:"What is the unit of this value scale? Leave it undefined if unit is product itself. Or set to currency if needed."}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"price_step"})}),(0,t.jsx)(s.td,{children:"What is the minimum price per hop for this product? The quoted price in the market must be an integer multiple of this unit. However, the actual transaction price does not need to comply with this constraint. Default to 1"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"0.01"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"volume_step"})}),(0,t.jsx)(s.td,{children:"How many lots should this product be sold at least? The order volume and transaction volume of this product must be an integer multiple of this unit. Default to 1"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"0.01"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"margin_rate"})}),(0,t.jsx)(s.td,{children:"How many times the market value needs to be paid as margin when trading this product? * This mechanism is independent of the account's own system leverage ratio. Default to 1"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"1"})," (100%)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"max_position"})}),(0,t.jsx)(s.td,{children:"What is the maximum position size for holding this product? Default to Infinity."}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"max_volume"})}),(0,t.jsx)(s.td,{children:"What is the maximum number of orders that can be placed at one time? * Does not affect multiple orders. Default to Infinity"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"allow_long"})}),(0,t.jsx)(s.td,{children:"Default to true"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"true"})," (yes)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"allow_short"})}),(0,t.jsx)(s.td,{children:"Default to true"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"true"})," (yes)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"spread"})}),(0,t.jsx)(s.td,{children:"What is the spread for Ask - Bid? Default to 0"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"0"})})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"association-of-products",children:"Association of products"}),"\n",(0,t.jsx)(s.p,{children:"products are not independent with each other, and there are many connections between them."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Futures of the same specification will form multiple specific contract products due to different expiration dates.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["For example, ",(0,t.jsx)(s.code,{children:"IF2301"})," refers to the CSI 300 stock index futures contract expiring in January 2023; IF2302 expires in February 2023..."]}),"\n",(0,t.jsx)(s.li,{children:"In theory, there will be an infinite number of products of the same futures, which will continue to roll back and extend over time."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Options of the same specification will form multiple specific contract products due to different expiration dates, bullish puts, and exercise prices.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["For example, ",(0,t.jsx)(s.code,{children:"ZN2306C1180"})," refers to a bullish option on US ten-year Treasury bonds that expires in June 2023 and is called over at 118.0."]}),"\n",(0,t.jsx)(s.li,{children:"Because the exercise price has many values, options will form a much larger number of products than similar futures contracts (even inexhaustible)."}),"\n",(0,t.jsx)(s.li,{children:'On the same expiration date, the difference between bullish put and exercise prices will form a table, which is also called the "option chain".'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Same product, but on different exchanges .","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"For example, gold, the specifications of the three major exchanges in the US New York, United Kingdom London, and Hong Kong, China are different, but they are highly linked products, and the quotes can be calculated from each other."}),"\n",(0,t.jsx)(s.li,{children:"For example, foreign exchange can be traded in major banks, but the quotes may vary slightly, resulting in decentralized trading and different data sources providing variety specifications, so the variety is not exactly the same."}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Note: According to the definition of currency, currency is also a kind of commodity that serves as a general equivalent."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["The supply and demand relationship and competition relationship between commodities depend on the popularity of production technology and the strength of substitutes.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"For example, the smelting technology of iron will consume iron ore and coal, and produce steel. Therefore, these products will become related upstream and downstream products, and their trends will be correlated."}),"\n",(0,t.jsx)(s.li,{children:"For example, in the electric vehicle industry, car companies will form a supply-demand relationship with upstream battery manufacturers, and there will be a competitive relationship between car companies and car companies."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The benefits of building association among products are:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"You can use the market of one product to replace the market of another product for research and guidance trading."}),"\n",(0,t.jsx)(s.li,{children:"Multiple products can be compiled into an index to study the overall trend."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"world-status-of-products",children:"World status of products"}),"\n",(0,t.jsx)(s.p,{children:"Two factors that measure the size of the market: total amount and daily turnover, which respectively measure the size and activity of the market."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Forex, the global foreign exchange market, has a daily turnover of about ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mn,{children:"7.50"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"r"}),(0,t.jsx)(s.mi,{children:"i"}),(0,t.jsx)(s.mi,{children:"l"}),(0,t.jsx)(s.mi,{children:"l"}),(0,t.jsx)(s.mi,{children:"i"}),(0,t.jsx)(s.mi,{children:"o"}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mi,{children:"d"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"h"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"o"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"l"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"m"}),(0,t.jsx)(s.mi,{children:"o"}),(0,t.jsx)(s.mi,{children:"u"}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"i"}),(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"i"}),(0,t.jsx)(s.mi,{children:"m"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"d"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"o"}),(0,t.jsx)(s.mi,{children:"b"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"l"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"t"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"7.50 trillion, and the total amount is estimated to be at least "})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord",children:"7.50"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"ll"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"an"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"am"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"ses"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"ima"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"tl"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]}),"120 trillion based on global GDP and Broad Money."]}),"\n",(0,t.jsx)(s.li,{children:"The total amount (market value) of stocks is 103 trillion US dollars, and the global daily turnover is 700 billion US dollars. The largest US stock market accounts for 60%."}),"\n",(0,t.jsx)(s.li,{children:"Bonds, the total global amount (debt) 60 trillion US dollars; the largest US bond market, the daily trading volume 600 billion US dollars, the total amount 24.30 trillion US dollars."}),"\n",(0,t.jsx)(s.li,{children:"Commodities, the trading of commodities in the secondary market is mainly in the form of futures and options, and the scale is relatively small compared to the above markets."}),"\n",(0,t.jsx)(s.li,{children:"Cryptos, a fledgling market, are volatile, with a total amount (market cap) of about $1 trillion."}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Fund market, the global regulated Public Private Offering Fund publishes 67.80 trillion US dollars, and the nature of the fund determines that its transaction is not very active. Among them, Chinese public funds are about 26 trillion RMB, and Private Offering Funds are about 20 trillion RMB. However, strictly speaking, the fund market is a further derivative product and cannot be compared with other markets at the same level."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Another dimension is: spot > futures > options, the more derivative, the smaller the scale, after all, the economic foundation determines the superstructure."})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4317:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>a});var t=n(3981);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);