import React, { Component, useState } from 'react';
import { MDBIcon, MDBLink } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeStarred, saveCompareId, recentedUpdate } from '../../../actions/user.action';

// Import css for it
import '../GloCss.css';

class BoardArea extends Component {
	constructor(props) {
		super();

		this.changeStar = this.changeStar.bind(this);
		this.toMainBoard = this.toMainBoard.bind(this);

		this.state = {
			clicked: false,
			color: '',
			right: '',
			hover: true,
			boardid: '',
			starred: false,
			bk: '',
			url: ''
		}


	}


	componentWillMount() {
		if (this.props.clicked == true) {
			this.setState({
				clicked: this.props.clicked,
				color: 'yellow',
				right: '14px',
				hover: false,
				boardid: this.props.boardid,
				starred: true,
				bk: this.props.bk,
				url: parseInt(this.props.boardid)+1
			});
		} else {
			this.setState({
				boardid: this.props.boardid,
				bk: this.props.bk,
				url: parseInt(this.props.boardid)+1
			});
		}
		
	}

	componentWillReceiveProps(newProps) {
		if (newProps.starred == true) {
			this.setState({
				clicked: newProps.starred,
				color: 'yellow',
				right: '14px',
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
				right: '14px',
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

	toMainBoard() {
		let urlId = this.state.url;
		const data = {
			boardid: this.state.boardid
		}
		// Update board recented
		this.props.recentedUpdate(data);

		// save boardid as CompareId
		this.props.saveCompareId(data);
	}

	render() {
		const regex = /^http/;
		const iconStyle = {
			color: `${this.state.color}`,
			right: `${this.state.right}`,
			zIndex: 9999,
			position: "absolute"
		}

		return (
			<div className="hover lg-board md-board sm-board">
				{ 	
					(regex.test(this.state.bk))?
						(this.state.hover == true)?
							<a className="board-title icon-hover" style={{backgroundImage: `url(${this.state.bk})`}}>
								<MDBLink to={'/b/'+this.state.url} onClick={this.toMainBoard} className="board-tile-details is-badged">
									<span>{this.props.title}</span>
									
								</MDBLink>
								<MDBIcon onClick={this.changeStar} style={iconStyle} className="icon-star" icon="star" />
							</a>:
							<a className="board-title" style={{backgroundImage: `url(${this.state.bk})`}}>
								<MDBLink to={'/b/'+this.state.url} onClick={this.toMainBoard} className="board-tile-details is-badged">
									<span>{this.props.title}</span>
									
								</MDBLink>
								<MDBIcon onClick={this.changeStar} style={iconStyle} className="icon-star" icon="star" />
							</a>
					:
						(this.state.hover == true)?
							<a className="board-title icon-hover" style={{backgroundColor: `${this.state.bk}`}}>
								<MDBLink to={'/b/'+this.state.url} onClick={this.toMainBoard} className="board-tile-details is-badged">
									<span>{this.props.title}</span>
									
								</MDBLink>
								<MDBIcon onClick={this.changeStar} style={iconStyle} className="icon-star" icon="star" />
							</a>:
							<a className="board-title" style={{backgroundColor: `${this.state.bk}`}}>
								<MDBLink to={'/b/'+this.state.url} onClick={this.toMainBoard} className="board-tile-details is-badged">
									<span>{this.props.title}</span>
									
								</MDBLink>
								<MDBIcon onClick={this.changeStar} style={iconStyle} className="icon-star" icon="star" />
							</a>
				}
			</div>
		);
	}
		
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeStarred,
    saveCompareId,
    recentedUpdate
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(BoardArea);