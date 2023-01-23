const router = require('express').Router();
const { userController: controller } = require('../controller');

/**
 * @swagger
 * /user/signup:
 *    post:
 *      description: Returns all users
 *      responses:
 *        '200':
 *          description: Successfully returned all user
 *        '500':
 *          description: Failed to query for users
 *    put:
 *      description: Use to insert a new user
 *    parameters:
 *      - name: firstName
 *        in: body
 *        description: Firstname of the user
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: lastName
 *        in: body
 *        description: lastName of the user
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: Successfully inserted a user
 *      '500':
 *        description: Failed to insert a user
 */
router.post('/signup', controller.SignUp);
router.post('/idcheck', controller.CheckId);
router.post('/signin', controller.SignIn);
router.post('/userinfo', controller.UserInfo);

module.exports = router;