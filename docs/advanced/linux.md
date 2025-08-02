# Linux

相信你总是听到有人说 Linux 开服更好, 这篇文章就来介绍一下 Linux 系统

## 优势

- 发包/接收速度快, 面对占用大带宽场景 (ex. 玩家很多, 被攻击) 能够更加稳定
- 性能更好
- 内存占用更低 (一般 < 512 MB, Windows 则一般 1 ~ 2 GB)
- 开源, 免费, 社区活跃, 造就了它的稳定性和安全性强
- Linux 在文件被占用时可以被删除 (也就有了 `rm -rf /*` 的笑话)

## 发行版的选择

以下是一些常见的发行版:

:::tip 提示
这里的推荐指数仅供参考, 最高值为 10
:::

### Debian

老牌 Linux 发行版, 使用 `apt` 包管理器, 稳定性强, 不过在一开始安装时可能缺乏一些工具 (如 `sudo` 需要手动安装)

推荐指数: 9

### Ubuntu

基于 Debian 的 Linux 发行版, 工具完善, 适合新手使用 ~~(不过因为一些事情, 撰写者对它有一点偏见)~~

推荐指数: 9.5

### CentOS

一个基于 Red Hat Linux 的发行版, 使用 `yum` 包管理器, 稳定性高, 不过已停更

推荐指数: 8

### Fedora

另一个基于 Red Hat Linux 的发行版, 更新较快, 不过稳定性偏差

推荐指数: 7.5

<br>

:::warning 警告
**切忌选择 Arch Linux 作为你的服务器系统**, Arch Linux 采取滚动更新, 这意味着它会不断更新软件, 而你的服务器可能因为更新而无法正常运行, 而最新版的软件本身也有可能存在漏洞, 导致你的服务器被入侵的风险较高
:::

## 连接到服务器

:::warning 警告
不建议给你的服务器安装桌面系统, 桌面系统占用较多内存, 不如使用面板来管理你的服务器
:::

连接到服务器一般使用到 OpenSSH 客户端, 它可以让你在命令行下管理你的服务器

一般来说, Windows 的高版本系统已经自带了 OpenSSH 客户端, 你可以直接打开终端, 输入以下命令来连接到服务器:

```shell
ssh username@ip -p port
```

- `username`: 你连接到服务器的用户名, 一般是 root
- `ip`: 服务器的 IP 地址 (也可以使用域名)
- `port`: 服务器的 SSH 端口, 默认为 22, 如果未修改端口可以不加 `-p port` 这个参数

:::info 信息
后面将会使用 114.66.40.76 作为示例服务器的 IP 地址, 正常会显示你的服务器IP地址
:::

在执行这条命令后, 你可能会看到

```text
The authenticity of host '114.66.40.76 (114.66.40.76)' can't be established.
ED25519 key fingerprint is SHA256:w+Q9b7Li0Uhzy8S1POKwLOZ1o3Nv2cvGFZlwZRp1i2Q.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? 
```

这里是询问你是否信任这个服务器的公钥, 可以直接输入 `yes` 回车继续

接着, 你应该会看到

```text
Warning: Permanently added '114.66.40.76' (ED25519) to the list of known hosts.
root@114.66.40.76's password:
```

在这里输入密码, 回车

如果密码错误, 你可能会看到:

```text
Permission denied, please try again.
root@114.66.40.76's password: 
```

这里则代表密码错误, 需要重新输入并回车, 如果你多次密码错误, 则会:

```text
root@114.66.40.76: Permission denied (password).
```

或

```text
Connection closed by 114.66.40.76 port 22
```

不过你仍然可以重新执行原来的那一条命令进行连接并尝试

接着会介绍一些常用的 SSH 远程连接工具

### Xshell

Xshell 是一款 Windows 上的 SSH 客户端, 功能强大, 界面清晰, 可以免费试用

### Tabby Terminal

Tabby 是一款新兴的 SSH 客户端, 界面简洁, 功能丰富, 开源

## 常用命令

