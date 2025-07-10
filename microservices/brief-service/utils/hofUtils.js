// Exemple d'utilisation de HOF pour filtrer les compétences
exports.filterCompetences = (competences, search) =>
    competences.filter(c => c.includes(search));