const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'bravtwfezvtpndsbuvpe-mysql.services.clever-cloud.com',
  port: '3306',
  username: 'u4bns7dskz3lew9u',
  password: 'OprvzPZftxnjjdXyXgkL',
  database: 'bravtwfezvtpndsbuvpe'
});

// Defining the user table
const tbl_users = sequelize.define('tbl_users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database successfully.');
    await sequelize.sync({ force: false });
    console.log('Models synced with the database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = {
  tbl_users,
  sequelize,
  DataTypes
};
