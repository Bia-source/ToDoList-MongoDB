const mongoose = require('mongoose');
const Comments = mongoose.model('Comments');

module.exports = {
    async getAllComments(req,res){
       const comments = await Comments.findById(req.params.id);
       return res.json(comments);
    },

    async createComments(req,res){
       const comments = await Comments.create(req.body);
       return res.json(comments);
    },

    // async editarComments(req,res){
    //     const comments = await Comments.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
    //     return res.json(comments);
    // },
    // async deletarComments(req,res){
    //     const comments = await Comments.findOneAndDelete({_id: req.params.id});
    //     return res.json(comments);
    // }
}

