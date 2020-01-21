import React, { Component } from 'react';
import {  MDBNavbar, MDBNavItem, MDBNavLink, MDBIcon, MDBNavbarNav, MDBCollapse, MDBBtn } from 'mdbreact';

// Import components for it
import Globtn from '../../Global-components/board/Globtn';
import BoardsModal from '../../Global-components/Modals/user.boards.modal';

// Import imgs and css for it
import './Navbar.css';
import trelloImg from '../../../trello-images/logo.svg';



export default class Navbar extends Component {
	constructor(props) {
		super(props);

		this.cardSearch = this.cardSearch.bind(this);	
		this.onClose = this.CloseSearch.bind(this);
		this.toggle = this.toggle.bind(this);
		this.returnBoard = this.returnBoard.bind(this);

		this.state = {
			modal: false
		}
	}

	componentWillMount() {
		document.addEventListener("click", () => {
			const regex = /change/;
			const searchId = document.getElementById('card-search');
			if (regex.test(searchId.getAttribute('class'))) {
				searchId.classList.remove('change');
				document.getElementById('search-icon').classList.remove('hidden');
				document.getElementById('times-icon').classList.add('hidden');
				document.getElementById('arrow-up').classList.add('hidden');
			}
		});
	}

	cardSearch() {
		document.getElementById('card-search').classList.add("change");
		document.getElementById('search-icon').classList.add('hidden');
		document.getElementById('times-icon').classList.remove('hidden');
		document.getElementById('arrow-up').classList.remove('hidden');
	}

	CloseSearch() {
		document.getElementById('card-search').classList.remove('change');
		document.getElementById('search-icon').classList.remove('hidden');
		document.getElementById('times-icon').classList.add('hidden');
		document.getElementById('arrow-up').classList.add('hidden');
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
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
							<input onClick={this.cardSearch} id="card-search" type="text" className="card-search" />
							<MDBIcon id="search-icon" className="search-icon" icon="search" />
							<MDBIcon onClick={this.CloseSearch} id="times-icon" className="hidden times-icon" icon="times" />
							<MDBIcon id="arrow-up" className="hidden arrow-up" icon="long-arrow-alt-up" />
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
					(this.state.modal) ?
						<BoardsModal toggle={this.toggle} />
					:
					<div className="hidden"></div>
				}
			</>
		);
	}
}