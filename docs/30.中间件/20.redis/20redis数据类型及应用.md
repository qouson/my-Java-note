---
title: redis数据类型及应用
date: 2024-05-23 17:24:13
permalink: /pages/a05ac6/
categories:
  - 中间件
  - redis
tags:
  - 
author: 
  name: qouson
  link: https://github.com/qouson
---
# Redis常用数据类型及应用

## 在线测试命令

- <https://try.redis.io/>

## Redis命令大全

- <http://www.redis.cm/commands.html>

## 备注

- Redis命令不分大小写，而key区分大小写
- 内置帮助文档----help @类型名词

## 常用数据类型

### String(字符)

- 最常用
  - set key value
  - get key
- 同时设置/获取多个键值
  - mset key value [key value ...]
  - mget key [key ...]
- 数值增减
  - 递增数值
    - incr key
  - 增加指定的整数
    - incrby key increment
  - 递减数值
    - decr key
  - 减少指定的整数
    - decrby key derement
- 获取字符串长度
  - strlen key
- 分布式锁
  - setnx key value
  - set key value [EX seconds] [PX milliseconds] [NX|XX]
  ![20210321162113](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210321162113.png)
- **应用场景**
  - **商品编号，订单编号采用incr命令生成**
  - **是否喜欢文章**

### Hash(散列)

- redis hash =》 Java Map<String,Map<Object,Object>>
- 一次设置一个字段值
  - hset key field value
- 一次获取一个字段值
  - hget key field
- 一次设置多个字段值
  - hmset key field value [field value ...]
- 一次获取多个字段值
  - hmget key field [field ...]
- 获取所有字段值
  - hgetall key
- 获取某个key的全部数量
  - hlen
- 删除一个key
  - hdel key
- **应用场景**
  - **购物车早期，简单版，中小厂可用**

### List(列表)

- 向列表左边添加元素
  - lpush key value [value ...]
- 向列表右边添加元素
  - rpush key value [value ...]
- 查看列表
  - lrange key start stop
- 获取列表中元素个数
  - llen key
- **应用场景**
  - **微信文章订阅公众号**

### Set(集合)

- 添加元素
  - sadd key member [member ...]
- 删除元素
  - srem key member [member ...]
- 获取集合中的所有元素
  - smemebers key
- 判断元素是否在集合中
  - sismember key member
- 获取集合中的元素个数
  - scard key
- 从集合中随机弹一个元素，元素不删除
  - srandmember key [数字]
- 从集合中随机弹一个元素，出一个删一个
  - spop key [数字]
- 集合运算
  - 集合的差集运算A-B
    - 属于A但不属于B的元素构成的集合
    - sdiff key [key ...]
  - 集合的交集运算A&&B
    - 属于A也属于B的共同拥有的元素构成的集合
    - sinter key [key ...]
  - 集合的并集运算A||B
    - 属于A或属于B的元素合并后的集合
    - sunion key [key ...]
- **应用场景**
  - **微信抽奖小程序**
  - **微信朋友圈点赞**
  - **微博好友关注社交关系**
  - **QQ内推可能认识的人**

### Sorted set(有序集合，简称zset)

- 向有序集合中加入一个元素和该元素的分数
- 添加元素
  - zadd key score member [score member]
- 按照元素分数从小到大的顺序,返回索引从start到stop之间的所有元素
  - zrange key start stop [withscore]
- 获取元素的分数
  - zscore key member
- 删除元素
  - zrem key member [member ...]
- 获取指定分数范围的元素
  - zrangebyscore key min max [withscores] [limit offset count]
- 增加某个元素的分数
  - zincrby key increment member
- 获取集合中元素的数量
  - zcard key
- 获得指定分数范围内的元素个数
  - zcount key min max
- 按照排名范围删除元素
  - zremrangebyrank key start stop
- 获取元素的排名
  - 从小到大
    - zrank key menber
  - 从大到小
    - zrevrank key member
- **应用场景**
  - **根据商品销量对商品进行排序显示**
  - **热搜**

## 除了5大数据类型，还知道其他的哪些数据类型

### Bigmap(位图)

### HyperLogLog(统计)

### GEO(地理)

### Stream(流)
