import React, { Component } from 'react';
import { MDBLink, MDBIcon } from 'mdbreact';
import { Redirect } from 'react-router-dom';


// Import components and css for this
import './templates.css';

class TopBar extends Component {
	constructor(props) {
		super(props);

		this.setTemplateRedirect = this.setTemplateRedirect.bind(this);
		this.setTypeRedirect = this.setTypeRedirect.bind(this);
		this.renderTemplateRedirect = this.renderTemplateRedirect.bind(this);
		this.renderTypeRedirect = this.renderTypeRedirect.bind(this);

		this.state = {
			templateRedirect: false,
			typeRedirect: false
		}

	}

	setTemplateRedirect() {
		this.setState({
			templateRedirect: true
		});
	}

	setTypeRedirect() {
		this.setState({
			typeRedirect: true
		});
	}

	renderTemplateRedirect() {
	    if (this.state.templateRedirect) {
	      return <Redirect to='/board/templates' />
	    }
	}

	renderTypeRedirect() {
		if (this.state.typeRedirect) {
			return <Redirect to={"/board/templates/"+this.props.type} />
		}
	}

	render() {
		return (
			<div className="top-bar" style={{paddingRight: 0}}>
				<ul className="title-ul">
					<li>
						{this.renderTemplateRedirect()}
						<MDBLink onClick={this.setTemplateRedirect} className="after-li">Template Gallery</MDBLink>
					</li>
					<li>
						{this.renderTypeRedirect()}
						<MDBLink onClick={this.setTypeRedirect} className="after-li" style={{marginLeft: 8+"px"}}>{this.props.type}</MDBLink>
					</li>
					<li>
						<MDBLink style={{marginLeft: 8+"px"}}>{this.props.title}</MDBLink>
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