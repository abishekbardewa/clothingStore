import React from 'react';
import Directory from '../../components/directory/directory';
import HomePageContainer from './homepage.styles';

const HomePage = () => {
	return (
		<HomePageContainer>
			<Directory history />
		</HomePageContainer>
	);
};

export default HomePage;
