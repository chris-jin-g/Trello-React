import React, { Component } from 'react';
import { connect } from 'react-redux';


// Import components and css for this
import './templates.css';
import TemplateCommonTopBar from './TemplateCommonTopBar';
import TemplateCommonTitleBar from './TemplateCommonTitleBar';
import TemplateDetail from './TemplateDetail';


class TemplateCommonArea extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {},
			type: ''
		}

	}

	componentWillMount() {
		console.log("TemplateCommonArea")
		console.log(this.props.templateType.templateData.data)
		this.setState({
			data: this.props.templateType.templateData.data,
			type: this.props.templateType.templateData.type
		});
	}

	render() {
		return (
			<div className="common-template-board">
				<TemplateCommonTopBar type={this.state.type} title={this.state.data.title} />
				<TemplateCommonTitleBar data={this.state.data} />
				<TemplateDetail />
			</div>
		);
	}
}

const mapStateToProps = state => ({
  templateType: state.templateType
});

export default connect(mapStateToProps)(TemplateCommonArea);