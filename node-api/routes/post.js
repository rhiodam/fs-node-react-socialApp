const express = require('express')
const postController = require('../controllers/post')

const router = express.Router();

router.get("/posts" , postController.getPosts)
// exports.getPosts =((req,res) =>{
//     res.send("Hello world from Post");
// })

module.exports = router;

//
// module.exports ={
//     getPosts
// }