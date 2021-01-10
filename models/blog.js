const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, { timestamps: true })    // takes a second argument, like an options arg

const Blog = mongoose.model('Blog', blogSchema ) // first arg will be pluralized, and will look for blogs in collection on db auto, second arg will be the schema

module.exports = Blog;