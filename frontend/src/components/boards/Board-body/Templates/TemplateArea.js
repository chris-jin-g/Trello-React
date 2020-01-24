import React, { Component } from 'react';


// Import components and css for this
import './templates.css';
import TopBar from './TopBar';
import HeaderBar from './HeaderBar';
import TemplateMainBody from './TemplateMainBody';


class TemplateArea extends Component {
	render() {
		return (
			<div className="template-board">
				<TopBar />
				<HeaderBar />
				<TemplateMainBody />
			</div>
		);
	}
}

export default TemplateArea;