(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{182:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"android-集成-weexbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android-集成-weexbox","aria-hidden":"true"}},[t._v("#")]),t._v(" Android 集成 WeexBox")]),t._v(" "),s("p",[t._v("即使项目是用 @weexbox/cli 生成的，我依旧建议你了解一下这个过程。")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Android SDK使用Kotlin开发，并且100%兼容Java。\n对于有追求的团队而言，强烈建议使用Kotlin来开发，开发速度和稳健度都会大幅提升！")])]),t._v(" "),s("h2",{attrs:{id:"初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),s("p",[t._v("z\n在 Application 中")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化 WeexBox")]),t._v("\n    WeexBoxEngine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启调试")]),t._v("\n    WeexBoxEngine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isDebug "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),s("ul",[s("li",[t._v("普通 Activity 继承 WBBaseActivity")]),t._v(" "),s("li",[t._v("Weex Activity 继承 WBWeexActivity")]),t._v(" "),s("li",[t._v("普通 Fragment 继承 WBBaseFragment")]),t._v(" "),s("li",[t._v("Weex Fragment 继承 WBWeexFragment")]),t._v(" "),s("li",[t._v("Web Activity 继承 WBWebViewActivity")])]),t._v(" "),s("h2",{attrs:{id:"事件通知"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件通知","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件通知")]),t._v(" "),s("p",[t._v("WeexBox 提供了原生与weex互相通知的能力(你甚至可以用作原生之间的通知，不管是weex界面还是原生界面，只要注册了事件，都能接收到)。")]),t._v(" "),s("h4",{attrs:{id:"通过-event-类，你可以在weex发送事件与注册事件："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过-event-类，你可以在weex发送事件与注册事件：","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过 Event 类，你可以在weex发送事件与注册事件：")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册事件")]),t._v("\nEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送事件")]),t._v("\nEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注销事件")]),t._v("\nEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregister")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注销所有事件")]),t._v("\nEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregisterAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"在原生发送事件与注册事件："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在原生发送事件与注册事件：","aria-hidden":"true"}},[t._v("#")]),t._v(" 在原生发送事件与注册事件：")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册事件")]),t._v("\nEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourEventName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//this为Activity或者Fragment")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//var value = it!!["key"]  it为发送事件传过来的Map<String,Any>，可不传')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送事件")]),t._v("\nMap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" map "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new HashMap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourEventName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//map可为null")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注销事件")]),t._v("\nEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregister")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourEventName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//this为Activity或者Fragment")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注销所有事件")]),t._v("\nEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregisterAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络","aria-hidden":"true"}},[t._v("#")]),t._v(" 网络")]),t._v(" "),s("p",[t._v("Network 类封装了Retrofit。原生和weex的网络请求都会走这里。")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 网络请求域名")]),t._v("\nNetwork"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 你的网络请求域名\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发起网络请求。如果url已经包含了域名，会忽略你上面的设置")]),t._v("\nNetwork"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("原生也可以直接使用Retrofit。"),s("br"),t._v("\n大多数情况下app会有自己的网络封装，可以参考weexbox来实现自己的network module。")])]),t._v(" "),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置地址")]),t._v("\nUpdateManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serverUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hotdeployUrl\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否需要强制更新")]),t._v("\nUpdateManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forceUpdate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行")]),t._v("\nUpdateManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" progress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updateState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        UpdateManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Unzip "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解压")]),t._v("\n        UpdateManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadFile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下载")]),t._v("\n        UpdateManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateSuccess "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新成功，可以进入APP")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果开启了强制更新，会等到下载完成才会进入这里。否则就是静默更新，解压成功就会进入")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 还有各种状态码，参见下面表格，可以处理各种情况，如失败提示用户重启")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"执行完整状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行完整状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" 执行完整状态码")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("状态码")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Unzip")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("解压文件")])]),t._v(" "),s("tr",[s("td",[t._v("UnzipError")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("解压文件出错")])]),t._v(" "),s("tr",[s("td",[t._v("UnzipSuccess")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("解压文件成功")])]),t._v(" "),s("tr",[s("td",[t._v("GetServer")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("获取服务器路径")])]),t._v(" "),s("tr",[s("td",[t._v("GetServerError")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("获取服务器路径出错")])]),t._v(" "),s("tr",[s("td",[t._v("DownloadConfig")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("下载配置文件")])]),t._v(" "),s("tr",[s("td",[t._v("DownloadConfigError")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("下载配置文件出错")])]),t._v(" "),s("tr",[s("td",[t._v("DownloadConfigSuccess")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("下载配置文件成功")])]),t._v(" "),s("tr",[s("td",[t._v("DownloadMd5")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("下载md5文件")])]),t._v(" "),s("tr",[s("td",[t._v("DownloadMd5Error")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("下载Md5出错")])]),t._v(" "),s("tr",[s("td",[t._v("DownloadMd5Success")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("下载md5文件成功")])]),t._v(" "),s("tr",[s("td",[t._v("DownloadFile")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("下载文件")])]),t._v(" "),s("tr",[s("td",[t._v("DownloadFileError")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("下载文件出错")])]),t._v(" "),s("tr",[s("td",[t._v("DownloadFileSuccess")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("下载文件成功")])]),t._v(" "),s("tr",[s("td",[t._v("UpdateSuccess")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("更新成功")])])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("可以根据环境来选择更新模式。比如"),s("br"),t._v("\n\b\b\b\b\b开发和测试使用强制更新，保证app启动即使最新代码。"),s("br"),t._v("\n准生产和生产使用静默更新，保证用户体验。")])]),t._v(" "),s("h2",{attrs:{id:"路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由","aria-hidden":"true"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),s("p",[t._v("路由提供页面间的跳转功能。")]),t._v(" "),s("ul",[s("li",[t._v("注册路由")])]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("Router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("WeexBox 默认注册了"),s("code",[t._v("weex")]),t._v("和"),s("code",[t._v("web")]),t._v("，你可以在app初始化的时候重新注册，用你自己的Activity覆盖它们。")])]),t._v(" "),s("ul",[s("li",[t._v("路由实例的属性")])]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面名称")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下一个weex/web的路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面出现方式：push, present")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TYPE_PUSH\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否隐藏导航栏")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" navBarHidden"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要传到下一个页面的数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Any"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打开页面的同时关闭页面")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" closeFrom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭页面的方向，默认和堆栈方向一致")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" closeFromBottomToTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭页面的个数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" closeCount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])]),s("ul",[s("li",[t._v("打开页面")])]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" router "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原生页面")]),t._v("\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你注册路由时的页面名称"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// weex页面")]),t._v("\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weex\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module/page.js"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// web页面")]),t._v("\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://aygtech.github.io/weexbox"')]),t._v("\n\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[t._v("关闭页面")])]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" router "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="native-android.md";a.default=e.exports}}]);