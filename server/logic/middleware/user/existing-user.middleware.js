const registrationService = require('../../services/user/registration.service');

async function existingUser(req, res, next) {
	let error = null;
	const result = await registrationService.checkForExistingUser(req)
		.catch((err) => {
			console.error('Error checking if user exists: ', err);
			error = err;
		});

	if (!error) {
		res.locals.doesUserExist = result ? true : false;
		next();
	} else {
		next({
			statusCode: 500,
			path: 'users/register',
			message: `Error in request: ${error}`
		});
	}
}

module.exports = {
	existingUser
};