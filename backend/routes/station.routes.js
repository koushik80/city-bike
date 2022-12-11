const express = require("express");
const router = express.Router();
const { getAllStations } = require("../controllers/station.controller");


router.route('/all').get(getAllStations);



module.exports = router;