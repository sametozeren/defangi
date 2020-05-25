const BaseService = require('./BaseService');
const UserModel = require('../models/UserModel');

class UserService extends BaseService {
    model = UserModel;
}

module.exports = new UserService();