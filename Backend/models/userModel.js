const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true },
    email: {type: String, required: true, lowercase: true},
    password: {type: String, required: true },
    created: {type: String, required: true}
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;