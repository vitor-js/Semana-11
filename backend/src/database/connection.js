const knex = require('knex');
const configuration = require('../../knexfile');


//conecção de developer knexfile
const connection = knex(configuration.development);

module.exports = connection;