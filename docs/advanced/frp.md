# 自建内网穿透

相信有很多人想在家自己组装电脑主机开服, 但是家里没有公网, 这时候购买一台云服务器作为中转的内网穿透节点就显得尤为重要了

一般来说, 自建内网穿透会使用到 [frp](https://gofrp.org/zh-cn/) 这一软件, 接下来我们就来介绍一下如何使用 frp 实现内网穿透

首先, 你需要根据你的系统在 frp 的 [GitHub Releases](https://github.com/fatedier/frp/releases) 下载对应你操作系统和架构的 frp 程序

接着, 将文件解压, 你大概会看到如下文件:

```text
|-- frpc(.exe)  // 客户端程序
|-- frps(.exe)  // 服务端程序
|-- frpc.toml   // 客户端配置文件
|-- frps.toml   // 服务端配置文件
|-- LICENSE     // 许可证 (开源协议) 文件
```

在你购买的中转的云服务器中, 只需要保留服务端的程序和配置文件, 而在你需要内网穿透的机器上, 只需要保留客户端的程序和配置文件

接着, 先配置你的服务端 (`frps.toml`), 常用的示例如下:

```toml
bindPort = 7000  # 服务器监听的端口
auth.token = "your_token"  # 访问服务器的验证令牌, 建议设置复杂一些
```

然后, 配置你的客户端 (`frpc.toml`), 常用的示例如下:

```toml
serverAddr = "110.42.43.86"   # 你中转云服务器的公网 IP 地址
serverPort = 11451            # 你中转云服务器的端口
auth.token = "Wu2fvC9Q8B7x"   # 你中转云服务器的验证令牌

[[proxies]]                   # 代表一条内网穿透配置, 可以有多个
name = "minecraft"            # 名称 (必须唯一)
type = "tcp"                  # 协议类型 (tcp/udp), Java 版客户端一般使用 tcp
localIP = "127.0.0.1"         # 转发到的 IP 地址 (一般不会动)
localPort = 25565             # 内网的端口 (你本地服务器内部的端口)
remotePort = 25565            # 外网的端口 (你从外面访问的端口)

[[proxies]]                   # 另一条内网穿透配置 (与上述同理)
name = "mysql"
type = "tcp"
localIP = "127.0.0.1"
localPort = 3306
remotePort = 3306
```

最后, 打开你的命令行, 执行以下命令:

```shell
cd /path/to/frp/folder   # 进入 frp 程序所在目录
chmod +x ./frps         # 给 frps 程序添加执行权限 (Linux/MacOS)
chmod +x ./frpc         # 给 frpc 程序添加执行权限 (Linux/MacOS)
./frps -c ./frps.toml   # 启动服务端 (需要一直运行)
./frpc -c ./frpc.toml   # 启动客户端 (需要一直运行)
```

这时, 你的内网穿透就搭建好了