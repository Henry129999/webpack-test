const path = require('path');
const express = require('express');

// 定义 server app
function server () {
  const app = express();
  const indexPath = path.join(__dirname, '../index.html');
  const publicPath = express.static(path.join(__dirname, '../dist'));

  app.use('/dist', publicPath);
  app.get('/', function (req, res) {
    res.sendFile(indexPath);
  });
  app.get('/footer', function (req, res) {
    res.sendFile(indexPath);
  });
  app.get('/test_page', function (req, res) {
    res.sendFile(indexPath);
  });
  app.get('/images/tags.png', function (req, res) {
    console.log('req.url', req.url);
    console.log('path.join(__dirname, `../${req.url}`)', path.join(__dirname));
    res.sendFile( path.join(__dirname, `../${req.url}`) );
  });
  return app;
}

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const app =server();

// 为express添加动态模块热更新
const port = (process.env.PORT || 8080);
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: "/"
  }));
  app.use(webpackHotMiddleware(compiler));
}

console.log('NODE_ENV', process.env.NODE_ENV);

// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware'); // 监听资源的变更，自动打包
// const webpackHotMiddleware = require('webpack-hot-middleware'); // 页面的热重载
// const config = require('../webpack.config.js');
// const compiler = webpack(config);
//
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: "/", // publicPath 生成的新文件所指向的路径，可以模拟CDN资源引用
// }));
// app.use(webpackHotMiddleware(compiler));

app.listen(port);
console.log(`Listening at http://localhost:${port}`);