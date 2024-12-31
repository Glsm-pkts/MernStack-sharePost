const mongoose = require('mongoose');


const AuthSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        
    },
    password: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: new Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('auth', AuthSchema)