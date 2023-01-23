const router = require('express').Router();
const { kakaoController: controller } = require('../controller');

router.post('/silent-refresh', controller.silent_refresh);
router.get('/kakao/callback', controller.callback);
router.get('/kakao', controller.kakao);

module.exports = router;