import React, { Component } from 'react';
import { MDBIcon, MDBLink } from 'mdbreact';


export default class Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MDBLink className="link-title" >
				<span>
					{this.props.title}
				</span>
				<MDBIcon
					className="pen-icon"
					icon="pen"
				/>
			</MDBLink>
		);
	}
} 