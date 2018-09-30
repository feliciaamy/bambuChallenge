const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const express = require("express"),
  healthcheck = require("express-healthcheck"),
  cors = require("cors"),
  bodyparser = require("body-parser"),
  apiError = require("./config/apiError"),
  logger = require("./config/winston"),
  routes = require("./server/routes/index.route"),
  app = express(),
  mongoose = require("./config/mongoose");

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true, limit: "2mb" }));

app.use("/", routes);
app.get("/healthcheck", healthcheck());

app.use(function(err, req, res, next) {
  logger.error(JSON.stringify(err));
  if (err instanceof apiError) {
    next(err);
  } else {
    console.log(err);
    next(new apiError());
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(err.status).json({
    message: err.message,
    stack: err.stack
  });
});

app.listen(process.env.PORT || 8443, function() {
  logger.info("App Started!", process.env.PORT || 8443);
});

exports.app = functions.https.onRequest(app);
