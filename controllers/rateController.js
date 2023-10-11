const Rate = require('../models/rateModel');
const Music = require('../models/musicModel')

exports.listAllRates = async (req, res) => {
    try {
        const rates = await Rate.find({music_id: req.params.id_music});
        res.status(200).json(rates);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'erreur serveur'});

    }    
};

 exports.getOneRate = async (req, res) => {
     try {
         const rate = await Rate.findById(req.params.id_rate);
         res.status(200);
         res.json(rate);
     } catch (error) {
         res.status(500);
         console.log(error);
         res.json({ message: "Erreur serveur" })
     }
 };

exports.createARate = async (req, res) => {
    try {
        await Music.findById(req.params.id_music);
        const newRate = new Rate({...req.body, music_id: req.params.id_music});
        try {
            const rate = await newRate.save();
            res.status(201).json(rate);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Erreur serveur" })
        }
    }
    catch (error) {
        console.log(error);
        res.json({ message: "Erreur serveur (musique inexistant)" })
    }

};

 exports.updateARate = async (req, res) => {
     try {
         const rate = await Rate.findByIdAndUpdate(req.params.id_rate, req.body, {new: true});
         res.status(201);
         res.json(rate);
     } catch (error) {
         res.status(500);
         console.log(error);
         res.json({ message: "Erreur serveur" })
     }
 };

exports.deleteARate = async (req, res) => {
    try {
        await Rate.findByIdAndDelete(req.params.id_rate);
        res.status(200);
        res.json({message: 'Note supprimé'});
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur" })
    }
};

exports.resultRate = async (req,res) => {
    try{
        const result = await Rate.find({music_id : req.params.id_music});
        const nb = result.length
        res.status(200);
        res.json({message : nb});
    }catch (error) {
        res.status(500);
        res.json({message : "Erreur serveur"});
        console.log(error);
    }
}
