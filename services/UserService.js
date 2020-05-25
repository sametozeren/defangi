const BaseService = require('./BaseService');
const UserModel = require('../models/User');

class UserService extends BaseService {
    model = UserModel;

    //TODO
}

module.exports = new UserService();