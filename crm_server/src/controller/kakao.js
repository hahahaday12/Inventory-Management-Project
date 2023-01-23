const {jwts, hash, handler} = require('../utils');
const {makeRefreshToken, makeAccessToken, verifyToken, isExistSnsId, snsSignUp} = require('../utils/kakao_jwt');
const { errorHandler } = handler;
const axios = require('axios')

const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth"
const KAKAO_AUTH_REDIRECT_URL = "http://localhost:3001/auth/kakao/callback"

module.exports = {
    silent_refresh: async (req, res) => {
        console.log(req);
        const {refreshToken} = req.cookies;
        console.log(refreshToken);
        const verifyAccessToken = verifyToken(refreshToken);

        if(verifyAccessToken.id){

            // refresh Token 갱신 
            const accessToken = makeAccessToken(verifyAccessToken.id);
            const refreshToken = makeRefreshToken(verifyAccessToken.id);
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true
            });
            return res.json({accessToken})
        }
        return res.json({test:"Test"})
    },

    callback: async (req, res) => {
    console.log(req.query);
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

        console.log(kakao_access_token);

        const {data:me} = await axios({
            method: 'GET',
            url: `https://kapi.kakao.com/v2/user/me`,
            headers:{
                'authorization':`bearer ${kakao_access_token}`,
            }
        });

        const {id, kakao_account} = me;

        console.log(me);

        console.log("test", kakao_account)
        
        const userInformation = {
            email: kakao_account.email,
            user_name: kakao_account.email,
            sns_id : id,
            type:'kakao',
        };

        const user_id = await isExistSnsId(userInformation.type, userInformation.sns_id);

        console.log(user_id)
        // id가 있는경우 가입이 된 상태이기 떄문에 로그인 로직으로 넘긴다
        if(user_id){
            const refreshToken = makeRefreshToken(user_id);
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true
            });
        }else{
            const signUpUserId= await snsSignUp(userInformation);
            // 가입 완료 후 바로 로그인 로직으로 넘겨서 로그인 되게끔 진행한다 
            const refreshToken = makeRefreshToken(signUpUserId);
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true
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

