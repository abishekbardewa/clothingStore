import React from 'react';
import Directory from '../../components/directory/directory';

import './homepage.scss';
const HomePage = () => {
	console.log('HOME');
	return (
		// Outside Component
		<div className="homepage">
			<Directory history />
		</div>
	);
};

export default HomePage;
