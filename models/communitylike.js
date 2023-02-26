'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommunityLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        foreignKey:'userId',
        targetKey : 'userId',
      });
      this.belongsTo(models.Community,{
        foreignKey:'communityId',
        targetKey:'communityId'
      })
    }
  }
  CommunityLike.init({
    communityLikeId:{
      allowNull:false,
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
    communityId: {
      allowNull:false,
      type:DataTypes.INTEGER,
      references:{
        model:'Community',
        key:'communityId',
      },
      onDelete:'cascade'
    },
  }, {
    sequelize,
    modelName: 'CommunityLike',
  });
  return CommunityLike;
};