const mongoose = require('mongoose');
const ConsoleResult = require('./messages/ConsoleResult');

const connectDb = async function connect() {
    try {
        await mongoose.connect(process.env.MongoURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        ConsoleResult.success('Connected Database');
    } catch (error) {
        ConsoleResult.error('Not Connected Database:' + error);
    }
}

module.exports = connectDb;