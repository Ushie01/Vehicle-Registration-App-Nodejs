const Joi = require('joi');

const validateLoginUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});

const validateSignUpUser = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required().email(),
  phoneNo: Joi.string().required().min(11).max(15),
  role: Joi.string().required(),
  password: Joi.string().required().min(8).max(10),
  confirmPassword: Joi.ref("password")
});

const validateRegTable = Joi.object({
  vehicleCategory: Joi.string().required(),
  vehicleMake: Joi.string().required(),
  color: Joi.string().required(),
  model: Joi.string().required(),
  engineNumber: Joi.string().required(),
  vehicleType: Joi.string().required(),
  engineCapacity: Joi.string().required(),
  tankCapacity: Joi.string().required(),
  notionalIdCard: Joi.string().required(),
  ninImg: Joi.string().required(),
  driverLicenseo: Joi.string().required()
})

module.exports = {
  validateLoginUser,
  validateSignUpUser,
  validateRegTable
};
