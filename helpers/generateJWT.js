const jwt = require('jsonwebtoken');
const config = require('../config/configApp');

const generateToken = async (user) => {
    return jwt.sign(
        {
            id: user.id, usuario: user.usuario
        }
        , config.auth.jwt_secret,
        {
            expiresIn: "2h"
        });
}

module.exports = {
    generateToken
}