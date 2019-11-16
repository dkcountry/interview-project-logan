const Sequelize = require("sequelize");
const { NODE_ENV } = require("../config/env");
const dbConfigEnv = require("../config/dbConfig")[NODE_ENV];

const dbConnection = new Sequelize(dbConfigEnv);

const Users = require("./Users")(dbConnection);

module.exports = { Users };
