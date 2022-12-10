const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

// dot environment config
if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: 'backend/config/config.env' });
}

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "This is JOURNEY REST API."
    });
});



module.exports = app;