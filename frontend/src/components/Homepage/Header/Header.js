import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

// Import Css for it
import "./Header.css";
import trello from './trello.svg';

export default class Header extends Component {
	render() {
		return (
			<div className="Header">
				<Container className="header-content">
					<Row style={{'align-items': 'center'}}>
						<Col lg={5} md={12} sm={12} className="sm-align">
							<h1>
								Trello lets you work more collaboratively and get more done.
							</h1><br />
							<p className="lead">
								Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.
							</p>
						</Col>
						<Col lg={{ span: 6, offset: 1 }}  md={12} sm={12} className="order">
							<img className="img-fluid" src={trello} width={582} />
						</Col>
						<form className="Header-form md-screen sm-screen sm-margin">
							<input className="Email-input hide-input sm-input" type="text" placeholder="Email" />
							<button className="Sign-btn">Sign Up - It's Free!</button>
						</form>
					</Row>
				</Container>
			</div>
		);
	}
}