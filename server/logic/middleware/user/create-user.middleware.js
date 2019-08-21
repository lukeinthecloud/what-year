const registrationService = require('../../services/user/registration.service');

async function createNewUser(req, res, next) {
	const {doesUserExist} = res.locals;

	if (doesUserExist) {
		res.json({
			message: 'Username is already in use'
		});
	} else {
		await _setNewUser(req, res, next)
	}
}

async function _setNewUser(req, res, next) {
	try {
		await _hashUserPasswordAndSave(req, res, next)
	} catch (err) {
		_handleUserRegistrationError(err, req, res, next);
	}
}

async function _hashUserPasswordAndSave(req, res, next) {
	const newUser = registrationService.hashUserPassword(req.body.username, req.body.password);

	const saveResult = await newUser.save();

	res.locals.result = {
		message: `Successfully registered ${req.body.username}`,
		result: {
			id: saveResult._id,
			username: saveResult.username
		}
	};

	next();
}

function _handleUserRegistrationError(err, req, res, next) {
	console.error('Error registering user: ', err);

	next({
		statusCode: 500,
		path: 'users/register',
		message: 'There was a problem registering this user, please try again'
	});
}

module.exports = {
	createNewUser
};