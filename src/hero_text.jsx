import React, { Component } from 'react';
import styled from "styled-components";

const hero_font_1 = "Eina01-Bold, system-ui, -apple-system, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif";
const hero_font_2 = "system-ui, -apple-system, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif"

const HeroDiv = styled.div`
  margin: auto, 
  marginTop: 20px,
  display: inline-block;
 `

const header = {
	textAlign: 'center', 
	color: "white",
	fontFamily: hero_font_1, 
	fontWeight: "700",
	fontSize: "60px",
	lineHeight: "1.0",
	marginBottom: "45px",
	marginLeft: "24px",
	marginRight: "24px",
	fontSmoothing: "antialiased",
}

const subHeader = {
	textAlign: 'center', 
	color: "white",
	fontFamily: hero_font_2, 
	fontWeight: "400",
	fontSize: "25px", 
	marginBottom: "0px",
	marginLeft: "24px",
	marginRight: "24px",
	lineHeight: "35px",
	fontSmoothing: "antialiased!important"
}

export default class HeroText extends Component {
	render() {
		return(
			<HeroDiv className="hero text">
				<h1 style={header}>Praxis is built<br />for engineers like you.</h1>
				<h3 style={subHeader}>With free next day delivery, 5-axis printing,<br/> and the simplest upload page ever we make prototyping easier in NYC.</h3>
			</HeroDiv>
		)
	}
}