const express = require('express');
const teams = require('../teams.json');

const app = express();

app.use(express.json());

const existingId = (req, res, next) => {
  const id = +req.params.id;
  const findTeam = teams.some((team) => team.id === id);

  return !findTeam 
  ? res.status(404).json({ message: 'Team not found' })
  : next();
};

module.exports = existingId;