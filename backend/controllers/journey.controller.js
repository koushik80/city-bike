// internal imports
const Journey = require('./../models/journey.model');
const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../error/errorHandler');
const ApiFeatures = require('../utils/ApiFeatures');

// GET ALL JOURNEYS
exports.getAllJourney = catchAsyncError(async (req, res, next) => {

    const apiFeature = new ApiFeatures(Journey.find(), req.query)
        .journeySearch()
        .pagination(100);
    const journey = await apiFeature.query;
    const totalJourney = await Journey.countDocuments();

    if(journey?.length === 0) return next(new ErrorHandler("Journey data not found", 404));

    res.status(200).json({
        success: true,
        journey,
        totalJourney
    });
});

// GET A SINGLE JOURNEY
exports.getJourneyDetails = catchAsyncError(async (req, res, next) => {

    const journey = await Journey.findById(req.params.id);

    if(!journey) return next(new ErrorHandler(`Journey data not found`, 404));

    res.status(200).json({
        success: true,
        journey,
    });
 });

// CREATE A JOURNEY
exports.createJourney = catchAsyncError(async (req, res, next) => {

    const journey = await Journey.create(req.body);

    if(!journey) return next(new ErrorHandler("Something went wrong, please try again!", 404));

    res.status(201).json({
        success: true,
        journey
    });
});

// DELETE A JOURNEY
exports.deleteJourney = catchAsyncError(async (req, res, next) => {

    const journey = await Journey.findById(req.params.id);

    if(!journey) return next(new ErrorHandler("Journey data not found", 404));

    await journey.remove();

    res.status(200).json({
        success: true,
        message: "Journey deleted successfully",
    });
 });
