import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';


// Import Components for it

import LeftBody from './LeftBody';
import RightBody from './RightBody';

export default class BoardBody extends Component {
	render() {
		return (
			<MDBContainer className="BoardBody">
				<LeftBody />
				<RightBody />
			</MDBContainer>
		);
	}
}