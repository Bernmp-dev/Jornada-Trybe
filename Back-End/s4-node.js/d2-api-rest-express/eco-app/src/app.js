const express = require('express');
const generateToken = require('./Utils/generateToken');
const validateName = require('./middleware/validateName');
const validatePrice = require('./middleware/validatePrice');
const validateDescription = require('./middleware/validateDesc');
const validateSignup = require('./middleware/validateSignUp');
const auth = require('./middleware/auth');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json('[Online ✅]');
});

app.get('/activities', (_req, res) => {
  res.status(200).json('[Online ✅]');
});

app.post(
  '/activities',
  auth,
  validateName,
  validatePrice,
  validateDescription,
  (req, res) => {
    const activitie = JSON.stringify(req.body.name);
    res.status(201).json({ message: `Atividade ${activitie} cadastrada com sucesso` });
  },
);

app.post('/signup', validateSignup, (_req, res) => {
  res.status(200).json({
    message: 'Usuario cadastrado com sucesso',
    token: `${generateToken()}`,
  });
});

module.exports = app;
