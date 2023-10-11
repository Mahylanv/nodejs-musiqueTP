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
    email: {
        type: String,
        unique : true,
        required : "L'email est requis",
        validate: {
            validator: function (x) {
              const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
              return regexEmail.test(x);
            },
            message: "L'email n'est pas valide"
        }
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Music', musicSchema);