const Mongoose = require('mongoose');
const UserSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate:{
            validator:function(data){
                return /^[a-z][a-z]+\d*$/i.test(data);
            },

            message:props => `'${props.value}' not a valid username.`,
        },
        minlength: 6
    },
    email: {
        type: String,
        required: true,
        validate:{
            validator:function(data){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data);
            },

            message:props => `'${props.value}' not a valid email address.`,
        },
        
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
});

const UserModel = Mongoose.model('users', UserSchema);

module.exports = UserModel;