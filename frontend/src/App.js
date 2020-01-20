import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


// Import Components
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login';
import SignUp from './components/Signup/SignUp';
import SignUpEmail from './components/Signup/SignUpEmail';
import userBoard from './components/boards/userBoard';
import UserBoardContent from './components/User-board-content';

// Import Css for it
import './App.css';

import setAuthToken from './utils/setAuthToken';
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from './actions/user.action';
import store from './store';



// Check for token to keep user logged in
// if (localStorage.trelloToken) {
// 	  // Set auth token header auth
// 	  const token = localStorage.trelloToken;
// 	  setAuthToken(token);
// 	  // Decode token and get user info and exp
// 	  const decoded = jwt_decode(token);
// 	  // Set user and isAuthenticated
// 	  setCurrentUser(decoded);
	  
// 	  // Check for expired token
// 	  const currentTime = Date.now() / 1000; // to get in milliseconds
// 	  if (decoded.exp < currentTime) {
// 		    // Logout user
// 		    logoutUser();

// 		    // Redirect to login
// 		    window.location.href = "/";
// 		} else {
// 			window.location.href = '/board';
// 		} 
// }




class App extends Component {
	constructor(props) {
		super(props);

	}

	render() {
	  return (
		    <Router>
		      <Route exact path="/" component={Homepage} />
		      <Route path="/login" component={Login} />
		      <Route path="/signup" component={SignUp} />
		      <Route path="/signupemail:email" component={SignUpEmail} />
		      <Route path="/board" component={userBoard} />
		      <Route path="/b" component={UserBoardContent} />
		    </Router>
	  );
	 }
}

export default App;
