const mongoose = require('mongoose');

function connectDatabase(callback) {
	const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0-f23vc.mongodb.net/users?retryWrites=true&w=majority`;

	mongoose.connect(uri, {useNewUrlParser: true});

	mongoose.connection.on('connected', () => {
		console.info('DB Connection Successful');
		callback();
	});

	mongoose.connection.on('error', (error) => {
		console.info('DB Connection Error');
		callback(error);
	});
}

module.exports = {
	connectDatabase
};