const { Schema, model } = require("mongoose");

const stationSchema = new Schema({
    fid: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    nimi: {
        type: String,
        required: true,
    },
    namn: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    osoite: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    stad: {
        type: String,
        required: true,
    },
    operaattor: {
        type: String,
        required: true,
    },
    kapasiteet: {
        type: String,
        required: true,
    },
    x: {
        type: Number,
        required: true,
    },
    y: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true
    }
);

module.exports = model("Station", stationSchema)