const request = require('request');
const rp = require('request-promise');


const getDadJoke = () => {
	return new Promise ((resolve, reject) => {
		let options = {
			url: 'https://icanhazdadjoke.com/slack',
			contentType: 'application/json'
		}
		request(options, (err, res, body) => resolve(body))
	})
}

module.exports.getDadJoke = getDadJoke;