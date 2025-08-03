# 配置服务器

配置服务端前, 建议你先通过 `/stop` 命令关闭服务器

:::info 信息
以下配置均为节选自对应的文件, 并非文件就只有这些内容
:::

## 必要配置项

若你是离线服务器, 请打开 `server.properties`, 找到如下两行:

```properties
enforce-secure-profile=true  # 改为 false
online-mode=true  # 改为 false
```

如果你不打算在主世界建造主城/出生点的一些保护设施, 请打开 `server.properties`, 找到如下行:

```properties
spawn-protection=16  # 改为 0
```

这样可以避免玩家在主世界出生点的范围内无法破坏/放置方块

反之, 如果你是大厅服, 主世界是主城, 则请将值尽量调大 (一般是你主城的半径)

### 群组服配置

假设有子服lobby, minigame, survival

首先需要配置你的各个子服的 `server.properties`:

```properties
# lobby 子服
server-port=30000  # 端口号, 自行选择空闲端口即可
server-ip=127.0.0.1  # 服务器监听的IP, 由于是从本地的代理服务端转发到这里所以可填本地回环地址 127.0.0.1 
```

```properties
# minigame 子服
server-port=30001  # 端口号, 同理
server-ip=127.0.0.1  # 同理
```

```properties
# survival 子服
server-port=30002  # 端口号, 同理
server-ip=127.0.0.1  # 同理
```

:::warning 注意
每个子服的端口号不可相同, 否则会冲突, 无法启动服务器
:::

接着配置你各个子服的群组服配置, 在 `config/paper-global.yml` 配置:

```yaml
# 每个子服的配置都一样
proxies:
  bungee-cord:
    online-mode: true  # 如果是离线服且使用 BungeeCord / Waterfall 作为代理服务端或使用 Velocity 的 legacy 模式 , 请改为 false
  proxy-protocol: false  # 如果你使用 Proxy Protocol v2, 请改为 true (新手不要修改)
  velocity:
    enabled: false  # 如果你使用 Velocity 作为代理服务端并使用 modern 转发模式, 请改为 true 以启用群组服功能
    online-mode: true  # 与 proxies.bungee-cord.online-mode 同理
    secret: '' # 在 '' 里填你 Velocity 服务端根目录下的 forwarding.secret 的内容
```

如果你使用的是类 BungeeCord 代理服务端或使用 Velocity 的 legacy 模式, 你还需要修改 `spigot.yml` 配置文件:

```yaml
settings:
  bungeecord: false  # 修改为 true 以启用适用于类 BungeeCord 服务端的群组服功能
```

最后还需要修改代理服务端的配置 (在代理服务端的根目录下):

```yaml
# BungeeCord 的群组服配置 (config.yml)
online_mode: true  # 离线服请设为 false
forge_support: false  # 如果使用 Forge 模组服务器请设为 true
servers:
  lobby:  # 可以修改该子服的名字
    motd: '&1Just another BungeeCord - Forced Host'  # lobby 子服的 MOTD
    address: localhost:25565  # 改为你刚刚设置的 lobby 子服的 IP 和 端口 (格式为 IP:端口)
ip_forward: false  # 是否转发IP, 建议开启
listener:
- query_port: 25577  # 查询绑定的端口, 可以修改为和你代理服务端 (下面) 的端口一样
  host: 0.0.0.0:25577  # 绑定的 IP 和 端口 (端口可修改为 25565, 注意端口不要和子服所设置的冲突)
  max_players: 1  # 显示的最大玩家数
```

```toml
# Velocity 的群组服配置 (velocity.toml)
bind = "0.0.0.0:25565"  # 绑定的 IP 和 端口 (一般不需要修改, 注意端口不要和子服所设置的冲突)
show-max-players = 500  # 显示的最大玩家数
online-mode = true  # 离线服请设为 false
player-info-forwarding-mode = "modern"  # 转发模式, 有 none, legacy (即BungeeCord模式), modern (1.13+) 三种
announce-forge = false  # 如果使用模组服务器请改为 true

[servers]
lobby = "127.0.0.1:30066"  # 改为你刚刚设置的 lobby 子服的 IP 和 端口 (格式为 IP:端口)
factions = "127.0.0.1:30067" # 你也可以修改 factions 为你子服的名称
minigames = "127.0.0.1:30068"

try = [  # 当玩家进入时, 传送到哪个服务器 (如果填多个则会优先传送到玩家离开时所在的服务器, 如果都不在则按顺序找到可以连接的)
    "lobby"
]
```

在修改完所有这些配置后, 启动子服及代理服务端, 就可以连接到


## 建议配置项

server.properties:
```properties
allow-flight=false  # 建议调为 true 减小 Minecraft 自带反作弊的误判
difficulty=easy  # 建议调为 hard 增加难度
enable-command-block=false  # 如果你要使用命令方块, 请改成 true
max-players=20  # 建议调大防止服务器满人无法进入
```