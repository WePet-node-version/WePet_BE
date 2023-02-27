'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RecruitComments', {
      RecruitCommentId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'Users',
          key:'userId',
        },
        onDelete:'cascade',
      },
      recruitId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'Recruits',
          key:'recruitId',
        },
        onDelete:'cascade'
      },
      comment: {
        type: Sequelize.STRING
      },
      nickname:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RecruitComments');
  }
};