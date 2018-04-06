import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import Rank from '../components/Rank/Rank'
import ImageDisplay from '../components/ImageDisplay/ImageDisplay'
import 'tachyons'
import './App.css';
import Particles from 'react-particles-js';

const particlesOptions = {
	particles: {
		line_linked: {
			shadow: {
				enable: true,
				color: "#3CA9D1",
				blur: 5
			}
		},
		detect_on: "canvas",
	    events: {
	      onhover: {
	        enable: true,
	        mode: "repulse"
	      },
	      "resize": true
	    },
		nuber:{
			value:30,
			density:{
				enable:true,
				value_area:800
			}
		}
	}
}

class App extends Component {
  render() {
    return (
      <div>
      	<Particles params={particlesOptions} className="particles"/>
      	<Navigation />
      	<Rank />
      	<ImageLinkForm />
      	<ImageDisplay />
      </div>
    );
  }
}

export default App;