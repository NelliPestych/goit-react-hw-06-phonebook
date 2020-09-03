import React from "react";
import PropTypes from "prop-types";
import actions from "../actions";
import { connect } from "react-redux";

const ContactsItem = ({ name, number, onRemoveTask }) => (
    <li>
      <p>
        {name} {number}
      </p>
      <button type="button" onClick={onRemoveTask}>
        Удалить
      </button>
    </li>
);

ContactsItem.propTypes = {
  // id: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // number: PropTypes.string.isRequired,
  onRemoveTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find(item => item.id === ownProps.id);
   return {
     ...item,
   };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveTask: () => dispatch(actions.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsItem);