import React, { Component } from 'react';
import { MDBIcon, MDBBtn } from 'mdbreact';
import 	{ addList, closeList } from '../../actions/user.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Import css for it
import './GloCss.css';

class AddList extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.addList = this.addList.bind(this);
		this.Close = this.Close.bind(this);

		this.state = {
			title: '',
			showStatus: true
		}
	}

	addList() {
		const data = {
			title: this.state.title,
			showStatus: !this.state.showStatus
		}

		if (data.title !== '') {
			this.props.addList(data);
		} else {
			alert("input title!")
			this.Close();
		}
	}

	Close() {
		this.setState({
			showStatus: !this.state.showStatus
		});

		this.props.closeList(false);

	}

	onChange(e) {
		this.setState({
			title: e.target.value
		});
	}

	render() {
		return (
			<div className="add-list-content">
				<input
				className="title-input"
				value={this.state.title}
				onChange={this.onChange}
				placeholder="Enter list title..."
				autoFocus />
				<div className="add-list-footer">
					<MDBBtn onClick={this.addList} className="add-list-btn" color="success">Add List</MDBBtn>
					<MDBIcon onClick={this.Close} className="list-times-icon" icon="times" />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addList,
    closeList
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddList);