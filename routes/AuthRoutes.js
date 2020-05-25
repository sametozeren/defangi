const ConsoleResult = require('../messages/ConsoleResult');
const expres = require('express');
const router = expres.Router();
const UserService = require('../services/UserService');
const {
    UserMiddleware,
    AuthMiddleware
} = require('../middleware/index');

// Production da olması gerekmeyebilir.&/?
router.post('/register', [UserMiddleware.isUserExists, UserMiddleware.isEmailExists, UserMiddleware.passwordHash],
    async (req, res) => {
        res.json(await UserService.add(req.body));
    });

router.post('/login', [AuthMiddleware.isUserExists, AuthMiddleware.verifyPassword, AuthMiddleware.createToken],
    async (req, res) => {
        res.json(await req.body);
    });

module.exports = router;