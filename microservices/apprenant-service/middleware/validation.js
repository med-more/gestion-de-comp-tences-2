module.exports = (req, res, next) => {
    const { nom, email } = req.body;
    if (!nom || !email) {
      return res.status(400).json({ message: 'Nom et email sont requis.' });
    }
    next();
  };