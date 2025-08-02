# 常用命令

:::tip 提示
这里的命令均为 SQL 语句, 一般来说每个语句结束, 后面都要加 `;`
:::

## 数据库

数据库可以理解为一个 Excel 文件, 里面包含许多数据表

```sql
show databases;   # 查看所有数据库
use table_name;   # 选择你要操作的数据库 (将 table_name 替换为你要选择的数据库名)
create database table_name;   # 创建数据库 (将 table_name 替换为你要创建的数据库名)
create database if not exists table_name;   # 创建数据库, 如果数据库已存在则不创建 (将 table_name 替换为你要创建的数据库名)
drop database table_name;   # 删除数据库 (将 table_name 替换为你要删除的数据库名)
```

## 数据表

数据表就是存储数据的地方, 它的列代表的是某一个字段的值, 第一行是字段名, 后面的行则对应着每一个数据, 如:

| id | name    | age |
|----|---------|-----|
| 1  | Alice   | 20  |
| 2  | Bob     | 25  |
| 3  | Charlie | 30  |

这就是一个示例的数据表, 其中 id, name, age 都是字段, 1, Alice, 20, 2, Bob, 25, 3, Charlie, 30 都是数据

以下是一些数据表操作的命令:

```sql
create table table_name (         # 将 table_name 替换为你要创建的表名
    column1 datatype constraint,  # column1 为列的字段名, 自选, datatype 为数据类型
    column2 datatype constraint,  # 与上述同理, 每一列要用逗号隔开, 其中 constraint 为约束条件
    column3 datatype              # 同上, 约束条件可以不填
);   # 创建数据表

drop table table_name;   # 删除数据表 (将 table_name 替换为你要删除的表名)

desc table_name;   # 查看数据表结构 (将 table_name 替换为你要查看的表名)

truncate table table_name;   # 清空数据表 (将 table_name 替换为你要清空的表名)

alter table table_name    # 这里未加逗号, 代表后面还有参数 (将 table_name 替换为你要修改的表名)
add column column_name datatype;   # 添加列 (column_name 为列名, datatype 为数据类型)

alter table table_name drop column column_name;   # 删除列 (将 column_name 替换为你要删除的列名)

alter table table_name modify column column_name datatype;   # 修改某一列的数据类型 (将 column_name 替换为你要修改的列名, datatype 为数据类型)
```

## 数据

数据一般会存储在数据表内, 接下来会介绍一些有关操作数据的命令:

```sql
insert into table_name (column1, column2, column3)  # 将 table_name 替换为你要插入数据的表名, column1, column2, column3 为你插入的列的字段名
values (value1, value2, value3);                    # 插入数据 (将value1, value2, value3 替换为你想要插入的数据)

select column1, column2 from table_name;   # 查询特定列的所有数据 (将 table_name 替换为你要查询的表名, column1, column2 为你要查询的列的字段名)

select * from table_name;   # 查询所有数据 (将 table_name 替换为你要查询的表名)

select * from table_name where column1 = value1;   # 查询特定条件的数据 (只有满足 where 后面的条件才会输出, 将 table_name 替换为你要查询的表名, column1 为你要查询的列的字段名, value1 为你要查询的值)

select * from table_name limit 10;   # 查询前 10 条数据 (将 table_name 替换为你要查询的表名)

select * from table_name order by column1;   # 查询数据并排序 (将 table_name 替换为你要查询的表名, column1 为你要排序的列的字段名)

update table_name set column1 = value1 # 更新所有 column1 列的数据为 value1

update table_name set column1 = value1    # 将 table_name 替换为你要更新的表名, column1 为你要更新的列的字段名, value1 为你要更新的值
                  where column2 = value2;   # 更新符合特定条件的数据 (此处是要符合字段 column2 的值为 value2 的数据才会更新, column2 为你要查询的列的字段名, value2 为你要查询的值)
                  
delete from table_name;   # 删除所有数据 (将 table_name 替换为你要删除数据的表名)

delete from table_name where column1 = value1;   # 删除特定条件的数据 (符合 column1 字段值为 value1 的数据才会被删除, 将 table_name 替换为你要删除数据的表名, column1 为你要查询的列的字段名, value1 为你要查询的值)
```

:::tip 提示
where 一般用于匹配特定条件, 通常情况下可以配合大部分命令一起使用, 同时 where 语句可以用 and 和 or 表示条件间的逻辑关系
:::

## 导入

```sql
source ~/file_name.sql;   # 在当前情境下 (未选择任何数据库) 导入 SQL 文件 (将 ~/file_name.sql 替换为你要导入的 SQL 文件的路径)
```

:::warning 警告
建议在导入前创建一个数据库并选择这个数据库, 否则 SQL 语句 如果只有数据表的创建/数据添加 就无法正常执行 (数据表操作必须在数据库内)
:::

## 导出

### MySQL

```shell
# 请将 root 改为你的 MySQL 数据库用户名, file_name.sql 改为你要导出到的文件的名称
mysqldump -u root -p database_name > file_name.sql;   # 将数据库 database_name 导出为 SQL 文件 (将 database_name 替换为你要导出的数据库名)
mysqldump -u root -p database_name table_name > file_name.sql;   # 将数据库 database_name 中的数据表 table_name 导出为 SQL 文件 (将 database_name 替换为你要导出的数据库名, table_name 替换为你要导出的表名)
mysqldump -u root -p --all-databases > file_name.sql;   # 将所有数据库导出为 SQL 文件
```

### PostgreSQL

```shell
# 请将 root 改为你的 PostgreSQL 数据库用户名, file_name.sql 改为你要导出到的文件的名称
pg_dump -U root database_name -F p -f file_name.sql;   # 将数据库 database_name 导出为 SQL 文件 (将 database_name 替换为你要导出的数据库名)
pg_dump -U root database_name -t table_name -f file_name.sql;   # 将数据库 database_name 中的数据表 table_name 导出为 SQL 文件 (将 database_name 替换为你要导出的数据库名, table_name 替换为你要导出的表名)
```

