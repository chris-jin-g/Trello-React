import React, { Component } from 'react';
import { MDBLink } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveTemplateAuth } from '../../../../actions/user.action';


// Import css for this
import './templates.css';


class TemplateCard extends Component {
	constructor(props) {
		super(props);

		this.moreDetail = this.moreDetail.bind(this);

		this.state = {
			templateType: '',
			data: {}
		}
	}

	componentWillMount() {
		this.setState({
			templateType: this.props.type,
			data: this.props.data
		});
	}

	moreDetail() {

		const data = {
			type: this.state.templateType,
			data: this.state.data
		}

		// save detail data
		this.props.saveTemplateAuth(data);
	}

	render() {
		const regex = /^http/;

		return (
			<div className="template-card" title={this.props.data.title}>
				<MDBLink onClick={this.moreDetail} to="/board/templates/OKRs" className="link-card">
					{
						(regex.test(this.props.data.linkImg)) ?
							<div className="link-card-img" style={{backgroundImage: `url(${this.props.data.linkImg})`}}></div>
						:
							<div className="link-card-img" style={{backgroundColor: `${this.props.data.linkImg}`}}></div>
					}
					<div className="opacity-div"></div>
					<div className="link-card-title">
						<div>
							<div className="link-card-avatar" style={{backgroundImage: `url(${this.props.data.avatar})`, borderRadius: `${this.props.data.radius}`}}></div>	
						</div>
						<h2>{this.props.data.title}</h2>
						<p className="template-auth">
							{this.props.data.auth}
						</p>
						<p className="template-about">
							{this.props.data.about}
						</p>
					</div>
				</MDBLink>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveTemplateAuth
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(TemplateCard);