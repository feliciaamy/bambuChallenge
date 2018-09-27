const mongoose = require("mongoose"),
  logger = require("./winston"),
  config = require("../config/config");

mongoose.connect(
  config.mongodb.uri,
  (err, res) => {
    if (err) {
      logger.error("ERROR connecting to database", err);
    } else {
      logger.info("Succeeded connected to database");
    }
  }
);

module.exports = mongoose;
