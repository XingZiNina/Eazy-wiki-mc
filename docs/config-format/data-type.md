# 数据类型

一般的配置文件的数据类型有以下几种:
- 对象 (object)
- 数组 (array / list)
- 纯量
  - 字符串 (string)
  - 整数 (integer)
  - 浮点数 (即小数, double/float)
  - 布尔值 (可为true/false, true意为真 (开启), false意为假 (关闭), boolean)
  - 空值 (null)

## 对象
对象是键值对的集合, 可以简单理解成一个映射结构, 分为值和键, 键是字符串, 值是另一个对象 (可再分)

如在 `{"person": {"name": "villager", "age": 18}}` 中, `person` 配置项是一个对象, 它的键是字符串 `person`, 值是 `{"name": "villager", "age": 18}` 是一个对象

## 数组
数组可以理解成一组纯量, 如 `["apple", "banana", "orange"]` 是一个数组, 其中包含三个字符串 `"apple"`, `"banana"`, `"orange"`

## 纯量
顾名思义, 纯量就是一个具体的值 (不可再分), 如 `"hello"`, `123`, `3.14`, `true`, `null` 都是纯量