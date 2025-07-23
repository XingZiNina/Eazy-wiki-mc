# 报错分析

相信你总是在服务器里看到眼花缭乱的黄色和红色的信息, 但你却不知道从何入手? 这时, 就需要一些基本的报错分析知识了

## 分类

报错一般分两种, 分别为 `WARN` (即 `warning`, 警告, 一般显示为黄色), `ERROR` (即 `error`, 错误, 一般显示为红色)

## 普通报错

先来看一些常见的报错:

```log
[18:43:07 WARN]: **** SERVER IS RUNNING IN OFFLINE/INSECURE MODE!
[18:43:07 WARN]: The server will make no attempt to authenticate usernames. Beware.
[18:43:07 WARN]: While this makes the game possible to play without internet access, it also opens up the ability for hackers to connect with any username they choose.
[18:43:07 WARN]: To change this, set "online-mode" to "true" in the server.properties file.
```

<br>

```log
[18:43:10 ERROR]: [TrMenu] SLF4J: No SLF4J providers were found.
[18:43:10 ERROR]: [TrMenu] SLF4J: Defaulting to no-operation (NOP) logger implementation
[18:43:10 ERROR]: [TrMenu] SLF4J: See https://www.slf4j.org/codes.html#noProviders for further details.
```

<br>

```log
[18:43:10 WARN]: [ExcellentCrates] *************************
[18:43:10 WARN]: [ExcellentCrates] You have no packet library plugins installed for the Holograms feature to work.
[18:43:10 WARN]: [ExcellentCrates] Please install one of the following plugins to enable crate holograms: packetevents or ProtocolLib
[18:43:10 WARN]: [ExcellentCrates] *************************
```

类似这一类直接给出消息的报错, 可以直接拿消息去翻译, 如第一个报错是对于离线服务器的警告, 第二个报错提醒没有找到 SLF4J 日志实现, 第三个报错提醒没有安装支持 Holograms 所需的 packet (包) 插件

:::tip 提示
*一般*这一类报错不需要理会, 对游戏影响并不大
:::

## 代码报错

一般的代码报错会有如下结构:

```log
[14:37:31] [Server thread/ERROR]: Encountered an unexpected exception
java.lang.IllegalStateException: Failed to bind to port
	at net.minecraft.server.dedicated.DedicatedServer.initServer(DedicatedServer.java:290) ~[purpur-1.21.4.jar:1.21.4-2416-51aafbc]
	at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1178) ~[purpur-1.21.4.jar:1.21.4-2416-51aafbc]
	at net.minecraft.server.MinecraftServer.lambda$spin$2(MinecraftServer.java:313) ~[purpur-1.21.4.jar:1.21.4-2416-51aafbc]
	at java.base/java.lang.Thread.run(Thread.java:1583) ~[?:?]
Caused by: java.net.BindException: Address already in use: bind
	at java.base/sun.nio.ch.Net.bind0(Native Method) ~[?:?]
	at java.base/sun.nio.ch.Net.bind(Net.java:565) ~[?:?]
	at java.base/sun.nio.ch.ServerSocketChannelImpl.netBind(ServerSocketChannelImpl.java:344) ~[?:?]
	at java.base/sun.nio.ch.ServerSocketChannelImpl.bind(ServerSocketChannelImpl.java:301) ~[?:?]
	at io.netty.channel.socket.nio.NioServerSocketChannel.doBind(NioServerSocketChannel.java:141) ~[netty-transport-4.1.115.Final.jar:4.1.115.Final]
	at io.netty.channel.AbstractChannel$AbstractUnsafe.bind(AbstractChannel.java:561) ~[netty-transport-4.1.115.Final.jar:4.1.115.Final]
	at io.netty.channel.DefaultChannelPipeline$HeadContext.bind(DefaultChannelPipeline.java:1281) ~[netty-transport-4.1.115.Final.jar:4.1.115.Final]
	at io.netty.channel.AbstractChannelHandlerContext.invokeBind(AbstractChannelHandlerContext.java:600) ~[netty-transport-4.1.115.Final.jar:4.1.115.Final]
	at io.netty.channel.AbstractChannelHandlerContext.bind(AbstractChannelHandlerContext.java:579) ~[netty-transport-4.1.115.Final.jar:4.1.115.Final]
	at io.netty.channel.DefaultChannelPipeline.bind(DefaultChannelPipeline.java:922) ~[netty-transport-4.1.115.Final.jar:4.1.115.Final]
	at io.netty.channel.AbstractChannel.bind(AbstractChannel.java:259) ~[netty-transport-4.1.115.Final.jar:4.1.115.Final]
	at io.netty.bootstrap.AbstractBootstrap$2.run(AbstractBootstrap.java:380) ~[netty-transport-4.1.115.Final.jar:4.1.115.Final]
	at io.netty.util.concurrent.AbstractEventExecutor.runTask(AbstractEventExecutor.java:173) ~[netty-common-4.1.115.Final.jar:4.1.115.Final]
	at io.netty.util.concurrent.AbstractEventExecutor.safeExecute(AbstractEventExecutor.java:166) ~[netty-common-4.1.115.Final.jar:4.1.115.Final]
	at io.netty.util.concurrent.SingleThreadEventExecutor.runAllTasks(SingleThreadEventExecutor.java:472) ~[netty-common-4.1.115.Final.jar:4.1.115.Final]
	at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:569) ~[netty-transport-4.1.115.Final.jar:4.1.115.Final]
	at io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:997) ~[netty-common-4.1.115.Final.jar:4.1.115.Final]
	at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74) ~[netty-common-4.1.115.Final.jar:4.1.115.Final]
	... 1 more
```

我们来剖析一下结构:
- `[14:37:31] [Server thread/ERROR]: Encountered an unexpected exception`: 前面 `ERROR` 是报错的关键字, 冒号后是报错的提示信息 (此处意为: 出现了未预期的错误)
- `java.lang.IllegalStateException: Failed to bind to port`: 冒号前是报错类型 (`IllegalStateException` 即 非法状态错误), 冒号后是报错的具体信息 (此处意为: 绑定端口失败)
- 若干个 `at a.b.c.d(e.java:f) ~[g:h]`: 意为报错出现的位置, 其中 `a.b.c.d` 是报错的 Java 路径 (一般最后一个是方法名, 倒数第二个是类名) (此处第一个意为 `net.minecraft.server.dedicated` 包中的 `DedicatedServer` 类 中的 `initServer` 方法), `e` 是报错的具体文件名, `f` 是报错的代码行数, `g` 是报错类所在的文件, `h` 是报错类所在的依赖的版本号
- 若干个 `Caused by: java.net.BindException: Address already in use: bind`: `Caused by` 意为 原因是 , 冒号前是导致此报错的原因 (`java.net.BindException` 即 绑定地址错误), 冒号后是具体原因 (此处意为: 端口已被占用)

:::info 信息
一些相关定义:
- 类: 一个文件就是一个类, 相当于一个代码文件, 类中包含方法 (函数, 用于进行一些操作), 变量 (存储值的地方) 等成员
- 包: 包可以理解成一个文件夹, 用 `.` 分割代表文件夹的层级关系, 包中可以包含文件 (一般是代码文件), 也可以包含子包 (文件夹)
- 依赖: 指的是程序运行依赖的一类库 (library), 如 Minecraft 服务器内部依赖 `netty` 库 (用于网络通信)
- 堆栈: 堆栈 (stack trace) 是一种用来显示程序运行时的调用关系的一种方式, 它显示了程序运行时发生的函数调用顺序, 以及函数调用时所处的位置 (文件名, 代码行数), 这里的若干行 `at a.b.c.d(e.java:f) ~[g:h]` 就是堆栈
:::

对于这类报错, 可以先从最后一个报错提示信息开始翻译来了解报错产生的原因, 接着可以提取堆栈中的包名, 找出类似名称的插件, 即可分析出是哪个插件出现了错误, 如果找不到该插件则一般说明是缺少了这个插件 (前置)

