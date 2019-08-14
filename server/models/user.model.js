const userSchema = new mongoose.Schema({
	username: 'string',
	password: 'string'
});

module.exports = userSchema;