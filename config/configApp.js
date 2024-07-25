require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 8080,
        front: process.env.URL_FRONT || "http://localhost:5173",
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DB || 'prueba',
    },
    auth: {
        jwt_secret: process.env.JWT_SECRET
    }
}