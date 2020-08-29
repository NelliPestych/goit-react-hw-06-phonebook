import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../actions";

const AddNomber = ({ nomberEditor }) => (
  <div>
    <button type="submit" onClick={nomberEditor}>
      ДОБАВИТЬ
    </button>
  </div>
);

AddNomber.propTypes = {
  nomberEditor: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  nomberEditor: actions.addContact,
};

export default connect(null, mapDispatchToProps)(AddNomber);
