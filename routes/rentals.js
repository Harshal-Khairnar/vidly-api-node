const express = require("express");
const router = express.Router();

const { Rental, validate } = require("../models/rental");

router.get("/", async (req, res) => {
  const rentals = await Rental.find().sort("-dateOut");
  res.send(rentals);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const customer = await Genre.findById(req.body.customerId);
  if (!customer) return res.status(400).send("Invalid Customer");

  const movie = await Genre.findById(req.body.movieId);
  if (!movie) return res.status(400).send("Invalid Movie");

  let rental = new Rental({
    customer: {
      _id: customer._id,
      name: customer.name,
      phone: customer.phone
    },
    movie: {
      _id: movie._id,
      title: movie.title,
      dailyRentalRate: movie.dailyRentalRate
    }
  });

  rental = await rental.save();

  movie.numberInStock--;
  movie.save();

  res.send(rental);
});

module.exports = router;
