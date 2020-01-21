import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBLink, MDBIcon } from 'mdbreact';


// Import css and components for it
import '../GloCss.css';
import Globtn from '../board/Globtn';
import Card from './Card';
import Title from './Title';
import AddCardBody from './AddCardBody';


class ListBoard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			boardContent: {},
			boardid: ''
		}
	}

	componentWillMount() {
		this.setState({
			boardContent: this.props.content,
			boardid: this.props.boardid
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
					boardContent.map((content, key) => {
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
									{
										(content.parts.length !== 0) ?
											<AddCardBody title="Add another card" boardid={this.state.boardid} boardAreaid={key} />
										:
											<AddCardBody title="Add a card" boardid={this.state.boardid} boardAreaid={key} />				 
									}
									
									
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
