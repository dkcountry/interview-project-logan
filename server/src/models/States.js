const Sequelize = require("sequelize");

module.exports = dbConnection => {
  class States extends Sequelize.Model {}

  States.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.TEXT
      }
    },
    {
      sequelize: dbConnection,
      tableName: "states"
    }
  );

  return States;
};
