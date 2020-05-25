const Mongoose = require('mongoose');
const UserSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2
    },
    /*name: {
        type: String,
        required: true,
        minlength: 2
    },
    surname: {
        type: String,
        required: true,
        minlength: 2
    },
    age: {
        type: Number,
        required: true,
        min: 13
    },*/
    password: {
        type: String,
        required: true,
        minlength: 2
    },/*
    email: {
        type: String,
        required: true,
    },
    activationCode: {
        type: String,
        required: false,
    },
    status: {
        type: Boolean,
        required: true,
    },*/
});

const UserModel = Mongoose.model('users', UserSchema);

module.exports = UserModel;