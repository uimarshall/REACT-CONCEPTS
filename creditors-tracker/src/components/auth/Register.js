import React, { Component } from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase"; //use firebaseConnect for auth
import PropTypes from "prop-types";
import { notifyUser } from "../../actions/notifyAction";
import Alert from "../../utils/Alert";

class Register extends Component {
	state = {
		email: "",
		password: "",
	};
	componentWillMount() {
		const { allowRegistration } = this.props.settings;
		if (!allowRegistration) {
			this.props.history.push("/");
		}
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { firebase, history, notifyUser } = this.props;
		const { email, password } = this.state;

		// Register with Firebase
		firebase
			.createUser({
				email,
				password,
			})
			.then(() => history.push("/"))
			.catch((err) =>
				notifyUser("A user with this Credentials already exist!", "error")
			);
	};
	render() {
		const { message, messageType } = this.props.notify;
		return (
			<div className="row">
				<div className="col-md-6 mx-auto">
					<div className="card">
						<div className="card-body">
							{message ? (
								<Alert message={message} messageType={messageType} />
							) : null}
							<h1 className="text-center pb-4 pt-3">
								<span className="text-primary">
									<i className="fa fa-lock fa-fw" aria-hidden="true"></i>
									Register
								</span>
							</h1>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										className="form-control"
										name="email"
										required
										onChange={this.handleChange}
										value={this.state.email}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="password">Password</label>
									<input
										type="password"
										className="form-control"
										name="password"
										required
										onChange={this.handleChange}
										value={this.state.password}
									/>
								</div>
								<input
									type="submit"
									value="Register"
									className="btn btn-info btn-block"
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Register.propTypes = {
	firebase: PropTypes.object.isRequired,
	notify: PropTypes.object.isRequired,
	notifyUser: PropTypes.func.isRequired,
};

export default compose(
	firebaseConnect(),
	connect(
		(state, props) => ({
			notify: state.notify,
			settings: state.settings,
		}),
		{ notifyUser }
	)
)(Register);
