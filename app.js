const createError = require('http-errors');
const express = require('express');
const cors = require('cors');

const router = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors());

app.use('/', router);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});

module.exports = app;
