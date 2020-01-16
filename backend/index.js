const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://omnistack:omnistackweek@cluster0-iayyk.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// HTTP methods: GET(Browser native), POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params, Route Params and Body

app.post('/', (request, response) => {
    console.log(request.body);
    return response.json({ message:'Hello World Omnistack!'});
});

app.listen(3333);