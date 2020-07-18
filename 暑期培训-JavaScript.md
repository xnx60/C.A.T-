#### 栈和堆

##### 堆：

- 是动态分配内存，**内存大小不一，也不会自动释放。** 
- 混沌，杂乱无章，方便存储和开辟内存空间
- **引用数据类型**储存于堆中（实际：引用数据类型的地址是储存于栈中，需要引用数据类型的值的时候，再从栈中获取对象的地址，最后再根据地址去堆中找需要的数据）

##### 栈：

- 是自动分配**相对固定大小的内存空间，并由系统自动释放。**
-  便于管理 
- **基本数据类型**均储存一栈中

#### 属性描述符

 属性在创建时带有的一些特征值，JavaScript通过这些特征值来**定义它们的形为**。

ES5在定义只有内部才用的特性时，描述了属性的各种特征。

这些特性也就是属性描述符。 

#### call（）方法用法

##### 在一个对象中使用另一个对象的方法

实例：在person1中调用person中的方法

```
var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
person.fullName.call(person1);  // 将返回 "Bill Gates"
```

call也可传入参数：被调用者.被调用者的方法.call（调用者，参数1，参数2，...）

```
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"Bill",
  lastName: "Gates"
}
person.fullName.call(person1, "Seattle", "USA");
```



##### 在一个对象中调用另一个函数

实例1： 函数引用.call(调用者,参数1,参数2,参数3)  

```
        function Person(name, age, job) {
            this.name = name;
            this.age = age;
            this.job = job;
            this.sayName = function() {
                alert(this.name)
            };
        }
        var o = new Object();
        Person.call(o, 'Mary', '12', 'Nurse');
        o.sayName(); // 'Mary'
```

实例2：当被调用函数没有确定时，必须使用call（）方法来调用

【 调用者.函数（参数1，参数2，参数3） ==  函数.call（调用者，参数1，参数2，参数3） 】

```

var each = function(array,fn){
	for(var index in array){
		fn.call(null,index,array[index]);
	}
}
each([15,20,30],function(index,ele){
	document.write("第"+index+"个元素是"+ele+"<br />");
}
// 第0个元素是15
// 第1个元素是20
// 第2个元素是30

```

注：其实方法也是函数，上面两种实则一样



#### 执行环境（执行上下文）

-  **执行环境** 定义了变量或函数有权访问的其他数据 
-  当执行到一段可执行代码时，会创建一个对应的执行环境，即执行上下文 
-  执行上下文创建的时候，**变量对象**和**作用域链**就会被创建 

##### 变量对象

 每一个执行上下文都有一个对应的变量对象，该上下文内定义的**所有变量和函数**都保存在这个变量对象里 

##### 活动对象

 当这段代码进入到执行阶段，变量对象就会变成活动对象 

#### 作用域

就是**代码名字(变量)**在哪个范围内起作用效果

目的:减少命名冲突,提高程序可靠性

- 全局作用域: 	整个script标签	/		单独一个js文件
- 局部作用域:	在函数内部   (函数作用域)

##### 变量的作用域

- 全局变量:	在全局作用域下的变量    **在全局下都可以使用(包括函数内部)**

  **注意:  在函数内部没有声明直接赋值的变量也是全局变量**

- 局部变量:	在局部作用域	(函数内部)的变量	(**外部是不可以使用的**)

  **注意:  函数形参也可以看做局部变量**

- 执行效率：全局比较占内春资源

- es6之前没有块级作用域

##### 作用域链（就近原则）

对象：函数内部变量

**内部函数**访问外部函数变量，采取链式查找来决定取值（**就近原则**）

站在目标出发，一层一层往外查找（注意先看调用了没）

#### 事件处理程序

##### html事件处理程序

- html事件处理程序就是将事件写在元素的标签内，当作元素属性来用



### Json和Ajax

#### json

-  是一种轻量级的数据格式 ，简化复杂数据结构； 是一个序列化的**对象**或**数组**。 

-  JSON 是 JS 对象的字符串表示法 

- json.stringify():将对象序列化为**json字符串**

- json.parse():将json字符串解析为**js对象**

  注意：

  - json不支持变量、函数或对象实例
  - json字符串必须使用双引号
  - 末尾没有分号

