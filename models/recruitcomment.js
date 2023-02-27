'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecruitComment extends Model {
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
      this.belongsTo(models.Recruit,{
        foreignKey:'recruitId',
        targetKey:'recruitId'
      });
    }

  }
  RecruitComment.init({
    recruitcommentId:{
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
    recruitId: {
      allowNull:false,
      type:DataTypes.INTEGER,
      references:{
        model:'Recruit',
        key:'recruitId',
      },
      onDelete:'cascade',
    },
    comment: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'RecruitComment',
  });
  return RecruitComment;
};