const {Messages} = require('../models/index');
// const db = require('../models');
// const messages = db.import('../models');

const getAll = async () => {
    return await Messages.findAll();        
}

const saveMessage = async (data) => {
    const { message, sender, date } = data;
    const dataSend = {
        message,
        userId: sender.id,
        date
    };
    return await Messages.create(dataSend);    
}


module.exports = {
    getAll,
    saveMessage,
}
