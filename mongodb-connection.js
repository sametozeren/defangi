const mongoose = require('mongoose');
const ConsoleResult = require('./messages/ConsoleResult');
const ServerResult = require('./messages/ServerResult');
const ResponseMessage = require('./messages/Messages.json');

async function main() {
    try {
        await mongoose.connect(
            process.env.MONGODB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/defangi', {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        );

        ConsoleResult.success('Connected');
    } catch (error) {
        //TODO: ServerResult()
        ConsoleResult.error('Not Connected: ' + error);
    }
}

main();