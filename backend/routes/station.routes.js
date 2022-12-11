// external imports
const express = require("express");
const router = express.Router();

// internal imports
const {
    getAllStations,
    getStationDetails,
    createStation,
    deleteStation
} = require("../controllers/station.controller");


router.route('/all').get(getAllStations);
router.route('/create').post(createStation);

router.route('/:id')
    .get(getStationDetails)
    .delete(deleteStation);




module.exports = router;