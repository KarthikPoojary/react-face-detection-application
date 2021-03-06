import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import Rank from '../components/Rank/Rank'
import ImageDisplay from '../components/ImageDisplay/ImageDisplay'
import SignIn from '../components/SignIn/SignIn'
import Register from '../components/Register/Register'
import 'tachyons'
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: 'fba7b10e40264a4a8b571f90ab6df2b9'
});
const particlesOptions = {
	particles: {
		line_linked: {
			shadow: {
				enable: true,
				color: "#3CA9D1",
				blur: 5
			}
		},
		number:{
			value:30,
			density:{
				enable:true,
				value_area:800
			}
		}
	}
}

class App extends Component {
	constructor(){
		super();
		this.state ={
			input:'',
			imageUrl:'',
			box:{},
			route:'signin',
			isSignedIn:false
		}
	}

	onInputChange = (e) => {
		this.setState({input:e.target.value});
	}

	onButtonSubmit =() => {
		this.setState({imageUrl: this.state.input})
		app.models
			.predict(
				Clarifai.FACE_DETECT_MODEL, this.state.input
				)
			.then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
			.catch(err =>console.log(err));			    
	}

	calculateFaceLocation = (data) =>{
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.querySelector("#inputImage")
		const width = Number(image.width);
		const height = Number(image.height);
		return{
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - (clarifaiFace.right_col * width),
			bottomRow: height - (clarifaiFace.bottom_row * height)
		}
	}

	displayFaceBox = (box) => {
		console.log(box);
		this.setState({box:box})
	}

	onRouteChange = (route) =>{
		if(route === 'signout'){
			this.setState({isSignedIn:false})
		} else if(route === 'home'){
			this.setState({isSignedIn:true})
		}
		this.setState({route: route})
	}

  	render() {
  		const {isSignedIn, route, box, imageUrl} = this.state;
	    return (
	      <div>
	      	<Particles params={particlesOptions} className="particles"/>
	      	<Navigation isSignedIn={isSignedIn} onRouteChange = {this.onRouteChange}/>
	      	{ route === 'home'
	      		?	<div>
				      	<Rank />
				      	<ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
				      	<ImageDisplay box = {box} imageUrl = {imageUrl}/>
	      			</div> 
	      		:	(
	      				route === 'signin' || route === 'signout' 
	      				?	<SignIn onRouteChange = {this.onRouteChange}/>
	      				:	<Register onRouteChange = {this.onRouteChange}/>
	      			)      		
	      	}
	      </div>
	    );
  }
}

export default App;