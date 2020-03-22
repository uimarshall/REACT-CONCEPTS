import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import TextInputGroup from "../layout/TextInputGroup";

class EditContact extends Component {
	state = {
		name: "",
		email: "",
		phone: "",
		errors: {}
	};
	async componentDidMount() {
		const { id } = this.props.match.params;
		const res = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${id}`
		);
		const contact = res.data;
		this.setState({
			name: contact.name,
			email: contact.email,
			phone: contact.phone
		});
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = async e => {
		e.preventDefault();
		const { name, email, phone } = this.state;
		if (name === "") {
			this.setState({
				errors: { name: "Name is required!" }
			});
			return;
		}
		if (email === "") {
			this.setState({
				errors: { email: "Email is required!" }
			});
			return;
		}
		if (phone === "") {
			this.setState({
				errors: { phone: "Phone is required!" }
			});
			return;
		}
		const updateContact = { name, email, phone };
		const { id } = this.props.match.params;
		const res = await axios.put(
			`https://jsonplaceholder.typicode.com/users/${id}`,
			updateContact
		);
		this.props.addContact(res.data);
		// Clear state
		this.setState({
			name: "",
			email: "",
			phone: "",
			errors: {}
		});
		this.props.history.push("/");
	};

	render() {
		const { name, email, phone, errors } = this.state;
		return (
			<div className="card mb-3">
				<div className="card-header">Edit Contacts</div>
				<div className="card-body">
					<form onSubmit={this.handleSubmit}>
						<TextInputGroup
							label="Name"
							name="name"
							placeholder="Enter Name..."
							value={name}
							onChange={this.handleChange}
							error={errors.name}
						/>
						<TextInputGroup
							label="Email"
							name="email"
							type="email"
							placeholder="Enter Email..."
							value={email}
							onChange={this.handleChange}
							error={errors.email}
						/>
						<TextInputGroup
							label="Phone"
							name="phone"
							placeholder="Enter Phone..."
							value={phone}
							onChange={this.handleChange}
							error={errors.phone}
						/>

						<input
							type="submit"
							value="Update Contact"
							className="btn btn-block btn-primary"
						/>
					</form>
				</div>
			</div>
		);
	}
}
export default withRouter(EditContact);
