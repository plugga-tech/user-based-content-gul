var express = require('express');
var router = express.Router();
const postModel = require('../models/postModel');
const { default: mongoose } = require('mongoose');

// Endpoint to add a new post
router.post('/add', async (req, res) => {
    // Create a new post
    const timestamp = Date.now();
    const formattedDate = new Date(timestamp).toLocaleString();

    const post = {
      title: req.body.title,
      content: req.body.content,
      // username: req.body.username,
      username: mongoose.SchemaType.ObjectId,
      created: formattedDate
    };
    const newPost = await postModel.create(post);
    res.status(200).json(newPost);
});


//Hämta alla posts

router.get("/", async (req, res) => {
//HÄMTAR ALLA POSTS. går in i models => postModel och där skickar vi med funktionen find() för att ta ut alla posts från DB
try {
  const posts = await postModel.find().populate('author');
  res.json(posts);
} catch (error) {
  console.error('Error fetching posts:', error);
  res.status(500).json({ error: 'Failed to fetch posts' });
}
});

module.exports = router;
