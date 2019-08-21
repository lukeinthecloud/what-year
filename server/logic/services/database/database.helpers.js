const User = require('../../../models/user.model');

async function findOne(request) {
	await User.findOne(request);
}

module.exports = {
	findOne
};