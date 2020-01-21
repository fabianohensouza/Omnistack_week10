const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');

const app = express();
const server = http.Server(app);

mongoose.connect('mongodb+srv://omnistack:omnistackweek@cluster0-iayyk.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// HTTP methods: GET(Browser native), POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params, Route Params and Body


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
