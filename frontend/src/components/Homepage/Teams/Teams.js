import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

// Import Css for it
import "./Teams.css";
import butler from "../../../trello-images/butler.png"

export default class Teams extends Component {
	render() {
		return (
			<div className="teams">
				<Container>
					<Row style={{'align-items': 'center'}}>
						<Col lg={5} md={5} sm={12}>
							<div className="clipping-mask">
								<div className="phone">
									<div className="forehead">
										<div className="earpiece">
											
										</div>
									</div>
									<div className="buttons">
										<div className="silent"></div>
										<div className="volume"></div>
										<div className="lock"></div>
									</div>
									<div className="screen">
										<div className="board">
											<div className="header">
												<div className="title">
													<h3>
														Summer Vacation
													</h3>
												</div>
											</div>
											<div className="lists">
												<div className="list">
													<div className="list-content">
														<h5>To Do</h5>
														<div className="card">
															<div className="card-content">Swimming</div>
														</div>
														<div className="card">
															<div className="image surfing-lessons"></div>
															<div className="card-content">Surfing Lessons</div>
														</div>
														<div className="card">
															<div className="card-content">Whale Watching</div>
														</div>
														<div className="card">
															<div className="card-content">Snorkeling</div>
														</div>
														<div className="add-card">
															<div className="card-content">Add a card...</div>
														</div>
													</div>
												</div>
												<div className="list">
													<div className="list-content">
														<h5>To Eat</h5>
														<div className="card">
															<div className="image tiki-drinks"></div>
															<div className="card-content">Tiki Drinks</div>
														</div>
														<div className="card">
															<div className="card-content">Taro Ice Cream</div>
														</div>
														<div className="card">
															<div className="card-content">Fresh Seafood</div>
														</div>
														<div className="card">
															<div className="card-content">Ahi Poke</div>
														</div>
														<div className="add-card">
															<div className="card-content">Add a card...</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="chin">
										<div className="button"></div>
									</div>
								</div>
							</div>
						</Col>
						<Col lg={7} md={7} sm={12} className="sm-screen">
							<h3 className="team-info">
								Information at a glance
							</h3>
							<p className="m-0">
								Dive into the details by adding comments, attachments, due dates, and more directly to Trello cards. Collaborate on projects from beginning to end.
							</p>
						</Col>
					</Row>
					<Row style={{'paddingTop': '5rem'}} className="sm-mode" >
						<Col lg={5} md={5} sm={12} className="lg-screen sm">
							<img src={butler} className="team-img"/>
						</Col>
						<Col lg={7} md={7} sm={12}>
							<h4>
								Built-In Workflow Automation With Butler
							</h4>
							<div className="padding-div"></div>
							<p>
								Let the robots do the work! Boost productivity by unleashing the power of automation across your entire team with Butler, and remove tedious tasks from your to-do lists with:
							</p>
							<ul>
								<li>Rule-Based Triggers</li>
								<li>Custom Card & Board Buttons</li>
								<li>Calendar Commands</li>
								<li>Due Date Commands</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}