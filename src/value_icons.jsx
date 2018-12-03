import React, { Component } from 'react';
import styled from "styled-components";

import QualityControl from './quality_control.svg';
import ConsistentTolerances from "./consistent_tolerances.svg";
import LargerBuildVolume from "./larger_build.svg";
import NextDayDelivery from "./next_day_delivery.svg";

const hero_font_1 = "Eina01-Bold, system-ui, -apple-system, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif";

const icon_div = {
	textAlign: "center",
	display: "inline-block", 
	width: "14%",
	verticalAlign: "middle",
	margin: "0 3%"
}

const icon_label = {
	fontFamily: hero_font_1, 
	color: "white",
	textAlign: 'center',
	fontWeight: "400",
}

const WrapperDiv = styled.div`
  margin: auto, 
  display: inline-block;
 `

export default class ValueIcons extends Component {
	render() {
		return (
			<div style={{marginTop: "55px"}}>
				<WrapperDiv className="value icons wrapper" style={{textAlign: "center", whiteSpace: "nowrap"}}>
					<div style={icon_div}>
						<img src={QualityControl} alt="quality control icon"/>
						<h4 style={icon_label}>QUALITY<br/>CONTROL</h4>
					</div>
					<div style={icon_div}>
						<img src={ConsistentTolerances} alt="consistent tolerances icon"/>
						<h4 style={icon_label}>CONSISTENT<br/>TOLERANCES</h4>
					</div>
					<div style={icon_div}>
						<img src={LargerBuildVolume} alt="larger build volume icon"/>
						<h4 style={icon_label}>BIGGER<br/>VOLUME</h4>
					</div>
					<div style={icon_div}>
						<img src={NextDayDelivery} alt="next day delivery icon"/>
						<h4 style={icon_label}>NEXT DAY<br/>DELIVERY</h4>
					</div>
				</WrapperDiv>
			</div>
		)
	}
}
