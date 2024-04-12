const bcrypt = require('bcryptjs');
const SEED = [
    {
        nombre: " usuario 1",
        usuario: "usuario1",
        password: bcrypt.hashSync("1234567", 10),
        tipo_usuario: "estudiante",
    },
    {
        nombre: " usuario 2",
        usuario: "usuario2",
        password: bcrypt.hashSync("1234567", 10),
        tipo_usuario: "estudiante",
    },
    {
        nombre: " usuario 3",
        usuario: "usuario3",
        password: bcrypt.hashSync("1234567", 10),
        tipo_usuario: "estudiante",
    },
    {
        nombre: " usuario 4",
        usuario: "usuario4",
        password: bcrypt.hashSync("1234567", 10),
        tipo_usuario: "estudiante",
    },
    {
        nombre: " usuario 5",
        usuario: "usuario5",
        password: bcrypt.hashSync("1234567", 10),
        tipo_usuario: "estudiante",
    },
    {
        nombre: " usuario 6",
        usuario: "usuario6",
        password: bcrypt.hashSync("1234567", 10),
        tipo_usuario: "estudiante",
    },
    {
        nombre: " usuario 7",
        usuario: "usuario7",
        password: bcrypt.hashSync("1234567", 10),
        tipo_usuario: "moderador",
    }
];

module.exports = SEED;