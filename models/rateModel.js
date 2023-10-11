const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let rateSchema = new Schema({
    rate: {
        type : Number,
        required: true,
        min: 1,
        max: 5,
        get: v => Math.floor(v),
        set: v => Math.floor(v) 
    },
    music_id:{
        type: String
    },
});

module.exports = mongoose.model('Rate', rateSchema);