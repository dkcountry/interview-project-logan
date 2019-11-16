const Sequelize = require("sequelize");

module.exports = dbConnection => {
  class Users extends Sequelize.Model {}

  Users.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: Sequelize.TEXT
      },
      token: {
        type: Sequelize.TEXT
      }
    },
    {
      sequelize: dbConnection,
      tableName: "users"
    }
  );

  return Users;
};
