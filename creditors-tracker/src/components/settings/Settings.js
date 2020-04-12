import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import {
	setDisableBalanceOnAdd,
	setDisableBalanceOnEdit,
	setAllowedReg,
} from "../../actions/settingsAction";

class Settings extends Component {
	disableBalanceOnAddChange = () => {
		const { setDisableBalanceOnAdd } = this.props;
		setDisableBalanceOnAdd();
	};
	disableBalanceOnEditChange = () => {
		const { setDisableBalanceOnEdit } = this.props;
		setDisableBalanceOnEdit();
	};
	allowRegistrationChange = () => {
		const { setAllowedReg } = this.props;
		setAllowedReg();
	};
	render() {
		const {
			disableBalanceOnAdd,
			disableBalanceOnEdit,
			allowRegistration,
		} = this.props.settings;
		return (
			<div>
				<div className="row">
					<div className="col-md-6">
						<Link to="/" className="btn btn-link">
							<i className="fa fa-arrow-circle-left"></i> Back To Dashboard
						</Link>
					</div>
				</div>
				<div className="card">
					<div className="card-header">Edit Settings</div>
					<div className="card-body">
						<form>
							<div className="form-group">
								<label htmlFor="allowRegistration">Allow Registration</label>
								<input
									type="checkbox"
									name="allowRegistration"
									checked={!!allowRegistration}
									onChange={this.allowRegistrationChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="disableBalanceOnAdd">
									Disable Balance On Add
								</label>
								<input
									type="checkbox"
									name="disableBalanceOnAdd"
									checked={!!disableBalanceOnAdd}
									onChange={this.disableBalanceOnAddChange}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="disableBalanceOnEdit">
									Disable Balance On Edit
								</label>
								<input
									type="checkbox"
									name="disableBalanceOnEdit"
									checked={!!disableBalanceOnEdit}
									onChange={this.disableBalanceOnEditChange}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Settings.propTypes = {
	settings: PropTypes.object.isRequired,
	setDisableBalanceOnAdd: PropTypes.func.isRequired,
	setDisableBalanceOnEdit: PropTypes.func.isRequired,
	setAllowedReg: PropTypes.func.isRequired,
};

export default connect(
	(state, props) => ({
		auth: state.firebase.auth,
		settings: state.settings,
	}),
	{ setDisableBalanceOnAdd, setDisableBalanceOnEdit, setAllowedReg }
)(Settings);
