import React, { Component } from 'react';
import {  MDBNavbar, MDBNavItem, MDBNavLink, MDBIcon, MDBNavbarNav, MDBCollapse, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';


// Import components for it
import Globtn from '../../Global-components/board/Globtn';
import BoardsModal from '../../Global-components/Modals/user.boards.modal';

// Import imgs and css for it
import './Navbar.css';
import trelloImg from '../../../trello-images/logo.svg';



class Navbar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.returnBoard = this.returnBoard.bind(this);
		this.searchBarFlag = this.searchBarFlag.bind(this);
		this.onChange = this.onChange.bind(this);


		this.state = {
			leftDashFlag: false,
			searchFlag: false,
			searchValue: ''
		}
	}

	componentWillReceiveProps(newProps) {

		if (this.state.searchFlag !== false) {
			this.setState({
				searchFlag: newProps.windowFlag.windowFlag,
				searchValue: ''
			});
		}
	}

	searchBarFlag() {
		if (!this.state.searchFlag) {
			this.setState({
				searchFlag: !this.state.searchFlag
			});
		}
		
	}

	onChange(e) {
		this.setState({
			searchValue: e.target.value
		});
	}

	toggle() {
		this.setState({
			leftDashFlag: !this.state.leftDashFlag
		});
	}

	returnBoard() {
		window.location = '/board';
	}

	render() {
		return (
			<>
				<MDBNavbar className="navbar" style={{backgroundColor: this.props.bk}}>
					<MDBNavbarNav left style={{display: "contents"}}>
						<Globtn toggle={this.returnBoard} bkcolor="hsla(0,0%,100%,.3)" color="#fff" fab={false} type="home" size="32" iconsize="16px" borderRadius="3"  />
						<Globtn toggle={this.toggle} value="Boards" bkcolor="hsla(0,0%,100%,.3)" color="#fff" fab={true} type="trello" size="32" iconsize="16px" borderRadius="3" spanLeft="9px" />
						
						<div className="card-search" style={{zIndex: 10}}>
							{
								(!this.state.searchFlag) ?
									<>
										<input
										onClick={this.searchBarFlag}
										onChange={this.onChange}
										value={this.state.searchValue}
										id="card-search"
										type="text"
										className="card-search"
										/>
										<MDBIcon id="search-icon" className="search-icon" icon="search" />
										<MDBIcon onClick={this.searchBarFlag} id="times-icon" className="hidden times-icon" icon="times" />
										<MDBIcon id="arrow-up" className="hidden arrow-up" icon="long-arrow-alt-up" />
									</>
								:
									<>
										<input onClick={this.searchBarFlag} id="card-search" type="text" className="card-search change" />
										<MDBIcon id="search-icon" className="hidden search-icon" icon="search" />
										<MDBIcon onClick={this.searchBarFlag} id="times-icon" className="times-icon" icon="times" />
										<MDBIcon id="arrow-up" className="arrow-up" icon="long-arrow-alt-up" />
									</>
							}	

							
						</div>
					</MDBNavbarNav>
					<img onClick={this.returnBoard} className="board-logo" src={trelloImg} height="30px" />
					<MDBNavbarNav right style={{display: "block"}}>
						<Globtn bkcolor="hsla(0,0%,100%,.3)" color="#fff" fab={false} type="plus" size="32" iconsize="16px" borderRadius="3"/>
						<Globtn bkcolor="hsla(0,0%,100%,.3)" color="#fff" fab={false} type="info-circle" size="32" iconsize="16px" borderRadius="3" />
						<Globtn bkcolor="hsla(0,0%,100%,.3)" color="#fff" fab={false} type="bell" size="32" iconsize="16px" borderRadius="3" />
						<Globtn bkcolor="#dfe1e6" color="#172b4d" fab={true} type="yahoo" size="32" iconsize="15px" borderRadius="20" />
					</MDBNavbarNav>
				</MDBNavbar>
				{
					(this.state.leftDashFlag) ?
						<BoardsModal toggle={this.toggle} />
					:
					<div className="hidden"></div>
				}
			</>
		);
	}
}

const mapStateToProps = state => ({
  windowFlag: state.windowFlag
});

export default connect(mapStateToProps)(Navbar);