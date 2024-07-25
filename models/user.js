'use strict';
const {
  Model
} = require('sequelize');
const Messages = require('./messages');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Messages, {
        foreignKey: 'userId', 
        as: 'messages' 
      });
    }
  }
  User.init({
    fullName: DataTypes.STRING,
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.ENUM('estudiante', 'moderador')
  }, {
    sequelize,
    modelName: 'User',
  });
  // User.hasMany(Messages)
  return User;
};