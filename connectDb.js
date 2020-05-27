const mongoose = require('mongoose');
const config = require('./config');
const ConsoleResult = require('./messages/ConsoleResult');

const connectDb = async function connect() {
    try {
        await mongoose.connect(
            process.env.MONGODB_CONNECTION_STRING || `mongodb://${config.db_host}:${config.db_port}/${config.db_name}`, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        );

        ConsoleResult.success('Connected Database');
    } catch (error) {
        ConsoleResult.error('Not Connected Database:' + error);
    }
}

module.exports = connectDb;
