import React from 'react';
import LoginForm from '../forms/LoginForm';
import { Link } from 'react-router-dom';

class Help extends React.Component {
	submit = data => {
		console.log(data);
	};
	render() {
		return (
			<div id="Help">
				<h1>Help</h1>
				<Link to="./">HomePage</Link>
			</div>
		);
	}
}
export default Help;
