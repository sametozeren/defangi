const mongoose = require('mongoose');
const ConsoleResult = require('./messages/ConsoleResult');

const connectDb = async function connect() {
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

module.exports = connectDb;