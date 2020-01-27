import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';
import { toggleFlag, saveTemplateType } from '../../../actions/user.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Import css for it
import '../GloCss.css';

class LinkBtn extends Component {
	constructor(props) {
		super(props);

		this.toTemplate = this.toTemplate.bind(this);

		this.state = {
			clicked: false,
			linkKey: ''
		}
	}

	componentWillMount() {
		this.setState({
			clicked: this.props.clicked,
			linkKey: this.props.linkKey
		});
	}

	componentWillReceiveProps(newProps) {
		if (newProps.compareKey == this.state.linkKey) {
			this.setState({
				clicked: true
			});
		} else {
			this.setState({
				clicked: false
			});
		}
	}

	toTemplate() {
		const data = {
			compareKey: this.state.linkKey,
			flag: true
		}

		// Change button color
		this.props.toggleFlag(data);

		// save template Type
		this.props.saveTemplateType(this.state.linkKey);
	}

	render() {
		const IconStyle = {
			fontSize: `${this.props.fontsize}`+"px",
			width: 32+"px",
			textAlign: 'center',
		}

		return (
			<>
				{
					(this.state.clicked) ?
						<Link onClick={this.toTemplate} to={this.props.to} className="clicked-link Mdblink">
							{
								this.props.fab?<MDBIcon fab icon={this.props.icon} style={IconStyle} />:
									<MDBIcon icon={this.props.icon} style={IconStyle} />
							}
							{
								this.props.bold?<span style={{fontWeight: "bold", fontSize: `${this.props.fontsize}`+"px"}}>{this.props.value}</span>:
									 <span style={{fontSize: `${this.props.fontsize}`+"px"}}>{this.props.value}</span>
							}
						</Link>
					:
						<Link onClick={this.toTemplate} to={this.props.to} className="Mdblink">
							{
								this.props.fab?<MDBIcon fab icon={this.props.icon} style={IconStyle} />:
									<MDBIcon icon={this.props.icon} style={IconStyle} />
							}
							{
								this.props.bold?<span style={{fontWeight: "bold", fontSize: `${this.props.fontsize}`+"px"}}>{this.props.value}</span>:
									 <span style={{fontSize: `${this.props.fontsize}`+"px"}}>{this.props.value}</span>
							}
						</Link>
				}
					
			</>
		)
	}
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleFlag,
    saveTemplateType
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LinkBtn);
