const validateRegTable = require('./../validator/validator');
const { vehicle_reg_tbl } = require('../models/userModel');


const vehicleRegistration = async (req, res) => {
    try {
        // const { error } = validateRegTable.validate(req.body);
        // if (error) {
        //     return res.status(400).json({
        //         message: error.details[0].message
        //     });
        // }
        console.log(req.body);
        const {
            vehicleCategory,
            vehicleMake,
            color,
            model,
            engineNumber,
            vehicleType,
            engineCapacity,
            tankCapacity,
            nationalId,
            nin,
            driverLicense
        } = req.body;
   
        const registerVehicle = vehicle_reg_tbl.build({
            vehicleCategory,
            vehicleMake,
            color,
            model,
            engineNumber,
            vehicleType,
            engineCapacity,
            tankCapacity,
            nationalId,
            nin,
            driverLicense
        });

        await registerVehicle.save();
        return res.status(200).json({ // fix typo and set HTTP status code
            message: "Form successfully submitted",
            data: registerVehicle
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { vehicleRegistration };
