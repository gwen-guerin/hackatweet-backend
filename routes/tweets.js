var express = require('express');
const { response } = require('../app');
var router = express.Router();
require('../models/connection'); // app

const Tweet = require('../models/tweets');

router.post('/', (req, res) => {
  const tweetContent = req.body.tweet;
  const firstname = req.body.firstname;
  const username = req.body.username;
  const likes = 0;

  if (tweetContent) {
    const newTweet = new Tweet({
      firstname: firstname,
      username: username,
      tweet: tweetContent,
      likes: likes
    });

    newTweet.save().then((newTweet) => {
      // console.log('newTweet', newTweet)
      res.json({ result: true, newTweet: newTweet });
    });
  }
});

router.get('/find', (req, res) => {
  Tweet.find()
  .then((data) => {
      console.log(data);
    res.json({tweets: data});
  });
});

module.exports = router;
