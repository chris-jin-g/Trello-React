import React, { Component } from 'react';


// Import css for this
import './templates.css';


class HeaderBar extends Component {
	render() {
		return (
			<div className="template-header">
				<div className="title-img" style={{backgroundPosition: `${this.props.templateImgPosition}`}}></div>
				<h1>
					{this.props.type}&nbsp;Templates
				</h1>
			</div>
		);
	}
}

export default HeaderBar;