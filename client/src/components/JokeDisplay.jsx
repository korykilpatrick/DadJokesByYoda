import React from 'react';

const JokeDisplay = ({joke, toggleOriginal, showOriginal}) => (
	<div>
		<img src="https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125"/>
		{function() {
			if (joke.contents) {
				return <p className="currentJoke">{joke.contents.translated}</p>
			} else {
				return <p></p>
			}
		}()}
		{function() {
			if (showOriginal) {
				return <div><div className="original">{joke.contents.text}</div> 
							 <button className="originalToggle" onClick={toggleOriginal}>Rekt The Original</button></div>;
			} 
			return <button className="originalToggle" onClick={toggleOriginal}>Show Original</button>;
		}()}
	</div>
)

export default JokeDisplay;