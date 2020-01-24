import React, { Component } from 'react';


// Import components and css for this
import './templates.css';
import TemplateCard from './TemplateCard';


class TemplateMainBody extends Component {
	render() {
		return (
			<div className="template-Main-body">
				<TemplateCard />
			</div>
		);
	}
}

export default TemplateMainBody;