(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{390:function(a,s,t){"use strict";t.r(s);var r=t(7),l=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[a._v("#")]),a._v(" 基础")]),a._v(" "),s("h2",{attrs:{id:"classpath-和-classpath-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classpath-和-classpath-区别"}},[a._v("#")]),a._v(" classpath 和 classpath* 区别")]),a._v(" "),s("p",[a._v("classpath：只会到你的class路径中查找找文件;\nclasspath*：不仅包含class路径，还包括jar文件中(class路径)进行查找\nclasspath*的使用：当项目中有多个classpath路径，并同时加载多个classpath路径下（此种情况多数不会遇到）的文件，"),s("em",[a._v("就发挥了作用，如果不加")]),a._v("，则表示仅仅加载第一个classpath路径。")]),a._v(" "),s("h2",{attrs:{id:"udp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[a._v("#")]),a._v(" UDP")]),a._v(" "),s("ul",[s("li",[a._v("主要用于语音，视频，直播等流媒体，可以允许丢失数据，但是速度会快很多")])]),a._v(" "),s("h2",{attrs:{id:"tcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[a._v("#")]),a._v(" TCP")]),a._v(" "),s("ul",[s("li",[a._v("主要用于需要稳定，安全的传输，比如网络会话，文件传输，数据库等，可以保证数据不丢失")])]),a._v(" "),s("h3",{attrs:{id:"三次握手和四次挥手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三次握手和四次挥手"}},[a._v("#")]),a._v(" 三次握手和四次挥手")]),a._v(" "),s("h4",{attrs:{id:"三次握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[a._v("#")]),a._v(" 三次握手")]),a._v(" "),s("ul",[s("li",[a._v("第一次：客户端向服务端发送一个请求，并携带SYN=1，seq=x")]),a._v(" "),s("li",[a._v("第二次：服务端收到请求后，向客户端发送一个响应，并携带应答号ACK=1,应答位ack=y,同步号SYN=1,同步位seq=x+1")]),a._v(" "),s("li",[a._v("第三次：客户端收到响应后，向服务端发送一个确认应答，ACK=1,ack=y+1")])]),a._v(" "),s("h4",{attrs:{id:"四次挥手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[a._v("#")]),a._v(" 四次挥手")]),a._v(" "),s("ul",[s("li",[a._v("第一次：客户端向服务端发送一个请求，并携带结束号FIN=1,同步位seq=u")]),a._v(" "),s("li",[a._v("第二次：服务端收到请求后，向客户端发送一个响应，并携带应答号ACK=1,应答位ack=u+1")]),a._v(" "),s("li",[a._v("第三次：服务端向客户端发送一个请求，并携带结束号FIN=1,同步位seq=w")]),a._v(" "),s("li",[a._v("第四次：客户端收到请求后，向服务端发送一个响应，并携带应答号ACK=1,应答位ack=w+1")])]),a._v(" "),s("h2",{attrs:{id:"bio与nio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bio与nio"}},[a._v("#")]),a._v(" BIO与NIO")]),a._v(" "),s("h3",{attrs:{id:"bio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bio"}},[a._v("#")]),a._v(" BIO")]),a._v(" "),s("ul",[s("li",[a._v("同步阻塞IO，在读写数据时，线程都会被阻塞，直到有数据可读或可写")]),a._v(" "),s("li",[a._v("缺点：线程阻塞，效率低")])]),a._v(" "),s("h3",{attrs:{id:"nio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nio"}},[a._v("#")]),a._v(" NIO")]),a._v(" "),s("ul",[s("li",[a._v("同步非阻塞IO，在读写数据时，线程不会阻塞，当没有数据可读或可写时，会返回一个空值")]),a._v(" "),s("li",[a._v("缺点：需要轮询，效率低")])]),a._v(" "),s("h2",{attrs:{id:"多路复用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多路复用"}},[a._v("#")]),a._v(" 多路复用")]),a._v(" "),s("h3",{attrs:{id:"select"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#select"}},[a._v("#")]),a._v(" select")]),a._v(" "),s("h3",{attrs:{id:"poll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#poll"}},[a._v("#")]),a._v(" poll")]),a._v(" "),s("h3",{attrs:{id:"epoll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#epoll"}},[a._v("#")]),a._v(" epoll")])])}),[],!1,null,null,null);s.default=l.exports}}]);