// internal imports
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

// GET SINGLE STATION DETAILS
exports.getStationDetails = catchAsyncError( async (req, res, next) => {

    const station = await Station.findById(req.params.id);

    if(!station) return next(new ErrorHandler(`Station data not found with this ID ${req.params.id}`, 404));

    res.status(200).json({
        success: true,
        station,
    });
});

// CREATE A STATION
exports.createStation = catchAsyncError( async (req, res, next) => {

    const station = await Station.create(req.body);

    if(!station) return next(new ErrorHandler(`You can't create a station. Something is wrong, Please try again!`, 500));

    res.status(200).json({
        success: true,
        station,
    });
});

// DELETE A STATION
exports.deleteStation = catchAsyncError(async (req, res, next) => {

    const station = await Station.findById(req.params.id);

    if (!station) return next(new ErrorHandler("Station data not found", 404));

    await station.remove();

    res.status(200).json({
        success: true,
        message: "Station deleted successfully",
    });
});
