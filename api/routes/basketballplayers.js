const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const BasketballPlayerController = require("../controllers/basketballplayers");

router.get("/", BasketballPlayerController.findAll);

router.get("/:playerId", BasketballPlayerController.getPlayer);

module.exports = router;