const express = require('express');
const router = express.Router();
const rateController = require('../controllers/rateController');
router
    .route('/votes/:id_music')
    .get(rateController.listAllRates)
    .post(rateController.createARate);
    
router
    .route('/:id_rate')
    .get(rateController.getOneRate)
    .patch(rateController.updateARate)
    .delete(rateController.deleteARate);
module.exports = router;