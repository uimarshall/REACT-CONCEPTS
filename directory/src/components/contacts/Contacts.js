import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Contact from "./Contact";
import axios from "axios";
import AddContact from "./AddContact";
import { GET_CONTACTS } from "../../actions/types";

class Contacts extends Component {
	componentWillMount() {
		this.props.getContacts();
	}
	// componentDidMount() {
	// 	fetch("https://jsonplaceholder.typicode.com/users")
	// 		.then(response => response.json())
	// 		.then(data =>
	// 			this.setState({
	// 				contacts: data
	// 			})
	// 		);
	// }

	// addContact = data => {
	// 	const { name, email, phone } = data;
	// 	const newContact = {
	// 		id: Math.floor(Math.random()),
	// 		name,
	// 		email,
	// 		phone
	// 	};
	// 	// Update state with newContact
	// 	this.setState({
	// 		contacts: [...this.state.contacts, newContact]
	// 	});
	// };

	deleteContact = id => {
		const { contacts } = this.props;
		const newContacts = contacts.filter(contact => contact.id !== id);
		this.setState({
			contacts: newContacts
		});
	};
	// async componentDidMount() {
	// 	const res = await axios.get("https://jsonplaceholder.typicode.com/users");

	// 	this.setState({
	// 		contacts: res.data
	// 	});
	// }

	render() {
		const { contacts } = this.props;
		return (
			<React.Fragment>
				<h1 className="display-4">
					<span className="text-primary">Contact</span> List
				</h1>

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

Contacts.propTypes = {
	contacts: PropTypes.array.isRequired,
	getContacts: PropTypes.func.isRequired
};
// connect() takes 2 params:
// 1. What we want to map from the redux state to this local comp
// 2. What we want dispatch from this comp to the redux state
const mapStateToProps = state => ({
	contacts: state.contact.contacts
});

// We will access the func to dispatch actn from - 'this.props.getContacts'
const mapDispatchToProps = dispatch => ({
	getContacts: () => dispatch({ type: GET_CONTACTS })
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
