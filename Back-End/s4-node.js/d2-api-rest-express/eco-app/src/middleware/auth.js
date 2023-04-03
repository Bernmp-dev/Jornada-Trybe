const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado!' });
  }

  if (token.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }

  res.status(200).json({ message: token });
  return next();
};

module.exports = authenticate;
