var express = require('express');
var tokens = require('../config');
var bodyParser = require('body-parser');
var db = require('../db/index');
var dadJoke = require('../helpers/dadJoke');
var yodaSpeak = require('../helpers/yodaSpeak');

var app = express();

app.use(express.static(__dirname + './../client/dist'));
app.use(bodyParser.json());


app.get('/joke', (req, res) => {
	dadJoke.getDadJoke()
		.then(results => JSON.parse(results).attachments[0].text)
		.then(joke => yodaSpeak.convert(joke))
		.then(yodafied => res.json(yodafied))
		.catch(err => console.log('Error in promise chain: ', err))
});

app.post('/favorites', (req, res) => {
	db.isDuplicate(req.body.joke.contents.text)
		.then(isDup => { if (isDup) { throw new Error() }
			return db.addFavorite(req.body.joke)})
		.then(() => res.sendStatus(201))
		.catch(err => res.sendStatus(err.message))
});

app.get('/favorites', (req, res) => {
	db.getFavorites()
		.then(favs => {
			console.log('These are the favs', favs)
			res.json(favs)})
		.catch(err => res.sendStatus(404))
});

var port = 8080;

app.listen(port, function() {
  console.log(`your destiny awaits at port ${port}`);
});