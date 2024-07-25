const express = require('express');
const cors = require('cors')
const http = require('http')
const config = require('./config/configApp');
const error = require('./common/errors');
const {usersRoutes,loginRoutes,messagesRoutes} = require('./routes');
const socketMessage = require('./sockets/messages.socket')


const app = express();
server = http.createServer(app)

socketMessage(server);
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("port", config.app.port);


app.use('/api/users', usersRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/messages', messagesRoutes);

app.use(error);

module.exports = { app, server };