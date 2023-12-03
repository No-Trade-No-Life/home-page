"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[1743],{7406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(9541),i=n(4317);const a={sidebar_position:1},r="Creating your first strategy",s={id:"tutorial-basics/creating-your-first-strategy",title:"Creating your first strategy",description:"Claude Elwood Shannon was an American mathematician, electrical engineer, and cryptographer known as \"the father of information theory\". He found a simple investment strategy that can be used to beat the market. The strategy is called the Shannon's Rebalance, Shannon's Demon or Shannon's Infinite Grid_.",source:"@site/docs/tutorial-basics/creating-your-first-strategy.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/creating-your-first-strategy",permalink:"/docs/tutorial-basics/creating-your-first-strategy",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/tutorial-basics/creating-your-first-strategy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Getting Start",permalink:"/docs/category/getting-start"},next:{title:"Real world trading",permalink:"/docs/tutorial-basics/real-world-trading"}},l={},c=[{value:"Open your workspace",id:"open-your-workspace",level:2},{value:"Create a new agent",id:"create-a-new-agent",level:2},{value:"Time to hello world",id:"time-to-hello-world",level:2},{value:"Implement the strategy",id:"implement-the-strategy",level:2},{value:"Get the data",id:"get-the-data",level:3},{value:"Build the strategy",id:"build-the-strategy",level:3},{value:"Back-test the strategy",id:"back-test-the-strategy",level:2},{value:"Further Reading",id:"further-reading",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"creating-your-first-strategy",children:"Creating your first strategy"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Claude_Shannon",children:"Claude Elwood Shannon"}),' was an American mathematician, electrical engineer, and cryptographer known as "the father of information theory". He found a simple investment strategy that can be used to beat the market. The strategy is called the ',(0,o.jsx)(t.em,{children:"Shannon's Rebalance"}),", ",(0,o.jsx)(t.em,{children:"Shannon's Demon"})," or ",(0,o.jsx)(t.em,{children:"Shannon's Infinite Grid"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The key idea is to rebalance your portfolio in regular. The rebalancing is done by selling the assets that have grown in value and buying the assets that have fallen in value."}),"\n",(0,o.jsx)(t.p,{children:"It's very easy to understand and implement. Let us introduce the strategy in detail."}),"\n",(0,o.jsx)(t.p,{children:"A classic instance is keep 50% currency and 50% position."}),"\n",(0,o.jsx)(t.p,{children:"For example, if you have 1000 USD to invest Gold. You can buy 500 USD Gold and keep 500 USD currency.\nAlways re-evaluate the value of Gold and currency, do re-balancing if need, keep 50% Gold and 50% currency.\nIf Gold price goes up, you sell some Gold to keep the balance.\nIf Gold price goes down, you buy Gold to keep the balance.\nIn long term, even if gold price doesn't raise, you can still make profit by re-balancing."}),"\n",(0,o.jsx)(t.p,{children:"Let's see how to implement and test this strategy in the following sections."}),"\n",(0,o.jsx)(t.h2,{id:"open-your-workspace",children:"Open your workspace"}),"\n",(0,o.jsx)(t.p,{children:"First, open your workspace. If you don't have one, please create one."}),"\n",(0,o.jsx)(t.p,{children:"If you are accessing Yuan in desktop device, please follow the steps below:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:'Click the "Open Workspace..." button on the home page.'}),"\n",(0,o.jsx)(t.li,{children:'Read the privacy declaration and click "Agree" button.'}),"\n",(0,o.jsx)(t.li,{children:"Select a local folder as your workspace folder. Recommend to use an empty folder."}),"\n",(0,o.jsx)(t.li,{children:"Confirm to import the example project. It's important to import some utils."}),"\n",(0,o.jsx)(t.li,{children:'Click the "Explorer" on the left panel, you will see the workspace folder. (That\'s the folder you selected in step 3)'}),"\n",(0,o.jsx)(t.li,{children:"You can find some folders and files in the workspace folder now."}),"\n",(0,o.jsx)(t.li,{children:"Well done! We will work in this workspace later."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:'If you are accessing the website from a mobile device (or you cannot find "Open Workspace" button), your device doesn\'t support to open a local folder, please follow the steps below:'}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:'Click the "Explorer" on the left panel, you will see the workspace folder. It\'s empty by default.'}),"\n",(0,o.jsx)(t.li,{children:'Click the "Import Examples" button on the top of Explorer panel. It\'s import to import some utils.'}),"\n",(0,o.jsx)(t.li,{children:"You can find some folders and files in the workspace folder now."}),"\n",(0,o.jsx)(t.li,{children:"Well done! We will work in this workspace later."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"create-a-new-agent",children:"Create a new agent"}),"\n",(0,o.jsx)(t.p,{children:'Trading strategy is named as "agent" in Yuan. Let\'s create a new agent.'}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:'Tap the mouse on the "..." button of the root folder in the Explorer panel.'}),"\n",(0,o.jsx)(t.li,{children:'Click the "Create File" button.'}),"\n",(0,o.jsxs)(t.li,{children:["Input the file name as ",(0,o.jsx)(t.code,{children:"shannon.ts"}),". (or any other name you like, but the file extension must be ",(0,o.jsx)(t.code,{children:".ts"}),")"]}),"\n",(0,o.jsxs)(t.li,{children:["You can see the new file ",(0,o.jsx)(t.code,{children:"shannon.ts"})," in the Explorer panel now."]}),"\n",(0,o.jsxs)(t.li,{children:['Tap the mouse on the "..." button of the ',(0,o.jsx)(t.code,{children:"shannon.ts"})," file."]}),"\n",(0,o.jsx)(t.li,{children:'Click the "Editor" button, so we can open a editor.'}),"\n",(0,o.jsx)(t.li,{children:"Well done! We will write the code in this editor later."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"You can also use your favorite editor (e.g. VSCode) to edit the file. Yuan will detect the file change and reload the agent automatically."})}),"\n",(0,o.jsx)(t.h2,{id:"time-to-hello-world",children:"Time to hello world"}),"\n",(0,o.jsx)(t.p,{children:"Now, let's write the code in the editor. The following code is a basic framework of an agent."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"export default () => {\n  console.info('Hello, World!');\n};\n"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:['Tap the mouse on the "..." button of the ',(0,o.jsx)(t.code,{children:"shannon.ts"})," file."]}),"\n",(0,o.jsx)(t.li,{children:'Click the "Run Agent" button, so we can open the agent configuration form.'}),"\n",(0,o.jsx)(t.li,{children:'It\'s a complex form, but we can ignore it now. Just click the "Run" button.'}),"\n",(0,o.jsx)(t.li,{children:'Instantly, you can see "Run completed" message on the top of page and "Account Performance" panel is shown.'}),"\n",(0,o.jsx)(t.li,{children:'Open the "Outputs" panel on the bottom of page, you can find the "Hello, World!" message. (maybe plenty of other irrelative messages)'}),"\n",(0,o.jsx)(t.li,{children:'"Account Performance" should be empty now, because we haven\'t done any trading yet.'}),"\n",(0,o.jsx)(t.li,{children:"Well done! We have run our first agent."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["You can find more details about the agent in the ",(0,o.jsx)(t.a,{href:"/docs/category/guide---agent",children:"Guide - Agent"})," section."]})}),"\n",(0,o.jsx)(t.h2,{id:"implement-the-strategy",children:"Implement the strategy"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["The complete code can be found in ",(0,o.jsx)(t.code,{children:"/@models/shannon.ts"})," of your workspace.\nIf you have trouble with coding. You can use it directly and skip this section."]})}),"\n",(0,o.jsx)(t.p,{children:"Now, let's implement the strategy step by step."}),"\n",(0,o.jsx)(t.h3,{id:"get-the-data",children:"Get the data"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"export default () => {\n  // Define parameters of the agent\n  const datasource_id = useParamString('DataSource', 'Y');\n  const product_id = useParamString('Product');\n  const period = useParamString('Period', 'PT1H');\n  // Get the product information and price data\n  const product = useProduct(datasource_id, product_id);\n  const { close } = useOHLC(datasource_id, product_id, period);\n};\n"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["We use ",(0,o.jsx)(t.code,{children:"useParamString"})," to get the parameters from the agent configuration form."]}),"\n",(0,o.jsx)(t.p,{children:'You can find the parameter in the "Agent" form after you click "Refresh" button on the top of "Agent" panel.'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["We use ",(0,o.jsx)(t.code,{children:"useProduct"})," to get the product information."]}),"\n",(0,o.jsxs)(t.p,{children:["The detail of product can be found in the ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.a,{href:"/docs/basics/what-is-product",children:"What is Product"})}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["We use ",(0,o.jsx)(t.code,{children:"useOHLC"})," to get the price data. We only need the ",(0,o.jsx)(t.code,{children:"close"})," price now."]}),"\n",(0,o.jsxs)(t.p,{children:["Variable ",(0,o.jsx)(t.code,{children:"close"})," is a series of price data. It's almost a array of numbers."]}),"\n",(0,o.jsxs)(t.p,{children:["'PT1H' is the period of the price data. It means 1 hour. It's a string format of ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ISO_8601#Durations",children:"ISO 8601 Duration"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Some other examples: 'PT1M' means 1 minute, 'PT15M' means 15 minutes, 'P1D' means 1 day, 'P1W' means 1 week."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Following the below steps to re-run the code:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:'Open the "Agent" panel on the left of the page.'}),"\n",(0,o.jsx)(t.li,{children:'Click "Refresh" button on the top of "Agent" panel.'}),"\n",(0,o.jsx)(t.li,{children:'You can find the parameters defined above in the "Agent params" section.'}),"\n",(0,o.jsx)(t.li,{children:"You can see some default value of the parameters. You can change them if you like."}),"\n",(0,o.jsxs)(t.li,{children:['Fill the "Product" parameter with ',(0,o.jsx)(t.code,{children:"XAUUSD"}),". It's the product id of Gold."]}),"\n",(0,o.jsx)(t.li,{children:'Click "Run" button on the top of "Agent" panel.'}),"\n",(0,o.jsx)(t.li,{children:'Soon, you can see a new "Account Performance" panel is shown.'}),"\n",(0,o.jsx)(t.li,{children:"It's still empty values in the \"Account Performance\" panel, because we haven't done any trading yet."}),"\n",(0,o.jsx)(t.li,{children:'Click "Technical Chart" button on the top of "Account Performance" panel.'}),"\n",(0,o.jsx)(t.li,{children:"You can see the price chart of Gold now."}),"\n",(0,o.jsx)(t.li,{children:"Well done! We have got the data."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"build-the-strategy",children:"Build the strategy"}),"\n",(0,o.jsx)(t.p,{children:"We need to monitor the price, calculate the expected position to hold. If the error of expected position and actual position is big enough, we can do re-balancing."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Define the ",(0,o.jsx)(t.strong,{children:"initial balance"})," and ",(0,o.jsx)(t.strong,{children:"threshold of error"})," as parameters, so that you can adjust them without changing the code."]}),"\n",(0,o.jsxs)(t.li,{children:["Use API ",(0,o.jsx)(t.code,{children:"useAccountInfo"})," to get the account information. So we can get the equity of the account."]}),"\n",(0,o.jsxs)(t.li,{children:["Use API ",(0,o.jsx)(t.code,{children:"useSimplePositionManager"})," to get the current position and set the target position. It's a simple position manager. It will do order operation to move your position to the target volume. It's very useful for some simple strategies."]}),"\n",(0,o.jsxs)(t.li,{children:["Define the ",(0,o.jsx)(t.strong,{children:"total value"})," is the sum of equity and initial balance. Because the initial equity of the account is zero. Yuan allow the account to have negative equity to show more details of the strategy."]}),"\n",(0,o.jsx)(t.li,{children:"The total value of the position is half of the total value. Because we want to keep 50% currency and 50% position."}),"\n",(0,o.jsx)(t.li,{children:"We can infer the position volume to hold from the total value of the position and the price of the product."}),"\n",(0,o.jsx)(t.li,{children:"Calculate the error rate of the expected position volume to actual."}),"\n",(0,o.jsx)(t.li,{children:"Set target volume if the error rate is big enough."}),"\n",(0,o.jsxs)(t.li,{children:["Note that the position volume has a minimum step (",(0,o.jsx)(t.code,{children:"volume_step"}),"). We need to round the order volume to the step."]}),"\n",(0,o.jsxs)(t.li,{children:["Check the above every hour by use ",(0,o.jsx)(t.code,{children:"useEffect"})," hook and set the second parameters with ",(0,o.jsx)(t.code,{children:"[close.length]"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { useSimplePositionManager } from '@libs';\nexport default () => {\n  // ...\n  // More parameters\n  const initial_balance = useParamNumber('Initial Balance', 100_000);\n  const threshold = useParamNumber('Threshold', 1);\n  // Get the account information\n  const accountInfo = useAccountInfo();\n  // Use a simple position manager\n  const [actualVolume, setVolume] = useSimplePositionManager(accountInfo.account_id, product_id);\n  // Re-balance the position\n  useEffect(() => {\n    if (close.length < 2) return;\n    const price = close[close.length - 1];\n    const totalValue = accountInfo.money.equity + initial_balance;\n    const totalValueToHold = totalValue * 0.5;\n    // infer the volume to hold\n    const valuePerVolume =\n      price * (product.value_speed ?? 1) * (product.is_underlying_base_currency ? -1 / price : 1);\n    const expectedVolume = totalValueToHold / valuePerVolume;\n    // calculate the error rate\n    const volume_step = product.volume_step ?? 1;\n    const errorRate = Math.abs((actualVolume - expectedVolume) / volume_step);\n    if (errorRate > threshold) {\n      setVolume(roundToStep(expectedVolume, volume_step));\n    }\n  }, [close.length]);\n};\n"})}),"\n",(0,o.jsx)(t.h2,{id:"back-test-the-strategy",children:"Back-test the strategy"}),"\n",(0,o.jsx)(t.p,{children:"We have completed the agent code. Now, let's back-test the strategy."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:['Fill the "Product" parameter with ',(0,o.jsx)(t.code,{children:"XAUUSD"}),". It's the product id of Gold."]}),"\n",(0,o.jsx)(t.li,{children:'Click "Run" button on the top of "Agent" panel.'}),"\n",(0,o.jsx)(t.li,{children:'Soon, you can see a new "Account Performance" panel is shown.'}),"\n",(0,o.jsx)(t.li,{children:"Well done! We have back-tested the strategy in the product Gold."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Back-test Result of XAUUSD",src:n(1133).Z+"",width:"2561",height:"1209"})}),"\n",(0,o.jsxs)(t.p,{children:["You can also back-test the strategy in other products. For example, you can back-test the strategy in the product ",(0,o.jsx)(t.code,{children:"EURUSD"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Back-test Result of EURUSD",src:n(9761).Z+"",width:"2561",height:"1212"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'You can click the "Technical Chart" button on the top of "Account Performance" panel to view the trading detail of this strategy.'}),"\n",(0,o.jsx)(t.li,{children:'You can click the "Order List" button on the top of "Account Performance" panel to view the order list of this strategy.'}),"\n",(0,o.jsx)(t.li,{children:'If you want to deploy the strategy to real market, you can click the "Deploy to Cloud" button on the top of "Agent" panel.'}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,o.jsxs)(t.p,{children:["There are some other examples in the ",(0,o.jsx)(t.code,{children:"/@models"})," folder of your workspace. You can learn more from them."]}),"\n",(0,o.jsxs)(t.p,{children:["If you want to learn more about the Yuan, please read the ",(0,o.jsx)(t.a,{href:"/docs/category/guide---agent",children:"Guide - Agent"})," section."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1133:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1-08417cf65acbefd496cc0c09dc4baa5b.png"},9761:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2-2f3630cafc7a84e4e07e5479b797cb09.png"},4317:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var o=n(3981);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);