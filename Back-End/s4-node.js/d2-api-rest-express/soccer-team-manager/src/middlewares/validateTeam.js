const express = require('express');

const app = express();

app.use(express.json());

const validateTeam = (req, res, next) => {
  const reqProps = ['name', 'initials'];
  const checkProps = reqProps
    .every((property) => property in req.body);

  return checkProps
  ? next()
  : res.status(404).json({ message: 'Team not found' });
};

module.exports = validateTeam;
