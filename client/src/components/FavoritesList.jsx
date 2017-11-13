import React from 'react';
import FavoritesListEntry from './FavoritesListEntry.jsx';

const FavoritesList = ({favoritesList, addFavorite, clear}) => {
	const buttonStyle = {
	   borderTop: '1px solid',
	   backgroundColor: '#99c2ff',
	   padding: '5px 10px',
	   WebkitBorderRadius: '8px',
	   MozBorderRadius: '8px',
	   borderRadius: '8px',
	   WebkitBoxShadow: 'rgba(0,0,0,1) 0 1px 0',
	   MozBoxShadow: 'rgba(0,0,0,1) 0 1px 0',
	   boxShadow: 'rgba(0,0,0,1) 0 1px 0',
	   textShadow: 'rgba(0,0,0,.4) 0 1px 0',
	   color: 'black',
	   fontSize: '14px',
	   fontFamily: 'Georgia, Serif',
	   textDecoration: 'none',
	   verticalAlign: 'middle'
	}
	return (<div>
		<button style={buttonStyle} onClick={addFavorite}>Save</button>
		<button style={buttonStyle} onClick={clear}>Clear</button>
		{favoritesList.map(joke => 
			<FavoritesListEntry joke={joke} key={joke.text}/>
		)}
	</div>
	)
}

export default FavoritesList;