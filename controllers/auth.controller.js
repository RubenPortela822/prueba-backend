const { compare } = require('../helpers/auth');
const { generateToken } = require('../helpers/generateJWT');
// const db = require('../models');
// const user = db.import('../models');
const {User} = require('../models/');

const auth = async (data) => {
    let { usuario } = data    
    const userDb = await User.findOne({  where: {user: usuario} });
    if (!userDb) {
        return 404;
    }

    const flagCompare = await compare(data.password, userDb.password)
    const token = await generateToken(userDb);
    let { password, ...rest } = userDb;

    if (flagCompare) {
        return {
            data: rest,
            token
        }
    } else {
        return 409;
    }
}



module.exports = {
    auth,
}
