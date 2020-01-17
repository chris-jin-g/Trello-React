import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row } from 'react-bootstrap';

// Import Area Components
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Collaborate from './Collaborate/Collaborate';
import Teams from './Teams/Teams';
import Slide from './Slide/Slide';
import Feature from './Feature/Feature';
import BottomGradient from './Bottom-gradient/Bottom-gradient';

// Import Css for it
import './Homepage.css';


// import setAuthToken from '../../utils/setAuthToken';
// import jwt_decode from "jwt-decode";
// import { setCurrentUser, logoutUser } from '../../actions/user.action';
// import store from '../../store';



// // Check for token to keep user logged in
// if (localStorage.trelloToken) {
// 	  // Set auth token header auth
// 	  const token = localStorage.trelloToken;
// 	  setAuthToken(token);
// 	  // Decode token and get user info and exp
// 	  const decoded = jwt_decode(token);
// 	  // Set user and isAuthenticated
// 	  setCurrentUser(decoded);
// 	  window.location.href = '/board';
// 	  // Check for expired token
// 	  const currentTime = Date.now() / 1000; // to get in milliseconds
// 	  if (decoded.exp < currentTime) {
// 	    // Logout user
// 	    store.dispatch(logoutUser());

// 	    // Redirect to login
// 	    window.location.href = "/";
// 	}
// }





export default class Homepage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			shadow: '',
			backgroundColor: ''
		}

	}

	componentDidMount() {
		document.addEventListener('scroll', () => {
			let scrollY = window.scrollY;
			if (scrollY > 80 ) {
				this.setState({
					shadow: '0 0 10px rgba(0,0,0,0.3)',
					backgroundColor: '#0079bf'
				});
			} else {
				this.setState({
					shadow: 'none',
					backgroundColor: 'rgba(0,121,191,0)'
				});
			}
		});
	}

	render() {
		return (
			<Row style={{'marginRight': 0, 'marginLeft': 0}}>
				<Navbar opacity={this.state.opacity} backgroundColor={this.state.backgroundColor} />
				<Header />
				<Collaborate />
				<Teams />
				<Slide />
				<Feature />
				<BottomGradient />
			</Row>
		);
	}
}