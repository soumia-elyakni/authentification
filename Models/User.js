const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    email: {
        type: String,
        required: true,
        min: 11,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min:8
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const User=  mongoose.model('User',userSchema);
module.exports = User