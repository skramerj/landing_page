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
      <div style={{marginTop: "60px", marginBottom: "100px"}}>
        <a href="https://samkramer.typeform.com/to/eVilad" style={{color: "white", fontWeight: "500", fontSize: "26px", fontFamily: hero_font_1}}>
          REQUEST AN<br/>INVITATION KEY
        </a>
      </div>
     </LeadWrapperDiv>
		)
	}
}