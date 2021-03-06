const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();

routes.get('/', (req, res) => res.json({ message: `Hello ${req.query.name}` }));
routes.post('/devs', DevController.store);

module.exports = routes;
