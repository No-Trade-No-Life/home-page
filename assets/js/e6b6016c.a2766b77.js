"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[9590],{7939:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(9541),s=n(4317);const i={},o="Transfer",a={id:"basics/what-is-transfer-order",title:"Transfer",description:"Transfer refers to the process of moving a specified amount of a designated currency from a creditor account to a debtor account.",source:"@site/docs/basics/what-is-transfer-order.md",sourceDirName:"basics",slug:"/basics/what-is-transfer-order",permalink:"/docs/basics/what-is-transfer-order",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/basics/what-is-transfer-order.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Market Data",permalink:"/docs/basics/what-is-market-data"},next:{title:"Workspace",permalink:"/docs/basics/what-is-workspace"}},c={},d=[{value:"Execution of Transfers and Transfer Networks",id:"execution-of-transfers-and-transfer-networks",level:2},{value:"Account Terminal",id:"account-terminal",level:3},{value:"Transfer Controller",id:"transfer-controller",level:3},{value:"Account Address Info",id:"account-address-info",level:3},{value:"Transfer Network Info",id:"transfer-network-info",level:3}];function l(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"transfer",children:"Transfer"}),"\n",(0,t.jsxs)(r.p,{children:["Transfer refers to the process of moving a specified amount of a designated currency from a ",(0,t.jsx)(r.strong,{children:"creditor account"})," to a ",(0,t.jsx)(r.strong,{children:"debtor account"}),"."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Supports"})," direct transfers between accounts within the same network. For example: transferring USDT on the ERC20 network to another USDT on the ERC20 network."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Supports"})," automatic routing for the same currency across different networks. For example: transferring USDT on the ERC20 network to USDT on the TRC20 network."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Does not support"})," transfers between different currencies, which requires a trade. For example: transferring USDT to BTC."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["A ",(0,t.jsx)(r.strong,{children:"Transfer Order"})," is used to describe the specific details of a transfer, including its purpose and status."]}),"\n",(0,t.jsxs)(r.p,{children:["When initiating a transfer order, at least the ",(0,t.jsx)(r.strong,{children:"four essential elements"})," must be specified: creditor account, debtor account, currency name, and transfer amount."]}),"\n",(0,t.jsx)(r.h2,{id:"execution-of-transfers-and-transfer-networks",children:"Execution of Transfers and Transfer Networks"}),"\n",(0,t.jsx)(r.p,{children:"If two accounts are within the same transfer network, they can directly transfer funds to each other. Examples include SWIFT, ACH, Wise, UnionPay, AliPay, and Blockchain."}),"\n",(0,t.jsx)(r.p,{children:"A transfer network consists of three elements:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Network"}),": An abstract concept identified by ",(0,t.jsx)(r.code,{children:"network_id"}),", used to distinguish different transfer networks. The internal workings of the transfer network do not need to be concerned with."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Address"}),": The recipient address within the network, identified by ",(0,t.jsx)(r.code,{children:"address"}),", which always belongs to a specific network."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Account"}),": An account consists of multiple addresses belonging to various networks, allowing deposits and withdrawals from these addresses."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Basic assumption of transfer networks: Any two addresses within the same network can transfer funds to each other."})}),"\n",(0,t.jsx)(r.mermaid,{value:"graph LR\n    A[Account A] --- A_1[Address1]\n    A_1 --- N[Network1]\n    B[Account B] --- A_2[Address2]\n    A_2 --- N\n    C[Account C] --- A_3[Address3]\n    A_3 --- N"}),"\n",(0,t.jsx)(r.p,{children:"A real transfer network might look like the following diagram, where red dots represent networks, blue dots represent accounts, and green dots represent addresses."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"transfer-network",src:n(9554).Z+"",width:"1280",height:"1169"})}),"\n",(0,t.jsx)(r.admonition,{title:"Graph Theory Perspective",type:"note",children:(0,t.jsx)(r.p,{children:"From a graph theory perspective, the transferability between all addresses within the same network forms a complete graph.\nThis complete graph can be equivalently represented as edges from all nodes to a virtual super node."})}),"\n",(0,t.jsx)(r.p,{children:"If funds cannot be directly transferred from the creditor account to the debtor account, a series of intermediate accounts must be used as intermediaries to complete the transfer through various transfer methods."}),"\n",(0,t.jsx)(r.mermaid,{value:"graph LR\nA_1[Account1] --\x3e B_1[Address1]\nB_1 --\x3e N_1[Network1]\nN_1 --\x3e B_2[Address2]\nB_2 --\x3e A_2[Account2]\nA_2 --\x3e N_2[Network2]\nN_2 --\x3e B_3[Address3]\nB_3 --\x3e A_3[Account3]"}),"\n",(0,t.jsx)(r.p,{children:"A transfer requires planning a path from the transfer network graph to serve as the flow path for the funds."}),"\n",(0,t.jsxs)(r.p,{children:["We need to introduce a ",(0,t.jsx)(r.strong,{children:"Transfer Controller"})," to oversee the execution of the transfer process. Additionally, a ",(0,t.jsx)(r.strong,{children:"database"})," is required to persist the transfer order status, ensuring that either party can resume the order after recovering from an unavailable state."]}),"\n",(0,t.jsx)(r.mermaid,{value:"sequenceDiagram\n    Initiator ->> Database: Write transfer order\n    loop\n      Transfer Controller ->> Database: Poll for incomplete transfer orders\n      Database ->> Transfer Controller: Incomplete transfer orders\n      alt Transfer order is in transfer state\n        Transfer Controller ->> Creditor Account: Initiate transfer (TransferApply)\n        Creditor Account ->> Transfer Controller: Receipt\n        Transfer Controller ->> Database: Save updated order status\n      end\n      alt Transfer order is in reconciliation state\n        Transfer Controller ->> Debtor Account: Initiate reconciliation (TransferEval)\n        Debtor Account ->> Transfer Controller: Receipt\n        Transfer Controller ->> Database: Save updated order status\n      end\n    end"}),"\n",(0,t.jsx)(r.h3,{id:"account-terminal",children:"Account Terminal"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["During initialization, write ",(0,t.jsx)(r.strong,{children:"Account Address Info"})," into storage."]}),"\n",(0,t.jsxs)(r.li,{children:['Implement "Transfer" (',(0,t.jsx)(r.code,{children:"TransferApply"}),') and "Reconciliation" (',(0,t.jsx)(r.code,{children:"TransferEval"}),") interfaces for each network."]}),"\n",(0,t.jsxs)(r.li,{children:["The transfer interface initiates a transfer and returns the result synchronously.","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The initial state of the transfer is ",(0,t.jsx)(r.code,{children:"INIT"}),"."]}),"\n",(0,t.jsx)(r.li,{children:"Only one step is performed at a time, returning the next state, which can be customized and polled by the controller."}),"\n",(0,t.jsx)(r.li,{children:"If an exception occurs and it is not a special error, the controller is allowed to retry the poll."}),"\n",(0,t.jsxs)(r.li,{children:["After the transfer initiation process is complete, return ",(0,t.jsx)(r.code,{children:"COMPLETE"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["If an unrecoverable exception occurs, return ",(0,t.jsx)(r.code,{children:"ERROR"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.li,{children:"The reconciliation interface queries and confirms whether a specific transfer has been received, returning the result synchronously."}),"\n",(0,t.jsx)(r.li,{children:"Does not handle writing the transfer order status into storage. (This logic is delegated to the controller to simplify the process)"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"transfer-controller",children:"Transfer Controller"}),"\n",(0,t.jsxs)(r.p,{children:["Implemented by ",(0,t.jsx)(r.code,{children:"@yuants/app-transfer-controller"}),", it can be deployed directly."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Does not handle creating transfer orders, only updating them."}),"\n",(0,t.jsx)(r.li,{children:"Monitors new transfer orders; if there is no planned path, it plans a transfer path for the process and writes it into storage. (Manual optimization of this planning result is allowed)"}),"\n",(0,t.jsx)(r.li,{children:"According to the planned transfer path, sends transfer and reconciliation instructions sequentially to the accounts along the path to ensure the smooth execution of the entire process."}),"\n",(0,t.jsxs)(r.li,{children:["When the transfer or reconciliation interface returns ",(0,t.jsx)(r.code,{children:"ERROR"}),", it determines that recovery through retries is not possible and requires manual intervention, initiating an alarm."]}),"\n",(0,t.jsx)(r.li,{children:"Initiates an alarm when the entire transfer process times out."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"account-address-info",children:"Account Address Info"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Account Address Info"})," is the information that needs to be written into the database during the initialization of the account terminal."]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field Name"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Example Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"network_id"})}),(0,t.jsx)(r.td,{children:"Network ID"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:'"ERC20"'})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"address"})}),(0,t.jsx)(r.td,{children:"Address ID"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:'"0x123456"'})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"account_id"})}),(0,t.jsx)(r.td,{children:"Account ID"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:'"VENDOR/USER_ID"'})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"currency"})}),(0,t.jsx)(r.td,{children:"Currency Name"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:'"USDT"'})})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"transfer-network-info",children:"Transfer Network Info"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Transfer Network Info"})," is information that needs to be manually written into the database."]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field Name"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Example Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"network_id"})}),(0,t.jsx)(r.td,{children:"Network ID"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:'"ERC20"'})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"currency"})}),(0,t.jsx)(r.td,{children:"Currency Name"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:'"USDT"'})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"commission"})}),(0,t.jsx)(r.td,{children:"Estimated Fee"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"20"})})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},9554:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/transfer-network-a74b76a5767f3af6b1b3b53ee78cff05.png"},4317:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>o});var t=n(3981);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);