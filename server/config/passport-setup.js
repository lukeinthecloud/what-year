const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');

const User = require('../models/user.model');

passport.use(new LocalStrategy((username, password, done) => {
		User.findOne({
			username: username
		}, async (err, user) => {
			const hashedPassword = user.password;

			if (err) {
				return done(err);
			}

			if (!user) {
				return done(null, false, {
					message: 'Failed Authentication...'
				});
			}

			const isValidPassword = await user.isValidPassword(hashedPassword, password);

			if (!isValidPassword) {
				return done(null, false, {
					message: 'Failed Authentication...'
				});
			}

			return done(null, user);
		});
	}
));

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
});