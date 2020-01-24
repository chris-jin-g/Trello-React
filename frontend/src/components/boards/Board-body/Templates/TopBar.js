import React, { Component } from 'react';
import { MDBLink, MDBIcon } from 'mdbreact';


// Import components and css for this
import './templates.css';

class TopBar extends Component {
	render() {
		return (
			<div className="top-bar">
				<ul className="title-ul">
					<li>
						<MDBLink className="after-li">Template Gallery</MDBLink>
					</li>
					<li>
						<MDBLink style={{marginLeft: 8+"px"}}>Business</MDBLink>
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