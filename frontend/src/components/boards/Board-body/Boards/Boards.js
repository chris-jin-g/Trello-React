import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';
import { MDBBtn, MDBModal, MDBModalFooter, MDBNavLink } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Import css and components for it
import './Boards.css';
import BoardArea from '../../../Global-components/boardArea';
import CreateArea from '../../../Global-components/CreateArea';
import ModalContent from '../ModalContent/ModalContent';


class Boards extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);

		global.i = 0;
		this.state = {
			modal: false,
			boards: {},
			starred: false,
			starredBoard: {}
		}
	}

	componentWillMount() {
		const boards = this.props.user.user.boards;
		const newState = this.props.starredBoard;
		boards.map((value, i) => {
			if (value.boardid == newState.boardid) {
				value.starred = newState.starStatus;
			}
		});

		let starredBoard = [];
		boards.map((value, i) => {
			if (value.starred) {
				starredBoard.push(value);
			}
		});
		
		this.setState({
			boards: boards,
			id: this.props.user.user.id,
			starredBoard: starredBoard
		});
	}

	componentWillReceiveProps(newProps) {
		const starredBoard = this.state.starredBoard;
		const boards = this.state.boards;
		
		if (newProps.starredBoard.starStatus == true) {
			boards.map(data => {
				if (data.boardid == newProps.starredBoard.boardid) {
					data.starred = newProps.starredBoard.starStatus;
					starredBoard.push(data);
				}
			});
			this.setState({
				starredBoard: starredBoard
			});
		} else {
			boards.map(data => {
				if (data.boardid == newProps.starredBoard.boardid) {
					data.starred = newProps.starredBoard.starStatus;
				}
			});
			this.setState({
				starredBoard: starredBoard.filter(el => el.boardid !== newProps.starredBoard.boardid )
			});
			 
		}
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		const { starredBoard, boards } = this.state;
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
										return <BoardArea starred={value.starred} title={value.title} clicked={value.starred} boardid={value.boardid} bk='/static/media/board.ddecc2ed.jpg' />
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
										boards.map((value, i) => {
											if (!value.starred) {
												return <BoardArea starred={value.starred} title={value.title} clicked={value.starred} boardid={value.boardid} bk='/static/media/board.ddecc2ed.jpg' />
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
									return <BoardArea starred={value.starred} title={value.title} clicked={value.starred} boardid={value.boardid} bk='/static/media/board.ddecc2ed.jpg' />
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
							<BoardArea title="First board" bk='/static/media/board.ddecc2ed.jpg' />
							<CreateArea onClick={this.toggle} title="Create new board"  />
						</div>
					</div>
				</div>

				{/*Modal*/}
				<MDBModal className="modal-opacity" isOpen={this.state.modal} toggle={this.toggle}>
				    <ModalContent toggle={this.toggle} />
				    <MDBModalFooter className="board-modal-footer">
				    	<MDBBtn className="create-btn" color="light">
				    		<span>Create Board</span>
				    	</MDBBtn>
				    	<MDBNavLink to="/board/Templates" className="start-with-a-template">
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
  starredBoard: state.starred
});



export default connect(mapStateToProps)(Boards);