const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "edii_recruitment",
  "root",
  "", // password MySQL kamu
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;
