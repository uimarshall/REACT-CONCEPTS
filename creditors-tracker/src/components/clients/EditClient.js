import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../../utils/Spinner";

class EditClient extends Component {
	constructor(props) {
		super(props);
		// Create refs
		this.firstNameInput = React.createRef();
		this.lastNameInput = React.createRef();
		this.emailInput = React.createRef();
		this.phoneInput = React.createRef();
		this.balanceInput = React.createRef();
	}
	handleSubmit = (e) => {
		e.preventDefault();

		const { firestore, history, client } = this.props;
		const updatedClient = {
			firstName: this.firstNameInput.current.value,
			lastName: this.lastNameInput.current.value,
			email: this.emailInput.current.value,
			phone: this.phoneInput.current.value,
			balance:
				this.balanceInput.current.value === ""
					? 0
					: this.balanceInput.current.value,
		};
		// Update client in firestore
		firestore
			.update({ collection: "clients", doc: client.id }, updatedClient)
			.then(() => history.push("/"));
	};

	render() {
		const { client } = this.props;
		const { disableBalanceOnEdit } = this.props.settings;

		if (client) {
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
						<div className="card-header">Edit Members</div>
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
										ref={this.firstNameInput}
										defaultValue={client.firstName}
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
										ref={this.lastNameInput}
										defaultValue={client.lastName}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										className="form-control"
										name="email"
										ref={this.emailInput}
										defaultValue={client.email}
									/>
									<div className="form-group">
										<label htmlFor="phone">Phone</label>
										<input
											type="text"
											className="form-control"
											name="phone"
											minLength="10"
											required
											ref={this.phoneInput}
											defaultValue={client.phone}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="balance">Balance</label>
										<input
											type="text"
											className="form-control"
											name="balance"
											ref={this.balanceInput}
											defaultValue={client.balance}
											disabled={disableBalanceOnEdit}
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
		} else {
			return <Spinner />;
		}
	}
}

EditClient.propTypes = {
	firestore: PropTypes.object.isRequired,
};
// Get clients coll from firestore and map as props(clients) to the comp
export default compose(
	firestoreConnect((props) => [
		{ collection: "clients", storeAs: "client", doc: props.match.params.id },
	]), //connect comp to clients coll in firestore
	connect(({ firestore: { ordered }, settings }, props) => ({
		client: ordered.client && ordered.client[0],
		settings: settings,
	})) //mapStateToProps
)(EditClient);
