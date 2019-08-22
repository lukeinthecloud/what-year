const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressDomain = require('express-domain-middleware');
const logger = require('morgan');
const passport = require('passport');
const cors = require('cors');

const {setupEnvironmentVariables} = require('./config/enviroment-setup');

const errorMiddleware = require('./logic/middleware/errors/error.middleware');
const errorLoggerMiddleware = require('./logic/middleware/errors/error-logger.middleware');
const dbConnectionService = require('./logic/services/database/db-connection.service');

setupEnvironmentVariables();

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

	const allowedOrigins = ['http://localhost:3001', 'http://localhost:3000',
		'http://yourapp.com'];

	app.use(cors({
		origin: function(origin, callback) {
			if (!origin) return callback(null, true);
			if (allowedOrigins.indexOf(origin) === -1) {
				var msg = 'The CORS policy for this site does not ' +
					'allow access from the specified Origin.';
				return callback(new Error(msg), false);
			}
			return callback(null, true);
		}
	}));

	app.use(passport.initialize({}));
	app.use(passport.session({}));

	app.use('/', heartBeatRouter);
	app.use('/api', apiRouter);

	app.use(errorLoggerMiddleware);
	app.use(errorMiddleware);
});

module.exports = app;
