"use strict";(self.webpackChunk_yuants_docs=self.webpackChunk_yuants_docs||[]).push([[5151],{7130:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"why-we-need-stardard-for-vendors","metadata":{"permalink":"/zh-Hans/blog/why-we-need-stardard-for-vendors","editUrl":"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/blog/2024-07-24-why-we-need-standard-for-vendors.md","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2024-07-24-why-we-need-standard-for-vendors.md","title":"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981\u4e3a\u63d0\u4f9b\u5546\u8bbe\u7acb\u6807\u51c6\uff1f","description":"\u5982\u4eca\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u5168\u4e16\u754c\u7433\u7405\u6ee1\u76ee\u7684\u4ea4\u6613\u6240\u3001\u6570\u636e\u6e90\uff0c\u4ed6\u4eec\u90fd\u6709\u7740\u5404\u81ea\u4e0d\u540c\u7684 API\u3001\u751f\u6001\u7cfb\u7edf\u3002\u5b66\u4e60\u4f7f\u7528\u5b83\u4eec\u5e76\u5c06\u5176\u7eb3\u5165\u4e00\u79cd\u81ea\u52a8\u5316\u7684\u6d41\u7a0b\u662f\u4e00\u4ef6\u975e\u5e38\u8d39\u529b\u7684\u4e8b\u3002","date":"2024-07-24T00:00:00.000Z","formattedDate":"2024\u5e747\u670824\u65e5","tags":[{"label":"Yuan","permalink":"/zh-Hans/blog/tags/yuan"}],"readingTime":13.93,"hasTruncateMarker":false,"authors":[{"name":"CZ","title":"NTNL Co-Founder","url":"https://github.com/zccz14","imageURL":"https://github.com/zccz14.png","key":"zccz14"}],"frontMatter":{"slug":"why-we-need-stardard-for-vendors","title":"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981\u4e3a\u63d0\u4f9b\u5546\u8bbe\u7acb\u6807\u51c6\uff1f","authors":["zccz14"],"tags":["Yuan"]},"unlisted":false,"nextItem":{"title":"No Trade No Life \u7684\u613f\u666f","permalink":"/zh-Hans/blog/vision-of-no-trade-no-life"}},"content":"\u5982\u4eca\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u5168\u4e16\u754c\u7433\u7405\u6ee1\u76ee\u7684\u4ea4\u6613\u6240\u3001\u6570\u636e\u6e90\uff0c\u4ed6\u4eec\u90fd\u6709\u7740\u5404\u81ea\u4e0d\u540c\u7684 API\u3001\u751f\u6001\u7cfb\u7edf\u3002\u5b66\u4e60\u4f7f\u7528\u5b83\u4eec\u5e76\u5c06\u5176\u7eb3\u5165\u4e00\u79cd\u81ea\u52a8\u5316\u7684\u6d41\u7a0b\u662f\u4e00\u4ef6\u975e\u5e38\u8d39\u529b\u7684\u4e8b\u3002\\n\\n\u5916\u90e8\u7cfb\u7edf (External System) \u662f\u6307\u4e0d\u5c5e\u4e8e Yuan \u7684\u6570\u636e\u63d0\u4f9b\u5546\u3001\u4ea4\u6613\u6240\u6216\u8005\u5176\u4ed6\u5b9e\u4f53\u3002\\n\u800c\u63d0\u4f9b\u5546 (Vendor) \u662f\u6307 Yuan \u548c\u5916\u90e8\u7cfb\u7edf\u7684\u4e2d\u4ecb\u3002\\n\\n\u6807\u51c6\u662f\u4e00\u7ec4\u6982\u5ff5\u3001\u89c4\u5219\u3001\u6307\u5357\u548c\u7279\u6027\uff0c\u7528\u4e8e\u786e\u4fdd\u63d0\u4f9b\u5546\u7684\u6982\u5ff5\u4e00\u81f4\uff0c\u5e76\u63a7\u5236\u63d0\u4f9b\u5546\u7684\u5b9e\u73b0\u8d28\u91cf\u3002\\n\u6211\u4eec\u5e0c\u671b\u5efa\u7acb\u4e00\u5957\u9002\u7528\u4e8e\u5168\u7403\u6240\u6709\u5e02\u573a\u7684\u7edf\u4e00\u6807\u51c6\uff0c\u4f7f\u5f97\u6295\u8d44\u8005\u4ec5\u4ec5\u9700\u8981\u5b66\u4e60\u8fd9\u5957\u6807\u51c6\u5373\u53ef\u4e0e\u6240\u6709\u5e02\u573a\u4ea4\u4e92\u3002\\n\\n### \u6807\u51c6\u5b58\u5728\u5417\uff1f\\n\\n\u4e8b\u5b9e\u662f\uff0c\u6211\u4eec\u6ca1\u6709\u542c\u8bf4\u8fd9\u4e2a\u6807\u51c6\u5b58\u5728\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u76ee\u524d\u8fd8\u6ca1\u6709\u4ea7\u751f\uff0c\u6216\u8005\u8db3\u591f\u6709\u540d\u4ee5\u81f3\u4e8e\u6211\u4eec\u77e5\u9053\u5b83\u3002\\n\\n\u73b0\u5728\u6ca1\u6709\u53ef\u7528\u7684\u6807\u51c6\u6709\u4e24\u79cd\u53ef\u80fd\uff0c\u7b2c\u4e00\uff0c\u5b83\u6c38\u8fdc\u4e0d\u4f1a\u6709\uff1b\u7b2c\u4e8c\uff0c\u5b83\u73b0\u5728\u8fd8\u6ca1\u6709\u3002\\n\\n\u6807\u51c6\u53ef\u4ee5\u770b\u4f5c\u662f\u4e00\u4e2a\u6240\u6709\u63d0\u4f9b\u5546\u5b9e\u4f8b\u7684\u9ad8\u5ea6\u51dd\u7ec3\u7684\u62bd\u8c61\uff0c\u5982\u679c\u5b9e\u4f8b\u7684\u4fe1\u606f\u71b5\u8db3\u591f\u9ad8\uff0c\u90a3\u4e48\u5c06\u4e0d\u53ef\u80fd\u62bd\u8c61\u51fa\u4ec0\u4e48\u6709\u7528\u7684\u6807\u51c6\u3002\u65e0\u8bba\u5efa\u7acb\u4f55\u79cd\u7a0b\u5ea6\u7684\u6807\u51c6\uff0c\u90fd\u4e0d\u80fd\u964d\u4f4e\u6211\u4eec\u8ba4\u77e5\u5b9e\u4f8b\u7684\u5b66\u4e60\u6210\u672c\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5c31\u7b97\u5efa\u7acb\u4e86\u6807\u51c6\uff0c\u4e5f\u6ca1\u6709\u53bb\u5b66\u4e60\u5b83\u7684\u610f\u4e49\u3002\\n\\n\u5982\u679c\u6709\u4e00\u4e2a\u6700\u7ec8\u7684\u6807\u51c6\u5b58\u5728\uff0c\u90a3\u4e48\u6211\u4eec\u603b\u662f\u53ef\u4ee5\u52aa\u529b\u53bb\u628a\u5b83\u627e\u51fa\u6765\u3002\\n\\n\x3c!-- \u6f14\u7ece\uff1a\\n\\n\u884c\u4e1a\u975e\u5e38\u65b0\uff0c\u8fd8\u5728\u84ec\u52c3\u7684\u53d1\u5c55\uff0c\u65b0\u7684\u4e8b\u7269\u4e00\u76f4\u5728\u88ab\u521b\u9020\uff0c\u5e76\u4e14\u4fe1\u606f\u7684\u6d41\u901a\u662f\u4e0d\u5145\u5206\u7684\u3002\u884c\u4e1a\u5185\u5b58\u5728\u5927\u91cf\u7684\u65b0\u673a\u4f1a\uff0c\u800c\u521b\u9020\u8fd9\u4e9b\u8fd9\u4e9b\u65b0\u7684\u4e1c\u897f\u7684\u4eba\uff0c\u4ed6\u53ef\u80fd\u4e0d\u4f1a\u6ce8\u610f\u5230\u73b0\u6709\u7684\u4e00\u4e9b\u8f83\u4e3a\u5148\u8fdb\u7684\u4e1c\u897f\uff0c\u53cd\u800c\u4f1a\u56e0\u4e3a\u4e1a\u52a1\u53d1\u5c55\u7684\u7d27\u8feb\u6027\u800c\u81ea\u5df1\u9020\u8f6e\u5b50\uff0c\u4ece\u800c\u4f7f\u5f97\u6574\u4e2a\u8fd9\u4e2a\u884c\u4e1a\u5904\u5728\u4e00\u4e2a\u8f83\u4e3a\u6df7\u6c8c\u7684\u72b6\u6001\u3002\\n\\n\u5728\u53d1\u5c55\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u7684\u6807\u51c6\u4f1a\u5728\u5f88\u957f\u4e00\u6bb5\u65f6\u95f4\u5185\u4f5c\u4e3a\u4e00\u4e2a\u5c40\u90e8\u7684\u6807\u51c6\uff0c\u88ab\u4eba\u4eec\u6240\u63a5\u53d7\uff0c\u76f4\u5230\u8fd9\u4e2a\u884c\u4e1a\u53d8\u5f97\u975e\u5e38\u6210\u719f\u3002 --\x3e\\n\\n### \u4e3a\u4ec0\u4e48\u662f\u6211\u4eec\uff1f\\n\\n1. \u6211\u4eec NTNL \u662f\u4e00\u4e2a\u4ea4\u6613\u8005\u7684\u81ea\u7531\u8054\u76df\uff0c\u4ee3\u8868\u4ea4\u6613\u8005\u4eec\u7684\u5229\u76ca\uff1b\\n2. \u6211\u4eec\u4e0d\u5177\u6709\u7279\u5b9a\u7684\u5916\u90e8\u7cfb\u7edf\u7684\u7acb\u573a\uff1b\\n3. \u6211\u4eec\u6ca1\u6709\u5916\u90e8\u7cfb\u7edf\u90a3\u4e48\u591a\u7684\u6cd5\u5f8b\u5408\u89c4\u8d23\u4efb\uff1b\\n\\n### \u6982\u5ff5\u4e00\u81f4\u6027\\n\\n\u5f53\u6211\u4eec\u8c08\u53ca\u4e00\u4e9b\u672f\u8bed\u3001\u6982\u5ff5\u65f6\uff0c\u8fd9\u5e94\u5f53\u662f\u5bf9\u4e8e\u6240\u6709\u7684\u63d0\u4f9b\u5546\u90fd\u662f\u4e00\u81f4\u7684\uff0c\u65e0\u6b67\u4e49\u7684\u3002\\n\\nYuan \u5b9a\u4e49\u7684\u6807\u51c6\u6982\u5ff5\uff0c\u4e0e\u5916\u90e8\u7cfb\u7edf\u5b9a\u4e49\u7684\u5916\u90e8\u6982\u5ff5\u4e4b\u95f4\uff0c\u4e00\u5b9a\u5b58\u5728\u5dee\u5f02\u3002\u800c\u63d0\u4f9b\u5546\uff0c\u626e\u6f14\u7740\u5c06\u5916\u90e8\u7cfb\u7edf\u4e0e Yuan \u8fde\u63a5\u7684\u89d2\u8272\uff0c\u5c31\u52bf\u5fc5\u9700\u8981\u5c06\u6807\u51c6\u6982\u5ff5\u4e0e\u5916\u90e8\u6982\u5ff5\u8fdb\u884c\u8f6c\u6362\u3002\\n\\n\u4f7f\u7528\u8005\u5b66\u4e60\u4e86\u6807\u51c6\u6982\u5ff5\u4e4b\u540e\uff0c\u7406\u8bba\u4e0a\u5c31\u65e0\u9700\u53bb\u4e86\u89e3\u6bcf\u4e2a\u63d0\u4f9b\u5546\u5185\u90e8\u7684\u672f\u8bed\u5dee\u5f02\uff0c\u5373\u53ef\u4e1d\u6ed1\u5730\u3001\u5b8c\u6574\u5730\u5229\u7528\u6574\u4e2a\u7cfb\u7edf\u3002\u53cd\u4e4b\uff0c\u5982\u679c\u6807\u51c6\u6982\u5ff5\u6ca1\u6709\u6210\u529f\u9694\u79bb\u6389\u5916\u90e8\u6982\u5ff5\uff0c\u90a3\u4e48\u4f7f\u7528\u8005\u5c31\u5fc5\u987b\u7406\u89e3\u76f8\u5173\u7684\u5916\u90e8\u7cfb\u7edf\u7684\u5916\u90e8\u6982\u5ff5\u3002\u9762\u5bf9\u4e00\u4e2a\u5e9e\u5927\u590d\u6742\u7684\u7cfb\u7edf\uff0c\u4f7f\u7528\u8005\u662f\u5f88\u96be\u53bb\u5168\u9762\u5730\u4e86\u89e3\u6bcf\u4e2a\u5916\u90e8\u7cfb\u7edf\u7684\u5916\u90e8\u6982\u5ff5\u7684\u3002\u5c31\u7b97\u4e86\u89e3\u4e86\uff0c\u5982\u679c\u5916\u90e8\u7cfb\u7edf\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u6240\u6709\u7684\u76f8\u5173\u4f7f\u7528\u8005\u90fd\u9700\u8981\u53bb\u66f4\u65b0\u81ea\u5df1\u7684\u77e5\u8bc6\u3002\u8fd9\u662f\u4e00\u4ef6\u603b\u6210\u672c\u5f88\u5927\u7684\u4e8b\u60c5\u3002\u5728\u8f6f\u4ef6\u5de5\u7a0b\u4e2d\uff0c\u5229\u7528 \u201c\u6700\u5c0f\u77e5\u8bc6\u539f\u5219\u201d \u8fdb\u884c \u201c\u5c01\u88c5\u201d\uff0c\u4ee5\u9694\u79bb\u53d8\u5316\uff0c\u9694\u79bb\u7cfb\u7edf\u8fb9\u754c\uff0c\u6709\u8bf8\u591a\u597d\u5904\u3002\u8fd9\u5c31\u4e0e\u6211\u4eec\u6240\u8ba8\u8bba\u7684\u8fd9\u4e2a\u573a\u666f\u5982\u51fa\u4e00\u8f99\u3002\\n\\n```mermaid\\ngraph LR\\nid1[\\"\u4f7f\u7528\u8005\\"]\\nid2[\\"Yuan\u7684\u6807\u51c6\u6982\u5ff5\\"]\\nid3[\\"\u63d0\u4f9b\u55461\\"]\\nid4[\\"\u5916\u90e8\u7cfb\u7edf1\u7684\u5916\u90e8\u6982\u5ff5\\"]\\nid5[\\"\u63d0\u4f9b\u55462\\"]\\nid6[\\"\u5916\u90e8\u7cfb\u7edf2\u7684\u5916\u90e8\u6982\u5ff5\\"]\\nid1 <--\x3e id2\\nid2 <--\x3e id3 <--\x3e id4\\nid2 <--\x3e id5 <--\x3e id6\\n```\\n\\n\u4e8b\u5b9e\u662f\uff0c\u4e0d\u540c\u7684\u5916\u90e8\u7cfb\u7edf\u662f\u4e0d\u540c\u7684\u4eba\u5236\u4f5c\u7684\uff0c\u76ee\u7684\u4e0d\u4e00\uff0c\u672f\u8bed\u4e0d\u4e00\uff0c\u5bf9\u5916\u5f00\u653e\u7a0b\u5ea6\u4e0d\u4e00\u3002\\n\u4e0d\u4ec5\u662f\u5177\u5907\u4e0d\u540c\u6587\u5316\u80cc\u666f\u3001\u56fd\u5bb6\u80cc\u666f\u7684\u5e02\u573a\u4e4b\u95f4\u6ca1\u6709\u7edf\u4e00\uff0c\u5c31\u8fde\u65b0\u5174\u7684\u865a\u62df\u8d27\u5e01\u4ea4\u6613\u6240\uff0c\u5f7c\u6b64\u4e4b\u95f4\u90fd\u6ca1\u6709\u7edf\u4e00\u3002\\n\\n\u89c2\u70b9\u662f\uff0c\u7ad9\u5728\u5916\u90e8\u7cfb\u7edf\u81ea\u8eab\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u5b83\u662f\u6ca1\u6709\u7edf\u4e00\u6807\u51c6\u7684\u5185\u751f\u52a8\u673a\u7684\u3002\u8fd9\u662f\u56e0\u4e3a\uff0c\u5916\u90e8\u7cfb\u7edf\u81ea\u8eab\u7684\u804c\u8d23\u5c31\u662f\u5c06\u81ea\u8eab\u7684\u7cfb\u7edf\u505a\u597d\uff0c\u63d0\u5347\u6548\u7387\u3001\u63d0\u5347\u8d28\u91cf\u3002\u51fa\u4e8e\u4e13\u4e1a\u5316\u7684\u8003\u91cf\uff0c\u7edf\u4e00\u6982\u5ff5\u5e76\u975e\u5916\u90e8\u7cfb\u7edf\u7684\u8d23\u4efb\u3002\u5916\u90e8\u7cfb\u7edf\u4e0d\u4f1a\u8003\u8651\u53bb\u8fce\u5408\u6807\u51c6\uff0c\u9664\u975e\u6709\u9002\u5408\u7684\u6807\u51c6\u4e14\u8fce\u5408\u6807\u51c6\u662f\u5bf9\u81ea\u8eab\u6709\u5229\u7684\u3002\\n\\n\u4e8b\u5b9e\u662f\uff0c\u4e5f\u5df2\u7ecf\u51fa\u73b0\u8fc7\u82e5\u5e72\u6807\u51c6\u5316\u7684\u5c1d\u8bd5\u3002\u4f8b\u5982\u7f8e\u56fd\u7684 CME Group\u3001\u4e2d\u56fd\u671f\u8d27\u5e02\u573a\u7684 CTP \u7cfb\u7edf\u3001\u5916\u6c47\u7cfb\u7edf\u7684 FIX \u534f\u8bae\u3001\u5168\u7403\u7ea7\u522b\u7684\u5238\u5546 IBKR\u3001\u865a\u62df\u8d27\u5e01\u7684\u7edf\u4e00\u4ea4\u6613\u5e93 CCXT\u3001\u4ee5\u53ca\u533a\u5757\u94fe\u4e2d\u7684\u5168\u94fe\u4e92\u64cd\u4f5c\u6027\u534f\u8bae\u3002\\n\\n\u89c2\u70b9\u662f\uff0c\u8fd9\u4e9b\u7edf\u4e00\u7684\u5c1d\u8bd5\u90fd\u5177\u6709\u4e00\u5b9a\u7684\u8fdb\u6b65\u6027\uff0c\u7136\u800c\u4ed6\u4eec\u90fd\u662f\u5c40\u90e8\u7684\u3001\u4e0d\u4e25\u5bc6\u7684\u3001\u6216\u8005\u8bf4\u65e0\u5fc3\u6210\u4e3a\u4e00\u4e2a\u5f00\u653e\u6807\u51c6\u7684\u3002\u5f53\u4e0b\u6765\u770b\uff0c\u6574\u4f53\u662f\u5206\u88c2\u7684\uff0c\u5c40\u90e8\u662f\u7edf\u4e00\u7684\u3002\u6295\u8d44\u8005\uff0c\u6216\u8005\u8bf4\u8d44\u672c\uff0c\u6709\u7740\u50cf\u66f4\u5bb9\u6613\u589e\u6b96\u7684\u5e02\u573a\u8fc1\u79fb\u7684\u8fd0\u52a8\u6027\u3002\u4f46\u6295\u8d44\u8005\u548c\u8d44\u672c\u53c8\u65e0\u6cd5\u8f7b\u6613\u8de8\u8fc7\u7edf\u4e00\u5e02\u573a\u4e4b\u95f4\u7684\u969c\u788d\uff0c\u8fd9\u79cd\u969c\u788d\u901a\u5e38\u662f\u653f\u6cbb\u6027\u7684\uff0c\u4e5f\u6709\u6280\u672f\u6027\u7684\uff0c\u603b\u7684\u6765\u8bf4\u6784\u6210\u4e86\u4e00\u79cd\u9759\u6b62\u6027\u3002\u8fd9\u79cd\u8fd0\u52a8\u6027\u5c31\u548c\u9759\u6b62\u6027\u6784\u6210\u4e86\u4e00\u7ec4\u77db\u76fe\u3002\u5982\u679c\u6709\u4e00\u4e2a\u597d\u7684\u6807\u51c6\uff0c\u4f1a\u4f7f\u5f97\u6295\u8d44\u8005\u7684\u8fd0\u52a8\u6027\u5f97\u5230\u589e\u5f3a\uff0c\u524a\u5f31\u5e02\u573a\u4e4b\u95f4\u7684\u6280\u672f\u6027\u969c\u788d\uff0c\u4f46\u5bf9\u5e02\u573a\u4e4b\u95f4\u7684\u653f\u6cbb\u6027\u969c\u788d\u6ca1\u6709\u5f71\u54cd\u3002\u5e02\u573a\u7684\u5c40\u90e8\u4fdd\u62a4\u4e3b\u4e49\u4e0d\u4f1a\u53d7\u5230\u7834\u574f\u3002\u603b\u7684\u6765\u8bf4\uff0c\u8fd9\u662f\u4e00\u79cd\u5bf9\u73b0\u884c\u4f53\u7cfb\u7684\u6539\u826f\uff0c\u800c\u975e\u9769\u547d\u3002\\n\\n\u5982\u679c\u6211\u4eec\u60f3\u8981\u8fbe\u6210\u4f7f\u7528\u8005\u53ef\u4ee5\u5b8c\u5168\u5ffd\u7565\u5404\u4e2a\u5916\u90e8\u7cfb\u7edf\u7684\u6982\u5ff5\u7684\u76ee\u6807\uff0c\u6211\u4eec\u7684\u6807\u51c6\u5c31\u5fc5\u987b\u53d6\u6240\u6709\u5916\u90e8\u6982\u5ff5\u7684\u5e76\u96c6\uff0c\u4ee5\u83b7\u5f97\u5b8c\u6574\u7684\u8868\u8fbe\u529b\u3002\u5426\u5219\uff0c\u6211\u4eec\u7684\u6807\u51c6\u5c31\u5b58\u5728\u65e0\u6cd5\u5b8c\u6210\u7684\u4efb\u52a1\uff0c\u4f7f\u5f97\u4f7f\u7528\u8005\u88ab\u8feb\u53bb\u5b66\u4e60\u5916\u90e8\u7cfb\u7edf\u7684\u6982\u5ff5\uff0c\u6211\u4eec\u7684\u76ee\u6807\u5c31\u5931\u8d25\u4e86\u3002\\n\\n\u7136\u800c\uff0c\u4e00\u5473\u5730\u53d6\u5e76\u96c6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6807\u51c6\u6982\u5ff5\u7684\u6cdb\u6ee5\u3002\u6807\u51c6\u540c\u65f6\u5e94\u8be5\u4fdd\u6301\u7cbe\u7b80\uff0c\u800c\u4e0d\u662f\u53d8\u5f97\u81c3\u80bf\u3002\\n\\n\u4e00\u4e2a\u53cd\u9762\u7684\u5178\u578b\u662f CCXT\uff0c\u5b83\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u5bf9\u6240\u6709\u4ea4\u6613\u6240\u516c\u5171\u7684\u63a5\u53e3\u505a\u4e86\u7edf\u4e00\u6807\u51c6\uff0c\u4f46\u8d25\u7b14\u5728\u4e8e\u5b83\u4e3a\u4e00\u4e9b\u975e\u6807\u51c6\u7684\u63a5\u53e3\u505a\u4e86\u59a5\u534f\uff0c\u5141\u8bb8\u7528\u6237\u901a\u8fc7 CCXT \u7a7f\u900f\u6027\u5730\u8c03\u7528\u5177\u4f53\u4ea4\u6613\u6240\u7684\u63a5\u53e3\u3002\u8fd9\u52bf\u5fc5\u5bfc\u81f4\u7528\u6237\u5728\u4f7f\u7528 CCXT \u7684\u540c\u65f6\u8fd8\u5bf9\u5177\u4f53\u4ea4\u6613\u6240\u7684\u6982\u5ff5\u6709\u4e00\u5b9a\u7684\u4e86\u89e3\u3002\u8fd9\u7834\u574f\u4e86\u6807\u51c6\u672c\u8eab\u5e26\u6765\u7684\u597d\u5904\u3002\u6211\u4eec\u5728\u63a5\u5165 CCXT \u7684\u65f6\u5019\uff0c\u53d1\u73b0\u901a\u8fc7\u5b83\u5e76\u4e0d\u80fd\u5b8c\u5168\u9694\u79bb\u6389\u5177\u4f53\u4ea4\u6613\u6240\u7684\u77e5\u8bc6\u3002\u5f52\u6839\u7ed3\u5e95\uff0c\u5b83\u7684\u5b9a\u4f4d\u662f\u4e00\u4e2a\u4ee3\u7801\u5e93\uff0c\u5b83\u7684\u804c\u8d23\u662f\u7b80\u5316\u7528\u6237\u8c03\u7528\u5177\u4f53\u4ea4\u6613\u6240\u7684\u8fc7\u7a0b\u3002\u5b83\u53ea\u505a\u4e86\u90e8\u5206\u5de5\u4f5c\uff0c\u6240\u4ee5\u6211\u65ad\u8a00\uff0c\u5b83\u672a\u6765\u4e5f\u4e0d\u53ef\u80fd\u4f1a\u53d8\u6210\u4e00\u4e2a\u6807\u51c6\u3002\\n\\n\u5982\u679c\u63d0\u4f9b\u5546\u88ab\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u5e94\u7528\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u4ee3\u7801\u5e93\uff0c\u60c5\u51b5\u5c31\u4f1a\u5927\u4e0d\u4e00\u6837\u3002\u201c\u5f00\u53d1\u8005\u8c03\u7528\u4ee3\u7801\u5e93\u201d\u548c\u201c\u7528\u6237\u4e0e\u5e94\u7528\u4ea4\u4e92\u201d\uff0c\u5728\u5f62\u5f0f\u4e0a\u662f\u76f8\u4f3c\u7684\uff0c\u4f46\u5728\u5185\u5bb9\u4e0a\u662f\u4e0d\u540c\u7684\u3002\\n\\n\u4f8b\u5982\uff0c\u7528\u6237\u7684\u76ee\u7684\u662f \u201c\u76d1\u63a7\u8d26\u6237\u4fe1\u606f\u4ee5\u53d1\u73b0\u5f02\u5e38\u201d\u3001\u201c\u62c9\u53d6\u5168\u90e8\u6570\u636e\u4ee5\u7814\u7a76\u5176\u4e2d\u7684\u89c4\u5f8b\u201d\u3001\u201c\u6267\u884c\u8ba2\u5355\u64cd\u4f5c\u4ee5\u6539\u53d8\u8d26\u6237\u5934\u5bf8\u201d \u7b49\u7b49\uff0c\u800c\u4e0d\u4f1a\u5173\u5fc3\u662f\u8f6e\u8be2\u63a5\u53e3\u8fd8\u662f\u8ba2\u9605\u5957\u63a5\u5b57\u3002\u4ed6\u4eec\u4ec5\u4ec5\u5173\u5fc3\u8fbe\u6210\u76ee\u7684\u7684\u53ef\u80fd\u6027\u548c\u6548\u679c\uff0c\u800c\u4e0d\u4f1a\u5173\u5fc3\u8fbe\u6210\u76ee\u7684\u80cc\u540e\u7684\u5b9e\u73b0\u624b\u6bb5\u3002\u56e0\u6b64\uff0c\u6807\u51c6\u9700\u8981\u9488\u5bf9\u7528\u6237\u7684\u76ee\u7684\u8fdb\u884c\u9002\u5f53\u5730\u3001\u6709\u4e3b\u89c1\u5730\u5efa\u8bbe\u3002\\n\\n\u6839\u636e\u7528\u6237\u76ee\u7684\u7684\u4e0d\u540c\uff0c\u4f1a\u5bf9\u6570\u636e\u4ea4\u4e92\u7684\u5b9e\u65f6\u6027\u548c\u51c6\u786e\u6027\u6709\u4e0d\u540c\u7684\u8981\u6c42\u3002\\n\\n1. \u7814\u7a76\uff1a\u5bf9\u5b9e\u65f6\u6027\u65e0\u8981\u6c42\uff0c\u4f46\u5bf9\u51c6\u786e\u6027\u6709\u9ad8\u8981\u6c42\u3002\u6bd5\u7adf\u5931\u4e4b\u6beb\u5398\uff0c\u8c2c\u4ee5\u5343\u91cc\u3002\\n2. \u76d1\u63a7\uff1a\u5bf9\u5b9e\u65f6\u6027\u6709\u57fa\u672c\u8981\u6c42\uff0c\u5728\u51e0\u79d2\u5185\u90fd\u53ef\u4ee5\u63a5\u53d7\uff0c\u56e0\u4e3a\u76ee\u7684\u662f\u8ba9\u4eba\u80fd\u591f\u4ecb\u5165\uff0c\u4eba\u7684\u4ecb\u5165\u4e0d\u53ef\u80fd\u90a3\u4e48\u5feb\uff0c\u56e0\u6b64\u5c06\u5b9e\u65f6\u6027\u8fdb\u4e00\u6b65\u505a\u9ad8\uff0c\u8d85\u8d8a\u4eba\u7684\u53cd\u5e94\u80fd\u529b\u65f6\uff0c\u662f\u6ca1\u6709\u610f\u4e49\u7684\u3002\u5bf9\u51c6\u786e\u6027\u4e5f\u6709\u4e00\u5b9a\u7684\u5bb9\u5fcd\u5ea6\uff0c\u56e0\u4e3a\u4eba\u53ef\u4ee5\u5141\u8bb8\u6709\u4e00\u5b9a\u7684\u8bef\u62a5\u3002\\n3. \u6267\u884c\uff1a\u5bf9\u5b9e\u65f6\u6027\u8981\u6c42\u9ad8\uff0c\u5bf9\u6570\u636e\u7684\u51c6\u786e\u6027\u8981\u6c42\u4e0d\u9ad8\uff0c\u56e0\u4e3a\u53d7\u9650\u4e8e\u539f\u59cb\u6570\u636e\u6e90\u7684\u51c6\u786e\u6027\uff0c\u6267\u884c\u73af\u5883\u5fc5\u987b\u6709\u81ea\u52a8\u5bb9\u9519\u7ea0\u9519\u80fd\u529b\u3002\\n\\n\u53e6\u5916\uff0c\u7b97\u529b\u8d44\u6e90\u548c\u6570\u636e\u89c4\u6a21\u4e5f\u4f1a\u5f71\u54cd\u5de5\u7a0b\u8bbe\u8ba1\uff0c\u4f46\u4e0d\u662f\u5efa\u7acb\u6807\u51c6\u6982\u5ff5\u9700\u8981\u5173\u5fc3\u7684\u7ef4\u5ea6\u3002\u56e0\u4e3a\uff0c\u8ba1\u7b97\u80fd\u529b\u662f\u6709\u6781\u9650\u7684\u3002\u6211\u4eec\u4ec5\u4ec5\u9700\u8981\u4ece\u4f7f\u7528\u8005\u7684\u76ee\u7684\uff0c\u6765\u5b9a\u4e49\u6807\u51c6\u6982\u5ff5\u5373\u53ef\u3002\\n\\n### \u5c0f\u7ed3\\n\\n\u6982\u5ff5\u4e00\u81f4\u6027\u662f\u6807\u51c6\u7684\u91cd\u8981\u539f\u5219\u548c\u5e95\u7ebf\u3002\\n\\n\u6709\u4e86\u6982\u5ff5\u4e00\u81f4\u6027\uff0c\u540e\u7eed\u7684\u8d28\u91cf\u63a7\u5236\u3001\u5b89\u5168\u6027\u624d\u80fd\u6210\u4e3a\u4e00\u4e2a\u53ef\u4ee5\u81ea\u52a8\u5b9e\u65bd\u7684\u5207\u9762\u3002\u8fd9\u4e9b\u5207\u9762\u7684\u5b9a\u4e49\uff0c\u6211\u4eec\u8003\u8651\u53e6\u4f5c\u4ecb\u7ecd\u3002\\n\\n\u6709\u4e86\u6982\u5ff5\u4e00\u81f4\u6027\uff0c\u4ea4\u6613\u8005\u4eec\u624d\u80fd\u771f\u6b63\u5730\u4e0d\u518d\u9700\u8981\u9010\u4e2a\u5b66\u4e60\u6bcf\u4e2a\u5916\u90e8\u7cfb\u7edf\u7684\u6982\u5ff5\u3002\\n\\n\x3c!-- ### \u8d28\u91cf\u63a7\u5236\\n\\n\u5728\u6982\u5ff5\u4e00\u81f4\u6027\u7684\u524d\u63d0\u4e0b\uff0c\u6211\u4eec\u624d\u53ef\u4ee5\u6a21\u62df\u7528\u6237\u5bf9\u63d0\u4f9b\u5546\u7684\u670d\u52a1\u8fdb\u884c\u7edf\u4e00\u7684\u81ea\u52a8\u6d4b\u8bd5\u548c\u5ea6\u91cf\u3002\u7528\u4e8e\u8bc4\u4f30\u4e0d\u540c\u7684\u63d0\u4f9b\u5546\u7684\u5b9e\u73b0\u8868\u73b0\u3002\\n\\n1. \u5b9a\u6027\u6d4b\u8bd5\uff1a\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b\uff0c\u57fa\u672c\u4fdd\u8bc1\u63d0\u4f9b\u5546\u7684\u4ee3\u7801\u4ee5\u7b26\u5408\u9884\u671f\u7684\u65b9\u5f0f\u8fd0\u884c\uff0c\u5176\u7ed3\u679c\u53ea\u6709\u901a\u8fc7\u548c\u4e0d\u901a\u8fc7\u3002\u540c\u65f6\u8f85\u52a9\u5b9a\u4e49\u6807\u51c6\u7684\u884c\u4e3a\uff0c\u8f85\u52a9\u8fdb\u884c\u56de\u5f52\u6d4b\u8bd5\u3002\\n2. \u5b9a\u91cf\u8bc4\u6d4b\uff1a\u7f16\u5199\u5ea6\u91cf\u7528\u4f8b\uff0c\u5728\u5b9e\u9a8c\u5ba4\u73af\u5883\u4e0b\uff0c\u8bc4\u6d4b\u63d0\u4f9b\u5546\u7684\u8868\u73b0\u3002\u5e76\u4e14\u53ef\u4ee5\u5bf9\u6bd4\u4e0d\u540c\u63d0\u4f9b\u5546\u7684\u8868\u73b0\u3002\\n3. \u8ddf\u8e2a\u53cd\u9988\uff1a\u7f16\u5199\u8ddf\u8e2a\u7528\u4f8b\uff0c\u8ddf\u8e2a\u5728\u771f\u5b9e\u7684\u73af\u5883\u4e0b\u7684\u8868\u73b0\u3002\u4e3a\u63d0\u4f9b\u5546\u7684\u8fdb\u4e00\u6b65\u6539\u826f\u63d0\u4f9b\u6570\u636e\u4f9d\u636e\u3002\\n\\n\u7531\u4e8e\u5916\u90e8\u7cfb\u7edf\u7684\u5b58\u5728\uff0c\u9488\u5bf9\u63d0\u4f9b\u5546\u7684\u6d4b\u8bd5\u548c\u5ea6\u91cf\u4e0d\u53ef\u80fd\u662f\u65e0\u526f\u4f5c\u7528\u7684\u3002\u56e0\u6b64\u6267\u884c\u6301\u7eed\u6d4b\u8bd5\uff0c\u662f\u6709\u8f83\u5927\u7684\u6210\u672c\u7684\u3002\u4f8b\u5982\u9700\u8981\u6d4b\u8bd5\u4e0b\u5355\u7684\u7528\u4f8b\uff0c\u5c31\u4e00\u5b9a\u4f1a\u4ea7\u751f\u771f\u5b9e\u7684\u4ea4\u6613\uff0c\u4ece\u800c\u4ea7\u751f\u4ea4\u6613\u8d39\u7528\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4ec5\u5728\u6709\u5fc5\u8981\u7684\u65f6\u673a\u6267\u884c\u5b9a\u6027\u6d4b\u8bd5\u548c\u5b9a\u91cf\u8bc4\u6d4b\uff0c\u4f8b\u5982\u5728\u6b63\u5f0f\u7248\u672c\u53d1\u5e03\u65f6\u6267\u884c\u3002\u4f46\u662f\u8ddf\u8e2a\u53cd\u9988\u662f\u53ef\u4ee5\u4e00\u76f4\u968f\u884c\u7684\u3002\\n\\n\u5168\u91cf/\u90e8\u5206\u6d4b\u8bd5\uff1a\u5728\u5f00\u53d1\u65f6\uff0c\u53ea\u9700\u8981\u89e6\u53d1\u76f8\u5173\u7684\u6d4b\u8bd5\u7528\u4f8b\u5373\u53ef\u3002\u4ec5\u5728\u5fc5\u8981\u7684\u65f6\u673a\u6267\u884c\u5168\u91cf\u7684\u6d4b\u8bd5\u3002 --\x3e"},{"id":"vision-of-no-trade-no-life","metadata":{"permalink":"/zh-Hans/blog/vision-of-no-trade-no-life","editUrl":"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/blog/2024-04-17-vision-of-no-trade-no-life.md","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2024-04-17-vision-of-no-trade-no-life.md","title":"No Trade No Life \u7684\u613f\u666f","description":"\u6bcf\u4e2a\u4eba\u90fd\u53ef\u4ee5\u4f9d\u9760\u6295\u8d44\u4ea4\u6613\uff0c\u8f7b\u677e\u4eab\u53d7\u4e16\u754c\u7ecf\u6d4e\u53d1\u5c55\u6210\u679c\u3002","date":"2024-04-17T00:00:00.000Z","formattedDate":"2024\u5e744\u670817\u65e5","tags":[{"label":"Yuan","permalink":"/zh-Hans/blog/tags/yuan"}],"readingTime":3.645,"hasTruncateMarker":false,"authors":[{"name":"CZ","title":"NTNL Co-Founder","url":"https://github.com/zccz14","imageURL":"https://github.com/zccz14.png","key":"zccz14"}],"frontMatter":{"slug":"vision-of-no-trade-no-life","title":"No Trade No Life \u7684\u613f\u666f","authors":["zccz14"],"tags":["Yuan"]},"unlisted":false,"prevItem":{"title":"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981\u4e3a\u63d0\u4f9b\u5546\u8bbe\u7acb\u6807\u51c6\uff1f","permalink":"/zh-Hans/blog/why-we-need-stardard-for-vendors"},"nextItem":{"title":"\u6211\u4eec\u771f\u7684\u9700\u8981 Python \u6765\u505a\u91cf\u5316\u4ea4\u6613\u5417\uff1f","permalink":"/zh-Hans/blog/do-we-really-need-python-for-quant"}},"content":"**\u6bcf\u4e2a\u4eba\u90fd\u53ef\u4ee5\u4f9d\u9760\u6295\u8d44\u4ea4\u6613\uff0c\u8f7b\u677e\u4eab\u53d7\u4e16\u754c\u7ecf\u6d4e\u53d1\u5c55\u6210\u679c**\u3002\\n\\n\u7ecf\u6d4e\u53d1\u5c55\u7684\u6700\u7ec8\u76ee\u7684\u662f\u63d0\u9ad8\u4eba\u6c11\u7684\u751f\u6d3b\u6c34\u51c6\u3002\\n\u4f9d\u9760\u6295\u8d44\u4ea4\u6613\uff0c\u4eab\u53d7\u7ecf\u6d4e\u53d1\u5c55\uff0c\u5c31\u662f\u4e3a\u4e86\u6539\u5584\u751f\u6d3b\uff0c\u8fd9\u5c31\u662f No Trade No Life \u7684\u672c\u4e49\u3002\\n\\n\u51fa\u4e8e\u907f\u514d\u4e3b\u9898\u7684\u8fc7\u5ea6\u6269\u5927\u3001\u5f15\u8d77\u4e89\u8bae\uff0c\u9996\u5148\u6392\u9664\u82e5\u5e72\u8bdd\u9898\uff1a\\n\\n1. \u6211\u4eec\u4e0d\u8003\u8651\u5e94\u5f53\u5982\u4f55\u89e3\u51b3\u8d2b\u5bcc\u5dee\u8ddd\u7684\u95ee\u9898\uff0c\u8fd9\u662f\u653f\u6cbb\u95ee\u9898\uff0c\u662f\u653f\u5e9c\u793e\u4f1a\u7ba1\u7406\u4eba\u5458\u9700\u8981\u8003\u8651\u7684\u8bfe\u9898\uff1b\\n2. \u6211\u4eec\u4e0d\u8003\u8651\u5e94\u5f53\u5982\u4f55\u76f4\u63a5\u4fc3\u8fdb\u7ecf\u6d4e\u7684\u53d1\u5c55\uff0c\u8fd9\u662f\u79d1\u5b66\u95ee\u9898\uff0c\u662f\u5404\u884c\u5404\u4e1a\u7684\u4eba\u624d\u4eec\u9700\u8981\u8003\u8651\u7684\u8bfe\u9898\uff1b\\n\\n\u6211\u4eec\u7ad9\u5728\u6bcf\u4e2a\u6295\u8d44\u8005\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u601d\u8003\u5982\u4f55**\u79d1\u5b66\u9ad8\u6548**\u5730\u7ba1\u7406\u81ea\u5df1\u7684\u8d22\u5bcc\uff0c\u5e2e\u52a9\u6295\u8d44\u8005\u514b\u670d\u6295\u8d44\u8fc7\u7a0b\u4e2d\u4f1a\u9047\u5230\u7684\u56f0\u96be\u3002\\n\\n\u6211\u4eec\u60f3\u8981\u9610\u660e\u6295\u8d44\u7684\u56f0\u96be\u6027\uff0c\u5e76\u7ed9\u51fa\u9488\u5bf9\u6027\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4f7f\u5f97\u79d1\u6280\u80fd\u591f\u589e\u5f3a\u7528\u6237\u4e2a\u4eba\u7684\u80fd\u529b\uff0c\u4ece\u800c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u5730\u8fdb\u884c\u6295\u8d44\u64cd\u4f5c\u3002\\n\\n\u90a3\u4e48\uff0c\u6295\u8d44\u7684\u56f0\u96be\u5230\u5e95\u662f\u4ec0\u4e48\uff1f\\n\\n1. \u5e02\u573a\u4e0d\u505c\uff0c\u6295\u8d44\u592a\u5fd9 (\u8fc7\u91cf\u7684\u4fe1\u606f \u4e0e \u4f4e\u6548\u7684\u5904\u7406\u80fd\u529b \u4e4b\u95f4\u7684\u77db\u76fe)\uff1b\\n2. \u9700\u6c42\u591a\u6837\uff0c\u9009\u9879\u592a\u5c11 (\u591a\u6837\u5316\u7684\u6295\u8d44\u9700\u6c42 \u4e0e \u5c11\u91cf\u7684\u6295\u8d44\u54c1\u4f9b\u5e94 \u4e4b\u95f4\u7684\u77db\u76fe)\uff1b\\n3. \u60f3\u7684\u5f88\u7f8e\uff0c\u89c1\u8bc6\u592a\u5c11 (\u6295\u8d44\u8005\u7684\u9884\u671f \u4e0e \u6295\u8d44\u8005\u7684\u80fd\u529b \u4e0d\u5339\u914d\u7684\u77db\u76fe)\uff1b\\n4. \u60f3\u5f97\u5f53\u7136\uff0c\u89c9\u609f\u4e0d\u8db3 (\u6295\u8d44\u8005\u7684\u611f\u6027 \u4e0e \u6295\u8d44\u8005\u7684\u7406\u6027 \u4e4b\u95f4\u7684\u77db\u76fe)\\n\\n\u4e3a\u6b64\uff0c\u6211\u4eec\u9488\u5bf9\u4e0a\u8ff0\u95ee\u9898\uff0c\u5206\u522b\u63d0\u51fa\u9488\u5bf9\u6027\u7684\u89e3\u51b3\u65b9\u6848\uff1a\\n\\n1. \u5229\u7528\u5305\u62ec AI\u3001\u4e91\u8ba1\u7b97\u7b49\u4e00\u7cfb\u5217\u6280\u672f\uff0c\u5b9e\u73b0\u81ea\u52a8\u4ea4\u6613\uff0c\u89e3\u653e\u7528\u6237\u7684\u65f6\u95f4\u7cbe\u529b\uff0c\u89e3\u653e\u751f\u4ea7\u529b\u3002\\n2. \u7528\u6237\u53ef\u4ee5\u81ea\u884c\u4ece\u5e02\u573a\u6807\u51c6\u7684\u6295\u8d44\u54c1\u4e2d\uff0c\u642d\u914d\u590d\u5408\u7684\u6295\u8d44\u54c1\uff0c\u5efa\u7acb\u6295\u8d44\u7ec4\u5408\uff0c\u5efa\u7acb\u79c1\u52df\u57fa\u91d1\uff0c\u4ece\u800c\u6781\u5927\u4e30\u5bcc\u6295\u8d44\u54c1\uff0c\u4ee5\u6ee1\u8db3\u81ea\u8eab\u548c\u5468\u8fb9\u670b\u53cb\u7684\u6295\u8d44\u9700\u6c42\u3002\\n3. \u4ece\u5386\u53f2\u4e2d\u627e\u6559\u8bad\uff0c\u4ece\u77e5\u8bc6\u4e2d\u627e\u7ecf\u9a8c\u3002\u4e30\u5bcc\u6d4b\u8bd5\u4f53\u7cfb\u3001\u5e76\u642d\u5efa\u6295\u8d44\u4ea4\u6613\u77e5\u8bc6\u5e93\uff0c\u5e2e\u52a9\u5c0f\u767d\u4e00\u6b65\u6b65\u6210\u4e3a\u4e13\u4e1a\u6295\u8d44\u8005\uff0c\u5e76\u5e2e\u52a9\u6240\u6709\u6295\u8d44\u8005\u7ba1\u7406\u81ea\u8eab\u7684\u9884\u671f\u3002\\n4. \u901a\u8fc7\u6570\u636e\u53ef\u89c6\u5316\uff0c\u5c06\u67af\u71e5\u7684\u6570\u636e\uff0c\u8f6c\u5316\u4e3a\u53ef\u4ee5\u901a\u8fc7\u89c6\u89c9\u76f4\u63a5\u523a\u6fc0\u7528\u6237\u611f\u6027\u601d\u7ef4\u7684\u683c\u5f0f\uff0c\u5e2e\u52a9\u7528\u6237\u6446\u8131\u60f3\u5f53\u7136\u7684\u601d\u7ef4\u60f0\u6027\u3002\\n\\n\u5982\u679c\u7ec8\u6709\u4e00\u5929\u7ecf\u6d4e\u53d1\u5c55\u7684\u613f\u666f\u5f97\u4ee5\u5b9e\u73b0\uff0c\u4eba\u6c11\u7684\u751f\u6d3b\u6c34\u5e73\u5f97\u4ee5\u63d0\u9ad8\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a:\\n\\n1. \u5982\u679c\u6295\u8d44\u4f9d\u7136\u91cd\u8981\uff0c\u90a3\u4e48\u6bcf\u4e2a\u4eba\u90fd\u6709\u4e00\u5957\u597d\u7528\u7684\u6295\u8d44\u64cd\u4f5c\u7cfb\u7edf\u3002(\u6211\u5e0c\u671b\u90a3\u4f1a\u662f\u6211\u4eec\u51fa\u54c1\u7684 Yuan)\\n2. \u5982\u679c\u6295\u8d44\u5df2\u7ecf\u4e0d\u518d\u91cd\u8981\uff0c\u90a3\u4e48\u5171\u4ea7\u4e3b\u4e49\u5927\u62b5\u5df2\u7ecf\u5b9e\u73b0\u4e86\u3002"},{"id":"do-we-really-need-python-for-quant","metadata":{"permalink":"/zh-Hans/blog/do-we-really-need-python-for-quant","editUrl":"https://github.com/No-Trade-No-Life/Yuan/tree/main/ui/docs/blog/2023-11-17-do-we-really-need-python-for-quant.md","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2023-11-17-do-we-really-need-python-for-quant.md","title":"\u6211\u4eec\u771f\u7684\u9700\u8981 Python \u6765\u505a\u91cf\u5316\u4ea4\u6613\u5417\uff1f","description":"\u5982\u4eca\uff0cPython \u662f\u91cf\u5316\u4ea4\u6613\u4e2d\u6700\u6d41\u884c\u7684\u7f16\u7a0b\u8bed\u8a00\u3002VNPY\u3001Zipline\u3001PyAlgoTrade \u548c Backtrader \u90fd\u662f\u7528 Python \u7f16\u5199\u7684\u3002Python \u5728\u91cf\u5316\u4ea4\u6613\u4e2d\u88ab\u5e7f\u6cdb\u4f7f\u7528\uff0c\u4f46\u53ef\u80fd\u5e76\u975e\u6700\u9002\u5408\u8fd9\u9879\u5de5\u4f5c\u7684\u8bed\u8a00\u3002\u867d\u7136\u5b83\u6709\u5f88\u591a\u4f18\u70b9\uff0c\u6bd4\u5982\u6613\u4e8e\u5b66\u4e60\u548c\u62e5\u6709\u51fa\u8272\u7684\u6570\u636e\u79d1\u5b66\u751f\u6001\u7cfb\u7edf\uff0c\u4f46\u91cf\u5316\u6295\u8d44\u5e73\u53f0\u5982 Quantopian\u3001JoinQuant \u548c QuantConnect \u5374\u96be\u4ee5\u76c8\u5229\uff0c\u5c3d\u7ba1\u4e92\u8054\u7f51\u57fa\u7840\u8bbe\u65bd\u7684\u6210\u672c\u5728\u964d\u4f4e\u3002\u8fd9\u662f\u56e0\u4e3a\u8f6f\u4ef6\u4f9d\u8d56\u4e8e\u7b97\u529b\uff0c\u800c\u7b97\u529b\u5728\u4eca\u5929\u4f9d\u7136\u6602\u8d35\u3002","date":"2023-11-17T00:00:00.000Z","formattedDate":"2023\u5e7411\u670817\u65e5","tags":[{"label":"Yuan","permalink":"/zh-Hans/blog/tags/yuan"},{"label":"Tech","permalink":"/zh-Hans/blog/tags/tech"}],"readingTime":2.97,"hasTruncateMarker":false,"authors":[{"name":"CZ","title":"NTNL Co-Founder","url":"https://github.com/zccz14","imageURL":"https://github.com/zccz14.png","key":"zccz14"}],"frontMatter":{"slug":"do-we-really-need-python-for-quant","title":"\u6211\u4eec\u771f\u7684\u9700\u8981 Python \u6765\u505a\u91cf\u5316\u4ea4\u6613\u5417\uff1f","authors":["zccz14"],"tags":["Yuan","Tech"]},"unlisted":false,"prevItem":{"title":"No Trade No Life \u7684\u613f\u666f","permalink":"/zh-Hans/blog/vision-of-no-trade-no-life"}},"content":"\u5982\u4eca\uff0cPython \u662f\u91cf\u5316\u4ea4\u6613\u4e2d\u6700\u6d41\u884c\u7684\u7f16\u7a0b\u8bed\u8a00\u3002VNPY\u3001Zipline\u3001PyAlgoTrade \u548c Backtrader \u90fd\u662f\u7528 Python \u7f16\u5199\u7684\u3002Python \u5728\u91cf\u5316\u4ea4\u6613\u4e2d\u88ab\u5e7f\u6cdb\u4f7f\u7528\uff0c\u4f46\u53ef\u80fd\u5e76\u975e\u6700\u9002\u5408\u8fd9\u9879\u5de5\u4f5c\u7684\u8bed\u8a00\u3002\u867d\u7136\u5b83\u6709\u5f88\u591a\u4f18\u70b9\uff0c\u6bd4\u5982\u6613\u4e8e\u5b66\u4e60\u548c\u62e5\u6709\u51fa\u8272\u7684\u6570\u636e\u79d1\u5b66\u751f\u6001\u7cfb\u7edf\uff0c\u4f46\u91cf\u5316\u6295\u8d44\u5e73\u53f0\u5982 Quantopian\u3001JoinQuant \u548c QuantConnect \u5374\u96be\u4ee5\u76c8\u5229\uff0c\u5c3d\u7ba1\u4e92\u8054\u7f51\u57fa\u7840\u8bbe\u65bd\u7684\u6210\u672c\u5728\u964d\u4f4e\u3002\u8fd9\u662f\u56e0\u4e3a\u8f6f\u4ef6\u4f9d\u8d56\u4e8e\u7b97\u529b\uff0c\u800c\u7b97\u529b\u5728\u4eca\u5929\u4f9d\u7136\u6602\u8d35\u3002\\n\\n\u90e8\u5206\u5e73\u53f0\u63d0\u4f9b\u4e86\u672c\u5730\u5b89\u88c5\u7684\u80fd\u529b\uff0c\u8fd9\u53ef\u80fd\u662f\u4e00\u4e2a\u66f4\u7ecf\u6d4e\u7684\u9009\u62e9\uff0c\u4f46\u5bf9\u975e\u4e13\u4e1a\u7684\u4ea4\u6613\u8005\u6765\u8bf4\uff0c\u5b89\u88c5\u548c\u73af\u5883\u914d\u7f6e\u53ef\u80fd\u4f1a\u6210\u4e3a\u4e00\u4e2a\u95ee\u9898\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5e73\u53f0\u901a\u5e38\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86 Web GUI\u3002\u51b5\u4e14\u672c\u5730\u5b89\u88c5\u7684\u8f6f\u4ef6\u4e0d\u5177\u5907\u8de8\u5e73\u53f0\u6027\uff0c\u65e0\u6cd5\u5229\u7528\u4e91\u8ba1\u7b97\u80fd\u529b\uff0c\u800c\u4e14\u5f88\u96be\u5b9e\u73b0\u9ad8\u53ef\u7528\u3002\\n\\n\u91cf\u5316\u4ea4\u6613\u9700\u8981\u5927\u91cf\u7684\u7814\u7a76\u548c\u5f00\u53d1\uff0c\u800c\u5728\u6a21\u578b\u7814\u7a76\u6d4b\u8bd5\u9636\u6bb5\u9700\u8981\u5927\u91cf\u7684\u7b97\u529b\uff0c\u6b64\u65f6\uff0c\u4e91\u8ba1\u7b97\u65e0\u8bba\u5bf9\u4e8e\u7528\u6237\u8fd8\u662f\u5e73\u53f0\u6765\u8bf4\u53ef\u80fd\u90fd\u662f\u4e00\u4e2a\u8fc7\u4e8e\u6602\u8d35\u7684\u9009\u62e9\u3002\u5982\u679c\u7528\u6237\u5e76\u4e0d\u786e\u4fe1\u4ed6\u4eec\u80fd\u4ece\u5e73\u53f0\u8d5a\u94b1\uff0c\u4ed6\u4eec\u5c31\u4e0d\u4f1a\u4e3a\u6b64\u4ed8\u8d39\u3002\\n\\n\u56e0\u6b64\uff0c\u9488\u5bf9\u8fd9\u4e9b\u95ee\u9898\uff0c\u6211\u4eec\u63d0\u51fa\u4e86\u4e00\u4e2a\u89e3\u51b3\u65b9\u6848\uff1a\u7528 JavaScript \u66ff\u4ee3 Python\u3002JavaScript \u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u4f7f\u7528\uff0c\u5141\u8bb8\u7528\u6237\u5229\u7528\u81ea\u5df1\u8bbe\u5907\u7684\u8ba1\u7b97\u80fd\u529b\uff0c\u65e0\u9700\u8fdb\u884c\u672c\u5730\u5b89\u88c5\u3002JavaScript \u751f\u6001\u7cfb\u7edf\u6210\u719f\u4e14\u4e0d\u65ad\u53d1\u5c55\uff0c\u4f7f\u5176\u6210\u4e3a\u6700\u9002\u5408 Web \u5f00\u53d1\u548c\u6570\u636e\u79d1\u5b66\u7684\u751f\u6001\u7cfb\u7edf\u3002\u800c\u4e14 JavaScript \u6bd4 Python \u66f4\u5feb\u3002\\n\\n\u6211\u4eec\u5df2\u7ecf\u4f7f\u7528 JavaScript \u6784\u5efa\u4e86\u4e00\u4e2a\u91cf\u5316\u5e73\u53f0\uff0c\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u548c\u4e91\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u3002\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u5b8c\u5168\u514d\u8d39\u8fdb\u884c\u7814\u7a76\u548c\u5f00\u53d1\uff0c\u76f4\u5230\u4ed6\u4eec\u60f3\u8981\u5728\u4e91\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u6a21\u578b\u3002\u8fd9\u6837\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u652f\u4ed8\u8d39\u7528\u4e4b\u524d\u4ece\u5e73\u53f0\u4e2d\u83b7\u5f97\u4ef7\u503c\uff0c\u800c\u5e73\u53f0\u5728\u6536\u5230\u4ed8\u6b3e\u540e\u53ef\u4ee5\u652f\u4ed8\u8ba1\u7b97\u80fd\u529b\uff0c\u5f62\u6210\u4e00\u79cd\u53cc\u8d62\u7684\u89e3\u51b3\u65b9\u6848\u3002\\n\\n\u672a\u6765\uff0c\u6211\u4eec\u5c06\u5206\u4eab\u5982\u4f55\u5728\u6ca1\u6709\u6210\u672c\u7684\u60c5\u51b5\u4e0b\u5b58\u50a8\u548c\u5206\u53d1\u6570\u636e\uff0c\u4ee5\u786e\u4fdd\u5e73\u53f0\u59cb\u7ec8\u8fd0\u884c\u3002\u6709\u4e86\u8fd9\u4e9b\u4f18\u52bf\uff0c\u6211\u4eec\u786e\u4fe1 JavaScript \u662f\u672a\u6765\u91cf\u5316\u4ea4\u6613\u7684\u6700\u4f73\u9009\u62e9\u3002"}]}')}}]);