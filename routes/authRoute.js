const express = require('express');
const { signup, signin } = require('./../controllers/authControllers');

const router = express.Router();

// auth route
router.post('/createUser', signup);
router.post('/login', signin);

// user 
module.exports = router;