import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class AddClient extends Component {
	state = {
		firstName: "",
		lastName: "",
		email: "",
		balance: "",
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const newClient = this.state;
		const { firestore, history } = this.props;
		// If no balance
		if (newClient.balance === "") {
			newClient.balance = 0;
		}

		firestore
			.add({ collection: "clients" }, newClient)
			.then(() => history.push("/"));
	};
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-6">
						<Link to="/" className="btn btn-link">
							<i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>{" "}
							Back To Dashboard
						</Link>
					</div>
				</div>
				<div className="card">
					<div className="card-header">Add Members</div>
					<div className="card-body">
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label htmlFor="firstName">First Name</label>
								<input
									type="text"
									className="form-control"
									name="firstName"
									minLength="2"
									required
									onChange={this.handleChange}
									value={this.state.firstName}
									placeholder="Add firstName"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="lastName">Last Name</label>
								<input
									type="text"
									className="form-control"
									name="lastName"
									minLength="2"
									required
									onChange={this.handleChange}
									value={this.state.lastName}
									placeholder="Add lastName"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									className="form-control"
									name="email"
									onChange={this.handleChange}
									value={this.state.email}
									placeholder="Add Email"
								/>
								<div className="form-group">
									<label htmlFor="phone">Phone</label>
									<input
										type="text"
										className="form-control"
										name="phone"
										minLength="10"
										required
										onChange={this.handleChange}
										value={this.state.phone}
										placeholder="Add Phone"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="balance">Balance</label>
									<input
										type="text"
										className="form-control"
										name="balance"
										onChange={this.handleChange}
										value={this.state.balance}
										placeholder="Add Balance"
									/>
								</div>
							</div>
							<input
								type="submit"
								value="Submit"
								className="btn btn-info btn-block"
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

AddClient.propTypes = {
	firestore: PropTypes.object.isRequired,
};

export default firestoreConnect()(AddClient);
