const briefService = require('../services/briefService');

// GET /briefs
exports.getAllBriefs = async (req, res, next) => {
  try {
    const briefs = await briefService.getAllBriefs();
    res.json(briefs);
  } catch (err) {
    next(err);
  }
};

// POST /briefs
exports.createBrief = async (req, res, next) => {
  try {
    const { titre, description, competences } = req.body;
    const brief = await briefService.createBrief({ titre, description, competences });
    res.status(201).json(brief);
  } catch (err) {
    next(err);
  }
};

// PUT /briefs/:id
exports.updateBrief = async (req, res, next) => {
  try {
    const brief = await briefService.updateBrief(req.params.id, req.body);
    if (!brief) return res.status(404).json({ message: 'Brief non trouvé' });
    res.json(brief);
  } catch (err) {
    next(err);
  }
};

// DELETE /briefs/:id
exports.deleteBrief = async (req, res, next) => {
  try {
    const brief = await briefService.deleteBrief(req.params.id);
    if (!brief) return res.status(404).json({ message: 'Brief non trouvé' });
    res.json({ message: 'Brief supprimé' });
  } catch (err) {
    next(err);
  }
};

// POST /briefs/:id/competences
exports.addCompetencesToBrief = async (req, res, next) => {
  try {
    const { competences } = req.body;
    const brief = await briefService.addCompetencesToBrief(req.params.id, competences);
    if (!brief) return res.status(404).json({ message: 'Brief non trouvé' });
    res.json(brief);
  } catch (err) {
    next(err);
  }
};