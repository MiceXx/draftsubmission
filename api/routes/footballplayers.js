const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const FootballPlayerController = require("../controllers/footballplayers");

router.get("/", FootballPlayerController.findAll);

router.get("/:playerId", FootballPlayerController.getPlayer);

module.exports = router;