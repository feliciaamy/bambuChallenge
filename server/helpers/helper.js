const People = require("../model/people.model"),
  apiError = require("../../config/apiError"),
  httpStatus = require("http-status"),
  logger = require("../../config/winston"),
  Promise = require("bluebird");

module.exports = {
  findMatch: query => {
    return new Promise((resolve, reject) => {
      logger.info(query);
      People.find({ ...query }, { _id: 0 })
        .exec()
        .then(doc => {
          logger.info(doc);
          resolve(doc);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  calculateMatch: () => {}
};
