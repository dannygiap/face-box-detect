import React from 'react';
import Tilt from 'react-tilt';
import icon from './icon.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 100, width: 100 }} >
			 	<div className="Tilt-inner pa2"> <img src={icon} alt='Logo'/> </div>
			</Tilt>
		</div>
	);
}

export default Logo;