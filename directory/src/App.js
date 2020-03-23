import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";

import About from "./components/layout/About";
import NotFound from "./components/layout/NotFound";
import EditContacts from "./components/contacts/EditContacts";
import AddContact from "./components/contacts/AddContact";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<Header title="Contact Directory" />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Contacts} />
							<Route exact path="/contact/add" component={AddContact} />
							<Route exact path="/contact/edit/:id" component={EditContacts} />
							<Route exact path="/about" component={About} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
