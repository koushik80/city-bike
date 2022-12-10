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

// using cors to allow cross-origin access with frontend
app.use(cors());

// imported routers
const journey = require("../routes/journey.routes");


//using middleware
app.use("/api/v1/journey", journey);


app.get('/', (req, res) => {
    res.status(200).json({
        message: "This is JOURNEY REST API"
    });
});

// getting journey
app.get('/api/v1/journey', (req, res) => {
    res.status(200).json({
        message: "This is JOURNEY REST API Version 1."
    });
});



module.exports = app;