const express = require('express');
const UsuariosController = require('./controllers/UsuariosController');
const authController = require('./controllers/authController');
const test = require('./controllers/testAuthController');
const routes = express.Router();

const authMiddleware = require('./middlewares/auth');

routes.get('/usuarios',UsuariosController.index);

routes.post('/usuarios',UsuariosController.create);

routes.post('/authenticate',authController.authenticate);

//Rota de Teste Auth
routes.get('/testing',authMiddleware,test.tokenTest);


module.exports = routes;