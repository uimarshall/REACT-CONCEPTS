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
								Home
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
