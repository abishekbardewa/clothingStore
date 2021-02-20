import reactDom from 'react-dom';
import React from 'react';

import './menu-item.scss';

const menuItem = (props) => (
	<div className="menu-item">
		<div className="content">
			<h1 className="title">{props.title}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);
export default menuItem;
