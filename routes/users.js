var express = require('express');
var router = express.Router();

require('../models/connection');
const User = require('../models/users');
const uid2 = require('uid2');
const bcrypt = require('bcrypt');

router.post('/signup', (req, res) => {
  let inputUserName = req.body.username;
  //  let inputName = req.body.name;
  let inputPwd = req.body.password;
  const hash = bcrypt.hashSync(req.body.password, 10);

  // Check if the user has not already been registered
  if (inputUserName && inputPwd) {
    User.findOne({ username: req.body.username }).then((data) => {
      if (data === null) {
        const newUser = new User({
          firstname: req.body.firstname,
          username: req.body.username,
          password: hash,
          token: uid2(32),
        });

        newUser.save().then((newDoc) => {
          res.json({ result: true, user: newUser });
        });
      } else {
        // User already exists in database
        res.json({ result: false, error: 'User already exists' });
      }
    });
  } else {
    res.json({ result: false, error: 'Missing or empty fields' });
  }
});

router.post('/signin', (req, res) => {
  let inputUserName = req.body.username;
  //  let inputName = req.body.name;
  let inputPwd = req.body.password;
  if (inputUserName && inputPwd) {
    User.findOne({ username: inputUserName }).then((data) => {
      if (data === null) {
        res.json({ result: false, error: 'User not found' });
      } else {
        res.json({ result: true });
      }
    });
  } else {
    res.json({ result: false, error: 'Missing or empty fields' });
  }
});


module.exports = router;
