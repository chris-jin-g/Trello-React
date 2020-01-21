import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';


export default class Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{height: 36+"px"}}>
				<div onClick={this.props.onClick} className="add-list-part">
					<MDBIcon className="plus-icon" style={{margin: '0 4px'}} icon="plus"  />
					<span>{this.props.title}</span>
				</div>
				<MDBIcon fab icon="trello" className="trello-icon" />
			</div>
		);
	}
} 