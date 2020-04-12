import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import { firebaseConnect } from "react-redux-firebase";
class Navbar extends Component {
	state = {
		isAuthenticated: false,
	};
	static getDerivedStateFromProps(props, state) {
		const { auth } = props;
		if (auth.uid) {
			return { isAuthenticated: true };
		} else {
			return { isAuthenticated: false };
		}
	}
	handleLogout = (e) => {
		e.preventDefault();
		const { firebase } = this.props;
		firebase.logout();
	};
	render() {
		const { isAuthenticated } = this.state;
		const { auth } = this.props;
		const { allowRegistration } = this.props.settings;
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-info mb-4">
				<Link className="navbar-brand" href="#">
					Creditor Tracker
				</Link>
				<button
					className="navbar-toggler d-lg-none"
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavId">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="collapsibleNavId">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						{isAuthenticated ? (
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Dashboard
								</Link>
							</li>
						) : null}
					</ul>

					{isAuthenticated ? (
						<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
							<li className="nav-item">
								<a href="#!" className="nav-link">
									{auth.email}
								</a>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/settings">
									Settings
								</Link>
							</li>
							<li className="nav-item">
								<a href="#!" className="nav-link" onClick={this.handleLogout}>
									Logout
								</a>
							</li>
						</ul>
					) : null}
					{allowRegistration && !isAuthenticated ? (
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to="/login" className="nav-link">
									Login
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/register" className="nav-link">
									Register
								</Link>
							</li>
						</ul>
					) : null}
				</div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	firestore: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	settings: PropTypes.object.isRequired,
};

export default compose(
	firebaseConnect(),
	connect((state, props) => ({
		auth: state.firebase.auth,
		settings: state.settings,
	}))
)(Navbar);
