const mongoose = require("mongoose");
const express = require("express");
const app = express();

const routes = require("./routes");

mongoose
  .connect("mongodb://localhost/vidly", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("Connected to mongodb..."))
  .catch(err =>
    console.error("Error occured while connecting to mongodb", err)
  );

app.use(express.json());
routes.init(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
