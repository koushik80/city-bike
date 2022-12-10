const Journey = require('./../models/journey.model');


exports.getAllJourney = async (req, res, next) => {
    const journey = await Journey.find();
    const totalJourney = await Journey.countDocuments();

    if (journey?.length === 0) return next("Journey data not found", 404);

    res.status(200).json({
        success: true,
        journey,
        totalJourney
    });
};