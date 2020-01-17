import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';

import './GloCss.css'

const Globtn = ({ toggle, bkcolor, color, type, iconsize, size, fab, value, borderRadius}) => {
	const styles = {
		backgroundColor: `${bkcolor}`,
		color: `${color}`,
		borderRadius: `${borderRadius}`+"px",
		border: 0,
		height: `${size}`+"px",
		marginRight: 4+"px",
	}
	return (
		<button onClick={toggle} style={styles}>
			{
				fab? <MDBIcon fab icon={type} style={{fontSize: `${iconsize}`}} />:
					 <MDBIcon icon={type} style={{fontSize: `${iconsize}`}} />
			}
			{value? <span style={{marginLeft: 9+"px"}}>{value}</span>: ""}
		</button>
	);
}

export default Globtn;