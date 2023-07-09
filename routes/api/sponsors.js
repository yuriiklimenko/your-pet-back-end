const express = require("express");

const {
  getSponsorsController,
} = require("../../controllers/sponsorsController");

const router = express.Router();

router.get("/", getSponsorsController);

module.exports = router;
