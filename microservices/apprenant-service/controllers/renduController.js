const renduService = require('../services/renduService');

exports.getByApprenant = async (req, res, next) => {
  try {
    const rendus = await renduService.getRendusByApprenant(req.params.apprenantId);
    res.json(rendus);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const rendu = await renduService.createRendu(req.body);
    res.status(201).json(rendu);
  } catch (err) { next(err); }
};

exports.getAll = async (req, res, next) => {
  try {
    const rendus = await renduService.getAllRendus();
    res.json(rendus);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const rendu = await renduService.updateRendu(req.params.id, req.body);
    if (!rendu) return res.status(404).json({ message: 'Rendu non trouvé' });
    res.json(rendu);
  } catch (err) { next(err); }
};