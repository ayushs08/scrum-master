const express = require("express");
const mongoose = require("mongoose");

const app = express();

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error!", err));

app.get("/", (req, res) => res.send("Hello!" + process.env.APP));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
