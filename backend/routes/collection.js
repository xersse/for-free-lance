const express = require('express');
const router = express.Router();

const collectionCtrl = require('../controllers/collection');
const userCtrl = require('../controllers/user');

router.get('/', collectionCtrl.getAllCollection);
router.post('/', collectionCtrl.createCollection, userCtrl.login);
router.post('/cart', collectionCtrl.createCart);
router.get('/:id', collectionCtrl.getOneCollection);
router.put('/:id/like', collectionCtrl.likeCollection, userCtrl.login);
router.put('/:id', collectionCtrl.updateCollection, userCtrl.login);
router.delete('/:id', collectionCtrl.deleteCollection, userCtrl.login);

module.exports = router;