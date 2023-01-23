const { product } = require('../models');
const {handler} = require('../utils');

const { errorHandler } = handler;

module.exports = {
    getProduct : async (req, res) => {
        try{
            let {
                userid
            } = req.body;
            console.log(req.body);
            const rows = await product.findAll({
                where: {
                    user_id: userid
                }
            });
            
            if (rows) return res.status(200).json({
                result: rows
            });

            if (!rows) throw {
                code: 10
            }
        } catch (err) {
            console.log(err);
            return res.status(200).send(errorHandler(err));
        }
    },
}