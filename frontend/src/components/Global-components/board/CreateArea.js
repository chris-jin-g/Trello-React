import React, { Component } from 'react';

// Import css for it
import '../GloCss.css';

const CreateArea = ({title, onClick}) => {
	return (
		<div onClick={onClick} className="hover lg-board md-board sm-board">
			<a className="board-title">
				<div className="board-tile-details mod-add">
					<span>{title}</span>
				</div>
			</a>
		</div>
	);
}

export default CreateArea;