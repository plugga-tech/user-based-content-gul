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
      author: req.body.userId,
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

//Hämta specifik post
router.post("/", (req, res) => {
  let findPost = { _id: req.body._id};
  postModel.find(findPost)
      .then(post => {
          res.json(post)
      })
      .catch(error => {
          console.error(error);
          // Hantera fel
      });
})

//Hämta specifik post med author Id
router.post("/:id", (req, res) => {
  let findPost = { author: req.params.id};
  postModel.find(findPost)
      .then(post => {
          res.json(post)
      })
      .catch(error => {
          console.error(error);
          // Hantera fel
      });
})


//Delete post
router.delete('/delete', async (req, res) => {
  try {
    const deletedPost = await postModel.findOneAndDelete({ _id: req.body._id });
    res.json(deletedPost);
  } catch (err) {
    res.status(500).json({ message: 'Error deleting post' });
  }
});

//Uppdatera post
router.put('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const updatedPost = req.body;

    const result = await postModel.findByIdAndUpdate(postId, updatedPost, {new: true});

    if(result){
      res.json(result);
    }else{
      res.status(404).json({message: 'Inlägget hittades inte.'})
    }
  } catch (err) {
    res.status(500).json({ message: 'Ett fel uppstod vid uppdatering av inlägget!' });
  }
});

module.exports = router;