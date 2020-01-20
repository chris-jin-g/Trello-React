import React, { Component } from 'react';
import { MDBListGroup, MDBListGroupItem } from "mdbreact";


// Import components for it
import LinkBtn from '../../Global-components/board/LinkBtn';
import Globtn from '../../Global-components/board/Globtn';
import './BoardBody.css';
import Template_root from './template_root.json';


const Roots = props => (
	<MDBListGroupItem className="li-items">
		<LinkBtn to={"/board/Templates/"+props.title.title} value={props.title.title} fontsize="14" color="black"  />		
	</MDBListGroupItem>
);


export default class LeftBody extends Component {
	constructor(props) {
		super(props);
		this.rootShow = this.rootShow.bind(this);
		this.showRoot = this.showRoot.bind(this);
		this.hiddenRoot= this.hiddenRoot.bind(this);
		// this.onChange = this.onChange.bind(this);

		this.state = {
			roots: []
		}
	}

	componentWillMount() {
		this.setState({
			roots: Template_root
		});
	}

	// onChange() {
	// 	this.setAttribute("color", "#0079bf")
	// }

	showRoot() {
		document.getElementById('template_root').classList.remove("hidden")
	}

	hiddenRoot() {
		document.getElementById('template_root').classList.add("hidden")	
	}

	rootShow() {
		return this.state.roots.data.map(currentRoot => {
			return <Roots title={currentRoot} />
		})
	}

	render() {
		return (
			<div style={{position: "sticky", top: 0}}>
				<div className="LeftBody">
					<MDBListGroup style={{marginBottom: 12+"px"}}>
						<MDBListGroupItem onClick={this.hiddenRoot} className="li-items">
							<LinkBtn to="/board" fab icon="trello" value="Boards" bold={true} fontsize="14" color="#0079bf" bkColor="#e4f0f6" />
						</MDBListGroupItem>
						<MDBListGroupItem onClick={this.showRoot} className="li-items">
							<LinkBtn to="/board/Templates" fab icon="trello" value="Templates" bold={true} fontsize="14" color="black"  />
						</MDBListGroupItem>
						
						{/*Templates Roots*/}
						<MDBListGroup id="template_root" className="hidden">
							{this.rootShow()}
						</MDBListGroup>


						<MDBListGroupItem onClick={this.hiddenRoot} className="li-items">
							<LinkBtn to="/board" fab icon="trello" value="Home" bold={true} fontsize="14" color="black"  />
						</MDBListGroupItem>
					</MDBListGroup>
					<MDBListGroup>
						<div style={{textAlign: "right"}}>
							<span style={{marginLeft: 10+"px", float: "left", fontSize: 14+"px"}}>TEAMS</span>
							<Globtn bkcolor="transparent" color="grey" type="plus" iconsize="16px" />
						</div>
						<MDBListGroupItem className="li-items">
							<LinkBtn to="/" fab icon="trello" value="Home" bold={true} fontsize="14" color="black"  />
						</MDBListGroupItem>
					</MDBListGroup>
				</div>
			</div>
		);
	}
}