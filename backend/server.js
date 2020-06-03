const express = require('express');
const cors = require('cors');
const mongoseClient = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3001, () => {
    mongoseClient.connect("mongodb://dbToDo:admin123@apitodo-shard-00-00-stsbj.mongodb.net:27017,apitodo-shard-00-01-stsbj.mongodb.net:27017,apitodo-shard-00-02-stsbj.mongodb.net:27017/test?ssl=true&replicaSet=ApiToDo-shard-0&authSource=admin&retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('conectado');
    });
});

require('./src/models/list');
app.use('/api', require('./src/routes'));