var express = require('express');
var router = express.Router();
const postModel = require('../models/postModel')

// Endpoint to add a new post
router.post('/add', async (req, res) => {
    // Create a new post
    const post = {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    };
    const newPost = await postModel.create(post);
    res.status(200).json(newPost);
    //res.send(newPost);
});  

module.exports = router;
