const apiError = require("../../config/apiError"),
  httpStatus = require("http-status"),
  logger = require("../../config/winston"),
  helper = require("../helpers/helper");

module.exports = {
  findPeopleLikeMe(req, res, next) {
    helper
      .findMatch(req.query)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        next(
          new apiError(
            "Unable to get people like me",
            httpStatus.INTERNAL_SERVER_ERROR
          )
        );
      });
  }
};
