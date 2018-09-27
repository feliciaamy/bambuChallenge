const express = require("express"),
  mainController = require("../controllers/main.controller"),
  router = express.Router();

router.get("/people-like-you", mainController.findPeopleLikeMe);

module.exports = router;
