import React, { Component } from 'react';


// Import css for this
import './templates.css';

class TemplateDetail extends Component {
	render() {
		return (
			<div className="common-detail">
				<h1>
					About This Template
				</h1>
				<p>
					When we started using OKRs for goal-setting at Buffer, we were eager to have a way to track our individual progress on our goals and to share our progress with teammates. This Trello board is my solution. I create a column for each "Objective" (category) and a card within the column for each "Key Result" (goal/target). Then every week, I hop into the board to update my progress.
				</p>
				<p>
					What I love about this board -- and about Trello -- is that I'm able to have such variety on each card and goal. For some goals, I have a number target that I want to hit, and I can create a checklist based on a waterfall graph to chart where I'm at throughout the quarter. For other goals, I have a deliverable, which I can then break into a checklist with different stages and add a due date. Or if I have an output goal, I can visually check off different parts of the projects. Throughout the quarter, I can drag KRs to the Done column, and when the quarter is over, I can move everything to a "history" column to look back on what I was able to do. Also, whenever new ideas come up, I keep a "swipe file" column to jot down inspiration when it strikes.
				</p>
			</div>
		);
	}
}

export default TemplateDetail;