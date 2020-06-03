const mongoose = require('mongoose');
const Tarefas = mongoose.model('Tarefa');

module.exports = {
    async buscarTodos(req,res){
       const tarefa = await Tarefas.find();
       return res.json(tarefa);
    },

    async buscarPorId(req,res){
       const tarefa = await Tarefas.findById(req.params.id);
       return res.json(tarefa);
    },

    async buscarPorNome(req,res){
       const tarefa = await Tarefas.find(req.query);
       return res.json(tarefa);
    },

    async criarTarefa(req,res){
       const tarefa = await Tarefas.create(req.body);
       return res.json(tarefa);
    },

    async editarTarefa(req,res){
        const tarefa = await Tarefas.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
        return res.json(tarefa);
    },
    async deletarTarefa(req,res){
        const tarefa = await Tarefas.findOneAndDelete({_id: req.params.id});
        return res.json(tarefa);
    }
}

