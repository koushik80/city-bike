// external imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

// dot environment config
if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: 'backend/config/config.env' });
}

// parsing json
app.use(express.json());

// used cors to allow cross-origin access with frontend
app.use(cors());

// imported routers (internal imports)
const journey = require("../routes/journey.routes");
const station = require("../routes/station.routes");
const { errorMiddleware } = require("../middleware/errorMiddleware");

// middleware
app.use("/api/journey", journey);
app.use("/api/station", station);


app.get('/', (req, res) => {
    res.status(200).json({
        message: "This is JOURNEY REST API"
    });
});

// ERROR MIDDLEWARE
app.use(errorMiddleware)

module.exports = app;