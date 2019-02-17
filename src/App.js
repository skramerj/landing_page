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
  render() {
  	var to_render = (
  			<div className="background" style={background_div}>
					<HeroText />
					<ValueIcons />
					<LeadCaptureButton />
				</div>)

  	if (window.innerWidth < 600) {
  		to_render = (
  			<div className="background" style={background_div}>
					<HeroText />
					<LeadCaptureButton />
				</div>

  		)
  	}

    return (
    	to_render
    )
  }
}

