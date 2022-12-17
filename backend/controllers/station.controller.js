// internal imports
const ErrorHandler = require('../error/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const Station = require('./../models/station.model');
const Journey = require('../models/journey.model');
const ApiFeatures = require('../utils/ApiFeatures');

// GET ALL STATIONS
exports.getAllStations = catchAsyncError( async (req, res, next) => {

    const apiFeature = new ApiFeatures(Station.find(), req.query)
        .search()
        .pagination(100);
    const stations = await apiFeature.query;
    const totalStations = await Station.countDocuments();

    if (stations?.length === 0) return next(new ErrorHandler("Station data not found", 404));

    res.status(200).json({
        success: true,
        stations,
        totalStations
    });
});

// GET SINGLE STATION DETAILS
exports.getStationDetails = catchAsyncError( async (req, res, next) => {

    const station = await Station.findById(req.params.id);

    if (!station) return next(new ErrorHandler(`Station data not found with this ID ${req.params.id}`, 404));

    // TOTAL NUMBER OF JOURNEY STARTING FROM THE STATION
    const allJourneyStartFromTheStation = (await Journey.find({ departure_station_id: station.id }));
    const allJourneyEndFromTheStation = (await Journey.find({ return_station_id: station.id }));

    res.status(200).json({
        success: true,
        station: {
            ...station._doc,
            totalNumberOfJourneyStartFromTheStation: allJourneyStartFromTheStation.length,
            totalNumberOfJourneyEndFromTheStation: allJourneyEndFromTheStation.length,
            allJourneyStartFromTheStation,
            allJourneyEndFromTheStation
        },
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
