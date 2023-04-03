const validatePrice = (req, res, next) => {
  const { price } = req.body;

  const reqPriceMessage = 'O campo price é obrigatório ';
  const reqValueMessage = 'O campo price deve ser um número maior ou igual a zero';

  if (!price) {
    return res.status(400).json({ reqPriceMessage });
  }

  if (price < 0) {
    return res.status(400).json({ reqValueMessage });
  }

  return next();
};

module.exports = validatePrice;
