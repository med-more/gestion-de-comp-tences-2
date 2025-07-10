module.exports = (req, res, next) => {
    const { titre, description, competences } = req.body;
    if (!titre || !description || !Array.isArray(competences)) {
      return res.status(400).json({ message: 'Champs requis manquants ou invalides.' });
    }
    next();
  };