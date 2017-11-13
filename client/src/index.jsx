import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GetJoke from './components/GetJoke.jsx';
import JokeDisplay from './components/JokeDisplay.jsx';
import FavoritesList from './components/FavoritesList.jsx';
import styles from '../../styles/styles.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			joke: '',
			originalToggle: false,
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
		let joke = this.state.joke;
		$.ajax({
			method: 'POST',
			url: '/favorites',
			data: JSON.stringify({joke}),
			contentType: 'application/json'
		}).done(() => {
			this.getFavorites();
		})
	}

	clearFavorites() {
		this.setState({
			favoritesList: []
		})
		$.ajax({
			method: 'GET',
			url: '/clearFavorites'
		})
	}

	toggleOriginal() {
		this.setState(prevState => ({
      originalToggle: !prevState.originalToggle
    }));
	}

	render() {
		const hStyle = {
			color: 'white',
			fontFamily: 'georgia',
			fontSize: '30px'
		}
		return (
			<div>
				<div>
					<h1 style={hStyle}>Jokes, Dad Has</h1>
				</div>
				<div>
					<GetJoke getJoke={this.getJoke.bind(this)} />
					<JokeDisplay joke={this.state.joke} toggleOriginal={this.toggleOriginal.bind(this)} showOriginal={this.state.originalToggle}/>
				</div>
				<div>
					<FavoritesList clear={this.clearFavorites.bind(this)} addFavorite={this.addFavorite.bind(this)} favoritesList={this.state.favoritesList}/>
				</div>	
			</div>
		)
	}	
}

ReactDOM.render(<App />, document.getElementById('app'));