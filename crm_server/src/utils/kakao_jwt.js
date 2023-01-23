const {handler} = require('../utils');
const { errorHandler } = handler;

const { user } = require('../models');
const db = require('../models/index');
const jwt = require('jsonwebtoken');

module.exports = {
    isExistSnsId: async (type, sns_id) => {
        console.log(type);
        console.log(sns_id);
        try {
            const result =  await user.findOne({
                where:{
                    type,
                    sns_id
                }
            });
        
            if(result.user_id){
                return result.user_id;
            }else{
                throw new Error();
            }
            
        } catch (error) {
            return false;
            
        }
    },
    snsSignUp: async (data) => {
        try {
            console.log(data);
            // console.log(userNames);
            // console.log(emails);
            // console.log(sns_ids);
            // console.log(types);
            if(data.email && data.user_name){
                try {
                    const rows = await user.create({
                        user_id: data.email,
                        user_name: data.user_name,
                        email: data.email,
                        sns_id : data.sns_id,
                        type : data.type
                    });
                    
                    return rows.user_id;
                } catch (error) {
                    console.log(error);
                    return false
                }
            }
            
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    verifyToken: async (token) => {
        try {
            const decoded = jwt.verify(token, "PASSWORD")
            return decoded;
        } catch (error) {
            // TokenExpiredError
            // 기간 만료 

            // JsonWebTokenError
            // 서명이 유효하지 않거나 수정된 경우 

            // NotBeforeError 
            // jwt형식이 아닌경우  
            if(error.name === 'TokenExpiredError'){
                
            }
            if(error.name === 'JsonWebTokenError'){
                console.log(error);
            }
            if(error.name === 'NotBeforeError'){
                console.log(error);
            }

            console.log(error)
            return false
        }   
    },
    // access 토큰 
    // 유효기간 2시간
    // 매 요청마다 로그인 수행 한다 -> cookie에 있는 거로 
    makeAccessToken: async (id) => {
        try {
            return jwt.sign({
                id
            }, "PASSWORD", {
                expiresIn: '2h'
            })
        } catch (error) {
            
        }
    },
    // refresh 토큰 
    // 유효기간 2주
    makeRefreshToken: async (id) => {
        try {
            return jwt.sign({
                id
            }, "PASSWORD", {
                expiresIn: '14d'
            })
            
        } catch (error) {
            //  로그 남기기
            return "error"
        }
    }
}