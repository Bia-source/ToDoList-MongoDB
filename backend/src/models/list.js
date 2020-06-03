const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
    tarefa:{
       type: String,
       required: true
    }
});

mongoose.model('Tarefa', TarefaSchema);
