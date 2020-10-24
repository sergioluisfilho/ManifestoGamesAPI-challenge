const express = require('express');
const router = require('./routes.js');
const server = express();

server.use(express.json());

server.use(router)

server.listen(4000);
