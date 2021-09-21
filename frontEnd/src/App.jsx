import React from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Header from './components/Header'
import Home from './pages/Home'
import Cadastrar from './pages/Cadastrar'
import Paciente from './pages/Paciente'

export default function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/paciente/:id">
					<Paciente />
				</Route>
				<Route path="/cadastrar">
					<Cadastrar />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}
