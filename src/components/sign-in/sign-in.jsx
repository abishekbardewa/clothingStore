import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import './sign-in.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			email: '',
			password: '',
		});
	};
	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
		console.log(this.state);
	};
	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput type="email" name="email" value={this.state.email} label="Email" handleChange={this.handleChange} required />

					<FormInput type="password" name="password" value={this.state.password} label="Password" handleChange={this.handleChange} required />
					<div className="buttons">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
