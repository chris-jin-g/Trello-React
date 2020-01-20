import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// Import components for it
import Boards from './Boards/Boards';


export default class RightBody extends Component {
	render() {
		return (
			<>
				<Route exact path="/board" component={Boards} />
				<Route exact path="/board/Templates" component={Boards} />
			</>
		);
	}
}
