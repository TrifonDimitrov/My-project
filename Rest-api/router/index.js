const router = require('express').Router();
const climas = require('./climas');
const {authController} = require('../controllers');


router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/climates', climas);


module.exports = router;