const express = require('express');
const routes = require('./router/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setting up express app
const app = express();

//connecting to mongodb
mongoose.connect('mongodb://localhost/bankapp');
mongoose.Promise = global.Promise;

//using body parser for json
app.use(bodyParser.json());

//using routes
app.use('/api', routes);

//another middleware for handling erros
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});

//starting app
app.listen(process.env.port || 3000, () => {
    console.log("Listening on 3000");
});