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


//  Defining the driver license registration table
const license_reg_tbl = sequelize.define('license_reg_tbl',{
   firstName:Sequelize.STRING,
   lastName:Sequelize.STRING,
   email:Sequelize.STRING,
   homeAddress: Sequelize.STRING,
   city:Sequelize.STRING,
   state: Sequelize.STRING,
   phoneNo:Sequelize.STRING,
   vehicleLicenseNumber: Sequelize.STRING, 
   drivingSchCertificate:Sequelize.STRING
}, {tableName:"license_reg_tbl"})
module.exports = { vehicle_reg_tbl, license_reg_tbl };
