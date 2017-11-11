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
			joke: ''
		}
	}

	componentDidMount() {
		this.getJoke()
	}	

	getJoke() {
		// $.ajax({
		// 	method: 'GET',
		// 	url: '/joke'
		// }).done(joke => 
		// 	this.setState({
		// 		joke: joke
		// }))
	}

	favorite() {
		// post to database
		
	}

	render() {
		return (
			<div>
				<h2>Jokes, Dad Has</h2>
				<GetJoke getJoke={this.getJoke.bind(this)} />
				<DisplayJoke joke={this.state.joke}/>
				<FavoritesList />
			</div>
		)
	}	
}

ReactDOM.render(<App />, document.getElementById('app'));