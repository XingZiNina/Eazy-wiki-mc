# Minecraft 网络通信

:::warning 注意
本文仅针对 Minecraft Java 版的网络通信展开赘述
:::

Minecraft 使用 TCP 协议进行网络通信, 它的服务端和客户端分离, 客户端和服务端之间通过发包进行通信 (你的单人游戏相当于开启了一个迷你服务端)

包 (packet) 是 Minecraft 的网络通信的基本单位, 每个包都有一定的格式:

1. Packet Length (varint): 包的长度
2. Packet ID (varint): 包的 ID
3. Payload: 包的负载 (内容), 可选, 格式根据不同的包而定

接着我们来看看 Minecraft 客户端与服务端建立连接的全过程:

```mermaid
sequenceDiagram
Note over 客户端,服务端: 握手 (Handshake) 过程
客户端->>服务端: ID: 0x00, 内容: 切换协议到登录
Note over 客户端,服务端: 登录 (Login) 过程
客户端->>服务端: ID: 0x00, 内容: 开始登录!
服务端->>客户端: ID: 0x03, 内容: 修改压缩阈值
服务端->>客户端: ID: 0x02, 内容: 登录成功!
客户端->>服务端: ID: 0x03, 内容: 收到成功登录的信息
Note over 客户端,服务端: 配置 (Configuration) 过程
客户端->>服务端: ID: 0x00, 内容: 客户端的一些数据
服务端->>客户端: ID: 0x07, 内容: 服务端的一些数据
服务端->>客户端: ID: 0x0E, 内容: 安装服务器的一些内容包
客户端->>服务端: ID: 0x07, 内容: 安装完成
服务端->>客户端: ID: 0x03, 内容: 配置完成
客户端->>服务端: ID: 0x03, 内容: 收到配置完成的信息
Note over 客户端,服务端: 游玩 (Play) 过程
服务端->>客户端: ID: 0x2C, 内容: 服务器基本数据
客户端->>服务端: ...
服务端->>客户端: ...
loop 状态检查
    服务端->>客户端: ID: 0x27, 内容: 你是否还在线?
    客户端->>服务端: ID: 0x1A, 内容: 你还在线!
end
```

:::info 信息
更多信息请参考 [Minecraft Wiki](https://minecraft.wiki/w/Java_Edition_protocol/Packets)
:::