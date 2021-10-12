const mongoose = require('mongoose');

const letterSchema = mongoose.Schema({
    user: {
        type: String
    },
    title: {
        type: String,
        maxlength: 50
    },
    contents: {
        type: String,
        maxlength: 1500
    },
    send: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })

const Letter = mongoose.model('Letter', letterSchema);

module.exports = { Letter }