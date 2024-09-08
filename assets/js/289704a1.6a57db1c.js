"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[2119],{8501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(9541),i=n(4317);const s={sidebar_position:2},r="Network Layer",a={id:"protocol/network-layer",title:"Network Layer",description:"The Host is a WebSocket server that listens for incoming connections from Terminals.",source:"@site/docs/protocol/network-layer.md",sourceDirName:"protocol",slug:"/protocol/network-layer",permalink:"/docs/protocol/network-layer",draft:!1,unlisted:!1,editUrl:"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/docs/protocol/network-layer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/protocol/introduce"},next:{title:"Message Mode Layer",permalink:"/docs/protocol/message-pattern-layer"}},h={},l=[{value:"Create Host",id:"create-host",level:2},{value:"Connect to Host",id:"connect-to-host",level:2},{value:"Security",id:"security",level:2},{value:"How to Prevent Man-in-the-Middle Attacks",id:"how-to-prevent-man-in-the-middle-attacks",level:3},{value:"How to Prevent Software Supply Chain Attacks",id:"how-to-prevent-software-supply-chain-attacks",level:3},{value:"How to Prevent Attacks from the Host Cluster",id:"how-to-prevent-attacks-from-the-host-cluster",level:3},{value:"How to Prevent Attacks from the Host Creator",id:"how-to-prevent-attacks-from-the-host-creator",level:3},{value:"How to Prevent Attacks from Other Terminals in the Host",id:"how-to-prevent-attacks-from-other-terminals-in-the-host",level:3},{value:"Summary",id:"summary",level:3},{value:"Terminal Information",id:"terminal-information",level:3},{value:"Message Structure",id:"message-structure",level:3},{value:"Optimization",id:"optimization",level:2},{value:"Optimization: P2P Direct Connection",id:"optimization-p2p-direct-connection",level:3},{value:"Optimization: Local Loopback",id:"optimization-local-loopback",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"network-layer",children:"Network Layer"}),"\n",(0,o.jsx)(t.p,{children:"The Host is a WebSocket server that listens for incoming connections from Terminals."}),"\n",(0,o.jsx)(t.p,{children:"The Terminal is a WebSocket client that connects to the Host."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"This document describes how Hosts and Terminals establish connections and how Terminals exchange information with each other."})}),"\n",(0,o.jsx)(t.p,{children:"Hosts are typically accessible over the internet, while Terminals are usually located within local networks and are not accessible from the internet. Therefore, Terminals can connect to Hosts and transmit messages to each other through the Host."}),"\n",(0,o.jsx)(t.p,{children:"Terminals are peer-to-peer and can be considered as a P2P network."}),"\n",(0,o.jsx)(t.p,{children:"The Host is a dumb component that merely forwards messages between Terminals. Terminals, on the other hand, are intelligent components that can process messages."}),"\n",(0,o.jsx)(t.h2,{id:"create-host",children:"Create Host"}),"\n",(0,o.jsxs)(t.p,{children:["You can use our provided host cluster service (",(0,o.jsx)(t.code,{children:"wss://hosts.ntnl.io"}),") or deploy your own host cluster (",(0,o.jsx)(t.code,{children:"@yuants/app-hosts"}),")."]}),"\n",(0,o.jsx)(t.p,{children:"First, you need to generate an ED25519 key pair, then use the private key to sign an empty string to obtain the signature. Concatenate the public key and signature into the host connection URL to create a host URL."}),"\n",(0,o.jsx)(t.p,{children:"The host URL looks like:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"wss://hosts.ntnl.io/?public_key=84KD3d2vGLnYo5ars7eNG7KxZwWai2snuJBMFU8kbeg5&signature=3NP1aeyn88Lj7xJRoaDvzpfcLP8mMEp7CgMyXoQXS6MH5cpnpy62GkdeCkZhSwUdv4EJh8RX761e633cc5QtqeYw\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Here, ",(0,o.jsx)(t.code,{children:"public_key"})," is the host's public key; ",(0,o.jsx)(t.code,{children:"signature"})," is the host's signature, which is the result of signing an ",(0,o.jsx)(t.strong,{children:"empty string"})," with the host's private key."]}),"\n",(0,o.jsx)(t.p,{children:"You need to use this URL to connect to the host. The host cluster, upon receiving this public key and signature, can verify if the signature matches the public key, thereby allowing you to connect to the host."}),"\n",(0,o.jsx)(t.p,{children:"Terminals joining the host do not necessarily need to know the host's private key; they can obtain the host's connection URL from the host creator."}),"\n",(0,o.jsx)(t.p,{children:"If the private key is accidentally leaked, the host creator can always create a new host key pair and migrate all services to the new host."}),"\n",(0,o.jsx)(t.h2,{id:"connect-to-host",children:"Connect to Host"}),"\n",(0,o.jsxs)(t.p,{children:["If you already have a host URL, you can connect to the host using the Web GUI, the ",(0,o.jsx)(t.code,{children:"Terminal"})," class from ",(0,o.jsx)(t.code,{children:"@yuants/protocol"}),", or any other WebSocket client."]}),"\n",(0,o.jsx)(t.p,{children:"When connecting to the host, the terminal needs to append its terminal ID to the host URL, like:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"wss://hosts.ntnl.io/?public_key=84KD3d2vGLnYo5ars7eNG7KxZwWai2snuJBMFU8kbeg5&signature=3NP1aeyn88Lj7xJRoaDvzpfcLP8mMEp7CgMyXoQXS6MH5cpnpy62GkdeCkZhSwUdv4EJh8RX761e633cc5QtqeYw&terminal_id=haha\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Here, ",(0,o.jsx)(t.code,{children:"terminal_id"})," is the ID of the terminal. It should be unique within the host. This is similar to an IP address."]}),"\n",(0,o.jsx)(t.h2,{id:"security",children:"Security"}),"\n",(0,o.jsx)(t.p,{children:"Before discussing security, it's important to clarify: Who are we? Who are we defending against?"}),"\n",(0,o.jsx)(t.p,{children:"In Yuan, all meaningful data is generated by terminals. We need to think about security from the terminal's perspective."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Man-in-the-middle attacks. For example, could network providers, hackers, etc., eavesdrop on my messages?"}),"\n",(0,o.jsx)(t.li,{children:"Software supply chain attacks. For example, could developers implant backdoors in the code?"}),"\n",(0,o.jsxs)(t.li,{children:["Attacks from the host cluster. For example, could ",(0,o.jsx)(t.code,{children:"hosts.ntnl.io"})," listen to my messages?"]}),"\n",(0,o.jsx)(t.li,{children:"Attacks from the host creator. For example, could the host creator harm me?"}),"\n",(0,o.jsx)(t.li,{children:"Attacks from other terminals in the host. For example, could other terminals in the host forge their identities and trick me into sending them private data?"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"how-to-prevent-man-in-the-middle-attacks",children:"How to Prevent Man-in-the-Middle Attacks"}),"\n",(0,o.jsxs)(t.p,{children:["Use TLS certificates to change the host URL to the ",(0,o.jsx)(t.code,{children:"wss://"})," protocol. Do not use the ",(0,o.jsx)(t.code,{children:"ws://"})," protocol."]}),"\n",(0,o.jsxs)(t.p,{children:["For more information, refer to ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Transport_Layer_Security",children:"Wikipedia - Transport Layer Security"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"how-to-prevent-software-supply-chain-attacks",children:"How to Prevent Software Supply Chain Attacks"}),"\n",(0,o.jsx)(t.p,{children:"Our code is open-source and supervised by the open-source community. You can participate in reviewing the source code. We will not do anything that harms users' interests in the code."}),"\n",(0,o.jsx)(t.p,{children:"Additionally, you can check the hash value of the code package to ensure that the package you downloaded has not been tampered with. Modern npm package managers already support this feature and will automatically check the hash value during installation."}),"\n",(0,o.jsx)(t.h3,{id:"how-to-prevent-attacks-from-the-host-cluster",children:"How to Prevent Attacks from the Host Cluster"}),"\n",(0,o.jsx)(t.p,{children:"Attacks from the host cluster are essentially similar to man-in-the-middle attacks. Since the host cluster is the network provider, it has the ability to eavesdrop and tamper with messages passing through it."}),"\n",(0,o.jsx)(t.p,{children:"However, since the terminals within the host are usually a group of people who know each other, they can use a pre-shared key method to ensure that the host cluster cannot eavesdrop on messages."}),"\n",(0,o.jsx)(t.p,{children:"If the terminal knows the host's private key, this means the terminal is deployed by the host creator or has received full authorization from the creator. The terminal can directly derive an AES-GCM symmetric key from this private key and then encrypt the message before sending it. Since the host cluster does not know the private key, it cannot know the derived symmetric key and thus cannot decrypt the message."}),"\n",(0,o.jsx)(t.p,{children:"If the terminal does not know the host's private key, it can request an additional pre-shared symmetric key from the host creator during deployment. This still ensures that the private key is not leaked, and the terminal can defend against attacks from the host cluster."}),"\n",(0,o.jsx)(t.p,{children:"By the way, if the host cluster does not properly isolate communication between hosts, allowing another host to receive your messages or send messages to you, it is also equivalent to an attack from the host cluster. We can discuss one less scenario: attacks from other hosts."}),"\n",(0,o.jsx)(t.h3,{id:"how-to-prevent-attacks-from-the-host-creator",children:"How to Prevent Attacks from the Host Creator"}),"\n",(0,o.jsx)(t.p,{children:"Good question, this is a difficult problem. But why would you take the risk of joining this host? It's your own choice."}),"\n",(0,o.jsx)(t.p,{children:"Why not become a host creator yourself? You can create your own host. This way, you don't have to worry about attacks from the host creator."}),"\n",(0,o.jsx)(t.h3,{id:"how-to-prevent-attacks-from-other-terminals-in-the-host",children:"How to Prevent Attacks from Other Terminals in the Host"}),"\n",(0,o.jsx)(t.p,{children:"A stricter trust issue is that, assuming you join a host, you trust the host creator, but there are some other terminals in the host that you do not trust. You are worried that they might forge their identities and trick you into sending them private data."}),"\n",(0,o.jsx)(t.p,{children:"The question now is, how to securely communicate with the host creator's terminal without allowing other participants to obtain private data?"}),"\n",(0,o.jsx)(t.p,{children:"Classically, we assume there are three terminals: Alice, Bob, and Eve."}),"\n",(0,o.jsx)(t.p,{children:"You are Alice; Bob owns the host's private key; Eve is a malicious terminal."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Eve has the ability to eavesdrop and tamper with messages within the host 100%, and even the host cluster is in cahoots with Eve, aiming to trick Alice into sending private data to herself."}),"\n",(0,o.jsx)(t.li,{children:"Bob owns the host's private key, follows the protocol, has no motive to leak Alice's private data, but does not know Alice beforehand and cannot inform Alice of any information in advance."}),"\n",(0,o.jsx)(t.li,{children:"Alice wants to send private data to Bob without sending it to Eve."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"How to do it? Actually, the X25519 key exchange algorithm can solve this problem."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:'Alice generates a one-time random X25519 key pair (Pub_A, Sec_A), sends Pub_A to the other terminal. The other terminal is also required to generate a one-time random X25519 key pair (Pub_B, Sec_B), then use the host\'s private key to sign "Pub_A+Pub_B". Then return the signature along with Pub_B.'}),"\n",(0,o.jsx)(t.li,{children:'Alice can verify the signature to see if "Pub_A+Pub_B" matches the host\'s public key. If it does not match, it means the other terminal is not Bob, so regenerate the key pair and retry.'}),"\n",(0,o.jsx)(t.li,{children:"Alice uses the obtained key Pub_B and her own Sec_A to calculate the shared key Shared_A_B, encrypts the private data with this key, and sends it to the other terminal."}),"\n",(0,o.jsx)(t.li,{children:"If the other terminal is Bob, he can use his Sec_B and Alice's Pub_A to calculate the same Shared_A_B, and use this key to decrypt the message."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"What if the other terminal is actually Eve?"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"If Eve gets \"Pub_A\", she cannot directly sign any message without the host's private key, so she cannot pass Alice's verification."}),"\n",(0,o.jsx)(t.li,{children:'Eve can only consider tricking Bob into signing a correct message. Suppose Bob\'s generated X25519 key pair is (Pub_B, Sec_B). The message that can be accepted by Alice is only in the format of "Pub_A+?". But the format of the signature returned by Bob must be "?+Pub_B". The intersection of the two formats has only one element: "Pub_A+Pub_B", so Eve cannot tamper with the message, Alice will definitely get Pub_B, and Bob will definitely get Pub_A. Of course, Eve will get Pub_A, Pub_B, but this is useless.'}),"\n",(0,o.jsx)(t.li,{children:"According to the mathematical principles of the X25519 key exchange algorithm, Alice and Bob will definitely get the same Shared_A_B, while poor Eve cannot get this key, so she naturally cannot interpret the data encrypted with Shared_A_B."}),"\n",(0,o.jsx)(t.li,{children:"Eve can only rage impotently to destroy the network and hinder the normal communication between Alice and Bob, but she cannot steal private data."}),"\n"]}),"\n",(0,o.jsxs)(t.admonition,{title:"What scenarios require such a complex encryption mechanism?",type:"info",children:[(0,o.jsx)(t.p,{children:"This is suitable for some visitor scenarios, for example, some terminals in the host are official, while others are visitors."}),(0,o.jsx)(t.p,{children:"Visitor terminals can verify whether other terminals are official terminals through some methods."}),(0,o.jsx)(t.p,{children:"Of course, visitor terminals can access all services within the host, so they still need to be cautious."})]}),"\n",(0,o.jsx)(t.h3,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(t.p,{children:"Security and efficiency are mutually exclusive."}),"\n",(0,o.jsx)(t.p,{children:"Stricter security means more verification computations, which will inevitably lead to a decrease in communication efficiency."}),"\n",(0,o.jsx)(t.p,{children:"Improving efficiency means sacrificing some security, which also means saving money."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"If all your terminals are deployed within a LAN, you do not need to use TLS to defend against network man-in-the-middle attacks;"}),"\n",(0,o.jsx)(t.li,{children:"If you have deployed your own host cluster or trust the host cluster provider, you do not need to guard against the host cluster stealing messages."}),"\n",(0,o.jsx)(t.li,{children:"If you join a host with strangers, you need to use the X25519 key exchange algorithm and add an additional per-message encryption mechanism to protect your privacy."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The best practice is that the division of privacy permissions is isomorphic to the division of hosts. The responsibilities of hosts are single."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Deploy secrets known only to you to personal hosts that only you can access."}),"\n",(0,o.jsx)(t.li,{children:"Team-shared secrets can be deployed to public hosts that only team members can access."}),"\n",(0,o.jsx)(t.li,{children:"Use Portal terminals to authorize your services to other hosts for others to access."}),"\n",(0,o.jsx)(t.li,{children:"For providing services to strangers, create a new host, require strangers to use the key exchange algorithm to verify your identity, and then proceed with the service."}),"\n"]}),"\n",(0,o.jsxs)(t.admonition,{title:"How to authorize across hosts?",type:"tip",children:[(0,o.jsxs)(t.p,{children:["A process can create multiple terminals to simultaneously connect to multiple hosts.\nThis is very useful when you want to share data with others but do not want to disclose all your secrets.\nHosts are very lightweight, and you can create a host at any time for a specific purpose.\nWe will introduce separately how to use ",(0,o.jsx)(t.code,{children:"@yuants/app-portal"})," to share information to a limited extent in the future."]}),(0,o.jsx)(t.mermaid,{value:"graph LR\n    A[Your Personal Host] <--\x3e B[Your Portal Terminal]\n    B <--\x3e C[Shared Host]\n    C <--\x3e D[Other's Portal Terminal]\n    D <--\x3e E[Other's Personal Host]"})]}),"\n",(0,o.jsx)(t.h3,{id:"terminal-information",children:"Terminal Information"}),"\n",(0,o.jsx)(t.p,{children:"Terminals should declare their Terminal information when connecting to a Host. Terminal information is a JSON object:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"export interface ITerminalInfo {\n  terminal_id: string;\n  // Other fields omitted\n}\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"terminal_id"})," is the ID of the Terminal. It should be unique within the Host. This is similar to an IP address."]}),"\n",(0,o.jsx)(t.li,{children:"Terminal information usually includes service information of the Terminal. For example, a Terminal can declare that it provides account information services."}),"\n",(0,o.jsx)(t.li,{children:"Terminal information is used for the Service Mode Layer, which we will introduce later."}),"\n",(0,o.jsx)(t.li,{children:"The Host is responsible for broadcasting Terminal information to all Terminals in a timely manner."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"message-structure",children:"Message Structure"}),"\n",(0,o.jsx)(t.p,{children:"All messages are JSON-encoded and have the following structure:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"export interface ITerminalMessage {\n  source_terminal_id: string;\n  target_terminal_id: string;\n\n  // Other fields for the Service Mode Layer, to be introduced later.\n}\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"source_terminal_id"})," is the ID of the sender Terminal."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"target_terminal_id"})," is the ID of the recipient Terminal."]}),"\n",(0,o.jsxs)(t.li,{children:["The Host reads the ",(0,o.jsx)(t.code,{children:"target_terminal_id"})," and forwards the message to the target Terminal."]}),"\n",(0,o.jsx)(t.li,{children:"Other fields are used for the Service Mode Layer, which we will introduce later."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"optimization",children:"Optimization"}),"\n",(0,o.jsx)(t.p,{children:"The following optimizations are not required by the protocol but implementing them can improve system performance. They are recommended."}),"\n",(0,o.jsx)(t.h3,{id:"optimization-p2p-direct-connection",children:"Optimization: P2P Direct Connection"}),"\n",(0,o.jsx)(t.p,{children:"We can use WebRTC to establish a P2P connection between two Terminals. WebRTC is a peer-to-peer technology that allows Terminals to exchange messages directly. It is a perfect choice for our purpose. Messages do not need to be transmitted through the Host. It is faster and incurs lower traffic costs. When a P2P connection is established, the Host will stop forwarding messages between the two Terminals. In fact, Terminals will no longer send messages to the Host. The operation of the Host has never changed. However, if the P2P connection is interrupted, the Host will resume forwarding messages between the two Terminals."}),"\n",(0,o.jsx)(t.p,{children:"The Host will also forward ICE candidates (offers and answers) between the two Terminals. Therefore, the two Terminals can establish a P2P connection. The Host acts both as a STUN server and a TURN server."}),"\n",(0,o.jsx)(t.p,{children:"Peer connections are established implicitly. When a Terminal sends a message to another Terminal, the Terminal will check if there is a P2P connection with the target Terminal. If not, the Terminal will attempt to establish a P2P connection with the target Terminal. If a P2P connection is established, the Terminal will send the message through the peer connection. If the P2P connection is interrupted, the Terminal will resume sending messages through the Host."}),"\n",(0,o.jsx)(t.h3,{id:"optimization-local-loopback",children:"Optimization: Local Loopback"}),"\n",(0,o.jsx)(t.p,{children:"If the target Terminal of a message points to the Terminal itself, then this message should not be sent over the network but directly to the Terminal's own message channel."}),"\n",(0,o.jsx)(t.p,{children:"This is beneficial for Terminals to subscribe to channels provided by themselves or consume their own services, promoting design decoupling."})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4317:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(3981);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);