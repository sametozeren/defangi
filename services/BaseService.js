const ServerResult = require('../messages/ServerResult');
const Messages = require('../messages/Messages.json');

module.exports = class BaseService {
    async getAll() {
        try {
            var result = await this.model.find();

            if (result.length===0) {
                return ServerResult.errorResult(Messages.sourceNotFound.code, Messages.sourceNotFound.message, result);
            }

            return ServerResult.successResult(Messages.getSuccess.code, Messages.getSuccess.message, result);
        } catch (error) {
            return ServerResult.errorResult(Messages.notUnderstood.code, Messages.notUnderstood.message);
        }
    }

    async getById(itemId) {
        try {
            var result = await this.model.findById(itemId);

            if (!result) {
                return ServerResult.errorResult(Messages.sourceNotFound.code, Messages.sourceNotFound.message, result);
            }

            return ServerResult.successResult(Messages.getSuccess.code, Messages.getSuccess.message, result);
        } catch (error) {
            return ServerResult.errorResult(Messages.notUnderstood.code, Messages.notUnderstood.message);
        }
    }

    async getByOne(conditionsObject) {
        try {
            var result = await this.model.findOne(conditionsObject);

            if (!result) {
                return ServerResult.errorResult(Messages.sourceNotFound.code, Messages.sourceNotFound.message, result);
            }

            return ServerResult.successResult(Messages.getSuccess.code, Messages.getSuccess.message, result);
        } catch (error) {
            return ServerResult.errorResult(Messages.notUnderstood.code, Messages.notUnderstood.message);
        }
    }

    async add(item) {
        try {
            var result = await this.model.create(item);

            if (!result) {
                return ServerResult.errorResult(Messages.sourceNotFound.code, Messages.sourceNotFound.message, result);
            }

            return ServerResult.successResult(Messages.addSuccess.code, Messages.addSuccess.message, result);
        } catch (error) {
            return ServerResult.errorResult(Messages.notUnderstood.code, Messages.notUnderstood.message);
        }
    }

    async update(item) {
        try {
            var result = await this.model.update(item);//TODO: they will be checked

            if (!result) {
                return ServerResult.errorResult(Messages.sourceNotFound.code, Messages.sourceNotFound.message, result);
            }

            return ServerResult.successResult(Messages.updateSuccess.code, Messages.updateSuccess.message, result);
        } catch (error) {
            return ServerResult.errorResult(Messages.notUnderstood.code, Messages.notUnderstood.message);
        }
    }

    async delete(itemId) {
        try {
            var result = await this.model.deleteOne(itemId);

            if (!result) {
                return ServerResult.errorResult(Messages.sourceNotFound.code, Messages.sourceNotFound.message);
            }

            return ServerResult.successResult(Messages.deleteSuccess.code, Messages.deleteSuccess.message, result);
        } catch (error) {
            return ServerResult.errorResult(Messages.notUnderstood.code, Messages.notUnderstood.message);
        }
    }
}