const { Server } = require('socket.io')
const { saveMessage } = require('../controllers/messages.controller');
const config = require('../config/configApp');
module.exports = (server) => {

    const io = new Server(server, {
        cors: {
            origin: config.app.front
        }
    });

    io.on("connection", (socket) => {
        console.log('conectado');
        socket.on('message', (data) => {
            try {
                saveMessage(data);
                io.emit('message', data);
                console.log('mensaje guardado:', data);
            } catch (error) {
                console.log('Error al enviar mensaje:', data);
            }
        });
    });
};