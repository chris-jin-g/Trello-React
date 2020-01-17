import React, { Component } from "react";
import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

// Import Css for it
import './Navbar.css';
import logo from './logo.svg'

export default class Navbar extends Component {
	constructor(props) {
		super(props);

	}


	render() {
		return (
			<Col lg={12} md={12} sm={12} className="Navbar" style={{background: this.props.backgroundColor, boxShadow: this.props.shadow}}>
				<a className="logo">
					<img src={logo} width={130} height={40} />
				</a>
				<div className="sign-area">
					<Link to="/login" className="LogIn">Log In</Link>
					<Link to="/signUp" className="SignUp">Sign Up</Link>
				</div>
			</Col>
		);
	}
}