import React from 'react';
import LoginForm from '../forms/LoginForm';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
	submit = data => {
		console.log(data);
	};
	render() {
		return (
			<div className="ui container">
				<h1>Login Page</h1>

				<Link to="./">HomePage</Link>
				<br />
				<br />
				<br />
				<br />
				<LoginForm submit={this.submit} />
			</div>
		);
	}
}
export default LoginPage;
