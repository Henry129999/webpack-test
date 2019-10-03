const express = require('express');
const path = require('path');
const indexPath = path.join(__dirname, '/html.html');
const router = require('./router');
const dateLogger = require('./middlewere/dateLogger');
const logger = require('./middlewere/logger');

const app = express();

/** TODO  */
app.use(dateLogger);
app.use(logger);
app.use('/public', express.static(__dirname + '/public')); // 不同的文件夹下面的资源匹配
app.use('/router', router);

app.get("/", function (req, res, next) {
  console.log('进来了');
  // res.sendFile(indexPath); // 必须是绝对路径
  // res.status(404).send("Sorry! You can't see that.");
  // res.sendStatus(201);
  // res.json('hello world'); // 发送json文件
  // const err = new Error('这是一个错误');
  // next(err);
  next();
});

app.use("/", function (req, res) {
  console.log('xiayige');
  res.send('hello tom');
});

// 错误处理
app.use(function(err, req, res) {
  console.log('err', err);
  if(err) {
    console.log('err', err);
    res.status(500);
    res.send('服务器开小差了');
  }
});

app.listen(16666, function () {
  console.log('正在监听16666端口');
});
