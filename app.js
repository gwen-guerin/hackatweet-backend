require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tweetsRouter = require('./routes/tweets');

var app = express();

<<<<<<< HEAD
const cors = require('cors');
app.use(cors({origin: true}));
=======
const cors = require('cors')
app.use(cors({origin:true}))
>>>>>>> c404133e375b169a943391a1086184e0e6269f5e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tweets', tweetsRouter);


module.exports = app;
