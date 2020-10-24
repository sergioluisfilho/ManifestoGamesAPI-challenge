const express = require('express');

const routes = express();


const players = [];


function checkPlayerExists(req, res, next) {
  const { id } = req.params;
  const player = players.find(p => p.id == id);

  if (!player) {
    return res.status(400).json({ error: 'player not found' });
  }

  return next();
}


function logRequests(req, res, next) {

  console.count("Número de requisições");

  return next();
}

routes.use(logRequests);

routes.get('/players/:username', (req, res) => {
    const {username} = req.params
    const player = players.find(p => p.username == username);
    res.send(`bem vindo, ${player.username}`)



})

routes.get('/players', (req, res) => {
  return res.json(players);
});


routes.post('/players', (req, res) => {
  const {username, password } = req.body;

  const player = {
    id: players.length + 1,
    username,
    password,
    items: []
  };

  players.push(player);

  return res.json(player);
});


routes.put('/players/:id', checkPlayerExists, (req, res) => {
  const { id } = req.params;
  const { username } = req.body;

  const player = players.find(p => p.id == id);

  player.username = username;

  return res.json(player);
});


routes.delete('/players/:id', checkPlayerExists, (req, res) => {
  const { id } = req.params;

  const playerIndex = players.findIndex(p => p.id == id);

  players.splice(playerIndex, 1);

  return res.send();
});


routes.post('/players/:id/items', checkPlayerExists, (req, res) => {
  const { id } = req.params;
  const { item } = req.body;

  const player = players.find(p => p.id == id);

  player.items.push(item);

  return res.json(player);
});

module.exports = routes