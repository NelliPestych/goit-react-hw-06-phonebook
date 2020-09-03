import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../actions";

const Filter = ({ searchAll, inputChangeContact }) => (
  <div>
    <input
      type="text"
      value={searchAll}
      onChange={(e) => inputChangeContact(e.target.value)}
    />
  </div>
);

const mapStateToProps = (state) => ({
  searchAll: state.contacts.filter,
});

const mapDispatchToProps = {
  inputChangeContact: actions.inputChangeContact,
};

Filter.propTypes = {
  searchAll: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
