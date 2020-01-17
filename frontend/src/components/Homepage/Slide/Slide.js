import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

//Import Css for it
import './Slide.css';
//Import Svg for it
import left from './left-slide.svg';
import right from './right-slide.svg';
import check from './check.svg';
import check1 from './check1.svg';
import slide from './slide.json';

export default class Slide extends Component {
	constructor(props) {
		super(props);

		global.i = 0;

		this.slideShow = this.slideShow.bind(this);

		this.state = {
			slideInfo: [],
			stepNum: 0,
			step1: 'block',
			step2: 'none',
			step3: 'none',
			step4: 'none',
			step5: 'none'
		}
	}

	componentWillMount() {
		this.setState({
			slideInfo: slide
		})
	}

	componentDidMount() {
		
		window.addEventListener('change',() => {
			const newInfo = [
			{"x":310},
			{"x":690},
			{"x":690},
			{"x":690},
			{"x":600}
		];
		let width = window.outerWidth;
		let info = this.state.slideInfo;

		if ( width > 990 && width < 1200) {
			for ( let i = 0; i < info.length; i++) {
				info.data[i].robotPositionX = newInfo[i].x;
				console.log(newInfo[i].x)
			}
		}
		})

		
	}

	slideShow(e) {
		global.i += e;
		// interface control
		switch (global.i) {
			case -1:
				this.setState({
					step1: 'none',
					step2: 'block',
					step3: 'block',
					step4: 'none',
					step5: 'block'
				});
				document.getElementById('motion').classList.add('in-motion');
				break;
			case 0:
				this.setState({
					step1: 'block',
					step2: 'none',
					step3: 'none',
					step4: 'none',
					step5: 'none'
				});
				break;
			case 1:
				this.setState({
					step1: 'none',
					step2: 'block',
					step3: 'none',
					step4: 'none',
					step5: 'none'
				});
				break;
			case 2:
				this.setState({
					step1: 'none',
					step2: 'block',
					step3: 'block',
					step4: 'none',
					step5: 'none'
				});
				document.getElementById('motion').classList.remove('in-motion');
				break;
			case 3:
				this.setState({
					step1: 'none',
					step2: 'block',
					step3: 'block',
					step4: 'block',
					step5: 'none'
				});
				document.getElementById('motion').classList.remove('in-motion');
				break;
			case 4:
				this.setState({
					step1: 'none',
					step2: 'block',
					step3: 'block',
					step4: 'none',
					step5: 'block'
				});
				document.getElementById('motion').classList.add('in-motion');
				break;
			case 5:
				this.setState({
					step1: 'block',
					step2: 'none',
					step3: 'none',
					step4: 'none',
					step5: 'none'
				});
				break;
		}

		// user control
		if (global.i == 0 || global.i == 5) {
			document.getElementById('user-3').setAttribute("style", "left: 269px; position: absolute; top: 111px;");
		} else {
			document.getElementById('user-3').setAttribute("style", "position: static !important;");
		}

		// robot animation and text control
		const state = this.state.slideInfo;
		let robot = document.getElementById('robot');
		if (global.i < 0) {
			global.i = 4;
			robot.setAttribute("style", `transform: rotate(${state.data[global.i].rotateValue}deg); left: ${state.data[global.i].robotPositionX}px; top: ${state.data[global.i].robotPositionY}px;`);
			this.setState({
				stepNum: global.i
			});
		} else if (global.i > 4) {
			global.i = 0;
			robot.setAttribute("style", `transform: rotate(${state.data[global.i].rotateValue}deg); left: ${state.data[global.i].robotPositionX}px; top: ${state.data[global.i].robotPositionY}px;`);
			this.setState({
				stepNum: global.i
			});
		} else {
			robot.setAttribute("style", `transform: rotate(${state.data[global.i].rotateValue}deg); left: ${state.data[global.i].robotPositionX}px; top: ${state.data[global.i].robotPositionY}px;`);
			this.setState({
				stepNum: global.i
			});
		}
		
	}


	render() {
		return (
			<div className="Slide">
				<Container className="text-align">
					<Row>
						<Col lg={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} sm={12}>
							<h3>
								See how it works
							</h3>
							<p>
								Go from idea to action in seconds with Trello’s intuitively simple boards, lists, and cards.
							</p>
						</Col>
					</Row>
					<div className="slide-bar">
						<a className="arrow-left lg-left-block md-left-block sm-left-block hidden-block" onClick={() => {this.slideShow(-1)}}>
							<img src={left} />
						</a>
						<a className="arrow-right lg-right-block md-right-block sm-right-block hidden-block" onClick={() => {this.slideShow(1)}}>
							<img src={right} />
						</a>
						<div className="board" onClick={() => {this.slideShow(1)}}>
							{/*Header*/}
							<div className="slide-header">
								<div className="slide-title">
									<h3>
										Business Launch
									</h3>
								</div>
								<div className="board-users">
									<div id="user-3" className="user user-3"></div>
									<div className="user user-1"></div>
									<div className="user user-2"></div>
								</div>
							</div>
							{/*lists*/}
							<div className="lists">
								<div className="list to-do" style={{display: this.state.step2}}>
									<div className="list-content" style={{display: this.state.step2}}>
										<h5 style={{display: this.state.step2}}>
											To Do
										</h5>
										<div className="card" style={{display: this.state.step3}}>
											<div className="card-content">Hire Accountant</div>
										</div>
										<div className="card" style={{display: this.state.step3}}>
											<div className="card-content">Apply for Loan</div>
										</div>
										<div className="add-card" style={{display: this.state.step2}}>
											Add a card…
										</div>
									</div>
								</div>
								<div className="list" style={{display: this.state.step2}}>
									<div className="list-content" style={{display: this.state.step2}}>
										<h5 style={{display: this.state.step2}}>
											Doing
										</h5>
										<div className="card" style={{display: this.state.step3}}>
											<div className="card-content">Create Facebook Page</div>
										</div>
										<div className="card empty" style={{display: this.state.step5}}></div>
										<div id="motion" className="card" style={{display: this.state.step3}}>
											<div className="card-content">Build Website</div>
										</div>
										<div className="card" style={{display: this.state.step3}}>
											<div className="card-content">Design Logo</div>
										</div>
										<div className="card" style={{display: this.state.step3}}>
											<div className="card-content">Sign Office Lease</div>
										</div>
										<div className="add-card" style={{display: this.state.step2}}>
											Add a card…
										</div>
									</div>
								</div>
								<div className="list" style={{display: this.state.step2}}>
									<div className="list-content" style={{display: this.state.step2}}>
										<h5 style={{display: this.state.step2}}>
											Done
										</h5>
										<div className="card empty" style={{display: this.state.step5}}></div>
										<div className="card" style={{display: this.state.step3}}>
											<div className="card-content">Open Bank Account</div>
										</div>
										<div className="card" style={{display: this.state.step3}}>
											<div className="card-content">Write Business Plan</div>
										</div>
										<div className="add-card" style={{display: this.state.step2}}>
											Add a card…
										</div>
									</div>
								</div>
								<div id="list-add" className="list-add" style={{display: this.state.step1}}>
									<div id="add-list" className="add-list" style={{display: this.state.step1}}>Add a list…</div>
								</div>
							</div>
							{/*card-back-overlay*/}
							<div className="card-back-overlay" style={{display: this.state.step4}}>
								<div className="card-back">
									<h5>
										Build Website
									</h5>
									<div className="meta">
										<div className="members">
											<div className="spacing-div">Members</div>
											<div className="user user-2" style={{'marginLeft': 0}}></div>
											<div className="user user-1"></div>
										</div>
										<div className="due-date">
											<div className="spacing-div">Due Date</div>
											<span className="due">
												<img src={check} alt="Check" />
												Jul 24
											</span>
										</div>
									</div>
									<h6>
										Description
									</h6>
									<p>
										Create a nice, modern website for our new business.
									</p>
									<h6>
										Checklist
									</h6>
									<div className="checklist">
										<div className="progress-div">
											<span>
												100% Complete
											</span>
											<span className="progress-bar"></span>
										</div>
										<ul>
											<li>
												<img src={check1} />	
												Find WordPress template that suits our needs
											</li>
											<li>
												<img src={check1} />
												<strong>@stevethedev</strong>
												to set up and customize the template
											</li>
											<li>
												<img src={check1} />
												Launch our website!
											</li>
										</ul>
									</div>
									<h6>
										Add Comment
									</h6>
									<textarea></textarea>
								</div>
							</div>
							{/*caption*/}
							<div className="captions">
								<div className="caption caption1">
									{this.state.slideInfo.data[this.state.stepNum].text}
								</div>
								<nav style={{'display': 'inline-block'}}>
									<a className="step-1"></a>
									<a className="step-2"></a>
									<a className="step-3"></a>
									<a className="step-4"></a>
									<a className="step-5"></a>
								</nav>
							</div>
						</div>
						<div id="robot" className="robot-visibility"></div>
					</div>
				</Container>
			</div>
		);
	}
}