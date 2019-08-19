module.exports = function logErrors(err, req, res, next) {
	// TODO: write errors out to a log file
	next(err);
};