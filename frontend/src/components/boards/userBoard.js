import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MDBContainer, MDBRow, MDMCol } from 'mdbreact';
import { connect } from 'react-redux';
import { getThemeRequest } from '../../actions/user.action';
import { bindActionCreators } from 'redux';


// Import area components
import Navbar from './Navbar/Navbar';
import BoardBody from './Board-body/BoardBody';


class userBoard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			boardnum: {}
		}
	}

	componentWillMount() {

		// Check loginStatus
		if (this.props.user.loginStatus  == false) {
			this.props.history.push('/');
		}

		// Get themes
		this.props.getThemeRequest();

	}

	render() {
		return (
			<>
				<Navbar bk="rgb(0, 121, 191)" />
				<BoardBody />
				
			</>
		);
	}
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getThemeRequest
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(userBoard);