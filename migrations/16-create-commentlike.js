'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CommentLikes', {
      commentLikeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
          model:'Users',
          key:'userId',
        },
        onDelete:'cascade',
      },
      commentId: {
        allowNull : false,
        type: Sequelize.INTEGER,
        references:{
          model:'Comments',
          key:'commentId',
        },
        onDelete:'cascade',
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
    await queryInterface.dropTable('CommentLikes');
  }
};