const path = require('path');
const express = require('express');
const fs = require('fs').promises;
const { readData } = require('./Utils/fsUtils');

const MOVIES_PATH = path.resolve(__dirname, './movies.json');

const app = express();

app.use(express.json());

app.get('/movies', async (req, res) => {
  try {
    const movies = await readData();
    res.status(200).json({ movies });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readData();
    const moviebyId = movies.find((m) => m.id === +id);

    res.status(200).json({ moviebyId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/movies/:search', async (req, res) => {
  try {
    const { search } = req.params;
    const movies = await readData();

    const bySearch = movies.filter((m) => m.movie.includes(search));

    res.status(200).json(bySearch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/movies', async (req, res) => {
  let movies = await readData();
  try {
    const newMovie = { id: movies.length + 1, ...req.body };
    movies = [...movies, newMovie];

    await fs.writeFile(MOVIES_PATH, JSON.stringify(movies));

    res.status(201).json({ movies });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const movies = await readData();
    const { id } = req.params;
    const i = movies.findIndex((m) => m.id === +id);

    movies[i] = { id, ...req.body };
    await fs.writeFile(MOVIES_PATH, JSON.stringify(movies));

    res.status(201).json({ movies });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    let movies = await readData();
    const { id } = req.params;
    movies = movies.filter((m) => +m.id !== +id);

    await fs.writeFile(MOVIES_PATH, JSON.stringify(movies));

    res.status(204).json({ movies });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = app;
