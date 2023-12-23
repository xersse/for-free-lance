const express = require('express');
const router = express.Router();

const promoCtrl = require('../controllers/promo');
const userCtrl = require('../controllers/user');

router.get('/', promoCtrl.getAllPromos);
router.post('/', promoCtrl.createPromo, userCtrl.login);
router.post('/cart', promoCtrl.createCart);
router.get('/:id', promoCtrl.getOnePromo);
router.put('/:id/like', promoCtrl.likePromo, userCtrl.login);
router.put('/:id', promoCtrl.updatePromo, userCtrl.login);
router.delete('/:id', promoCtrl.deletePromo, userCtrl.login);

module.exports = router;
