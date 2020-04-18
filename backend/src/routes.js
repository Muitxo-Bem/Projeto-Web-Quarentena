const express = require('express');
const UsuariosController = require('./controllers/UsuariosController');
const authController = require('./controllers/authController');

const routes = express.Router();

routes.get('/usuarios',UsuariosController.index);

routes.post('/usuarios',UsuariosController.create);

routes.post('/authenticate',authController.authenticate);


module.exports = routes;