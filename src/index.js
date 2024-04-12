const { app, server } = require('./app');

server.listen(app.get("port"), () => {

    console.log("Server corriendo", app.get("port"));
})