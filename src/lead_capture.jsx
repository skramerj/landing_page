import React, { Component } from 'react';
import styled from "styled-components";

const hero_font_1 = "Eina01-Bold, system-ui, -apple-system, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif";

const MyButton = styled.button`
  font-size: 1em;
  font-weight: 600;
  marginRight: 1em;
  padding: 0.0em 1em;
  border: 2px solid white;
  border-radius: 3px;
  background: #2D7BC8;
  color: White;
  height: 100px;
  width: 240px;
  outline: none;
  fontFamily: hero_font_1;
  
  &:hover {
  color: #2D7BC8
  background: white;
  border: 2px solid #2D7BC8;
  border-radius: 6px;
  cursor: pointer;
  transition: .2s ease;
}`;  


export default class LeadCaptureButton extends Component {
	render() {
		return (
			<div className="lead capture wrapper" style={{textAlign: "center", marginBottom: "200px", margin: "auto", display: "inlineBlock"}}>
        <a href="https://samkramer.typeform.com/to/eVilad">
          <MyButton style={{marginTop: "60px", marginBottom: "100px", cursor: "pointer", }}>
            <p style={{fontFamily: hero_font_1}}>REQUEST YOUR INVITATION KEY</p>
          </MyButton>
        </a>
     </div>
		)
	}
}