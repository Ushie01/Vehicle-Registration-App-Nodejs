const express = require('express');
const {
    vehicleRegistration,
    upload,
    multipleUpload,
    driverLicenseReg
} = require('./../controllers/userControllers');
const router = express.Router();

//user route
router.post('/vehicleRegistration', multipleUpload, vehicleRegistration);
router.post('/driverLicenseRegistration', upload.single('file'), driverLicenseReg);


module.exports = router;