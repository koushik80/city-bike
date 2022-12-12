const { Schema, model } = require("mongoose");

const journeySchema = new Schema({
    departure: {
        type: Date,
        required: true,
    },
    return: {
        type: Date,
        required: true,
    },
    departure_station_id: {
        type: String,
        required: true,
    },
    departure_station_name: {
        type: String,
        required: true,
    },
    return_station_id: {
        type: String,
        required: true,
    },
    return_station_name: {
        type: String,
        required: true,
    },
    covered_distance: {
        type: Number,
        required: true,
        min: [10, "minimum covered distance must be at least 10 seconds"]
    },
    duration: {
        type: Number,
        required: true,
        min: [10, "minimum duration must be at least 10 seconds"]
    },
},
    {
        timestamps: true
    }
);

module.exports = model("Journey", journeySchema);