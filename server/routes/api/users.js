const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: 'string',
	password: 'string'
});

const User = mongoose.model('User', userSchema, 'localUsers');

router.get('/', async (req, res) => {
	const response = await User.find({})
		.catch((err) => {
			// TODO: Handle error
		});

	await res.json(response);
});

router.post('/register', function(req, res, next) {
	passport.use(new LocalStrategy((username, password, done) => {
			console.log(username)
			// User.findOne({username: username}, (err, user) => {
			// 	if (err) {
			// 		return done(err);
			// 	}
			//
			// 	if (!user) {
			// 		return done(null, false, {
			// 			message: 'Incorrect username.'
			// 		});
			// 	}
			//
			// 	if (!user.validPassword(password)) {
			// 		return done(null, false, {
			// 			message: 'Incorrect password.'
			// 		});
			// 	}
			//
			// 	return done(null, user);
			// });
		}
	));
});

module.exports = router;

