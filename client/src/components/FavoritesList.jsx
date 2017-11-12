import React from 'react';
import FavoritesListEntry from './FavoritesListEntry.jsx';

const FavoritesList = ({favoritesList, addFavorite}) => (
	<div>
		<button onClick={addFavorite}>To Favorites, Save</button>
		{favoritesList.map(joke => 
			<FavoritesListEntry joke={joke} key={joke.text}/>
		)}
	</div>
)

export default FavoritesList;