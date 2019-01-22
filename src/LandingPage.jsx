import React, { Component } from 'react';
const hero_font_1 = "Eina01-Bold, system-ui, -apple-system, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif";

export default class LandingPage extends Component {
	constructor(props) {
    super(props);
    this.state = {
      passcode: ""
    }
  this.handleChange = this.handleChange.bind(this);
	}
  handleChange(event) {
  	this.setState({passcode: event.target.value.toUpperCase()})
  }

  render() {
  	var to_render = (
		<div style={{margin: "0px", height: "95vh", }}>
			<div style={{textAlign: "center", paddingTop: "15%"}}>
				<h2 style={{color: "white", fontweight: "100", fontFamily: hero_font_1}}>Please enter the passcode</h2>
	  		<input
	  			style={{color: "Black", width: "150px", height: "30px", fontweight: "200", fontFamily: hero_font_1, textAlign: "center"}}
	  			type="text"
	  			autoFocus
	  			value={this.state.passcode.toUpperCase()}
	  			tabIndex="0"
	  			onChange={this.handleChange}
	  			>
	  		</input>
	  	</div>
	 	</div>)

		var typeform = (<div style={{margin: "0px", height: "95vh", padding: "0"}}>
									  	<iframe id="typeform-full" width="100%" height="100%" frameborder="0" src="https://samkramer1.typeform.com/to/oIDrqI"></iframe> 
									  	<script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
									 	</div>)

		if (this.state.passcode === "ALPHA") {
			to_render = typeform
		}

  	return (
  		to_render
	  )
  }
}

