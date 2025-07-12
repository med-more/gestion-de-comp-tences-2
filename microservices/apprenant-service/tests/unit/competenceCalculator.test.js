const { calculerStatutCompetence } = require('../../utils/hofUtils');

describe('Calcul du statut de compétence', () => {
  it('valide la compétence si plus de sous-compétences validées', () => {
    const sousCompetences = [
      { nom: 'SC1', statut: 'validée' },
      { nom: 'SC2', statut: 'validée' },
      { nom: 'SC3', statut: 'non validée' }
    ];
    expect(calculerStatutCompetence(sousCompetences)).toBe('validée');
  });

  it('invalide la compétence si moins de sous-compétences validées', () => {
    const sousCompetences = [
      { nom: 'SC1', statut: 'non validée' },
      { nom: 'SC2', statut: 'validée' },
      { nom: 'SC3', statut: 'non validée' }
    ];
    expect(calculerStatutCompetence(sousCompetences)).toBe('non validée');
  });
});