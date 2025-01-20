(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{415:function(a,_,t){"use strict";t.r(_);var v=t(7),s=Object(v.a)({},(function(){var a=this,_=a._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"redis"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[a._v("#")]),a._v(" Redis")]),a._v(" "),_("h2",{attrs:{id:"数据结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[a._v("#")]),a._v(" 数据结构")]),a._v(" "),_("h3",{attrs:{id:"_1-string"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-string"}},[a._v("#")]),a._v(" 1.String")]),a._v(" "),_("h4",{attrs:{id:"字符串类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符串类型"}},[a._v("#")]),a._v(" 字符串类型")]),a._v(" "),_("ul",[_("li",[a._v("单值存储\n"),_("ul",[_("li",[a._v("SET key value")]),a._v(" "),_("li",[a._v("GET key")])])]),a._v(" "),_("li",[a._v("对象存储\n"),_("ul",[_("li",[a._v("SET user:1 value（json数据）")]),a._v(" "),_("li",[a._v("MSET user:1:name zhangsan user:1:age 20")]),a._v(" "),_("li",[a._v("MGET user:1:name user:1:age")])])]),a._v(" "),_("li",[a._v("分布式锁")]),a._v(" "),_("li",[a._v("计数器")]),a._v(" "),_("li",[a._v("Web集群session共享\n"),_("ul",[_("li",[a._v("spring session + redis实现session共享")])])]),a._v(" "),_("li",[a._v("分布式系统序列号\n"),_("ul",[_("li",[a._v("INCRBY orderId 1000，redis批量生成序列号提升性能")]),a._v(" "),_("li",[a._v("拿批量到jvm，宕机浪费id，无所谓")])])])]),a._v(" "),_("h3",{attrs:{id:"_2-hash"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-hash"}},[a._v("#")]),a._v(" 2.Hash")]),a._v(" "),_("h4",{attrs:{id:"哈希类型-存放键值对"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#哈希类型-存放键值对"}},[a._v("#")]),a._v(" 哈希类型，存放键值对")]),a._v(" "),_("ul",[_("li",[a._v("key-（field-value）")]),a._v(" "),_("li",[a._v("对象缓存，避免大key，可以分段\n"),_("ul",[_("li",[a._v("HMSET user 1:name zhangsan 1:age 20")]),a._v(" "),_("li",[a._v("HMGET user 1:name 1:age")])])]),a._v(" "),_("li",[a._v("电商购物车\n"),_("ul",[_("li",[a._v("以用户id为key，商品id为field，商品数量为value\n"),_("ol",[_("li",[a._v("添加商品：hset cart:1001 10088 1")]),a._v(" "),_("li",[a._v("增加数量：hincrby cart:1001 10088 1")]),a._v(" "),_("li",[a._v("商品总数：hlen cart:1001")]),a._v(" "),_("li",[a._v("删除商品：hdel cart:1001 10088")]),a._v(" "),_("li",[a._v("获取购物车所有商品：hgetall cart:1001")])])])])]),a._v(" "),_("li",[a._v("优缺点\n"),_("ul",[_("li",[a._v("优点：\n"),_("ul",[_("li",[a._v("同类归类整合存储，方便管理")]),a._v(" "),_("li",[a._v("相比string消耗内存和cpu小")])])]),a._v(" "),_("li",[a._v("缺点：\n"),_("ul",[_("li",[a._v("过期功能不能使用在field，只能使用在key")]),a._v(" "),_("li",[a._v("Redis集群架构不适合大规模使用")])])])])])]),a._v(" "),_("h3",{attrs:{id:"_3-list"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-list"}},[a._v("#")]),a._v(" 3.List")]),a._v(" "),_("h4",{attrs:{id:"列表类型-有序集合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列表类型-有序集合"}},[a._v("#")]),a._v(" 列表类型，有序集合")]),a._v(" "),_("ul",[_("li",[a._v("栈（Stack）\n"),_("ul",[_("li",[a._v("LPUSH + LPOP")])])]),a._v(" "),_("li",[a._v("队列（Queue）\n"),_("ul",[_("li",[a._v("LPUSH + RPOP")])])]),a._v(" "),_("li",[a._v("阻塞队列（BlockingQueue）\n"),_("ul",[_("li",[a._v("LPUSH + BRPOP")])])])]),a._v(" "),_("h3",{attrs:{id:"_4-set"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-set"}},[a._v("#")]),a._v(" 4.Set")]),a._v(" "),_("h4",{attrs:{id:"无序集合类型-通常用来去重-交集-并集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#无序集合类型-通常用来去重-交集-并集"}},[a._v("#")]),a._v(" 无序集合类型，通常用来去重，交集，并集")]),a._v(" "),_("ul",[_("li",[a._v("集合操作\n"),_("ul",[_("li",[a._v("交集----SINTER set1 set2")]),a._v(" "),_("li",[a._v("并集----SUNION set1 set2")]),a._v(" "),_("li",[a._v("差集----SDIFF set1 set2")])])]),a._v(" "),_("li",[a._v("实现关注模型\n"),_("ol",[_("li",[a._v("诸葛关注的人，zhugeSet->{guojia,xushu}")]),a._v(" "),_("li",[a._v("杨过关注的人，yangguoSet->{zhuge,baiqi,guojia,xushu}")]),a._v(" "),_("li",[a._v("郭嘉关注的人，guojiaSet->{zhuge,yangguo,baiqi,xushu,xunyu}")]),a._v(" "),_("li",[a._v("诸葛和杨过共同关注，SINTER zhugeSet yangguoSet")]),a._v(" "),_("li",[a._v("关注诸葛的人也关注杨过，SISMEMBER guojiaSet yangguo")]),a._v(" "),_("li",[a._v("可能认识的人，SDIFF yangguoSet zhugeSet->{zhuge,baiqi}")])])])]),a._v(" "),_("h4",{attrs:{id:"微信抽奖小程序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微信抽奖小程序"}},[a._v("#")]),a._v(" 微信抽奖小程序")]),a._v(" "),_("ol",[_("li",[a._v("点击参与抽奖加入集合，SADD key userid")]),a._v(" "),_("li",[a._v("查看参与抽奖所有用户，SMEMBERS key")]),a._v(" "),_("li",[a._v("抽取count名中奖者, SRANDOMKEY key count元素还在，SPOP key count会删元素")])]),a._v(" "),_("h4",{attrs:{id:"微信微博点赞-收藏-标签"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微信微博点赞-收藏-标签"}},[a._v("#")]),a._v(" 微信微博点赞，收藏，标签")]),a._v(" "),_("ul",[_("li",[a._v("用户点赞\n"),_("ul",[_("li",[a._v("SADD like:{消息id} {用户id}")])])]),a._v(" "),_("li",[a._v("取消点赞\n"),_("ul",[_("li",[a._v("SREM like:{消息id} {用户id}")])])]),a._v(" "),_("li",[a._v("检查用户是否点赞\n"),_("ul",[_("li",[a._v("SISMEMBER like:{消息id} {用户id}")])])]),a._v(" "),_("li",[a._v("获取点赞用户列表\n"),_("ul",[_("li",[a._v("SMEMBERS like:{消息id}")])])]),a._v(" "),_("li",[a._v("获取点赞用户数量\n"),_("ul",[_("li",[a._v("SCARD like:{消息id}")])])])]),a._v(" "),_("h3",{attrs:{id:"_5-zset"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-zset"}},[a._v("#")]),a._v(" 5.ZSet")]),a._v(" "),_("h4",{attrs:{id:"有序集合类型-有序集合-可以关联一个分数-通常用来做排行榜"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#有序集合类型-有序集合-可以关联一个分数-通常用来做排行榜"}},[a._v("#")]),a._v(" 有序集合类型，有序集合，可以关联一个分数，通常用来做排行榜")]),a._v(" "),_("ul",[_("li",[a._v("点击新闻\n"),_("ul",[_("li",[a._v("ZINCRBY hotNews:20190819 1 守护香港")])])]),a._v(" "),_("li",[a._v("展示当日排行前十\n"),_("ul",[_("li",[a._v("ZREVRANGE hotNews:20190819 0 9 WITHSCORES")])])]),a._v(" "),_("li",[a._v("七日搜索榜单计算\n"),_("ul",[_("li",[a._v("ZUNIONSOURT hotNews:20190813-20190819 7")])])]),a._v(" "),_("li",[a._v("展示七日排行前十\n"),_("ul",[_("li",[a._v("ZREVRANGE hotNews:20190813-20190819 0 9 WITHSCORES")])])])]),a._v(" "),_("h3",{attrs:{id:"_6-bitmap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-bitmap"}},[a._v("#")]),a._v(" 6.BitMap")]),a._v(" "),_("p",[a._v("布隆过滤器")]),a._v(" "),_("h3",{attrs:{id:"_7-geo"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-geo"}},[a._v("#")]),a._v(" 7.Geo")]),a._v(" "),_("p",[a._v("基于经纬度计算距离")]),a._v(" "),_("h3",{attrs:{id:"_8-hyperloglog"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-hyperloglog"}},[a._v("#")]),a._v(" 8.HyperLogLog")]),a._v(" "),_("p",[a._v("去重，统计UV")]),a._v(" "),_("h2",{attrs:{id:"redis-为什么快"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis-为什么快"}},[a._v("#")]),a._v(" Redis 为什么快")]),a._v(" "),_("h3",{attrs:{id:"_1-单线程-避免上下文切换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-单线程-避免上下文切换"}},[a._v("#")]),a._v(" 1.单线程，避免上下文切换")]),a._v(" "),_("h4",{attrs:{id:"redis为什么早期选择单线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis为什么早期选择单线程"}},[a._v("#")]),a._v(" Redis为什么早期选择单线程")]),a._v(" "),_("p",[a._v("官方解释：https://redis.io/topics/faq\n官方FAQ表示，因为Redis是基于内存的操作，CPU成为瓶颈的情况很少，Redis的瓶颈最有可能是内存的大小或网络限制。")]),a._v(" "),_("p",[a._v("如果想要最大程度利用cpu，可以再一台机器上启动多个Redis实例。")]),a._v(" "),_("h4",{attrs:{id:"redis的多线程是怎么回事"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis的多线程是怎么回事"}},[a._v("#")]),a._v(" Redis的多线程是怎么回事")]),a._v(" "),_("p",[a._v("Redis6.0之前，Redis是单线程的，6.0之后，Redis引入了多线程。\nRedis的多线程是用多线程来处理数据的读写和协议解析的，但是Redis执行命令还是单线程的。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/202406012328833.png",alt:""}})]),a._v(" "),_("p",[a._v("这样做的目的是因为Redis的性能瓶颈在于网络IO，而不是CPU，使用多线程能提升IO读写效率，从而整体提高Redis的性能。")]),a._v(" "),_("h3",{attrs:{id:"_2-基于内存操作-避免磁盘io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-基于内存操作-避免磁盘io"}},[a._v("#")]),a._v(" 2.基于内存操作，避免磁盘IO")]),a._v(" "),_("h3",{attrs:{id:"_3-使用多路i-o复用机制-非阻塞io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用多路i-o复用机制-非阻塞io"}},[a._v("#")]),a._v(" 3.使用多路I/O复用机制，非阻塞IO")]),a._v(" "),_("h4",{attrs:{id:"i-o多路复用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#i-o多路复用"}},[a._v("#")]),a._v(" I/O多路复用")]),a._v(" "),_("p",[a._v("知乎高赞回答，假如你是一个老师，让30个学生解答一道题目，然后检查学生做的是否正确，你有下面几个选择：")]),a._v(" "),_("ul",[_("li",[a._v("1.按顺序逐个检查，先检查A，然后是B，之后是C，D。这中间如果有一个学生卡住，全班都会被耽误。这种模式就好比，你用循环挨个处理socket，根本不具备并发能力。")]),a._v(" "),_("li",[a._v("2.你创建30个分身，每个分身检查一个学生的答案是否正确。这种类似于为每一个用户创建一个进程或者线程处理连接。")]),a._v(" "),_("li",[a._v("3.你站在讲台上等，谁先解答完谁举手。这时C，D举手，表示他们解答完毕，你下去一次检查C，D的答案，然后继续回到讲台上等，此时E，A又举手，然后处理E和A。")])]),a._v(" "),_("p",[a._v("第一种就是阻塞IO，第三种就是I/O复用。")]),a._v(" "),_("p",[a._v("Linux中，select，poll，epoll都是I/O复用模型。")]),a._v(" "),_("h3",{attrs:{id:"_4-高效的数据结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-高效的数据结构"}},[a._v("#")]),a._v(" 4.高效的数据结构")]),a._v(" "),_("h2",{attrs:{id:"数据持久化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据持久化"}},[a._v("#")]),a._v(" 数据持久化")]),a._v(" "),_("h3",{attrs:{id:"_1-rdb-redis-database"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-rdb-redis-database"}},[a._v("#")]),a._v(" 1.RDB：Redis DataBase")]),a._v(" "),_("ul",[_("li",[a._v("默认开启")]),a._v(" "),_("li",[a._v("指定时间fork一个子进程，将内存数据dump到rdb文件中")]),a._v(" "),_("li",[a._v("save 60 10000，60秒内有10000修改，写dump.rdb")]),a._v(" "),_("li",[a._v("优缺点\n"),_("ul",[_("li",[a._v("优点\n"),_("ul",[_("li",[a._v("只包含一个dump.rdb文件，方便持久化")]),a._v(" "),_("li",[a._v("容灾性好，方便备份")]),a._v(" "),_("li",[a._v("性能最大化，子进程处理写操作，主进程继续接收请求")]),a._v(" "),_("li",[a._v("数据集大时候，比AOF效率高")])])]),a._v(" "),_("li",[a._v("缺点\n"),_("ul",[_("li",[a._v("数据安全性低，可能丢失数据")]),a._v(" "),_("li",[a._v("fork子进程，性能消耗，数据大时服务器会变慢")])])])])])]),a._v(" "),_("h3",{attrs:{id:"_2-aof-append-only-file"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-aof-append-only-file"}},[a._v("#")]),a._v(" 2.AOF：Append Only File")]),a._v(" "),_("ul",[_("li",[a._v("日志形式记录写，删操作")]),a._v(" "),_("li",[a._v("优缺点\n"),_("ul",[_("li",[a._v("优点\n"),_("ul",[_("li",[a._v("安全性高，数据完整")]),a._v(" "),_("li",[a._v("即使中途dump机，不会破坏已同步内容，可用redis-check-aof解决一致性问题")]),a._v(" "),_("li",[a._v("AOF的rewrite机制，定期对AOF文件更新，以达到压缩目的")])])]),a._v(" "),_("li",[a._v("缺点\n"),_("ul",[_("li",[a._v("AOF比RDF体积大，恢复速度慢")]),a._v(" "),_("li",[a._v("数据集大时，比RDB效率低")]),a._v(" "),_("li",[a._v("运行效率没有RDB高")])])])])])]),a._v(" "),_("h3",{attrs:{id:"_3-rdb和aof同时开启"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-rdb和aof同时开启"}},[a._v("#")]),a._v(" 3.RDB和AOF同时开启")]),a._v(" "),_("h2",{attrs:{id:"key过期策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#key过期策略"}},[a._v("#")]),a._v(" key过期策略")]),a._v(" "),_("h3",{attrs:{id:"_1-定时删除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-定时删除"}},[a._v("#")]),a._v(" 1.定时删除")]),a._v(" "),_("ul",[_("li",[a._v("key过期同时设置一个定时器，过期时间到后删除")]),a._v(" "),_("li",[a._v("定时扫描，对内存友好，对cpu不友好")])]),a._v(" "),_("h3",{attrs:{id:"_2-惰性删除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-惰性删除"}},[a._v("#")]),a._v(" 2.惰性删除")]),a._v(" "),_("ul",[_("li",[a._v("访问key的时候，若过期，删除，对内存不友好，对cpu友好")])]),a._v(" "),_("h3",{attrs:{id:"_3-定期删除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-定期删除"}},[a._v("#")]),a._v(" 3.定期删除")]),a._v(" "),_("ul",[_("li",[a._v("隔一段时间，扫描一定数量的key，平衡内存和cpu")])]),a._v(" "),_("h3",{attrs:{id:"redis同时使用惰性和定期删除是比较好的策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis同时使用惰性和定期删除是比较好的策略"}},[a._v("#")]),a._v(" Redis同时使用惰性和定期删除是比较好的策略")]),a._v(" "),_("h2",{attrs:{id:"高可用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高可用"}},[a._v("#")]),a._v(" 高可用")]),a._v(" "),_("h3",{attrs:{id:"_1-主从"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-主从"}},[a._v("#")]),a._v(" 1.主从")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/202406012211220.png",alt:""}})]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/202406012211447.png",alt:""}})]),a._v(" "),_("h3",{attrs:{id:"_2-哨兵"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-哨兵"}},[a._v("#")]),a._v(" 2.哨兵")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/202406012212464.png",alt:""}})]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/202406012212513.png",alt:""}})]),a._v(" "),_("h3",{attrs:{id:"_3-集群"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-集群"}},[a._v("#")]),a._v(" 3.集群")]),a._v(" "),_("ul",[_("li",[a._v("16384hash槽")]),a._v(" "),_("li",[a._v("高可用，分片存储")])]),a._v(" "),_("h2",{attrs:{id:"缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[a._v("#")]),a._v(" 缓存")]),a._v(" "),_("h3",{attrs:{id:"双写不一致问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#双写不一致问题"}},[a._v("#")]),a._v(" 双写不一致问题")]),a._v(" "),_("h4",{attrs:{id:"现象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#现象"}},[a._v("#")]),a._v(" 现象")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/202406012215418.png",alt:""}})]),a._v(" "),_("h4",{attrs:{id:"解决方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[a._v("#")]),a._v(" 解决方案")]),a._v(" "),_("ul",[_("li",[a._v("√加分布式锁")]),a._v(" "),_("li",[a._v("加canal，监听数据库binlog，及时修改")]),a._v(" "),_("li",[a._v("延迟双删，删一次，sleep，再删一次")])]),a._v(" "),_("h3",{attrs:{id:"缓存穿透"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[a._v("#")]),a._v(" 缓存穿透")]),a._v(" "),_("h4",{attrs:{id:"现象-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#现象-2"}},[a._v("#")]),a._v(" 现象")]),a._v(" "),_("ul",[_("li",[a._v("自身业务代码或者数据出问题")]),a._v(" "),_("li",[a._v("缓存中没有的数据，数据库也没有，可能是恶意攻击或者误操作，造成数据库压力过大，查询不应该存在")])]),a._v(" "),_("h4",{attrs:{id:"解决方案-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-2"}},[a._v("#")]),a._v(" 解决方案")]),a._v(" "),_("ul",[_("li",[a._v("校验")]),a._v(" "),_("li",[a._v("缓存空值（空缓存）（过期），返回空对象（空id，而不是null）")]),a._v(" "),_("li",[a._v("bitmap布隆过滤器，存在的数据hash到bitmap，不存在的则被拦截；某个值存在时，这个值可能不存在，当它说不存在，那就肯定不存在")])]),a._v(" "),_("h3",{attrs:{id:"缓存击穿-失效-只穿缓存-数据库还有数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿-失效-只穿缓存-数据库还有数据"}},[a._v("#")]),a._v(" 缓存击穿（失效）（只穿缓存，数据库还有数据）")]),a._v(" "),_("h4",{attrs:{id:"现象-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#现象-3"}},[a._v("#")]),a._v(" 现象")]),a._v(" "),_("ul",[_("li",[a._v("热点key，缓存没有数据库有，一般是过期，数据库单条记录瞬时压力大")]),a._v(" "),_("li",[a._v("缓存大批同时失效")])]),a._v(" "),_("h4",{attrs:{id:"解决方案-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-3"}},[a._v("#")]),a._v(" 解决方案")]),a._v(" "),_("ul",[_("li",[a._v("互斥锁（DCL）")]),a._v(" "),_("li",[a._v("加随机失效时间")]),a._v(" "),_("li",[a._v("热点数据永不过期")])]),a._v(" "),_("h3",{attrs:{id:"缓存雪崩-同时穿缓存-数据库没有数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩-同时穿缓存-数据库没有数据"}},[a._v("#")]),a._v(" 缓存雪崩（同时穿缓存，数据库没有数据）")]),a._v(" "),_("h4",{attrs:{id:"现象-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#现象-4"}},[a._v("#")]),a._v(" 现象")]),a._v(" "),_("ul",[_("li",[a._v("娱乐热点事件")]),a._v(" "),_("li",[a._v("缓存大面积失效")])]),a._v(" "),_("h4",{attrs:{id:"解决方案-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-4"}},[a._v("#")]),a._v(" 解决方案")]),a._v(" "),_("ul",[_("li",[a._v("互斥锁（DCL）")]),a._v(" "),_("li",[a._v("限流，Sentinel或Hystrix或队列")]),a._v(" "),_("li",[a._v("多级缓存架构\n"),_("ul",[_("li",[a._v("√ Guava")]),a._v(" "),_("li",[a._v("√ EhCache")])])])]),a._v(" "),_("h2",{attrs:{id:"分布式锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[a._v("#")]),a._v(" 分布式锁")]),a._v(" "),_("h3",{attrs:{id:"普通锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#普通锁"}},[a._v("#")]),a._v(" 普通锁")]),a._v(" "),_("ul",[_("li",[a._v("1.SETNX\n"),_("ul",[_("li",[a._v("抛异常会执行不了，死锁")])])]),a._v(" "),_("li",[a._v("2.SETNX+trycath\n"),_("ul",[_("li",[a._v("宕机，死锁")])])]),a._v(" "),_("li",[a._v("3.SETNX+expire+trycath\n"),_("ul",[_("li",[a._v("设置key和expire原子性，系统宕机，死锁")])])]),a._v(" "),_("li",[a._v("4.SETNX+expire+trycath\n"),_("ul",[_("li",[a._v("原子性问题，锁超时失效，超高并发场景可能超卖")])])]),a._v(" "),_("li",[a._v("5.SETNX+expire+trycath+uuid\n"),_("ul",[_("li",[a._v("解锁原子性问题，在临界值删除别的线程加的锁")])])]),a._v(" "),_("li",[a._v("6.SETNX+expire+trycath+uuid+lua")])]),a._v(" "),_("h3",{attrs:{id:"redisson"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redisson"}},[a._v("#")]),a._v(" Redisson")]),a._v(" "),_("h4",{attrs:{id:"lock"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#lock"}},[a._v("#")]),a._v(" Lock")]),a._v(" "),_("ul",[_("li",[a._v("redisson.getLock(key)")]),a._v(" "),_("li",[a._v("redisson.lock()")])]),a._v(" "),_("h4",{attrs:{id:"redlock"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redlock"}},[a._v("#")]),a._v(" RedLock")]),a._v(" "),_("p",[a._v("客户端要收到半数以上的响应才能加锁成功")])])}),[],!1,null,null,null);_.default=s.exports}}]);