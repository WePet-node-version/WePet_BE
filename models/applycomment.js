'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplyComment extends Model {
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
      this.belongsTo(models.Apply,{
        foreignKey:'applyId',
        targetKey:'applyId',
      });
    }
  }
  ApplyComment.init({
    applycommentId:{
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
    applyId: {
      allowNull:false,
      type:DataTypes.INTEGER,
      references:{
        model:'Apply',
        key:'applyId',
      },
      onDelete:'cascade',
    },
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ApplyComment',
  });
  return ApplyComment;
};