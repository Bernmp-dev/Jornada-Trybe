const validateSignup = (req, res, next) => {
  const {
    email,
    password,
    firstName,
    phone,
  } = req.body;

  switch (true) {
    case !email:
      return res.status(401).json({ message: 'E-mail não informado!' });
    case !password:
      return res.status(401).json({ message: 'Senha não informada!' });
    case !firstName:
      return res.status(401).json({ message: 'Nome não informado!' });
    case !phone:
      return res.status(401).json({ message: 'Telefone não informado!' });
    default:
      break;
  }

  switch (true) {
    case !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email):
      return res.status(401).json({ message: 'Formato de e-mail inválido!' });
    case password.length < 8:
      return res.status(401).json({ message: 'Senha deve ter no mínimo 8 caracteres!' });
    case firstName.length < 2:
      return res.status(401).json({ message: 'Nome deve ter no mínimo 2 caracteres!' });
    case !/^\(\d{2}\) \d{4,5}\d{4}$/.test(phone):
      return res.status(401).json({ message: 'Formato de telefone inválido!' });
    default:
      break;
  }

  return next();
};

module.exports = validateSignup;
