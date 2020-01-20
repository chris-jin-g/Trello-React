import React, { Component } from 'react';
// import { connect } from 'react-redux';


// Import components for it
import Navbar from '../boards/Navbar/Navbar';
import FunctionBar from './FunctionBar';

import bkImg from '../../trello-images/board.jpg'

// Import components and css for it
import './Common.css';
import AddList from '../Global-components/AddList';
import AddListContent from '../Global-components/AddListContent';
import ListBoard from '../Global-components/ListBoard';


class CommonBoard extends Component {
	constructor(props) {
		super(props);

		this.showListContent = this.showListContent.bind(this);
		
		this.state = {
			showList: false
		}
	}

	showListContent() {
		this.setState({
			showList: !this.state.showList,
		});
	}

	render() {
		console.log(this.state.showList)
		return (
			<div className="CommonBoard" style={{backgroundImage: `url(${bkImg})`}}>
				<Navbar bk="rgba(0,0,0,.32)" />
				<FunctionBar />
				<div style={{padding: "0 4px"}}>
					<ListBoard />
					{
						(!this.state.showList) ?
							<AddList onClick={this.showListContent} />
						:
							<AddListContent />
					}
				</div>
					
			</div>
		);
	}
}

/*const mapStateToProps = state => ({
  user: state.user
});*/

export default CommonBoard;