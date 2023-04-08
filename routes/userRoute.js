const express = require('express');
const { vehicleRegistration } = require('./../controllers/userControllers');

const router = express.Router();

//user route
router.post('/vehicleRegistration', vehicleRegistration);

module.exports = router;