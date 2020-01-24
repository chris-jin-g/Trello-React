import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// Import components for it
import Boards from './Boards/Boards';
import TemplateArea from './Templates/TemplateArea';
import TemplateCommonArea from './Templates/TemplateCommonArea';
import routes from './route.json';


export default class RightBody extends Component {
	constructor(props) {
		super(props);

		this.state = {
			routes: []
		}
	}

	componentWillMount() {
		this.setState({
			routes: routes
		});
	}

	render() {
		const { routes } = this.state;
		return (
			<>
				<Route exact path="/board" component={Boards} />
				<Route exact path="/board/templates" component={Boards} />
				{
					routes.route.map(route => {
						return <Route exact path={"/board"+route.title} component={TemplateArea} />
					})
				}
				<Route exact path="/board/templates/OKRs" component={TemplateCommonArea} />
			</>
		);
	}
}
