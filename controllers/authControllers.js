const { validateLoginUser, validateSignUpUser } = require('./../validator/validator');
const bcrypt = require('bcrypt');
const { tbl_users } = require('../models/authModels');


const signup = async (req, res) => {
    try {
        const { error } = validateSignUpUser.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            });
        }
        const { firstName, lastName, email, phoneNo, role } = req.body;
        const password = await bcrypt.hash(req.body.password, 10);
        // const randomNumber = Math.floor(Math.random() * 900000 + 100000)
        const recordExist = await tbl_users.findOne({ where: { email: email } });

        if (recordExist) {
            return res.status(403).json({message: "Email already exist!"})
        } else {
            const saveUser = tbl_users.build({
            firstName,
            lastName,
            email,
            phoneNo,
            role,
            password
            });

            await saveUser.save();
            return res.status(200).json({
                message: "Account successfully created",
                data: saveUser
            })
        };

    } catch(err) {
        console.error(err)
    }
}

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { error } = validateLoginUser.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const user = await tbl_users.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Incorrect email or password' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Incorrect email or password' });
        }

        return res.status(200).json({
            message: 'Successfully logged in',
            userDetails: user
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}



module.exports = {signup, signin}