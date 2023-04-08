const express = require('express');
const { signup, signin } = require('./../controllers/authControllers');

const router = express.Router();
router.post('/createUser', signup);
router.post('/login', signin);

module.exports = router;