import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GetJoke from './components/GetJoke.jsx';
import DisplayJoke from './components/DisplayJoke.jsx';
import FavoritesList from './components/FavoritesList.jsx';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			joke: '',
			favoritesList: []
		}
	}

	componentDidMount() {
		this.getFavorites()
	}	

	getJoke() {
		$.ajax({
			method: 'GET',
			url: '/joke'
		}).done(joke => 
			this.setState({
				joke: JSON.parse(joke)
		})).fail(err => console.log('Error:', err))
	}

	getFavorites() {
		$.ajax({
			method: 'GET',
			url: '/favorites'
		}).done(favoritesList => {
			console.log('favs', favoritesList)
			this.setState({
				favoritesList: favoritesList
			})
		}).fail(err => console.log('Error getting favorites: ', err))
	}
	addFavorite() {
		// post to database
		let joke = this.state.joke;
		$.ajax({
			method: 'POST',
			url: '/favorites',
			data: JSON.stringify({joke}),
			contentType: 'application/json'
		}).done( () => {
			this.getFavorites();
		})
	}

	render() {
		return (
			<div>
				<h2>Jokes, Dad Has</h2>
				<GetJoke getJoke={this.getJoke.bind(this)} />
				<DisplayJoke joke={this.state.joke ? this.state.joke.contents.translated : this.state.joke}/>
				<FavoritesList addFavorite={this.addFavorite.bind(this)} favoritesList={this.state.favoritesList}/>
			</div>
		)
	}	
}

ReactDOM.render(<App />, document.getElementById('app'));