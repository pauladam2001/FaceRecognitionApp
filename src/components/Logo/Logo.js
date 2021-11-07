import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css'

const Logo = () => {
	return (																		// tilt from npm
		<div className='ma4 mt0'>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >	
			 <div className="Tilt-inner pa3">
			 	<img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
			 	<div className='pa3 f7'>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
			 </div>
		</Tilt>
		</div>
	);
}

export default Logo;