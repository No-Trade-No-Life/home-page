"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[9671],{4653:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=t(9541),s=t(4317);const i={sidebar_position:1},r="Introduction",a={id:"intro",title:"Introduction",description:"Why use Yuan",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Getting Start",permalink:"/docs/category/getting-start"}},c={},u=[{value:"Why use Yuan",id:"why-use-yuan",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.h3,{id:"why-use-yuan",children:"Why use Yuan"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Powerful Web GUI"})}),"\n",(0,o.jsx)(n.p,{children:"With Yuan Web GUI, you have access to a comprehensive solution for creating, testing, and managing your trading system, as well as deploying and monitoring your applications. The GUI is completely open-source and can be deployed anywhere, without an internet connection. You can easily switch between multiple environments using just one GUI, making your experience more streamlined."}),"\n",(0,o.jsx)(n.p,{children:"We have designed the GUI with modern browsers in mind, and it integrates with the latest web technologies, such as WebWorker, FileSystemHandle, WebRTC, and more. It is highly responsive and fast, and we are constantly working to make it even better for you."}),"\n",(0,o.jsxs)(n.p,{children:["Although the GUI is currently written in Chinese, we have plans to make it internationalized, so you can use it in your native language in the future. We welcome contributions to the project's translation, so everyone can benefit from this amazing tool. You can access the GUI for free under the MIT license, without the need to install anything - simply use the ",(0,o.jsx)(n.a,{href:"https://y.ntnl.io",children:"GUI"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Simple language and AI assistant"})}),"\n",(0,o.jsx)(n.p,{children:"If you're interested in developing a trading strategy without the need to learn a new language or DSL, the modern JavaScript/TypeScript language is an excellent option. You can use any IDE to write your code and any version control system to manage it. If you have difficulty with coding, you can seek assistance from an AI assistant by communicating your idea to it."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// It's a simple trend-tracking trading strategy that uses the SMA indicator.\nimport { useSMA, useSimplePositionManager } from '@libs';\nexport default () => {\n  const { close } = useOHLC('Y', 'XAUUSD');\n  const ma20 = useSMA(close, 20);\n  const accountInfo = useAccountInfo();\n  const [targetVolume, setTargetVolume] = useSimplePositionManager(accountInfo.account_id, 'XAUUSD');\n  useEffect(() => {\n    const idx = close.length - 2;\n    if (close[idx] > ma20[idx]) {\n      setTargetVolume(1);\n    } else {\n      setTargetVolume(0);\n    }\n  }, [close.length]);\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["More examples can be found ",(0,o.jsx)(n.a,{href:"https://github.com/No-Trade-No-Life/Yuan-Public-Workspace",children:"here"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Local, cloud...or hybrid!"})}),"\n",(0,o.jsx)(n.p,{children:"Yuan is a hybrid-cloud software that allows you to deploy your trading system in your home or public cloud simultaneously. You can start using your home PC and then gradually switch to the public cloud as your business grows. Choosing between your home PC or the public cloud will depend on your availability, costs, privacy, and security requirements."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Extension-first Ecosystem"})}),"\n",(0,o.jsx)(n.p,{children:"In Yuan, extensions are treated as first-class citizens. Many core features are built and distributed as extensions. You can use extensions to add new features, connect with more markets, and enhance your experience. You can download extensions from the community or create your own extension to share with others."})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4317:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(3981);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);