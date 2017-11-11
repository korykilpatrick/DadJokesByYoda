var express = require('express');
var tokens = require('../config');
var bodyParser = require('body-parser');
// var db = require(*pathtodb*);
var dadJoke = require('../helpers/dadJoke');
var yodaSpeak = require('../helpers/yodaSpeak');

var app = express();

app.use(express.static(__dirname + './../client/dist'));
app.use(bodyParser.json());


app.get('/joke', (req, res) => {
	dadJoke.getDadJoke()
		.then(results => JSON.parse(results).attachments[0]['text'])
		.then(joke => yodaSpeak.convert(joke))
		.then(results => console.log('this is yoda: ', results))
		.catch(err => console.log('Error in promise chain: ', err))
})
var port = 8080;

app.listen(port, function() {
  console.log(`your destiny awaits at port ${port}`);
});