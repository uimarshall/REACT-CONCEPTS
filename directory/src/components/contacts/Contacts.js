import React, { Component } from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import axios from "axios";
import AddContact from "./AddContact";

class Contacts extends Component {
	// static propTypes = {
	//     prop: PropTypes
	// }
	state = {
		contacts: []
	};
	// componentDidMount() {
	// 	fetch("https://jsonplaceholder.typicode.com/users")
	// 		.then(response => response.json())
	// 		.then(data =>
	// 			this.setState({
	// 				contacts: data
	// 			})
	// 		);
	// }

	addContact = data => {
		const { name, email, phone } = data;
		const newContact = {
			id: Math.floor(Math.random()),
			name,
			email,
			phone
		};
		// Update state with newContact
		this.setState({
			contacts: [...this.state.contacts, newContact]
		});
	};

	deleteContact = id => {
		const { contacts } = this.state;
		const newContacts = contacts.filter(contact => contact.id !== id);
		this.setState({
			contacts: newContacts
		});
	};
	async componentDidMount() {
		const res = await axios.get("https://jsonplaceholder.typicode.com/users");

		this.setState({
			contacts: res.data
		});
	}

	render() {
		const { contacts } = this.state;
		return (
			<React.Fragment>
				<h1 className="display-4">
					<span className="text-primary">Contact</span> List
				</h1>
				<AddContact addContact={this.addContact} />
				{contacts.map(contact => (
					<Contact
						contact={contact}
						key={contact.id}
						deleteContactHandler={this.deleteContact}
					/>
				))}
			</React.Fragment>
		);
	}
}
export default Contacts;
