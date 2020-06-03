const express = require("express");
const routes = express.Router();

const tarefaController = require('./controllers/listController');

routes.get('/tarefa', tarefaController.buscarTodos );
routes.get('/tarefa/:id', tarefaController.buscarPorId);
routes.get('/tarefas', tarefaController.buscarPorNome);
routes.post('/tarefa', tarefaController.criarTarefa);
routes.put('/tarefa/:id', tarefaController.editarTarefa);
routes.delete('/tarefa/:id', tarefaController.deletarTarefa);


module.exports = routes;