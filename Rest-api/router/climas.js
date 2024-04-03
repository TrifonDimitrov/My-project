const express = require('express');
const router = express.Router();
const { auth } = require('../utils');

const {climaController} = require('../controllers');

router.get('/', climaController.getAll);
router.post('/', auth(), climaController.createClima);


router.get('/:climaId', climaController.getClima);
router.put('/:climaId', climaController.updateClima);




module.exports = router;