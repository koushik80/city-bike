// external imports
const express = require("express");
const router = express.Router();

// internal import
const {
    getAllJourney,
    createJourney,
    getJourneyDetails
} = require("../controllers/journey.controller");


router.route('/all').get(getAllJourney);

router.route('/create').post(createJourney);

router.route('/:id').get(getJourneyDetails);



module.exports = router;