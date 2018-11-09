import React, { Component } from 'react';
import HeroText from './hero_text.jsx';
import ValueIcons from './value_icons.jsx';
import LeadCaptureButton from './lead_capture.jsx';

const background = {
	Height: "100%",
	backgroundColor: "#2D7BC8", 
	paddingTop: "10px", 
	overflow: "hidden"
}

var to_render = (
	<div className="background" style={background}>
		<HeroText />
		<ValueIcons />
		<LeadCaptureButton />
	</div>
	)

if (window.innerWidth < 600) {
	to_render = (
		<div className="background" style={background}>
			<HeroText />
			<LeadCaptureButton />
		</div>
		)
}

export default class App extends Component {
  render() {
    return to_render;
  }
}

