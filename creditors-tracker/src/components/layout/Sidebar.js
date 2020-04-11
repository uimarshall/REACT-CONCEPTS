import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Sidebar = () => {
	return (
		<Link to="/client/add" className=" btn btn-success btn-block">
			<i className="fa fa-plus" aria-hidden="true"></i> Add Members
		</Link>
	);
};

Sidebar.propTypes = {};

export default Sidebar;
