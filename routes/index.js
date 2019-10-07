const genres = require("./genres");
const customers = require("./customers");
const movies = require("./movies");
const rentals = require("./rentals");

function init(app) {
  app.use("/api/genres", genres);
  app.use("/api/customers", customers);
  app.use("/api/movies", movies);
  app.use("/api/rentals", rentals);
}

module.exports.init = init;
