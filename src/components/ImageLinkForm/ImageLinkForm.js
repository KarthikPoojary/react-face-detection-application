import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
	   	<div>
	   		<p className="f3 white tc pa4">
	   			{`This Magic Brain will detect faces on the images. Give it a shot`}
	   		</p>
	   		<div className="center">
	   			<div className="center br2 shadow-2 pa4">
		   			<input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
		   			<button 
		   				className="f4 pa2 w-30 center link pointer grow pv2 bg-light-purple white br2"
		   				onClick={onButtonSubmit}
		   				>Detect</button>	
	   			</div>	   			
	   		</div>
		</div>
	);
}

export default ImageLinkForm;