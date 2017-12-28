使用 yarn 测试 webpack 的使用教程。

### 创建工程

```
$ mkdir test-webpack-app-yarn
$ cd test-webpack-app-yarn
$ yarn init
# ...
```

### 安装 webpack

```
$ yarn add webpack

# 新建一个 webpack 配置文件
$ touch webpack.config.js

# 内容：
module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }
}
```

### 添加工程内容

```
# index.js
$ touch index.js

# 内容：
document.write("Hello world, Webpack!")
```

```
# index.html
$ touch index.html

# 内容：
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello, Webpack</title>
  </head>
  <body>
    <div id="app" />
    <script src="bundle.js" type="text/javascript"></script>
  </body>
</html>
```

### 编译运行

```
$ yarn run webpack
$ open index.html -a Google\ Chrome
```

### 说明

如果过程中发生错误，yarn会在工程根目录下自动生成yarn-error.log文件。

[关于 yarn](https://yarn.bootcss.com/docs/getting-started.html)
