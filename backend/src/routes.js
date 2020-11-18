const express = require("express");
const routes = express.Router();

const questionsController = require('./controllers/listController');
const commentsController = require("./controllers/commentsController");

routes.get('/questions', questionsController.getAll);
routes.get('/questions/:id', questionsController.getFindById);
routes.get('/questionss', questionsController.getFindByName);
routes.post('/questions', questionsController.createQuestion);
routes.put('/questions/:id', questionsController.updateQuestion);
routes.delete('/questions/:id', questionsController.deleteQuestion);
routes.get('/comments/:id', commentsController.getAllComments);
routes.post('/comments/:id', commentsController.createComments);

module.exports = routes;