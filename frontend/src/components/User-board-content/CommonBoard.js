import React, { Component } from 'react';
import { connect } from 'react-redux';


// Import components for it
import Navbar from '../boards/Navbar/Navbar';
import FunctionBar from './FunctionBar';

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
			boardid:'',
			areaCardNum: 0
		}
	}


	componentWillMount() {

		// match board and board area
		const boards = this.props.user.user.boards;
		const boardArea = this.props.user.boardCollection.boards;
		const compareKey = this.props.compareId.compareId;

		console.log("CommomBoard")

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
					boardContent: boardarea,
					areaCardNum: boardarea.length
				});
			}
		});

		// save theme
		this.setState({
			theme: this.props.theme.themeData
		});

		// document.addEventListener("click", () => {
		// 	if (this.state.showFlag == false) {
		// 		return false;
		// 	} else {
		// 		this.setState({
		// 			showFlag: !this.state.showFlag
		// 		})
		// 	}
		// });
	}

	componentWillReceiveProps(newProps) {
		console.log("newProps") 
		console.log(newProps.addlist.showFlag)

		newProps.user.boardCollection.boards.map((boardarea, key) => {
			if (key == this.state.boardid) {
				this.setState({
					boardContent: boardarea,
					areaCardNum: boardarea.length
				});
			}
		});

		if (newProps.addlist.showFlag == false) {
			return false;
		} else {
			this.setState({
			showFlag: !newProps.addlist.showFlag
		});
		}
		
	}

	showListContent() {
		this.setState({
			showFlag: !this.state.showFlag
		});
	}

	render() {
		const { boardContent, boardTitle, theme } = this.state;
		console.log("render")
		console.log(boardTitle)
		console.log(boardContent)
		console.log(this.state.showFlag)
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
											<div className="main-board">
												<ListBoard content={boardContent} boardid={this.state.boardid} />
												{
													(!this.state.showFlag) ?
														(this.state.areaCardNum == 0) ?
															<AddList title="Add a list" onClick={this.showListContent} />
														:
															<AddList title="Add another list" onClick={this.showListContent} />
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
											<div className="main-board">
												<ListBoard content={boardContent} boardid={this.state.boardid} />
												{
													(!this.state.showFlag) ?
														(this.state.areaCardNum == 0) ?
															<AddList title="Add a list" onClick={this.showListContent} />
														:
															<AddList title="Add another list" onClick={this.showListContent} />
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