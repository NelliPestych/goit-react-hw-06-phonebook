import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./FadeStyles.css";
import ContactsItem from "./ContactsItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../actions";

const Contacts = ({ contactsAll, onRemoveTask }) => (
  <TransitionGroup component="ul" className="fade">
    {contactsAll.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={250} classNames="fade">
        <ContactsItem
          id={id}
          name={name}
          number={number}
          onRemoveTask={() => onRemoveTask(id)}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

Contacts.propTypes = {
  contactsAll: PropTypes.array.isRequired,
  onRemoveTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contactsAll: state.contacts.contactList,
});

const mapDispatchToProps = {
  onRemoveTask: actions.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
