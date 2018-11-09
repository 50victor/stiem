import React from 'react';
import LoginForm from '../forms/LoginForm';
import { Link } from 'react-router-dom';

class MatStudy extends React.Component {
	submit = data => {
		console.log(data);
	};
	render() {
		return (
			<div id="MatStudy">
				<h1>MatStudy</h1>
				<Link to="./">HomePage</Link>
			</div>
		);
	}
}
export default MatStudy;
