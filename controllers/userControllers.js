const multer = require('multer');
const fs = require('fs');
const validateRegTable = require('./../validator/validator');
const { vehicle_reg_tbl, license_reg_tbl } = require('../models/userModel');
const { sequelize } = require('../models/authModels');
const { QueryTypes } = require('sequelize');


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const dir = "uploads/";
    !fs.existsSync(dir) && fs.mkdirSync(dir);
    callback(null, "uploads/");
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    let ext = file.originalname.lastIndexOf(".");
    ext = file.originalname.substr(ext + 1);
    callback(null, `${file.fieldname}-${uniqueSuffix}.${ext}`);
  },
});

const upload = multer({ storage }); 
const multipleUpload = upload.fields([{ name: 'file1' }, { name: 'file2' }, { name: 'file3' }])


// get single user vehicle document
const getSingleVehDoc = async (req, res) => {
  try {
    const results = await sequelize.query('SELECT * FROM vehicle_reg_tbl WHERE vehicleRegNo = :vehicleRegNo', {
      replacements: { vehicleRegNo: req.body.vehicleRegNo },
      type: QueryTypes.SELECT,
      nest: true // optional, returns a nested object instead of a flat array
    });
     console.log(results);
    if (results) {
      res.status(200).json({
        results
      });
    } else {
      res.status(404).json({
        message: 'No product found for the given product ID'
      });
    }
   
    } catch (err) {
      res.send({ message: err });
    }
};

// get single user license document
const getSingleLicDoc = async (req, res) => {
  try {
    const results = await sequelize.query('SELECT * FROM license_reg_tbl WHERE licenseRegNo = :licenseRegNo', {
      replacements: { licenseRegNo: req.body.licenseRegNo },
      type: QueryTypes.SELECT,
      nest: true // optional, returns a nested object instead of a flat array
    });
     console.log(results);
    if (results) {
      res.status(200).json({
        results
      });
    } else {
      res.status(404).json({
        message: 'No product found for the given product ID'
      });
    }
   
    } catch (err) {
      res.send({ message: err });
    }
};

const vehicleRegistration =  async (req, res) => {
  try {
    // const { error } = validateRegTable.validate(req.body);
    // if (error) {
    //     return res.status(400).json({
    //         message: error.details[0].message
    //     });
    // }
    const randomNumber = Math.floor(Math.random() * 900) + 100;
    const randomLetters = Math.random().toString(36).substring(2, 4).toUpperCase();
    const status = 'false';
    const {
      vehicleCategory,
      vehicleMake,
      color,
      model,
      engineNumber,
      vehicleType,
      engineCapacity,
      tankCapacity,
      phoneNo
    } = req.body;
    const user = await vehicle_reg_tbl.findOne({ where: { phoneNo: phoneNo } });
    if (user) {
      return res
        .status(403)
        .json({
          message: "User already exist with the provided phone number"
        });
    } else {
      const registerVehicle = vehicle_reg_tbl.build({
          vehicleCategory,
          vehicleMake,
          color,
          model,
          engineNumber,
          vehicleType,
          engineCapacity,
          tankCapacity,
          phoneNo,
          status,
          nationalId: req.files.file1[0].filename,
          nin: req.files.file2[0].filename,
          driverLicense: req.files.file3[0].filename,
          vehicleRegNo: `CRS-${randomNumber.toString() + randomLetters}`
      });

      await registerVehicle.save();
      return res.status(200).json({ // fix typo and set HTTP status code
          message: "Form successfully submitted",
          data: registerVehicle
      }); 
    }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'Internal server error'
      });
    }
};

const driverLicenseReg = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      homeAddress,
      city,
      state,
      phoneNo,
      vehicleRegNo
    } = req.body;
    const randomNumbers = Math.floor(Math.random() * 90000) + 10000; // generates a random number between 100 and 999
    const randomLetters = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    const user = await license_reg_tbl.findOne({ where: { phoneNo: phoneNo } });
    const status = 'false';
    if (user) {
      return res
        .status(403)
        .json({
          message: "User already exist with the provided phone number"
        })
    } else {
      const registerLicense = license_reg_tbl.build({
        firstName,
        lastName,
        email,
        homeAddress,
        city,
        state,
        phoneNo,
        status,
        vehicleRegNo,
        drivingSchCert: req.file.filename,
        licenseRegNo: `CRS${randomNumbers.toString() + randomLetters + randomNumber.toString()}`
      });
      // delete registerLicense
      await registerLicense.save();
      return res.status(200).json({
        message: "Form successfully submitted",
        data: registerLicense
      }) 
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
}


module.exports = {
  vehicleRegistration,
  upload,
  multipleUpload,
  driverLicenseReg,
  getSingleVehDoc,
  getSingleLicDoc
};
