module.exports = function errorHandler(err, req, res, next) {
	const statusCode = err.statusCode ? err.statusCode: 500;

	res
		.status(err.statusCode)
		.json({
			error: err
		});
};