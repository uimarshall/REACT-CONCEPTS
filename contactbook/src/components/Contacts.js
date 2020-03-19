import React, { Component } from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";

class Contacts extends Component {
	// static propTypes = {
	//     prop: PropTypes
	// }
	state = {
		contacts: [
			{
				id: 1,
				name: "Caleb Marshall",
				email: "caleb@gmail.com",
				phone: "234-443-5569"
			},
			{
				id: 2,
				name: "John Dalton",
				email: "john@gmail.com",
				phone: "234-334-7777"
			},
			{
				id: 3,
				name: "Bob Marley",
				email: "bob@gmail.com",
				phone: "234-555-6666"
			}
		]
	};

	deleteContact = id => {
		const { contacts } = this.state;
		const newContacts = contacts.filter(contact => contact.id !== id);
		this.setState({
			contacts: newContacts
		});
	};
	render() {
		const { contacts } = this.state;
		return (
			<>
				{contacts.map(contact => (
					<Contact
						contact={contact}
						key={contact.id}
						deleteContact={this.deleteContact(contact.id)}
					/>
				))}
			</>
		);
	}
}
export default Contacts;
