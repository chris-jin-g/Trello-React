import React, { Component } from 'react';
import {  MDBNavbar, MDBNavItem, MDBNavLink, MDBIcon, MDBNavbarNav, MDBCollapse, MDBBtn } from 'mdbreact';


// Import components and css for it
import './Common.css';
import Globtn from '../Global-components/board/Globtn';

export default class FunctionBar extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.changeStar = this.changeStar.bind(this);

		this.state ={
			title: '',
			starred: false
		}
	}

	componentWillMount() {
		this.setState({
			title: this.props.title,
			starred: this.props.starred
		});
	}

	onChange(e) {
		this.setState({
			title: e.target.value
		});
	}

	changeStar() {
		this.setState({
			starred: !this.state.starred
		});
	}

	render() {
		return (
			<>
				<MDBNavbar style={{boxShadow: "none"}}>
					<MDBNavbarNav left style={{display: "contents"}}>
						
						<input
						className="board-title-input"
						type="text"
						value={this.state.title}
						onChange={this.onChange}
						 />
						
						{	(!this.state.starred) ?
								<Globtn toggle={this.changeStar} bkcolor="rgba(0,0,0,.32)" color="#42526e" fab={false} type="star" size="32" iconsize="16px" borderRadius="3" />
							:
								<Globtn toggle={this.changeStar} bkcolor="rgba(0,0,0,.16)" color="#f2d600" fab={false} type="star" size="32" iconsize="16px" borderRadius="3" />
						}
						
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