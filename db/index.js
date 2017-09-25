const Sequelize = require('sequelize');
<<<<<<< HEAD
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL);

const Users = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
=======

require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_URL);

const Users = sequelize.define('users', {
  name: {
    type: sequelize.STRING
  },
  password: {
    type: sequelize.STRING
>>>>>>> message controllers exist
  }
})

const Fridge = sequelize.define('fridge', {
<<<<<<< HEAD
  users: {
    type: Sequelize.ARRAY({type: Sequelize.INTEGER})
  },
  name: {
    type: Sequelize.STRING
  }
})

const FridgeItems = sequelize.define('fridgeItem', {
  name: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  type: {
    type: Sequelize.STRING
  }
})

const MessageInfo = sequelize.define('messageInfo', {
  messageText: {
    type: Sequelize.STRING
  }
})

FridgeItems.belongsTo(Fridge, {foreignKey: 'fridgeId', allowNull: true, onDelete: 'CASCADE'});
Fridge.hasMany(FridgeItems, {foreignKey: 'fridgeId', allowNull: true, onDelete: 'CASCADE'});

MessageInfo.belongsTo(Fridge, {foreignKey: 'fridgeId', allowNull: true, onDelete: 'CASCADE'});
Fridge.hasMany(MessageInfo, {foreignKey: 'fridgeId', allowNull: true, onDelete: 'CASCADE'});

MessageInfo.belongsTo(Users, {foreignKey: 'userId', allowNull: false, onDelete: 'CASCADE'});
Users.hasMany(MessageInfo, {foreignKey: 'userId', allowNull: false, onDelete: 'CASCADE'});

FridgeItems.belongsTo(Users, {foreignKey: 'userId', allowNull: false, onDelete: 'CASCADE'});
Users.hasMany(FridgeItems, {foreignKey: 'userId', allowNull: false, onDelete: 'CASCADE'});
=======
  number: {
    type: sequelize.INTEGER
  }
})

const FridgeItems = sequelize.define('fridgeItems', {
  name: {
    type: sequelize.STRING
  },
  quantity: {
    type: sequelize.INTEGER
  },
  type: {
    type: sequelize.STRING
  }
})

const MessageInfo = sequelize.define('messageBoard', {
  messageText: {
    type: sequelize.STRING
  }
})

Users.belongsTo(Fridge);
Fridge.hasMany(Users);
Fridge.hasMany(FridgeItems);
FridgeItems.belongsTo(Fridge);
Fridge.hasMany(MessageInfo);
MessageInfo.belongsTo(Fridge);

sequelize.sync({force:false});
>>>>>>> message controllers exist

module.exports.users = Users;
module.exports.fridge = Fridge;
module.exports.fridgeItems = FridgeItems;
module.exports.messageInfo = MessageInfo;
<<<<<<< HEAD
=======


>>>>>>> message controllers exist
