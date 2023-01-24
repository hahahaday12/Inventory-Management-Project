const {jwts, hash, handler} = require('../utils');
const {makeRefreshToken, makeAccessToken, verifyToken, isExistSnsId, snsSignUp} = require('../utils/kakao_jwt');
const { errorHandler } = handler;
const axios = require('axios')
const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth"
const KAKAO_AUTH_REDIRECT_URL = "http://localhost:3001/auth/kakao/callback"

module.exports = {
    silent_refresh: async (req, res) => {
        let refreshToken = null;
        try{
            refreshToken = req.headers.cookie.replace("refreshToken=","");
        }catch(err){
            console.log(err);
        }
        const verifyAccessToken = await verifyToken(refreshToken);

        console.log("verifyAccessToken",JSON.stringify(verifyAccessToken));
        if(verifyAccessToken.id){

            // refresh Token 갱신 
            const accessToken = await makeAccessToken(verifyAccessToken.id);
            const refreshToken = await makeRefreshToken(verifyAccessToken.id);
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
            });
            return res.json({accessToken})
        }
        return res.json({test:"Test"})
    },

    callback: async (req, res) => {
    const {code} = req.query;
    try{

        const {data} = await axios({
            method: 'POST',
            url: `${KAKAO_AUTH_URL}/token`,
            headers:{
                'content-type':'application/x-www-form-urlencoded;charset=utf-8'
            },
            params:{
                grant_type: 'authorization_code',//특정 스트링
                client_id:process.env.KAKAO_CLIENT_ID,
                client_secret:process.env.KAKAO_SECRET_ID,
                redirectUri:KAKAO_AUTH_REDIRECT_URL,
                code:code,
            }
        })
        const kakao_access_token = data['access_token'];

        const {data:me} = await axios({
            method: 'GET',
            url: `https://kapi.kakao.com/v2/user/me`,
            headers:{
                'authorization':`bearer ${kakao_access_token}`,
            }
        });

        const {id, kakao_account} = me;

        const userInformation = {
            email: kakao_account.email,
            user_name: kakao_account.email,
            sns_id : id,
            type:'kakao',
        };

        const user_id = await isExistSnsId(userInformation.type, userInformation.sns_id);

        // id가 있는경우 가입이 된 상태이기 떄문에 로그인 로직으로 넘긴다
        if(user_id){
            console.log("user_id", user_id);
            const refreshToken = await makeRefreshToken(user_id);
            console.log("refreshToken:::1", refreshToken);
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
            });
        }else{
            const signUpUserId= await snsSignUp(userInformation);
            // 가입 완료 후 바로 로그인 로직으로 넘겨서 로그인 되게끔 진행한다 
            console.log("signUpUserId", signUpUserId);
            const refreshToken = await makeRefreshToken(signUpUserId);
            console.log("refreshToken:::2", refreshToken);
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
            });
        }
    }catch (error){
        console.log(error);
        return res.status(200).send(errorHandler(error));
    }
    return res.redirect("http://localhost:3000");
    },

    kakao: async (req, res) => {
        return res.redirect(`${KAKAO_AUTH_URL}/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_AUTH_REDIRECT_URL}&response_type=code`)
    }
};

