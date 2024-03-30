const express = require('express');
const router = express.Router();
const { auth } = require('../utils');

const {climaController} = require('../controllers');

router.get('/', climaController.getAll);




module.exports = router;