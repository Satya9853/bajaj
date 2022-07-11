const express = require("express");
const router = express.Router();
const challengeController = require("../Controllers/challenge");

router.post("/challenge", challengeController.getData);

module.exports = router;
