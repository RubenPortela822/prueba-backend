const mysql = require('mysql');
const config = require('../config');


const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let connect;

const mysqlConnection = () => {
    connect = mysql.createConnection(dbConfig);

    connect.connect((err) => {
        if (err) {
            console.log("Error al conectarse", err);
            setTimeout(mysqlConnection, 200);
        } else {
            console.log('DB conectada');
        }
    });

    connect.on('error', err => {
        console.log("Error al conectarse", err);

        if (err.code == 'PROTOCOL_CONNECTION_LOST') {
            mysqlConnection();
        } else {
            throw err;
        }
    });
};
mysqlConnection();

const getAll = (table) => {
    return new Promise((resolve, reject) => {
        connect.query(`select * from ${table}`, (error, result) => {
            return error ? reject(error) : resolve(result)
        })
    });
};

const getAllMessages = () => {
    return new Promise((resolve, reject) => {
        connect.query(`select messages.*, users.usuario, users.tipo_usuario from messages join users on messages.user_id = users.id`, (error, result) => {
            return error ? reject(error) : resolve(result)
        })
    });
};

const save = (table, data) => {
    return new Promise((resolve, reject) => {
        connect.query(`insert into ${table} set ?`, data, (error, result) => {
            return error ? reject(error) : resolve(result)
        })
    });

};

const getOneByParam = (table, column, param) => {
    return new Promise((resolve, reject) => {
        connect.query(`select * from ${table} where ${column}= '${param}'`, (error, result) => {
            return error ? reject(error) : resolve(result)
        })
    });
};




module.exports = { getAll, getOneByParam, save, getAllMessages };