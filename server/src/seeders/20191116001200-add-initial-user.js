module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async t => {
      await queryInterface.bulkInsert(
        "users",
        [
          {
            id: 1,
            firstName: "Test",
            token: "123",
            createdAt: Sequelize.fn("now"),
            updatedAt: Sequelize.fn("now")
          }
        ],
        {
          transaction: t
        }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async t => {
      await queryInterface.bulkDelete(
        "users",
        {
          id: 1
        },
        {
          transaction: t
        }
      );
    });
  }
};
