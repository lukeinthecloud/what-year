const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

router.get('/', function(req, res, next) {
	res.json({
		login: '/login (username, password) => JWT Session',
		register: '/register (username, password) => JWT Session',
		logout: '/logout (username) => Success Status',
	});
});

router.get('/login', function(req, res, next) {
});

router.get('/register', function(req, res, next) {

});

router.get('/logout', function(req, res, next) {
});

module.exports = router;

