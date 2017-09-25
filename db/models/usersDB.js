const Sequelize = require('sequelize');

const sequelize = new Sequelize('users', 'root', '', {
  dialect: 'mysql'
});

const Users = sequelize.define('users', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

sequelize.sync();

module.exports.users = Users;