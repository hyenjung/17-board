"use strict";

/******* Server ******/
require('dotenv').config();

var express = require('express');

var app = express();

var path = require('path');
/******* Server ******/


app.listen(process.env.PORT);
/******* View/pug ******/

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true;
/******* POST/BODY ******/

app.use(express.json());
app.use(unlencoded({
  extended: false
}));
/******* 라우터 등록******/

/******* 라우터******/

var authRouter = require('./routes/auth-route');

var boardRouter = require('./routes/board-route');

var boardApiRouter = require('./routes/board-api-route');

var galleryRouter = require('./routes/gallery-route');

app.use('/', express["static"](path.join(__dirname, 'public')));
app.use('/auth', authRouter);
app.use('/board', boardRouter);
app.use('/api', boardApiRouter);
app.use('/auth', galleryRouter);
/******* 에러******/

app.use(function (req, res, next) {
  next(404);
});
app.use(function (err, req, res, next) {
  res.render('error', err);
});