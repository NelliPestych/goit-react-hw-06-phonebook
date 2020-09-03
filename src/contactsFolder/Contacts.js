import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./FadeStyles.css";
import ContactsItem from "./ContactsItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Contacts = ({ contactsAll }) => (
  <TransitionGroup component="ul" className="fade">
    {contactsAll.map(({ id }) => (
      <CSSTransition key={id} timeout={250} classNames="fade">
        <ContactsItem
          id={id}
          key={id}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

Contacts.propTypes = {
  contactsAll: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
const visibleContacts = items.filter(contact =>
  contact.name.toLowerCase().includes(normalizedFilter),
  );
  return {
    contactsAll: visibleContacts,
  }
};

export default connect(mapStateToProps)(Contacts);
