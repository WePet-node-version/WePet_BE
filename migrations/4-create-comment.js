'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      commentId: {
        allowNull: false,
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
      communityId: {
        allowNull :false,
        type:Sequelize.INTEGER,
        references:{
          model:'Communities',
          key:'communityId',
        },
        onDelete:'cascade',
      },
      comment: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Comments');
  }
};