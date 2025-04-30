## JS——⭐⭐⭐⭐

详细参考[4]<font color='blue'> 菜鸟教程</font>

详细参考[5]<font color='blue'> 后盾人</font>

### 基本

- [x] 基本用法

- [x] 编译器

- [x] JS与Chrome

- [x] 输出

- [x] 语法

- [x] 语句

- [x] 注释

- [x] 变量

- [x] 数据类型

- [x] 对象

- [x] 函数

  - 函数提升：函数可以在声明之前调用

  - 函数自调用/自执行：通过将函数的声明和调用合并在一起完成封装提升程序可维护度

    ```js
    //两种格式
    (function(){...})()//前面的()是函数声明，后面()则是执行函数
    (function(){...}())//外面的()是函数声明，里面()则是执行函数
    //传参范例
    (function(a,b){return a*b})(1,2)
    (function(a,b){return a*b}(1,2))  
    //这种自调用函数一般都不会再外面使用所以几乎匿名函数，但是如果要在外面调用的话可以选择在function后面加上函数名字，然后就可以实现外部调用了。          
    ```

  - 闭包：将函数内部和函数外部连接起来的桥梁

    - 定义：是指一个函数可以记住其外部变量并可以访问这些变量

    - ==问题：为什么JS中所有函数都是闭包的==：JS中的函数会自动通过隐藏的[[Environment]]属性(词法环境对象)记住创建他们的位置：当前函数的词法环境对象 ==>外层函数的词法环境对象 ==>全局的词法环境对象，所以它们都可以访问外部变量

    详细参考[6]<font color="blue">JS中所有函数都是闭包的？</font>

- [x] 作用域

- [x] 事件：可以被JS侦测到的行为，是一种“触发-响应”机制

  - 三要素
  - 事件源：触发事件的元素
  - 事件类型：事件的触发方式（例如鼠标点击或者键盘点击）
  - 事件处理程序：事件触发之后要执行的代码（函数形式）

- [x] 字符串

- [x] 字符串模板

- [x] 运算符

- [x] 比较

  - 比较运算符：\==、\=\==、!=、!==、>、<、>=、<=

  - 逻辑运算符：&&、||、！

  - 条件运算符：？a:b

- [x] 条件语句

  - if…else

- [x] switch语句

  ```js
  switch(a){
  	case 0:...
  	break;
  	...
  	default:...
  }
  ```

- [x] for循环

  - 普通for循环

  ```js
  for(var i=0;i<n;i++){}
  ```

  - for/in循环:遍历对象属性:具体见show.html

- [x] while循环

  ```js
  while(条件){执行语句}
  ```

  ```js
  do{执行语句}while(条件)
  ```

- [x] break 和 continue语句

  - break:跳出此循环

  - continue:跳过此段代码，但是继续此循环

  - 加标签的break和continue:具体见show.html

- [x] typeof/null/undefined

- [x] 类型转换

  - 其他->字符串：String(内容)|对象.toString();

  - 字符串->数字

  ```js
  Number("3.14")    // 返回 3.14
  Number(" ")       // 返回 0
  Number("")        // 返回 0
  Number("99 88")   // 返回 NaN,无意义
  ```

  ```js
  var y = "5";
  var x = + y;//利用一元运算符+转化
  ```

- [x] 正则表达式

- [x] 错误:try\throw\catch\finally

- [x] 调试

- [x] 变量提升:执行JS函数时没有赋值的变量声明会被提到最前面，赋值的变量声明不会提前。

- [x] 严格模式：“use strict”

  - 不允许使用未声明的变量
  - 不允许删除(delete)变量或者对象
  - 不允许删除函数
  - 不允许变量重名
  - 不允许使用转义字符
  - 变量名不能使用“eval”或者“arguments”
  - 保留关键字不能用作变量名字或者函数名字

- [x] 使用误区

  - if里面的判断语句是两个=；
  - 比较两个变量的时候要保证变量类型一致；
  - 使用“+”符号的时候注意区分数字相加和字符串连接；
  - 浮点型数据计算时会用64位储存，所以最好先转化成整型再进行计算；
  - 输出字符串的时候不要直接回车换行，要使用换行符号“\n”

- [x] 表单

- [x] 表单验证

- [x] 保留关键字

- [x] this

- [x] let 和const

- [x] JSON：javasciipt object notation,一种轻量级数据交换格式

- [x] void:无返回值函数

- [x] 代码规范

  - 命名变量：全局/常量全大写、其余camelCase(驼峰法)
  - 通常运算符前后添加空格
  - 代码缩进用四个空格，不推荐tap(不同编译器对tap解析不同)

### 类

- [x] 类
- [x] 类的继承
- [x] 静态方法

### DOM和BOM

- ####  DOM：Document Object Model(文档对象模型)

==DOM到底是什么:==一种网络文档的编程接口，方便编写程序去修改文档的结构、风格和内容，编程语言就可以和页面进行交互；

==抽象—>形象==：大厦整体

![image-20250307125446613](../../新阶段学习/study/image-20250307125446613.png)

对大厦的管理（操作DOM—api）

- 查找元素（寻找房间）：根据CSS选择器查找/根据queryDelector找到第一个匹配的元素/querySelectorAll找到所有匹配的元素=根据房间号或者楼层对应位置找房间；
- 修改房间（改造房间）：改变元素内容样式或者属性:innerHTML/textContent/style等；
- 添加和删除元素（新建一个房间或者拆掉一个房间）：添加或者删除DOM树中的元素
  - 例如：document.createElement('div')可以创建一个新的<div>元素
  - 使用 parentElement.removeChild(childElement)可以删除一个元素。

外来访客/内部和大厦之间的互动（事件处理/监听—api）

- 例如：着火触发烟雾报警器/有人来探亲—按门铃

- 使用 button.addEventListener('click', function() { /* 处理点击事件 */ }) 可以为按钮添加一个点击事件监听器，当用户点击按钮时，就会执行相应的处理函数。

- [x] HTML DOM API:由一系列接口组成，定义了HTML中的每一个元素的功能以及他们所依赖的任何支持类型和接口

  - 功能

    - 通过DOM访问和控制HTML元素
    - 访问和操作表单数据
    - 在页面上拖放内容
    - 访问浏览器导航历史记录
    - 支持和关联其他API的接口

  - 几种常见接口

    详细参考[7]<font color="blue">HTML DOM API</font>

    ==问题==：Web组件的封装冲突

    ==答==：内部和外部冲突的时候(全局样式)，封装会保护我们自定义的元素不被影响；那如果我就想要外部CSS样式作用到我的封装自定义元素咋办呢？参考我的笔记中JS相关模块代码实例。

- [x] DOM html和css

- [x] DOM事件

- [x] DOM EventListener

==问题：==如果嵌套点击事件发生，那么触发顺序是什么呢

==答==：根据需求设置冒泡(false,从内到外)或者捕获(true,从外到内)，参考我的JS相关模块代码。

- [x] DOM 元素

- [x] HTML Collection 对象

- [x] NodeList对象

- [x] getElementsByTagName和querySelectorAll的区别

  - 返回值类型的区别
    - getElementsByTagName返回一个HTMLCollection对象，且相同对象的长度也会自动更新
    - querySelectorAll返回一个NodeList对象，但是相同对象的长度不会自动更新
  - 选择器的灵活性
    - getElementsByTagName只能通过标签名字来选取元素(只能选取DOM中的元素节点，collection是元素节点的集合)
    - querySelectorAll可以选取DOM树中的所有节点(nodelist是文档节点的集合)

- #### BOM

  ![bom&dom](../../新阶段学习/study/bom&dom.jpg)

  详细参考[8]<font color="blue">DOM和BOM是什么，有什么作用?</font>

- #### 两者联系

  - 作用范围区别：DOM是面对HTML 文档操作，但是BOM是面对浏览器操作

  - 关系：BOM包含了DOM，主要操控一个网页再浏览器中进行的一些操作，比如页面的跳转前进后退等

    ![bom](../../新阶段学习/study/bom.png)

### 接口请求

- [x] Ajax（异步JavaScript和XML）

- [x] Fetch

### 更多前端语言和标准

了解更多前端的语言及标准——TypeScript和ES6

#### TypeScript

##### 和JS的区别：支持JS中的所有语法，并且在此基础上面扩展了更多的面向对象编程(OOP)的功能

##### TS核心概念

- 基本语法——变量或者属性名字：数据类型(例如：const name:string='zrc';)

- ==为什么要这样“多此一举”呢？==

  ==答：==JS中没有详细的数据变量类型，var可以涵盖很多，灵活性很强，但是当项目规模宏大的时候变量类型也会随之变多，模块之间的交互关系就会变得复杂，这时候这种灵活性就可能会造成很多连锁麻烦

##### TS环境配置

- 首先需要安装Node.js，在包管理nmp中执行安装TypeScript命令
- 测试文件：在vscode里面创建一个.ts文件并且打开对应终端之后输入执行命令行tsc xxx.ts即可
- 测试结果：相同根目录里面出现一个js格式的文件xxx.js，打开之后发现是由刚刚那个xxx.ts变化得来的xxx.js文件，内容是一样的，只是格式不一样

详细TypeScript参考[9] <font color='blue'>TypeScript</font>

#### ES6( ECMAScript 2015)

##### 和JS的关系：是JS语言的下一个标准或者说是语言规范

##### 部分新特性：

==目前我使用的VScode已经支持ES6标准==

- ES6中的let命令，声明变量，用法和var差不多，但是let是为JavaScript新增了块级作用域
  而在ES5中是没有块级作用域的 

- ES6中变量的解构赋值，比如：var [a,b,c] = [0,1,2]，而ES5中是需要一个一个的赋值的

- ES6中不再像ES5一样使用原型链实现继承，而是引入Class这个概念，听起来和Java中的面向对象编程的语法有些像，但是二者是不一样的。

- ES6中的函数定义也不再使用关键字function，而是利用了=>来进行定义；

  ```js
  // ES5
  var add = function(a, b) {
      return a + b;
  };
  
  // ES6
  var add = (a, b) => a + b;
  ```

- ES6中可以设置默认函数参数，如function A（x,y=9）{};

##### 为什么要单独的强调ES6呢

- 了解到目前国际最新的标准已经不是ES6了，但是我们还是单拎出来这一标准由于他的里程碑式作用，它新引入了很多经常使用的新特性，就像上面我搜到的块级作用域、箭头函数以及类和继承机制等，从此让我们的JS表达能力和开发效率大大提升，代码编写更加简洁、高效并且也容易维护

详细ES6参考[10] <font color='blue'>ECMAScript 6 入门</font>

### 异步编程

> 异步：主线程进行的同时，存在多个子线程也在进行

>  同步：只有一个线程，多个任务是排队逐个完成的

- 回调函数：在启动一个异步任务的时候就告诉这个回调函数，在你完成了这个任务之后要做些什么，这样主线程就不需要关注异步任务；

### Promise

> ES6提供的类，为了更加优雅的书写复杂的异步任务

- 格式

  ```js
  new Promise(function(resolve,reject){要做的事情});
  ```

- 需要使用这个的情况：见代码实例

#### promise的构造函数

> 用于创建Promise对象的内置构造函数

- 起始函数

  > promise的内置构造函数会接受一个函数作为参数，这个被接受的函数是和构造函数同步的并且会立即被执行，称之为起始函数

  - 起始函数包含两个参数：reslove和和 reject，分别表示 Promise 成功并传递成功结果和失败的状态并传递失败的原因

- Promise对象

  > 是由Promise构造函数返回的对象

  - 几种方法
    - then：用于处理 Promise 成功状态的回调函数。
    - catch：用于处理 Promise 失败状态的回调函数。
    - finally：无论 Promise 是成功还是失败，都会执行的回调函数。

### 事件机制

- [x] 事件流

  >  通常事件触发产生三个阶段：事件捕获阶段->处于目标阶段->事件冒泡阶段
  >
  >  >  当事件触发的时候，先从DOM树顶层(document)开始往下逐层==捕获==目标事件源元素,之后==处于目标阶段==，之后该目标事件会随着DOM树的层级路径由字节点向父节点进行层层传递直至到达根节点

  - 从三个阶段的分析可以看出，捕获阶段和冒泡阶段都是会经历目标事件的传递，所以我们平时==绑定的事件==就可以绑定在事件捕获阶段或者冒泡阶段

  - 常用事件绑定类型

    ```js
    //1)DOM0级
    document.onclick=function(){}//绑定
    document.onclick=null//移除
    //2)DOM2级
    document.addEventListener(function(){},false)//绑定，冒泡
    document.removeEventListener(function(){},false)//移除，冒泡
    ```

  - 事件绑定方式

    ```js
    1)作为属性，写在HTML元素上面
    2)document.onclick=function(){}
    3)document.addEventListener(function(){},false)//冒泡
    ```

- [x] 绑定元素和目标元素

  - 绑定元素：把事件处理函数绑定在元素上面(动词性名词，针对后台)
  - 目标元素：用户操作界面，用户触发的元素(名词性名词，针对界面)

  ==个人理解:==角度不同吧；绑定元素是以绑定函数的角度看，它和它绑定的后台函数是并存的，绑定元素是寄存函数的载体，函数是他的灵魂；而目标元素是发自用户的，用户点击一个元素之后，后台会根据这个元素来一次对比查找DOM树中的它并执行相应的行为

- [x] 事件的执行顺序

  - 所有绑定方式都遵循——对于同一个绑定元素，都是遵循先绑定的先执行的原则
  - 如果是以普通的onclick方式绑定的，对于同一个元素来说，如果有多个onclick绑定函数，那么就只会执行一次，并且是最后一个onclick函数；但是如果是以addEventListener方式绑定的话那么同一个元素被绑定不管多少次都会按顺序执行
  - 如果直接在DOM中使用onclick，那么onclick的绑定是要早于addEventListener的

- [x] 事件对象event

  > event.target：指的是==触发事件==的那个节点，即事件最初发生的节点(最里层的节点)
  >
  > event.currentTarget：指的是正在执行的==监听函数==所绑定的那个节点。
  >
  > event.path：指的是事件==冒泡==的顺序。
  >
  > event.timeStamp：指的是从事件绑定完成到此次事件触发的时间，单位是毫秒。
  >
  > event.type：事件的类型，比如click，input
  >
  > event.isTrusted：表示事件是否是真实用户触发，true表示是真实用户触发，false表示脚本触发。
  >
  > event.preventDefault()：取消事件的默认行为，比如 a标签 默认跳转到一个新网址，如果阻止默认行为，就不会跳转。
  >
  > event.stopPropagation()：当有[event对象](https://zhida.zhihu.com/search?content_id=4584233&content_type=Article&match_order=1&q=event对象&zhida_source=entity)时，阻止事件冒泡。
  >
  > window.event.cancelBubble = true：当没有event对象时，阻止事件冒泡（一般用在IE浏览器）。
  >
  > event.stopImmediatePropagation()：阻止同一个事件的其他监听函数被调用。比如对同一个元素绑定了两个click事件，如果在第一个[click事件](https://zhida.zhihu.com/search?content_id=4584233&content_type=Article&match_order=2&q=click事件&zhida_source=entity)写了event.stopImmediatePropagation()，那么它的其他点击事件就都不会被触发。

- [x] 事件委托(事件代理)

  > 存在目的：一种DOM模式，为了减少绑定元素个数和事件处理函数产生

  > 方式：借用事件冒泡或者事件捕获机制

  > 适用场景：当我们存在有很多以类似方式处理的元素的时候，那么就不必为每一个元素都分配一个事件处理程序——而是将单个处理程序放在它们的共同祖先上

详细参考[11] <font color='blue'>深入理解js事件机制</font>

### 性能优化

> 目的：需要对频繁触发事件进行控制，提升性能和用户体验

- [x] 防抖

- [x] 节流

- [x] 二者区别

  > 触发方式上：防抖是事件停止触发之后设置缓冲时间之后执行函数，但是节流是在一定时间间隔之内只会执行一次函数

  > 应用场景上：防抖适用于在用户停止输入或者操作之后才进行处理的场景，比如表单验证；节流适用于在一段时间内只执行一次的场景，比如按钮防止多次点击

详细参考[12] <font color='blue'>防抖节流区别</font>基本

# 补充知识点

- [x] 深挖document.write( )

  - 误区：认为只是插入网页书写文档的一个作用

  - 深究

    ```js
    //不会打开新文档的情况：相当于当前页面已经执行了document.open()，这样调用write之后会再自动调用close()告诉浏览器完成页面加载
    //直接书写在<script>标签的第一层，不被函数包围的时候
    
    //会出现情况页面并且被代替的情况：相当于是再当前页面中重现调用了一个document.open()打开了一个新页面
    //被包围在函数内
    ```

    详细参考[2]<font color='blue'>Document：write() 方法</font>

- [x] 关于for in和for of

  ```js
  var obj = {a:1, b:2, c:3}; 
  for (key in obj) {
    document.write(key);
  }//遍历对象属性
  ```

  ```js
  var array1 = ['a', 'b', 'c'];
  for (key of array1) {
    document.write(key);
  }//遍历数组数值
  ```

- [x] 更多正则表达式可参考[3] <font color='blue'>正则表达式</font>

- [x] 探究JS表单的时候出现点击按钮刷新页面的bug

  - 在W3C浏览器中Button的type默认是submit提交表单类型，点击之后就会刷新当前页面
  - 只要使用submit属性，提交表单的时候就会刷新页面，所以我们这里把type设置成button这种方法虽然不会刷新页面了，但是无法实现提交表单的作用
  - 想要又能提交表单又不会刷新页面就可以学习后面内容——接口请求(Ajax)

- [x] JSON

  ```
  使用范围
  - 用于前后端之间的数据传输/存储和交换数据
  - 获取来自服务器的数据
  - 被使用在网页上面——实现动态交互和更新页面内容
  ```

  ```
  优势：
  简洁易读:JSON 的语法比较简洁，易于阅读和编写
  解析速度快:JSON 的解析速度通常比其他数据格式更快
  兼容性好:JSON和JavaScript的兼容性非常好，因为它们共享着相同的语法和数据结构
  ```

  - parse和eval的区别

    ```
    eval兼容性更强：可以解析格式不那么规范的JSON
    parse和eval都可以使用格式'{}'
    但是eval还可以格外使用格式"{}"
    ```

    ```
    eval安全性不够强
    比如出现第三方链接的时候会跳转网页
    ```

    详细参考[4] <font color='blue'>parse和eval</font>

- [x] 键值对：计算机系统和应用程序中的一种数据表示形式，格式为<属性名，值>

- [x] HTTP Cookie：服务器发送到用户浏览器并保存在本地的一小块数据

  简单例子：登陆教务系统的时候会出现自动保存密码

  ```
  会话状态管理：用户登录状态/购物车/游戏分数或者其他需要记录的信息
  个性化设置：用户自定义设置/主题和其他设置
  浏览器行为跟踪：如跟踪分析用户行为等
  ```

  ```
  onload/onunload:会在用户刷新页面或者卸载页面的时候出现，但是浏览器为了避免不必要的干扰，通常不允许unload事件处理程序中会阻塞页面卸载的操作，就比如说弹窗这种就可能无法显示，会干扰用体验，所以会使用beforeunload事件弹出提示，因为它可以允许一个返回值
  ```

- [x] 外部Js代码和内部js代码以及HTML解析等的执行顺序

  - 不使用额外属性的时候
    - 浏览器开始解析HTML文件，一次构建DOM树
    - 解析到<body>里面的HTML内容，创建对应的元素并且添加到DOM树中
    - 遇到外部js代码引入的代码，暂停HTML的解析，发起对外部js文件的请求
    - 等待外部js代码下载完毕之后分别对应执行
    - 若HTML还有后续内容就继续解析剩余的HTML代码
  - 使用async属性
    - 浏览器开始解析HTML文件，构建DOM树
    - 解析到<body>里面的HTML内容持续创建相应的元素并且添加到DOM树中
    - 遇到带有async属性的外部js文件的时候，继续解析HTML代码并且同时在后台下载外部js文件
    - 若js文件下载完成立刻执行该脚本，不管HTML解析进程如何，两个是独立的任务线
  - 使用defer属性
    - 浏览器开始解析HTML文件构建DOM树
    - 解析<body>里卖弄的HTML内容并且持续创建相应的元素并且添加到DOM树中
    - 遇到带有defer属性的外部Js文件，继续解析HTML代码并且后台开始下载外部js文件
    - 完成HTML解析构建完整的DOM树
    - 执行外部js代码

  ==查看==：![image-20250309143339592](image-20250309143339592.png)

- show.html:0.6ms+3ms=3.6ms![image-20250309143728308](C:/Users/张若晨/AppData/Roaming/Typora/typora-user-images/image-20250309143728308.png)

## 接口请求

- [ ] Ajax（异步JavaScript和XML）

  - 作用：允许浏览器与服务器之间进行==异步数据交互（等待服务器响应的同时继续与页面进行其他交互）==，可以在不重新加载整个页面的情况下更新页面的部分内容

  - 关键技术:XHR(浏览器内置对象，允许JS在后台异步向服务器发送请求并且结束服务器返回的数据)+JS(编写客户端脚本，用于调用XHR对象、处理服务器返回的数据以及更新DOM树中的部分内容)

  - 数据格式：XHR/JSON等；

  - 好处：实现动态加载数据、实时验证、提高用户体验

  - 两种请求

    ```
    GET请求：将序列化后的表单数据附加到URL后面,但是这样就会暴露数据，不安全
    
    POST请求：为请求头（比如Content-Type）赋值（比如：application/x-www-form-urlencoded）之后，将序列化之后的表单数据作为请求体发送
    Content-Type请求头：用于指定请求体中的数据格式，服务器会根据这个信息来解析请求体中的数据（也就是服务器在面对不同请求头的时候会有不同的解析方式）
    application/x-www-form-urlencoded
    用途：这是表单数据默认的编码方式，当使用POST方式提交数据时，浏览器会自动将数据编码为这种格式。
    格式：数据会被编码为键值对的形式，键和值之间用等号（=）连接，不同的键值对之间用和号（&）分隔，同时会对特殊字符进行URL编码。
    例如：username=john&password=123456。
    application/json
    用途：在前后端分离的开发中，常用于传递 JSON 格式的数据。JSON 是一种轻量级的数据交换格式，易于阅读和编写，也便于机器解析和生成。
    格式：请求体中的数据是一个合法的 JSON 对象或数组。例如：{"username": "john", "password": "123456"}。
    ```

  详细参考[5] <font color='blue'>html如何发送ajax请求</font>

  以及[6] <font color='blue'>ajax基础知识总结</font>

- [ ] Fetch：一种现代化网络请求方法，通过使用Promise处理异步操作

  详细参考[7]<font color='blue'>fetch使用方法</font>

- [ ] 区别

  ```
  Fetch简洁而直观，支持各种功能和API，如设置请求头、传递参数、处理流数据、上传下载文件等。Fetch的优势在于其基于Promise的设计，使得异步操作更加简洁易懂。
  Ajax可以实现页面的无刷新更新和动态交互。
  
  Ajax逐渐被Fetch和Axios等更现代的工具所替代。
  ```

  详细参考[8]<font color='blue'>从ajax到fetch的理解</font>

- [ ] 补充

  - XMLHttpRequest(XHR)对象：用于与服务器进行交互，通过XML就可以在不刷新的情况下请求特定URL获取数据，这就允许了网页在不影响用户操作的情况下更新页面的局部内容

  - HTTP状态码

    ```
    304:未修改，这时候客户端会使用本地缓存的资源，因此即使状态码为304仍然能够正常显示响应内容。
    200：请求成功，这时服务器成功处理了客户端的请求，并且可以正常返回客户端所请求的资源。
    ```

    

# 参考资料

1. [JS教程](https://www.runoob.com/js)——菜鸟教程

2. [Document：write() 方法](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/write)——MDN

3. [正则表达式](https://www.runoob.com/regexp/regexp-syntax.html)——菜鸟教程

4. [parse和eval](https://www.cnblogs.com/lovesong/p/6036650.html)

5. [html如何发送ajax接口请求](/www.cnblogs.com/yilangcode/p/18085967)——博客园

6. [ajax基础知识总结](https://juejin.cn/post/7243240589293617213?searchId=20250302150107FC85D05D9114803611C4)——稀土掘金

7. [fetch使用方法](https://juejin.cn/post/7125361809669750791)——稀土掘金

8. [从ajax到fetch的理解](https://juejin.cn/post/6844903762008473607?searchId=2025030215051979AE477372BA93351D0E)
