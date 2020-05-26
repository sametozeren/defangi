const mongoose = require('mongoose');
const ConsoleResult = require('./messages/ConsoleResult');

const connectDb = async function connect() {
    await mongoose.connect(
            process.env.MONGODB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/defangi', {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
        .then(res => {
            console.log(ConsoleResult.success('Database Connected'));
        }).catch(err => {
            console.log(ConsoleResult.error('Database Not Connected:' + err));
        });
}

module.exports = connectDb;