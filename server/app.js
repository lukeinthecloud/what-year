const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv-flow').config({
	node_env: process.env.NODE_ENV.trim()
});

const apiRouter = require('./routes/api/api.router');
const heartBeatRouter = require('./routes/heartbeat');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', heartBeatRouter);
app.use('/api', apiRouter);

module.exports = app;
