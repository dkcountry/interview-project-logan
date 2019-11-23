'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async t => {
      await queryInterface.bulkInsert(
        "states",
        [
          {
            id: 1,
            name: "California",
            createdAt: Sequelize.fn("now"),
            updatedAt: Sequelize.fn("now")
          },
          {
            id: 2,
            name: "New York",
            createdAt: Sequelize.fn("now"),
            updatedAt: Sequelize.fn("now")
          },
          {
            id: 3,
            name: "Washington",
            createdAt: Sequelize.fn("now"),
            updatedAt: Sequelize.fn("now")
          },
          {
            id: 4,
            name: "Nevada",
            createdAt: Sequelize.fn("now"),
            updatedAt: Sequelize.fn("now")
          },
          {
            id: 5,
            name: "Texas",
            createdAt: Sequelize.fn("now"),
            updatedAt: Sequelize.fn("now")
          },
          {
            id: 6,
            name: "Idaho",
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
      const Op = Sequelize.Op;
      await queryInterface.bulkDelete(
        "states",
        {
          id: {[Op.in]: [1, 2, 3, 4, 5, 6]}
        },
        {
          transaction: t
        }
      );
    });
  }
};
