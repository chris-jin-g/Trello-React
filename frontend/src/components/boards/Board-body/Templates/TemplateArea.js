import React, { Component } from 'react';
import { connect } from 'react-redux';


// Import components and css for this
import './templates.css';
import TopBar from './TopBar';
import HeaderBar from './HeaderBar';
import TemplateMainBody from './TemplateMainBody';
import templates from './templates.json';
import templateImg from './templateImg.json';


class TemplateArea extends Component {
	constructor(props) {
		super(props);

		this.state = {
			templateType: '',
			templateImgPosition: '',
			templateContent: []
		}
	}

	componentWillMount() {

		this.setState({
			templateType: this.props.templateType.templateType
		});

		// save template contents for templateType
		Object.keys(templates).map((data, i) => {
			console.log(data)
			if (data == this.props.templateType.templateType) {
				this.setState({
					templateContent: templates[data]
				});
			}			
		});

		// save img position for templateType
		templateImg.map(data => {
			if (data.title == this.props.templateType.templateType) {
				this.setState({
					templateImgPosition: data.templateImgPosition
				});
			}
		});

	}

	render() {
		return (
			<div className="template-board">
				<TopBar type={this.state.templateType} />
				<HeaderBar type={this.state.templateType} templateImgPosition={this.state.templateImgPosition} />
				<TemplateMainBody type={this.state.templateType} content={this.state.templateContent} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
  templateType: state.templateType
});

export default connect(mapStateToProps)(TemplateArea);