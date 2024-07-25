const response = require('./responses');


const errors = (err, req, res, next) => {
    console.log('Error', err);
    const message = err.message || "Server error";
    const status = err.statusCode || 500;


    response.error(req, res, message, status)
}

module.exports = errors;