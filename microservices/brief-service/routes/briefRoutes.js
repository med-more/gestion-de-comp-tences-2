const express = require('express');
const router = express.Router();
const briefController = require('../controllers/briefController');

// CRUD
router.get('/', briefController.getAllBriefs);
router.post('/', briefController.createBrief);
router.put('/:id', briefController.updateBrief);
router.delete('/:id', briefController.deleteBrief);

// Associer des compétences à un brief
router.post('/:id/competences', briefController.addCompetencesToBrief);

module.exports = router;