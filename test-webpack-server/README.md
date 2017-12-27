
### 创建工程

```
$ yarn init
$ yarn add webpack

添加工程文件：
public/index.html
src/app.js
src/hello.js

$ yarn run webpack src/app.js public/bundle.js
$ open public/index.html
```

### 通过配置文件来使用 webpack

添加 webpack.config.js 文件。如下：

```
module.exports = {
  entry:  [
    "./src/app.js", // 已多次提及的唯一入口文件
  ],
  output: {
    path: __dirname + "/public", // 打包后的文件存放的地方
    filename: "bundle.js" // 打包后输出文件的文件名
  }
}
```

\__dirname 是 node.js 中的一个全局变量，它指向当前执行脚本所在的目录

接下来只要执行 ``` $ yarn run webpack ``` 即可。

### 配置执行脚本命令

在 package.json 中添加：
```
"scripts": {
  "start": "webpack"
},
```

接下来可以执行 ``` $ yarn start ``` 即可编译打包。

### 使用 webpack 构建本地服务器

如果想让浏览器监听文件的修改，自动刷新。webpack 提供了 webpack-dev-server 来实现这个功能。

```
yarn add webpack-dev-server
```

在 webpack.config.js 中配置：

```
devServer: {
  contentBase: "./public",  // 本地服务器所加载的页面所在的目录
  historyApiFallback: true, // 不跳转
  inline: true // 实时刷新
}
```

在 package.json 中配置脚本命令

```
"scripts": {
  "server": "webpack-dev-server --open"
}
```

接下来可以执行 ``` $ yarn server ``` 即可打开并监听了。

###
