let fs = require('fs');

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { WebPlugin } = require('web-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  // JavaScript 执行入口文件
  entry: {
    index: './src/index.jsx',
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[name]_[chunkhash:8].js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  resolve: { // 优化文件搜索配置
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: { // 定义好文件的搜索路径
      'react': path.resolve(__dirname, './node_modules/react/umd/react.production.min.js'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom/umd/react-dom.production.min.js'),
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.jsx$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre'
      // },
      {
        test: /\.jsx$/,
        // 只加载你关心的目录下的 Source Map，以提升构建速度
        exclude: /node_modules/,
        use: ['source-map-loader'],
        // 要把 source-map-loader 的执行顺序放到最前面，如果在 source-map-loader 之前有 Loader 转换了该 JavaScript 文件，会导致 Source Map 映射错误
        enforce: 'pre'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory']
      },
      {
        // 用正则去匹配要用该 loader
        // 转换的 CSS 文件
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {sourceMap: true}
            },
            "postcss-loader"
          ],
        }),
      },
      {
        test: /antd.*\.less$/,
        loaders: ExtractTextPlugin.extract({
          use: [
            "less-loader",
          ],
        }),
      },
      {
        test: /antd.*\.css$/,
        loaders: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {sourceMap: true}
            },
          ],
        }),
      }
    ]
  },
  // devServer: {
  //   contentBase: './dist',
  //   hot: true
  // },
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       test: /\.js(\?.*)?$/i,
  //     }),
  //   ],
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
      // 从.js中提取出来的.css的文件名称
      filename: 'styles.css'
    }),
    // 指定环境，将process.env.NODE_ENV环境与library关联
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('develop'), // 使用JSON.stringify的结果为'"production"'
    // }),
    // new webpack.HotModuleReplacementPlugin(),
    new WebPlugin({  // Also generate a test.html
      filename: 'test.html',
      template: 'template.html',
      chunks: ['index'],
      minify: false,
    }),
    new UglifyJsPlugin({}),
  ],
  // devServer: {
  //   // https: true,
  //   port: 6199,
  //   // hot: true,
  //   // watch: true,
  //   // watchOption: {
  //   //   ignore: /node-modules/,
  //   //   // 截流
  //   //   aggregateTimeout: 300,
  //   //   // 每秒询问文件变化的次数
  //   //   poll: 1,
  //   // }
  // },
  devtool: "source-map"
};