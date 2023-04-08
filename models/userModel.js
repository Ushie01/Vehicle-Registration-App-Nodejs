const { sequelize, DataTypes } = require('./../models/authModels');

// Defining the user table
const vehicle_reg_tbl = sequelize.define('tbl_users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  vehicleCategory: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vehicleMake: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  engineNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vehicleType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  engineCapacity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tankCapacity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nationalIdCard: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ninImg: {
    type: DataTypes.STRING,
    allowNull: false
  },
  driverLicenseImg: {
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
(async () => {
  await sequelize.sync({ force: false });
  console.log('Table created or updated!');
})();

module.exports = vehicle_reg_tbl;
