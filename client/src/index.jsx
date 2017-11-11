import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import JokeDisplay from './components/JokeDisplay.jsx';
import FavoritesList from './components/FavoritesList.jsx';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temp: ''
		}
	}

	componentDidMount() {
		this.getJoke();
	}	

	getJoke() {
		$.ajax({
			method: 'GET',
			url: '/joke'
		})
	}

	// getYodaDadJoke() {
	// 	getDadJoke()
	// 	.then(dadjoke => convertToYodaSpeak(dadjoke))
	// 	.then()
	// }

	render() {
		return (
			<div>
				<h2>Jokes, Dad Has</h2>
				<Search />
				<JokeDisplay />
				<FavoritesList />
			</div>
		)
	}	
}

ReactDOM.render(<App />, document.getElementById('app'));