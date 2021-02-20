import React from 'react';
import MenuItem from '../menu-item';
import './directory-menu.scss';

class directoryMenu extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: [
				{
					title: 'HATS',
				},
				{
					title: 'SHOES',
				},
				{
					title: 'JACKETS',
				},
				{
					title: 'WOMENS',
				},
				{
					title: 'MENS',
				},
			],
		};
	}

	render() {
		const title = this.state.sections.map((section) => section.title);
		// console.log(title);
		return (
			<div className="directory-menu">
				{this.state.sections.map((section) => (
					<MenuItem title={section.title} />
				))}
			</div>
		);
	}
}

export default directoryMenu;
