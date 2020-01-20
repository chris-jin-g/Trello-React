import React, { Component } from 'react';
import {  MDBNavbar, MDBNavItem, MDBNavLink, MDBIcon, MDBNavbarNav, MDBCollapse, MDBBtn } from 'mdbreact';


// Import components and css for it
import './Common.css';
import Globtn from '../Global-components/Globtn';

export default class FunctionBar extends Component {
	render() {
		return (
			<>
				<MDBNavbar style={{boxShadow: "none"}}>
					<MDBNavbarNav left style={{display: "contents"}}>
						<Globtn value="Y" bkcolor="transparent" color="black" fab={false} size="32" iconsize="16px" borderRadius="3" />
						<Globtn bkcolor="rgba(0,0,0,.32)" color="#42526e" fab={false} type="star" size="32" iconsize="16px" borderRadius="3" />
						<sapn className="Globtn-divider"></sapn>
						<Globtn value="Personal" bkcolor="rgba(0,0,0,.32)" color="#42526e" fab={false} size="32" iconsize="16px" borderRadius="3" />
						<sapn className="Globtn-divider"></sapn>
						<Globtn value="Private" bkcolor="rgba(0,0,0,.32)" color="#42526e" fab={false} type="lock" size="32" iconsize="16px" borderRadius="3" spanLeft="9px" />
						<sapn className="Globtn-divider" style={{marginRight: 8+"px"}}></sapn>
						<Globtn value="Y" bkcolor="#dfe1e6" color="black" fab={false} size="32" iconsize="16px" borderRadius="50" />
						<Globtn value="Invite" bkcolor="rgba(0,0,0,.32)" color="#42526e" fab={false} size="32" iconsize="16px" borderRadius="3" />
					</MDBNavbarNav>
					<MDBNavbarNav right style={{display: "block"}}>
						<Globtn value="Butler" bkcolor="rgba(0,0,0,.32)" color="#42526e" fab={false} type="bell" size="32" iconsize="16px" borderRadius="3" spanLeft="9px" />
						<Globtn value="Show Menu" bkcolor="rgba(0,0,0,.32)" color="#42526e" fab={false} type="ellipsis-h" size="32" iconsize="16px" borderRadius="3" spanLeft="9px" />
					</MDBNavbarNav>
				</MDBNavbar>
			</>
		);
	}
}