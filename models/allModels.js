const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('roadlink_app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


sequelize.authenticate().then(() => {
  console.log('Connection to database is successful');
}).catch((error) => console.log(error, 'Sorry, an error occurred while connecting to the database.'));

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

module.exports = {
  tbl_users,
  // sequelize, // export the sequelize object for use in other parts of the code
  // DataTypes // export the DataTypes object for use in other parts of the code
};
