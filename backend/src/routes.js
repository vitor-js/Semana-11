const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileControler = require('./controllers/ProfileControler');
const SessionControler = require('./controllers/SessionController');


const routes = express.Router();

// Rotas de Session
routes.post('/session', SessionControler.create);

// Rotas de ongs
routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

// Rotas de incidentes
routes.post('/incidents', IncidentController.create);

routes.get('/incidents', IncidentController.index);

routes.delete('/incidents/:id', IncidentController.delete);

// Rotas do profile 
routes.get('/profile', ProfileControler.index);

module.exports = routes;