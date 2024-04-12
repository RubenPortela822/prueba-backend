const express = require('express');
const config = require('./config');
const cors = require('cors')
const usersRoutes = require('./modules/users/routes');
const loginRoutes = require('./modules/auth/routes');
const messagesRoutes = require('./modules/messages/routes');
const error = require('./common/errors');
const { saveMessage } = require('./modules/messages/controller');
//config
const app = express();
const http = require('http')
server = http.createServer(app)

const { Server } = require('socket.io')
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

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set("port", config.app.port);


//rutas
app.use('/api/users', usersRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/messages', messagesRoutes);

app.use(error);

module.exports = { app, server };