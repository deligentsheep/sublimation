# Vue

## 准备工作

- 下载官网vue.js文件导到本地并且放在项目同一个路径下面，这样才能使用这个库

- 自己在vscode创建一个vue文件的模板

  详细参考[1] <font color="blue">自动生成vue模板</font>

## 尝试

- 如何利用vscode创建一个vue项目——`vue create xxx`,xxx是项目名称，注意一定全部小写英文

  ==注意这里有三种方式==

  - 默认套餐，vue2版本，提供babel和eslint支持

  - 默认套餐，vue2版本，提供babel和eslint支持

  - 自定义:

    - vue-cli 内置支持了8个功能特性，可以多选：使用方向键在特性选项之间切换，使用空格键选中当前特性，使用 a 键切换选择所有，使用 i 键翻转选项。

      对于每一项的功能，此处做个简单描述：

      Choose Vue version：选择版本
      Babel：支持es6 转 es5
      TypeScript：支持使用 TypeScript 书写源码。
      Progressive Web App (PWA) Support：PWA 支持。
      Router：支持 vue-router 。
      Vuex：支持 vuex 。
      CSS Pre-processors：支持 CSS 预处理器。
      Linter / Formatter：支持代码风格检查和格式化。
      Unit Testing：支持单元测试。
      E2E Testing：支持 E2E 测试。
  
- 尝试使用vscode文件终端命令行创建一个vue文件失败——速度太慢——切换npm源淘宝，并且更改C盘.vuerc文件为true

- 尝试直接使用电脑终端命令行 `vue ui xxx`召唤ui界面创建一个vue项目到本地——成功且速度相对较快

- 尝试运行本地vue文件，右击文件打开终端输入 `cnpm run sever`——失败——不是管理员权限终端

- 尝试在电脑终端管理员运行，输入`cnpm --prefix D:\test1 run sever`——成功打开项目

  > `--prefix` 是 `cnpm`（以及 `npm`）的一个命令行参数，其作用是指定操作的项目根目录。通常情况下，`cnpm` 会默认在当前工作目录下查找 `package.json` 文件并执行相关操作，但当你使用 `--prefix` 参数时，它会以指定的目录作为项目根目录。

## 参考资料

[1] [自动生成vue模板](https://www.cnblogs.com/Vikyanite/p/17310896.html)——博客园
