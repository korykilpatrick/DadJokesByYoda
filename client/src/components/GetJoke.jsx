import React from 'react';

var GetJoke = (props) => {
	const buttonStyle = {
	   borderTop: '1px solid #96d1f8',
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
		<button style={buttonStyle} onClick={props.getJoke}>Dad Joke, Get New</button>
	</div>)
}

export default GetJoke;