import React, { Component } from 'react';
import HeroText from './hero_text.jsx';
import ValueIcons from './value_icons.jsx';
import LeadCaptureButton from './lead_capture.jsx';

const background_div = {
	backgroundColor: "#2D7BC8", 
	paddingTop: "30px", 
	overflow: "hidden",
}

var render = (
	<div className="background" style={background_div}>
		<HeroText />
		<ValueIcons />
		<LeadCaptureButton />
	</div>
	)

if (window.innerWidth < 600) {
	render = (
		<div className="background" style={background_div}>
			<HeroText />
			<LeadCaptureButton />
		</div>
		)
}

export default class App extends Component {
  render() {
    return render;
  }
}

