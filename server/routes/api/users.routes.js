const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../../models/user.model');
const {createNewUser} = require('../../logic/middleware/user/create-user.middleware');
const {existingUser} = require('../../logic/middleware/user/existing-user.middleware');

router.get('/', async (req, res) => {
	const response = await User.find()
		.catch((err) => {
			console.error('Error checking if user exists: ', err);
			res
				.status(500)
				.json({
					path: '/users',
					message: 'Error in request'
				});
		});

	await res.json(response);
});

router.post('/register', [existingUser, createNewUser], async (req, res) => {
	res
		.status(200)
		.json({
			message: `User ${res.locals.result.username}, has successfully been registered`,
			result: res.locals.result
		})
});

router.post('/login', passport.authenticate('local'), (req, res) => {
});

module.exports = router;

