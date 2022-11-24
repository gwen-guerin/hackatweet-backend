var express = require('express');
var router = express.Router();
require('../models/connection'); // app

const Tweet = require('../models/tweets')

router.post('/', (req, res) => {
    const tweetContent = req.body.tweet
    if (tweetContent) {
        const newTweet = new Tweet({
            tweet: tweetContent
          });
     
          newTweet.save().then(newTweet => {
            res.json({ result: true, tweet: newTweet });
          });
    }
});

// router.get('/', (req, res) => {
//     Tweet.find({tweet: tweet})
// })

// router.get('/:token', (req, res) => {
//   User.findOne({ token: req.params.token }).then(data => {
//     if (data) {
//       res.json({ result: true, token: data });
//     } else {
//       res.json({ result: false, error: 'User not found' });
//     }
//   });
// });


module.exports = router;
