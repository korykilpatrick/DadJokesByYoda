const request = require('request');
const YodaSpeak = require('yoda-speak');
const yoda = new YodaSpeak('TvAyBy4AcrmshJ5Ay4NzJSwd4Rk0p1aBBs3jsnrngpSQ3ShW5C');

const convert = string => {
	return new Promise((resolve, reject) => {
		yoda.convert(string, function(err, result) {
	    if (!err) {
	        resolve(result.toString());
	    } else {
	        reject(err);
	    }
		})
	})
}

module.exports.convert = convert;
