import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../actions";

const InputChange = ({ inputChangeName }) => (
  <div>
    <p>Name</p>
    <input
      type="text"
      onChange={(e) => inputChangeName(e.target.value)}
    />
  </div>
);

InputChange.propTypes = {
  inputChangeName: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  inputChangeName: actions.inputChangeName,
};

export default connect(null, mapDispatchToProps)(InputChange);
