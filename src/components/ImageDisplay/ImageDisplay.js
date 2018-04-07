import React from 'react';
import './ImageDisplay.css';

const ImageDisplay = ({imageUrl , box }) => {
	return (
	   	<div className="center ma">
	   		<div className="absolute">
		   		<img 
		   		id="inputImage"
		   		alt="" 
		   		className="facedetect pt4 "
		   		src={imageUrl}
		   		/>
		   		<div 
		   		className="boundingBox" 
		   		style = {{top: box.topRow, right: box.rightCol , bottom: box.bottomRow, left: box.leftCol}}
		   		></div>
	   		</div>
		</div>
	);
}

export default ImageDisplay;