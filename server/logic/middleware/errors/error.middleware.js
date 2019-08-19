module.exports = function errorHandler(err, req, res, next) {
	res.status(500);
	res.json('error', {
		error: err
	});
};