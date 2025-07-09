const mongoose = require('mongoose');

const BriefSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  competences: [{ type: String, required: true }] 
}, { timestamps: true });

module.exports = mongoose.model('Brief', BriefSchema);