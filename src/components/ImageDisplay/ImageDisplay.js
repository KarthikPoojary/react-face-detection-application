import React from 'react';
import './ImageDisplay.css';

const ImageDisplay = ({imageUrl}) => {
	return (
	   	<div>
	   		<img 
	   		alt="Facedetect" 
	   		className="facedetect center pt4"
	   		src={imageUrl}
	   		/>
		</div>
	);
}

export default ImageDisplay;