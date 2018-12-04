import React, { Component } from 'react';
import styled from "styled-components";

const hero_font_1 = "Eina01-Bold, system-ui, -apple-system, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif";

const LeadWrapperDiv = styled.div`
  margin: auto, 
  display: inline-block;
 `

export default class LeadCaptureButton extends Component {
	render() {
		return (
			<LeadWrapperDiv className="lead capture wrapper" style={{textAlign: "center", marginBottom: "200px"}}>
      <div style={{marginTop: "60px", marginBottom: "100px"}}>
        <a href="https://samkramer.typeform.com/to/eVilad" style={{color: "white", fontWeight: "500", fontSize: "26px", fontFamily: hero_font_1}}>
          REQUEST AN<br/>INVITATION KEY
        </a>
      </div>
     </LeadWrapperDiv>
		)
	}
}