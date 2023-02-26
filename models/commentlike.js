'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentLike extends Model {
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
      this.belongsTo(models.Comment,{
        foreignKey:'commentId',
        targetKey:'commentId'
      })
    }
  }
  CommentLike.init({
    userId: {
      allowNull:false,
      type:DataTypes.INTEGER,
      references:{
        model:'User',
        key:'userId'
      },
      onDelete:'cascade',
    },
    commentId:{
      allowNull:false,
      type:DataTypes.INTEGER,
      references:{
        model:'Comment',
        key:'commentId',
      },
      onDelete:'cascade',
    },
  }, {
    sequelize,
    modelName: 'CommentLike',
  });
  return CommentLike;
};