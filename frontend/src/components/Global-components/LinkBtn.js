import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';

// Import css for it
import './GloCss.css';

const LinkBtn = ({ fab, to, icon, value, bold, fontsize, color, bkColor, onClick}) => {
	
	const IconStyle = {
		fontSize: `${fontsize}`+"px",
		width: 32+"px",
		textAlign: 'center',
		
		
	}

	const NavLink = {
		backgroundColor: `${bkColor}`,
		marginBottom: 4+"px",
		color: `${color}`,
		display: "block"
	}
	return (
		<Link onClick={onClick} to={to} style={NavLink} className="Mdblink">
			{
				fab?<MDBIcon fab icon={icon} style={IconStyle} />:
					<MDBIcon icon={icon} style={IconStyle} />
			}
			{
				bold?<span style={{fontWeight: "bold", fontSize: `${fontsize}`+"px"}}>{value}</span>:
					 <span style={{fontSize: `${fontsize}`+"px"}}>{value}</span>
			}
			
		</Link>
	)
}

export default LinkBtn;