const bcrypt = require('bcryptjs');

const User = require('../../../models/user.model');

function checkForExistingUser(req) {
	throw Error('This broke');
	return User.findOne({
		username: req.body.username
	})
}

function hashUserPassword(username, password) {
	const hashedPassword = bcrypt.hashSync(password, 10);

	return new User({
		username: username,
		password: hashedPassword
	});
}

module.exports = {
	hashUserPassword,
	checkForExistingUser
};