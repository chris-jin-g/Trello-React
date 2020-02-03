import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalFooter, MDBNavLink, MDBIcon } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createNewBoard, saveNewCreatedId } from '../../../../actions/user.action';


// Import css and components for it
import './Boards.css';
import '../ModalContent/Modal.css';
import BoardArea from '../../../Global-components/board/boardArea';
import CreateArea from '../../../Global-components/board/CreateArea';
import CheckBtn from '../../../Global-components/board/checkBtn';


class Boards extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.onChange = this.onChange.bind(this);
		this.createBoard = this.createBoard.bind(this);

		global.i = 0;
		this.state = {
			modal: false,
			boards: {},
			starred: false,
			starredBoard: {},
			newBoardTitle: '',
			visible: false,
			theme: {},
			recentedBoard: {},
			compareKey: '',
			createBk: '',
			createBkId: ''
		}
	}

	componentWillMount() {
		const boards = this.props.user.user.boards;
		const newState = this.props.starredStatus;

		// Insert recented boards from boards
		let recentedBoard = [];
		let compareKey = 0;
		let flag = false;
		boards.map(value => {

			if (value.recented > compareKey) {
				recentedBoard.push(value);
				compareKey = value.recented;
			} else {
				let flag = false;
				recentedBoard.map((data, key) => {
					if (data.recented > value.recented && flag == false) {
						recentedBoard.splice(key, 0, value);
						flag = true;
					}
				});
			}
			
		});
		
		// Updata starred of boards
		boards.map((value, i) => {
			if (value.boardid == newState.boardid) {
				value.starred = newState.starStatus;
			}
		});

		// Insert starred boards from boards
		let starredBoard = [];
		boards.map((value, i) => {
			if (value.starred) {
				starredBoard.push(value);
			}
		});
		
		this.setState({
			boards: boards,
			id: this.props.user.user.id,
			starredBoard: starredBoard,
			theme: this.props.theme.themeData,
			recentedBoard: recentedBoard
		});
	}

	componentWillReceiveProps(newProps) {
		console.log("newProps")
		console.log(newProps.toggleFlag.bk)

		const starredBoard = this.state.starredBoard;
		const boards = this.state.boards;
		const newBoards = newProps.user.user.boards;
		
		// Update starredBoard
		if (newProps.starredStatus.starStatus == true) {
			boards.map(data => {
				if (data.boardid == newProps.starredStatus.boardid) {
					data.starred = newProps.starredStatus.starStatus;
					starredBoard.push(data);
				}
			});
			this.setState({
				starredBoard: starredBoard
			});
		} else {
			boards.map(data => {
				if (data.boardid == newProps.starredStatus.boardid) {
					data.starred = newProps.starredStatus.starStatus;
				}
			});
			this.setState({
				starredBoard: starredBoard.filter(el => el.boardid !== newProps.starredStatus.boardid )
			});
			 
		}

		// Update recentedBoard
		let recentedBoard = [];
		let compareKey = 0;
		let flag = false;
		newBoards.map(value => {
			if (value.recented > compareKey) {
				recentedBoard.push(value);
				compareKey = value.recented;
			} else {
				let flag = false;
				recentedBoard.map((data, key) => {
					if (data.recented > value.recented && flag == false) {
						recentedBoard.splice(key, 0, value);
						flag = true;
					}
				});
			}
			
		});

		this.setState({
			recentedBoard: recentedBoard,
			compareKey: newProps.toggleFlag.compareKey,
			createBk: newProps.toggleFlag.bk,
			createBkId: newProps.toggleFlag.bkId
		});

	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	onChange(e) {
		this.setState({
			newBoardTitle: e.target.value
		})
		if (e.target.value !== '') {
			this.setState({
				visible: true
			})
		} else {
			this.setState({
				visible: false
			});
		}
	}

	createBoard() {
		const data = {
			title: this.state.newBoardTitle,
			bk: this.state.createBk,
			createBkId: this.state.createBkId
		}
		
		// Save newCreateBoard id
		this.props.saveNewCreatedId(this.state.boards.length);

		// Create newBoard
		this.props.createNewBoard(data);

		// Go to newCreatedBoard
		this.props.history.push('/b/'+this.state.boards.length);
	}

	render() {
		const { starredBoard, boards, theme, recentedBoard } = this.state;
		const regex = /bk/;
		const createRegex = /^http/;
		console.log(createRegex.test(this.state.createBk))
		return (
			<>
				{/*Board*/}
				<div className="Boards md-screen sm-screen">
					
					{
						(starredBoard.length !== 0) ?
						<div className="star-board board-area">
							<div className="board-title-style">
								<MDBIcon className="icon-style" icon="star" color="grey" />
								<h3>Starred Boards</h3>
							</div>
							<div style={{display: "flex", flexWrap: "wrap"}}>
								{
									starredBoard.map((value, i) => {
										if (regex.test(value.themeTitle)) {
											return theme[1].map(data => {
												if (value.themeTitle.substring(2) == data.no) {
													return <BoardArea starred={value.starred} title={value.title} clicked={value.starred} boardid={value.boardid} bk={data.url} />
												}
											})
										} else {
											return theme[0].map(data => {
												if (value.themeTitle.substring(2) == data.no) {
													return <BoardArea starred={value.starred} title={value.title} clicked={value.starred} boardid={value.boardid} bk={data.color} />
												}
											})
										}
									})
								}
							</div>
						</div>
						:
						<div className="hidden"></div>
					}
					
					{	(boards.length !== starredBoard.length) ?
						<div className="recent-board board-area">
							<div className="board-title-style">
								<MDBIcon className="icon-style" icon="clock" color="grey" />
								<h3>Recently Viewed</h3>
							</div>
							<div style={{display: "flex", flexWrap: "wrap"}}>
									{
										recentedBoard.map((value, i) => {
											if (!value.starred) {
												if (regex.test(value.themeTitle)) {
													return theme[1].map(data => {
														if (value.themeTitle.substring(2) == data.no) {
															return <BoardArea starred={value.starred} title={value.title} clicked={value.starred} boardid={value.boardid} bk={data.url} />
														}
													})
												} else {
													return theme[0].map(data => {
														if (value.themeTitle.substring(2) == data.no) {
															return <BoardArea starred={value.starred} title={value.title} clicked={value.starred} boardid={value.boardid} bk={data.color} />
														}
													})
												}
											}
										})
									}
							</div>
						</div>:
						<div className="hidden"></div>
					}
					<div className="personal-board board-area">
						<div className="board-title-style">
							<MDBIcon className="icon-style" icon="user" color="grey" />
							<h3>Personal Boards</h3>
						</div>
						<div style={{display: "flex", flexWrap: "wrap"}}>
							{
								boards.map((value, i) => {
									if(regex.test(value.themeTitle)) {
										return theme[1].map(data => {
											if (value.themeTitle.substring(2) == data.no) {
												return <BoardArea starred={value.starred} title={value.title} clicked={value.starred} boardid={value.boardid} bk={data.url} />
											}
										})
									} else {
										return theme[0].map(data => {
											if (value.themeTitle.substring(2) == data.no) {
												return <BoardArea starred={value.starred} title={value.title} clicked={value.starred} boardid={value.boardid} bk={data.color} />
											}
										})
									}
								})
							}
							<CreateArea onClick={this.toggle} title="Create new board"  />
						</div>
					</div>
					<div className="team-board board-area">
						<div className="board-title-style">
							<MDBIcon className="icon-style" icon="user-friends" color="grey" />
							<h3>Teams</h3>
						</div>
						<div style={{display: "flex", flexWrap: "wrap"}}>
							<BoardArea title="First board" bk='https://images.unsplash.com/photo-1573513499072-30ade1d4ed09?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9' />
							<CreateArea onClick={this.toggle} title="Create new board"  />
						</div>
					</div>
				</div>

				{/*Modal*/}
				<MDBModal className="modal-opacity" isOpen={this.state.modal} toggle={this.toggle}>
				    <div className="create-board-modal-header">
						
						{/*board title*/}
						{
							(createRegex.test(this.state.createBk)) ?
								<div className="create-board-title" style={{background: `url(${this.state.createBk})`}}>
								
									<button onClick={this.toggle} className="close-btn">
										<MDBIcon icon="times" />
									</button>
									
									<input
									value={this.state.newBoardTitle}
									onChange={this.onChange}
									type="text"
									placeholder="Add board title"
									/>
									
									<div>
										<button className="select-btn">
											<span>No team</span>
											<MDBIcon className="icon-sm" icon="angle-down" />
										</button>
										<button className="select-btn">
											<MDBIcon className="icon-sm" icon="lock" />
											<span>Private</span>
											<MDBIcon className="icon-sm" icon="angle-down" />
										</button>
									</div>
								</div>
							:
								<div className="create-board-title" style={{background: `${this.state.createBk}`}}>
								
									<button onClick={this.toggle} className="close-btn">
										<MDBIcon icon="times" />
									</button>
									
									<input
									value={this.state.newBoardTitle}
									onChange={this.onChange}
									type="text"
									placeholder="Add board title"
									/>
									
									<div>
										<button className="select-btn">
											<span>No team</span>
											<MDBIcon className="icon-sm" icon="angle-down" />
										</button>
										<button className="select-btn">
											<MDBIcon className="icon-sm" icon="lock" />
											<span>Private</span>
											<MDBIcon className="icon-sm" icon="angle-down" />
										</button>
									</div>
								</div>
						}
						
						{/*Background themes*/}
						<ul className="theme-area">
							{
								theme[1].slice(0, 1).map((theme, i) => {
									return <CheckBtn checkKey={i + 1} bkId={i} compareKey={this.state.compareKey} clicked={true} bk={theme.url} />
								})
							}

							{
								theme[1].slice(4, 7).map((theme, i) => {
									return <CheckBtn checkKey={i + 2} bkId={i + 4} compareKey={this.state.compareKey} bk={theme.url} />
								})
							}
							{
								theme[0].slice(0, 4).map((theme, i) => {
									return <CheckBtn checkKey={i + 5} bkId={i} compareKey={this.state.compareKey} bk={theme.color} />
								})
							}
							
							{/*More themes*/}
							<li className="background-grid-item">
								<button className="theme-btn" style={{background: 'white'}}>
									<MDBIcon className="more-icon" icon="ellipsis-h" />
								</button>
							</li>
						</ul>
					</div>
				    <MDBModalFooter className="board-modal-footer">
					    {
					    	this.state.visible?
					    	<button onClick={this.createBoard} className="create-btn" color="light">
					    		<span>Create Board</span>
					    	</button>
					    	:
					    	<button className="create-btn-nocursor" color="light">
					    		<span>Create Board</span>
					    	</button>
					    }
					    	
				    	<MDBNavLink onClick={this.toggle} to="/board/Templates" className="start-with-a-template">
				    		<MDBIcon className="md-icon" fab icon="trello" />
				    		<span>Start-with-a-Template</span>
				    	</MDBNavLink>
				    </MDBModalFooter>
			    </MDBModal>
			</>
		);
	}
}

const mapStateToProps = state => ({
  user: state.user,
  starredStatus: state.starred,
  theme: state.theme,
  toggleFlag: state.toggleFlag
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createNewBoard,
    saveNewCreatedId
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);