import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import signInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}
	unsubscribeFromAuth = null;
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					this.setState(
						{
							currentUser: { id: snapShot.id, ...snapShot.data() },
						},
						() => {
							console.log(this.state);
						},
					);

					console.log('AfterState', this.state);
				});
			}
			this.setState({
				currentUser: userAuth,
			});
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={Homepage} />;
					<Route path="/shop" component={Shop} />
					<Route path="/signin" component={signInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
