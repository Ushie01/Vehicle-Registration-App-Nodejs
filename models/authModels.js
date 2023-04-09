const { Sequelize, DataTypes, QueryTypes } = require('sequelize');

//Link Database Via Sequelize
const sequelize = new Sequelize('roadlink', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log(' connection to database is successful');
}).catch((error) => console.log(error, ' sorry an eror'));

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

// Create the table if it doesn't exist
// (async () => {
//   await sequelize.sync({ force: false });
//   console.log('Table created or updated!');
// })();

module.exports = {
  tbl_users,
  sequelize, // export the sequelize object for use in other parts of the code
  DataTypes, // export the DataTypes object for use in other parts of the code
  QueryTypes
};
