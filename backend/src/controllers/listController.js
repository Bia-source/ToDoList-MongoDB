const mongoose = require('mongoose');
const Questions = mongoose.model('Pergunta');

module.exports = {
    async getAll(req,res){
       const questions = await Questions.find();
       return res.json(questions);
    },

    async getFindById(req,res){
       const question = await Questions.findById(req.params.id);
       return res.json(question);
    },

    async getFindByName(req,res){
       const question = await Questions.find(req.query);
       return res.json(question);
    },

    async createQuestion(req,res){
       const question = await Questions.create(req.body);
       return res.json(question);
    },

    async updateQuestion(req,res){
        const question = await Questions.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
        return res.json(question);
    },
    async deleteQuestion(req,res){
        const question = await Questions.findOneAndDelete({_id: req.params.id});
        return res.json(question);
    }
}

