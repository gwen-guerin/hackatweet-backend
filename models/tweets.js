const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  firstname: String,
  username: String,
  tweet: String,
  likes: Number,
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;
