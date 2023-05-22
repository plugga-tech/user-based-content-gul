const mongoose = require('mongoose');
const { Schema } = mongoose;


const postSchema = new mongoose.Schema({
    title: {type: String, required: true },
    content: {type: String, required: true },
    author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    created: {type: String, required: true}
  });

  const Post = mongoose.model('Post', postSchema);

module.exports = Post;