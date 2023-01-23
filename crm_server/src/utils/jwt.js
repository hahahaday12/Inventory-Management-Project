require('dotenv').config();

const jwt = require('jsonwebtoken');
//const { ACCESS_KEY } = process.env.REACT_APP_TOKEN;
const { user } = require('../models');

module.exports = {
  createToken: (payload) => {
    console.log()
    const token = jwt.sign({ userId: payload.toString() }, process.env.REACT_APP_TOKEN, {
      algorithm: 'HS256',
      expiresIn: '1y',
    });
    return token;
  },
  verifyToken: (token) => {
    let decoded = jwt.verify(token, process.env.REACT_APP_TOKEN);
    return decoded;
  },
  
  checkToken: async (data) => {
    try {
      let check = await dao.findById(user, getChangeDate(data));
      return check;
    } catch (e) { console.log(e) }
  },
};