import React from 'react';
import './SignIn.css';

const SignIn = ({onRouteChange}) => {
	return (
	   	<div className="center">
	   		<main className="pa4 black-80">
	   		  <div className="measure br2 shadow-2 pa3 white tc signin">
	   		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
	   		      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
	   		      <div className="mt3">
	   		        <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
	   		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" type="email" name="email-address"  id="email-address" />
	   		      </div>
	   		      <div className="mv3">
	   		        <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
	   		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" type="password" name="password"  id="password" />
	   		      </div>
	   		    </fieldset>
	   		    <div className="">
	   		      <input 
	   		      onClick={() => onRouteChange('home')}
	   		      className="b ph3 pv2 input-reset ba white bg-transparent grow pointer f3 dib" 
	   		      type="submit" 
	   		      value="Sign in" 
	   		      />
	   		    </div>
	   		    <div className="lh-copy mt3">
	   		      <p onClick={() => onRouteChange('register')} href="#0" className="f3 link dim white db pointer">Register</p>
	   		    </div>
	   		  </div>
	   		</main>
		</div>
	);
}

export default SignIn;