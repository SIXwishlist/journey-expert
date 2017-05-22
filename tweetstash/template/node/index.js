"use strict"

let getStdin = require('get-stdin');

let handler = require('./function/handler');

getStdin().then(val => {
    handler(val, (err, res) => {
        if (err) {
            return console.error(err);
        }
        console.log(res);
    });
}).catch(e => {
    console.error(e.stack);
});