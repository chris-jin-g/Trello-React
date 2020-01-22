import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleFlag } from '../../../actions/user.action';


class BoardsTitle extends Component {
	constructor(props) {
		super(props);

		this.changeIcon = this.changeIcon.bind(this);

		this.state = {
			changeFlag: true,
			compareKey: this.props.compareKey
		}

	}

	changeIcon() {
		this.setState({
			changeFlag: !this.state.changeFlag
		});

		const data = {
			compareKey: this.state.compareKey,
			flag: !this.state.changeFlag
		}

		this.props.toggleFlag(data);
	}

	render() {
		return (
			<div className="boards-title">
				<MDBIcon className="board-title-icon" icon={this.props.icon} color="grey" />
				<h3>{this.props.title}</h3>
				
				{
					(this.state.changeFlag) ?
						<button onClick={this.changeIcon} className="plus-minus-btn">
							<MDBIcon className="board-title-right-icon" icon="window-minimize" color="grey" />
						</button>
					:
						<button onClick={this.changeIcon} className="plus-minus-btn">
							<MDBIcon className="board-title-plus-icon" icon="plus" color="grey" />
						</button>
				}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleFlag
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(BoardsTitle);