import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MDBContainer, MDBRow, MDMCol } from 'mdbreact';


// Import area components
import Navbar from './Navbar/navbar';
import BoardBody from './Board-body/BoardBody';


export default class boards extends Component {
	render() {
		return (
			<Router>
				<Navbar />
				<BoardBody />
			</Router>
		);
	}
}