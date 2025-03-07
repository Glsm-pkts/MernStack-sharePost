const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        trim: true,
        
    },
    description: {
        type: String,
        required: true,
        trim: true,
        
        
    },
    title: {
        type: String,
        required: true,
        trim: true,
       
    },
    date: {
        type: Date,
        default: new Date()
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('post', PostSchema)