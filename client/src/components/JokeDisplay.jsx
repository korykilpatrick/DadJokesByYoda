import React from 'react';

const JokeDisplay = ({joke}) => (
	<div>
		<img src="https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125"/>
		<p>{joke}</p>
	</div>
)

export default JokeDisplay;