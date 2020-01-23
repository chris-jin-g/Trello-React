import React, { Component } from 'react';
import { MDBLink, MDBIcon } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeStarred, recentedUpdate,
    saveCompareId } from '../../../actions/user.action';


// Import imgs and components for this
import '../Modals/Modals.css';


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
			starred: false,
			hover: true,
			right: '',
			recented: false
		}

	}

	componentWillMount() {
		if (this.props.clicked) {
			this.setState({
				clicked: this.props.clicked,
				color: 'yellow',
				right: '10px',
				boardid: this.props.boardid,
				hover: false,
				bk: this.props.bk,
				starred: this.props.starred,
				url: parseInt(this.props.boardid)+1,
				recented: this.props.recented
			});
		} else {
			this.setState({
				clicked: this.props.clicked,
				color: '',
				boardid: this.props.boardid,
				bk: this.props.bk,
				starred: this.props.starred,
				url: parseInt(this.props.boardid)+1,
				recented: this.props.recented
			});
		}
		
	}

	componentWillReceiveProps(newProps) {
		if (newProps.clicked) {
			this.setState({
				clicked: this.props.clicked,
				color: 'yellow',
				right: '10px',
				hover: false,
				boardid: this.props.boardid,
				bk: this.props.bk,
				starred: newProps.starred,
				recented: this.props.recented
			});
		} else {
			this.setState({
				clicked: this.props.clicked,
				color: '',
				right: '',
				hover: true,
				boardid: this.props.boardid,
				bk: this.props.bk,
				starred: newProps.starred,
				recented: this.props.recented
			});
		}
		
	}

	changeStar() {
		if (this.state.starred) {
			this.setState({
				color: "",
				right: '',
				hover: true,
				clicked: !this.state.clicked,
				starred: !this.state.starred,
				recented: !this.state.recented
			});
			const data = {
				boardid: this.state.boardid,
				starred: !this.state.starred
			}
			this.props.changeStarred(data);
		} else {
			this.setState({
				color: 'yellow',
				right: '10px',
				hover: false,
				clicked: !this.state.clicked,
				starred: !this.state.starred,
				recented: !this.state.recented
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
		}
		return (
			<div className="link-panel">
				{
					(regex.test(this.state.bk)) ?
						(this.state.hover == true)?
							<>
								<MDBLink to={'/b/'+this.state.url} onClick={this.toMainBoard} className="link-board" style={{backgroundImage: `url(${this.state.bk})`}}>
								</MDBLink>
								<div className="board-img" style={{backgroundImage: `url(${this.state.bk})`}}></div>
								<span>{this.props.title}</span>
								<MDBIcon onClick={this.changeStar} className="board-icon move-icon" icon="star" style={iconStyle} />
							</>
						:
							<>
								<MDBLink to={'/b/'+this.state.url} onClick={this.toMainBoard} className="link-board" style={{backgroundImage: `url(${this.state.bk})`}}>
								</MDBLink>
								<div className="board-img" style={{backgroundImage: `url(${this.state.bk})`}}></div>
								<span>{this.props.title}</span>
								<MDBIcon onClick={this.changeStar} className="board-icon" icon="star" style={iconStyle} />
							</>
					:
						(this.state.hover == true)?
							<>
								<MDBLink to={'/b/'+this.state.url} onClick={this.toMainBoard} className="link-board" style={{backgroundColor: `${this.state.bk}`}}>
								</MDBLink>
								<div className="board-img" style={{backgroundColor: `${this.state.bk}`}}></div>
								<span>{this.props.title}</span>
								<MDBIcon onClick={this.changeStar} className="board-icon move-icon" icon="star" style={iconStyle} />
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