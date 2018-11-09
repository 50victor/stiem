import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RankingPage from './components/pages/RankingPage';
import HelpPage from './components/pages/HelpPage';
import MatStudyPage from './components/pages/MatStudyPage';
import ReportPage from './components/pages/ReportPage';
import Login from './components/styling/Login';

import 'semantic-ui-css/semantic.min.css';

const App = () => (
	<div className="ui container">
		<Route path="/" exact component={HomePage} />
		<Route path="/login" exact component={LoginPage} />
		<Route path="/ranking" exact component={RankingPage} />
		<Route path="/report" exact component={ReportPage} />
		<Route path="/matstudy" exact component={MatStudyPage} />
		<Route path="/help" exact component={HelpPage} />
		<Route path="/style" exact component={Login} />
	</div>
);

export default App;
