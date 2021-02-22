import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import signInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />;
				<Route path="/shop" component={Shop} />
				<Route path="/signin" component={signInAndSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
