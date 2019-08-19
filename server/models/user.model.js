const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: 'string',
	password: 'string'
});

const User = mongoose.model('User', userSchema, 'localUsers');

module.exports = User;