import React from 'react';
import LoginForm from '../forms/LoginForm';
import { Link } from 'react-router-dom';

class Report extends React.Component {
	submit = data => {
		console.log(data);
	};
	render() {
		return (
			<div id="Report">
				<h1>Report</h1>
				<Link to="./">HomePage</Link>
			</div>
		);
	}
}
export default Report;
