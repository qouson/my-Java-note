# JVM-四大引用

## 强，软，弱，虚引用分别是什么

- 整体架构
![20210314172647](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314172647.png)
- 强引用（默认支持模式）
  - 当内存不足，JVM开始进行垃圾回收，对于强引用对象，就算是出现了OOM也不会对该对象进行回收，死都不收。
  - 强引用是最常见的普通对象引用，只要还有强引用还指向一个对象，就表明该对象还"活着"，垃圾收集器就不会碰这种对象。在Java中最常见的就是强引用，把一个对象赋给一个变量，这个变量就是一个强引用。当一个对象被强引用变量引用时，它处于可达状态，它是不可能被垃圾回收机制回收的，即时该对象永远也不会被用到，也不会被JVM回收。因此强引用是内存泄露的一个主要原因之一。
  - 对于一个普通对象，如果没有其他的引用关系，只要超过了引用的作用域或者显式地将（强）引用赋值为null，一般认为就是可以被垃圾收集的了（当然具体的回收时机还是看垃圾收集策略）。
  - Demo
  
  ```java
  public class StrongReferenceDemo {
    public static void main(String[] args) {
        //这样定义默认是强引用
        Object obj1 = new Object();
        //obj2引用赋值
        Object obj2 = obj1;
        obj1 = null;
        System.gc();
        //java.lang.Object@49476842
        System.out.println(obj2);
    }
  }
  ```

- 软引用
  - 软引用是相对强引用弱化了一些的引用，需要调用java.lang.ref.SoftReference类来实现，可以让对象豁免一些垃圾收集。
  - 对于只有软引用的对象来说：
  **当系统内存充足它 不会 被回收**
  **当系统内存不足它 会   被回收**
  - 软引用通常用在对内存敏感的程序中，比如高速缓存就有用到软引用，内存够用就保留，不够用就回收。
  - Demo

  ```java
  public class SoftReferenceDemo {
    public static void main(String[] args) {
    //  systemMemoryEnough();
        systemMemoryNotEnough();
    }
    public static void systemMemoryEnough(){
        Object obj = new Object();
        SoftReference<Object> softReference = new SoftReference<>(obj);
        obj = null;
        System.gc();
        System.out.println(obj);
        //内存够用，不会被回收
        System.out.println(softReference.get());
    }
    /**
     * 1.小内存，大对象，创建出内存不够的场景
     * 2.-Xms5m -Xmx5m -XX:+PrintGCDetails
     */
    public static void systemMemoryNotEnough(){
        Object obj = new Object();
        SoftReference<Object> softReference = new SoftReference<>(obj);
        System.out.println(obj);
        System.out.println(softReference);
        obj = null;
        try{
            Byte[] bytes = new Byte[30 * 1024 *1024];
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            System.out.println(obj);
            System.out.println(softReference);
        }
    }
  }
  ```

- 弱引用
  - 弱引用需要用java.lang.ref.WeakReferenge类来实现，它比软引用的生存期更短
  - 对于只有弱引用的对象来说，只要垃圾回收机制一运行，不管JVM的内存空间是否足够，都会回收该对象占用的内存。
  - Demo

  ```java
  public class WeakReferenceDemo {
    public static void main(String[] args) {
        Object obj = new Object();
        WeakReference<Object> weakReference = new WeakReference<>(obj);
        System.out.println(obj);
        System.out.println(weakReference);
        obj = null;
        System.gc();
        System.out.println(obj);
        //不管内存够不够，一律回收
        System.out.println(weakReference.get());
    }
  } 
  ```

  - 软引用和弱引用的应用
    - 假如有一个应用需要读取大量的本地图片：如果每次读取图片都从硬盘读取则会严重影响性能，如果一次性全部加载到内存中又可能造成内存溢出。此时使用软引用可以解决这个问题。
    - 设计思路是：用一个HashMap来保存图片的路径和相应图片对象关联的软引用之间的映射关系，在内存不足时，JVM会自动回收这些缓存图片对象所占用的空间，从而有效地避免了OOM的问题。
    - Demo
  
    ```java
    Map<String,SoftReference<Bitmap>>imageCache =new HashMap<String,SoftReference<Bitmap>>();
    ```

  - WeakHashMap--key置为空，GC之后，WeakHashMap的记录也为空
    - Demo

    ```java
    public class WeakHashMapDemo {
        public static void main(String[] args) {
            myHashMap();
            System.out.println("=================");
            myWeakHashMap();
        }
        public static void myHashMap(){
            HashMap<Integer,String> hashMap = new HashMap<>();
            Integer key = new Integer(1);
            String value = "HashMap";
            hashMap.put(key,value);
            key = null;
            System.out.println(hashMap);
            System.gc();
            System.out.println(hashMap);
        }
        public static void myWeakHashMap(){
            WeakHashMap<Integer,String> weakHashMap = new WeakHashMap<>();
            Integer key = new Integer(1);
            String value = "HashMap";
            weakHashMap.put(key,value);
            key = null;
            System.out.println(weakHashMap);
            System.gc();
            System.out.println(weakHashMap);
        }
    }
    ```

    ![20210314183746](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314183746.png)

- 虚引用（幽灵引用）
  - 虚引用需要java.lang.ref.PhantomReference类来实现。
  - 顾名思义，**就是形同虚设**，与其他几种引用都不同，虚引用并不会决定对象的生命周期。
  - 如果一个对象仅持有虚引用，那么它就和没面任何引用一样，在任何时候都可能被垃圾回收器回收，它不能单独使用也不能通过它访问对象，虚引用必须和引用队列（ReferenceQueue）联合使用。
  - 虚引用的主要作用是跟踪对象被垃圾回收的状态。仅仅是提供了一种确保对象被finalize以后，做某些事情的机制。
  - PhantomReference的get方法总是返回null，因此无法访问对应的引用对象。其意义在于说明一个对象已经进入finalization阶段，可以被gc回收，用来实现比finalization机制更灵活的回收操作。
  - 换句话说，设置虚引用关联的唯一目的，就是在这个对象被收集器回收的时候收到一个系统通知或者后续添加进一步的处理。
  - Java技术允许使用finalize()方法在垃圾收集器将对象从内存中清除出去之前做必要的清理工作。
  - Demo
  
  ```java
  public class PhantomReferenceDemo {
    public static void main(String[] args) {
        Object obj = new Object();
        ReferenceQueue<Object> referenceQueue = new ReferenceQueue<>();
        PhantomReference<Object> phantomReference = new PhantomReference<>(obj,referenceQueue);
        System.out.println(obj);
        System.out.println(phantomReference.get());
        System.out.println(referenceQueue.poll());
        System.out.println("==============================");
        obj = null;
        System.gc();
        try{ TimeUnit.SECONDS.sleep(1); }catch(Exception e){e.printStackTrace();}
        System.out.println(obj);
        System.out.println(phantomReference.get());
        System.out.println(referenceQueue.poll());
    }
  }
  ```

  ![20210314233012](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314233012.png)

- ReferenceQueue -相当于一种通知，将某个引用被添加到这个队列，就可以在被回收之前采取必要的行动
  - Demo

  ```java
  public class ReferenceQueueDemo {
    public static void main(String[] args) {
        Object obj = new Object();
        ReferenceQueue<Object> referenceQueue = new ReferenceQueue<>();
        WeakReference<Object> weakReference = new WeakReference<>(obj,referenceQueue);
        System.out.println(obj);
        System.out.println(weakReference.get());
        System.out.println(referenceQueue.poll());
        obj = null;
        System.gc();
        try{ TimeUnit.SECONDS.sleep(1); }catch(Exception e){e.printStackTrace();}
        System.out.println("=============================");
        System.out.println(obj);
        System.out.println(weakReference.get());
        System.out.println(referenceQueue.poll());
    }
  }
  ```

  ![20210314233446](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314233446.png)

## GCRoot和四大引用总结

![20210314233645](https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210314233645.png)
