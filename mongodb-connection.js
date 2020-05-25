const mongoose = require('mongoose');
const ConsoleResult = require('./messages/ConsoleResult');

async function main() {
    try {
        await mongoose.connect(
            process.env.MONGODB_CONNECTION_STRING || 'mongodb+srv://sametozrn:123123.123@defangi-gfvsx.mongodb.net/' +
            'defangi?retryWrites=true&w=majority', {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        );

        ConsoleResult.success('Connected');
    } catch (error) {
        ConsoleResult.error('Not Connected: '+ error);
    }
}

main();