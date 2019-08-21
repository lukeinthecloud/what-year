const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	username: String,
	password: String
});

userSchema.methods.isValidPassword = async function(hash, password) {
	const result = await bcrypt.compare(password, hash);

	if (result) {
		return result;
	}

	return false;
};

const User = mongoose.model('User', userSchema, 'localUsers');

module.exports = User;