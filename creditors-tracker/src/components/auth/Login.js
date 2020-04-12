import React, { Component } from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase"; //use firebaseConnect for auth
import PropTypes from "prop-types";
import { notifyUser } from "../../actions/notifyAction";
import Alert from "../../utils/Alert";

class Login extends Component {
	state = {
		email: "",
		password: "",
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { firebase, history, notifyUser } = this.props;
		const { email, password } = this.state;
		firebase
			.login({
				email,
				password,
			})
			.then(() => history.push("/"))
			.catch((err) => notifyUser("Invalid login Credentials", "error"));
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
									Login
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
									value="Submit"
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

Login.propTypes = {
	firebase: PropTypes.object.isRequired,
};

export default compose(
	firebaseConnect(),
	connect(
		(state, props) => ({
			notify: state.notify,
		}),
		{ notifyUser }
	)
)(Login);
