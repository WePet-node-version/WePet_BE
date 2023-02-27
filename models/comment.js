'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
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
      this.belongsTo(models.Community,{
        foreignKey:'communityId',
        targetKey:'communityId',
      });
      this.hasMany(models.CommentLike,{
        foreignKey:'commentId',
        sourceKey:'commentId'
      })
    }
  }
  Comment.init({
    commentId:{
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
        key:'userId',
      },
      onDelete:'cascade'
    },
    communityId: {
      allowNull:false,
      type: DataTypes.INTEGER,
      references:{
        model:'Community',
        key:'communityId',
      },
      onDelete:'cascade',
    },
    comment: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    likeCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    nickname:{
      type:DataTypes.STRING,
      allowNull:false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },{
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};