(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{352:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"aqs-abstractqueuedsynchronizer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aqs-abstractqueuedsynchronizer"}},[s._v("#")]),s._v(" AQS-AbstractQueuedSynchronizer")]),s._v(" "),t("ul",[t("li",[s._v("是什么\n"),t("ul",[t("li",[s._v("字面意思\n"),t("ul",[t("li",[s._v("抽象队列同步器")])])]),s._v(" "),t("li",[s._v("技术解释\n"),t("ul",[t("li",[s._v("是用来构建锁和其他同步器组件的重量级基础框架以及整个JUC体系的基石，通过内置的"),t("strong",[s._v("FIFO队列")]),s._v("来完成资源获取线程的排队工作，并通过一个"),t("strong",[s._v("int类型变量state")]),s._v("表示持有锁的状态\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319152210.png",alt:"20210319152210"}}),s._v(" "),t("strong",[s._v("CLH")]),s._v(":Craig、Landin and Hagersten队列，是一个单向链表，AQS中的队列是CLH变体的虚拟双向队列FIFO")])])])])]),s._v(" "),t("li",[s._v("AQS为什么是JUC内容中的基石\n"),t("ul",[t("li",[s._v("JUC常用类都使用了Sync类，也即是AQS的实现子类\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319152728.png",alt:"20210319152728"}}),s._v(" "),t("ul",[t("li",[s._v("ReentrantLock")]),s._v(" "),t("li",[s._v("CountDownLatch")]),s._v(" "),t("li",[s._v("CycleBarrier")]),s._v(" "),t("li",[s._v("Semaphore")]),s._v(" "),t("li",[s._v("ReentrantReadWriteLock")]),s._v(" "),t("li",[s._v("...")])])]),s._v(" "),t("li",[s._v("锁和同步器底层都是AQS的抽象实现\n"),t("ul",[t("li",[s._v("锁，面向锁的"),t("strong",[s._v("使用者")]),s._v("  --  定义了程序员和锁交互的使用层api，隐藏实现细节，调用即可。")]),s._v(" "),t("li",[s._v("同步器，面向锁的"),t("strong",[s._v("实现者")]),s._v("  -- Java并发大神DougLee，提供统一规范并简化了锁的实现，屏蔽了同步状态管理，阻塞线程排队和通知唤醒机制等。")])])])])]),s._v(" "),t("li",[s._v("能干嘛\n"),t("ul",[t("li",[s._v("加锁会导致阻塞\n"),t("ul",[t("li",[s._v("有阻塞就要排队，实现排队必然需要有某种形式的队列来管理")])])]),s._v(" "),t("li",[s._v("解释\n"),t("ul",[t("li",[s._v("抢到资源的线程直接使用处理业务逻辑，抢不到资源的必然涉及一种"),t("strong",[s._v("排队等候机制")]),s._v("。抢占资源失败的线程继续去等待（类似银行业务办理窗口都满了，暂时没有受理窗口的顾客只能到候客区等候）。但等候线程仍然保留获取锁的可能且获取锁流程仍然继续（候客区的顾客也在等着被叫号，轮到了再去受理窗口办理业务）")]),s._v(" "),t("li",[s._v("如果共享资源被占用，"),t("strong",[s._v("就需要一定的阻塞唤醒机制来保证锁分配。"),t("strong",[s._v("这个机制主要是用CLH队列的变体实现的，将暂时获取不到锁的线程加入到队列中，这就是AQS的抽象表现。它将请求共享资源的线程封装成节点（"),t("strong",[s._v("Node")]),s._v("），通过CAS，LockSupport.park()的方式，维护")]),s._v("state")]),s._v("的状态，使并发达到同步的控制效果。")])])])])]),s._v(" "),t("li",[s._v("认识AQS\n"),t("ul",[t("li",[t("p",[s._v("AQS初始")]),s._v(" "),t("ul",[t("li",[s._v("官网解释\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319155114.png",alt:"20210319155114"}})]),s._v(" "),t("li",[s._v("有阻塞就需要排队，要排队就需要队列--AQS使用一个volatile的int类型的变量来表示同步状态，使用FIFO队列来完成资源获取的排队工作，将每个要抢占资源的线程封装成一个Node来实现锁的分配，通过CAS来完成对state的修改。")])])]),s._v(" "),t("li",[t("p",[s._v("AQS内部体系架构\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319163436.png",alt:"20210319163436"}})]),s._v(" "),t("ul",[t("li",[s._v("AQS自身\n"),t("ul",[t("li",[t("strong",[s._v("AQS的int变量")]),s._v(" "),t("ul",[t("li",[s._v("AQS的同步状态state成员变量\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319164154.png",alt:"20210319164154"}})]),s._v(" "),t("li",[s._v("银行办理业务的受理窗口状态\n"),t("ul",[t("li",[s._v("0就是没有人办理业务")]),s._v(" "),t("li",[s._v("大于等于1，有人占用窗口")])])])])]),s._v(" "),t("li",[t("strong",[s._v("AQS的CLH队列")]),s._v(" "),t("ul",[t("li",[s._v("AQS中的队列是CLH队列（由三个大牛的名字组成）一个变种的双向队列")]),s._v(" "),t("li",[s._v("银行候客区的顾客")])])]),s._v(" "),t("li",[s._v("小总结\n"),t("ul",[t("li",[s._v("有阻塞就要排队，有排队就要有队列")]),s._v(" "),t("li",[s._v("state变量+CLH变种的双端队列")])])])])]),s._v(" "),t("li",[s._v("内部类Node(Node类在AQS类的内部)\n"),t("ul",[t("li",[t("p",[s._v("Node的int变量")]),s._v(" "),t("ul",[t("li",[s._v("volatile int waitStatus")]),s._v(" "),t("li",[s._v("等候区其他顾客（其他线程）的等待状态")]),s._v(" "),t("li",[s._v("队列中每一个排队的个体就是一个Node")])])]),s._v(" "),t("li",[t("p",[s._v("Node类的解释")]),s._v(" "),t("ul",[t("li",[s._v("内部结构")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** 共享 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SHARED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** 独占 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EXCLUSIVE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** 线程被取消 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CANCELLED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** 后继线程需要被唤醒 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SIGNAL")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** 等待condition唤醒 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CONDITION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** 共享式同步状态获取将会无条件地传播下去 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PROPAGATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** 初始为0，值为以上 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" waitStatus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** 前驱节点 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" prev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** 后继节点 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" next"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n  * The thread that enqueued this node.  Initialized on\n  * construction and nulled out after use.\n  */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),s._v(" thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** 下一个等待线程 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" nextWaiter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n  * Returns true if node is waiting in shared mode.\n  */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isShared")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" nextWaiter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SHARED")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n  * Returns previous node, or throws NullPointerException if null.\n  * Use when predecessor cannot be null.  The null check could\n  * be elided, but is present to help the VM.\n  *\n  * @return the predecessor of this node\n  */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("predecessor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NullPointerException")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" prev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NullPointerException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Used to establish initial head or SHARED marker")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),s._v(" thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" mode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Used by addWaiter")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nextWaiter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("thread "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),s._v(" thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" waitStatus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Used by Condition")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("waitStatus "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" waitStatus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("thread "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br")])]),t("ul",[t("li",[s._v("属性说明\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319170356.png",alt:"20210319170356"}})])])])])])])]),s._v(" "),t("li",[t("p",[s._v("AQS同步队列的基本结构\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319171356.png",alt:"20210319171356"}})])])])]),s._v(" "),t("li",[s._v("从ReentrantLock解读AQS\n"),t("ul",[t("li",[s._v("Loc接口的实现类，基本都是通过聚合一个队列同步器AQS的子类来完成线程访问控制的。")]),s._v(" "),t("li",[s._v("ReentrantLock的原理\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319172723.png",alt:"20210319172723"}})]),s._v(" "),t("li",[s._v("从lock方法看公平和非公平\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319172811.png",alt:"20210319172811"}}),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319172845.png",alt:"20210319172845"}}),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319172905.png",alt:"20210319172905"}}),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319173816.png",alt:"20210319173816"}}),s._v(" "),t("ul",[t("li",[t("strong",[s._v("以上可以看出公平锁和非公平锁的lock()方法唯一区别就在于公平锁在获取同步状态时多了一个限制条件：")])]),s._v(" "),t("li",[t("strong",[s._v("hasQueuedPredecessors")]),s._v("()这是公平锁加锁时判断等待队列中是否存在有效节点的方法")]),s._v(" "),t("li",[s._v("对比公平锁和非公平锁的tryAcquire()方法实现，差别就在"),t("strong",[s._v("非公平锁获取锁的时候比公平锁少了一个判断!hasQueuedPredecessor()")])]),s._v(" "),t("li",[s._v("hasQueuedPredecessors()中判断是否需要排队。")]),s._v(" "),t("li",[s._v("公平锁和非公平锁的差异如下：\n"),t("ul",[t("li",[s._v("公平锁：公平锁讲究先到先得，线程在获取锁的时候，如果这个锁的等待队列中已有线程在等待，那么当前线程进入等待队列")]),s._v(" "),t("li",[s._v("非公平锁：不管是否有等待队列，如果可以获取锁，则立刻占有锁。")])])])])]),s._v(" "),t("li",[s._v("从非公平锁入手\n"),t("ul",[t("li",[s._v("lock()\n"),t("ul",[t("li",[t("strong",[s._v("ReentrantLock的加锁过程")]),s._v("：\n"),t("ul",[t("li",[s._v("1尝试加锁------------------------tryAcquire(arg)")]),s._v(" "),t("li",[s._v("2加锁失败，线程入队列-------------acquireQueued(addWaiter(Node.EXCLUSIVE), arg))")]),s._v(" "),t("li",[s._v("3线程进入队列后，进入阻塞状态------selfInterrupt()")])])]),s._v(" "),t("li",[s._v("AQS源码解析\n"),t("ul",[t("li",[s._v("lock()\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319202618.png",alt:"20210319202618"}})]),s._v(" "),t("li",[s._v("acquire()\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319205641.png",alt:"20210319205641"}})]),s._v(" "),t("li",[s._v("tryAcquire(arg)\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319205917.png",alt:"20210319205917"}}),s._v(" "),t("ul",[t("li",[s._v("nonfairTryAcquire()\n"),t("ul",[t("li",[s._v("true--加锁成功")]),s._v(" "),t("li",[s._v("false--加锁失败，入队")])])])])]),s._v(" "),t("li",[s._v("addWaiter(Node.EXCLUSIVE)\n"),t("ul",[t("li",[s._v("第一个入队，进enq()，初始化一个哨兵节点，用于占位，后自旋添加该节点，Node pred = tail;node.prev = pred;pred.next = node;\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319210432.png",alt:"20210319210432"}})]),s._v(" "),t("li",[s._v("第n个入队，直接加入到队尾，Node pred = tail;node.prev = pred;pred.next = node;")])])]),s._v(" "),t("li",[s._v("acquireQueue(addWaiter(Node.EXCLUSIVE),arg)\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319221010.png",alt:"20210319221010"}}),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319220840.png",alt:"20210319220840"}}),s._v(" "),t("ul",[t("li",[s._v("如果再抢抢失败就进入\n"),t("ul",[t("li",[s._v("shouldParkAfterFailedAcquire\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319222353.png",alt:"20210319222353"}}),s._v(" "),t("ul",[t("li",[s._v("如果前驱节点waitStatus是SIGNAL，即shouldParkAfterFailedAcquire返回true，程序继续向下执行parkAndCheckInterrupt()，用于将当前线程挂起")])])]),s._v(" "),t("li",[s._v("parkAndCheckInterrupt\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319222641.png",alt:"20210319222641"}})])])])])])])])])]),s._v(" "),t("li",[s._v("unlock()\n"),t("ul",[t("li",[s._v("sync.release(1);//将头结点指向第一个节点（哨兵节点的下一个节点，变成哨兵节点，哨兵节点指向null）")]),s._v(" "),t("li",[s._v("tryRelease(arg);")]),s._v(" "),t("li",[s._v("unparkSuccessor();//发放许可证，唤醒线程去抢锁。")])])]),s._v(" "),t("li",[s._v("图解\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319220103.png",alt:"20210319220103"}}),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210319224219.png",alt:"20210319224219"}})])])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);