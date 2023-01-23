const router = require('express').Router();
const { productController: controller, userController: controller2 } = require('../controller');

router.post('/', controller2.tokenChek, controller.getProduct);

module.exports = router;