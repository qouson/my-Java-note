# JVM-GC

## JVM体系结构

![20210313120914](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313120914.png)
java8将Permanent Generation移除，改为Metaspace

## GC的作用域----方法区和堆

常见的垃圾回收算法：

1. 引用计数
    缺点：
    1. 每次对象赋值后都要维护计数器，且计数器有一定的消耗
    2. 较难处理循环引用
2. 复制
3. 标记清除
4. 标记整理（压缩）

引用计数
![20210313121840](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313121840.png)

复制
![20210313121907](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313121907.png)

标记清除
![20210313121943](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313121943.png)

标记整理（压缩）
![20210313122100](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313122100.png)
