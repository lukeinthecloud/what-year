const express = require('express');
const expressDomain = require('express-domain-middleware');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const MongoClient = require('mongodb').MongoClient;

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0-f23vc.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {useNewUrlParser: true});

const usersRouter = require('./users');

const router = express.Router();

client.connect(err => {
	console.info('Successful Connection to MongoDB Cluster');
	const collection = client
		.db('test')
		.collection('devices');

	client.close();
});


router.use(expressDomain);
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
router.use(cookieParser());

router.use('/users', usersRouter);

module.exports = router;