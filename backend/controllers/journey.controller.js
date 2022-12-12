const Journey = require('./../models/journey.model');
const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../error/errorHandler');

// GET ALL JOURNEYS
exports.getAllJourney = catchAsyncError(async (req, res, next) => {
    const journey = await Journey.find();
    const totalJourney = await Journey.countDocuments();

    if (journey?.length === 0) return next(new ErrorHandler("Journey data not found", 404));

    res.status(200).json({
        success: true,
        journey,
        totalJourney
    })
});

// GET A SINGLE JOURNEY
exports.getJourneyDetails = catchAsyncError(async (req, res, next) => {
    const journey = await Journey.findById(req.params.id);

    if(!journey) return next(new ErrorHandler(`Journey data not found`, 404));

    res.status(200).json({
        success: true,
        journey,
    })
 });



// CREATE A JOURNEY


// DELETE A JOURNEY
