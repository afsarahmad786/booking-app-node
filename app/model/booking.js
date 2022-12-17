const Sequelize = require("sequelize");
// import { DataTypes } from "sequelize";
const sequelize = require("../util/database");

const User = sequelize.define("user1", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  phone: {
    type: Sequelize.STRING,
  },
  email: Sequelize.STRING,
});

module.exports = User;
