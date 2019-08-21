function setupEnvironmentVariables() {
	const nodeEnvironment = process.env.NODE_ENV.trim();

	// NOTE: this will not work in IntelliJ dev, those will need to be set up in the launch config
	require('dotenv').config({
		path: nodeEnvironment === 'development' ? './.env.development' : './.env.production'
	});
}


module.exports = {
	setupEnvironmentVariables
};