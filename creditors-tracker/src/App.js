import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
	UserIsAuthenticated,
	UserIsNotAuthenticated,
} from "./components/helpers/auth";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import AddClient from "./components/clients/AddClient";
import ClientDetails from "./components/clients/ClientDetails";
import EditClient from "./components/clients/EditClient";
import Login from "./components/auth/Login";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="container">
					<Switch>
						<Route exact path="/" component={UserIsAuthenticated(Dashboard)} />
						<Route
							exact
							path="/client/add"
							component={UserIsAuthenticated(AddClient)}
						/>
						<Route
							exact
							path="/client/edit/:id"
							component={UserIsAuthenticated(EditClient)}
						/>
						<Route
							exact
							path="/client/:id"
							component={UserIsAuthenticated(ClientDetails)}
						/>
						<Route
							exact
							path="/login"
							component={UserIsNotAuthenticated(Login)}
						/>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
