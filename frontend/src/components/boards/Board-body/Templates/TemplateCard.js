import React, { Component } from 'react';
import { MDBLink } from 'mdbreact';


// Import css for this
import './templates.css';


class TemplateCard extends Component {
	render() {
		return (
			<div className="template-card" title="OKRs">
				<MDBLink to="/board/templates/OKRs" className="link-card">
					<div className="link-card-img"></div>
					<div className="opacity-div"></div>
					<div className="link-card-title">
						<div>
							<div className="link-card-avatar"></div>	
						</div>
						<h2>OKRs</h2>
						<span>
							by Kevan Lee, VP of Marketing @ Buffer
						</span>
						<p>
							Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.
						</p>
					</div>
				</MDBLink>
			</div>
		);
	}
}

export default TemplateCard;