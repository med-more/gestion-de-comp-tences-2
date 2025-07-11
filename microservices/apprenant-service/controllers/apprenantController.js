const apprenantService = require('../services/apprenantService');

exports.getAll = async (req, res, next) => {
  try {
    const apprenants = await apprenantService.getAllApprenants();
    res.json(apprenants);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const apprenant = await apprenantService.createApprenant(req.body);
    res.status(201).json(apprenant);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const apprenant = await apprenantService.updateApprenant(req.params.id, req.body);
    if (!apprenant) return res.status(404).json({ message: 'Apprenant non trouvé' });
    res.json(apprenant);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    const apprenant = await apprenantService.deleteApprenant(req.params.id);
    if (!apprenant) return res.status(404).json({ message: 'Apprenant non trouvé' });
    res.json({ message: 'Apprenant supprimé' });
  } catch (err) { next(err); }
};