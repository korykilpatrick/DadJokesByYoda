const request = require('request');
const config = require('../config');

const convert = string => {
	return new Promise ((resolve, reject) => {
		let options = {
			url: 'http://api.funtranslations.com/translate/yoda.json',
			body: JSON.stringify(string),
			'X-FunTranslations-Api-Secret' : config.YODA_TOKEN
		}
		request.post(options, (err, res, body) => {
			if (!err){
				console.log('Yoda, ', body)
				resolve(body)
			} else {
				reject(err)
			}
		})
	})
}

module.exports.convert = convert;


