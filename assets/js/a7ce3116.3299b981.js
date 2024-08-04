"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[5974],{6967:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=r(9541),s=r(4317);const a={},i="Provide Transfer Interface",o={id:"vendor-guide/vendor-transfer",title:"Provide Transfer Interface",description:"Venders are responsible for implementing the transfer interface, which is used for transferring funds between accounts.",source:"@site/docs/vendor-guide/vendor-transfer.md",sourceDirName:"vendor-guide",slug:"/vendor-guide/vendor-transfer",permalink:"/docs/vendor-guide/vendor-transfer",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/vendor-guide/vendor-transfer.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Providing Product Specifications",permalink:"/docs/vendor-guide/vendor-product"},next:{title:"Protocol",permalink:"/docs/category/protocol"}},c={},d=[{value:"Transfer Order",id:"transfer-order",level:2},{value:"Complete Transaction Order Fields",id:"complete-transaction-order-fields",level:3},{value:"Transfer Procedure",id:"transfer-procedure",level:2},{value:"Vendor Implementation",id:"vendor-implementation",level:2},{value:"Example: Understanding the Underlying Implementation of Transfer",id:"example-understanding-the-underlying-implementation-of-transfer",level:3},{value:"Example: Implementing Transfer Interface via Tool Library",id:"example-implementing-transfer-interface-via-tool-library",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"provide-transfer-interface",children:"Provide Transfer Interface"}),"\n",(0,t.jsx)(n.p,{children:"Venders are responsible for implementing the transfer interface, which is used for transferring funds between accounts."}),"\n",(0,t.jsx)(n.h2,{id:"transfer-order",children:"Transfer Order"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Transfer Order (TransferOrder)"}),", a transfer order defines the basic information of the transfer, including the account IDs of both parties, the transfer amount, the transfer status, etc."]}),"\n",(0,t.jsx)(n.p,{children:"The fields in the transfer order are divided into purpose and execution categories. The purpose fields are the basic information of the transfer order; the execution fields are intermediate status information in the transfer process, used to record the status during the transfer process."}),"\n",(0,t.jsxs)(n.p,{children:["The transfer order is initiated and filled by any third party with the purpose-related fields and written into the database, and is handled by a dedicated ",(0,t.jsx)(n.strong,{children:"Transfer Controller"})," component responsible for the execution of the transfer process."]}),"\n",(0,t.jsxs)(n.p,{children:["Funds cannot directly move from the creditor's account to the debtor's account; they need to go through a series of intermediate accounts as intermediaries and different transfer methods to complete the transfer process. The accounts and the different transfer methods between accounts (such as TRX on-chain transfer, main account/sub-account transfer of an exchange) form a graph structure called the ",(0,t.jsx)(n.strong,{children:"Transfer Network"}),". A specific transfer is to plan a path in the graph as the flow path of the funds."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"transfer-network",src:r(4099).Z+"",width:"1280",height:"1169"})}),"\n",(0,t.jsx)(n.h3,{id:"complete-transaction-order-fields",children:"Complete Transaction Order Fields"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'/**\n * ITransferOrder represents the transfer order, will be updated by both sides during the transfer process\n *\n * ITransferOrder indicates the transfer order, which will be updated by both sides during the transfer process\n *\n * @public\n */\nexport interface ITransferOrder {\n  /**\n   * Order ID\n   *\n   * Order ID\n   */\n  order_id: string;\n  /**\n   * Created Timestamp\n   *\n   * Created timestamp\n   */\n  created_at: number;\n  /**\n   * Updated Timestamp\n   *\n   * Last updated timestamp\n   */\n  updated_at: number;\n  /**\n   * Credit Account ID\n   *\n   * Creditor\'s account ID (payer)\n   */\n  credit_account_id: string;\n  /**\n   * Debit Account ID\n   *\n   * Debtor\'s account ID (payee)\n   */\n  debit_account_id: string;\n  /**\n   * Currency\n   *\n   * Transfer currency\n   */\n  currency: string;\n  /**\n   * Expected Amount\n   *\n   * Expected transfer amount\n   */\n  expected_amount: number;\n  /**\n   * Order Status\n   *\n   * - `"COMPLETE"` - Transfer completed\n   * - `"ERROR"` - Transfer failed, need to check the error message, need human intervention\n   * - `"ONGOING"` - Transfer is pending, need to wait\n   */\n  status: string;\n  /**\n   * Error Message for Human-reading\n   *\n   * Human-readable error message\n   */\n  error_message?: string;\n\n  /**\n   * Transfer path (encoded as (AccountId | Address | NetworkId)[] using encodePath)\n   * Not using foreign keys but saving inline as historical records\n   */\n  routing_path?: {\n    /** Initiating transfer account ID */\n    tx_account_id?: string;\n    /** Receiving transfer account ID */\n    rx_account_id?: string;\n    /** Initiating transfer address */\n    tx_address?: string;\n    /** Receiving transfer address */\n    rx_address?: string;\n    /** Network ID */\n    network_id?: string;\n  }[];\n\n  /**\n   * Current processing transfer path index\n   */\n  current_routing_index?: number;\n\n  /** Current initiating transfer account ID */\n  current_tx_account_id?: string;\n  /** Current receiving transfer account ID */\n  current_rx_account_id?: string;\n  /** Current initiating transfer address */\n  current_tx_address?: string;\n  /** Current receiving transfer address */\n  current_rx_address?: string;\n  /** Current network ID */\n  current_network_id?: string;\n  /** Current transfer state (INIT -> ...? -> COMPLETE), ERROR */\n  current_tx_state?: string;\n  /** Current transfer transaction id */\n  current_transaction_id?: string;\n  /** Current transfer state context for state flow */\n  current_tx_context?: string;\n  /** Current receiving state (INIT -> ...? -> COMPLETE), ERROR */\n  current_rx_state?: string;\n  /** Current receiving state context for state flow */\n  current_rx_context?: string;\n  /** Current transfer start time */\n  current_step_started_at?: number;\n\n  /** Current transfer amount */\n  current_amount?: number;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"transfer-procedure",children:"Transfer Procedure"}),"\n",(0,t.jsx)(n.p,{children:"The transfer occurs between the debtor's and creditor's accounts, with the purpose of transferring the balance from the creditor's account to the debtor's account."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The transfer order is initiated by the initiating party and completed after multiple interactions between both parties."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The transfer is an operation with low latency requirements but extremely high accuracy requirements."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The transfer order status needs to be persisted in Storage to ensure that either party can continue to complete the order after recovering from an unavailable state."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In principle, any side effects on the order need to be actively and promptly updated to Storage by the updating party."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Timeout errors are detected by a permanent auditing party."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"transfer-procedure",src:r(708).Z+"",width:"1076",height:"580"})}),"\n",(0,t.jsx)(n.p,{children:"The specific algorithm is as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The initiating party creates a transfer order (ITransferOrder), writes the order ID, the account IDs of both parties, the transfer amount, the timeout, and notifies the debtor;"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The debtor adds the transfer method candidate list and notifies the creditor;"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The creditor initiates the transfer based on its own situation, updates the creditor's transfer method, the timestamp of the transfer initiation, the amount, and notifies the debtor."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The debtor polls its own order flow until it finds this order credited, the specific matching rules depend on the situation (can be by ID or amount or note), and updates the order status to completed."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Note, if the debtor has multiple accounts, the debtor needs to ensure that the balance is transferred to the correct account when the order is completed."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"vendor-implementation",children:"Vendor Implementation"}),"\n",(0,t.jsx)(n.p,{children:"The transfer interface consists of two APIs, namely transfer request and transfer query."}),"\n",(0,t.jsx)(n.p,{children:"Suppliers need to implement the current transfer step's transfer request and transfer query based on the execution fields in the transfer order."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface IService {\n  // Initiate transfer\n  TransferApply: {\n    req: ITransferOrder;\n    res: IResponse<{ state: string; context?: string; transaction_id?: string; message?: string }>;\n    frame: void;\n  };\n  // Verify transfer (reconciliation)\n  TransferEval: {\n    req: ITransferOrder;\n    res: IResponse<{ state: string; context?: string; received_amount?: number } | void>;\n    frame: void;\n  };\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-understanding-the-underlying-implementation-of-transfer",children:"Example: Understanding the Underlying Implementation of Transfer"}),"\n",(0,t.jsx)(n.p,{children:"The transfer request is used to initiate the transfer operation. Suppliers need to implement the current transfer step's transfer request based on the execution fields in the transfer order."}),"\n",(0,t.jsx)(n.p,{children:"Generally, a vendor instance may provide multiple accounts and various different transfer methods, so it is necessary to determine which logical branch the current transfer should go to based on the execution fields in the specific transfer order. The following example simply demonstrates this point."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Please note that the following example is for demonstrating the underlying logic only, and the actual implementation of the transfer interface should use the tool library we provide."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { ITerminal } from '@yuants/protocol';\n\nconst terminal = new ITerminal(process.env.HOST_URL!, {});\n\nconst contextList = [\n  {\n    account_id: '1',\n    currency: 'USDT',\n    network_id: 'AccountInternal/1/SubAccount/1',\n    address: 'main',\n  },\n  {\n    account_id: '2',\n    currency: 'USDT',\n    network_id: 'TRC20',\n    address: '0x1234567890',\n  },\n];\n\nterminal.provideService(\n  'TransferApply',\n  {\n    type: 'object',\n    required: ['current_tx_account_id', 'currency', 'current_network_id', 'current_tx_address'],\n    oneOf: contextList.map((x) => ({\n      properties: {\n        current_tx_account_id: {\n          const: x.account_id,\n        },\n        currency: {\n          const: x.currency,\n        },\n        current_network_id: {\n          const: x.network_id,\n        },\n        current_tx_address: {\n          const: x.address,\n        },\n      },\n    })),\n  },\n  async (req) => {\n    const { current_tx_account_id, currency, current_network_id, current_tx_address, current_tx_state } = req;\n    if (\n      current_tx_account_id === '1' &&\n      currency === 'USDT' &&\n      current_network_id === 'AccountInternal/1/SubAccount/1' &&\n      current_tx_address === 'main'\n    ) {\n      if (current_tx_state === 'INIT') {\n        /// NOTE: makeSubAccountParams and Api.transferSubAccount need to be implemented by yourself\n        const params = makeSubAccountParams(order);\n        const transferResult = await Api.transferSubAccount(params);\n        if (!transferResult.success) {\n          return { state: 'INIT', message: transferResult.message };\n        }\n        return { state: 'COMPLETE' };\n      }\n      return { res: { code: 400, message: 'Unknown State', data: { state: 'ERROR' } } };\n    } else if (\n      current_tx_account_id === '2' &&\n      currency === 'USDT' &&\n      current_network_id === 'TRC20' &&\n      current_tx_address === '0x1234567890'\n    ) {\n      if (current_tx_state === 'INIT') {\n        /// NOTE: makeTRC20Params and Api.transferTRC20 need to be implemented by yourself\n        const params = makeTRC20Params(order);\n        const transferResult = await Api.transferTRC20(params);\n        if (!transferResult.success) {\n          return { state: 'INIT', message: transferResult.message };\n        }\n        const withdrawId = transferResult.withdrawId;\n        return { state: 'AWAIT_TX_ID', context: withdrawId };\n      }\n      if (current_tx_state === 'AWAIT_TX_ID') {\n        const withdrawId = order.current_tx_context;\n        const withdrawHistoryResult = await Api.getWithdrawHistory(withdrawId);\n        const transactionId = withdrawHistoryResult?.transactionId;\n        if (!transactionId) {\n          return { state: 'AWAIT_TX_ID', context: withdrawId };\n        }\n        return { state: 'COMPLETE', transaction_id: transactionId };\n      }\n      return { res: { code: 400, message: 'Unknown State', data: { state: 'ERROR' } } };\n    }\n    return { state: 'COMPLETE' };\n  },\n);\n\nterminal.provideService(\n  'TransferEval',\n  {\n    type: 'object',\n    required: ['current_rx_account_id', 'currency', 'current_network_id', 'current_rx_address'],\n    oneOf: contextList.map((x) => ({\n      properties: {\n        current_rx_account_id: {\n          const: x.account_id,\n        },\n        currency: {\n          const: x.currency,\n        },\n        current_network_id: {\n          const: x.network_id,\n        },\n        current_rx_address: {\n          const: x.address,\n        },\n      },\n    })),\n  },\n  async (req) => {\n    const { current_rx_account_id, currency, current_network_id, current_rx_address, current_rx_state } = req;\n    if (\n      current_rx_account_id === '1' &&\n      currency === 'USDT' &&\n      current_network_id === 'AccountInternal/1/SubAccount/1' &&\n      current_rx_address === 'main'\n    ) {\n      return { state: 'COMPLETE' };\n    }\n    if (\n      current_rx_account_id === '2' &&\n      currency === 'USDT' &&\n      current_network_id === 'TRC20' &&\n      current_rx_address === '0x1234567890'\n    ) {\n      /// NOTE: makeCheckTRC20Params and Api.checkTRC20 need to be implemented by yourself\n      const params = makeCheckTRC20Params(order);\n      const checkResult = await Api.checkTRC20(params);\n      if (!checkResult.success) {\n        return { state: 'INIT', message: checkResult.message };\n      }\n      const received_amount = checkResult.receivedAmount;\n      return { state: 'COMPLETE', received_amount };\n    }\n    return { state: 'COMPLETE' };\n  },\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-implementing-transfer-interface-via-tool-library",children:"Example: Implementing Transfer Interface via Tool Library"}),"\n",(0,t.jsxs)(n.p,{children:["From the above example, we can see that the logic between different accounts and transfer methods is independent, so we provide a tool library to implement the specific transfer process using the (",(0,t.jsx)(n.code,{children:"account ID"}),", ",(0,t.jsx)(n.code,{children:"network ID"}),", ",(0,t.jsx)(n.code,{children:"currency"}),", ",(0,t.jsx)(n.code,{children:"address"}),") quadruple as the Key."]}),"\n",(0,t.jsx)(n.p,{children:"To address the above issues, for maintainability considerations, we provide a tool library to assist in implementing the transfer interface."}),"\n",(0,t.jsx)(n.p,{children:"Its API is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export const addAccountTransferAddress = (ctx: {\n  terminal: ITerminal;\n  account_id: string;\n  currency: string;\n  network_id: string;\n  address: string;\n  onApply: Record<\n    string,\n    (order: ITransferOrder) => Promise<{\n      state: string;\n      context?: string;\n      transaction_id?: string;\n      message?: string\n    }\n  >,\n  onEval: (order: ITransferOrder) => Promise<{\n    state: string;\n    context?: string;\n    received_amount?: number\n  }>;\n}) => void;\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The following example describes our recommended transfer implementation method. For a more complete example, see: ",(0,t.jsx)(n.a,{href:"https://github.com/No-Trade-No-Life/Yuan/blob/4dc37b9c30292a2fd87a311cca3d06f9e53e4f2d/apps/vendor-okx/src/index.ts#L521",children:"OKX Transfer"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { ITerminal, addAccountTransferAddress } from '@yuants/protocol';\nimport { ITransferOrder } from '@yuants/data-model';\n\nconst terminal = new ITerminal(process.env.HOST_URL!, {});\n\naddAccountTransferAddress({\n  terminal,\n  account_id: '1',\n  currency: 'USDT',\n  network_id: 'AccountInternal/1/SubAccount/1',\n  address: 'main',\n  onApply: {\n    INIT: async (order: ITransferOrder) => {\n      /// NOTE: makeSubAccountParams and Api.transferSubAccount need to be implemented by yourself\n      const params = makeSubAccountParams(order);\n      const transferResult = await Api.transferSubAccount(params);\n      if (!transferResult.success) {\n        /// NOTE: All states other than COMPLETE/ERROR will be sent back to the current step's executor by the transfer controller, such as returning INIT here, the transfer controller will set the transfer order's status to INIT and resend it to the current vendor's step to execute until success or transfer timeout.\n        return { state: 'INIT', message: transferResult.message };\n      }\n      return { state: 'COMPLETE' };\n    },\n  },\n  /// NOTE: For this type of transfer, we believe it will be completed immediately, so we directly return COMPLETE here\n  onEval: async (order: ITransferOrder) => {\n    return { state: 'COMPLETE' };\n  },\n});\n\naddAccountTransferAddress({\n  terminal,\n  account_id: '2',\n  currency: 'USDT',\n  network_id: 'TRC20',\n  address: '0x123456789',\n  onApply: {\n    INIT: async (order: ITransferOrder) => {\n      /// NOTE: makeTRC20Params and Api.transferTRC20 need to be implemented by yourself\n      const params = makeCheckTRC20Params(order);\n      const transferResult = await Api.transferTRC20(params);\n      if (!transferResult.success) {\n        return { state: 'INIT', message: transferResult.message };\n      }\n      const withdrawId = transferResult.withdrawId;\n      /// NOTE: Sometimes the transfer cannot be completed immediately, such as TRC20 transfer needing to wait for on-chain confirmation,\n      ///   until the on-chain Transaction ID is obtained, we consider the transfer step to be over,\n      ///   at this time, it is necessary to let the current transfer step enter a new state (any name, here we name it AWAIT_TX_ID) and return a context information,\n      ///   afterwards, the transfer controller will save this context information in the transfer order's current_tx_context field and resend it to the current vendor's corresponding step to execute.\n      return { state: 'AWAIT_TX_ID', context: withdrawId };\n    },\n    AWAIT_TX_ID: async (order: ITransferOrder) => {\n      const withdrawId = order.current_tx_context;\n      /// NOTE: Api.getWithdrawHistory needs to be implemented by yourself\n      const withdrawHistoryResult = await Api.getWithdrawHistory(withdrawId);\n      const transaction_id = withdrawHistoryResult?.transactionId;\n      if (!transaction_id) {\n        return { state: 'AWAIT_TX_ID', context: withdrawId };\n      }\n      return { state: 'COMPLETE', transaction_id };\n    },\n  },\n  onEval: async (order: ITransferOrder) => {\n    /// NOTE: makeCheckTRC20Params and Api.checkTRC20 need to be implemented by yourself\n    const params = makeCheckTRC20Params(order);\n    const checkResult = await Api.checkTRC20(params);\n    if (!checkResult.success) {\n      return { state: 'INIT', message: checkResult.message };\n    }\n    const received_amount = checkResult.receivedAmount;\n    return { state: 'COMPLETE', received_amount };\n  },\n});\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},4099:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/transfer-network-a74b76a5767f3af6b1b3b53ee78cff05.png"},708:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/transfer-procedure-ef576bf12d00f8086dec7f1ed70ce990.png"},4317:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var t=r(3981);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);