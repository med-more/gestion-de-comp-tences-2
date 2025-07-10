const Brief = require('../models/Brief');

// Liste tous les briefs avec leurs compétences
const getAllBriefs = async () => {
  return await Brief.find({});
};

// Crée un nouveau brief
const createBrief = async ({ titre, description, competences }) => {
  const brief = new Brief({ titre, description, competences });
  return await brief.save();
};

// Met à jour un brief existant
const updateBrief = async (id, data) => {
  return await Brief.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

// Supprime un brief
const deleteBrief = async (id) => {
  return await Brief.findByIdAndDelete(id);
};

// Associe des compétences à un brief
const addCompetencesToBrief = async (id, competences) => {
  return await Brief.findByIdAndUpdate(
    id,
    { $addToSet: { competences: { $each: competences } } },
    { new: true }
  );
};

module.exports = {
  getAllBriefs,
  createBrief,
  updateBrief,
  deleteBrief,
  addCompetencesToBrief
};