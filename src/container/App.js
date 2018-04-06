import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import Rank from '../components/Rank/Rank'
import ImageDisplay from '../components/ImageDisplay/ImageDisplay'
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
			imageUrl:''
		}
	}

	onInputChange =(e) => {
		this.setState({input:e.target.value});
	}

	onButtonSubmit =(e) => {
		this.setState({imageUrl: this.state.input})
		app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then(
		    function(response) {
		      console.log(response);
		    },
		    function(err) {
		      // there was an error
		    }
		);
	}

  	render() {
	    return (
	      <div>
	      	<Particles params={particlesOptions} className="particles"/>
	      	<Navigation />
	      	<Rank />
	      	<ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
	      	<ImageDisplay imageUrl = {this.state.imageUrl}/>
	      </div>
	    );
  }
}

export default App;