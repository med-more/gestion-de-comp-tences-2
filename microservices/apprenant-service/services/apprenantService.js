const Apprenant = require('../models/Apprenant');

const getAllApprenants = async () => Apprenant.find({});
const createApprenant = async (data) => new Apprenant(data).save();
const updateApprenant = async (id, data) => Apprenant.findByIdAndUpdate(id, data, { new: true });
const deleteApprenant = async (id) => Apprenant.findByIdAndDelete(id);

module.exports = {
  getAllApprenants,
  createApprenant,
  updateApprenant,
  deleteApprenant
};