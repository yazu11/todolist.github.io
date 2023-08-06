const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes/ToDoRoutes");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.port;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to mogodatabase...");
  })
  .catch((err) => {
    console.log(`${err} is the error`);
  });

app.use(routes);

app.listen(port, () => {
  console.log(`listning on port number ${port}`);
});
