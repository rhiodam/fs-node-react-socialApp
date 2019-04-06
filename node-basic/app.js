
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


const express = require('express');
const app = express();

app.get("/" , (req,res)=>{
    res.end("Hello world updated from express...");
    // console.log("request coming..." , req)
});

app.listen(3000);







