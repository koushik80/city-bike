// external imports
const express = require("express");
const router = express.Router();

// internal import
const { getAllJourney, getJourneyDetails } = require("../controllers/journey.controller");


router.route('/all').get(getAllJourney);

router.route('/:id').get(getJourneyDetails);



module.exports = router;