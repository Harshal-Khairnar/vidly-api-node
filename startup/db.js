const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function() {
  mongoose
    .connect("mongodb://localhost/vidly", {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => winston.info("Connected to mongodb..."));
};
