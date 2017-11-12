import React from 'react';

const GrootJoke = ({joke}) => (
	<div>
		<img src="https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125"/>
		<p>{joke.contents.translated}</p>
	</div>
)

export default GrootJoke;