import React, { Component } from 'react';
import { MDBIcon, MDBLink } from 'mdbreact';

// Import component for it
import Globtn from '../board/Globtn';


export default class Card extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);

		this.state = {
			title: ''
		}
	}

	componentWillMount() {
		this.setState({
			title: this.props.title
		});
	}

	onChange(e) {
		this.setState({
			title: e.target.value
		});
	}

	render() {
		return (
			<div style={{height: 36+"px"}}>
				<input
				className="header-title-input"
				type="text"
				value={this.state.title}
				onChange={this.onChange}
				/>
				<Globtn
				type="ellipsis-h"
				iconsize="16px"
				borderRadius="3"
				bkcolor="transparent"
				color="#6b778c"
				size="32"/>
			</div>
		);
	}
} 