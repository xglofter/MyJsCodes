const path = require('path');

module.exports = {
  entry:  [
    "./src/app.js" // 已多次提及的唯一入口文件
  ],
  output: {
    path: path.resolve(__dirname, "public"), // 打包后的文件存放的地方
    filename: "bundle.js" // 打包后输出文件的文件名
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" }, // style-loader 写前面，否则报错 -_-!!
          { loader: "css-loader" }
        ]
      },
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
    // test: 匹配文件拓展名（必须）
    // use: 使用的 loader 的名称（必须）
  },
  devServer: {
    contentBase: "./public",  // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true // 实时刷新
  }
};
