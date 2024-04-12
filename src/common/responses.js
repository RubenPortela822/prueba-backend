exports.success = function (req, res, message = 'Ok', status = 200) {
    res.status(status).send({
        error: false,
        status,
        body: message
    });
    return
}

exports.error = function (req, res, message = 'Error', status = 500) {
    res.status(status).send({
        error: true,
        status,
        body: message
    });
    return
}