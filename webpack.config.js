let fs = require('fs');

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const { WebPlugin } = require('web-webpack-plugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 3 });
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const hotMiddlewareScript = require('webpack-hot-middleware');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  // JavaScript 执行入口文件
  entry: {
    index: './src/index.jsx',
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[name].js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  resolve: { // 优化文件搜索配置
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: { // 定义好文件的搜索路径
      'react': path.resolve(__dirname, './node_modules/react/umd/react.production.min.js'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom/umd/react-dom.production.min.js'),
    },
    extensions: ['.jsx', '.js', '.css', '.less', '.sass', '.json', '.png', 'html'],
  },
  module: {
    // 独完整的 `react.min.js` 文件就没有采用模块化，忽略对 `react.min.js` 文件的递归解析处理
    noParse: [/react\.min\.js$/, /react-dom\.min\.js$/,],
    rules: [
      // {
      //   test: /\.jsx$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre'
      // },
      // {
      //   test: /\.jsx$/,
      //   // 只加载你关心的目录下的 Source Map，以提升构建速度
      //   exclude: /node_modules/,
      //   use: ['source-map-loader'],
      //   // 要把 source-map-loader 的执行顺序放到最前面，如果在 source-map-loader 之前有 Loader 转换了该 JavaScript 文件，会导致 Source Map 映射错误
      //   enforce: 'pre'
      // },
      // {
      //   test: /\.jsx$/,
      //   use: ['HappyPack/loader?id=babel'],
      //   // 排除 node_modules 目录下的文件，node_modules 目录下的文件都是采用的 ES5 语法，没必要再通过 Babel 去转换
      //   exclude: path.resolve(__dirname, 'node_modules'),
      // },
      // {
      //   // 用正则去匹配要用该 loader
      //   // 转换的 CSS 文件
      //   test: /\.css$/,
      //   exclude: path.resolve(__dirname, 'node_modules'),
      //   use: ExtractTextPlugin.extract({
      //     use: ['HappyPack/loader?id=css'],
      //   }),
      // },
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
              loader: 'css-loader', // 使用['css-loader?minimize']进行代码的压缩
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // 使用JSON.stringify的结果为'"production"'
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // new WebPlugin({  // Also generate a test.html
    //   filename: 'test.html',
    //   template: 'template.html',
    //   chunks: ['index'],
    //   minify: false,
    // }),
    // new HtmlWebpackPlugin({
    //   filename:'index.html',
    //   template:'template.html',
    //   inject:false,
    //   title:'webpack test',
    //   chunks:['index']
    // }),
    new webpack.HotModuleReplacementPlugin(),
    // 使用 ParallelUglifyPlugin 并行压缩输出的 JS 代码
    // new ParallelUglifyPlugin({
    //   // 传递给 UglifyJS 的参数
    //   uglifyJS: {
    //     output: {
    //       // 最紧凑的输出
    //       beautify: false,
    //       // 删除所有的注释
    //       comments: false,
    //     },
    //     compress: {
    //       // 在UglifyJs删除没有用到的代码时不输出警告
    //       // warnings: false,
    //       // 删除所有的 `console` 语句，可以兼容ie浏览器
    //       // drop_console: true,
    //       // // 内嵌定义了但是只用到一次的变量
    //       collapse_vars: true,
    //       // // 提取出出现多次但是没有定义成变量去引用的静态值
    //       // reduce_vars: true,
    //     }
    //   },
    // }),
    // 告诉 Webpack 使用了哪些动态链接库
    // new DllReferencePlugin({
    //   // 描述 react 动态链接库的文件内容
    //   manifest: require('./dist/react.manifest.json'),
    // }),
    // new DllReferencePlugin({
    //   // 描述 polyfill 动态链接库的文件内容
    //   manifest: require('./dist/polyfill.manifest.json'),
    // }),
    // new HappyPack({
    //   // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
    //   id: 'babel',
    //   // 如何处理 .js 文件，用法和 Loader 配置中一样
    //   loaders: ['babel-loader?cacheDirectory'],
    //   threadPool: happyThreadPool,
    // }),
    // new HappyPack({
    //   id: 'css',
    //   // 如何处理 .css 文件，用法和 Loader 配置中一样
    //   loaders: [
    //     {
    //       loader: 'css-loader',
    //       options: {sourceMap: true}
    //     },
    //     "postcss-loader"
    //   ],
    //   threadPool: happyThreadPool,
    // }),
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