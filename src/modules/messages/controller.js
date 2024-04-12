const dbConnection = require('../../DB/connection')
const TABLE = 'messages';

const getAll = async () => {
    return await dbConnection.getAllMessages();
}

const saveMessage = async (data) => {
    const { message, sender, date } = data;
    const dataSend = {
        message,
        user_id: sender.id,
        date
    }
    return await dbConnection.save(TABLE, dataSend);
}



module.exports = {
    getAll,
    saveMessage,
}
