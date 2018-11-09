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

export default class App extends Component {
  render() {
    return (
			<div className="background" style={background}>
				<HeroText />
				<ValueIcons />
				<LeadCaptureButton />
			</div>
   	);
  }
}

