import React, { Component } from 'react';
import { MDBIcon, MDBLink } from 'mdbreact';


// Import css for this
import './templates.css';

class TemplateCommonTitleBar extends Component {
	render() {
		return (
			<div className="title-bar">
				<div>
					<div className="common-title-img" style={{backgroundImage: `url(${this.props.data.avatar})`, borderRadius: `${this.props.data.radius}`}}></div>
					<div className="common-title">
						<h1>
							{this.props.data.title}
						</h1>
						<span>
							Created&nbsp;{this.props.data.auth}
						</span>
						<div>
							<MDBIcon icon="user-tie" className="common-tie-icon" />
							Works best with
							&nbsp;
							<MDBLink className="common-title-link">
								Business Class
							</MDBLink>
						</div>
					</div>
				</div>
				<MDBLink className="view-template-btn">
					View Template
				</MDBLink>
			</div>
		);
	}
}

export default TemplateCommonTitleBar;