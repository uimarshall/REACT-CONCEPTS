import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Contacts from "./components/Contacts";

function App() {
	return (
		<Router>
			<div className="App">
				<Header title="Contact Directory" />
				<div className="container">
					<Contacts />
				</div>
			</div>
		</Router>
	);
}

export default App;
