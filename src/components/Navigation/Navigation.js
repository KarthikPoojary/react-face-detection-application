import React from 'react';
import './Navigation.css';
import brain from './brain.png';
import Tilt from 'react-tilt';

const Navigation = () => {
	return (	  
	  	<div className="flex justify-around pt4">
		  <div className="w-25 pa3 tc">
		  	<Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner"> <img alt="logo" src={brain} className="log"/> </div>
			</Tilt>		    
		  </div>
		  <div className="flex">
		    <p className="link underline white hover-orange pa2 dim pointer">Sign In</p>
		    <p className="link underline white hover-orange pa2 dim pointer">Register</p>
		  </div>
		</div>
	);
}

export default Navigation;