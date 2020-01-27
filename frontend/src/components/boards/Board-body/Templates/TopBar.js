import React, { Component } from 'react';
import { MDBLink, MDBIcon } from 'mdbreact';
import { Redirect } from 'react-router-dom';


// Import components and css for this
import './templates.css';

class TopBar extends Component {
	constructor(props) {
		super(props);

		this.setRedirect = this.setRedirect.bind(this);
		this.renderRedirect = this.renderRedirect.bind(this);

		this.state = {
			redirect: false
		}

	}

	setRedirect() {
		this.setState({
			redirect: true
		});
	}

	renderRedirect() {
	    if (this.state.redirect) {
	      return <Redirect to='/board/templates' />
	    }
	}

	render() {
		return (
			<div className="top-bar">
				<ul className="title-ul">
					<li>
						{this.renderRedirect()}
						<MDBLink onClick={this.setRedirect} className="after-li">Template Gallery</MDBLink>
					</li>
					<li>
						<MDBLink style={{marginLeft: 8+"px"}}>{this.props.type}</MDBLink>
					</li>
				</ul>
				<div className="template-search-bar">
					<MDBLink className="feed-underline">Feedback</MDBLink>
					<div className="template-search">
						<input
							type="text"
							className="search-input"
							placeholder="Find Template"
						/>
						<MDBIcon className="template-search-icon" icon="search" />
					</div>
				</div>
			</div>
		);
	}
}

export default TopBar;