const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const config = require('../config/configApp');

const compare = async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword);
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, config.auth.jwt_secret);
    } catch (error) {
        return null
    }
}

module.exports = { compare,verifyToken }