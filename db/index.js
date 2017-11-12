const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test');

const favoriteSchema = mongoose.Schema({
	text: String,
	translated: String,
	translation: String
})

let Favorite = mongoose.model('Favorite', favoriteSchema);

let addFavorite = joke => {
	if (!joke) {
		console.error(joke)
	} else {
		return new Favorite({
			text: joke.contents.text,
			translated: joke.contents.translated,
			translation: joke.contents.translation
		}).save();
	}
}

let isDuplicate = text => (
	Favorite.
		find({text: text})
		.then(res => res.length > 0)
		.catch(err => console.log('Error here'))
)

let getFavorites = () => Favorite.find();

let clearFavorites = () => Favorite.collection.drop();

module.exports.addFavorite = addFavorite;
module.exports.getFavorites = getFavorites;
module.exports.isDuplicate = isDuplicate;
module.exports.clearFavorites = clearFavorites;