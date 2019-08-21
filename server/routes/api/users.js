const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');

const User = require('../../models/user.model');

router.get('/', async (req, res) => {
	const response = await User.find({})
		.catch((err) => {
			// TODO: Handle error
		});

	await res.json(response);
});

router.post('/register', async (req, res) => {
	try {
		const hashedPassword = bcrypt.hashSync(req.body.password, 10);

		const newUser = new User({
			username: req.body.username,
			password: hashedPassword
		});

		const saveResult = await newUser.save();

		await res.json({
			message: `Successfully registered ${req.body.username}`,
			result: {
				id: saveResult._id,
				username: saveResult.username
			}
		});
	} catch (err) {
		res
			.status(500)
			.send(err);
	}
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {

});

module.exports = router;

