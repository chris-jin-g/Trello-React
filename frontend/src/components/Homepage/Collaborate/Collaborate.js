import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

// Import Css for it
import "./Collaborate.css";
import contentSvg from './content.svg'

export default class Collaborate extends Component {
	render() {
		return (
			<div className="collaborate">
				<Container className="content">
					<Row style={{'align-items': 'center'}}>
						<Col lg={7} md={7} sm={12} className="lg-screen sm-screen">
							<div className="borad">
									<div className="colla-header">
									<h3>
										Team Tasks
									</h3>
								</div>
								<div className="lists">
									<div className="list">
										<div className="list-content">
											<h5>Doing</h5>
											<div className="card">
												<div className="card-content">
													<div className="labels">
														<div className="label label-blue"></div>
													</div>
													Client meeting
													<div className="description">
														<img src={contentSvg} alt="Content-svg" />
													</div>
													<div className="card-users">
														<div className="user user1"></div>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-content">
													<div className="labels">
														<div className="label label-red"></div>
													</div>
													Plan webinar
													<div className="description">
														<img src={contentSvg} alt="Content-svg"/>
													</div>
													<div className="card-users">
														<div className="user user2"></div>
														<div className="user user1"></div>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-content">
													<div className="labels">
														<div className="label label-purple"></div>
													</div>
													Email newsletter
													<div className="description">
														<img src={contentSvg} alt="Content-svg" />
													</div>
													<div className="card-users">
														<div className="user user3"></div>
													</div>
												</div>
											</div>
											<div className="add-card">
												Add a card...
											</div>
										</div>
									</div>
									<div className="list">
										<div className="list-content">
											<h5>Done</h5>
											<div className="card">
												<div className="card-content">
													<div className="labels">
														<div className="label label-red"></div>
													</div>
													Publish podcast
													<div className="description">
														<img src={contentSvg} alt="Content-svg" />
													</div>
													<div className="card-users">
														<div className="user user3"></div>
														<div className="user user2"></div>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-content">
													<div className="labels">
														<div className="label label-purple"></div>
													</div>
													Launch website
													<div className="description">
														<img src={contentSvg} alt="Content-svg" />
													</div>
													<div className="card-users">
														<div className="user user2"></div>
													</div>
												</div>
											</div>
											<div className="add-card">
												Add a card...
											</div>
										</div>
									</div>
								</div>
							</div>
							
						</Col>
						<Col lg={5} md={5} sm={12} className="left-content md-align">
							<h3>
								Work with any team
							</h3>
							<p>
								Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.
							</p>
							<p>
								<a href="#" className="Start">Start doing-></a>
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}