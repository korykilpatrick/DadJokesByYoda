const request = require('request');
const config = require('../config');

const convert = string => {
	return new Promise ((resolve, reject) => {
		let options = {
			url: 'http://api.funtranslations.com/translate/yoda.json',
			form: {text: string},
			headers: {
				'X-FunTranslations-Api-Secret' : config.YODA_TOKEN
			}
		}
		request.post(options, (err, res, body) => {
			err ? reject(err) : resolve(body)
		})
	})
}

module.exports.convert = convert;


