const mongoose = require('mongoose');

const RenduSchema = new mongoose.Schema({
  apprenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Apprenant', required: true },
  brief: { type: String, required: true }, 
  dateRendu: { type: Date, default: Date.now },
  statut: { type: String, enum: ['soumis', 'validé', 'refusé'], default: 'soumis' }
}, { timestamps: true });

module.exports = mongoose.model('Rendu', RenduSchema);