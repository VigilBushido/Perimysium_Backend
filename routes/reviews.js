const express = require('express');
const { getReviews } = require('../controllers/reviews');

const Review = require('../models/Review');

const router = express.Router({ mergeParams: true }); // we merge the url params from other routes

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router.route('/')
    .get(advancedResults(Review, {
        path: 'bootcamp',
        select: 'name description'
    }), getReviews);

module.exports = router;