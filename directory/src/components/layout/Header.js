import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Header = ({ title }) => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-2 py-0">
			<div className="container">
				<Link to="/" className="navbar-brand">
					{title}
				</Link>
				<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								<i className="fa fa-home mr-1"></i>Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact/add" className="nav-link">
								<i className="fa fa-plus mr-1"></i>Add Contact
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								<i className="fa fa-question mr-1"></i> About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

Header.defaultProps = {
	title: "My Directory App"
};

// Validate data coming in
Header.propTypes = {
	title: PropTypes.string.isRequired
};
export default Header;
