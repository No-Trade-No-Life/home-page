"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[998],{158:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var n=a(6393);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=d(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(h,o(o({ref:e},u),{},{components:a})):n.createElement(h,o({ref:e},u))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5743:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(5296),r=(a(6393),a(158));const i={sidebar_position:1},o="What is Product",l={unversionedId:"basics/what-is-product",id:"basics/what-is-product",title:"What is Product",description:"A product is a set of information which describes a financial instrument. It is used to identify a financial instrument in the trading system.",source:"@site/docs/basics/what-is-product.md",sourceDirName:"basics",slug:"/basics/what-is-product",permalink:"/docs/basics/what-is-product",draft:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/basics/what-is-product.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Basic Concepts",permalink:"/docs/category/basic-concepts"},next:{title:"What is Account",permalink:"/docs/basics/what-is-account"}},s={},d=[{value:"Product specification",id:"product-specification",level:2},{value:"Association of products",id:"association-of-products",level:2},{value:"World status of products",id:"world-status-of-products",level:2}],u={toc:d},p="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-product"},"What is Product"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"product")," is a set of information which describes a financial instrument. It is used to identify a financial instrument in the trading system."),(0,r.kt)("p",null,"In the world of trading, terms that express the same concept may be seen elsewhere, such as security, symbol, instrument, commodity. In fact, they all refer to ",(0,r.kt)("strong",{parentName:"p"},"product"),", but the degree of abstraction and source of the words are different. We choose the term ",(0,r.kt)("strong",{parentName:"p"},"product")," because it is plain enough and not too narrow to include all global trade-able things."),(0,r.kt)("h2",{id:"product-specification"},"Product specification"),(0,r.kt)("p",null,"When we talk about product, we must first talk about its specifications.\nThe specifications for evaluating products have the following dimensions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning and remarks"),(0,r.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"product_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Which product does this specification information belong to? How to distinguish it from other products?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"XAUUSD"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"datasource_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Who provided this specification information?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Y"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"How do humans generally refer to this species?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Gold Spot vs US Dollar"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base_currency")),(0,r.kt)("td",{parentName:"tr",align:null},"What currency is used for trading this product?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"USD"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"quoted_currency")),(0,r.kt)("td",{parentName:"tr",align:null},"What currency is used for pricing this product? Usually only applicable to foreign exchange."),(0,r.kt)("td",{parentName:"tr",align:null},"Leave blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"price_step")),(0,r.kt)("td",{parentName:"tr",align:null},"What is the minimum price per hop for this product? The quoted price in the market must be an integer multiple of this unit. However, the actual transaction price does not need to comply with this constraint. Default to 1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0.01"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"volume_step")),(0,r.kt)("td",{parentName:"tr",align:null},"How many lots should this product be sold at least? The order volume and transaction volume of this product must be an integer multiple of this unit. Default to 1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0.01"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_speed")),(0,r.kt)("td",{parentName:"tr",align:null},'How many units of the subject matter is equivalent to 1 lot? How much profit and loss will be generated by changes in unit prices? Some places are also called "contract multipliers". Default to 1'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"100"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"is_underlying_base_currency")),(0,r.kt)("td",{parentName:"tr",align:null},'Is the unit of this value rate based on the base currency? (Currently, only the values of foreign exchange and bond spot have been found to be "yes"). Default to false'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")," (No) If the answer is yes, it means that you are trading 100 USD worth of gold for one lot, not 100 ounces of gold.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"margin_rate")),(0,r.kt)("td",{parentName:"tr",align:null},"How many times the market value needs to be paid as margin when trading this product? ","*"," This mechanism is independent of the account's own system leverage ratio. Default to 1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," (100%)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_position")),(0,r.kt)("td",{parentName:"tr",align:null},"What is the maximum position size for holding this product? Default to Infinity."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_volume")),(0,r.kt)("td",{parentName:"tr",align:null},"What is the maximum number of orders that can be placed at one time? ","*"," Does not affect multiple orders. Default to Infinity"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"allow_long")),(0,r.kt)("td",{parentName:"tr",align:null},"Default to true"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," (yes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"allow_short")),(0,r.kt)("td",{parentName:"tr",align:null},"Default to true"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," (yes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spread")),(0,r.kt)("td",{parentName:"tr",align:null},"What is the spread for Ask - Bid?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"))))),(0,r.kt)("h2",{id:"association-of-products"},"Association of products"),(0,r.kt)("p",null,"products are not independent with each other, and there are many connections between them."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Futures of the same specification will form multiple specific contract products due to different expiration dates.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"IF2301")," refers to the CSI 300 stock index futures contract expiring in January 2023; IF2302 expires in February 2023..."),(0,r.kt)("li",{parentName:"ul"},"In theory, there will be an infinite number of products of the same futures, which will continue to roll back and extend over time."))),(0,r.kt)("li",{parentName:"ul"},"Options of the same specification will form multiple specific contract products due to different expiration dates, bullish puts, and exercise prices.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"ZN2306C1180")," refers to a bullish option on US ten-year Treasury bonds that expires in June 2023 and is called over at 118.0."),(0,r.kt)("li",{parentName:"ul"},"Because the exercise price has many values, options will form a much larger number of products than similar futures contracts (even inexhaustible)."),(0,r.kt)("li",{parentName:"ul"},'On the same expiration date, the difference between bullish put and exercise prices will form a table, which is also called the "option chain".'))),(0,r.kt)("li",{parentName:"ul"},"Same product, but on different exchanges .",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, gold, the specifications of the three major exchanges in the US New York, United Kingdom London, and Hong Kong, China are different, but they are highly linked products, and the quotes can be calculated from each other."),(0,r.kt)("li",{parentName:"ul"},"For example, foreign exchange can be traded in major banks, but the quotes may vary slightly, resulting in decentralized trading and different data sources providing variety specifications, so the variety is not exactly the same."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note: According to the definition of currency, currency is also a kind of commodity that serves as a general equivalent."))))),(0,r.kt)("li",{parentName:"ul"},"The supply and demand relationship and competition relationship between commodities depend on the popularity of production technology and the strength of substitutes.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, the smelting technology of iron will consume iron ore and coal, and produce steel. Therefore, these products will become related upstream and downstream products, and their trends will be correlated."),(0,r.kt)("li",{parentName:"ul"},"For example, in the electric vehicle industry, car companies will form a supply-demand relationship with upstream battery manufacturers, and there will be a competitive relationship between car companies and car companies.")))),(0,r.kt)("p",null,"The benefits of building association among products are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can use the market of one product to replace the market of another product for research and guidance trading."),(0,r.kt)("li",{parentName:"ul"},"Multiple products can be compiled into an index to study the overall trend.")),(0,r.kt)("h2",{id:"world-status-of-products"},"World status of products"),(0,r.kt)("p",null,"Two factors that measure the size of the market: total amount and daily turnover, which respectively measure the size and activity of the market."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Forex, the global foreign exchange market, has a daily turnover of about $7.50 trillion, and the total amount is estimated to be at least $120 trillion based on global GDP and Broad Money."),(0,r.kt)("li",{parentName:"ol"},"The total amount (market value) of stocks is 103 trillion US dollars, and the global daily turnover is 700 billion US dollars. The largest US stock market accounts for 60%."),(0,r.kt)("li",{parentName:"ol"},"Bonds, the total global amount (debt) 60 trillion US dollars; the largest US bond market, the daily trading volume 600 billion US dollars, the total amount 24.30 trillion US dollars."),(0,r.kt)("li",{parentName:"ol"},"Commodities, the trading of commodities in the secondary market is mainly in the form of futures and options, and the scale is relatively small compared to the above markets."),(0,r.kt)("li",{parentName:"ol"},"Cryptos, a fledgling market, are volatile, with a total amount (market cap) of about $1 trillion.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fund market, the global regulated Public Private Offering Fund publishes 67.80 trillion US dollars, and the nature of the fund determines that its transaction is not very active. Among them, Chinese public funds are about 26 trillion RMB, and Private Offering Funds are about 20 trillion RMB. However, strictly speaking, the fund market is a further derivative product and cannot be compared with other markets at the same level.")),(0,r.kt)("p",null,"Another dimension is: spot > futures > options, the more derivative, the smaller the scale, after all, the economic foundation determines the superstructure."))}c.isMDXComponent=!0}}]);