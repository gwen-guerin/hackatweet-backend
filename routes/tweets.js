var express = require('express');
var router = express.Router();
require('../models/connection'); // app

const Tweet = require('../models/tweets');

router.post('/', (req, res) => {
  const tweetContent = req.body.tweet;
  if (tweetContent) {
    const newTweet = new Tweet({
    // firstname:
      tweet: tweetContent,
    });

    newTweet.save().then((newTweet) => {
      res.json({ result: true, newTweet });
    });
  }
});

router.get('/', (req, res) => {
  Tweet.find().then((data) => {
    //   console.log(data);
    res.json(data);
  });
});

module.exports = router;
