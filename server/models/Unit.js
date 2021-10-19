const mongoose = require('mongoose');

const unitSchema = mongoose.Schema({
    id1: {
        type: String
    },
    pwd1: {
        type: String
    },
    id2: {
        type: String
    },
    pwd2: {
        type: String
    },
    id3: {
        type: String
    },
    pwd3: {
        type: String
    },
    name: {
        type: String
    },
    birth: {
        type: String
    },
    class: {
        type: String
    },
    group: {
        type: String
    },
    unit: {
        type: String
    },
    enter: {
        type: String
    },
    setting: {
        type: String,
        default: "setting"
    }
}, { timestamps: true })

const Unit = mongoose.model('Unit', unitSchema);

module.exports = { Unit }