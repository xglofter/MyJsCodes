var webpack = require('webpack')
//import webpack from 'webpack'

module.exports = {
  devtool: 'eval',
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }
}
