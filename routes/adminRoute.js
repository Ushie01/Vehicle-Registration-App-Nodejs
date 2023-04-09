const express = require('express');
const { 
    adminApproval,
    getAllVehicleRegistration,
    getAllDriverLicenseRegistration
} = require('./../controllers/adminControllers');

const router = express.Router();
// auth route
router.patch('/userDocumentApproval', adminApproval);
router.get('/',
    getAllVehicleRegistration,
    getAllDriverLicenseRegistration
)

// user 
module.exports = router;