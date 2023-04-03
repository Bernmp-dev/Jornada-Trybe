const validateDescription = ({ body: { description } = {} }, res, next) => {
  switch (true) {
    case !description:
      return res.status(400).json({ message: 'O campo description é obrigatório' });
    case !description.createdAt:
      return res.status(400).json({ message: 'O campo createdAt é obrigatório' });
    case !description.rating:
      return res.status(400).json({ message: 'O campo rating é obrigatório' });
    case !description.difficulty:
      return res.status(400).json({ message: 'O campo difficulty é obrigatório' });
    default:
      break;
  }

  const { createdAt, rating, difficulty } = description || {};
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  switch (true) {
    case !dateRegex.test(createdAt):
      return res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
    case !Number.isInteger(rating) || rating < 1 || rating > 5:
      return res.status(400).json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
    case !['Fácil', 'Médio', 'Difícil'].includes(difficulty):
      return res.status(400).json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
    default:
      break;
  }
  return next();
};

module.exports = validateDescription;
