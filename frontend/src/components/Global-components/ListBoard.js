import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { MDBLink, MDBIcon } from 'mdbreact';


// Import css and components for it
import './GloCss.css';
import Globtn from './Globtn';
import AddList from './AddList';


class ListBoard extends Component {
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
			<div className="add-list-content">
				<div>
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

				{/*add-list-titles*/}
				<MDBLink className="link-title" >
					<span>
						sfsfsf{/*title*/}
					</span>
					<MDBIcon
						className="pen-icon"
						icon="pen"
					/>
				</MDBLink>
				<div>
					<div className="add-list-part">
						<MDBIcon className="plus-icon" style={{margin: '0 4px'}} icon="plus"  />
						<span>Add a List</span>
					</div>
					<MDBIcon fab icon="trello" className="trello-icon" />
				</div>
			</div>
		);
	}
}



export default ListBoard;