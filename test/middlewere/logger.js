const logger = function(req, res, next) {
  console.log('logger middlewere:', req.path);
  next();
};

module.exports = logger;