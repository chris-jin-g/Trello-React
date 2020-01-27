import React, { Component } from 'react';


// Import components and css for this
import './templates.css';
import TemplateCard from './TemplateCard';


class TemplateMainBody extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: {},
			type: ''
		}
	}

	componentWillMount() {
		this.setState({
			content: this.props.content,
			type: this.props.type
		});
	}

	render() {
		const { content } = this.state;
		console.log("content")
		console.log(content)
		return (
			<div className="template-Main-body">
				{
					content.map(data => {
						return <TemplateCard type={this.state.type} data={data} />	
					})
				}
			</div>
		);
	}
}

export default TemplateMainBody;