import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';


// Import components for it
import CommonBoard from './CommonBoard';

class UserBoardContent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			boardnum: {}
		}
	}

	componentWillMount() {
		let count = [];
		for (let i = 1; i <= this.props.user.user.boards.length; i++) {
			count.push(i);
		} 

		this.setState({
			boardnum: count
		});
	}

	render() {
		
		return (
				<>
					{
						this.state.boardnum.map(value => {
			      		return <Route path={"/b/"+value} component={CommonBoard} />
			      	})
					}
				</>
			);
	}
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(UserBoardContent);