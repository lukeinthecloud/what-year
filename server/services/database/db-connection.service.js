const envConfig = require('../../env.config');
const mongoose = require('mongoose');

const uri = `mongodb+srv://${envConfig.MONGODB_USER}:${envConfig.MONGODB_PASSWORD}@cluster0-f23vc.mongodb.net/users?retryWrites=true&w=majority`;

function connectDatabase(callback) {
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