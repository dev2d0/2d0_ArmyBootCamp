const mongoose = require('mongoose');

const unitSchema = mongoose.Schema({
    unit: {
        type: String
    },
    setting: {
        type: String,
        default: "setting"
    }
}, { timestamps: true })

const Unit = mongoose.model('Unit', unitSchema);

module.exports = { Unit }