const bcrypt = require('bcryptjs');
require('dotenv').config();
//const SALT = process.env.TOKEN;


module.exports = {
    generateHash: (password) => {
        //const hashpassword = 
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    },

    //userSend PW match DB PW
    compareHash: (password, dbpassword) => {
        return bcrypt.compareSync(password, dbpassword);
    },
};