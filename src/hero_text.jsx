import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";
import { fadeInUp } from 'react-animations'

const hero_font_1 = "Eina01-Bold, system-ui, -apple-system, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif";
const hero_font_2 = "system-ui, -apple-system, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif"

const header = {
	textAlign: 'center', 
	color: "white",
	fontFamily: hero_font_1, 
	fontWeight: "700",
	fontSize: "60px",
	lineHeight: "1.0",
	marginBottom: "-5px",
	fontSmoothing: "antialiased",
}

const subHeader = {
	textAlign: 'center', 
	color: "white",
	fontFamily: hero_font_2, 
	fontWeight: "600",
	fontSize: "25px", 
	marginBottom: "80px",
	lineHeight: "35px",
	fontSmoothing: "antialiased!important"
}

const fadeAnimation = keyframes`${fadeInUp}`;

const HeroDiv = styled.div`
  margin: auto, 
  display: inline-block;
  animation: .6s ${fadeAnimation};
 `

export default class HeroText extends Component {
	render() {
		return(
			<HeroDiv className="hero texts">
				<h1 style={header}>Praxis is built<br />for engineers like you.</h1>
				<h3 style={subHeader}>With free next day delivery, 5-axis printing,<br />and the simplest upload page ever -<br />we make prototyping easier in NYC.</h3>
			</HeroDiv>
		)
	}
}