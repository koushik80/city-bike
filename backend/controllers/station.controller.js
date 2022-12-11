const ErrorHandler = require('../error/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const Station = require('./../models/station.model');

// GET ALL STATIONS
exports.getAllStations = catchAsyncError( async (req, res, next) => {

    const stations = await Station.find();
    const totalStations = await Station.countDocuments();

    if(stations?.length === 0) return next(new ErrorHandler("Station data not found", 404));

    res.status(200).json({
        success: true,
        stations,
        totalStations
    });
});