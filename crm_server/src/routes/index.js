require('dotenv').config();
const userRouter = require('./user');
const productRouter = require('./product');
const kakaoRouter = require('./kakao');

module.exports = {
    userRouter,
    productRouter,
    kakaoRouter
}