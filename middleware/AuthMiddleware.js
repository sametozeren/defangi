const Bcrypt = require('bcrypt');
const UserService = require('../services/UserService');
const Messages = require('../messages/Messages.json');
const ServerResult = require('../messages/ServerResult');


module.exports = {
    async isUserExists(req, res, next) {
        let {
            username
        } = req.body;

        let result = await UserService.getByOne({
            username,
        });

        if (result.status === 410)
            return res.json(ServerResult.errorResult(Messages.userLoginFailed.code,
                Messages.userLoginFailed.message));

        req.body.user = result.result;

        next();
    },

    async isEmailExists(req, res, next) {
        let {
            email
        } = req.body;

        let result = await UserService.getByOne({
            email,
        });

        if (result.status === 410) {
            return res.json(ServerResult.errorResult(Messages.userLoginFailed.code,
                Messages.userLoginFailed.message));
        }

        next();
    },

    verifyPassword(req, res, next) {
        let {
            user,
            password
        } = req.body;

        Bcrypt.compare(password, user.password, (err, response) => {
            if (err) {
                return res.json(ServerResult.errorResult(Messages.userLoginFailed.code,
                    Messages.userLoginFailed.message));
            }

            next();
        });
    },

    createToken(req, res, next) {
        next();
    },
}