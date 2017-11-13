import React from 'react';

const JokeDisplay = ({joke, toggleOriginal, showOriginal}) => {
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
	   color: 'cce0ff',
	   fontSize: '14px',
	   fontFamily: 'Georgia, Serif',
	   textDecoration: 'none',
	   verticalAlign: 'middle'
	}

	const pStyle = {
		color: 'white',
		fontSize: '18px',
	  fontFamily: 'Georgia, Serif'
	}

	const imgStyle = {
		margin: '5px',
		border: 'solid white 1px',
		width: '30%',
		height: '30%'
	}
	return (
	<div>
		<img style={imgStyle} src="https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125"/>
		{function() {
			if (joke.contents) {
				return <p style={pStyle} className="currentJoke">{joke.contents.translated}</p>
			} else {
				return <p></p>
			}
		}()}
		{function() {
			if (showOriginal) {
				return <div><div style={pStyle} className="original">{joke.contents.text}</div> 
							 <button style={buttonStyle} className="originalToggle" onClick={toggleOriginal}>Original,Hide</button></div>;
			} 
			return <button style={buttonStyle} className="originalToggle" onClick={toggleOriginal}>Original, Show</button>;
		}()}
	</div>
	)
}

export default JokeDisplay;