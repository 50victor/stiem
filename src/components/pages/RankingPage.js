import React from 'react';
import LoginForm from '../forms/LoginForm';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
	submit = data => {
		console.log(data);
	};
	render() {
		return (
			<div id="ranking">
				<h1>Ranking</h1>
				<Link to="./">HomePage</Link>
			</div>
		);
	}
}
export default Ranking;
