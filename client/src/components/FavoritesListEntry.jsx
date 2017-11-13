import React from 'react';

const FavoritesListEntry = ({joke}) => {
	const ulStyle = {
			color: 'white',
			fontFamily: 'georgia',
			fontSize: '18px'
		}
	return (
		<div>
			<ul style={ulStyle}>
				{joke.translated}
			</ul>
		</div>
	)
}

export default FavoritesListEntry;