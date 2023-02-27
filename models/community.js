'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Community extends Model {
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
      this.hasMany(models.Comment,{
        foreignKey:'communityId',
        sourceKey:'communityId'
      });
      this.hasMany(models.CommunityLike,{
        foreignKey:'communityId',
        sourceKey:'communityId'
      })
    }
  }
  Community.init({
    communityId:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER,
    },
    userId:{
      allowNull:false,
      type: DataTypes.INTEGER,
      references:{
        model:'User',
        key :'userId',
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
    },
    likeCount:{
      type:DataTypes.INTEGER,
      allowNull:true,
      defaultValue:0,
    },
    nickname:{
      type:DataTypes.STRING,
      allowNull:false
    },
    image:{
      type:DataTypes.STRING,
      allowNull:true,
    }
  }, {
    sequelize,
    modelName: 'Community',
  });
  return Community;
};