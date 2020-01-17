import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

//Import Css for it
import './Feature.css';
import collaborateImg from '../../../trello-images/updated-layouts-collab.png';
import appImg from '../../../trello-images/updated-layouts-platform.png';
import syncImg from '../../../trello-images/updated-layouts-sync.png'
import appStore from '../../../trello-images/btn-appstore-black.png';
import playStore from '../../../trello-images/btn-playstore-black.png';


export default class Feature extends Component {
	render() {
		return(
			<div className="feature">
				<Container className="feature-style">
					<Row>
						<Col lg={{ span: 6, offset: 3}} md={{ span: 6, offset: 3}} sm={12}>
							<h3>
								Trello your way
							</h3>
							<p style={{'letterSpacing': 0.6}}>
								Use Trello the way your team works best. We’ve got the flexibility & features to fit any team’s style.
							</p>
						</Col>
					</Row>
					<Row>
						<Col lg={4} md={12} sm={12}>
							<div>
								<img src={collaborateImg} alt="collaborateImg" width={270} />
							</div>
							<h5>
								The Team Playbook
							</h5>
							<p className="small">
								It’s easy to get your team up and running with Trello. We’ve collected all of the boards and tools you need to succeed in one handy resource.
							</p>
							<p>
								<a className="btn feature-btn">
									Make A Game Plan
								</a>
							</p>
						</Col>
						<Col lg={4} md={12} sm={12}>
							<div>
								<img src={appImg} alt="appImg" width={270} />
							</div>
							<h5>
								A Productivity Platform
							</h5>
							<p className="small">
								Integrate the apps your team already uses directly into your workflow. Power-Ups turn Trello boards into living applications to meet your team's unique business needs.
							</p>
							<p>
								<a className="btn feature-btn">
									Power-Up Your workflow
								</a>
							</p>
						</Col>
						<Col lg={4} md={12} sm={12}>
							<div>
								<img src={syncImg} alt="syncImg" width={270} />
							</div>
							<h5>
								Always In Sync
							</h5>
							<p className="small">
								No matter where you are, Trello stays in sync across all of your devices. Collaborate with your team anywhere, from sitting on the bus to sitting on the beach.
							</p>
							<p className="app-store">
								<a>
									<img src={appStore} />
								</a>&nbsp;
								<a>
									<img src={playStore} />
								</a>
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}