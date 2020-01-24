import React, { Component } from 'react';
import { MDBIcon, MDBBtn, MDBModal, MDBModalFooter, MDBNavLink } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createNewBoard, saveNewCreatedId, toggleFlag } from '../../../actions/user.action';



// Import css and components for it
import '../../boards/Board-body/ModalContent/Modal.css';
import CheckBtn from '../board/checkBtn';



class CreateBoardModal extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.createBoard = this.createBoard.bind(this);
		this.toggle = this.toggle.bind(this);

		this.state = {
			modal: false,
			createBk: '',
			newBoardTitle: '',
			compareKey: '',
			theme: {},
			visible: false,
			createBkId: '',
			boardLen: ''
		}
	}

	componentWillMount() {
		this.setState({
			theme: this.props.theme.themeData,
			boardLen: this.props.boardLen
		});
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			modal: newProps.isOpen,
			compareKey: newProps.toggleflag.compareKey,
			createBk: newProps.toggleflag.bk,
			createBkId: newProps.toggleflag.bkId
		});
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});

		const data = {
			flag: !this.state.modal
		}

		this.props.toggleFlag(data)
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
		console.log("len")
		console.log(this.state.boardLen)
		
		// Save newCreateBoard id
		this.props.saveNewCreatedId(this.state.boardLen);

		// Create newBoard
		this.props.createNewBoard(data);

		// Go to newCreatedBoard
		this.props.history.push('/b/' + this.state.boardLen);
		
	}

	render() {
		const { theme } = this.state;
		const createRegex = /^http/;
		return (
			<MDBModal className="modal-opacity" isOpen={this.state.modal} toggle={this.toggle}>
			    <div className="create-board-modal-header" style={{zIndex: 30}}>
					
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
		);
	}
}


const mapStateToProps = state => ({
  theme: state.theme,
  toggleflag: state.toggleFlag
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createNewBoard,
    saveNewCreatedId,
    toggleFlag
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardModal);
