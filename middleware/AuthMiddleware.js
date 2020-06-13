const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserService = require('../services/UserService');
const Messages = require('../messages/Messages.json');
const ServerResult = require('../messages/ServerResult');


module.exports = {
    async isUserExists(req, res, next) {
        let {
            username
        } = req.body;

        let response = await UserService.getByOne({
            username,
        });

        if (response.status === 410)
            return res.send(ServerResult.errorResult(Messages.userLoginFailed.code,
                Messages.userLoginFailed.message));

        req.body.user = response.result;

        next();
    },

    async isEmailExists(req, res, next) {
        let {
            email
        } = req.body;

        let response = await UserService.getByOne({
            email,
        });

        if (response.status === 410) {
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
            if (err || response === false) {
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
            process.env.Jwt_Secret_Key, {
                expiresIn: "1m",
            });

        req.body.user = user;
        req.body.token = token;

        next();
    },

    verifyToken(req, res, next) {
        let {
            token
        } = req.body;

        jwt.verify(token, process.env.Jwt_Secret_Key, function (err, decoded) {
            if (err) {
                return res.send(ServerResult.errorResult(Messages.unAuthorized.code, Messages.unAuthorized.message));
            }

            req.body.user = decoded;

            next();
        });
    },
}