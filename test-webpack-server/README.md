> 参考
> https://doc.webpack-china.org/concepts/
>

### 创建工程

```
$ yarn init
$ yarn add webpack

# **添加工程文件：**
# public/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Webpack Sample Project</title>
  </head>
  <body>
    <div id='root'>
    </div>
    <script src="bundle.js"></script>
  </body>
</html>

# src/app.js:
document.querySelector("#root").appendChild(hello());

# src/hello.js
module.exports = function() {
  var hello = document.createElement('div');
  hello.textContent = "Hello World!";
  return hello;
}

# webpack
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

### 使用 Loaders

想要 webpack 能分析编译 css 等其他文件，需要使用各种 loader 支持。（对 json，webpack 已经内置了处理器。）

+ ***添加对 css 支持：***

```
    # 安装依赖
    $ yarn add css-loader style-loader
```

安装完 loader 需要 webpack.config.js 中添加“module”配置。

```
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        { loader: "style-loader" }, // style-loader 写前面，否则报错 -_-!!
        { loader: "css-loader" }
      ]
    }
  ]
  // test: 匹配文件拓展名（必须）
  // use: 使用的 loader 的名称（必须）
},
```

重新编译，即可支持了 css 样式。

+ ***添加对 React，JSX 支持：***

```
# 安装 babel 依赖
$ yarn add babel-core babel-loader babel-preset-env babel-preset-react

# webpack.config.js 添加 module
{
  test: /(\.jsx|\.js)$/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [ "env", "react"]
    }
  },
  exclude: /node_modules/
}

# 安装 react, react-dom
$ yarn add react react-dom

# 加入 JSX 的 Happy.js
import React, {Component} from 'react';

class Happy extends Component {
  render() {
    return (
      <div className='Happy'>
        <h2> I am happy! </h2>
      </div>
    );
  }
}

export default Happy;

# 修改 app.js
import React from 'react';
import ReactDOM from 'react-dom';
import Happy from './Happy';
import './style.css';
const hello = require('./hello.js');

ReactDOM.render(
  <Happy />,
  document.getElementById('root')
);

document.querySelector("#root").appendChild(hello());
```

重新编译后，就可以看到我们添加的 Happy 了。

+ ***对 Babel 的配置***：

可以为 babel 新建一个 ‘.babelrc’ 来单独配置 babel

```
# .babelrc:
{
  "presets": [ "env", "react"]
}

# webpack.config.js 去除 babel-loader 下的 options
```

### 使用插件

插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。可以用来处理各种各样的任务。

使用 **html-webpack-plugin**, 它会自动帮你生成一个 html 文件，并且引用相关的 assets 文件(如 css, js)。

```
# 安装库
$ yarn add html-webpack-plugin

# 修改 webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
...
  output: {
    path: path.resolve(__dirname, "build"), // 打包后的文件存放的地方
    filename: "bundle.js" // 打包后输出文件的文件名
  },
...
  devServer: {
    contentBase: "./build",  // 本地服务器所加载的页面所在的目录
...
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.tmpl.html")
    })
  ]
};
```

再编译'''$ yarn start'''。可以看到目录下生成了“build/”。
