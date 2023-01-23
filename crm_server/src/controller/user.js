require('dotenv').config();
const { user } = require('../models');
const {jwt, hash, handler} = require('../utils');

const { errorHandler } = handler;
const fs = require('fs');

module.exports = {

    SignUp: async (req, res) => {
        try {
            let {
                userid,
                password,
                username,
                email
            } = req.body
            let hashing = hash.generateHash(password);
            const rows = await user.create({
                user_id: userid,
                password: hashing,
                user_name: username,
                email: email
            });
            if (rows) return res.status(200).json({
                result: true
            });
            else throw {
                code: 4
            }
        } catch (err) {
            console.log(err);
            return res.status(200).send(errorHandler(err));
        }
    },

    CheckId: async (req, res) => {
        try {
            let {
                userid
            } = req.body
            const rows = await user.findOne({
                where: {
                    user_id: userid
                }
            })
            if (rows) {
                return res.status(200).json({
                    result: false
                });
            } else {
                return res.status(200).json({
                    result: true
                });
            }
        } catch (err) {
            return res.status(200).send(errorHandler(err));
        }
    },

    // EmailAuth: async (req, res) => {
    //     try {
    //         let {
    //             email
    //         } = req.body;
    //         let authCode = Math.random().toString().substr(2, 6);
    //         const mailing = mail.CheckMail(email, authCode)
    //         return res.status(200).json({
    //             result: authCode
    //         });
    //     } catch (error) {
    //         return res.status(200).send(errorHandler(error));
    //     }
    // },

    SignIn: async (req, res) => {
        try {
            let {
                userid,
                password
            } = req.body
            console.log(req.body)
            const rows = await user.findOne({
                where: {
                    user_id: userid
                }
            });

            if (!rows) throw {
                code: 10
            }
            const checking = hash.compareHash(password, rows.password);
            console.log(rows.password);
            if (checking) {
                let token = jwt.createToken(rows.user_id);
                return res.status(200).json({
                    token: token
                });
            } else throw {
                code: 11
            }
        } catch (err) {
            console.log(err);
            return res.status(200).send(errorHandler(err));
        }
    },

    UserInfo: async (req, res) => {
        try {
            let {
                token
            } = req.body;
            let decoded = jwt.verifyToken(token);
            const rows = await user.findOne({
                where: {
                    user_id: decoded.user_id
                }
            })
            if (rows) return res.status(200).json({
                result: rows
            });
            else throw {
                code: 4
            }
        } catch (err) {
            return res.status(200).send(errorHandler(err));
        }
    },

    tokenChek: async (req, res, next) => {
        try {
            let decoded = jwt.verifyToken(req.headers.token);
            const rows = await user.findOne({
                where: {
                    user_id: decoded.userId
                }
            })
            console.log(rows);
            if (rows){
                next();
            }
            else throw {
                code: 4
            }
        } catch (err) {
            console.log(err);
            return res.status(200).send(errorHandler(err));
        }
    }

    // MemberInfo: async (req, res) => {
    //     try {
    //         let {
    //             user_name
    //         } = req.body;
    //         console.log(req.body);
    //         const rows = await user.findOne({
    //             where: {
    //                 user_name: user_name
    //             }
    //         })
    //         if (rows) return res.status(200).json({
    //             result: rows
    //         });
    //         else throw {
    //             code: 4
    //         }
    //     } catch (err) {
    //         return res.status(200).send(errorHandler(err));
    //     }
    // },

    // EditProfileImg: async (req, res) => {
    //     try {
    //         let {
    //             token
    //         } = req.body;
    //         let decoded = jwt.verifyToken(token);
    //         let image = '/img/' + req.file.filename;
    //         const rows2 = await user.findOne({
    //             where: {
    //                 user_id: decoded.user_id
    //             }
    //         })
    //         const rows = await user.update({
    //             user_img: image,
    //         }, {
    //             where: {
    //                 user_id: decoded.user_id
    //             }
    //         })
    //         if (rows2.user_img) {
    //             const deleteImg = rows2.user_img.split('/')[2]
    //             fs.unlink(`./uploads/${deleteImg}`, (err) => {
    //                 if (err) console.log(err);
    //                 console.log('File deleted!');
    //             })
    //         }
    //         if (rows) return res.status(200).json({
    //             result: true
    //         });
    //         else throw {
    //             code: 4
    //         }
    //     } catch (err) {
    //         return res.status(200).send(errorHandler(err));
    //     }
    // },

}