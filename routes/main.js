
const {mainPage} = require('../controllers/mainPage')

const express = require("express");

const router = express.Router();

router.route("/").get(mainPage);

module.exports = router;
