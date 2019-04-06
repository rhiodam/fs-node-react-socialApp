const express = require('express');
const app = express();


app.get("/" , (req,res) =>{
    res.send("Hello world from express");
})

const port = 3001;

app.listen(port , ()=>{
    console.log(`Server running at port : ${port}`)
});