const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

// dot environment config
if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: 'backend/config/config.env' });
}

//parsing json
app.use(express.json());

// used cors to allow cross-origin access with frontend
app.use(cors());

// imported routers
const journey = require("../routes/journey.routes");
const station = require("../routes/station.routes");

//middleware
app.use("/api/journey", journey);
app.use("/api/station", station);


app.get('/', (req, res) => {
    res.status(200).json({
        message: "This is JOURNEY REST API"
    });
});

// getting journey
app.get('/api/journey', (req, res) => {

    res.status(200).json({
        message: "This is JOURNEY REST API."
    });
});

// getting station
app.get('/api/station', (req, res) => {

    res.status(200).json({
        message: "This is STATION REST API."
    });
});



module.exports = app;