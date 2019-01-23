import React, { Component } from 'react';
import HeroText from './hero_text.jsx';
import ValueIcons from './value_icons.jsx';
import LeadCaptureButton from './lead_capture.jsx';
const hero_font_1 = "Eina01-Bold, system-ui, -apple-system, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif";

const background_div = {
	backgroundColor: "#2D7BC8", 
	paddingTop: "30px", 
	overflow: "hidden",
}

export default class App extends Component {
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
  		<div className="background" style={background_div}>
				<HeroText />
				<ValueIcons />
				<LeadCaptureButton />
				<div style={{margin: "0px"}}>
					<div style={{textAlign: "center"}}>
						<h2 style={{color: "white", fontWeight: "200", fontFamily: hero_font_1}}>Enter Passcode</h2>
			  		<input
			  			style={{color: "Black", width: "150px", height: "30px", fontFamily: hero_font_1, textAlign: "center"}}
			  			type="text"
			  			autoFocus
			  			value={this.state.passcode.toUpperCase()}
			  			tabIndex="0"
			  			onChange={this.handleChange}
			  			>
			  		</input>
			  	</div>
			 	</div>
			</div>)


  	var typeform = (<div style={{margin: "0px", height: "95vh", padding: "0"}}>
		  	<iframe id="typeform-full" width="100%" height="100%" frameborder="0" src="https://samkramer1.typeform.com/to/oIDrqI"></iframe> 
		  	<script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
		 	</div>)

  	if (window.innerWidth < 600) {
  		to_render = (
  		<div className="background" style={background_div}>
				<HeroText />
				<LeadCaptureButton />
				<div style={{margin: "0px"}}>
					<div style={{textAlign: "center"}}>
						<h2 style={{color: "white", fontWeight: "200", fontFamily: hero_font_1}}>Enter Passcode</h2>
			  		<input
			  			style={{color: "Black", width: "150px", height: "30px", fontFamily: hero_font_1, textAlign: "center"}}
			  			type="text"
			  			autoFocus
			  			value={this.state.passcode.toUpperCase()}
			  			tabIndex="0"
			  			onChange={this.handleChange}
			  			>
			  		</input>
			  	</div>
			 	</div>
			</div>)

  	}

		if (this.state.passcode === "ALPHA") {
			to_render = typeform
		}

    return (
    	to_render
    )
  }
}

