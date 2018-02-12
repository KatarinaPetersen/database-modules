
const mysql = require('mysql2');
const db = require('../config/sql').connect();


// function hentAlle(callback) {
//     db.query("SELECT * FROM bolche", function (err, result) {
//         if (err)
//             callback(err, null);
//         else
//             callback(null, result);
//     });
// // }


// function hentEn(callback, id) {
//     var sql = "SELECT * FROM bolche where id = " + id;
//     db.query(sql, function (err, result) {
//         if (err)
//             callback(err, null);
//         else
//             callback(null, result);
//     });
// }

// Prepare statement
// function hentEn(callback, id) {
//     var sql = "SELECT * FROM bolche where id = ?";
//     var p = [[id]];
//     db.query(sql, p, function (err, result) {
//         if (err)
//             callback(err, null);
//         else
//             callback(null, result);
//     });
// }

// Prepare statement
// function opretNy(callback, id, navn, farve, vaegt, smag, styrke, pris, surhed) {

//     var sql = "INSERT INTO bolche (id, navn, farve, vaegt, smag, styrke, pris, surhed) VALUES ?";
//     var values = [id, navn, farve, vaegt, smag, styrke, pris, surhed];

//     db.query(sql, [[values]], function (err, result) {
//         if (err)
//             callback(err, null);
//         else
//             callback(null, result);
//     });
// }

// function skiftNavn(callback, id, navn) {

//     var sql = "UPDATE bolche set navn = ? where id = ?";

//     db.query(sql, [navn, id], function (err, result) {
//         if (err)
//             callback(err, null);
//         else
//             callback(null, result);
//     });
// }

function slet(callback, id) {

    var sql = "DELETE from bolche where id = ?";

    db.query(sql, [id], function (err, result) {
        if (err)
            callback(err, null);
        else
            callback(null, result);
    });
}

module.exports = {
    //getAll: hentAlle,
    //getOne: hentEn,
    //create: opretNy,
    //changeName: skiftNavn,
    delete: slet
}


// Bruges ved request direkte til db online
// const bolche = require('../services/bolche');

// module.exports = function (server) {
// 	server.get('/bolche', function(req, res){
// 		bolche.getAll(function (err, data) {
// 			if (err)
// 				res.send("fejlbesked...");
// 			else
// 				res.send(data);
// 		});
// 	});
// }