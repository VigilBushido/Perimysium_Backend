const express = require('express');
const { getCourses, getCourse, addCourse } = require('../controllers/courses');

const router = express.Router({ mergeParams: true }); // we merge the url params from other routes

router.route('/').get(getCourses).post(addCourse);
router.route('/:id').get(getCourse);

module.exports = router;