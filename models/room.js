'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Room.init({
    roomId:{
      allowNull : false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER,
    },
    userId:{
      allowNull:false,
      type:DataTypes.INTEGER,
      references:{
        model:'User',
        key:'userId',
      },
      onDelete:'cascade',
    },
    sender: {
      type:DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};