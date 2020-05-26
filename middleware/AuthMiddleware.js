const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
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
            return res.send(ServerResult.errorResult(Messages.userLoginFailed.code,
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
            return res.send(ServerResult.errorResult(Messages.userLoginFailed.code,
                Messages.userLoginFailed.message));
        }

        next();
    },

    verifyPassword(req, res, next) {
        let {
            user,
            password
        } = req.body;

        bcrypt.compare(password, user.password, (err, response) => {
            if (err) {
                return res.send(ServerResult.errorResult(Messages.userLoginFailed.code,
                    Messages.userLoginFailed.message));
            }

            next();
        });
    },

    async createToken(req, res, next) {
        let user = {
            username: req.body.user.username,
        };

        const token = await jwt.sign({
                user,
            },
            config.jwt_secret_key, {
                expiresIn: "1m",
            });

        req.body.user = user;
        req.body.token = token;

        next();
    },

    async verifyToken(req, res, next) {
        let {
            token
        } = req.body;

        await jwt.verify(token, config.jwt_secret_key, function (err, decoded) {
            if (err) {
                return res.send(ServerResult.errorResult(Messages.unAuthorized.code, Messages.unAuthorized.message));
            }

            req.body.user = decoded;

            next();
        });
    },
}