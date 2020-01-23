import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';
import { toggleFlag } from '../../../actions/user.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Import css for this
import '../../boards/Board-body/ModalContent/Modal.css';

class CheckBtn extends Component {
	constructor(props) {
		super(props);

		this.checkTheme = this.checkTheme.bind(this);

		this.state = {
			bk: '',
			clicked: false,
			checkKey: '',
			bkId: ''
		}
	}

	componentWillMount() {
		this.setState({
			bk: this.props.bk,
			clicked: this.props.clicked,
			checkKey: this.props.checkKey,
			bkId: this.props.bkId
		});
	}

	componentWillReceiveProps(newProps) {
		if (this.state.checkKey == newProps.compareKey) {
			this.setState({
				clicked: true
			});
		} else {
			this.setState({
				clicked: false
			});
		}
	}

	checkTheme() {
		const data = {
			compareKey: this.state.checkKey,
			bk: this.state.bk,
			bkId: this.state.bkId
		}

		this.props.toggleFlag(data);
	}

	render() {

		const regex = /^http/;
		return (
			<>
				{
					(regex.test(this.state.bk)) ?
						<li className="background-grid-item">
							<button onClick={this.checkTheme} className="theme-btn" style={{background: `url(${this.props.bk})`}}>
								{
									(this.state.clicked) ?
										<>
											<MDBIcon className="check-icon" icon="check" />
										</>
									:
										<div className="hidden"></div>
								}
							</button>
						</li>
					:
						<li className="background-grid-item">
							<button onClick={this.checkTheme} className="theme-btn" style={{background: `${this.props.bk}`}}>
								{
									(this.state.clicked) ?
										<>
											<MDBIcon className="check-icon" icon="check" />
										</>
									:
										<div className="hidden"></div>
								}
							</button>
						</li>
				}
					
			</>
		);
	}
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleFlag
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(CheckBtn);
