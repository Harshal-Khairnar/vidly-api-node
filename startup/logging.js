const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

module.exports = function() {
  winston.exceptions.handle(
    new winston.transports.Console({
      format: winston.format.simple()
    }),
    new winston.transports.File({
      filename: "uncaughtException.log"
    })
  );

  winston.add(
    new winston.transports.File({
      filename: "logfile.log",
      handleExceptions: true
    })
  );

  winston.add(
    new winston.transports.MongoDB({
      db: "mongodb://localhost/vidly",
      level: "error"
    })
  );

  /* process.on("uncaughtException", ex => {
    console.log("GOT UNCAUGHTEXCEPTION", ex.message);
    winston.error(ex.message, ex);
    process.exit(1);
  }); */

  process.on("unhandledRejection", ex => {
    console.log("GOT UNHANDLEDREJECTION", ex.message);
    winston.error(ex.message, ex);
    process.exit(1);
  });
};
