'use strict';
const bcrypt = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users', [
            {
                fullName: " usuario 1",
                user: "usuario1",
                password: bcrypt.hashSync("1234567", 10),
                role: "estudiante",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                fullName: " user 2",
                user: "usuario2",
                password: bcrypt.hashSync("1234567", 10),
                role: "estudiante",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                fullName: " user 3",
                user: "usuario3",
                password: bcrypt.hashSync("1234567", 10),
                role: "estudiante",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                fullName: " user 4",
                user: "usuario4",
                password: bcrypt.hashSync("1234567", 10),
                role: "estudiante",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                fullName: " user 5",
                user: "usuario5",
                password: bcrypt.hashSync("1234567", 10),
                role: "estudiante",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                fullName: " user 6",
                user: "usuario6",
                password: bcrypt.hashSync("1234567", 10),
                role: "estudiante",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                fullName: " user 7",
                user: "usuario7",
                password: bcrypt.hashSync("1234567", 10),
                role: "moderador",
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
