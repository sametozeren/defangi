const ServerResult = require('../messages/ServerResult');

module.exports = class BaseService {
    async findAll() {
        return this.model.find();
    }

    async add(item) {
        return this.model.create(item);
    }

    async delete(itemId) {
        return this.model.deleteOne({
            _id: itemId
        });
    }

    async findOne(itemId) {
        this.model.findById({ _id: '1' }).exec( function(err, myClass){
            console.log(err+'assdasdasdasdasdasd')
            if(err){
                console.log('iff içi')
                console.log(typeof err)
                return ServerResult.errorResult((JSON.stringify(err)||'').replace(/\"/g,'').replace(/\'/g,''));
            }else if(!myClass){
                return ServerResult.errorResult('myClass');//TODO MAGİC STRİNG
            }

            return ServerResult.successResult(myClass);
        });
    }

    async update(item) {
        return this.model.update();
    }
}