import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';


// Import css for it
import '../GloCss.css';

export default class AddList extends Component {
	render() {
		return (
			<div onClick={this.props.onClick}  className="list-body">
				<MDBIcon className="plus-icon" icon="plus"  />
				<span>Add a List</span>
			</div>
		);
	}
}