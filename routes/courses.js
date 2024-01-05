const express = require('express');
const { getCourses } = require('../controllers/courses');

const router = express.Router({ mergeParams: true }); // we merge the url params from other routes

router.route('/').get(getCourses);

module.exports = router;