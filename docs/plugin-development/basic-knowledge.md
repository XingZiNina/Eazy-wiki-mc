# 基础知识

在学习插件开发之前, 你需要了解一些基本的编程知识

## 基本概念

- **对象(object)/实例(instance)**: 可以理解为一个由设计图纸制成的实质物品, 每个对象都互相独立
- **类(class)**: 可以理解成产品的设计图纸, 定义了一类对象的共同特征和所有的行为
- **方法(method)**: 可以理解成产品的功能, 定义了对象的作用和行为
- **变量(variable)**: 可以理解成产品的属性, 用来存储一组可变的数据
- **常量(constant)**: 不能被修改的变量, 通常用来存储配置信息
- **注释(comment)**: 用来描述代码的作用和用法
- **实例化(instantiation)**: 即将类创建成一个具体对象的过程
- **构造器(constructor)**: 用来实例化类的特殊方法
- **抽象方法(abstract method)**: 一个定义出来但并没有具体实现代码的方法
- **抽象类(abstract class)**: 不能实例化的类, 只能被其他类继承, 它定义了一组抽象方法和抽象变量等, 子类必须实现这些方法才能实例化
- **接口(interface)**: 定义了一组抽象方法, 它可以被多个类实现
- **继承(inheritance)**: 一个类可以从另一个类继承所有属性和方法, 并可以添加自己的属性和方法
- **实现(implementation)**: 一个类可以实现一个接口, 并提供接口中定义的方法的具体实现
- **枚举(enum)**: 一种特殊的类, 它定义了一组固定的常量值, 通常用来代替整数常量
- **包(package)**: 可以理解为文件夹, 用来组织代码的一种方式, 一般来说包的命名为 `你的域名倒过来写.你的项目名` 如 `top.alazeprt.aqqbot`
- **注解(annotation)**: 用来给代码添加额外的元数据, 如类, 方法, 变量的说明, 它可以用来生成文档, 辅助工具等
- **泛型(generic)**: 一种编程技术, 允许在定义类, 方法, 接口时使用一个特殊的参数代表任意类型, 使得代码更加灵活和可复用
- **访问控制修饰符**: 用来控制类, 方法, 变量的访问权限, 有 public (公开), private (私有, 在类内可见), protected (受保护, 一般也是在包内可见), default (在包内可见) (不填即 default)
- **非访问修饰符**: 用于控制类/方法的一些特性, 在访问控制修饰符的后面
- **重载**: 一个类可以有多个同名的方法, 只要它们的参数不同即可

## 基本语法

以下是一个示例的类 (里面的 `[]` 代表的是选填参数, `[]...` 代表可以有多个相同的参数)

```java
package top.alazeprt.aqqbot;   // 定义类所在的包名, 格式: package 包名;

import java.util.Date;   // 导入一个类 (可以用 * 泛指这个包里面的所有类), 格式: import 类名;

public class Person {   // 定义类, 格式: [修饰符] class 类名 {} 
    private String name;   // 定义私有变量, 格式: [修饰符] 变量类型 变量名;
    private int age;
    private final Date birthday;   // final 修饰符意为将其定义为常量, 不可直接修改 (可以修改内部的变量/调用内部方法)
    
    public Person(String name, int age, Date birthday) {   // 定义构造器 (构造方法), 格式: [修饰符] 类名(参数列表) {}
        this.name = name;   // this 代表类里面的对象, 将参数赋值给对象的属性, 赋值格式: 属性名 = 参数;
        this.age = age;
        this.birthday = birthday;
    }
    
    public String getName() {   // 定义方法, 格式: [修饰符] 返回值类型 方法名(参数列表) {}
        return name;   // 设置方法返回值, 格式: return 返回值;
    }
    
    public int getAge() {
        return age;
    }
    
    public Date getBirthday() {
        return birthday;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}
```

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Test {

    protected static int count = 0;   // static 是一个修饰符, 表示一个静态变量, 不用实例化就可以调用

    public static void main(String[] args) {   // static 是一个修饰符, 表示一个静态方法, 不用实例化就可以调用
        // 条件语句, 格式: if (条件) {} [else if (条件) {}]... [else {}]
        if (count == 0) {
            System.out.println("0");   // 调用 System 类内的 out 静态变量的 println 方法, 附带 "0" 字符串这一参数
        } else if (count == 1) {
            System.out.println("114514");
        } else {
            System.out.println(count);
        }
        // 循环语句, 格式: for (初始化; 条件; 迭代) {}
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
        }
        List<String> list = new ArrayList<>();   // List: 一个接口, 表示列表, ArrayList: List接口的实现之一, 这一类运用了泛型, 所以要用<>表示数据类型, 实例化格式: new 类名();
        list.add("a");
        list.add("b");
        list.add("c");
        // 增强 for 循环, 格式: for (类型 变量 : 集合) {}, 可以直接遍历集合内的元素
        for (String str : list) {
            System.out.println(str);
        }
    }
}
```

## 数据类型

### 基本数据类型
- byte: 超小整数 (字节), 范围 [-128, 128), 对应 `java.lang.Byte` 类
- short: 短整数, 范围 [-32768, 32768), 对应 `java.lang.Short` 类
- int: 整数, 范围 [-2147483648, 2147483648), 对应 `java.lang.Integer` 类
- long: 长整数, 范围 [-9223372036854775808, 9223372036854775808), 对应 `java.lang.Long` 类
- float: 低精度浮点数, 对应 `java.lang.Float` 类
- double: 高精度浮点数, 对应 `java.lang.Double` 类
- boolean: 布尔值, true 或 false, 对应 `java.lang.Boolean` 类
- char: 字符, 单个 Unicode 字符, 对应 `java.lang.Character` 类

### 引用数据类型

引用数据类型指向一个对象, 包括类, 接口, 数组等, 以下是一些常见的引用数据类型:

#### String

字符串, 以下是一些常用的方法:

```java
public class Test {
    public static void main(String[] args) {
        String str = "hello world"; // 定义字符串
        System.out.println(str.length()); // String#length() 获取字符串长度
        System.out.println(str.charAt(0)); // String#charAt(int index) 获取指定索引处的字符
        System.out.println(str.substring(0, 5)); // String#substring(int beginIndex, int endIndex) 获取从0~4的字符串索引的内容 (包前不包后) (这里会返回 "hello")
        System.out.println(str.replace('l', 'x')); // String#replace(char oldChar, char newChar) 替换字符串中的字符
        System.out.println(str.toLowerCase()); // String#toLowerCase() 转换为小写
        System.out.println(str.toUpperCase()); // String#toUpperCase() 转换为大写
        System.out.println(str.contains("ll"));  // String#contains(CharSequence s) 判断是否包含指定字符串
        System.out.println(str.startsWith("he")); // String#startsWith(String prefix) 判断是否以指定字符串开头
        System.out.println(str.endsWith("ld")); // String#endsWith(String suffix) 判断是否以指定字符串结尾
        System.out.println(str.split(" ")); // String#split(String regex) 根据正则表达式分割字符串, 返回一个字符串数组 (在这里会返回 ["hello", "world"])
    }
}
```

#### List

列表, 是一个有序集合, 可以存储多个数据, 一般有 ArrayList 和 LinkedList 两种实现, 以下是一些常用的方法:

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Test {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(); // 定义 ArrayList
        list.add("a"); // add(E e) 添加元素 (E 是一个泛型, 代表你定义的列表的数据类型)
        list.add("b");
        list.add("c");
        System.out.println(list.size()); // size() 获取列表大小
        System.out.println(list.get(0)); // get(int index) 获取指定索引处的元素
        list.set(0, "x"); // set(int index, E element) 设置指定索引处的元素
        list.remove(1); // remove(int index) 删除指定索引处的元素
        list.clear(); // clear() 清空列表
        System.out.println(Arrays.toString(list.toArray())); // 打印列表内容 (格式为 [元素1, 元素2, 元素3])
    }
}
```

#### Set

集合, 是一个无序集合, 不能存储重复元素, 一般有 HashSet 和 TreeSet 两种实现, 以下是一些常用的方法:

```java
import java.util.HashSet;
import java.util.Set;

public class Test {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>(); // 定义 HashSet
        set.add("a"); // add(E e) 添加元素
        set.add("b");
        set.add("c");
        set.add("a"); // 集合不允许存储重复元素, 所以这里不会添加
        System.out.println(set.size()); // size() 获取集合大小
        System.out.println(set.contains("a")); // contains(Object o) 判断是否包含指定元素
        set.remove("b"); // remove(Object o) 删除指定元素
        set.clear(); // clear() 清空集合
    }
}
```

#### Map

map, 是一个键值对集合, 可以存储键值对, 一般有 HashMap 和 TreeMap 两种实现, 以下是一些常用的方法:

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

public class Test {
    public static void main(String[] args) {
        Map<String, String> map = new HashMap<>(); // 定义 HashMap
        map.put("a", "1"); // put(K key, V value) 添加键值对
        map.put("b", "2");
        map.put("c", "3");
        System.out.println(map.size()); // size() 获取键值对数量
        System.out.println(map.get("a")); // get(Object key) 获取指定键对应的值
        map.remove("b"); // remove(Object key) 删除指定键对应的值
        map.clear(); // clear() 清空键值对
        Set<String> keys = map.keySet(); // keySet() 获取所有键的无须集合
        Set<String> values = map.values(); // values() 获取所有值的无须集合
        Map<String, String> newMap = new ConcurrentHashMap<>(); // 定义 ConcurrentHashMap (线程安全的 HashMap, 适用于多线程环境)
        newMap.putAll(map); // putAll(Map<? extends K,? extends V> m) 批量添加键值对
        System.out.println(newMap.containsKey("a")); // containsKey(Object key) 判断是否包含指定键
        System.out.println(newMap.containsValue("1")); // containsValue(Object value) 判断是否包含指定值
        System.out.println(newMap.getOrDefault("d", "default")); // getOrDefault(Object key, V defaultValue) 获取指定键对应的值, 如果不存在则返回默认值
    }
}
```