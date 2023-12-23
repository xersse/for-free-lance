const express = require('express');
const router = express.Router();

const nouveauteCtrl = require('../controllers/nouveaute');
const userCtrl = require('../controllers/user');

router.get('/', nouveauteCtrl.getAllNouveautes);
router.post('/', nouveauteCtrl.createNouveaute, userCtrl.login);
router.post('/cart', nouveauteCtrl.createCart);
router.get('/:id', nouveauteCtrl.getOneNouveaute);
router.put('/:id/like', nouveauteCtrl.likeNouveaute, userCtrl.login);
router.put('/:id', nouveauteCtrl.updateNouveaute, userCtrl.login);
router.delete('/:id', nouveauteCtrl.deleteNouveaute, userCtrl.login);

module.exports = router;
