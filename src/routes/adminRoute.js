const express = require('express');
const { 
    vehicleApproval,
    licenseApproval,
    deleteUserVehicleFile,
    deleteUserLicenseFile,
    getAllVehicleRegistration,
    getAllDriverLicenseRegistration
} = require('./../controllers/adminControllers');

const router = express.Router();
// auth route
router.patch('/userVehicleApproval/:phoneNo/:status', vehicleApproval);
router.patch('/userLicenseApproval/:phoneNo/:status', licenseApproval);
router.get('/allVehicleReg', getAllVehicleRegistration);
router.get('/allLicenseReg', getAllDriverLicenseRegistration)
router.delete('/deleteVehicleDoc/:phoneNo', deleteUserVehicleFile);
router.delete('/deleteLicenseDoc/:phoneNo', deleteUserLicenseFile);
// user 
module.exports = router;