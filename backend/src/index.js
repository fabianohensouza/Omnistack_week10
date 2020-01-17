const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistackweek@cluster0-iayyk.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// HTTP methods: GET(Browser native), POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params, Route Params and Body


app.use(express.json());
app.use(routes);

app.listen(3333);