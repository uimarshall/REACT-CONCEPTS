import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
	state = {
		showContactInfo: false
	};
	handleClick = e => {
		this.setState({
			showContactInfo: !this.state.showContactInfo
		});
	};
	handleDelete = () => {
		const { contact } = this.props;
		this.props.deleteContactHandler(contact.id);
	};

	render() {
		const { showContactInfo } = this.state;
		const { name, email, phone } = this.props.contact;
		return (
			<div className="card card-body mb-3 contact-card">
				<h4 className="hide-show">
					{name} <i onClick={this.handleClick} className="fa fa-sort-down"></i>
					<i
						className="fa fa-times delete-contact"
						onClick={this.handleDelete}></i>
				</h4>
				{showContactInfo ? (
					<ul className="list-group">
						<li className="list-group-item">Email: {email}</li>
						<li className="list-group-item">Phone: {phone}</li>
					</ul>
				) : null}
			</div>
		);
	}
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
	deleteContactHandler: PropTypes.func.isRequired
};

export default Contact;
