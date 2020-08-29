import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../actions";

const Filter = ({ searchAll, inputChangeContact }) => (
  <div>
  <input type="text" onChange={e => inputChangeContact(e.target.value)} />
  <ul>
    {searchAll.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name} {number}</p>
      </li>
    ))}
  </ul>
  </div>
);

const mapStateToProps = (state) => ({
  searchAll: state.contacts.filter,
});

const mapDispatchToProps = {
  inputChangeContact: actions.inputChangeContact,
};

Filter.propTypes = {
  searchAll: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
