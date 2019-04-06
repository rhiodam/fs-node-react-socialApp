

exports.getPosts =((req,res) =>{
    // res.send("Hello world from Post controller");

    res.json({
        posts : [
            {title : "First Post"},
            {title : "Second Post"},
            {title : "Third Post"},
            {title : "Fourth Post"}
        ]
    })
})