import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
	render() {
		const clients = [
			{
				id: "12",
				firstName: "Baldwin",
				lastName: "Bald",
				email: "bal@yahoo.com",
				phone: "444-444-4444",
				balance: "12",
			},
		];
		if (clients) {
			return (
				<div>
					<div className="row">
						<div className="col-md-6">
							<h1>
								<i class="fa fa-users" aria-hidden="true"></i> Clients
							</h1>
						</div>
						<div className="col-md-6"></div>
					</div>
					<table class="table table-striped">
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
												class="fa fa-arrow-circle-o-right"
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
			return <h1>Loading....</h1>;
		}
	}
}

export default Clients;
