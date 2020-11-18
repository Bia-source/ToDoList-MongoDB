const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema({
    comments:{
       type: String,
       required: true
    }
});

mongoose.model('Comments', CommentsSchema);
