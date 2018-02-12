const bolche = require('./services/bolche');
const bruger = require('./services/bruger');

// console.log(bruger.login('admin','1234'));
// console.log(bruger.login('falskbruger','1234')); false bruger

// bolche.getAll(function (err, result) {
//     if (err)
//         console.log("fejlbesked...");
//     else
//         console.log(result);
// })


// 3 hvis vi vil have id nr 3 skrevet ud
// bolche.getOne(function (err, result) {
//     if (err)
//         console.log("fejlbesked...");
//     else
//         console.log(result);
// }, 3); 


// bolche.getOne(function (err, result) {
//     if (err)
//         console.log("fejlbesked...");
//     else
//         console.log(result);
// }, 3); 



// bolche.create(function (err, result) {
//     if (err)
//         console.log("Fejl");
//     else
//         console.log(result);
// },null, 'grøn frø', 'grøn', 16,'æble', 'sur', 20, 'sød'); 

// bolche.changeName(function (err, result) {
//     if (err)
//         console.log("Fejl");
//     else
//         console.log(result);
// },12, 'Lysegrøn frø'); 

bolche.delete(function (err, result) {
    if (err)
        console.log("Fejl");
    else
        console.log(result);
}, 12); 