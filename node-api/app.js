// Using node modules
const express = require('express');
const app = express();
const morgan = require('morgan');

// Bringing routes
// const postRoutes = require('./routes/post');
const {getPosts} = require('./routes/post');


// Middleware
app.use()


// app.get("/posts" , postRoutes.getPosts);
app.get("/posts" , getPosts);

app.get("/" , (req,res) =>{
    res.send("Hello world from express");
})

const port = 3001;

app.listen(port , ()=>{
    console.log(`Server running at port : ${port}`)
});