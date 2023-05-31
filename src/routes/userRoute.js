const express = require('express');
const {
    vehicleRegistration,
    upload,
    multipleUpload,
    driverLicenseReg,
    getSingleVehDoc,
    getSingleLicDoc
} = require('./../controllers/userControllers');
const router = express.Router();

//user route
router.post('/vehicleRegistration', multipleUpload, vehicleRegistration);
router.post('/driverLicenseRegistration', upload.single('file'), driverLicenseReg);
router.get('/getUserVehDocument', getSingleVehDoc);
router.get('/getUserLicDocument', getSingleLicDoc);

module.exports = router;