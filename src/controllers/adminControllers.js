const { sequelize, QueryTypes } = require('./../models/authModels');

const vehicleApproval = async (req, res) => {
    try {
        const { phoneNo, status } = req.params;
        const approveUserDocument = await sequelize.query(
            'UPDATE `vehicle_reg_tbl` SET `status`=:status WHERE `phoneNo`=:phoneNo',
            { replacements: { phoneNo, status }, type: QueryTypes.UPDATE }
        );
        return res.status(200).json({
            message: 'User document has been successfully approved',
            data: approveUserDocument,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'An error occurred while approving user document',
            error: error.message,
        });
    }
};

const licenseApproval = async (req, res) => {
    try {
        const { phoneNo, status } = req.params;
        const approveUserDocument = await sequelize.query(
            'UPDATE `license_reg_tbl` SET `status`=:status WHERE `phoneNo`=:phoneNo',
            { replacements: { phoneNo, status }, type: QueryTypes.UPDATE }
        );
        return res.status(200).json({
            message: 'User document has been successfully approved',
            data: approveUserDocument,
        });      
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'An error occurred while approving user document',
            error: error.message,
        });  
    }
}

const getAllVehicleRegistration = async (req, res) => {
    try {
        const allVehicleRegistration = await sequelize.query(`SELECT * FROM vehicle_reg_tbl`)
        const finalResult = Object.assign([], ...allVehicleRegistration);
        if (finalResult.length > 0) {
            return res.status(200).json({
                finalResult
            });
        } else {
            return res.status(404).json({
                message: 'No document found'
            })
        }
    } catch (error) {
        console.error(error);
        return res.status(501).json({
            message: "Internal server error"
        })
    }
}

const getAllDriverLicenseRegistration = async (req, res) => {
    try {
        const allLicenseReg = await sequelize.query(`SELECT * FROM license_reg_tbl`)
        const finalResult = Object.assign([], ...allLicenseReg);
        if (finalResult.length > 0) {
            return res.status(200).json({
                finalResult
            });
        } else {
            return res.status(404).json({
                message: 'No document found'
            })
        }
    } catch (error) {
        console.error(error);
        return res.status(501).json({
            message: "Internal server error"
        })
    }
}

const deleteUserVehicleFile = async (req, res) => {
    try {
        const result = await sequelize.query('DELETE FROM vehicle_reg_tbl WHERE phoneNo = :phoneNo', {
            replacements: { phoneNo: req.params.phoneNo },
            type: QueryTypes.DELETE,
            nest: true
        });

        if (!result) {
            res.status(200).json({
                message: 'Document deleted successfully'
            });
        } else {
            res.status(404).json({
                message: 'Document found for the given role phone number'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}


const deleteUserLicenseFile = async (req, res) => {
    try {
        const result = await sequelize.query('DELETE FROM license_reg_tbl WHERE phoneNo = :phoneNo', {
            replacements: { phoneNo: req.params.phoneNo },
            type: QueryTypes.DELETE,
            nest: true
        });

        if (!result) {
            res.status(200).json({
                message: 'Document deleted successfully'
            });
        } else {
            res.status(404).json({
                message: 'Document found for the given role phone number'
            });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

module.exports = {
    licenseApproval,
    vehicleApproval,
    getAllVehicleRegistration,
    getAllDriverLicenseRegistration,
    deleteUserVehicleFile,
    deleteUserLicenseFile
};

