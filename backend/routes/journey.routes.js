// external imports
const express = require("express");
const router = express.Router();

// internal import
const {
    getAllJourney,
    createJourney,
    getJourneyDetails,
    deleteJourney
} = require("../controllers/journey.controller");


router.route('/all').get(getAllJourney);

router.route('/create').post(createJourney);

router.route('/:id')
    .get(getJourneyDetails)
    .delete(deleteJourney);

module.exports = router;