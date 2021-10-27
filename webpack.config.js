const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const JsRules = require('./rules/JsRules.js')
const ImgRules = require('./rules/ImgRules.js')
const StylesRules = require('./rules/StylesRules.js')

module.exports = {
  entry: './frontend/src/js/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('frontend/public/js'),
  },
  module: {
    rules: [JsRules, ImgRules, StylesRules],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: path.resolve('frontend/src/index.html'),
    }),
  ],
}
