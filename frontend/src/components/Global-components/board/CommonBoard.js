import React, { Component } from 'react';
import { MDBLink, MDBIcon } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeStarred, recentedUpdate,
    saveCompareId } from '../../../actions/user.action';


// Import imgs and components for this


class CommonBoard extends Component {
	constructor(props) {
		super(props);

		this.changeStar = this.changeStar.bind(this);
		this.toMainBoard = this.toMainBoard.bind(this);

		this.state = {
			color: '',
			boardid: '',
			bk: '',
			url: '',
			starred: false
		}

	}

	componentWillMount() {
		if (this.props.starred) {
			this.setState({
				color: 'yellow',
				boardid: this.props.boardid,
				bk: this.props.bk,
				starred: this.props.starred,
				url: parseInt(this.props.boardid)+1
			});
		} else {
			this.setState({
				color: 'grey',
				boardid: this.props.boardid,
				bk: this.props.bk,
				starred: this.props.starred,
				url: parseInt(this.props.boardid)+1
			});
		}
		
	}

	componentWillReceiveProps(newProps) {
		if (newProps.starred) {
			this.setState({
				color: 'yellow',
				boardid: this.props.boardid,
				bk: this.props.bk
			});
		} else {
			this.setState({
				color: 'grey',
				boardid: this.props.boardid,
				bk: this.props.bk
			});
		}
		
	}

	changeStar() {
		if (this.state.starred) {
			this.setState({
				color: "grey",
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
		}
		return (
			<div className="link-panel">
				{
					(regex.test(this.state.bk)) ?
						<>
							<MDBLink to={'/b/'+this.state.url} onClick={this.toMainBoard} className="link-board" style={{backgroundImage: `url(${this.state.bk})`}}>
							</MDBLink>
							<div className="board-img" style={{backgroundImage: `url(${this.state.bk})`}}></div>
							<span>{this.props.title}</span>
							<MDBIcon onClick={this.changeStar} className="board-icon" icon="star" style={iconStyle} />
						</>
					:
						<>
							<MDBLink to={'/b/'+this.state.url} onClick={this.toMainBoard} className="link-board" style={{backgroundColor: `${this.state.bk}`}}>
							</MDBLink>
							<div className="board-img" style={{backgroundColor: `${this.state.bk}`}}></div>
							<span>{this.props.title}</span>
							<MDBIcon onClick={this.changeStar} className="board-icon" icon="star" style={iconStyle} />
						</>
				}
					
			</div>
		);
	}
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeStarred,
    recentedUpdate,
    saveCompareId
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommonBoard);