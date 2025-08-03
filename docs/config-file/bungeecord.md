# BungeeCord & Waterfall 服务端相关配置文件

这些服务端的配置文件均为根目录下的 `config.yml`

以下是 BungeeCord & Waterfall 服务端的常用配置项:

## online_mode
类型: `boolean`

默认值: `true`

是否启用在线模式 (即正版服), 若你是离线服, 请设置为 `false`

## forge_support
类型: `boolean`

默认值: `false`

是否开启 Forge 支持, 若你的子服中有 Forge 服务器, 请设置为 `true`

## max_packets_per_second
类型: `int`

默认值: `4096`

每秒发包的最大数量, 建议调大以增大对生电的支持

## servers
类型: `object`

默认值: `(代码块)`

BungeeCord 的子服配置

## max_packets_data_per_second
类型: `int`

默认值: `33554432`

每秒发出的包的数据最大量

## player_limit
类型: `int`

默认值: `-1`

连接到代理服务端的最大玩家数量 (-1 即无限制)

## connection_throttle
类型: `int`

默认值: `4000`

玩家进入频率限制, 单位为毫秒, 建议调小以防止玩家频繁进入却进不来

## log_commands
类型: `boolean`

默认值: `false`

是否在日志记录命令执行记录

## log_pings
类型: `boolean`

默认值: `true`

是否记录 Minecraft 客户端 ping 服务端

## ip_forward
类型: `boolean`

默认值: `false`

是否开启 IP 转发, 使子服可以获取到玩家的真实 IP 地址

## permissions
类型: `object`

默认值: `(代码块)`

BungeeCord 内置命令的相关权限设置

## listeners.motd
类型: `string`

默认值: `&1Another Bungee server`

服务器的描述 (在服务器列表中显示)

## listeners.proxy_protocol
类型: `boolean`

默认值: `false`

是否开启 Proxy Protocol v2 支持, 可以使子服获取到真实的客户端 IP 地址

## listeners.host
类型: `string`

默认值: `0.0.0.0:25577`

BungeeCord 监听的地址和端口

## listeners.max_players
类型: `int`

默认值: `1`

BungeeCord 显示的最大玩家数量

## listeners.enforce_secure_profile
类型: `boolean`

默认值: `false`

是否要求玩家在 Minecraft 聊天时要上传信息到 Mojang 服务器, 离线服请设置为 `false`