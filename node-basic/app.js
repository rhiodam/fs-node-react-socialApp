
// importing helper.js
// const  helpers = require("./helpers");

// Object Destructuring
// extract some method or function from other module
// const  {sum , sum2} = require("./helpers");

// const total = sum(10,200);
// const total2 = sum2(10,200);

// console.log("TOTAL 1 : " , total);
// console.log("TOTAL 2 : " , total2);


// this was from node core module
// const http = require('http');


// const server = http.createServer((req,res)=>{
//     res.end("Hello world updated");
//     // console.log("request coming..." , req)
// })

// node file system
const fs = require('fs');

const fileName = "target.txt";

// fs.watch(fileName , ()=>{
//     console.log('File has changed..')
// })


// this operation needs time to complete and handled by callback
fs.readFile(fileName , (err , data) =>{
    if (err){
        // console.log(err)
        errorHandling(err)
    }
    // console.log(data.toString())
    dataHandling(data)
})

const errorHandling = (err) => console.log(err);
const dataHandling = (data) => console.log(data.toString());

console.log('Node js async process')


// const express = require('express');
// const app = express();
//
// app.get("/" , (req,res)=>{
//     res.end("Hello world updated from express...");
//     // console.log("request coming..." , req)
// });
//
// app.listen(3000);







