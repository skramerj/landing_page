import React, { Component } from 'react';
import styled from "styled-components";

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
  
  &:hover {
  cursor: pointer;
}`;  


const LeadWrapperDiv = styled.div`
  margin: auto, 
  display: inline-block;
 `

export default class LeadCaptureButton extends Component {
	render() {
		return (
			<LeadWrapperDiv className="lead capture wrapper" style={{textAlign: "center", marginBottom: "130px"}}>
        <MyButton 
        style={{marginBottom: "30px", marginTop: "40px", width: "200px", height: "65px"}}
        >
        <a href="https://samkramer.typeform.com/to/eVilad" style={{color: "white", fontWeight: "500", fontSize: "16px"}}>
        REQUEST AN INVITATION KEY
        </a>
        </MyButton>
     </LeadWrapperDiv>
		)
	}
}