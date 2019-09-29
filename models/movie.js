const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const { genreSchema } = require("./genre");

const Movie = mongoose.model(
  "Movie",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      min: 5,
      max: 255
    },
    genre: {
      type: genreSchema,
      required: true
    },
    dailyRentalRate: {
      type: Number,
      required: true,
      min: 0,
      max: 255
    },
    numberInStock: {
      type: Number,
      required: true,
      min: 0,
      max: 255
    }
  })
);

function validateMovie(movie) {
  const schema = {
    _id: Joi.objectId(),
    title: Joi.string()
      .min(0)
      .max(50)
      .required(),
    genreId: Joi.objectId().required(),
    dailyRentalRate: Joi.number()
      .min(0)
      .required(),
    numberInStock: Joi.number()
      .min(0)
      .required()
  };

  return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;
