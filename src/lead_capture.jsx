import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";
import { fadeIn } from 'react-animations'

const hero_font_1 = "Eina01-Bold, system-ui, -apple-system, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif";

const MyButton = styled.button`
  font-size: 1.2em;
  marginRight: 1em;
  padding: 0.0em .8em;
  border: 2px solid white;
  border-radius: 5px;
  background: #2D7BC8;
  color: white;
  height: 50px;
  width: 320px;
  outline: none;
  fontFamily: hero_font_1;
  
  &:hover {
  background: #F58181;
  border: 2px solid #2D7BC8;
  border-radius: 3px;
  cursor: pointer;
}`;  


const fadeAnimation = keyframes`${fadeIn}`;

const LeadWrapperDiv = styled.div`
  margin: auto, 
  display: inline-block;
  animation: 2s ${fadeAnimation};
 `

export default class LeadCaptureButton extends Component {
	render() {
		return (
			<LeadWrapperDiv className="lead capture wrapper" style={{textAlign: "center", marginBottom: "80px"}}>
        <MyButton 
        style={{marginBottom: "60px"}}
        >
        <a href="https://samkramer.typeform.com/to/eVilad" style={{color: "white", fontWeight: "500"}}>
        REQUEST AN INVITATION KEY
        </a>
        </MyButton>
     </LeadWrapperDiv>
		)
	}
}