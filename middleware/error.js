const errorHandler = (err, req, res, next) => {
    // log to console for dev
    console.log(err.stack.red);

    // future I will extend the error class so it includes status codes
    res.status(500).json({
        success: false, 
        error: err.message
    });
};

module.exports = errorHandler;