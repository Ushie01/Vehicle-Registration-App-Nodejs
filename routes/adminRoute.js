const express = require('express');
const { adminApproval } = require('./../controllers/adminControllers');

const router = express.Router();
// auth route
router.patch('/userDocumentApproval', adminApproval);

// user 
module.exports = router;