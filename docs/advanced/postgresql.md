# PostgreSQL

## 下载 & 安装

你可以在 [PostgreSQL: Downloads](https://www.postgresql.org/download/) 页面根据你的操作系统找到下载及安装的方式

::: info 信息
Windows 安装包安装可以一路点 Next, 到设置密码那里设置一下就可以了
:::

## 配置 & 连接

安装完之后, 对于 Windows 用户, 你可以去下载 [pgAdmin](https://www.pgadmin.org/download/) 工具来管理 PostgreSQL 数据库

对于 Linux 用户, 安装好之后会自动创建 `postgres` 这个账户, 你需要先切换到这个账户再连接到数据库

```shell
sudo -i -u postgres   # 切换到 postgres 账户
psql   # 连接到数据库
```

在进入数据库后, 你可以使用以下命令修改密码:

```sql
ALTER USER postgres WITH PASSWORD 'new_password';   # 将 new_password 替换为你想要的密码
```

到此, PostgreSQL 就配置完成了, 可以通过 `\q` 命令退出数据库