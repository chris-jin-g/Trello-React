import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBLink, MDBIcon } from 'mdbreact';


// Import css and components for it
import '../GloCss.css';
import Globtn from '../board/Globtn';
import AddList from './AddList';
import Card from './Card';
import Title from './Title';
import AddCard from './AddCard';
// import AddCardContent form './AddCardContent';


class ListBoard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			boardContent: {},
			cardAddBtnFlag: false 
		}
	}

	componentWillMount() {
		this.setState({
			boardContent: this.props.content
		});
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			boardContent: newProps.content
		});
	}

	render() {
		const { boardContent } = this.state;
		return (
			<>
				{	
					boardContent.map(content => {
						return (
							<div className="add-list-content">
									<Title title={content.title} />

								{/*add-list-titles*/}
									{	
										(content.parts.length !== 0) ?
											content.parts.map(title => {
												return <Card title={title} />
											})
										:
										<div className="hidden"></div>
									}
									<AddCard />									
							</div>
						)
					})
				}
			</>
		);
	}
}


// const mapStateToProps = state => ({
  
// });

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     addList,
//     closeList
//   }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(ListBoard);
export default ListBoard;
