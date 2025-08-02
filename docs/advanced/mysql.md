# MySQL

## 下载

首先, 你需要打开 [MySQL 社区下载网站](https://dev.mysql.com/downloads/)

如果你是 Windows 用户, 则点击 `MySQL Installer for Windows` 找到大的 (离线安装程序) 文件点 `Download`, 随后 MySQL 会推荐你注册账户, 无需理会, 直接点击 `No thanks, just start my download` 下载安装程序

如果你是 Linux 用户, 则根据你的包管理器选择 `MySQL xxx Repository` (`xxx` 是你的包管理器), 接着根据你的发行版选择对应的安装包点 `Download`, 与 Windows 同理

## 安装

如果你是 Windows 用户, 直接双击打开下载好的安装程序, 安装类型选择 `Full` (完全安装, 包括服务端和客户端) 接着一路点 `Next` 和 `Execute`, 直到 `Accounts and Roles` 页面设置你 MySQL 数据库 root 账户的密码 (在下面的选择框可以创建更多用户, 按需选择), 然后继续一路点 `Next` 一直到 `Finish` 即安装完成

如果你是 Linux 用户, 在下载安装包后, 可以参考以下命令安装 MySQL:


```shell
# 使用 APT 包管理器的系统
cd ~/Downloads  # 将 ~/Downloads 改为你下载的 MySQL 安装包的路径
sudo apt install ./mysql-apt-config_0.8.13-1_all.deb  # 将 mysql-apt-config_0.8.13-1_all.deb 改为你下载的 MySQL 的安装程序
sudo apt update
sudo apt install mysql-community-server

# 使用 YUM 包管理器的系统
cd ~/Downloads  # 将 ~/Downloads 改为你下载的 MySQL 安装包的路径
sudo yum localinstall -y mysql-community-release-el7-5.noarch.rpm  # 将 mysql-community-release-el7-5.noarch.rpm 改为你下载的 MySQL 的安装程序
sudo yum makecache
sudo yum install mysql-community-server
```

## 配置

一般来说, Windows 用户无需更多配置, Linux 用户可能会发现 MySQL 安装后并没有自动启动, 此时需要手动启动 MySQL 服务:

```shell
sudo systemctl enable mysql  # 设置 MySQL 开机启动
sudo systemctl start mysql
```

然后, 你就可以使用这条命令连接到你的 MySQL 数据库:

```shell
mysql -u root -p
```

有可能你发现不需要密码就能登录, 此时, 你可以执行:

```shell
mysql_secure_installation
```

用此指令来设置你 MySQL 的数据库的密码, 如果有一些不是设置密码的提示一般一路按 `yes` 默认即可, 如果遇到要设置密码强度为 `LOW`, `MEDIUM`, `HIGH` 的提示, 建议选择 `LOW`

对于 YUM 包管理器的系统, 可能密码已经预设, 在启动 MySQL 服务后, 你可以使用以下命令:

```shell
grep password /var/log/mysqld.log
```

就能找到密码

## 连接

前面已经说过, 可以使用这条命令连接到 MySQL 数据库:

```shell
mysql -u root -p
```

参数解释:
- `-u root`: 指定登录的用户名为 `root`, 你可以将 `root` 换成你创建的其他用户名
- `-p`: 使用密码登录, 如果你没有设置密码, 则不需要此参数

对于 Windows 用户, 可以直接找到 MySQL 的 Command Line Client 工具, 打开这个工具, 输入密码即可登录

