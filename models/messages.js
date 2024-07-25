'use strict';
const {
  Model
} = require('sequelize');
const User = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Messages.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  Messages.init({
    userId: DataTypes.BIGINT,
    message: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Messages',
  });
  // Messages.hasOne(User);  
  return Messages;
};

