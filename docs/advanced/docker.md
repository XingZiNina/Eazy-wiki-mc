# 安装

Docker 是一个著名的开源容器平台, 接着将会介绍关于 Docker 的安装方式

正常来说, 我们一般会在服务器上安装 Docker Engine, 安装教程请参考 [Docker 官方文档](https://docs.docker.com/engine/install/)

对于 Windows / Mac 用户, 你可以安装 Docker Desktop, 直接在 [Docker 官网](https://www.docker.com/) 安装即可

对于 Linux 用户, 安装完成后可以使用以下命令启动 Docker 服务

```shell
sudo systemctl enable docker   # 开机自启
sudo systemctl start docker
```

