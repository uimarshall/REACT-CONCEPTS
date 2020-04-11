import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import AddClient from "./components/clients/AddClient";
import ClientDetails from "./components/clients/ClientDetails";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/client/add" component={AddClient} />
						<Route exact path="/client/:id" component={ClientDetails} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
