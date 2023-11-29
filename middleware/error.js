const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err }
    error.message = err.message;
    // log to console for dev
    console.log(err.stack.red);

    if (err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    };
    //console.log(err.name);

    // future I will extend the error class so it includes status codes
    res.status(error.statusCode || 500).json({
        success: false, 
        error: error.message || 'Server Error'
    });
};

module.exports = errorHandler;