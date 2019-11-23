const Sequelize = require("sequelize");
const { NODE_ENV } = require("../config/env");
const dbConfigEnv = require("../config/dbConfig")[NODE_ENV];

const dbConnection = new Sequelize(dbConfigEnv);

const Users = require("./Users")(dbConnection);
const States = require("./States")(dbConnection);
const UserState = dbConnection.define('user_state');

Users.belongsToMany(States, {
	through: 'UserState'
});

States.belongsToMany(Users, {
	through: 'UserState'
})

module.exports = { Users, States };
