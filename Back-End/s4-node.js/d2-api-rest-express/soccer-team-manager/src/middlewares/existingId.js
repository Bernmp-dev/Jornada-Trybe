const express = require('express');

const app = express();

app.use(express.json());

const existingId = (req, res, next) => {
  const id = +req.params.id;
  const findTeam = teams.some((team) => team.id === id);

  if (!req.body) {
    throw new Error('Missing request body');
  }

  return findTeam 
  ? next() 
  : res.status(404).json({ message: 'Team not found' });
};

module.exports = existingId;