import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Sidebar = (props) => {
	return (
		<Link to="/client/add" className=" btn btn-success btn-block">
			<i class="fa fa-plus" aria-hidden="true"></i> New
		</Link>
	);
};

Sidebar.propTypes = {};

export default Sidebar;
