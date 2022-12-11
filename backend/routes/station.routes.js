const express = require("express");
const router = express.Router();
const { getAllStations, getStationDetails, createStation } = require("../controllers/station.controller");


router.route('/all').get(getAllStations);
router.route('/create').post(createStation);

router.route('/:id').get(getStationDetails)




module.exports = router;