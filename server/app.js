const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressDomain = require('express-domain-middleware');
const logger = require('morgan');

const errorMiddleware = require('./logic/middleware/errors/error.middleware');
const errorLoggerMiddleware = require('./logic/middleware/errors/error-logger.middleware');
const dbConnectionService = require('./logic/services/database/db-connection.service');

require('dotenv-flow').config({
	node_env: process.env.NODE_ENV.trim()
});

let app = express();

const apiRouter = require('./routes/api/api.router');
const heartBeatRouter = require('./routes/heartbeat');

dbConnectionService.connectDatabase((err) => {
	if (err) {
		// TODO: handle error
	}

	app.use(logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded({extended: false}));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(expressDomain);

	app.use('/', heartBeatRouter);
	app.use('/api', apiRouter);

	app.use(errorLoggerMiddleware);
	app.use(errorMiddleware);
});

module.exports = app;
