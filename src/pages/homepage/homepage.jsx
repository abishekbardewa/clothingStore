import React from 'react';
import Directory from '../../components/directory/directory';

import './homepage.scss';
const HomePage = () => {
	return (
		<div className="homepage">
			<Directory history />
		</div>
	);
};

export default HomePage;
