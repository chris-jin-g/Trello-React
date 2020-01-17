import React, { Component, useState } from 'react';
import { MDBIcon } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeStarred } from '../../actions/user.action';
import bj from '../../trello-images/board.jpg';

// Import css for it
import './GloCss.css';

class BoardArea extends Component {
	constructor(props) {
		super();

		this.changeStar = this.changeStar.bind(this);

		this.state = {
			clicked: false,
			color: '',
			right: '',
			hover: true,
			boardid: '',
			starred: false,
			bk: ''
		}
	}


	componentDidMount() {
		if (this.props.clicked == true) {
			this.setState({
				clicked: this.props.clicked,
				color: 'yellow',
				right: '0px',
				hover: false,
				boardid: this.props.boardid,
				starred: true,
				bk: this.props.bk
			});
		} else {
			this.setState({
				boardid: this.props.boardid,
				bk: this.props.bk
			});
		}
		
	}

	componentWillReceiveProps(newProps) {
		if (newProps.starred == true) {
			
			this.setState({
				clicked: newProps.starred,
				color: 'yellow',
				right: '0px',
				hover: false,
				boardid: newProps.boardid,
				starred: true,
				bk: newProps.bk
			});
		} else {
			this.setState({
				clicked: newProps.starred,
				color: '',
				right: '',
				hover: true,
				starred: false,
				boardid: newProps.boardid,
				bk: newProps.bk
			});
		}
		
	}

	changeStar() {
		if (this.state.clicked) {
			this.setState({
				color: "",
				right: '',
				hover: true,
				clicked: !this.state.clicked,
				starred: !this.state.starred
			});

			const data = {
				boardid: this.state.boardid,
				starred: !this.state.starred
			}

			this.props.changeStarred(data);
		} else {
			this.setState({
				color: 'yellow',
				right: '0px',
				hover: false,
				clicked: !this.state.clicked,
				starred: !this.state.starred
			});
			const data = {
				boardid: this.state.boardid,
				starred: !this.state.starred
			}

			this.props.changeStarred(data);

		}
		
	}
	render() {
		return (
			<div className="hover lg-board md-board sm-board">
				{ 	(this.state.hover == true)?
					<a className="board-title icon-hover" style={{backgroundImage: `url(${this.state.bk})`}}>
						<div className="board-tile-details is-badged">
							<span>{this.props.title}</span>
							<MDBIcon onClick={this.changeStar} style={{color: `${this.state.color}`, right: `${this.state.right}`}} className="icon-star" icon="star" />
						</div>
					</a>:
					<a className="board-title" style={{backgroundImage: `url(${this.state.bk})`}}>
						<div className="board-tile-details is-badged">
							<span>{this.props.title}</span>
							<MDBIcon onClick={this.changeStar} style={{color: `${this.state.color}`, right: `${this.state.right}`}} className="icon-star" icon="star" />
						</div>
					</a>
				}
			</div>
		);
	}
		
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeStarred
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(BoardArea);