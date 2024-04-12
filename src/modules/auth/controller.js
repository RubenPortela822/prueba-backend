const dbConnection = require('../../DB/connection')
const { compare } = require('../../helpers/auth');
const { generateToken } = require('../../helpers/generateJWT');
const TABLE = 'users';

const auth = async (data) => {
    let { usuario, password } = data
    const user = await dbConnection.getOneByParam(TABLE, 'usuario', usuario);
    if (user.length == 0) {
        return 404;
    }

    const flagCompare = await compare(password, user[0].password)
    const token = await generateToken(user[0]);
    const { id, nombre, tipo_usuario } = user[0];
    if (flagCompare) {
        return {
            data: { id, nombre, usuario, tipo_usuario },
            token
        }
    } else {
        return 409;
    }    
}



module.exports = {
    auth,
}
