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
});


//Hämta alla posts

router.get("/", (req, res) => {
//HÄMTAR ALLA POSTS. går in i models => postModel och där skickar vi med funktionen find() för att ta ut alla posts från DB
  postModel.find()
      .then(posts => {
        console.log(posts);
        res.json(posts)
      })
      .catch(error => {
        // Hantera fel
        console.error(error);
      });
})

module.exports = router;
