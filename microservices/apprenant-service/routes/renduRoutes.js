const express = require('express');
const router = express.Router();
const renduController = require('../controllers/renduController');

router.get('/', renduController.getAll);
router.get('/apprenant/:apprenantId', renduController.getByApprenant);
router.post('/', renduController.create);
router.put('/:id', renduController.update);

module.exports = router;