const {User} = require('../models/');
// const db = require('../models');
// const user = db.import('../models');

const getAll = () => {
    return User.findAll();
}

const saveUser = (data) => {
    return User.create(data);
}



module.exports = {
    getAll,
    saveUser,
}
