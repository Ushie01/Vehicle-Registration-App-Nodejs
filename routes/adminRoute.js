const express = require('express');
const { 
    vehicleApproval,
    licenseApproval,
    getAllVehicleRegistration,
    getAllDriverLicenseRegistration
} = require('./../controllers/adminControllers');

const router = express.Router();
// auth route
router.patch('/userVehicleApproval', vehicleApproval);
router.patch('/userLicenseApproval', licenseApproval);
router.get('/allVehicleReg', getAllVehicleRegistration);
router.get('/allLicenseReg', getAllDriverLicenseRegistration)

// user 
module.exports = router;