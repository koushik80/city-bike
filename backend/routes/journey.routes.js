// external imports
const express = require("express");
const router = express.Router();

// internal import
const { getAllJourney } = require("../controllers/journey.controller");


router.route('/all').get(getAllJourney);



module.exports = router;