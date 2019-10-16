const winston = require("winston");

module.exports = function(err, req, res, next) {
  //Log this exception
  winston.error(err);

  res.status(500).send("Something failed again.");
};
