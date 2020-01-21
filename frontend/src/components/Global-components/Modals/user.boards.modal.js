import React, { Component } from 'react';
import { MDBIcon, MDBLink } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { loginRequest } from '../actions/user.action';


// Import css and components for it
import './Modals.css';
import BoardsTitle from '../board/boardsTitle';
import CommonBoard from '../board/CommonBoard';


class BoardsModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			boards: {},
			theme: {}
		}

	}

	componentWillMount() {
		
		const boards = this.props.user.user.boards;
		const theme = this.props.theme.themeData;
		console.log(boards)
		console.log(theme)
	}

	render() {
		return (
			<div className="boards-modal">
				<input className="search-boards" type="text" placeholder="Find boards by name…" />

				{/*Starred boards*/}
					<BoardsTitle title="starred boards" icon="star" />
					<div className="each-area">
						<CommonBoard />
						<CommonBoard />
						<CommonBoard />
						<CommonBoard />
					</div>
				{/*Recented boards*/}
					<BoardsTitle title="recent boards" icon="clock" />
					<div className="each-area">
						<CommonBoard />
						<CommonBoard />
					</div>
				{/*Personal boards*/}
					<BoardsTitle title="Personal boards" icon="user" />
					<div className="each-area">
						<CommonBoard />
						<CommonBoard />
					</div>
				{/*Other functionality*/}
					<MDBLink className="other-link">
						<span>
							Create new board…
						</span>
					</MDBLink>
					<MDBLink className="other-link">
						<span>
							Always keep this menu open.
						</span>
					</MDBLink>
					<MDBLink className="other-link">
						<span>
							See closed boards…
						</span>
					</MDBLink>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  user: state.user,
  theme: state.theme,
});

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     loginRequest
//   }, dispatch);
// }

export default connect(mapStateToProps)(BoardsModal);
