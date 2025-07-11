const express = require('express');
const router = express.Router();
const apprenantController = require('../controllers/apprenantController');

router.get('/', apprenantController.getAll);
router.post('/', apprenantController.create);
router.put('/:id', apprenantController.update);
router.delete('/:id', apprenantController.delete);

module.exports = router;