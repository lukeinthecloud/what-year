const express = require('express');

require('../../config/passport-setup');

const usersRouter = require('./users.routes');

const router = express.Router();

router.use('/users', usersRouter);

module.exports = router;