
const mysql = require('mysql2');
const db = require('../config/sql').connect();

function logInd(brugernavn, kodeord) {

    var sql = `
    select count(*) 
    from bruger 
    where brugernavn = ${brugernavn} and kodeord = ${kodeord}`;
    if (brugernavn == 'admin' && kodeord == '1234') {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    login: logInd
}