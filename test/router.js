const express = require('express');
const router = express.Router(); // Router 实例是完整的中间件和路由系统

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/header', function(req, res) {
  res.send('Birds home page');
});

router.get('/footer', function(req, res) {
  res.send('About birds');
});

module.exports = router;
