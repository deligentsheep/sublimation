# 1.大方向

## 前端开发

# 2.相关知识

## 已掌握

前端大部分HTML基础以及部分CSS和JS基础、可以做出简单的静态页面、实现过SQL Server与QT的基础连接

## 未掌握

部分CSS和JS基础、组件的更多样化、动态页面的实现等

# 2.细化路线

详细文档参考[1]<font color='blue'> 前端学习路线</font>

详细前端项目练习参考[2]<font color='blue'> 50个前端小项目</font>

## HTML——⭐

- [x] 常用标签

- [x] 块级元素和行级元素

- [x] HTML标签样式

- [x] 表单

- [x] SEO搜索引擎优化

  详细参考[3]<font color=blue>SEO</font>

## CSS——⭐⭐

- [x] 引用样式
- [x] CSS选择器
- [x] 基础样式语法
- [x] display属性
- [x] 常用布局
  - [x] float类型
  - [x] 盒模型
  - [x] position定位
  - [x] flex
  - [x] gridlayout
- [x] 伪类
- [x] 响应式设计

详细学习笔记参考[3] <font color='blue'>基础语言学习</font>

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

  ```
  三要素
  事件源：触发事件的元素
  事件类型：事件的触发方式（例如鼠标点击或者键盘点击）
  事件处理程序：事件触发之后要执行的代码（函数形式）
  ```

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

  ```
  switch(a){
  	case 0:...
  	break;
  	...
  	default:...
  }
  ```

- [x] for循环

  - 普通for循环

  ```
  for(var i=0;i<n;i++){}
  ```

  - for/in循环:遍历对象属性:具体见show.html

- [x] while循环

  ```
  while(条件){执行语句}
  ```

  ```
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

  ```
  Number("3.14")    // 返回 3.14
  Number(" ")       // 返回 0
  Number("")        // 返回 0
  Number("99 88")   // 返回 NaN,无意义
  ```

  ```
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

[DOM](https://github.com/deligentsheep/sublimation/blob/main/study/image-20250307125446613.png)

对大厦的管理（操作DOM—api）

```
查找元素（寻找房间）：根据CSS选择器查找/根据queryDelector找到第一个匹配的元素/querySelectorAll找到所有匹配的元素=根据房间号或者楼层对应位置找房间；

修改房间（改造房间）：改变元素内容样式或者属性:innerHTML/textContent/style等；

添加和删除元素（新建一个房间或者拆掉一个房间）：添加或者删除DOM树中的元素
例如：document.createElement('div')可以创建一个新的<div>元素
使用 parentElement.removeChild(childElement)可以删除一个元素。
```

外来访客/内部和大厦之间的互动（事件处理/监听—api）

```
例如：着火触发烟雾报警器/有人来探亲—按门铃
使用 button.addEventListener('click', function() { /* 处理点击事件 */ }) 可以为按钮添加一个点击事件监听器，当用户点击按钮时，就会执行相应的处理函数。
```

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

  ```
  返回值类型的区别
  getElementsByTagName返回一个HTMLCollection对象，且相同对象的长度也会自动更新
  querySelectorAll返回一个NodeList对象，但是相同对象的长度不会自动更新
  
  选择器的灵活性
  getElementsByTagName只能通过标签名字来选取元素(只能选取DOM中的元素节点，collection是元素节点的集合)
  querySelectorAll可以选取DOM树中的所有节点(nodelist是文档节点的集合)
  ```

- #### BOM

  [BOM1](https://github.com/deligentsheep/sublimation/blob/main/study/bom%26dom.jpg)

  详细参考[8]<font color="blue">DOM和BOM是什么，有什么作用?</font>

- #### 两者联系

  - 作用范围区别：DOM是面对HTML 文档操作，但是BOM是面对浏览器操作

  - 关系：BOM包含了DOM，主要操控一个网页再浏览器中进行的一些操作，比如页面的跳转前进后退等

  [Bom2](https://github.com/deligentsheep/sublimation/blob/main/study/bom.png)
### 接口请求

- [x] Ajax（异步JavaScript和XML）

- [x] Fetch

### 更多前端语言

了解更多前端的语言及标准——TypeScript和ES6

#### TypeScript

##### 和JS的区别：支持JS中的所有语法，并且在此基础上面扩展了更多的面向对象编程(OOP)的功能

##### TS核心概念

```
基本语法
变量或者属性名字：数据类型(例如：const name:string='zrc';)
为什么要这样“多此一举”呢？
JS中没有详细的数据变量类型，var可以涵盖很多，灵活性很强，但是当项目规模宏大的时候变量类型也会随之变多，模块之间的交互关系就会变得复杂，这时候这种灵活性就可能会造成很多连锁麻烦
```

##### TS环境配置

```
首先需要安装Node.js，在包管理nmp中执行安装TypeScript命令

测试文件：在vscode里面创建一个.ts文件并且打开对应终端之后输入执行命令行tsc xxx.ts即可
测试结果：相同根目录里面出现一个js格式的文件xxx.js，打开之后发现是由刚刚那个xxx.ts变化得来的xxx.js文件，内容是一样的，只是格式不一样
```

详细TypeScript参考[9] <font color='blue'>TypeScript</font>

详细ES6参考[10] <font color='blue'>ECMAScript 6 入门</font>

### 事件机制

- [ ] 事件流
- [ ] 绑定元素和目标元素
- [ ] 事件的执行顺序
- [ ] 事件委托
- [ ] 事件对象event

详细参考[11] <font color='blue'>深入理解js事件机制</font>

### 性能优化

- [ ] 防抖
- [ ] 节流
- [ ] 二者区别

详细参考[12] <font color='blue'>防抖节流区别</font>

### 异步编程+Promise

## 网络基础——⭐⭐

- [ ] 互联网运行机制
- [ ] HTTP协议和TCP协议
- [ ] DNS原理
- [ ] CDN原理

## 浏览器——⭐⭐⭐

- [ ] 渲染原理
- [ ] 事件循环
- [ ] Headless Browser
- [ ] WebView

## 前端框架——⭐⭐⭐

- [ ] React

  - [ ] Redux
  - [ ] Mobx
  - [ ] React - router

- [ ] Vue

  详细参考[https://vuejs.org/guide/introduction.html]

  - [ ] Vuex

  - [ ] Vue - router

    读取官方文档中理解前端框架，比如Vue

    详细文档参考[13]<font color='blue'>Vue</font>

    详细演练项目参考[14]<font color='blue'>Vue SFC Playground</font>

    详细实战项目参考[15]<font color='blue'>Vue实战项目：电商管理系统(Element-UI)</font>

- [ ] Angular
  - [ ] RxJS
  - [ ] NgRx
  
- [ ] 三者区别

## 包管理

- [ ] npm
- [ ] yarn
- [ ] pnpm
- [ ] 三者区别
- [ ] 文件结构
- [ ] 配置package.json
- [ ] 阿里npm

## 构造工具

- [ ] 自动化构建
  - [ ] npm script
  - [ ] gulp
  - [ ] 区别
- [ ] 模块化打包
  - [ ] Webpack
  - [ ] Rollup
  - [ ] Parcel
  - [ ] Snowpack
  - [ ] 区别

## 版本控制工具

- [ ] 基本命令

  - [ ] 熟练使用git实现本地仓库和远程仓库的文件传递等操作

    详细操作参考[16]<font color='blue'>Git</font>

- [ ] 搭建一个简单的博客系统

## CSS预处理器

- [ ] Sass
- [ ] PostCSS
- [ ] Stylus
- [ ] Less

## CSS框架

- [ ] Antd
- [ ] Element UI
- [ ] Material UI

## 测试

- [ ] 单元测试
- [ ] 集成测试
- [ ] 性能测试
- [ ] Jest
- [ ] Enzyme
- [ ] Puppeteer

## 类型校验

- [ ] TypeScript
- [ ] Flow

## Linter&Formatter

- [ ] ESLint
- [ ] Prettier

## 代码规范

- [ ] JavaScript Style Guide
- [ ] CSS Style Guide
- [ ] React Style Guide

## 性能

- [ ] 性能指标
  - [ ] FP
  - [ ] FCP
  - [ ] FMP
  - [ ] TTI
- [ ] RAIL模型
- [ ] Lighthouse
- [ ] DevTools
- [ ] PWA
- [ ] Service Worker
- [ ] 懒加载

## 数据可视化

- [ ] EChart
- [ ] AntV
- [ ] HighChart

## 动画

- [ ] GSAP
- [ ] Anime.js

## 跨端应用

- [ ] React Native
- [ ] Weex
- [ ] Flutter
- [ ] Hybrid
- [ ] Filter
- [ ] 调试
  - [ ] Chrome DevTools
  - [ ] Android Simulator
  - [ ] iOS Simulator

## 小程序——感兴趣

- [ ] 微信
- [ ] 跨端解决方案
  - [ ] Taro
  - [ ] uni - app
  - [ ] Chameleon

## 桌面应用

- [ ] Electron
- [ ] NW.js

## 静态网站构建

- [ ] Gatsby.js
- [ ] Hugo
- [ ] Hexo
- [ ] Docusaurus
- [ ] Next.js

## Web Assembly

- [ ] Web Assembly基础概念，如二进制格式、与JavaScript的关系
- [ ] 使用Emscripten将C/C++代码编译为Web Assembly
- [ ] 在JavaScript中调用Web Assembly模块的方法

# 4.计划时间

## HTML和CSS

```
总时长：1天
预期ddl：2025 2.13
预计检查时间：2025 2.14全天选择
```

### JS

```
总时长：2+1+1+1+0.5+1.5+1=8天
预计时间段:2025 2.16-2.19  2.22-2.28
解释：
1.中间两天时间复盘
2.20号-22号旅游，预计22号晚上到校
3.课设检查修改耽误两天
预计检查时间：2025 2.27号全天协商时间
```

### 网络基础

```
总时长：3天
预计时间段：2025 3.1-3.3
不可抗力：搬寝室和上课，此时间段上午下午晚上都有课
预计检查时间：2025 3.4号全天协调时间
```

### 浏览器

```
总时长：3天
预计时间段：2025 3.4-3.6
预计检查时间：2025 3.7号全天协调时间
```

### 前端框架——vue

```
总时长：7天
预计时间段：2025 3.7-3.13
预计检查时间：2025 3.14号全天协商时间
```

# 5.学习过程中引发的思考

- [ ] 学会挂一个钓鱼网站
- [ ] 菜鸟教程和MDN参考资料的时候经常看到“尝试一下demo”，后面探究如何做到在网页上挂载一个可以运行修改的小demo

# 6.读物

- [ ] https://martinfowler.com/articles/micro-frontends.html

# 7.参考文献

- [1] [前端学习路线](https://javabetter.cn/xuexiluxian/qianduan.html)——二哥
- [2] [50个前端小项目](https://github.com/bradtraversy/50projects50days)——github
- [3] [SEO](https://zh.wikipedia.org/wiki/%E6%90%9C%E5%B0%8B%E5%BC%95%E6%93%8E%E6%9C%80%E4%BD%B3%E5%8C%96)——维基百科
- [3] [基础语言学习](https://github.com/deligentsheep/Tasks/blob/main/%E7%AC%AC%E4%B8%89%E9%98%B6%E6%AE%B5%E8%80%83%E6%A0%B8/HTML%2BCSS%2BJS.md)——github
- [4] [JS](https://www.runoob.com/js/js-howto.html)——菜鸟教程
- [5] [JS教程](https://space.bilibili.com/282190994/channel/collectiondetail?sid=2273667)——后盾人
- [6] [JS中所有函数都是闭包的？](https://juejin.cn/post/7215207897520767013)——稀土掘金
- [7] [HTML DOM API](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API)——MDN
- [8] [DOM和BOM是什么，有什么作用?](https://zhuanlan.zhihu.com/p/372357616)——知乎
- [9] [TypeScript](https://zhuanlan.zhihu.com/p/352768834)——zhi'hu
- [10] [ECMAScript 6 入门](https://es6.ruanyifeng.com/)——阮一峰ES6
- [8] [深入理解js事件机制](https://zhuanlan.zhihu.com/p/30988982)——知乎
- [9] [防抖节流区别](https://www.jasonzk.com/tech/debouncethrottle/#google_vignette)——Jason ZK空间
- [10] [Vue](https://cn.vuejs.org/guide/introduction.html)——Vue官方文档
- [11] [VueSFC Playground](https://play.vuejs.org/#eNp9kVFLwzAQx7/KeS9TmBuiT6MOVAbqg4oKvuSltLeuM01CcpmF0u/utaXVhzEISe7/vyS/yzV459ziEAlXmITMl47XylDtrGfIaZtGzdAoA5CnnJ5fDHsATxy9GSOAKhQrmD2S1ha+rNf52Wyw2m6RSUaynB6QgKlyOmWSCCDZXa2bprsF2jZZStSrpXGR4XBZ2Zz0rULxFYqVLKfTOEcOmTXbsljsgzVSRw+lMLOVKzX5V8elNUHhasRVmArnz3OvsY80H/VsR9n3EX0f6k5T+OYpkD+Qwsnj1BfEg735eKFa9pMp5FFL9gnznYLVsWMc0u6jyQX7X15P+1R1PSlN8Rk2NZMJY1EdaP/Jfb5CaebDidL/cK8XN2NzsP0F+HSp8w==)——Vue官方演练场
- [12] [Vue实战项目：电商管理系统(Element-UI)](https://www.bilibili.com/video/BV1E7411c7M8/?spm_id_from=333.337.top_right_bar_window_custom_collection.content.click&vd_source=3fc05c3b7f095e12a12ea9850e2e0a35)——bilibili
- [13] [Git](https://liaoxuefeng.com/books/git/introduction/index.html)——廖雪峰git
