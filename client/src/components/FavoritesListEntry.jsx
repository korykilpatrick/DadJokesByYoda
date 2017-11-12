import React from 'react';

const FavoritesListEntry = ({joke}) => (
	<div>
		<ul>
			{joke.translated}
		</ul>
	</div>
)

export default FavoritesListEntry;