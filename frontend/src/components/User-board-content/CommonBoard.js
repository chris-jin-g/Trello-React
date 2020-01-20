import React, { Component } from 'react';
import { connect } from 'react-redux';


// Import components for it
import Navbar from '../boards/Navbar/Navbar';
import FunctionBar from './FunctionBar';

import bkImg from '../../trello-images/board.jpg'

// Import components and css for it
import './Common.css';
import AddList from '../Global-components/user-board-content/AddList';
import AddListContent from '../Global-components/user-board-content/AddListContent';
import ListBoard from '../Global-components/user-board-content/ListBoard';


class CommonBoard extends Component {
	constructor(props) {
		super(props);

		this.showListContent = this.showListContent.bind(this);
		
		this.state = {
			userid: '',
			boardContent: {},
			boardTitle: {},
			theme: {},
			showFlag: false,
			boardid:''
		}
	}

	componentWillMount() {


		// match board and board area
		const boards = this.props.user.user.boards;
		const boardArea = this.props.user.boardCollection.boards;
		const compareKey = this.props.compareId.compareId;

		boards.map((board, key) => {
			if (board.boardid == compareKey) {
				this.setState({
					boardTitle: board,
					boardid: board.boardid
				});
			}
		});

		boardArea.map((boardarea, key) => {
			if (key == compareKey) {
				this.setState({
					boardContent: boardarea
				});
			}
		});

		// save theme
		this.setState({
			theme: this.props.theme.themeData
		});
	}

	componentWillReceiveProps(newProps) {
		console.log("newProps")
		console.log(newProps.user)

		newProps.user.boardCollection.boards.map((boardarea, key) => {
			if (key == this.state.boardid) {
				this.setState({
					boardContent: boardarea
				});
			}
		});

		this.setState({
			showFlag: newProps.addlist.showFlag
		});
	}

	showListContent() {
		this.setState({
			showFlag: !this.state.showFlag
		});
	}

	render() {
		const { boardContent, boardTitle, theme } = this.state;
		const regex = /bk/;
		return (
			<>	{
					(regex.test(boardTitle.themeTitle)) ?
							theme[1].map(data => {
								if (boardTitle.themeTitle.substring(2) == data.no) {
									return (
										<div className="CommonBoard" style={{backgroundImage: `url(${data.url})`}}>
											<Navbar bk="rgba(0,0,0,.32)" />
											<FunctionBar title={boardTitle.title} starred={boardTitle.starred} />
											<div style={{padding: "0 4px"}}>
												<ListBoard content={boardContent} />
												{
													(!this.state.showFlag) ?
														<AddList onClick={this.showListContent} />
													:
														<AddListContent showFlag={this.state.showFlag} boardid={this.state.boardid} />
												}
											</div>
										</div>
									)
								}
							})
					:
							
							theme[0].map(data => {
								if (boardTitle.themeTitle.substring(2) == data.no) {
									return (
										<div className="CommonBoard" style={{backgroundColor: `${data.color}`}}>
											<Navbar bk="rgba(0,0,0,.32)" />
											<FunctionBar title={boardTitle.title} starred={boardTitle.starred} />
											<div style={{padding: "0 4px"}}>
												<ListBoard content={boardContent} />
												{
													(!this.state.showFlag) ?
														<AddList onClick={this.showListContent} />
													:
														<AddListContent showFlag={this.state.showFlag} boardid={this.state.boardid} />
												}
											</div>
										</div>
									)
								}
							})
				}
			</>
		);
	}
}

const mapStateToProps = state => ({
  user: state.user,
  compareId: state.compareBoardId,
  theme: state.theme,
  addlist: state.addlist
});

export default connect(mapStateToProps)(CommonBoard);