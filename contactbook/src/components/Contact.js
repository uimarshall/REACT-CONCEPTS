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
		this.props.deleteContact();
	};
	render() {
		const { name, email, phone } = this.props.contact;
		const { showContactInfo } = this.state;
		return (
			<div className="card card-body mb-3">
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
	contact: PropTypes.object.isRequired
	// deleteContact: PropTypes.func.isRequired
};

export default Contact;
