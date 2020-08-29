import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../actions";

const InputChangeNumber = ({ inputChangeNumber }) => (
  <div>
    <p>Number</p>
    <input
      type="text"
      onChange={(e) => inputChangeNumber(e.target.value)}
    />
  </div>
);

InputChangeNumber.propTypes = {
  inputChangeNumber: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  inputChangeNumber: actions.inputChangeNumber,
};

export default connect(null, mapDispatchToProps)(InputChangeNumber);
