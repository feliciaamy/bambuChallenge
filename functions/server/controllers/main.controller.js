const apiError = require("../../config/apiError"),
  httpStatus = require("http-status"),
  logger = require("../../config/winston"),
  helper = require("../helpers/helper");

module.exports = {
  findPeopleLikeMe(req, res, next) {
    if (!req.query) {
      next(
        new apiError(
          "Unable to get people like me. Must include query",
          httpStatus.BAD_REQUEST
        )
      );
    }
    helper
      .findMatch(req.query)
      .then(function(data) {
        res.set("Cache-Control", "public,max-age=300, s-maxage=600");
        res.send(data);
      })
      .catch(function(err) {
        next(
          new apiError(
            "Unable to get people like me",
            httpStatus.INTERNAL_SERVER_ERROR
          )
        );
      });
  }
};
