const bcrypt = require('bcrypt');
const UserService = require('../services/UserService');
const ServerResult = require('../messages/ServerResult');
const Messages = require('../messages/Messages.json');

module.exports = {
    async isUserExists(req, res, next) {
        let {
            username
        } = req.body;

        let result = await UserService.getByOne({
            username,
        });

        if (result.status === 200)
            return res.send(ServerResult.errorResult(Messages.userNameAlreadyExist.code,
                Messages.userNameAlreadyExist.message));

        next();
    },

    async isEmailExists(req, res, next) {
        let {
            email
        } = req.body;

        let result = await UserService.getByOne({
            email,
        });

        if (result.status === 200) {
            return res.send(ServerResult.errorResult(Messages.userEmailAlreadyExist.code,
                Messages.userEmailAlreadyExist.message));
        }

        next();
    },

    passwordHash(req, res, next) {
        let {
            password
        } = req.body;

        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                return res.send(ServerResult.errorResult(Messages.passwordHashMethodNotAllowed.code,
                    Messages.passwordHashMethodNotAllowed.message));
            }

            req.body.password = hashedPassword;

            next();
        });
    },
}