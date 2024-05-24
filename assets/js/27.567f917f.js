(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{349:function(t,s,a){"use strict";a.r(s);var n=a(4),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jvm参数和调优"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm参数和调优"}},[t._v("#")]),t._v(" JVM参数和调优")]),t._v(" "),s("h2",{attrs:{id:"jvm的参数类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm的参数类型"}},[t._v("#")]),t._v(" JVM的参数类型")]),t._v(" "),s("h3",{attrs:{id:"标配参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标配参数"}},[t._v("#")]),t._v(" 标配参数")]),t._v(" "),s("p",[t._v("--在jdk各个版本之间稳定，很少有大变化\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313181115.png",alt:"20210313181115"}})]),t._v(" "),s("h4",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" -version")]),t._v(" "),s("h4",{attrs:{id:"help"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#help"}},[t._v("#")]),t._v(" -help")]),t._v(" "),s("h4",{attrs:{id:"java-showversion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-showversion"}},[t._v("#")]),t._v(" java -showversion")]),t._v(" "),s("h3",{attrs:{id:"x参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x参数"}},[t._v("#")]),t._v(" X参数")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313181042.png",alt:"20210313181042"}})]),t._v(" "),s("h4",{attrs:{id:"xlint-解释执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xlint-解释执行"}},[t._v("#")]),t._v(" -Xlint - 解释执行")]),t._v(" "),s("h4",{attrs:{id:"xcomp-第一次使用就编译成本地代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xcomp-第一次使用就编译成本地代码"}},[t._v("#")]),t._v(" -Xcomp - 第一次使用就编译成本地代码")]),t._v(" "),s("h4",{attrs:{id:"xmixed-混合模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xmixed-混合模式"}},[t._v("#")]),t._v(" -Xmixed - 混合模式")]),t._v(" "),s("h3",{attrs:{id:"xx参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xx参数"}},[t._v("#")]),t._v(" "),s("strong",[t._v("XX参数")])]),t._v(" "),s("h4",{attrs:{id:"boolean类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boolean类型"}},[t._v("#")]),t._v(" Boolean类型")]),t._v(" "),s("ul",[s("li",[t._v("公式\n"),s("ul",[s("li",[t._v("-XX:+或者-某个属性值（+表示开启，-表示关闭）")])])]),t._v(" "),s("li",[t._v("Case\n"),s("ul",[s("li",[t._v("是否打印GC的收集细节 -- "),s("strong",[t._v("-XX:-PrintGCDetails，-XX:+PrintGCDetails")])]),t._v(" "),s("li",[t._v("是否使用串行垃圾回收器 -- "),s("strong",[t._v("-XX:-UseSerialGC，-XX:+UseSerialGC")])]),t._v(" "),s("li",[t._v("如何查看一个正在运行中的Java程序？它的某个jvm参数是否开启？具体值是多少？\n"),s("ul",[s("li",[s("p",[t._v("jps -l查看进程号")])]),t._v(" "),s("li",[s("p",[t._v("jinfo -flag PrintGCDetails 进程号")])]),t._v(" "),s("li",[s("p",[t._v("demo")]),t._v(" "),s("ul",[s("li",[s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloGC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**************hello GC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SECONDS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAX_VALUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("li",[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313214455.png",alt:"20210313214455"}})])]),t._v(" "),s("li",[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313214613.png",alt:"20210313214613"}})])]),t._v(" "),s("li",[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313215858.png",alt:"20210313215858"}})])])])])])])])])]),t._v(" "),s("h4",{attrs:{id:"kv设值类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kv设值类型"}},[t._v("#")]),t._v(" KV设值类型")]),t._v(" "),s("ul",[s("li",[t._v("公式\n"),s("ul",[s("li",[t._v("-XX:属性key = 属性值value")])])]),t._v(" "),s("li",[t._v("Case\n"),s("ul",[s("li",[t._v("-XX:MetaspaceSize=128m")]),t._v(" "),s("li",[t._v("-XX:MaxTenuringThreshold=15")]),t._v(" "),s("li",[t._v("如何查看一个正在运行中的Java程序？它的某个jvm参数是否开启？具体值是多少？(同上Boolean类型)")])])])]),t._v(" "),s("h4",{attrs:{id:"jinfo类型-如何查看当前运行程序的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jinfo类型-如何查看当前运行程序的配置"}},[t._v("#")]),t._v(" jinfo类型，如何查看当前运行程序的配置")]),t._v(" "),s("ul",[s("li",[t._v("公式\n"),s("ul",[s("li",[t._v("jinfo -flag 配置项 进程号")])])]),t._v(" "),s("li",[t._v("Case\n"),s("ul",[s("li",[t._v("jinfo -flag InitialHeapSize 进程号\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313221622.png",alt:"20210313221622"}})]),t._v(" "),s("li",[t._v("jinfo -flags 进程号\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313221442.png",alt:"20210313221442"}})])])])]),t._v(" "),s("h4",{attrs:{id:"题外话-坑-xms和-xmx这两个参数你怎么解释-xms1024m-xmx1024m"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题外话-坑-xms和-xmx这两个参数你怎么解释-xms1024m-xmx1024m"}},[t._v("#")]),t._v(" 题外话（坑）-- -Xms和-Xmx这两个参数你怎么解释？-Xms1024m -Xmx1024m")]),t._v(" "),s("ul",[s("li",[t._v("-Xms等价于-XX:InitialHeapSize")]),t._v(" "),s("li",[t._v("-Xmx等价于-XX:MaxHeapSize")])]),t._v(" "),s("h2",{attrs:{id:"盘点家底查看jvm默认值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盘点家底查看jvm默认值"}},[t._v("#")]),t._v(" 盘点家底查看JVM默认值")]),t._v(" "),s("ul",[s("li",[t._v("第一种盘点家底查看JVM参数的方法\n"),s("ul",[s("li",[t._v("jps")]),t._v(" "),s("li",[t._v("jinfo -flag 具体参数 Java进程编号")]),t._v(" "),s("li",[t._v("jinfo -flags        Java进程编号")])])]),t._v(" "),s("li",[t._v("第二种盘点家底查看JVM参数的方法\n"),s("ul",[s("li",[t._v("-XX:+PrintFlagsInitial\n"),s("ul",[s("li",[t._v("主要查看初始默认")]),t._v(" "),s("li",[t._v("公式\n"),s("ul",[s("li",[t._v("java -XX:+PrintFlagsInitial -version")]),t._v(" "),s("li",[t._v("java -XX:+PrintFlagsInitial")])])]),t._v(" "),s("li",[t._v("Case\n"),s("ul",[s("li",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313223124.png",alt:"20210313223124"}})])])])])]),t._v(" "),s("li",[t._v("-XX:+PrintFlagsFinal\n"),s("ul",[s("li",[t._v("主要查看修改更新")]),t._v(" "),s("li",[t._v("公式\n"),s("ul",[s("li",[t._v("java -XX:+PrintFlagsFinal -version")]),t._v(" "),s("li",[t._v("java -XX:+PrintFlagsFinal")])])]),t._v(" "),s("li",[t._v("Case\n"),s("ul",[s("li",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313234213.png",alt:"20210313234213"}})]),t._v(" "),s("li",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313234013.png",alt:"20210313234013"}})])])]),t._v(" "),s("li",[t._v("PrintFlagsFinal举例:运行java命令的同时打印出参数\n"),s("ul",[s("li",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313235822.png",alt:"20210313235822"}})])])])])]),t._v(" "),s("li",[t._v("-XX:PrintCommandLineFlags\n"),s("ul",[s("li",[t._v("打印命令行参数")]),t._v(" "),s("li",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314000338.png",alt:"20210314000338"}})])])])])])]),t._v(" "),s("h2",{attrs:{id:"常用的jvm基本配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的jvm基本配置"}},[t._v("#")]),t._v(" 常用的JVM基本配置")]),t._v(" "),s("h3",{attrs:{id:"基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),s("ul",[s("li",[t._v("JMM-Java内存模型\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314103757.png",alt:"20210314103757"}})]),t._v(" "),s("li",[t._v("Case")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloGC1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认物理内存的1/64")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" totalMemory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runtime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRuntime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("totalMemory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认物理内存的1/4")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" maxMemory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runtime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRuntime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxMemory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TOTAL_MEMORY(-Xms) = "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" totalMemory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(字节)，"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("totalMemory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MB"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MAX_MEMORY(-Xmx) = "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" maxMemory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(字节)，"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxMemory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MB"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h3",{attrs:{id:"常用参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用参数"}},[t._v("#")]),t._v(" 常用参数")]),t._v(" "),s("h4",{attrs:{id:"xms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xms"}},[t._v("#")]),t._v(" -Xms")]),t._v(" "),s("ul",[s("li",[t._v("初始大小内存，默认为物理内存的1/64")]),t._v(" "),s("li",[t._v("等价于-XX:InitialHeapSize")])]),t._v(" "),s("h4",{attrs:{id:"xmx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xmx"}},[t._v("#")]),t._v(" -Xmx")]),t._v(" "),s("ul",[s("li",[t._v("最大分配内存，默认为物理内存的1/4")]),t._v(" "),s("li",[t._v("等价于-XX:MaxHeapSize")])]),t._v(" "),s("h4",{attrs:{id:"xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" -Xss")]),t._v(" "),s("ul",[s("li",[t._v("设置单个线程栈的大小，一般默认为512k~1024k，依赖于操作系统平台")]),t._v(" "),s("li",[t._v("等价于-XX:ThreadStackSize")]),t._v(" "),s("li",[t._v("Case\n"),s("ul",[s("li",[t._v("为0代表默认参数。512k~1024k\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314112251.png",alt:"20210314112251"}})]),t._v(" "),s("li",[t._v("调整-Xss1024k\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314112513.png",alt:"20210314112513"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314112444.png",alt:"20210314112444"}})])])]),t._v(" "),s("li",[t._v("Java8文档说明\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314112035.png",alt:"20210314112035"}})])]),t._v(" "),s("h4",{attrs:{id:"xmn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xmn"}},[t._v("#")]),t._v(" -Xmn")]),t._v(" "),s("ul",[s("li",[t._v("设置年轻代大小，一般不调整，1/3堆空间（老年代2/3堆空间）")])]),t._v(" "),s("h4",{attrs:{id:"xx-metaspacesize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xx-metaspacesize"}},[t._v("#")]),t._v(" -XX:MetaspaceSize")]),t._v(" "),s("ul",[s("li",[t._v("设置元空间大小\n"),s("ul",[s("li",[t._v("元空间的本质和永久代类似，都是对JVM规范中方法区的实现")]),t._v(" "),s("li",[t._v("不过元空间和永久代的最大区别是，"),s("strong",[t._v("元空间并不在虚拟机中，而是使用本地内存")]),t._v("，因此，默认情况下，元空间的大小仅受本地内存限制")])])]),t._v(" "),s("li",[t._v("-Xms10m -Xmx10m -XX:MetaspaceSize=1024m -XX:+PrintFlagsFinal")])]),t._v(" "),s("h4",{attrs:{id:"典型设置案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#典型设置案例"}},[t._v("#")]),t._v(" 典型设置案例")]),t._v(" "),s("ul",[s("li",[t._v("-Xms128m -Xmx4096m -Xss1024k -XX:MetaspaceSize=512m -XX:+PrintCommandLineFlags -XX:+PrintGCDetails -XX:+UseSerialGC")])]),t._v(" "),s("h4",{attrs:{id:"xx-printgcdetails"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xx-printgcdetails"}},[t._v("#")]),t._v(" -XX:PrintGCDetails")]),t._v(" "),s("ul",[s("li",[t._v("输出详细GC收集日志信息")]),t._v(" "),s("li",[t._v("GC\n"),s("ul",[s("li",[t._v("主要YoungGC\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314122816.png",alt:"20210314122816"}})])])]),t._v(" "),s("li",[t._v("FullGC\n"),s("ul",[s("li",[t._v("主要OldGC Java7 PermGen -> Java8 Metaspace\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314123127.png",alt:"20210314123127"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314123348.png",alt:"20210314123348"}})])])])]),t._v(" "),s("h4",{attrs:{id:"xx-survivorratio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xx-survivorratio"}},[t._v("#")]),t._v(" -XX:SurvivorRatio")]),t._v(" "),s("ul",[s("li",[t._v("设置新生代中eden和s0/s1空间的比例")]),t._v(" "),s("li",[t._v("默认-XX:SurvivorRatio=8,Eden:S0:S1=8:1:1")]),t._v(" "),s("li",[t._v("假如-XX:SurvivorRatio=4,Eden:S0:S1=4:1:1,SurvivorRatio就是设置Eden区的比例占多少，S0/S1相同")]),t._v(" "),s("li",[t._v("Case:-XX:+PrintGCDetails -XX:+UseSerialGC -Xms10m -Xmx10m -XX:SurvivorRatio=8\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314160835.png",alt:"20210314160835"}})]),t._v(" "),s("li",[t._v("Case:-XX:+PrintGCDetails -XX:+UseSerialGC -Xms10m -Xmx10m -XX:SurvivorRatio=4\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314161527.png",alt:"20210314161527"}})])]),t._v(" "),s("h4",{attrs:{id:"xx-newratio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xx-newratio"}},[t._v("#")]),t._v(" -XX:NewRatio")]),t._v(" "),s("ul",[s("li",[t._v("配置年轻代与老年代在堆内存中的占比")]),t._v(" "),s("li",[t._v("默认-XX:NewRatio=2，年轻代占1，老年代占2，年轻代占整个堆内存的1/3")]),t._v(" "),s("li",[t._v("假如-XX:NewRatio=4，新生代占1，老年代占4，年轻代占整个堆内存的1/5，NewRatio值就是设置老年代的占比，剩下的1给新生代")]),t._v(" "),s("li",[t._v("Case:-Xms10m -Xmx10m -XX:+PrintGCDetails -XX:+UseSerialGC -XX:NewRatio=2\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314162842.png",alt:"20210314162842"}})]),t._v(" "),s("li",[t._v("Case:-Xms10m -Xmx10m -XX:+PrintGCDetails -XX:+UseSerialGC -XX:NewRatio=4\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314162929.png",alt:"20210314162929"}})])]),t._v(" "),s("h4",{attrs:{id:"xx-maxtenuringthreshold"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xx-maxtenuringthreshold"}},[t._v("#")]),t._v(" -XX:MaxTenuringThreshold")]),t._v(" "),s("ul",[s("li",[t._v("设置垃圾的最大年龄，默认为15次，从yound到old")]),t._v(" "),s("li",[t._v("-XX：MaxTenuringThreshold=0")]),t._v(" "),s("li",[t._v("设置为0，则年轻代对象不经过Survivor区，直接进入老年区。对于老年代较多的应用，可以提高效率。")]),t._v(" "),s("li",[t._v("设置为一个较大值，则年轻代对象在Survivor进行多次复制，这样可以增加对象在年轻代的存活时间，增加年轻代被回收的概率。")]),t._v(" "),s("li",[s("strong",[t._v("Java8给这个参数做了限制，只能在[0,15]之间。")])])]),t._v(" "),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313234753.png",alt:"20210313234753"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);