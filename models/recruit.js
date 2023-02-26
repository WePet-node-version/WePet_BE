'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recruit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        foreignKey:'userId',
        targetKey:'userId',
      });
    }
  }
  Recruit.init({
    recruitId:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER,
    },
    userId: {
      allowNull:false,
      type:DataTypes.INTEGER,
      references:{
        model:'User',
        key:'userId',
      },
      onDelete:'cascade',
    },
    title: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    content: {
      type:DataTypes.STRING,
      allowNull:true,
    }
  }, {
    sequelize,
    modelName: 'Recruit',
  });
  return Recruit;
};