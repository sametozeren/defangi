const expres = require('express');
const router = expres.Router();
const UserService = require('../services/UserService');
const Messages = require('../messages/Messages.json');
const ServerResult = require('../messages/ServerResult');

const {
    UserMiddleware,
    AuthMiddleware
} = require('../middleware/index');

router.post('/register', [UserMiddleware.isUserExists, UserMiddleware.passwordHash],
    async (req, res) => {
        res.send(await UserService.add(req.body));
    });

router.post('/login', [AuthMiddleware.isUserExists, AuthMiddleware.verifyPassword, AuthMiddleware.createToken],
    async (req, res) => {
        res.send(ServerResult.successResult(Messages.userLoginSuccess.code, Messages.userLoginSuccess.message, {
            token: req.body.token,
            expiresIn: new Date().getTime() + 3600 * 1000, //default 1 hour
        }));
    });

module.exports = router;