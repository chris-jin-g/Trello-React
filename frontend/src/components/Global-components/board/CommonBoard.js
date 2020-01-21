import React, { Component } from 'react';
import { MDBLink, MDBIcon } from 'mdbreact';


// Import imgs and components for this
import Img from '../../../trello-images/board.jpg'


export default class CommonBoard extends Component {
	constructor(props) {
		super(props);


	}

	render() {
		return (
			<div className="link-panel">
				<MDBLink className="link-board" style={{backgroundImage: `url(${Img})`}}>
				</MDBLink>
				<div className="board-img" style={{backgroundImage: `url(${Img})`}}></div>
				<span>My plan</span>
				<MDBIcon className="board-icon" icon="star" />
			</div>
		);
	}
}