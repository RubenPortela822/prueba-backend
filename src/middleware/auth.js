const { verifyToken } = require('../helpers/auth');
const responses = require('../common/responses');
const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token);
        if (tokenData.usuario) {
            next();
        } else {
            responses.error(req, res, "Error de autenticacion", 409);
        }
    } catch (error) {
        responses.error(req, res, "Error de autenticacion", 409);
    }
}

module.exports = checkAuth;