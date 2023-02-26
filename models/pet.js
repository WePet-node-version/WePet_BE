'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
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
  Pet.init({
    petId:{
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
    name: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    category : {
      type:DataTypes.STRING,
      allowNull:true,
    },
    age: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    registercode :{
      type:DataTypes.STRING,
      allowNull:true,
    },
    gender: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    neutralization : {
      type:DataTypes.STRING,
      allowNull:true,
    }
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};