const express = require('express');
const { vehicleRegistration, multipleUpload } = require('./../controllers/userControllers');

const router = express.Router();

//user route
router.post('/vehicleRegistration', multipleUpload, vehicleRegistration);

module.exports = router;