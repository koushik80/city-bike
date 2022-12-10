const express = require("express");
const { getAllJourney } = require("../controllers/journey.controller");
const router = express.Router();

router.route('/all').get(getAllJourney);





module.exports = router;