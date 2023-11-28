const errorHandler = (err, req, res, next) => {
    // log to console for dev
    console.log(err.stack.red);

    // future I will extend the error class so it includes status codes
    res.status(err.statusCode || 500).json({
        success: false, 
        error: err.message || 'Server Error'
    });
};

module.exports = errorHandler;