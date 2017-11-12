import React from 'react';
import FavoritesListEntry from './FavoritesListEntry.jsx';

const FavoritesList = ({favoritesList, addFavorite, clear}) => (
	<div>
		<button onClick={addFavorite}>Save</button>
		<button onClick={clear}>Clear</button>
		{favoritesList.map(joke => 
			<FavoritesListEntry joke={joke} key={joke.text}/>
		)}
	</div>
)

export default FavoritesList;