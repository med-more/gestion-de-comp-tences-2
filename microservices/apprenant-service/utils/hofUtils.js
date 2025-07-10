// Calcul du statut global d'une compétence à partir des sous-compétences
exports.calculerStatutCompetence = (sousCompetences) => {
    const { valides, nonValides } = sousCompetences.reduce(
      (acc, sc) => {
        if (sc.statut === 'validée') acc.valides++;
        else acc.nonValides++;
        return acc;
      },
      { valides: 0, nonValides: 0 }
    );
    return valides >= nonValides ? 'validée' : 'non validée';
  };