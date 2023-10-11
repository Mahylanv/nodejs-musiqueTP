const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let rateSchema = new Schema({
    rate: {
        type : Number,
        min: 1,
        max: 5,
        required: true
    },
    music_id: {
        type: String
    }
});

module.exports = mongoose.model('Rate', rateSchema);