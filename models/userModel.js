// const { sequelize, DataTypes } = require('./../models/authModels');
const { sequelize } = require('./authModels');
const { Sequelize } = require('sequelize');


// Defining the vehicle registration table
const vehicle_reg_tbl = sequelize.define('vehicle_reg_tbl',{
   vehicleCategory:Sequelize.STRING,
   vehicleMake:Sequelize.STRING,
   color:Sequelize.STRING,
   model: Sequelize.STRING,
   engineNumber:Sequelize.STRING,
   vehicleType:Sequelize.STRING,
   engineCapacity: Sequelize.STRING, 
   tankCapacity:Sequelize.STRING,
   nationalId: Sequelize.STRING,
   nin: Sequelize.STRING,
   driverLicense: Sequelize.STRING,
   vehicleRegNo: Sequelize.STRING
}, {tableName:"vehicle_reg_tbl"})



module.exports = { vehicle_reg_tbl };
