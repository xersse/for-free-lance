const express = require('express');
const router = express.Router();

const repliqueCtrl = require('../controllers/replique');
const userCtrl = require('../controllers/user');

router.get('/', repliqueCtrl.getAllReplique);
router.post('/', repliqueCtrl.createReplique, userCtrl.login);
router.post('/cart', repliqueCtrl.createCart);
router.get('/:id', repliqueCtrl.getOneReplique);
router.put('/:id/like', repliqueCtrl.likeReplique, userCtrl.login);
router.put('/:id', repliqueCtrl.updateReplique, userCtrl.login);
router.delete('/:id', repliqueCtrl.deleteReplique, userCtrl.login);

module.exports = router;