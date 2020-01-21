import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';


export default class BoardsTitle extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="boards-title">
				<MDBIcon className="board-title-icon" icon={this.props.icon} color="grey" />
				<h3>{this.props.title}</h3>
				<button className="plus-minus-btn">
					<MDBIcon className="board-title-icon" icon="window-minimize" color="grey" />
				</button>
			</div>
		);
	}
}