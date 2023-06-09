const { Sequelize } = require('sequelize');

module.exports = new Sequelize('Testdb', 'sa', 'Tr071093@', {
  host: 'localhost',
  dialect: 'mssql',
  logging: false,
});