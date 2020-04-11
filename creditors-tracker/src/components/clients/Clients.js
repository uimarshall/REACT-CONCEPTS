import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../../utils/Spinner";

class Clients extends Component {
	state = {
		totalMoneyOwed: null,
	};

	static getDerivedStateFromProps(props, state) {
		const { clients } = props;
		if (clients) {
			// Add balances
			const total = clients.reduce((total, client) => {
				return total + parseFloat(client.balance.toString());
			}, 0);
			return { totalMoneyOwed: total };
		}
		return null;
	}
	render() {
		const { clients } = this.props;
		const { totalMoneyOwed } = this.state;

		if (clients) {
			return (
				<div>
					<div className="row">
						<div className="col-md-6">
							<h1>
								<i className="fa fa-users" aria-hidden="true"></i> Club Debtors
							</h1>
						</div>
						<div className="col-md-6">
							<h5 className="text-right text-danger">
								Total Money Owed:{" "}
								<span className="text-primary">
									${parseFloat(totalMoneyOwed).toFixed(2)}
								</span>
							</h5>
						</div>
					</div>
					<table className="table table-striped">
						<thead className="thead-light">
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>Balance</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{clients.map((client) => (
								<tr key={client.id}>
									<td>
										{client.firstName} {client.lastName}
									</td>
									<td>{client.email}</td>
									<td>${parseFloat(client.balance).toFixed(2)}</td>
									<td>
										<Link
											to={`/client/${client.id}`}
											className="btn btn-info btn-sm">
											<i
												className="fa fa-arrow-circle-o-right"
												aria-hidden="true"></i>{" "}
											Details
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			);
		} else {
			return <Spinner />;
		}
	}
}

Clients.propTypes = {
	firestore: PropTypes.object.isRequired,
	clients: PropTypes.array,
};
// Get clients coll from firestore and map as props(clients) to the comp
export default compose(
	firestoreConnect([{ collection: "clients" }]), //connect comp to clients coll in firestore
	connect((state, props) => ({ clients: state.firestore.ordered.clients })) //mapStateToProps
)(Clients);
