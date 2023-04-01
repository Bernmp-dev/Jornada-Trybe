const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const teams = require('./teams.json');

const app = express();

app.use(express.json());

const OK = 200;
// const INTERNAL_SERVER_ERROR = 500;
// const NOT_FOUND = 404;

app.get('/', (_, res) => res.status(OK).json({ message: 'Olá Mundo!' }));

app.get('/teams', (_, res) => res.status(200).json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  try {
    const { id } = req.params;
    const findTeam = teams.find((team) => team.id === Number(id));

    res.status(200).json({ findTeam });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

app.post('/teams', validateTeam, (req, res) => {
  const id = teams.length + 1;
  const newTeam = { id, ...req.body };

    teams.push(newTeam);
    res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', existingId, (req, res) => {
  try {
    const id = +req.params.id;
    const { name, initials } = req.body;
    const updateTeam = teams.find((team) => team.id === id);

    updateTeam.name = name;
    updateTeam.initials = initials;
    return res.status(200).json({ updateTeam });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.delete('/teams/:id', existingId, (req, res) => {
  try {
    const id = +req.params.id;
    const arrayPosition = teams.findIndex((team) => team.id === id);

    if (arrayPosition < 0) {
      throw new Error('Team not found');
    }

    teams.splice(arrayPosition, 1);
    return res.status(200).json({ teams });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// se ninguém respondeu, vai cair neste middleware
app.use((_req, res) => res.sendStatus(404));

module.exports = app;