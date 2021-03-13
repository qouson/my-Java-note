# JVM-GC

## JVM体系结构

![20210313120914](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313120914.png)

java8将Permanent Generation移除，改为Metaspace

---

## GC的作用域----方法区和堆

![20210313160516](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313160516.png)

---

### 常见的垃圾回收算法

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

---

## GCRoot

### JVM垃圾回收的时候是怎么确定垃圾？知道什么是GCRoot？

- 什么是垃圾？
  - 简单说就是内存中已经不再被使用到的空间就是垃圾
- 如何判断一个对象是否可以被回收？
  - 引用计数
  ![20210313164626](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313164626.png)
    - Java中，引用和对象是有关联的。如果要操作对象则必须引用进行。因此，很显然一个简单的方法是通过引用计数来判断一个对象是否可以回收。
    - 简单说，给对象添加一个计数器，每当有一个地方引用它，计数器值加1，每当有一个引用失效时，计数器值减1。
    - 任何时刻计数器值为零时的对象就是不可能再被使用的，那么这个对象就是可回收对象。
    - 主流的Java虚拟机没有选用这种算法，原因是它很难解决对象中间的循环引用的问题。
  - 枚举根节点做可达性分析（根搜索路径）--GCRoot(复制，标记清除，标记压缩)
    ![20210313164823](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313164823.png)
    - 所谓GCRoot或者说tracing GC的"根集合"**就是一组必须活跃的引用**。
    - **基本思路就是一系列的GCRoot的对象作为起点**，从这个被称为GCRoot的对象开始向下搜索，如果一个对象到GCRoot没有任何引用链相连时，则说明此对象不可用。
    - 即给定一个集合的引用作为根出发，通过引用关系遍历对象图，能被遍历到的（可到达的）对象就判定为存活；没有遍历到的就自然判定为死亡。
    - case![20210313170215](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210313170215.png)
    - Java中可以作为GCRoot的对象
      - 虚拟机栈（栈帧中的局部变量区，也叫局部变量表）中的引用对象。
      - 方法区中类静态属性引用的对象。
      - 方法区中常量引用的对象。
      - 本地方法栈中JNI(Native方法)引用的对象。
    - GCRootDemo

    ```java
    public class GCRootDemo{
        private byte[] byteArray = new byte[1024 * 1024 * 1024];
        private static GCRootDemo2 t2;
        private static final GCRootDemo3 t3 = new GCRootDemo3(8;
        public static void m1(){
            GCRootDemo t1 = new GCRootDemo();
            System.gc();
            System.out.println("第一次GC完成");
        }
        public static void main(String[] args){
            m1();
        }
    }
    ```
