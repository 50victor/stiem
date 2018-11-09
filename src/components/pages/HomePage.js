import React from 'react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const HomePage = () => (
	<div>
		<h3>HomePage</h3>
		<h3>
			<button class="ui inverted blue button">
				<Link to="/login">Início</Link>
			</button>
		</h3>
		<h3>
			<button class="ui inverted blue button">
				<Link to="/Ranking">Ranking</Link>
			</button>
		</h3>
		<h3>
			<button class="ui inverted blue button">
				<Link to="/matstudy">Material de Estudos</Link>
			</button>
		</h3>
		<h3>
			<button class="ui inverted blue button">
				<Link to="/help">Ajuda</Link>
			</button>
		</h3>
		<h3>
			<button class="ui inverted blue button">
				<Link to="/report">Relatórios</Link>
			</button>
		</h3>
	</div>
);

export default HomePage;
