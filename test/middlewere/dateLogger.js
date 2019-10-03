const dateLogger = function(req, res, next) {
  console.log('dateLogger:', new Date());
  next();
};
module.exports = dateLogger;
