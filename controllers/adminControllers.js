const { sequelize, QueryTypes } = require('./../models/authModels');
const adminApproval = async (req, res) => {
    try {
        const { phoneNo, status } = req.body;
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
};

// const getAllVehicleRegistration = async () => {
//     try {
//         const allVehicleRegistration = await sequelize.query()
//     } catch (error) {
//         console.error(error)
//     }
// }

module.exports = {
    adminApproval,
};

