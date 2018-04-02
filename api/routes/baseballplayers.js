const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const BaseballPlayerController = require("../controllers/baseballplayers");

router.get("/", BaseballPlayerController.findAll);

router.get("/:playerId", BaseballPlayerController.getPlayer);

module.exports = router;