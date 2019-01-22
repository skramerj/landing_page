import React, { Component } from 'react';

const hero_font_1 = "Eina01-Bold, system-ui, -apple-system, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif";
const hero_font_2 = "system-ui, -apple-system, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif"

const header = {
	textAlign: 'center', 
	color: "white",
	fontFamily: hero_font_1, 
	fontWeight: "700",
	fontSize: "60px",
	lineHeight: "1.1",
	marginBottom: "45px"
}

const subHeader = {
	textAlign: 'center', 
	color: "white",
	fontFamily: hero_font_2, 
	fontWeight: "400",
	fontSize: "25px", 
	marginBottom: "20px"
}

var headerText = <h1 style={header}>Praxis is built<br />for engineers like you.</h1>
var subHeaderText = <h3 style={subHeader}>Our 5-axis 3D printers produce accurate and affordable prints<br/>that look like, feel like, and work like your final products.</h3>

if (window.innerWidth < 600) {
	headerText = <h1 style={header}>Praxis is<br />built for<br />engineers like<br />you.</h1>
	subHeaderText = <h3 style={subHeader}>Our 5-axis 3D printers<br />produce accurate and affordable prints that<br/>look like, feel like, and<br/>work like your final products.</h3>
}



export default class HeroText extends Component {
	render() {
		return(
			<div className="hero text" style={{margin: "auto", marginLeft: "25px", marginRight: "25px"}}>
				{headerText}
				{subHeaderText}
			</div>
		)
	}
}