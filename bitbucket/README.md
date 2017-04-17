使用 Node 进行命令行工具的开发：

```shell
# 初始化
$ npm init
name: bitbucket-snippet
version: 0.0.1
description: A command-line tool for creating Bitbucket snippets.
entry point: index.js
license: Apache-2.0

# 输入index.js内容
# ...
# 安装一些依赖模块
# $ npm install --save commander

# 安装并测试
$ npm install -g 
$ which snippet 
/Users/guang/.nvm/versions/node/v0.12.18/bin/snippet

# 使用npm link便利地将我们的index.js软链接到path变量的位置
$ npm link
/Users/guang/.nvm/versions/node/v0.12.18/bin/snippet -> /Users/guang/.nvm/versions/node/v0.12.18/lib/node_modules/bitbucket-snippet/index.js
/Users/guang/.nvm/versions/node/v0.12.18/lib/node_modules/bitbucket-snippet -> /Users/guang/dev/JsProj/bitbucket

# 开发完成的时候，我们可以通过npm publish发布, （需要npm adduser）
# 其他人可以npm install -g bitbucket-snippet安装


```