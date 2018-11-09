import React, { Component } from 'react';
import HeroText from './hero_text.jsx';
import ValueIcons from './value_icons.jsx';
import LeadCapture from './lead_capture.jsx';

const background = {
	Height: "100%",
	backgroundColor: "#2D7BC8", 
	paddingTop: "10px", 
	overflow: "hidden"
}

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: ''}
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEnterKey = this.handleEnterKey.bind(this);
	}

	handleNameChange(event) {
		this.setState({name: event.target.value.toUpperCase()});
	}

  handleEmailChange(event) {
  	this.setState({email: event.target.value.toUpperCase()});
  }

  handleSubmit() {
  	console.log("name: ", this.state.name)
  	console.log("email: ", this.state.email)
  }

  handleEnterKey(event){
  	var keyCode = event.which || event.keyCode;
  	if (keyCode === 13) {
  		this.handleSubmit()
  	}  
  }

  render() {
    return (
			<div className="background" style={background}>
				<HeroText />
				<ValueIcons />
				<LeadCapture handleNameChange={this.handleNameChange} handleEmailChange={this.handleEmailChange} state={this.state}/>
			</div>
   	);
  }
}

