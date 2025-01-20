(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{417:function(e,v,l){"use strict";l.r(v);var _=l(7),t=Object(_.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"redis常用数据类型及应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis常用数据类型及应用"}},[e._v("#")]),e._v(" Redis常用数据类型及应用")]),e._v(" "),v("h2",{attrs:{id:"在线测试命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在线测试命令"}},[e._v("#")]),e._v(" 在线测试命令")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://try.redis.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://try.redis.io/"),v("OutboundLink")],1)])]),e._v(" "),v("h2",{attrs:{id:"redis命令大全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis命令大全"}},[e._v("#")]),e._v(" Redis命令大全")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"http://www.redis.cm/commands.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.redis.cm/commands.html"),v("OutboundLink")],1)])]),e._v(" "),v("h2",{attrs:{id:"备注"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#备注"}},[e._v("#")]),e._v(" 备注")]),e._v(" "),v("ul",[v("li",[e._v("Redis命令不分大小写，而key区分大小写")]),e._v(" "),v("li",[e._v("内置帮助文档----help @类型名词")])]),e._v(" "),v("h2",{attrs:{id:"常用数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用数据类型"}},[e._v("#")]),e._v(" 常用数据类型")]),e._v(" "),v("h3",{attrs:{id:"string-字符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#string-字符"}},[e._v("#")]),e._v(" String(字符)")]),e._v(" "),v("ul",[v("li",[e._v("最常用\n"),v("ul",[v("li",[e._v("set key value")]),e._v(" "),v("li",[e._v("get key")])])]),e._v(" "),v("li",[e._v("同时设置/获取多个键值\n"),v("ul",[v("li",[e._v("mset key value [key value ...]")]),e._v(" "),v("li",[e._v("mget key [key ...]")])])]),e._v(" "),v("li",[e._v("数值增减\n"),v("ul",[v("li",[e._v("递增数值\n"),v("ul",[v("li",[e._v("incr key")])])]),e._v(" "),v("li",[e._v("增加指定的整数\n"),v("ul",[v("li",[e._v("incrby key increment")])])]),e._v(" "),v("li",[e._v("递减数值\n"),v("ul",[v("li",[e._v("decr key")])])]),e._v(" "),v("li",[e._v("减少指定的整数\n"),v("ul",[v("li",[e._v("decrby key derement")])])])])]),e._v(" "),v("li",[e._v("获取字符串长度\n"),v("ul",[v("li",[e._v("strlen key")])])]),e._v(" "),v("li",[e._v("分布式锁\n"),v("ul",[v("li",[e._v("setnx key value")]),e._v(" "),v("li",[e._v("set key value [EX seconds] [PX milliseconds] [NX|XX]\n"),v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210321162113.png",alt:"20210321162113"}})])])]),e._v(" "),v("li",[v("strong",[e._v("应用场景")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("商品编号，订单编号采用incr命令生成")])]),e._v(" "),v("li",[v("strong",[e._v("是否喜欢文章")])])])])]),e._v(" "),v("h3",{attrs:{id:"hash-散列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hash-散列"}},[e._v("#")]),e._v(" Hash(散列)")]),e._v(" "),v("ul",[v("li",[e._v("redis hash =》 Java Map<String,Map<Object,Object>>")]),e._v(" "),v("li",[e._v("一次设置一个字段值\n"),v("ul",[v("li",[e._v("hset key field value")])])]),e._v(" "),v("li",[e._v("一次获取一个字段值\n"),v("ul",[v("li",[e._v("hget key field")])])]),e._v(" "),v("li",[e._v("一次设置多个字段值\n"),v("ul",[v("li",[e._v("hmset key field value [field value ...]")])])]),e._v(" "),v("li",[e._v("一次获取多个字段值\n"),v("ul",[v("li",[e._v("hmget key field [field ...]")])])]),e._v(" "),v("li",[e._v("获取所有字段值\n"),v("ul",[v("li",[e._v("hgetall key")])])]),e._v(" "),v("li",[e._v("获取某个key的全部数量\n"),v("ul",[v("li",[e._v("hlen")])])]),e._v(" "),v("li",[e._v("删除一个key\n"),v("ul",[v("li",[e._v("hdel key")])])]),e._v(" "),v("li",[v("strong",[e._v("应用场景")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("购物车早期，简单版，中小厂可用")])])])])]),e._v(" "),v("h3",{attrs:{id:"list-列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#list-列表"}},[e._v("#")]),e._v(" List(列表)")]),e._v(" "),v("ul",[v("li",[e._v("向列表左边添加元素\n"),v("ul",[v("li",[e._v("lpush key value [value ...]")])])]),e._v(" "),v("li",[e._v("向列表右边添加元素\n"),v("ul",[v("li",[e._v("rpush key value [value ...]")])])]),e._v(" "),v("li",[e._v("查看列表\n"),v("ul",[v("li",[e._v("lrange key start stop")])])]),e._v(" "),v("li",[e._v("获取列表中元素个数\n"),v("ul",[v("li",[e._v("llen key")])])]),e._v(" "),v("li",[v("strong",[e._v("应用场景")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("微信文章订阅公众号")])])])])]),e._v(" "),v("h3",{attrs:{id:"set-集合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#set-集合"}},[e._v("#")]),e._v(" Set(集合)")]),e._v(" "),v("ul",[v("li",[e._v("添加元素\n"),v("ul",[v("li",[e._v("sadd key member [member ...]")])])]),e._v(" "),v("li",[e._v("删除元素\n"),v("ul",[v("li",[e._v("srem key member [member ...]")])])]),e._v(" "),v("li",[e._v("获取集合中的所有元素\n"),v("ul",[v("li",[e._v("smemebers key")])])]),e._v(" "),v("li",[e._v("判断元素是否在集合中\n"),v("ul",[v("li",[e._v("sismember key member")])])]),e._v(" "),v("li",[e._v("获取集合中的元素个数\n"),v("ul",[v("li",[e._v("scard key")])])]),e._v(" "),v("li",[e._v("从集合中随机弹一个元素，元素不删除\n"),v("ul",[v("li",[e._v("srandmember key [数字]")])])]),e._v(" "),v("li",[e._v("从集合中随机弹一个元素，出一个删一个\n"),v("ul",[v("li",[e._v("spop key [数字]")])])]),e._v(" "),v("li",[e._v("集合运算\n"),v("ul",[v("li",[e._v("集合的差集运算A-B\n"),v("ul",[v("li",[e._v("属于A但不属于B的元素构成的集合")]),e._v(" "),v("li",[e._v("sdiff key [key ...]")])])]),e._v(" "),v("li",[e._v("集合的交集运算A&&B\n"),v("ul",[v("li",[e._v("属于A也属于B的共同拥有的元素构成的集合")]),e._v(" "),v("li",[e._v("sinter key [key ...]")])])]),e._v(" "),v("li",[e._v("集合的并集运算A||B\n"),v("ul",[v("li",[e._v("属于A或属于B的元素合并后的集合")]),e._v(" "),v("li",[e._v("sunion key [key ...]")])])])])]),e._v(" "),v("li",[v("strong",[e._v("应用场景")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("微信抽奖小程序")])]),e._v(" "),v("li",[v("strong",[e._v("微信朋友圈点赞")])]),e._v(" "),v("li",[v("strong",[e._v("微博好友关注社交关系")])]),e._v(" "),v("li",[v("strong",[e._v("QQ内推可能认识的人")])])])])]),e._v(" "),v("h3",{attrs:{id:"sorted-set-有序集合-简称zset"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sorted-set-有序集合-简称zset"}},[e._v("#")]),e._v(" Sorted set(有序集合，简称zset)")]),e._v(" "),v("ul",[v("li",[e._v("向有序集合中加入一个元素和该元素的分数")]),e._v(" "),v("li",[e._v("添加元素\n"),v("ul",[v("li",[e._v("zadd key score member [score member]")])])]),e._v(" "),v("li",[e._v("按照元素分数从小到大的顺序,返回索引从start到stop之间的所有元素\n"),v("ul",[v("li",[e._v("zrange key start stop [withscore]")])])]),e._v(" "),v("li",[e._v("获取元素的分数\n"),v("ul",[v("li",[e._v("zscore key member")])])]),e._v(" "),v("li",[e._v("删除元素\n"),v("ul",[v("li",[e._v("zrem key member [member ...]")])])]),e._v(" "),v("li",[e._v("获取指定分数范围的元素\n"),v("ul",[v("li",[e._v("zrangebyscore key min max [withscores] [limit offset count]")])])]),e._v(" "),v("li",[e._v("增加某个元素的分数\n"),v("ul",[v("li",[e._v("zincrby key increment member")])])]),e._v(" "),v("li",[e._v("获取集合中元素的数量\n"),v("ul",[v("li",[e._v("zcard key")])])]),e._v(" "),v("li",[e._v("获得指定分数范围内的元素个数\n"),v("ul",[v("li",[e._v("zcount key min max")])])]),e._v(" "),v("li",[e._v("按照排名范围删除元素\n"),v("ul",[v("li",[e._v("zremrangebyrank key start stop")])])]),e._v(" "),v("li",[e._v("获取元素的排名\n"),v("ul",[v("li",[e._v("从小到大\n"),v("ul",[v("li",[e._v("zrank key menber")])])]),e._v(" "),v("li",[e._v("从大到小\n"),v("ul",[v("li",[e._v("zrevrank key member")])])])])]),e._v(" "),v("li",[v("strong",[e._v("应用场景")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("根据商品销量对商品进行排序显示")])]),e._v(" "),v("li",[v("strong",[e._v("热搜")])])])])]),e._v(" "),v("h2",{attrs:{id:"除了5大数据类型-还知道其他的哪些数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#除了5大数据类型-还知道其他的哪些数据类型"}},[e._v("#")]),e._v(" 除了5大数据类型，还知道其他的哪些数据类型")]),e._v(" "),v("h3",{attrs:{id:"bigmap-位图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bigmap-位图"}},[e._v("#")]),e._v(" Bigmap(位图)")]),e._v(" "),v("h3",{attrs:{id:"hyperloglog-统计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hyperloglog-统计"}},[e._v("#")]),e._v(" HyperLogLog(统计)")]),e._v(" "),v("h3",{attrs:{id:"geo-地理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#geo-地理"}},[e._v("#")]),e._v(" GEO(地理)")]),e._v(" "),v("h3",{attrs:{id:"stream-流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#stream-流"}},[e._v("#")]),e._v(" Stream(流)")])])}),[],!1,null,null,null);v.default=t.exports}}]);