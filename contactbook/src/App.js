import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";

import About from "./components/layout/About";
import NotFound from "./components/layout/NotFound";
import EditContacts from "./components/contacts/EditContacts";

function App() {
	return (
		<Router>
			<div className="App">
				<Header title="Contact Directory" />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Contacts} />
						<Route exact path="/contact/edit/:id" component={EditContacts} />
						<Route exact path="/about" component={About} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
