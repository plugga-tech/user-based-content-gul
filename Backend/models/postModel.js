const mongoose = require('mongoose');
const UserModel = require('./userModel.js');
const { Schema } = mongoose;

const postSchema = new mongoose.Schema({
    title: {type: String, required: true },
    content: {type: String, required: true },
    username: {type: Schema.Types.ObjectId, ref: 'user', required: true},
    author: {type: String, required: true },
    created: {type: String, required: true}
  });

  const Post = mongoose.model('Post', postSchema);

module.exports = Post;