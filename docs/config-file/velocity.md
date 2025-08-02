# Velocity 服务端配置文件

Velocity 服务端的配置文件一般是服务器根目录下的 `velocity.toml` 文件, 让我们一起看看该服务端的常用配置项:

## bind
类型: `string`

默认值: `0.0.0.0:25565`

Velocity 监听的地址和端口

## motd
类型: `string`

默认值: `<#09add3>A Velocity Server`

服务器的描述 (在服务器列表中显示), 支持 [MiniMessage](https://docs.advntr.dev/minimessage/format.html) 语法

## show-max-players
类型: `int`

默认值: `500`

Velocity 服务端显示的最大玩家数量

## online-mode
类型: `boolean`

默认值: `true`

是否启用在线模式 (即正版服), 若你是离线服, 请设置为 `false`

## player-info-forwarding-mode
类型: `string`

默认值: `none`

Velocity 服务端的转发模式, 分为以下几种:
- `none`: 直接转发, 该配置下不需要额外的子服配置, 但是 Velocity 插件及服务器之间互联配置的自由会受到限制
- `legacy`: 使用 BungeeCord 模式转发, 安全性相比 `modern` 模式较差
- `bungeeguard`: 基于 BungeeGuard 插件进行转发, 是 `legacy` 和 `modern` 两种模式的折中方案 (支持低版本, 安全性也不差)
- `modern`: 使用 Velocity 自身的现代转发模式, 安全性较高, 但是仅支持 1.13+ 的类 Paper 服务端

## forwarding-secret-file
类型: `string`

默认值: `forwarding.secret`

使用 `bungeeguard` 或 `modern` 转发模式时密钥的存储位置 (用于验证子服和代理服务端, 防止其它代理服务端连接到你的子服)

## announce-forge
类型: `boolean`

默认值: `false`

用于与客户端通信, 告诉客户端子服是否支持 Forge, 如果有模组服子服, 建议设置为 `true`

## enable-player-address-logging
类型: `boolean`

默认值: `true`

是否记录玩家进入时的真实 IP 到日志中

## servers
类型: `object`

默认值: `(代码块)`

Velocity 的子服配置

## try
类型: `array`

默认值: `["lobby"]`

在玩家进入时, 尝试连接的子服名称列表, 若玩家退出时在a子服, 如果列表中有a子服, 则玩家重新进入时会到a子服, 如果没有则按照列表顺序尝试连接每一个子服 (哪一个子服成功了就连接哪一个), 若列表为空, 则随机连接一个子服

## advanced.haproxy-protocol
类型: `boolean`

默认值: `false`

是否支持 HAProxy Protocol 协议 (用于在内网穿透环境中将玩家真实IP转发到子服), 新手建议不要开启

## advanced.show-ping-requests
类型: `boolean`

默认值: `false`

是否显示来自 Minecraft 客户端的 Ping 请求

## advanced.log-command-executions
类型: `boolean`

默认值: `false`

是否记录命令执行信息到日志中

## advenced.log-player-connections
类型: `boolean`

默认值: `true`

是否记录玩家连接信息到日志中