import React, { Component } from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';
import { addCard } from '../../../actions/user.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Import components and css for it
import '../GloCss.css';
import AddCard from './AddCard';


class AddCardBody extends Component {
	constructor(props) {
		super(props);

		this.onChangeFlag = this.onChangeFlag.bind(this);	
		this.Close = this.Close.bind(this);
		this.onChange = this.onChange.bind(this);
		this.addCardArea = this.addCardArea.bind(this);
		this.onEnter = this.onEnter.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);

		this.state = {
			inputCardFlag: false,
			cardTitle: '',
			boardid: this.props.boardid,
			boardAreaId: this.props.boardAreaid,
			keyStatus: false
		}
	}

	// componentWillUpdate() {
	// 	document.addEventListener("click", () => {
	// 		if (this.state.inputCardFlag == false) {
	// 			this.setState({
	// 				inputCardFlag: false
	// 			})
	// 		} else {
	// 			this.setState({
	// 				inputCardFlag: !this.state.inputCardFlag
	// 			})
	// 		}
	// 	});
	// }

	onChangeFlag() {
		this.setState({
			inputCardFlag: !this.state.inputCardFlag
		});
	}

	onChange(e) {
		if (this.state.keyStatus) {
			this.setState({
					cardTitle: e.target.value
			});
		} else {
			return false;
		}
				
		
	}

	onKeyPress(e) {
		if (e.key == 'Enter') {
			if (this.state.cardTitle == '') {
				this.setState({
					keyStatus: false
				});
			}
		} else {
			this.setState({
				keyStatus: true
			});
		}
		
	}

	addCardArea() {
		const data = {
			title: this.state.cardTitle,
			boardid: this.state.boardid,
			boardAreaId: this.state.boardAreaId
		}

		if (data.title !== '') {
			this.props.addCard(data);	
		} else {
			return false;
		}

		this.setState({
			cardTitle: ''
		})
		
	}

	Close() {
		this.setState({
			inputCardFlag: !this.state.inputCardFlag,
			cardTitle: ''
		})
	}

	onEnter(e) {
		const data = {
			title: this.state.cardTitle,
			boardid: this.state.boardid,
			boardAreaId: this.state.boardAreaId
		}


		if (e.key == 'Enter') {
			if (data.title !== '') {
				this.props.addCard(data);	

				this.setState({
					cardTitle: ''
				})
			} else {
				return false;
			}
		}

		
	}

	render() {
		return (
			<>
				{ 
					(!this.state.inputCardFlag) ?
						<AddCard onClick={this.onChangeFlag} title={this.props.title} />
					:
						<div onKeyPress={this.onEnter}className="add-card-list-content">
				
							<textarea
							className="title-input"
							value={this.state.cardTitle}
							onKeyPress={this.onKeyPress}
							onChange={this.onChange}
							placeholder="Enter a title for this card..."
							autoFocus></textarea>

							<div className="add-list-footer">
								<MDBBtn onClick={this.addCardArea} className="add-list-btn" color="light-green">Add Card</MDBBtn>
								<MDBIcon onClick={this.Close} className="list-times-icon" icon="times" />
							</div>
						</div>
				}
				
			</>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addCard
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddCardBody);