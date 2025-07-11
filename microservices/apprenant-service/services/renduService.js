const Rendu = require('../models/Rendu');

const getRendusByApprenant = async (apprenantId) => Rendu.find({ apprenant: apprenantId });
const createRendu = async (data) => new Rendu(data).save();
const getAllRendus = async () => Rendu.find({});
const updateRendu = async (id, data) => Rendu.findByIdAndUpdate(id, data, { new: true });

module.exports = {
  getRendusByApprenant,
  createRendu,
  getAllRendus,
  updateRendu
};