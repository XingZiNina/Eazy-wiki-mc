# QQ 机器人

## 概述

目前市面上大部分 QQ 机器人插件都是基于 OneBot 或 go-cqhttp 协议开发的 (因为 QQ 本身的 API 限制较多), 而这些机器人插件都需要通过对接 OneBot 框架才能运行, 具体原理如下图:

```txt
sequenceDiagram
插件->>OneBot 框架: 发送xxx消息
OneBot 框架->>QQ: 发送xxx消息
loop 状态检查
    OneBot 框架->>插件: 程序运行正常
end
Note left of QQ: 收到消息时:
QQ->>OneBot 框架: 收到xxx的消息
OneBot 框架->>插件: 收到xxx的消息
```

所以, 在安装一些基于 OneBot 协议的 QQ 机器人插件前, 你通常需要安装一个 OneBot 框架 (如 Lagrange.OneBot, Napcat, LLoneBot)

:::warning 注意
经过实验 Linux登录比Windows登录更加稳定 QQ账号不可为新注册账号
在有Svip/大会员情况下 会减轻腾讯官方的检测
所以 在此更推荐Lagrange框架
:::

:::warning 注意
目前腾讯已全面管控带有bot特征的账号 因利用弱密码钻空子 恶意发布不当言论
近段时间请不要再使用任何非官方Bot 以免带来账号以及财产损失！
:::

### 2025.9.5 公网 OneBot 服务遭攻击事件杂谈
[点我查看相关事件文章！！！](https://wesley-young.github.io/2025-09-05-attack-on-onebot-service)

## 推荐

### [AQQBot](https://www.minebbs.com/resources/aqqbot.9921/)

alazeprt编写的 QQ 机器人插件, 基于 OneBot 协议, 同时支持 Velocity, 功能丰富

### [EasyBot](https://www.minebbs.com/resources/easybot-minecraft-folia.7918/)

优秀的 QQ 机器人插件, 基于 OneBot 协议, 功能强大, 不过需要预先安装一个 EasyBot 的管理页面前端程序才能使用

### [HuHoBot](https://www.minebbs.com/resources/huhobot-qq.9759/)

官方机器人, 虽然功能匮乏, 但是使用官方的 API 更加安全稳定

### [PlumBot](https://modrinth.com/plugin/plumbot)

新兴的 QQ 机器人插件，基于 go-cqhttp 协议，功能更加丰富，不过稳定性较差

### [GUGUbot](https://www.minebbs.com/resources/aqqbot.9921/)

基于MCDR框架编写的 QQ 机器人插件, 基于 OneBot 协议, 因框架优秀 支持vanilla-Fabric通用 功能丰富