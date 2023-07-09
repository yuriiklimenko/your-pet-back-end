const express = require("express");

const { getNewsController } = require("../../controllers/newsController");

const router = express.Router();

router.get("/", getNewsController);

module.exports = router;
