import React, { Component } from 'react';


// Import css for this
import './templates.css';


class HeaderBar extends Component {
	render() {
		return (
			<div className="template-header">
				<div className="title-img"></div>
				<h1>
					Business Templates
				</h1>
			</div>
		);
	}
}

export default HeaderBar;