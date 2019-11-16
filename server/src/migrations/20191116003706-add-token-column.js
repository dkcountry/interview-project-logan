module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async t => {
      await queryInterface.addColumn(
        "users",
        "token",
        {
          type: Sequelize.TEXT
        },
        { transaction: t }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async t => {
      await queryInterface.removeColumn("users", "token", { transaction: t });
    });
  }
};
