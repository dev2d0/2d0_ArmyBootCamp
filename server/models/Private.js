const mongoose = require('mongoose');

const privateSchema = mongoose.Schema({
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

const Private = mongoose.model('Private', privateSchema);

module.exports = { Private }