import React, { Component } from 'react';
import { MDBIcon, MDBBtn } from 'mdbreact';
import 	{ addList, closeList } from '../../../actions/user.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Import css for it
import '../GloCss.css';

class AddList extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.addList = this.addList.bind(this);
		this.Close = this.Close.bind(this);
		this.onEnter = this.onEnter.bind(this);

		this.state = {
			title: '',
			showStatus: false,
			boardid: ''
		}
	}

	componentWillMount() {
		console.log("WillReceive")
		console.log(this.props.boardid)
		this.setState({
			showStatus: this.props.showFlag,
			boardid: this.props.boardid
		});
	}

	addList() {
		const data = {
			title: this.state.title,
			showStatus: !this.state.showStatus,
			boardid: this.state.boardid
		}

		if (data.title !== '') {
				this.props.addList(data);

				this.setState({
					title: ''
				});

			} else {
				return false;
			}
			
	}

	onEnter(e) {
		const data = {
			title: this.state.title,
			showStatus: !this.state.showStatus,
			boardid: this.state.boardid
		}

		if (e.key == 'Enter') {
			if (data.title !== '') {
				this.props.addList(data);
				this.setState({
					title: ''
				})
				return false;
			} else {
				return false;
			}
		}
	}

	Close() {
		this.setState({
			showStatus: !this.state.showStatus,
			title: ''
		});

		this.props.closeList(true);

	}

	onChange(e) {
		this.setState({
			title: e.target.value
		});
	}

	render() {
		return (
			<div onKeyPress={this.onEnter} className="add-list-content">
				
				<input
				className="title-input"
				value={this.state.title}
				onChange={this.onChange}
				placeholder="Enter list title..."
				autoFocus />

				<div className="add-list-footer">
					<MDBBtn onClick={this.addList} className="add-list-btn" color="light-green">Add List</MDBBtn>
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