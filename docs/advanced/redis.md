# Redis

## 下载 & 安装

你可以在 [Redis 官方文档](https://redis.io/docs/latest/operate/oss_and_stack/install/install-stack/) 页面根据自己的系统找到适合的下载安装教程文档

## 配置 & 连接

在 Linux 安装之后, 你可能会发现 Redis 并没有自动启动, 这时你需要手动启动 Redis 服务:

```bash
sudo systemctl enable redis-server   # 设置开机自启动 Redis 服务
sudo systemctl start redis-server
```

然后, 你可以通过以下命令连接到 Redis 服务:

```bash
redis-cli
```

接着, 你可以在 `/etc/redis/redis.conf` 里面修改 Redis 的一些配置, 你可以通过在文件中添加以下内容来设置密码:

```conf
requirepass your_password_here   
```

将这里的 `your_password_here` 修改为你的密码, 接着重启 Redis 服务:

```shell
sudo systemctl restart redis-server
```

即可