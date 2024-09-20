// configurando o Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mistery_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
