const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');
router
    .route('/')
    .get(musicController.listAllMusics)
    .post(musicController.createAMusic);
router
    .route('/:id_music')
    .get(musicController.getOneMusic)
    .patch(musicController.updateAMusic)
    .delete(musicController.deleteAMusic);
module.exports = router;