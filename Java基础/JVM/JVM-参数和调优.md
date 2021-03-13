# JVM参数和调优

## JVM的参数类型

### 标配参数

--在jdk各个版本之间稳定，很少有大变化
![20210313181115](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313181115.png)

#### -version

#### -help

#### java -showversion

### X参数

![20210313181042](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313181042.png)

#### -Xlint - 解释执行

#### -Xcomp - 第一次使用就编译成本地代码

#### -Xmixed - 混合模式

### **XX参数**

#### Boolean类型

- 公式
  - -XX:+或者-某个属性值（+表示开启，-表示关闭）
- Case
  - 是否打印GC的收集细节 -- **-XX:-PrintGCDetails，-XX:+PrintGCDetails**
  - 是否使用串行垃圾回收器 -- **-XX:-UseSerialGC，-XX:+UseSerialGC**
  - 如何查看一个正在运行中的Java程序？它的某个jvm参数是否开启？具体值是多少？
    - jps -l查看进程号
    - jinfo -flag PrintGCDetails 进程号
    - demo

      - ```java
        public class HelloGC {
            public static void main(String[] args) {
                System.out.println("**************hello GC");
                try{ TimeUnit.SECONDS.sleep(Integer.MAX_VALUE); }catch(Exception e){e.printStackTrace();}
            }
        }
        ```

      - ![20210313214455](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313214455.png)
      - ![20210313214613](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313214613.png)
      - ![20210313215858](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313215858.png)
  
#### KV设值类型

- 公式
  - -XX:属性key = 属性值value
- Case
  - -XX:MetaspaceSize=128m
  - -XX:MaxTenuringThreshold=15
  - 如何查看一个正在运行中的Java程序？它的某个jvm参数是否开启？具体值是多少？(同上Boolean类型)

#### jinfo类型，如何查看当前运行程序的配置

- 公式
  - jinfo -flag 配置项 进程号
- Case
  - jinfo -flag InitialHeapSize 进程号
  ![20210313221622](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313221622.png)
  - jinfo -flags 进程号
  ![20210313221442](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313221442.png)

#### 题外话（坑）-- -Xms和-Xmx这两个参数你怎么解释？-Xms1024m -Xmx1024m

- -Xms等价于-XX:InitialHeapSize
- -Xmx等价于-XX:MaxHeapSize

## 盘点家底查看JVM默认值

- 第一种盘点家底查看JVM参数的方法
  - jps
  - jinfo -flag 具体参数 Java进程编号
  - jinfo -flags        Java进程编号
- 第二种盘点家底查看JVM参数的方法
  - -XX:+PrintFlagsInitial
    - 主要查看初始默认
    - 公式
      - java -XX:+PrintFlagsInitial -version
      - java -XX:+PrintFlagsInitial
    - Case
      - ![20210313223124](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313223124.png)
  - -XX:+PrintFlagsFinal
    - 主要查看修改更新
    - 公式
      - java -XX:+PrintFlagsFinal -version
      - java -XX:+PrintFlagsFinal
    - Case
      - ![20210313234213](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313234213.png)
      - ![20210313234013](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313234013.png)
    - PrintFlagsFinal举例:运行java命令的同时打印出参数
      - ![20210313235822](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313235822.png)  
  - -XX:PrintCommandLineFlags
    - 打印命令行参数
    - ![20210314000338](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314000338.png)

## ![20210313234753](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313234753.png)
