let promise = require('bluebird');
let options = {
    promiseLib: promise
};

let pgp = require('pg-promise')(options);

desarrollo
const  urlconnection = 'postgres://modulo4:modulo4d@159.65.230.188:5432/tcs2';

let cn = pgp(urlconnection);

module.exports = {
    connection: cn
};
