const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let musicSchema = new Schema({
    url_music: {
        type : String,
        required: "La musique est requise"
    },
    nom: {
        type : String,
        required: "Le nom est requis"
    },
    prenom: {
        type : String,
        required: "Le prenom est requis"
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Music', musicSchema);