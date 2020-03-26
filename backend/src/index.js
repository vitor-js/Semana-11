
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(4444);


/*
    Usando banco de dados relacionados
    Podemos usa-los com drivers, assim usando o sql para as querys
    Ou podemos usar o query builder, que usa o js para fazer as querys
*/