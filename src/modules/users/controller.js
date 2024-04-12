const dbConnection = require('../../DB/connection')
const SEED = require('../../DB/SEED');
const TABLE = 'users';

const getAll = () => {
    return dbConnection.getAll(TABLE);
}

const saveUser = (data) => {
    return dbConnection.save(TABLE, data);
}

const seed = () => {
    let arrayPromise = [];
    SEED.forEach(data => {
        arrayPromise.push(dbConnection.save(TABLE, data));
    });
    Promise.all(arrayPromise)
}


module.exports = {
    getAll,
    saveUser,
    seed
}
