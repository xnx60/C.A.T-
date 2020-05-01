# Javascript

#### API:

就是一种**接口**，可以帮助我们实现一些功能(类比充电器)

#### Web API：

浏览器的API，主要包括**DOM和BOM**.

#### 

## js的引入

1. 在HTML文件中使用script标签（内部），放于<head><body>均可

```
<script> Hello World! </script>
```

1. 引入外部js文件

```
<script src="js文件路径"></script>
```

注意：不能同时使用内部和外部，如果同时使用，则外部生效



## JS基础语法

### 数据类型

为了充分利用内存空间

在js中，**变量**只有在运行时才能**确定数据类型（根据等号后边的值）**

js是动态语言，**变量的数据类型是可以变化的**

#### 简单数据类型

##### 数字型（Number）

整数和浮点数	默认值：0

- 进制：八进制（数字前面加0），十六机制（以0x开头）

- 范围：最大值和最小值

- 三个特殊值：Infinity(无穷大)、 -Infinity、 **NaN**（非数字）

  **isNaN（）：用来判断非数字，并且返回一个值**	若是，返回false；不是数字，返回true

##### 字符串型(string)：

只要加了' ' 或者 " " 都为字符串型（多用单引号）eg：'12' 为字符串

- 用户输入框中输入的默认为字符串，做计算时要转化

- 字符串引号的嵌套：外单内双	/	外双内单（js中引号就近匹配）

- 转义字符：以 \ 开头，**但是要写到引号里面**	换行\n,缩进\t

- 检测字符串长度：length	eg：alert（num.length）

- 字符串的拼接：+ 拼接    （**任何数据类型+字符串=新的字符串**）eg：12+'12'='1212'

  ​			**变量和字符串的拼接**：**引引加加**（变量不可以直接写到字符串里面，应该通过和字符串相连的方式）

**+  号口诀：数值相加，字符相连**

> 拼接时转化为字符串最好**+连接**
>
> **自变量不能加引号，否则变成一个单纯的符号**
>
> - alert('总和是' + sum);
>
>   alert('平均' + sum / 100);  	**//实则是字符串的拼接**（**任何数据类型加字符串都等于字符串**）
>
> -  // alert(sum + average); 这样写变成求和了，字符串拼接才用加号**变量输出应该单独输出/用','分割**
>
>   ​    alert(sum);
>
>   ​    alert(average);
>
>   或者：alert（sum，average）

##### 布尔型（boolean）

​	true/false

参与加法运算时true当1看，false当0看	eg：console.log（true+1）；// 2

##### 未定义型undefined

变量声明但未给值	/	手动给

   console.log(undefined+11); // NaN

##### 空值null

 console.log(null+11);   // 11

#### 复杂数据类型

##### object

#### 获取数据类型

-  var num = 1;

   console.log(typeof num);

- 控制台颜色

- 字面量

#### 数据类型的转换

##### 转换为字符串

- 加号拼接:加空字符就好（隐式转换）
- 变量.toString()
- String(变量)

##### 转换为数字型

-  parseInt(变量)  	// 得到的为整数

  ```
  console.log(parseInt('3.14')); // 3
  console.log(parseInt('120px'));// 120 会去掉后面字母    
  console.log(parseInt('em120px'));// NaN
  ```

- parseFloat(变量) 	 //得到的为浮点数

- Number(变量)

- 利用算数运算：- *  /（隐式转换）

##### 转换为布尔型

Boolean（变量）

- 代表空、否定的值会被转换为false	 eg：'' 、0 、NaN  、null 、undefined
- 其他值均转化为true

null

### 运算符（操作符）

##### 表达式：1 + 1

##### 返回值：所有表达式都有一个返回值 

2 = 1 + 1（右边算好给左边）

#### 算术运算符

- +

> 数学运算、**字符串拼接**（其中有为字符串才可，没有字符串则单纯理解为加法运算）
>
> **任何数据类型加字符串都等于字符串**

**注意**：**避免浮点数**直接参与算数运算	/	比较 （精度问题）

##### 自增 / 自减运算符

应该与变量一起用

也是一个表达式，所以有返回值

- 前置递增：先自加1，后返回值
- 后置递增：先返回原值，后自加1

单独使用效果相同

**大多使用后置递增，且单独使用**

#### 比较运算符（关系运算符）

返回值：布尔值（true/false）

'==' :  隐式转换，会把字符串转化为数字型（**数值**等即可）

’===‘：**数据类型和数值**都一样

#### 逻辑运算符

返回值：布尔值

运用：多个条件的判断

- **布尔值**参与运算

- **值/表达式**参与运算（短路运算）

  (数字里面只有0为假)

  1. &&

     表达值1 && 表达式2  ...

     若1为真，则返回表达式2；若1为假，则返回表达式1

     （从前往后依次判断，**判断到结果后后面不再执行**）

     ```
     var a = 1 && 2;		// a = 2
     var b = 1 && 2 + 2;	// b = 4
     ```

     假：0  ''  null  undefined  NaN

  2. ||

     若1为真，则返回表达式1；若1为假，则返回表达式2

  #### 赋值运算符

  

### 流程控制

#### 顺序结构

#### 分支结构

##### if

- 一个条件 if

- 双分支：if  else	最后只能有一个执行（2选1）
- 多分支：if   else if  ...  else	(多选一)

以上，都是**按顺序判断，遇到符合的执行后则退出**整个结构，后面的不执行；

##### 三元表达式

条件表达式  ？表达式1 ：表达式2

**一般把表达式赋给一个变量**

**运用：数字补0**（通常将返回值赋给一个变量）

##### switch

多用于对变量设置**特定值**

 switch (表达式) {

​      case value1:

​              执行语句一;

​        break;

​      case value2:

​        	 执行语句二;

​        break;

​      ...

​      default:

​        执行最后语句

​    }

**注意：直接把表达式的值与value进行匹配，若匹配，直接跳到后面那个语句**

匹配时必须是**全等**（数值和数据类型都一样）

- 区分if与switch：

  if一个个按顺序判断一直到符合为止；而switch则是直接跳到符合条件（程序执行简单）。

  switch必须是全等关系才可以（值和数据类型都一样）

- 条件判断方法选择：（一般）

  一个条件用if；

  两个条件用三元 / if+else

  多个条件，用if+if else+else（**常用于范围判断**） / switch（多用于变量设定**特定值**）

  但是，一般条件比较少用if+if else+else较多（写法简单）

#### 循环结构

都有：计数器、初始化变量、操作表达式（防止死循环）

- for  循环（**重点**）：通常跟计数有关

  运用：一行打印星星，采取循环追加字符串的方法;

  ​			直接循环则不会一行打印

  双for循环：外循环执行一次，内循环执行全部

  运用：打印倒三角、九九乘法表

- while  循环（可以做条件比较复杂的循环）

  **不要忘记操作表达式（防止死循环）**

- do while  循环

  区别while：循环体至少执行一次

循环小结：

计数问题使用基本相同，但偏用for；

条件复杂时，多用while和do while

- continue和break区别

  continue：退出本次循环（**不再执行后面语句**），直接跳到i++，继续执行剩余次数循环

  break：退出整个循环



### 变量

变量就是一个容器，来保存数据的

#### 命名规则

- 变量名必须以**英文字母**、**_**、**$**开头

- 变量名可以包括**英文字母**、**_**、**$**和**数字**

- 不可以使用系统的关键字、保留字做变量名
- 严格区分大小写
- 变量名要有意义
- 采取驼峰命名法

**name有特殊含义，尽量不要使用其做变量名**

#### 变量的声明（赋值/初始化）

声明变量就是去申请内存空间

```
var a;   // 变量声明
a = 100; // 变量赋值 
或
var a = 100; // 声明并初始化
```

声明多个变量，尽量使用单一var

```
var a = 100,
    b = 200,
    c,
    d,
    e;
```

#### 声明变量的特殊情况

### 数组

存储在单个变量下一组数据的集合

一个数组里面可以放**任意数据类型**

#### 数组的创建

- 利用**new**创建数组;

```
var arr = new Array();		//创建一个空的数组
var arr = new Array(1,2,3);  //  创建数组 arr[0]=1,arr[1]=2,arr[2]=3
var arr = new Array(10);  // 若参数只有一个，则创建该数字长度的空数组，此时arr.length = 10;
```

- 利用数组字面量创建数组（**重点**）

  **千万不要忘记加'='**	( [] 要么前面有 ‘=’ ； 要么里面有东西)  

```
var arr = [];		//创建一个空的数组
var arr = [1,2,3];		//创建并初始化数组
```

#### 遍历数组

for循环（索引号从0开始）

**数组长度：数组名.length**:动态检测数组元素个数

运用：求数组的最大值

​			数组转化为字符串（加个空字符串）

​			翻转数组

​			冒泡排序

#### 数组中的新增元素

- 修改数组元素长度(length)

  **添加的是空的值（undefined）**

  ```
  var arr = {'red', 'green', 'blue'}；
  arr.length = 5; 		//将数组长度修改为5 里面有5个元素
  console.log(arr[3]);	//undefined
  ```

- 修改索引号

  **确定给一个值**

  ```
  var arr = {'red', 'green', 'blue'};
  arr[3] = 'pink';	//追加数组元素
  arr[0] = 'yellow';	//这里是替换原来数组
  arr = 'hahaha';		//不要直接给数组名赋值，否则里面的数组元素全都没有了（被覆盖了）
  ```

### 函数

**函数就是封装了一段可以被重复执行调用的代码块	目的：让大量代码重复使用**

函数的封装：就相当于把一些功能包装在函数里面，对外只提供接口（快递**打包**）

注意：函数名一般采取动词

实际开发中，经常用一个变量来接收函数的返回值，使用更简单

#### 函数使用

- 函数声明

  function 函数名（）{

  ​			函数体

  }

  注意：函数名一般是动词

  ​			**函数不调用自己不执行**	// 遇到函数先略过，遇到调用再回来

  ​			**函数体就相当于被被封装的一段代码，只是具体数字变成变量了而已**

  

- 函数调用

  函数名（）

#### 函数的参数

函数参数可以没有，也可以有（个数不限）

通过参数可以让函数执行不同的代码

- 形参：声明函数小括号里面的   （形式上的参数）

   function 函数名(形参1,形参2...) {  

  

  ​    }

- 实参：函数调用小括号里面的   （实际上的参数）

  函数名(实参1,实参2...)

**形参相当于不用声明的变量，用来接受实参**

##### **参数的匹配**

1. 个数一致：结果正常

2. 实参个数 > 形参个数: 会取到形参个数 (多的实参无人接)

3. 实参个数 < 形参个数: 返回结果为NaN (多大形参定义为undefined) 

   建议:实参 个数 = 形参个数

#### 函数的返回值

函数实现某种功能,结果需要返回给调用者(**函数里面一般不输出结果**)

function 函数名（）{

​			return 需要返回的结果

}

##### return的注意事项

- 具有终止函数的作用，函数声明中遇到return，则后面的语句将不再执行

- 只能返回一个值，若有多个用逗号隔开，以最后一个为准；**也可以利用数组输出多个结果**

- 若函数声明中没有return，则返回值为undefined;若有，则返回return后面的值

- 实际开发中,经常用一个变量来接收函数的返回结果,使用更简单

  **总结：return不仅可以退出循环，**

  ​       **还可以返回return语句中的值，并且可以结束当前代码**

  补充：break是退出循环体，continue是结束当次循环(二者主要用于循环)

#### arguments的使用

arguments就是**每个函数**的一个内置对象,存储了传递过来的所有实参(以伪数组的形式存储)

- 伪数组

  具有length的属性;  按照索引的方式存储

  但是,没有真正数组的一些方法eg: pop()  push()

- 使用

  不写形参

  可以按照数组的遍历输出所有实参

```
  // 利用函数封装,翻转任意数组(数组其实就是一个数啊,不用调动arguments)
  function reverse(arr) {
            var newArr = [];
            for (var i = arr.length - 1; i >= 0; i--) {
                newArr[newArr.length] = arr[i];
            }
            return newArr;
        }
        var arr1 = reverse([4, 2, 3, 9, 6, 4, 5]);
        alert(arr1);
        var arr2 = reverse(['123', '523']);
        alert(arr2);
        
  // 利用函数冒泡排序sort
        function sort(arr) {
            for (i = 0; i < arr.length - 1; i++) {
                for (j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        var temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            return arr;
        }
        var arr1 = sort([1, 2, 3, 6, 5, 4, 9, 8, 7]);
        console.log(arr1);
        var arr2 = sort([11, 22, 33, 44, 55, 66]);
        console.log(arr2);
```

#### 函数中可以调用另一个函数

#### 函数的两种声明方式

- **关键字**

  function  函数名() {}

  调用：函数名()

- **函数表达式**(匿名函数)

  var 变量名 = function() {}			// **声明方式与声明变量差不多,只是里面存的不是值,而是函数**

  调用: 变量名()

  注意:也可以有参数

### 作用域

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

### 预解析

js引擎运行js 分为两步：	预解析  代码执行

- 预解析： js引擎 会把所有   var   和   function   提升到**当前作用域**的最前面
- 代码执行： 按照代码书写顺序从**上往下**执行

##### 预解析

提升注意：先把外部处理好，再去处理函数内部

- 变量预解析（变量提升）：

  把所有**变量声明提升**到当前作用域的最前面  **不提升赋值操作**

  ```
          fun(); 		//报错
          var fun = function() {
                  console.log(22);
  
              }
         // 相当于执行以下代码
          var fun
          fun();
          fun = function() {
              console.log(22);
  
          }
          函数表达式 调用必须写在函数表达式下面
  ```

- 函数预解析   （函数提升）：

  把所有的**函数声明**提升到当前作用域的最前面  不调用函数

  **注意：此处函数针对用关键字声明的函数**

总结：先预解析，再按作用域链去查找

```
var a = b = c = 9;	
// 相当于 var a = 9; b = 9; c = 9;		a声明又赋值 b和c只赋值
// 集体声明 var  a = 9, b = 9, c = 9;

```

### 对象

自定义对象、内置对象、浏览器对象

保存一个值：变量；保存多个值：数组； 保存一个人的完整信息：对象

js中，对象是一组无序的**相关属性和方法**的集合，eg：字符串、数值、数组、函数等

- 属性：事物的**特征**，常用名词
- 方法：事物的**行为**，常用动词

#### 创建对象

##### 字面量创建对象{}

var 对象名 = {}  // 创建了一个空的对象

- 里面的属性或方法采取    键(属性名)值（属性值）对   的形式
- 方法名冒号后面跟的是**匿名函数**
- 调用属性：对象名. 属性名  /   对象名['属性名']
- 调用方法：对象名. 方法名()

```
var obj = {};  // 创建了一个空的对象

 var obj = {
            uname: '小梦',
            age: 14,
            sayHi: function(sang) {

            }
        }
   // 调用
   console.log(obj.uname);
   console.log(obj['uname']);
   obj.sayHi('大鱼');
```



##### 利用new Object来创建对象

var 对象名 = new Object()

对象名.属性名 = 属性值；

对象名.方法名 = 匿名函数

```
var obj = new Object(); // 创建了一个空的对象
obj.uname = '小梦';
obj.age = 14;
obj.sayHi = function() {

        }   
 // 调用
 console.log(obj.uname);
 console.log(obj['uname']);
```

调用：同上

##### 利用构造函数来创建对象

构造函数：里面**封装的是对象**（把对象中公共的属性和方法抽取出来）

function 构造函数名() {

​      **this**.属性 = 值;

​      this.方法 = function() {

​      }

​    }

​    调用:

​    **new** 构造函数名()

**注意：构造函数名首字母大写**

​			构造函数不需要return就可以返回结果， 返回的是一个对象

​			只要new了（调用函数）就创建了一个对象

**需要先new调用整个函数后，才利用名字调用里面的属性和方法**

```
 function Star(uname,age) {
            this.name = uname;
            this.age = age;
            this.sing = function(sang) {

            }
        }
        // 调用:
        var whh = new Star('哇哈哈',18); // 调用函数返回的是一个对象
        console.log(typeof whh); // object
        console.log(whh.name);
        console.log(whh['name']);
        whh.sing('大鱼');
```

##### 构造函数与对象

- 构造函数：泛指某一大类
- 对象：特指某一个，通过new关键字创建对象的过程也称为对象的实例化

##### new关键字执行过程

- new构造函数可以在内存中创建一个空的对象
- this就会指向刚才创建的新对象
- 执行构造函数里面的代码，给这个空对象添加属性和方法
- 返回这个对象

#### 遍历对象

for （变量 in 对象）{}

```
 function Star(uname,age) {
            this.name = uname;
            this.age = age;
            this.sing = function(sang) {

            }
        }
for (var k in obj) {
	console.log(k);   // k变量  输出为  属性名 
	console.log(obj[k]);  // obj[k]  得到的为  属性值/方法
}
```

#### 内置对象

js中内置的一些API

常见

##### math对象

非构造函数，调用时不用new；

不可以调用整个对象，只是调用里面的属性和方法

##### Date对象

构造函数，调用需要new；

可以调用整个对象（较少），常常日期格式化  ,   时间戳

运用：倒计时案例

##### 数组对象

**检测是否为数组**

- instanceof
- Array.isArray(参数)	// h5新增，ie9以上支持

**添加删除数组元素**

- push(参数) : 在数组末尾**添加**一个或多个数组元素

  数组名.push(添加的元素)

  返回值：新数组长度

- unshift(参数)：在数组前面**添加**一个或多个数组元素（用法同上）

- pop()：**删除**数组最后**一个**元素

  数组名.pop()

  没有参数

  返回值：删除的元素

- shift（）：**删除**数组第**一个**元素（用法同上）

运用：筛选数组

        // 筛选数组2
        var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7],
            newArr = [];  //刚开始str.length就是0   
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= 10) {
                // newArr[newArr.length] = arr[i];
                newArr.push(arr[i])
            }
        }
        console.log(newArr);
**数组排序**

- 翻转数组：arr.reverse()

- 冒泡排序：

  个位数：arr.sort()

  **多位数：**

  arr.sort(function（a，b）{

     return a-b；//	降序：return b-a；

  })

**数组索引方法**

- indexOf（数组元素）：从前面开始查找

  返回值：第一个满足条件的**索引号**   // 找不到返回值为-1

- lastIndexOf（数组元素）：从后面开始查找

运用：数组去重（利用返回值为-1）

**数组转换为字符串**

- toString()
- join('分隔符')

##### 字符串对象

**基本包装类型**：将简单数据类型包装成复杂数据类型，以可以使用里面的属性和方法

**字符串的不可变性**

不要大量拼接字符串（占用大量内存）

**根据字符串返回位置**

**根据位置返回字符**

- charAt（索引号）
- 字符名.[索引号]

运用：遍历字符串

统计出现最多的字符和次数

------

- 字符串的拼接一般要先定义一个空字符串

- **数组可以自动检测里面元素的变化**

- ```
  		// 筛选数组1
          var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7],
              j = 0,		//数组索引号必须从0开始
              newArr = [];
          for (var i = 0; i < arr.length; i++) {
              if (arr[i] >= 10) {
                  newArr[j] = arr[i];
                  j++;
              }
          }
          console.log(newArr);
          
          
          // 筛选数组2
          var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7],
              newArr = [];  //刚开始str.length就是0   
          for (var i = 0; i < arr.length; i++) {
              if (arr[i] >= 10) {
                  newArr[newArr.length] = arr[i]; // 数组可以自动检测里面元素的变化 
              }
          }
          console.log(newArr);
          
          
          // 冒泡排序
          var arr = [4, 5, 4, 6, 1, 8, 9, 10, 46];
          for (var i = 0; i < arr.length - 1; i++) { // 外层循环控制趟数
              for (var j = 0; j < arr.length - 1 - i; j++) { // 内层循环控制每一趟交换的次数
                  if (arr[j] > arr[j + 1]) {
                      var temp = arr[j]; //内部交换两个变量的值，前一个与后一个数组元素相比较
                      arr[j] = arr[j + 1];
                      arr[j + 1] = temp;
                  }
              }
          }
          alert(arr);
  ```

  

## DOM

**文档对象模型，就是一种接口**

可以改变网页的内容、结构和样式

**DOM 树**（以下内容均为对象**object**）

- 文档：一个**页面**就是一个文档，用document表示
- 元素：页面中的**标签**，用element表示

- 节点：网页中所有内容均为节点（**标签、属性、文本和注释等**），用node表示

获取元素，操作元素

#### 获取元素

##### 根据ID获取

  语法：var element = document.getElementById(id)

> ​    参数：id 是一个大小写敏感的字符串
>
> ​	返回值：是一个元素对象

console.dir():打印返回的元素对象，更好查看里面的属性和方法

##### 标签名获取

var element = document.getElementsByTagName(' ')

> 参数：字符串
>
> 返回值：元素对象的集合，以伪数组的形式存储（遍历）

注意：得到的元素对象是动态的

element.getElementsByTagName()	可以得到这个元素里面的某些标签

> element可以通过id获取

##### 类名获得（HTML5新增）

var element=getElementsByClassName('')   //类名

var element=document.querySelector('')  //选择器（需加符号 类. id#）第一个元素

var element=document.querySelectorAll('')   // 全部元素

##### 获取特殊元素

- 获取body元素:document.body
- 获取html元素：document.documentElement

#### 事件基础

##### 事件三要素

- 事件源（eg ：按钮）
- 事件类型（eg ：点击）
- 事件处理程序（eg ：弹出对话框）

##### 执行事件步骤

元素也可以不添加事件

- 获取事件源
- 注册事件（绑定事件）
- 添加事件处理程序（采取函数赋值形式）

##### 操作元素

**改变内容**

**修改元素属性**

- 普通属性

- 表单属性操作

**获取元素属性**

- element.属性
- element.getAttribute('')

**设置属性值**

- element.属性='值'
- element.setAttribute（'属性'，'值'）

**移除属性**

element.removeAttribute('属性')

**自定义属性**：

以data-开头：data-属性名

H5新增: 获取属性(data-开头)：element.dataset.属性名	/	element.dataset['属性名']

#### 节点

节点操作：获取元素更简单（主要操作元素节点）

- 节点类型nodeType
- 节点名称nodeName
- 节点值nodeValue

##### 节点层级

常见：父子兄层级关系

- 父节点：**parentNode**（最近的，若没有：获得的为空、文本节点等）

- 子节点：

  childNodes（得到的所有子节点包含元素节点、文本节点等）/ 少用

  **children**（获得元素节点）/  常用
  
  firstChild   /   lastChild（包含元素节点、文本节点等）
  
  firstElementChild   /   lastElementChild（兼容性）  实际开发**：children[]**

- 兄弟节点

  nextSibling / previousSibling  (得到的所有子节点包含元素节点、文本节点等)

  nextElementSibling / previousElementSibling(兼容性)

##### 创建和添加节点

给页面添加新元素

- 创建节点：**document.createElement('')**

- 添加节点：node.appendChild(child)	后面追加 / node(父)  child(子)

  ​					**node.insertBefore**(child，指定元素)  前面追加

##### 删除节点

node.removeChild(child)