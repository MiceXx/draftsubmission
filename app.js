const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const baseballPlayerRoutes = require("./api/routes/baseballplayers");
const basketballPlayerRoutes = require("./api/routes/basketballplayers");
const footballPlayerRoutes = require("./api/routes/footballplayers");

mongoose.connect(
  "mongodb://draftadmin:draftpassword@draftcluster-shard-00-00-bmzci.mongodb.net:27017,draftcluster-shard-00-01-bmzci.mongodb.net:27017,draftcluster-shard-00-02-bmzci.mongodb.net:27017/test?ssl=true&replicaSet=draftcluster-shard-0&authSource=admin");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/baseballplayers", baseballPlayerRoutes);
app.use("/basketballplayers", basketballPlayerRoutes);
app.use("/footballplayers", footballPlayerRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;