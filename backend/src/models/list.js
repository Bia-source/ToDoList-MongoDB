const mongoose = require('mongoose');

const PerguntaSchema = new mongoose.Schema({
    pergunta:{
       type: String,
       required: true
    }
});

mongoose.model('Pergunta', PerguntaSchema);
